const STORAGE_KEY = "popupComposerStateV2";
const PREVIEW_LENGTH_MS = 30000;
const FALLBACK_MAX_START_MS = 180000;
const COPYRIGHT_TEXT = "© Hoàng Anh";

const state = {
  items: [],
  activeKey: "",
  activeStartMs: 0,
  currentPreviewMs: 0,
  startsByKey: new Map(),
  selectedFromStorage: null,
  audio: null,
  timer: null,
  isPlaying: false,
  isLoadingPreview: false,
  previewMessage: "",
  previewMessageType: "",
  previewUrlsByKey: new Map(),
  panel: null,
};

const originalSendMessage = chrome.runtime.sendMessage.bind(chrome.runtime);
const originalStorageSet = chrome.storage.local.set.bind(chrome.storage.local);

function clamp(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.max(min, Math.min(max, Math.floor(number)));
}

function formatMs(value) {
  const seconds = Math.max(0, Math.floor((Number(value) || 0) / 1000));
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function trackKey(track, fallbackTitle, fallbackArtist) {
  if (!track) return `${normalize(fallbackTitle)}|${normalize(fallbackArtist)}`;
  return String(
    track.id ||
      track.songId ||
      track.audioClusterId ||
      `${normalize(track.title || fallbackTitle)}|${normalize(track.artist || fallbackArtist)}`,
  );
}

function getSegmentMax(track) {
  const duration = Number(track?.durationMs);
  if (Number.isFinite(duration) && duration > PREVIEW_LENGTH_MS) {
    return Math.max(0, duration - PREVIEW_LENGTH_MS);
  }
  return duration > 0 ? 0 : FALLBACK_MAX_START_MS;
}

function getSegmentEnd(track) {
  return Math.min(
    Number(track?.durationMs) || state.activeStartMs + PREVIEW_LENGTH_MS,
    state.activeStartMs + PREVIEW_LENGTH_MS,
  );
}

function hasPreviewForTrack(track) {
  return Boolean(getTrackPreviewUrl(track) || state.previewUrlsByKey.has(state.activeKey));
}

function getSegmentSignature(track) {
  const signature = [
    state.activeKey,
    state.activeStartMs,
    getSegmentMax(track),
    getSegmentEnd(track),
    hasPreviewForTrack(track),
    state.isPlaying,
    state.isLoadingPreview,
    state.previewMessage,
    state.previewMessageType,
  ].join("|");
  return signature;
}

function withSegmentOnMusic(track) {
  if (!track || typeof track !== "object") return track;
  return { ...track, songStartTimeMs: state.activeStartMs };
}

function patchCreateNoteMessage(message) {
  if (!message || typeof message !== "object") return message;
  if ("CREATE_NOTE" !== message.type || !message.selectedMusic) return message;
  return { ...message, selectedMusic: withSegmentOnMusic(message.selectedMusic) };
}

function patchStoredState(value) {
  if (!value || typeof value !== "object") return value;
  if (value.selectedMusic) {
    return { ...value, selectedMusic: withSegmentOnMusic(value.selectedMusic) };
  }
  if (value.scheduledNote?.selectedMusic) {
    return {
      ...value,
      scheduledNote: {
        ...value.scheduledNote,
        selectedMusic: withSegmentOnMusic(value.scheduledNote.selectedMusic),
      },
    };
  }
  return value;
}

function patchedSendMessage(message, ...rest) {
  const callbackIndex = rest.findIndex((item) => "function" === typeof item);
  const patchedMessage = patchCreateNoteMessage(message);

  if (message?.type === "SEARCH_MUSIC" && callbackIndex >= 0) {
    const originalCallback = rest[callbackIndex];
    rest[callbackIndex] = (response) => {
      if (response?.success && Array.isArray(response.items)) {
        state.items = response.items;
      }
      originalCallback(response);
    };
  }

  return originalSendMessage(patchedMessage, ...rest);
}

function patchedStorageSet(value, ...rest) {
  const patchedValue = {};
  for (const [key, entry] of Object.entries(value || {})) {
    patchedValue[key] = key === STORAGE_KEY || key === "scheduledNote" ? patchStoredState(entry) : entry;
  }
  return originalStorageSet(patchedValue, ...rest);
}

try {
  chrome.runtime.sendMessage = patchedSendMessage;
  chrome.storage.local.set = patchedStorageSet;
} catch (error) {
  console.warn("[FB Note] Music segment hook could not patch Chrome APIs.", error);
}

function readSelectedDom() {
  const selected = document.querySelector(".music-selected");
  if (!selected) return null;
  const title = selected.querySelector(".music-selected-text strong")?.textContent || "";
  const artist = selected.querySelector(".music-selected-text span")?.textContent || "";
  return { selected, title, artist };
}

function findActiveTrack(title, artist) {
  const titleKey = normalize(title);
  const artistKey = normalize(artist);
  const stored = state.selectedFromStorage;
  const storedMatches =
    stored &&
    normalize(stored.title) === titleKey &&
    (!artistKey || normalize(stored.artist || "Unknown artist") === artistKey);
  const fromList = state.items.find(
    (item) =>
      normalize(item.title) === titleKey &&
      normalize(item.artist || "Unknown artist") === artistKey,
  );
  return storedMatches ? { ...fromList, ...stored } : fromList || { title, artist };
}

function getTrackPreviewUrl(track) {
  return (
    track?.previewUrl ||
    track?.audioUrl ||
    track?.playableUrl ||
    track?.playable_url ||
    track?.playable_url_quality_hd ||
    track?.progressiveUrl ||
    track?.progressive_url ||
    null
  );
}

function mergePreviewUrl(track, url) {
  if (!url) return track;
  const key = trackKey(track, track?.title, track?.artist);
  state.previewUrlsByKey.set(key, url);
  state.items = state.items.map((item) =>
    trackKey(item, item.title, item.artist) === key ? { ...item, previewUrl: url } : item,
  );
  if (state.selectedFromStorage && trackKey(state.selectedFromStorage) === key) {
    state.selectedFromStorage = { ...state.selectedFromStorage, previewUrl: url };
  }
  return { ...track, previewUrl: url };
}

function findUrlDeep(value) {
  const seen = new Set();
  const stack = [[value, ""]];
  while (stack.length > 0) {
    const [item, path] = stack.pop();
    if (!item || typeof item !== "object" || seen.has(item)) continue;
    seen.add(item);
    for (const [key, entry] of Object.entries(item)) {
      const nextPath = `${path} ${key}`.toLowerCase();
      if (typeof entry === "string" && /^https?:\/\//.test(entry)) {
        const url = entry.toLowerCase();
        const looksLikeMedia =
          /(audio|playable|preview|music|sound|source|progressive|dash|stream|media|url|uri|src)/.test(
            nextPath,
          ) || /\.(mp3|m4a|mp4|aac|opus)(\?|$)/.test(url);
        const looksLikeImage = /(image|photo|cover|thumbnail|artwork|sprite|icon|avatar)/.test(
          nextPath,
        );
        if (looksLikeMedia && !looksLikeImage) return entry;
      } else if (entry && typeof entry === "object") {
        stack.push([entry, nextPath]);
      }
    }
  }
  return null;
}

function requestMessage(message) {
  return new Promise((resolve) => {
    originalSendMessage(message, (response) => {
      if (chrome.runtime.lastError) {
        resolve({ success: false, error: chrome.runtime.lastError.message });
      } else {
        resolve(response);
      }
    });
  });
}

async function searchPreviewFromFacebook(track) {
  const tokenResponse = await requestMessage({ type: "GET_TOKENS" });
  if (!tokenResponse?.tokens) return null;
  const query = [track?.title, track?.artist].filter(Boolean).join(" ").trim() || track?.title || "";
  if (!query) return null;
  const response = await requestMessage({
    type: "SEARCH_MUSIC",
    tokens: tokenResponse.tokens,
    query,
    count: 20,
  });
  if (!response?.success || !Array.isArray(response.items)) return null;
  state.items = response.items;
  const titleKey = normalize(track?.title);
  const artistKey = normalize(track?.artist || "Unknown artist");
  const match =
    response.items.find(
      (item) =>
        normalize(item.title) === titleKey &&
        (!artistKey || normalize(item.artist || "Unknown artist") === artistKey),
    ) || response.items[0];
  return getTrackPreviewUrl(match) || findUrlDeep(match);
}

function getActiveFacebookMediaUrl() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs?.[0];
      if (!tab?.id || !/https?:\/\/([^/]+\.)?(facebook|messenger)\.com\//i.test(tab.url || "")) {
        resolve(null);
        return;
      }
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: () => {
            const mediaElements = Array.from(document.querySelectorAll("audio,video"));
            for (const media of mediaElements) {
              const src = media.currentSrc || media.src;
              if (src && /^https?:\/\//.test(src)) return src;
              const source = media.querySelector("source[src]");
              if (source?.src && /^https?:\/\//.test(source.src)) return source.src;
            }
            const resources = performance
              .getEntriesByType("resource")
              .map((entry) => entry.name)
              .reverse();
            return (
              resources.find((url) => {
                const lower = String(url || "").toLowerCase();
                return (
                  /^https?:\/\//.test(lower) &&
                  !/(image|photo|cover|thumbnail|sprite|avatar|\.jpg|\.png|\.webp|\.gif)/.test(lower) &&
                  /(audio|music|sound|playable|preview|dash|progressive|\.mp3|\.m4a|\.mp4|\.aac|\.opus)/.test(
                    lower,
                  )
                );
              }) || null
            );
          },
        },
        (results) => {
          if (chrome.runtime.lastError) resolve(null);
          else resolve(results?.[0]?.result || null);
        },
      );
    });
  });
}

async function resolvePreviewUrl(track) {
  const key = trackKey(track, track?.title, track?.artist);
  const directUrl = getTrackPreviewUrl(track);
  if (directUrl) return directUrl;
  const cachedUrl = state.previewUrlsByKey.get(key);
  if (cachedUrl) return cachedUrl;
  const searchUrl = await searchPreviewFromFacebook(track);
  if (searchUrl) {
    mergePreviewUrl(track, searchUrl);
    return searchUrl;
  }
  const pageMediaUrl = await getActiveFacebookMediaUrl();
  if (pageMediaUrl) {
    mergePreviewUrl(track, pageMediaUrl);
    return pageMediaUrl;
  }
  return null;
}

function stopPreview() {
  if (state.audio) state.audio.pause();
  if (state.timer) clearTimeout(state.timer);
  state.timer = null;
  state.isPlaying = false;
  renderSegmentPanel();
}

async function playPreview(track) {
  let url = getTrackPreviewUrl(track);
  state.previewMessage = "";
  state.previewMessageType = "";
  if (!url) {
    state.isLoadingPreview = true;
    renderSegmentPanel();
    url = await resolvePreviewUrl(track);
    state.isLoadingPreview = false;
  }

  if (state.isPlaying) {
    stopPreview();
    return;
  }

  if (!url) {
    state.previewMessage =
      "Chua bat duoc URL preview. Thu bam preview trong Facebook roi quay lai bam Nghe thu.";
    state.previewMessageType = "is-error";
    renderSegmentPanel();
    return;
  }

  if (!state.audio) state.audio = new Audio();
  const audio = state.audio;
  const startSeconds = state.activeStartMs / 1000;
  audio.pause();
  audio.src = url;
  audio.preload = "auto";

  state.currentPreviewMs = state.activeStartMs;

  const seekAndPlay = async () => {
    try {
      if (Number.isFinite(audio.duration) && startSeconds < audio.duration) {
        audio.currentTime = startSeconds;
      }
    } catch (error) {}
    await audio.play();
  };

  audio.ontimeupdate = () => {
    if (state.isPlaying && audio.currentTime > 0) {
      state.currentPreviewMs = audio.currentTime * 1000;
      const range = state.panel?.querySelector(".music-segment-range");
      if (range && document.activeElement !== range) {
        range.value = state.currentPreviewMs;
      }
      const timeDisplay = state.panel?.querySelector(".music-segment-current-time");
      if (timeDisplay) timeDisplay.textContent = formatMs(state.currentPreviewMs);
    }
  };

  try {
    if (audio.readyState >= 1) await seekAndPlay();
    else {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error("Preview timeout")), 8000);
        audio.onloadedmetadata = () => {
          clearTimeout(timeout);
          resolve();
        };
        audio.onerror = () => {
          clearTimeout(timeout);
          reject(new Error("Preview failed"));
        };
      });
      await seekAndPlay();
    }
    state.isPlaying = true;
    state.timer = setTimeout(stopPreview, PREVIEW_LENGTH_MS);
    audio.onended = stopPreview;
    audio.onerror = () => {
      state.previewMessage = "Khong phat duoc preview nay.";
      state.previewMessageType = "is-error";
      stopPreview();
    };
    renderSegmentPanel();
  } catch (error) {
    state.previewMessage = "Trinh duyet chan hoac Facebook khong cho nghe thu.";
    state.previewMessageType = "is-error";
    renderSegmentPanel();
  }
}

function updateStart(track, value) {
  const max = getSegmentMax(track);
  state.activeStartMs = clamp(value, 0, max);
  state.startsByKey.set(trackKey(track, track?.title, track?.artist), state.activeStartMs);
  state.selectedFromStorage = state.selectedFromStorage
    ? { ...state.selectedFromStorage, songStartTimeMs: state.activeStartMs }
    : state.selectedFromStorage;
  if (state.isPlaying && state.audio) {
    const startSeconds = state.activeStartMs / 1000;
    try {
      if (Number.isFinite(state.audio.duration) && startSeconds < state.audio.duration) {
        state.audio.currentTime = startSeconds;
      }
    } catch (error) {}
    if (state.timer) clearTimeout(state.timer);
    state.timer = setTimeout(stopPreview, PREVIEW_LENGTH_MS);
  }
  renderSegmentPanel();
}

function buildSegmentPanel(track) {
  const max = getSegmentMax(track);
  const duration = Number(track?.durationMs) || FALLBACK_MAX_START_MS;
  const end = getSegmentEnd(track);
  const canMove = max > 0;
  const hasPreview = hasPreviewForTrack(track);
  const previewLabel = state.isLoadingPreview ? "Dang lay preview" : state.isPlaying ? "Dung" : "Nghe thu";
  const previewIcon = state.isLoadingPreview
    ? `<span class="music-segment-spinner" aria-hidden="true"></span>`
    : state.isPlaying
      ? `<svg class="music-segment-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="6" y="6" width="12" height="12" rx="2"></rect>
        </svg>`
      : `<svg class="music-segment-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M8 5v14l11-7z"></path>
        </svg>`;
  const statusClass =
    state.previewMessageType || (state.isPlaying || state.isLoadingPreview ? "is-playing" : "");
  const statusText =
    state.previewMessage ||
    (state.isLoadingPreview
      ? "Dang tim preview cua bai nay..."
      : state.isPlaying
        ? "Dang nghe thu..."
        : hasPreview
          ? "San sang nghe thu."
          : "Bam Nghe thu de lay preview rieng cho bai nay.");

  const currentSliderValue = state.isPlaying ? state.currentPreviewMs : state.activeStartMs;

  const panel = document.createElement("div");
  panel.className = "music-segment-panel";
  panel.dataset.segmentSignature = getSegmentSignature(track);
  panel.innerHTML = `
    <div class="music-segment-header">
      <span class="music-segment-title">Doan nhac tao note</span>
      <span class="music-segment-time selected-segment-time">${formatMs(state.activeStartMs)} - ${formatMs(end)}</span>
    </div>
    <div class="music-segment-header">
      <span class="music-segment-title">Thoi gian phat</span>
      <span class="music-segment-time music-segment-current-time">${formatMs(currentSliderValue)}</span>
    </div>
    <input class="music-segment-range" type="range" min="0" max="${duration}" step="1000" value="${currentSliderValue}" ${canMove ? "" : "disabled"} />
    <div class="music-segment-times">
      <span class="music-segment-time">${formatMs(0)}</span>
      <span class="music-segment-time">${formatMs(duration)}</span>
    </div>
    <div class="music-segment-actions">
      <button class="music-segment-btn" type="button" data-pick-current ${canMove ? "" : "disabled"}>Chon tai day</button>
      <button class="music-segment-btn music-segment-preview-btn" type="button" data-preview aria-label="${previewLabel}" title="${previewLabel}" ${state.isLoadingPreview ? "disabled" : ""}>${previewIcon}</button>
    </div>
    <div class="music-segment-status ${statusClass}">
      ${statusText}
    </div>
  `;

  panel.querySelector(".music-segment-range")?.addEventListener("input", (event) => {
    const val = Number(event.currentTarget.value);
    state.currentPreviewMs = val;
    panel.querySelector(".music-segment-current-time").textContent = formatMs(val);
    
    if (state.isPlaying && state.audio) {
      if (Number.isFinite(state.audio.duration)) {
        state.audio.currentTime = val / 1000;
        if (state.timer) clearTimeout(state.timer);
        state.timer = setTimeout(stopPreview, PREVIEW_LENGTH_MS);
      }
    } else {
      updateStart(track, val);
    }
  });

  panel.querySelector("[data-pick-current]")?.addEventListener("click", () => {
    updateStart(track, state.currentPreviewMs);
  });

  panel.querySelector("[data-preview]")?.addEventListener("click", () => playPreview(track));
  return panel;
}

function renderSegmentPanel() {
  const selectedDom = readSelectedDom();
  const existing = document.querySelector(".music-segment-panel");
  if (!selectedDom) {
    if (existing) existing.remove();
    state.panel = null;
    if (state.isPlaying) stopPreview();
    return;
  }

  const track = findActiveTrack(selectedDom.title, selectedDom.artist);
  const key = trackKey(track, selectedDom.title, selectedDom.artist);
  if (key !== state.activeKey) {
    state.activeKey = key;
    const savedStart = state.startsByKey.has(key)
      ? state.startsByKey.get(key)
      : track?.songStartTimeMs || 0;
    state.activeStartMs = clamp(savedStart, 0, getSegmentMax(track));
    if (state.isPlaying) stopPreview();
  }

  const signature = getSegmentSignature(track);
  if (existing?.dataset.segmentSignature === signature) {
    state.panel = existing;
    return;
  }

  const panel = buildSegmentPanel(track);
  if (existing) existing.replaceWith(panel);
  else selectedDom.selected.insertAdjacentElement("afterend", panel);
  state.panel = panel;
}

function renderCopyrightMark() {
  const container = document.querySelector(".container");
  if (!container) return;

  let mark = document.querySelector(".hoang-anh-copyright");
  if (!mark) {
    mark = document.createElement("div");
    mark.className = "hoang-anh-copyright";
    mark.textContent = COPYRIGHT_TEXT;
    mark.setAttribute("aria-label", COPYRIGHT_TEXT);
  }

  if (mark.parentElement !== container || mark !== container.lastElementChild) {
    container.appendChild(mark);
  }
}

function renderPopupEnhancements() {
  renderSegmentPanel();
  renderCopyrightMark();
}

chrome.storage.local.get([STORAGE_KEY], (result) => {
  const selectedMusic = result?.[STORAGE_KEY]?.selectedMusic;
  if (selectedMusic) {
    state.selectedFromStorage = selectedMusic;
    state.activeStartMs = clamp(selectedMusic.songStartTimeMs || 0, 0, getSegmentMax(selectedMusic));
  }
  renderPopupEnhancements();
});

const observer = new MutationObserver(() => renderPopupEnhancements());
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener("beforeunload", stopPreview);
