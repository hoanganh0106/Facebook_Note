# Facebook Note

A browser extension that allows you to take notes directly on Facebook.

## Features
- Take and manage notes via the extension popup.
- Seamlessly integrates with your Facebook browsing experience.

## Installation
1. Clone or download this repository.
2. Open your browser's extension management page (e.g., `chrome://extensions/` for Chrome/Edge).
3. Enable **Developer mode**.
4. Click on **Load unpacked** and select the `Facebook_Note` directory.

## File Structure
- `manifest.json`: Configuration and metadata for the extension.
- `popup.html` / `popup.js`: The user interface for the extension's popup.
- `background.js`: Service worker for background tasks.
- `content.js`: Script running in the context of Facebook pages to interact with the DOM if needed.

## License
MIT
