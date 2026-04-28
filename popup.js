function e(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
            ? (t.credentials = "omit")
            : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var t,
  n,
  r,
  a,
  l = { exports: {} },
  i = {},
  o = { exports: {} },
  u = {};
function s() {
  if (t) return u;
  t = 1;
  var e = Symbol.for("react.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    i = Symbol.for("react.provider"),
    o = Symbol.for("react.context"),
    s = Symbol.for("react.forward_ref"),
    c = Symbol.for("react.suspense"),
    d = Symbol.for("react.memo"),
    f = Symbol.for("react.lazy"),
    p = Symbol.iterator,
    m = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    h = Object.assign,
    g = {};
  function y(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = g),
      (this.updater = n || m));
  }
  function v() {}
  function b(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = g),
      (this.updater = n || m));
  }
  ((y.prototype.isReactComponent = {}),
    (y.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (y.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (v.prototype = y.prototype));
  var k = (b.prototype = new v());
  ((k.constructor = b), h(k, y.prototype), (k.isPureReactComponent = !0));
  var w = Array.isArray,
    x = Object.prototype.hasOwnProperty,
    S = { current: null },
    C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(t, n, r) {
    var a,
      l = {},
      i = null,
      o = null;
    if (null != n)
      for (a in (void 0 !== n.ref && (o = n.ref),
      void 0 !== n.key && (i = "" + n.key),
      n))
        x.call(n, a) && !C.hasOwnProperty(a) && (l[a] = n[a]);
    var u = arguments.length - 2;
    if (1 === u) l.children = r;
    else if (1 < u) {
      for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
      l.children = s;
    }
    if (t && t.defaultProps)
      for (a in (u = t.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
    return {
      $$typeof: e,
      type: t,
      key: i,
      ref: o,
      props: l,
      _owner: S.current,
    };
  }
  function E(t) {
    return "object" == typeof t && null !== t && t.$$typeof === e;
  }
  var _ = /\/+/g;
  function j(e, t) {
    return "object" == typeof e && null !== e && null != e.key
      ? (function (e) {
          var t = { "=": "=0", ":": "=2" };
          return (
            "$" +
            e.replace(/[=:]/g, function (e) {
              return t[e];
            })
          );
        })("" + e.key)
      : t.toString(36);
  }
  function T(t, r, a, l, i) {
    var o = typeof t;
    ("undefined" !== o && "boolean" !== o) || (t = null);
    var u = !1;
    if (null === t) u = !0;
    else
      switch (o) {
        case "string":
        case "number":
          u = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case e:
            case n:
              u = !0;
          }
      }
    if (u)
      return (
        (i = i((u = t))),
        (t = "" === l ? "." + j(u, 0) : l),
        w(i)
          ? ((a = ""),
            null != t && (a = t.replace(_, "$&/") + "/"),
            T(i, r, a, "", function (e) {
              return e;
            }))
          : null != i &&
            (E(i) &&
              (i = (function (t, n) {
                return {
                  $$typeof: e,
                  type: t.type,
                  key: n,
                  ref: t.ref,
                  props: t.props,
                  _owner: t._owner,
                };
              })(
                i,
                a +
                  (!i.key || (u && u.key === i.key)
                    ? ""
                    : ("" + i.key).replace(_, "$&/") + "/") +
                  t,
              )),
            r.push(i)),
        1
      );
    if (((u = 0), (l = "" === l ? "." : l + ":"), w(t)))
      for (var s = 0; s < t.length; s++) {
        var c = l + j((o = t[s]), s);
        u += T(o, r, a, c, i);
      }
    else if (
      ((c = (function (e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
            ? e
            : null;
      })(t)),
      "function" == typeof c)
    )
      for (t = c.call(t), s = 0; !(o = t.next()).done; )
        u += T((o = o.value), r, a, (c = l + j(o, s++)), i);
    else if ("object" === o)
      throw (
        (r = String(t)),
        Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === r
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : r) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return u;
  }
  function P(e, t, n) {
    if (null == e) return e;
    var r = [],
      a = 0;
    return (
      T(e, r, "", "", function (e) {
        return t.call(n, e, a++);
      }),
      r
    );
  }
  function z(e) {
    if (-1 === e._status) {
      var t = e._result;
      ((t = t()).then(
        function (t) {
          (0 !== e._status && -1 !== e._status) ||
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (0 !== e._status && -1 !== e._status) ||
            ((e._status = 2), (e._result = t));
        },
      ),
        -1 === e._status && ((e._status = 0), (e._result = t)));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
  }
  var M = { current: null },
    L = { transition: null },
    F = {
      ReactCurrentDispatcher: M,
      ReactCurrentBatchConfig: L,
      ReactCurrentOwner: S,
    };
  function R() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (u.Children = {
      map: P,
      forEach: function (e, t, n) {
        P(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          P(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          P(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!E(e))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return e;
      },
    }),
    (u.Component = y),
    (u.Fragment = r),
    (u.Profiler = l),
    (u.PureComponent = b),
    (u.StrictMode = a),
    (u.Suspense = c),
    (u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
    (u.act = R),
    (u.cloneElement = function (t, n, r) {
      if (null == t)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            t +
            ".",
        );
      var a = h({}, t.props),
        l = t.key,
        i = t.ref,
        o = t._owner;
      if (null != n) {
        if (
          (void 0 !== n.ref && ((i = n.ref), (o = S.current)),
          void 0 !== n.key && (l = "" + n.key),
          t.type && t.type.defaultProps)
        )
          var u = t.type.defaultProps;
        for (s in n)
          x.call(n, s) &&
            !C.hasOwnProperty(s) &&
            (a[s] = void 0 === n[s] && void 0 !== u ? u[s] : n[s]);
      }
      var s = arguments.length - 2;
      if (1 === s) a.children = r;
      else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        a.children = u;
      }
      return { $$typeof: e, type: t.type, key: l, ref: i, props: a, _owner: o };
    }),
    (u.createContext = function (e) {
      return (
        ((e = {
          $$typeof: o,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }).Provider = { $$typeof: i, _context: e }),
        (e.Consumer = e)
      );
    }),
    (u.createElement = N),
    (u.createFactory = function (e) {
      var t = N.bind(null, e);
      return ((t.type = e), t);
    }),
    (u.createRef = function () {
      return { current: null };
    }),
    (u.forwardRef = function (e) {
      return { $$typeof: s, render: e };
    }),
    (u.isValidElement = E),
    (u.lazy = function (e) {
      return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: z };
    }),
    (u.memo = function (e, t) {
      return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
    }),
    (u.startTransition = function (e) {
      var t = L.transition;
      L.transition = {};
      try {
        e();
      } finally {
        L.transition = t;
      }
    }),
    (u.unstable_act = R),
    (u.useCallback = function (e, t) {
      return M.current.useCallback(e, t);
    }),
    (u.useContext = function (e) {
      return M.current.useContext(e);
    }),
    (u.useDebugValue = function () {}),
    (u.useDeferredValue = function (e) {
      return M.current.useDeferredValue(e);
    }),
    (u.useEffect = function (e, t) {
      return M.current.useEffect(e, t);
    }),
    (u.useId = function () {
      return M.current.useId();
    }),
    (u.useImperativeHandle = function (e, t, n) {
      return M.current.useImperativeHandle(e, t, n);
    }),
    (u.useInsertionEffect = function (e, t) {
      return M.current.useInsertionEffect(e, t);
    }),
    (u.useLayoutEffect = function (e, t) {
      return M.current.useLayoutEffect(e, t);
    }),
    (u.useMemo = function (e, t) {
      return M.current.useMemo(e, t);
    }),
    (u.useReducer = function (e, t, n) {
      return M.current.useReducer(e, t, n);
    }),
    (u.useRef = function (e) {
      return M.current.useRef(e);
    }),
    (u.useState = function (e) {
      return M.current.useState(e);
    }),
    (u.useSyncExternalStore = function (e, t, n) {
      return M.current.useSyncExternalStore(e, t, n);
    }),
    (u.useTransition = function () {
      return M.current.useTransition();
    }),
    (u.version = "18.3.1"),
    u
  );
}
function c() {
  return (n || ((n = 1), (o.exports = s())), o.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d =
    (a ||
      ((a = 1),
      (l.exports = (function () {
        if (r) return i;
        r = 1;
        var e = c(),
          t = Symbol.for("react.element"),
          n = Symbol.for("react.fragment"),
          a = Object.prototype.hasOwnProperty,
          l =
            e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          o = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, n, r) {
          var i,
            u = {},
            s = null,
            c = null;
          for (i in (void 0 !== r && (s = "" + r),
          void 0 !== n.key && (s = "" + n.key),
          void 0 !== n.ref && (c = n.ref),
          n))
            a.call(n, i) && !o.hasOwnProperty(i) && (u[i] = n[i]);
          if (e && e.defaultProps)
            for (i in (n = e.defaultProps)) void 0 === u[i] && (u[i] = n[i]);
          return {
            $$typeof: t,
            type: e,
            key: s,
            ref: c,
            props: u,
            _owner: l.current,
          };
        }
        return ((i.Fragment = n), (i.jsx = u), (i.jsxs = u), i);
      })())),
    l.exports),
  f = c();
const p = e(f);
var m,
  h,
  g,
  y,
  v,
  b = {},
  k = { exports: {} },
  w = {},
  x = { exports: {} },
  S = {};
function C() {
  if (g) return w;
  g = 1;
  var e = c(),
    t =
      (h ||
        ((h = 1),
        (x.exports =
          (m ||
            ((m = 1),
            (function (e) {
              function t(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                  var r = (n - 1) >>> 1,
                    l = e[r];
                  if (!(0 < a(l, t))) break e;
                  ((e[r] = t), (e[n] = l), (n = r));
                }
              }
              function n(e) {
                return 0 === e.length ? null : e[0];
              }
              function r(e) {
                if (0 === e.length) return null;
                var t = e[0],
                  n = e.pop();
                if (n !== t) {
                  e[0] = n;
                  e: for (var r = 0, l = e.length, i = l >>> 1; r < i; ) {
                    var o = 2 * (r + 1) - 1,
                      u = e[o],
                      s = o + 1,
                      c = e[s];
                    if (0 > a(u, n))
                      s < l && 0 > a(c, u)
                        ? ((e[r] = c), (e[s] = n), (r = s))
                        : ((e[r] = u), (e[o] = n), (r = o));
                    else {
                      if (!(s < l && 0 > a(c, n))) break e;
                      ((e[r] = c), (e[s] = n), (r = s));
                    }
                  }
                }
                return t;
              }
              function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id;
              }
              if (
                "object" == typeof performance &&
                "function" == typeof performance.now
              ) {
                var l = performance;
                e.unstable_now = function () {
                  return l.now();
                };
              } else {
                var i = Date,
                  o = i.now();
                e.unstable_now = function () {
                  return i.now() - o;
                };
              }
              var u = [],
                s = [],
                c = 1,
                d = null,
                f = 3,
                p = !1,
                m = !1,
                h = !1,
                g = "function" == typeof setTimeout ? setTimeout : null,
                y = "function" == typeof clearTimeout ? clearTimeout : null,
                v = "undefined" != typeof setImmediate ? setImmediate : null;
              function b(e) {
                for (var a = n(s); null !== a; ) {
                  if (null === a.callback) r(s);
                  else {
                    if (!(a.startTime <= e)) break;
                    (r(s), (a.sortIndex = a.expirationTime), t(u, a));
                  }
                  a = n(s);
                }
              }
              function k(e) {
                if (((h = !1), b(e), !m))
                  if (null !== n(u)) ((m = !0), M(w));
                  else {
                    var t = n(s);
                    null !== t && L(k, t.startTime - e);
                  }
              }
              function w(t, a) {
                ((m = !1), h && ((h = !1), y(N), (N = -1)), (p = !0));
                var l = f;
                try {
                  for (
                    b(a), d = n(u);
                    null !== d && (!(d.expirationTime > a) || (t && !j()));
                  ) {
                    var i = d.callback;
                    if ("function" == typeof i) {
                      ((d.callback = null), (f = d.priorityLevel));
                      var o = i(d.expirationTime <= a);
                      ((a = e.unstable_now()),
                        "function" == typeof o
                          ? (d.callback = o)
                          : d === n(u) && r(u),
                        b(a));
                    } else r(u);
                    d = n(u);
                  }
                  if (null !== d) var c = !0;
                  else {
                    var g = n(s);
                    (null !== g && L(k, g.startTime - a), (c = !1));
                  }
                  return c;
                } finally {
                  ((d = null), (f = l), (p = !1));
                }
              }
              "undefined" != typeof navigator &&
                void 0 !== navigator.scheduling &&
                void 0 !== navigator.scheduling.isInputPending &&
                navigator.scheduling.isInputPending.bind(navigator.scheduling);
              var x,
                S = !1,
                C = null,
                N = -1,
                E = 5,
                _ = -1;
              function j() {
                return !(e.unstable_now() - _ < E);
              }
              function T() {
                if (null !== C) {
                  var t = e.unstable_now();
                  _ = t;
                  var n = !0;
                  try {
                    n = C(!0, t);
                  } finally {
                    n ? x() : ((S = !1), (C = null));
                  }
                } else S = !1;
              }
              if ("function" == typeof v)
                x = function () {
                  v(T);
                };
              else if ("undefined" != typeof MessageChannel) {
                var P = new MessageChannel(),
                  z = P.port2;
                ((P.port1.onmessage = T),
                  (x = function () {
                    z.postMessage(null);
                  }));
              } else
                x = function () {
                  g(T, 0);
                };
              function M(e) {
                ((C = e), S || ((S = !0), x()));
              }
              function L(t, n) {
                N = g(function () {
                  t(e.unstable_now());
                }, n);
              }
              ((e.unstable_IdlePriority = 5),
                (e.unstable_ImmediatePriority = 1),
                (e.unstable_LowPriority = 4),
                (e.unstable_NormalPriority = 3),
                (e.unstable_Profiling = null),
                (e.unstable_UserBlockingPriority = 2),
                (e.unstable_cancelCallback = function (e) {
                  e.callback = null;
                }),
                (e.unstable_continueExecution = function () {
                  m || p || ((m = !0), M(w));
                }),
                (e.unstable_forceFrameRate = function (e) {
                  0 > e || 125 < e || (E = 0 < e ? Math.floor(1e3 / e) : 5);
                }),
                (e.unstable_getCurrentPriorityLevel = function () {
                  return f;
                }),
                (e.unstable_getFirstCallbackNode = function () {
                  return n(u);
                }),
                (e.unstable_next = function (e) {
                  switch (f) {
                    case 1:
                    case 2:
                    case 3:
                      var t = 3;
                      break;
                    default:
                      t = f;
                  }
                  var n = f;
                  f = t;
                  try {
                    return e();
                  } finally {
                    f = n;
                  }
                }),
                (e.unstable_pauseExecution = function () {}),
                (e.unstable_requestPaint = function () {}),
                (e.unstable_runWithPriority = function (e, t) {
                  switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                      break;
                    default:
                      e = 3;
                  }
                  var n = f;
                  f = e;
                  try {
                    return t();
                  } finally {
                    f = n;
                  }
                }),
                (e.unstable_scheduleCallback = function (r, a, l) {
                  var i = e.unstable_now();
                  switch (
                    ((l =
                      "object" == typeof l &&
                      null !== l &&
                      "number" == typeof (l = l.delay) &&
                      0 < l
                        ? i + l
                        : i),
                    r)
                  ) {
                    case 1:
                      var o = -1;
                      break;
                    case 2:
                      o = 250;
                      break;
                    case 5:
                      o = 1073741823;
                      break;
                    case 4:
                      o = 1e4;
                      break;
                    default:
                      o = 5e3;
                  }
                  return (
                    (r = {
                      id: c++,
                      callback: a,
                      priorityLevel: r,
                      startTime: l,
                      expirationTime: (o = l + o),
                      sortIndex: -1,
                    }),
                    l > i
                      ? ((r.sortIndex = l),
                        t(s, r),
                        null === n(u) &&
                          r === n(s) &&
                          (h ? (y(N), (N = -1)) : (h = !0), L(k, l - i)))
                      : ((r.sortIndex = o),
                        t(u, r),
                        m || p || ((m = !0), M(w))),
                    r
                  );
                }),
                (e.unstable_shouldYield = j),
                (e.unstable_wrapCallback = function (e) {
                  var t = f;
                  return function () {
                    var n = f;
                    f = t;
                    try {
                      return e.apply(this, arguments);
                    } finally {
                      f = n;
                    }
                  };
                }));
            })(S)),
          S))),
      x.exports);
  function n(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var r = new Set(),
    a = {};
  function l(e, t) {
    (i(e, t), i(e + "Capture", t));
  }
  function i(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) r.add(t[e]);
  }
  var o = !(
      "undefined" == typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
    ),
    u = Object.prototype.hasOwnProperty,
    s =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    d = {},
    f = {};
  function p(e, t, n, r, a, l, i) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = i));
  }
  var y = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      y[e] = new p(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      y[t] = new p(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        y[e] = new p(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      y[e] = new p(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        y[e] = new p(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      y[e] = new p(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      y[e] = new p(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      y[e] = new p(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      y[e] = new p(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var v = /[\-:]([a-z])/g;
  function b(e) {
    return e[1].toUpperCase();
  }
  function k(e, t, n, r) {
    var a = y.hasOwnProperty(t) ? y[t] : null;
    (null !== a
      ? 0 !== a.type
      : r ||
        !(2 < t.length) ||
        ("o" !== t[0] && "O" !== t[0]) ||
        ("n" !== t[1] && "N" !== t[1])) &&
      ((function (e, t, n, r) {
        if (
          null == t ||
          (function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
              case "function":
              case "symbol":
                return !0;
              case "boolean":
                return (
                  !r &&
                  (null !== n
                    ? !n.acceptsBooleans
                    : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                      "aria-" !== e)
                );
              default:
                return !1;
            }
          })(e, t, n, r)
        )
          return !0;
        if (r) return !1;
        if (null !== n)
          switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
        return !1;
      })(t, n, a, r) && (n = null),
      r || null === a
        ? (function (e) {
            return (
              !!u.call(f, e) ||
              (!u.call(d, e) && (s.test(e) ? (f[e] = !0) : ((d[e] = !0), !1)))
            );
          })(t) &&
          (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : a.mustUseProperty
          ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
          : ((t = a.attributeName),
            (r = a.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(v, b);
      y[t] = new p(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(v, b);
        y[t] = new p(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(v, b);
      y[t] = new p(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      y[e] = new p(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (y.xlinkHref = new p(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      y[e] = new p(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    N = Symbol.for("react.element"),
    E = Symbol.for("react.portal"),
    _ = Symbol.for("react.fragment"),
    j = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    P = Symbol.for("react.provider"),
    z = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    L = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    R = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    D = Symbol.for("react.offscreen"),
    O = Symbol.iterator;
  function U(e) {
    return null === e || "object" != typeof e
      ? null
      : "function" == typeof (e = (O && e[O]) || e["@@iterator"])
        ? e
        : null;
  }
  var A,
    $ = Object.assign;
  function B(e) {
    if (void 0 === A)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        A = (t && t[1]) || "";
      }
    return "\n" + A + e;
  }
  var V = !1;
  function H(e, t) {
    if (!e || V) return "";
    V = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          "object" == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (s) {
            var r = s;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (s) {
            r = s;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (s) {
          r = s;
        }
        e();
      }
    } catch (s) {
      if (s && r && "string" == typeof s.stack) {
        for (
          var a = s.stack.split("\n"),
            l = r.stack.split("\n"),
            i = a.length - 1,
            o = l.length - 1;
          1 <= i && 0 <= o && a[i] !== l[o];
        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (a[i] !== l[o]) {
            if (1 !== i || 1 !== o)
              do {
                if ((i--, 0 > --o || a[i] !== l[o])) {
                  var u = "\n" + a[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  );
                }
              } while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      ((V = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? B(e) : "";
  }
  function W(e) {
    switch (e.tag) {
      case 5:
        return B(e.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return H(e.type, !1);
      case 11:
        return H(e.type.render, !1);
      case 1:
        return H(e.type, !0);
      default:
        return "";
    }
  }
  function Q(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case _:
        return "Fragment";
      case E:
        return "Portal";
      case T:
        return "Profiler";
      case j:
        return "StrictMode";
      case L:
        return "Suspense";
      case F:
        return "SuspenseList";
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case z:
          return (e.displayName || "Context") + ".Consumer";
        case P:
          return (e._context.displayName || "Context") + ".Provider";
        case M:
          var t = e.render;
          return (
            (e = e.displayName) ||
              (e =
                "" !== (e = t.displayName || t.name || "")
                  ? "ForwardRef(" + e + ")"
                  : "ForwardRef"),
            e
          );
        case R:
          return null !== (t = e.displayName || null) ? t : Q(e.type) || "Memo";
        case I:
          ((t = e._payload), (e = e._init));
          try {
            return Q(e(t));
          } catch (n) {}
      }
    return null;
  }
  function q(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = (e = t.render).displayName || e.name || ""),
          t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Q(t);
      case 8:
        return t === j ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
    }
    return null;
  }
  function K(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Y(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      "input" === e.toLowerCase() &&
      ("checkbox" === t || "radio" === t)
    );
  }
  function G(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = Y(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];
        if (
          !e.hasOwnProperty(t) &&
          void 0 !== n &&
          "function" == typeof n.get &&
          "function" == typeof n.set
        ) {
          var a = n.get,
            l = n.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return a.call(this);
              },
              set: function (e) {
                ((r = "" + e), l.call(this, e));
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return r;
              },
              setValue: function (e) {
                r = "" + e;
              },
              stopTracking: function () {
                ((e._valueTracker = null), delete e[t]);
              },
            }
          );
        }
      })(e));
  }
  function X(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    );
  }
  function J(e) {
    if (
      void 0 === (e = e || ("undefined" != typeof document ? document : void 0))
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch (t) {
      return e.body;
    }
  }
  function Z(e, t) {
    var n = t.checked;
    return $({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != n ? n : e._wrapperState.initialChecked,
    });
  }
  function ee(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = K(null != t.value ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      }));
  }
  function te(e, t) {
    null != (t = t.checked) && k(e, "checked", t, !1);
  }
  function ne(e, t) {
    te(e, t);
    var n = K(t.value),
      r = t.type;
    if (null != n)
      "number" === r
        ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r)
      return void e.removeAttribute("value");
    (t.hasOwnProperty("value")
      ? ae(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ae(e, t.type, K(t.defaultValue)),
      null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function re(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          ("submit" !== r && "reset" !== r) ||
          (void 0 !== t.value && null !== t.value)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ("" !== (n = e.name) && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      "" !== n && (e.name = n));
  }
  function ae(e, t, n) {
    ("number" === t && J(e.ownerDocument) === e) ||
      (null == n
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var le = Array.isArray;
  function ie(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        ((a = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + K(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n)
          return (
            (e[a].selected = !0),
            void (r && (e[a].defaultSelected = !0))
          );
        null !== t || e[a].disabled || (t = e[a]);
      }
      null !== t && (t.selected = !0);
    }
  }
  function oe(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(n(91));
    return $({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ue(e, t) {
    var r = t.value;
    if (null == r) {
      if (((r = t.children), (t = t.defaultValue), null != r)) {
        if (null != t) throw Error(n(92));
        if (le(r)) {
          if (1 < r.length) throw Error(n(93));
          r = r[0];
        }
        t = r;
      }
      (null == t && (t = ""), (r = t));
    }
    e._wrapperState = { initialValue: K(r) };
  }
  function se(e, t) {
    var n = K(t.value),
      r = K(t.defaultValue);
    (null != n &&
      ((n = "" + n) !== e.value && (e.value = n),
      null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
      null != r && (e.defaultValue = "" + r));
  }
  function ce(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      "" !== t &&
      null !== t &&
      (e.value = t);
  }
  function de(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function fe(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e
      ? de(t)
      : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var pe,
    me,
    he =
      ((me = function (e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            (pe = pe || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = pe.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      }),
      "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function (e, t, n, r) {
            MSApp.execUnsafeLocalFunction(function () {
              return me(e, t);
            });
          }
        : me);
  function ge(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType)
        return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  var ye = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ve = ["Webkit", "ms", "Moz", "O"];
  function be(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t
      ? ""
      : n || "number" != typeof t || 0 === t || (ye.hasOwnProperty(e) && ye[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function ke(e, t) {
    for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
          a = be(n, t[n], r);
        ("float" === n && (n = "cssFloat"),
          r ? e.setProperty(n, a) : (e[n] = a));
      }
  }
  Object.keys(ye).forEach(function (e) {
    ve.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ye[t] = ye[e]));
    });
  });
  var we = $(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function xe(e, t) {
    if (t) {
      if (we[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
        throw Error(n(137, e));
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(n(60));
        if (
          "object" != typeof t.dangerouslySetInnerHTML ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(n(61));
      }
      if (null != t.style && "object" != typeof t.style) throw Error(n(62));
    }
  }
  function Se(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ce = null;
  function Ne(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    );
  }
  var Ee = null,
    _e = null,
    je = null;
  function Te(e) {
    if ((e = Sa(e))) {
      if ("function" != typeof Ee) throw Error(n(280));
      var t = e.stateNode;
      t && ((t = Na(t)), Ee(e.stateNode, e.type, t));
    }
  }
  function Pe(e) {
    _e ? (je ? je.push(e) : (je = [e])) : (_e = e);
  }
  function ze() {
    if (_e) {
      var e = _e,
        t = je;
      if (((je = _e = null), Te(e), t)) for (e = 0; e < t.length; e++) Te(t[e]);
    }
  }
  function Me(e, t) {
    return e(t);
  }
  function Le() {}
  var Fe = !1;
  function Re(e, t, n) {
    if (Fe) return e(t, n);
    Fe = !0;
    try {
      return Me(e, t, n);
    } finally {
      ((Fe = !1), (null !== _e || null !== je) && (Le(), ze()));
    }
  }
  function Ie(e, t) {
    var r = e.stateNode;
    if (null === r) return null;
    var a = Na(r);
    if (null === a) return null;
    r = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          (a = !(
            "button" === (e = e.type) ||
            "input" === e ||
            "select" === e ||
            "textarea" === e
          )),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && "function" != typeof r) throw Error(n(231, t, typeof r));
    return r;
  }
  var De = !1;
  if (o)
    try {
      var Oe = {};
      (Object.defineProperty(Oe, "passive", {
        get: function () {
          De = !0;
        },
      }),
        window.addEventListener("test", Oe, Oe),
        window.removeEventListener("test", Oe, Oe));
    } catch (me) {
      De = !1;
    }
  function Ue(e, t, n, r, a, l, i, o, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, s);
    } catch (c) {
      this.onError(c);
    }
  }
  var Ae = !1,
    $e = null,
    Be = !1,
    Ve = null,
    He = {
      onError: function (e) {
        ((Ae = !0), ($e = e));
      },
    };
  function We(e, t, n, r, a, l, i, o, u) {
    ((Ae = !1), ($e = null), Ue.apply(He, arguments));
  }
  function Qe(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do {
        (!!(4098 & (t = e).flags) && (n = t.return), (e = t.return));
      } while (e);
    }
    return 3 === t.tag ? n : null;
  }
  function qe(e) {
    if (13 === e.tag) {
      var t = e.memoizedState;
      if (
        (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
        null !== t)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ke(e) {
    if (Qe(e) !== e) throw Error(n(188));
  }
  function Ye(e) {
    return null !==
      (e = (function (e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = Qe(e))) throw Error(n(188));
          return t !== e ? null : e;
        }
        for (var r = e, a = t; ; ) {
          var l = r.return;
          if (null === l) break;
          var i = l.alternate;
          if (null === i) {
            if (null !== (a = l.return)) {
              r = a;
              continue;
            }
            break;
          }
          if (l.child === i.child) {
            for (i = l.child; i; ) {
              if (i === r) return (Ke(l), e);
              if (i === a) return (Ke(l), t);
              i = i.sibling;
            }
            throw Error(n(188));
          }
          if (r.return !== a.return) ((r = l), (a = i));
          else {
            for (var o = !1, u = l.child; u; ) {
              if (u === r) {
                ((o = !0), (r = l), (a = i));
                break;
              }
              if (u === a) {
                ((o = !0), (a = l), (r = i));
                break;
              }
              u = u.sibling;
            }
            if (!o) {
              for (u = i.child; u; ) {
                if (u === r) {
                  ((o = !0), (r = i), (a = l));
                  break;
                }
                if (u === a) {
                  ((o = !0), (a = i), (r = l));
                  break;
                }
                u = u.sibling;
              }
              if (!o) throw Error(n(189));
            }
          }
          if (r.alternate !== a) throw Error(n(190));
        }
        if (3 !== r.tag) throw Error(n(188));
        return r.stateNode.current === r ? e : t;
      })(e))
      ? Ge(e)
      : null;
  }
  function Ge(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
      var t = Ge(e);
      if (null !== t) return t;
      e = e.sibling;
    }
    return null;
  }
  var Xe = t.unstable_scheduleCallback,
    Je = t.unstable_cancelCallback,
    Ze = t.unstable_shouldYield,
    et = t.unstable_requestPaint,
    tt = t.unstable_now,
    nt = t.unstable_getCurrentPriorityLevel,
    rt = t.unstable_ImmediatePriority,
    at = t.unstable_UserBlockingPriority,
    lt = t.unstable_NormalPriority,
    it = t.unstable_LowPriority,
    ot = t.unstable_IdlePriority,
    ut = null,
    st = null,
    ct = Math.clz32
      ? Math.clz32
      : function (e) {
          return 0 === (e >>>= 0) ? 32 : (31 - ((dt(e) / ft) | 0)) | 0;
        },
    dt = Math.log,
    ft = Math.LN2,
    pt = 64,
    mt = 4194304;
  function ht(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return 4194240 & e;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return 130023424 & e;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function gt(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
      a = e.suspendedLanes,
      l = e.pingedLanes,
      i = 268435455 & n;
    if (0 !== i) {
      var o = i & ~a;
      0 !== o ? (r = ht(o)) : 0 !== (l &= i) && (r = ht(l));
    } else 0 !== (i = n & ~a) ? (r = ht(i)) : 0 !== l && (r = ht(l));
    if (0 === r) return 0;
    if (
      0 !== t &&
      t !== r &&
      0 === (t & a) &&
      ((a = r & -r) >= (l = t & -t) || (16 === a && 4194240 & l))
    )
      return t;
    if ((4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((a = 1 << (n = 31 - ct(t))), (r |= e[n]), (t &= ~a));
    return r;
  }
  function yt(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      default:
        return -1;
    }
  }
  function vt(e) {
    return 0 != (e = -1073741825 & e.pendingLanes)
      ? e
      : 1073741824 & e
        ? 1073741824
        : 0;
  }
  function bt() {
    var e = pt;
    return (!(4194240 & (pt <<= 1)) && (pt = 64), e);
  }
  function kt(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function wt(e, t, n) {
    ((e.pendingLanes |= t),
      536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      ((e = e.eventTimes)[(t = 31 - ct(t))] = n));
  }
  function xt(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ct(n),
        a = 1 << r;
      ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
    }
  }
  var St = 0;
  function Ct(e) {
    return 1 < (e &= -e) ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
  }
  var Nt,
    Et,
    _t,
    jt,
    Tt,
    Pt = !1,
    zt = [],
    Mt = null,
    Lt = null,
    Ft = null,
    Rt = new Map(),
    It = new Map(),
    Dt = [],
    Ot =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Ut(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ft = null;
        break;
      case "pointerover":
      case "pointerout":
        Rt.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        It.delete(t.pointerId);
    }
  }
  function At(e, t, n, r, a, l) {
    return null === e || e.nativeEvent !== l
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: l,
          targetContainers: [a],
        }),
        null !== t && null !== (t = Sa(t)) && Et(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== a && -1 === t.indexOf(a) && t.push(a),
        e);
  }
  function $t(e) {
    var t = xa(e.target);
    if (null !== t) {
      var n = Qe(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = qe(n)))
            return (
              (e.blockedOn = t),
              void Tt(e.priority, function () {
                _t(n);
              })
            );
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
          return void (e.blockedOn =
            3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
  }
  function Bt(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n)
        return (null !== (t = Sa(n)) && Et(t), (e.blockedOn = n), !1);
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      ((Ce = r), n.target.dispatchEvent(r), (Ce = null), t.shift());
    }
    return !0;
  }
  function Vt(e, t, n) {
    Bt(e) && n.delete(t);
  }
  function Ht() {
    ((Pt = !1),
      null !== Mt && Bt(Mt) && (Mt = null),
      null !== Lt && Bt(Lt) && (Lt = null),
      null !== Ft && Bt(Ft) && (Ft = null),
      Rt.forEach(Vt),
      It.forEach(Vt));
  }
  function Wt(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Pt ||
        ((Pt = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Ht)));
  }
  function Qt(e) {
    function t(t) {
      return Wt(t, e);
    }
    if (0 < zt.length) {
      Wt(zt[0], e);
      for (var n = 1; n < zt.length; n++) {
        var r = zt[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      null !== Mt && Wt(Mt, e),
        null !== Lt && Wt(Lt, e),
        null !== Ft && Wt(Ft, e),
        Rt.forEach(t),
        It.forEach(t),
        n = 0;
      n < Dt.length;
      n++
    )
      (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
      ($t(n), null === n.blockedOn && Dt.shift());
  }
  var qt = C.ReactCurrentBatchConfig,
    Kt = !0;
  function Yt(e, t, n, r) {
    var a = St,
      l = qt.transition;
    qt.transition = null;
    try {
      ((St = 1), Xt(e, t, n, r));
    } finally {
      ((St = a), (qt.transition = l));
    }
  }
  function Gt(e, t, n, r) {
    var a = St,
      l = qt.transition;
    qt.transition = null;
    try {
      ((St = 4), Xt(e, t, n, r));
    } finally {
      ((St = a), (qt.transition = l));
    }
  }
  function Xt(e, t, n, r) {
    if (Kt) {
      var a = Zt(e, t, n, r);
      if (null === a) (Kr(e, t, r, Jt, n), Ut(e, r));
      else if (
        (function (e, t, n, r, a) {
          switch (t) {
            case "focusin":
              return ((Mt = At(Mt, e, t, n, r, a)), !0);
            case "dragenter":
              return ((Lt = At(Lt, e, t, n, r, a)), !0);
            case "mouseover":
              return ((Ft = At(Ft, e, t, n, r, a)), !0);
            case "pointerover":
              var l = a.pointerId;
              return (Rt.set(l, At(Rt.get(l) || null, e, t, n, r, a)), !0);
            case "gotpointercapture":
              return (
                (l = a.pointerId),
                It.set(l, At(It.get(l) || null, e, t, n, r, a)),
                !0
              );
          }
          return !1;
        })(a, e, t, n, r)
      )
        r.stopPropagation();
      else if ((Ut(e, r), 4 & t && -1 < Ot.indexOf(e))) {
        for (; null !== a; ) {
          var l = Sa(a);
          if (
            (null !== l && Nt(l),
            null === (l = Zt(e, t, n, r)) && Kr(e, t, r, Jt, n),
            l === a)
          )
            break;
          a = l;
        }
        null !== a && r.stopPropagation();
      } else Kr(e, t, r, null, n);
    }
  }
  var Jt = null;
  function Zt(e, t, n, r) {
    if (((Jt = null), null !== (e = xa((e = Ne(r))))))
      if (null === (t = Qe(e))) e = null;
      else if (13 === (n = t.tag)) {
        if (null !== (e = qe(t))) return e;
        e = null;
      } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Jt = e), null);
  }
  function en(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (nt()) {
          case rt:
            return 1;
          case at:
            return 4;
          case lt:
          case it:
            return 16;
          case ot:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var tn = null,
    nn = null,
    rn = null;
  function an() {
    if (rn) return rn;
    var e,
      t,
      n = nn,
      r = n.length,
      a = "value" in tn ? tn.value : tn.textContent,
      l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var i = r - e;
    for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
    return (rn = a.slice(e, 1 < t ? 1 - t : void 0));
  }
  function ln(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    );
  }
  function on() {
    return !0;
  }
  function un() {
    return !1;
  }
  function sn(e) {
    function t(t, n, r, a, l) {
      for (var i in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = l),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
      return (
        (this.isDefaultPrevented = (
          null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
        )
          ? on
          : un),
        (this.isPropagationStopped = un),
        this
      );
    }
    return (
      $(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = on));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = on));
        },
        persist: function () {},
        isPersistent: on,
      }),
      t
    );
  }
  var cn,
    dn,
    fn,
    pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    mn = sn(pn),
    hn = $({}, pn, { view: 0, detail: 0 }),
    gn = sn(hn),
    yn = $({}, hn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Tn,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return void 0 === e.relatedTarget
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== fn &&
              (fn && "mousemove" === e.type
                ? ((cn = e.screenX - fn.screenX), (dn = e.screenY - fn.screenY))
                : (dn = cn = 0),
              (fn = e)),
            cn);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : dn;
      },
    }),
    vn = sn(yn),
    bn = sn($({}, yn, { dataTransfer: 0 })),
    kn = sn($({}, hn, { relatedTarget: 0 })),
    wn = sn($({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    xn = $({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Sn = sn(xn),
    Cn = sn($({}, pn, { data: 0 })),
    Nn = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    En = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    _n = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function jn(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = _n[e]) && !!t[e];
  }
  function Tn() {
    return jn;
  }
  var Pn = $({}, hn, {
      key: function (e) {
        if (e.key) {
          var t = Nn[e.key] || e.key;
          if ("Unidentified" !== t) return t;
        }
        return "keypress" === e.type
          ? 13 === (e = ln(e))
            ? "Enter"
            : String.fromCharCode(e)
          : "keydown" === e.type || "keyup" === e.type
            ? En[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Tn,
      charCode: function (e) {
        return "keypress" === e.type ? ln(e) : 0;
      },
      keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return "keypress" === e.type
          ? ln(e)
          : "keydown" === e.type || "keyup" === e.type
            ? e.keyCode
            : 0;
      },
    }),
    zn = sn(Pn),
    Mn = sn(
      $({}, yn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
    ),
    Ln = sn(
      $({}, hn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Tn,
      }),
    ),
    Fn = sn($({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Rn = $({}, yn, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    In = sn(Rn),
    Dn = [9, 13, 27, 32],
    On = o && "CompositionEvent" in window,
    Un = null;
  o && "documentMode" in document && (Un = document.documentMode);
  var An = o && "TextEvent" in window && !Un,
    $n = o && (!On || (Un && 8 < Un && 11 >= Un)),
    Bn = String.fromCharCode(32),
    Vn = !1;
  function Hn(e, t) {
    switch (e) {
      case "keyup":
        return -1 !== Dn.indexOf(t.keyCode);
      case "keydown":
        return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wn(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
  }
  var Qn = !1,
    qn = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
  function Kn(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!qn[e.type] : "textarea" === t;
  }
  function Yn(e, t, n, r) {
    (Pe(r),
      0 < (t = Gr(t, "onChange")).length &&
        ((n = new mn("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Gn = null,
    Xn = null;
  function Jn(e) {
    Br(e, 0);
  }
  function Zn(e) {
    if (X(Ca(e))) return e;
  }
  function er(e, t) {
    if ("change" === e) return t;
  }
  var tr = !1;
  if (o) {
    var nr;
    if (o) {
      var rr = "oninput" in document;
      if (!rr) {
        var ar = document.createElement("div");
        (ar.setAttribute("oninput", "return;"),
          (rr = "function" == typeof ar.oninput));
      }
      nr = rr;
    } else nr = !1;
    tr = nr && (!document.documentMode || 9 < document.documentMode);
  }
  function lr() {
    Gn && (Gn.detachEvent("onpropertychange", ir), (Xn = Gn = null));
  }
  function ir(e) {
    if ("value" === e.propertyName && Zn(Xn)) {
      var t = [];
      (Yn(t, Xn, e, Ne(e)), Re(Jn, t));
    }
  }
  function or(e, t, n) {
    "focusin" === e
      ? (lr(), (Xn = n), (Gn = t).attachEvent("onpropertychange", ir))
      : "focusout" === e && lr();
  }
  function ur(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e)
      return Zn(Xn);
  }
  function sr(e, t) {
    if ("click" === e) return Zn(t);
  }
  function cr(e, t) {
    if ("input" === e || "change" === e) return Zn(t);
  }
  var dr =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        };
  function fr(e, t) {
    if (dr(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!u.call(t, a) || !dr(e[a], t[a])) return !1;
    }
    return !0;
  }
  function pr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mr(e, t) {
    var n,
      r = pr(e);
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = pr(r);
    }
  }
  function hr(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? hr(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : !!e.compareDocumentPosition &&
                !!(16 & e.compareDocumentPosition(t)))))
    );
  }
  function gr() {
    for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = "string" == typeof t.contentWindow.location.href;
      } catch (r) {
        n = !1;
      }
      if (!n) break;
      t = J((e = t.contentWindow).document);
    }
    return t;
  }
  function yr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      (("input" === t &&
        ("text" === e.type ||
          "search" === e.type ||
          "tel" === e.type ||
          "url" === e.type ||
          "password" === e.type)) ||
        "textarea" === t ||
        "true" === e.contentEditable)
    );
  }
  function vr(e) {
    var t = gr(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      hr(n.ownerDocument.documentElement, n)
    ) {
      if (null !== r && yr(n))
        if (
          ((t = r.start),
          void 0 === (e = r.end) && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
            .getSelection
        ) {
          e = e.getSelection();
          var a = n.textContent.length,
            l = Math.min(r.start, a);
          ((r = void 0 === r.end ? l : Math.min(r.end, a)),
            !e.extend && l > r && ((a = r), (r = l), (l = a)),
            (a = mr(n, l)));
          var i = mr(n, r);
          a &&
            i &&
            (1 !== e.rangeCount ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()).setStart(a.node, a.offset),
            e.removeAllRanges(),
            l > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      for (t = [], e = n; (e = e.parentNode); )
        1 === e.nodeType &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
        (((e = t[n]).element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var br = o && "documentMode" in document && 11 >= document.documentMode,
    kr = null,
    wr = null,
    xr = null,
    Sr = !1;
  function Cr(e, t, n) {
    var r =
      n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Sr ||
      null == kr ||
      kr !== J(r) ||
      ((r =
        "selectionStart" in (r = kr) && yr(r)
          ? { start: r.selectionStart, end: r.selectionEnd }
          : {
              anchorNode: (r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
      (xr && fr(xr, r)) ||
        ((xr = r),
        0 < (r = Gr(wr, "onSelect")).length &&
          ((t = new mn("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = kr))));
  }
  function Nr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Er = {
      animationend: Nr("Animation", "AnimationEnd"),
      animationiteration: Nr("Animation", "AnimationIteration"),
      animationstart: Nr("Animation", "AnimationStart"),
      transitionend: Nr("Transition", "TransitionEnd"),
    },
    _r = {},
    jr = {};
  function Tr(e) {
    if (_r[e]) return _r[e];
    if (!Er[e]) return e;
    var t,
      n = Er[e];
    for (t in n) if (n.hasOwnProperty(t) && t in jr) return (_r[e] = n[t]);
    return e;
  }
  o &&
    ((jr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Er.animationend.animation,
      delete Er.animationiteration.animation,
      delete Er.animationstart.animation),
    "TransitionEvent" in window || delete Er.transitionend.transition);
  var Pr = Tr("animationend"),
    zr = Tr("animationiteration"),
    Mr = Tr("animationstart"),
    Lr = Tr("transitionend"),
    Fr = new Map(),
    Rr =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ir(e, t) {
    (Fr.set(e, t), l(t, [e]));
  }
  for (var Dr = 0; Dr < Rr.length; Dr++) {
    var Or = Rr[Dr];
    Ir(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)));
  }
  (Ir(Pr, "onAnimationEnd"),
    Ir(zr, "onAnimationIteration"),
    Ir(Mr, "onAnimationStart"),
    Ir("dblclick", "onDoubleClick"),
    Ir("focusin", "onFocus"),
    Ir("focusout", "onBlur"),
    Ir(Lr, "onTransitionEnd"),
    i("onMouseEnter", ["mouseout", "mouseover"]),
    i("onMouseLeave", ["mouseout", "mouseover"]),
    i("onPointerEnter", ["pointerout", "pointerover"]),
    i("onPointerLeave", ["pointerout", "pointerover"]),
    l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ur =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Ar = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ur),
    );
  function $r(e, t, r) {
    var a = e.type || "unknown-event";
    ((e.currentTarget = r),
      (function (e, t, r, a, l, i, o, u, s) {
        if ((We.apply(this, arguments), Ae)) {
          if (!Ae) throw Error(n(198));
          var c = $e;
          ((Ae = !1), ($e = null), Be || ((Be = !0), (Ve = c)));
        }
      })(a, t, void 0, e),
      (e.currentTarget = null));
  }
  function Br(e, t) {
    t = !!(4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        a = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              u = o.instance,
              s = o.currentTarget;
            if (((o = o.listener), u !== l && a.isPropagationStopped()))
              break e;
            ($r(a, o, s), (l = u));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = (o = r[i]).instance),
              (s = o.currentTarget),
              (o = o.listener),
              u !== l && a.isPropagationStopped())
            )
              break e;
            ($r(a, o, s), (l = u));
          }
      }
    }
    if (Be) throw ((e = Ve), (Be = !1), (Ve = null), e);
  }
  function Vr(e, t) {
    var n = t[ba];
    void 0 === n && (n = t[ba] = new Set());
    var r = e + "__bubble";
    n.has(r) || (qr(t, e, 2, !1), n.add(r));
  }
  function Hr(e, t, n) {
    var r = 0;
    (t && (r |= 4), qr(n, e, r, t));
  }
  var Wr = "_reactListening" + Math.random().toString(36).slice(2);
  function Qr(e) {
    if (!e[Wr]) {
      ((e[Wr] = !0),
        r.forEach(function (t) {
          "selectionchange" !== t && (Ar.has(t) || Hr(t, !1, e), Hr(t, !0, e));
        }));
      var t = 9 === e.nodeType ? e : e.ownerDocument;
      null === t || t[Wr] || ((t[Wr] = !0), Hr("selectionchange", !1, t));
    }
  }
  function qr(e, t, n, r) {
    switch (en(t)) {
      case 1:
        var a = Yt;
        break;
      case 4:
        a = Gt;
        break;
      default:
        a = Xt;
    }
    ((n = a.bind(null, t, n, e)),
      (a = void 0),
      !De ||
        ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
        (a = !0),
      r
        ? void 0 !== a
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : void 0 !== a
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1));
  }
  function Kr(e, t, n, r, a) {
    var l = r;
    if (!(1 & t || 2 & t || null === r))
      e: for (;;) {
        if (null === r) return;
        var i = r.tag;
        if (3 === i || 4 === i) {
          var o = r.stateNode.containerInfo;
          if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
          if (4 === i)
            for (i = r.return; null !== i; ) {
              var u = i.tag;
              if (
                (3 === u || 4 === u) &&
                ((u = i.stateNode.containerInfo) === a ||
                  (8 === u.nodeType && u.parentNode === a))
              )
                return;
              i = i.return;
            }
          for (; null !== o; ) {
            if (null === (i = xa(o))) return;
            if (5 === (u = i.tag) || 6 === u) {
              r = l = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Re(function () {
      var r = l,
        a = Ne(n),
        i = [];
      e: {
        var o = Fr.get(e);
        if (void 0 !== o) {
          var u = mn,
            s = e;
          switch (e) {
            case "keypress":
              if (0 === ln(n)) break e;
            case "keydown":
            case "keyup":
              u = zn;
              break;
            case "focusin":
              ((s = "focus"), (u = kn));
              break;
            case "focusout":
              ((s = "blur"), (u = kn));
              break;
            case "beforeblur":
            case "afterblur":
              u = kn;
              break;
            case "click":
              if (2 === n.button) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              u = vn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              u = bn;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              u = Ln;
              break;
            case Pr:
            case zr:
            case Mr:
              u = wn;
              break;
            case Lr:
              u = Fn;
              break;
            case "scroll":
              u = gn;
              break;
            case "wheel":
              u = In;
              break;
            case "copy":
            case "cut":
            case "paste":
              u = Sn;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              u = Mn;
          }
          var c = !!(4 & t),
            d = !c && "scroll" === e,
            f = c ? (null !== o ? o + "Capture" : null) : o;
          c = [];
          for (var p, m = r; null !== m; ) {
            var h = (p = m).stateNode;
            if (
              (5 === p.tag &&
                null !== h &&
                ((p = h),
                null !== f && null != (h = Ie(m, f)) && c.push(Yr(m, h, p))),
              d)
            )
              break;
            m = m.return;
          }
          0 < c.length &&
            ((o = new u(o, s, null, n, a)), i.push({ event: o, listeners: c }));
        }
      }
      if (!(7 & t)) {
        if (
          ((u = "mouseout" === e || "pointerout" === e),
          (!(o = "mouseover" === e || "pointerover" === e) ||
            n === Ce ||
            !(s = n.relatedTarget || n.fromElement) ||
            (!xa(s) && !s[va])) &&
            (u || o) &&
            ((o =
              a.window === a
                ? a
                : (o = a.ownerDocument)
                  ? o.defaultView || o.parentWindow
                  : window),
            u
              ? ((u = r),
                null !==
                  (s = (s = n.relatedTarget || n.toElement) ? xa(s) : null) &&
                  (s !== (d = Qe(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                  (s = null))
              : ((u = null), (s = r)),
            u !== s))
        ) {
          if (
            ((c = vn),
            (h = "onMouseLeave"),
            (f = "onMouseEnter"),
            (m = "mouse"),
            ("pointerout" !== e && "pointerover" !== e) ||
              ((c = Mn),
              (h = "onPointerLeave"),
              (f = "onPointerEnter"),
              (m = "pointer")),
            (d = null == u ? o : Ca(u)),
            (p = null == s ? o : Ca(s)),
            ((o = new c(h, m + "leave", u, n, a)).target = d),
            (o.relatedTarget = p),
            (h = null),
            xa(a) === r &&
              (((c = new c(f, m + "enter", s, n, a)).target = p),
              (c.relatedTarget = d),
              (h = c)),
            (d = h),
            u && s)
          )
            e: {
              for (f = s, m = 0, p = c = u; p; p = Xr(p)) m++;
              for (p = 0, h = f; h; h = Xr(h)) p++;
              for (; 0 < m - p; ) ((c = Xr(c)), m--);
              for (; 0 < p - m; ) ((f = Xr(f)), p--);
              for (; m--; ) {
                if (c === f || (null !== f && c === f.alternate)) break e;
                ((c = Xr(c)), (f = Xr(f)));
              }
              c = null;
            }
          else c = null;
          (null !== u && Jr(i, o, u, c, !1),
            null !== s && null !== d && Jr(i, d, s, c, !0));
        }
        if (
          "select" ===
            (u =
              (o = r ? Ca(r) : window).nodeName && o.nodeName.toLowerCase()) ||
          ("input" === u && "file" === o.type)
        )
          var g = er;
        else if (Kn(o))
          if (tr) g = cr;
          else {
            g = ur;
            var y = or;
          }
        else
          (u = o.nodeName) &&
            "input" === u.toLowerCase() &&
            ("checkbox" === o.type || "radio" === o.type) &&
            (g = sr);
        switch (
          (g && (g = g(e, r))
            ? Yn(i, g, n, a)
            : (y && y(e, o, r),
              "focusout" === e &&
                (y = o._wrapperState) &&
                y.controlled &&
                "number" === o.type &&
                ae(o, "number", o.value)),
          (y = r ? Ca(r) : window),
          e)
        ) {
          case "focusin":
            (Kn(y) || "true" === y.contentEditable) &&
              ((kr = y), (wr = r), (xr = null));
            break;
          case "focusout":
            xr = wr = kr = null;
            break;
          case "mousedown":
            Sr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Sr = !1), Cr(i, n, a));
            break;
          case "selectionchange":
            if (br) break;
          case "keydown":
          case "keyup":
            Cr(i, n, a);
        }
        var v;
        if (On)
          e: {
            switch (e) {
              case "compositionstart":
                var b = "onCompositionStart";
                break e;
              case "compositionend":
                b = "onCompositionEnd";
                break e;
              case "compositionupdate":
                b = "onCompositionUpdate";
                break e;
            }
            b = void 0;
          }
        else
          Qn
            ? Hn(e, n) && (b = "onCompositionEnd")
            : "keydown" === e &&
              229 === n.keyCode &&
              (b = "onCompositionStart");
        (b &&
          ($n &&
            "ko" !== n.locale &&
            (Qn || "onCompositionStart" !== b
              ? "onCompositionEnd" === b && Qn && (v = an())
              : ((nn = "value" in (tn = a) ? tn.value : tn.textContent),
                (Qn = !0))),
          0 < (y = Gr(r, b)).length &&
            ((b = new Cn(b, e, null, n, a)),
            i.push({ event: b, listeners: y }),
            (v || null !== (v = Wn(n))) && (b.data = v))),
          (v = An
            ? (function (e, t) {
                switch (e) {
                  case "compositionend":
                    return Wn(t);
                  case "keypress":
                    return 32 !== t.which ? null : ((Vn = !0), Bn);
                  case "textInput":
                    return (e = t.data) === Bn && Vn ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function (e, t) {
                if (Qn)
                  return "compositionend" === e || (!On && Hn(e, t))
                    ? ((e = an()), (rn = nn = tn = null), (Qn = !1), e)
                    : null;
                switch (e) {
                  case "paste":
                  default:
                    return null;
                  case "keypress":
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                      (t.ctrlKey && t.altKey)
                    ) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                  case "compositionend":
                    return $n && "ko" !== t.locale ? null : t.data;
                }
              })(e, n)) &&
            0 < (r = Gr(r, "onBeforeInput")).length &&
            ((a = new Cn("onBeforeInput", "beforeinput", null, n, a)),
            i.push({ event: a, listeners: r }),
            (a.data = v)));
      }
      Br(i, t);
    });
  }
  function Yr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Gr(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
      var a = e,
        l = a.stateNode;
      (5 === a.tag &&
        null !== l &&
        ((a = l),
        null != (l = Ie(e, n)) && r.unshift(Yr(e, l, a)),
        null != (l = Ie(e, t)) && r.push(Yr(e, l, a))),
        (e = e.return));
    }
    return r;
  }
  function Xr(e) {
    if (null === e) return null;
    do {
      e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
  }
  function Jr(e, t, n, r, a) {
    for (var l = t._reactName, i = []; null !== n && n !== r; ) {
      var o = n,
        u = o.alternate,
        s = o.stateNode;
      if (null !== u && u === r) break;
      (5 === o.tag &&
        null !== s &&
        ((o = s),
        a
          ? null != (u = Ie(n, l)) && i.unshift(Yr(n, u, o))
          : a || (null != (u = Ie(n, l)) && i.push(Yr(n, u, o)))),
        (n = n.return));
    }
    0 !== i.length && e.push({ event: t, listeners: i });
  }
  var Zr = /\r\n?/g,
    ea = /\u0000|\uFFFD/g;
  function ta(e) {
    return ("string" == typeof e ? e : "" + e)
      .replace(Zr, "\n")
      .replace(ea, "");
  }
  function na(e, t, r) {
    if (((t = ta(t)), ta(e) !== t && r)) throw Error(n(425));
  }
  function ra() {}
  var aa = null,
    la = null;
  function ia(e, t) {
    return (
      "textarea" === e ||
      "noscript" === e ||
      "string" == typeof t.children ||
      "number" == typeof t.children ||
      ("object" == typeof t.dangerouslySetInnerHTML &&
        null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html)
    );
  }
  var oa = "function" == typeof setTimeout ? setTimeout : void 0,
    ua = "function" == typeof clearTimeout ? clearTimeout : void 0,
    sa = "function" == typeof Promise ? Promise : void 0,
    ca =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : void 0 !== sa
          ? function (e) {
              return sa.resolve(null).then(e).catch(da);
            }
          : oa;
  function da(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function fa(e, t) {
    var n = t,
      r = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && 8 === a.nodeType))
        if ("/$" === (n = a.data)) {
          if (0 === r) return (e.removeChild(a), void Qt(t));
          r--;
        } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
      n = a;
    } while (n);
    Qt(t);
  }
  function pa(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break;
      if (8 === t) {
        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
        if ("/$" === t) return null;
      }
    }
    return e;
  }
  function ma(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (8 === e.nodeType) {
        var n = e.data;
        if ("$" === n || "$!" === n || "$?" === n) {
          if (0 === t) return e;
          t--;
        } else "/$" === n && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ha = Math.random().toString(36).slice(2),
    ga = "__reactFiber$" + ha,
    ya = "__reactProps$" + ha,
    va = "__reactContainer$" + ha,
    ba = "__reactEvents$" + ha,
    ka = "__reactListeners$" + ha,
    wa = "__reactHandles$" + ha;
  function xa(e) {
    var t = e[ga];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[va] || n[ga])) {
        if (
          ((n = t.alternate),
          null !== t.child || (null !== n && null !== n.child))
        )
          for (e = ma(e); null !== e; ) {
            if ((n = e[ga])) return n;
            e = ma(e);
          }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function Sa(e) {
    return !(e = e[ga] || e[va]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
      ? null
      : e;
  }
  function Ca(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(n(33));
  }
  function Na(e) {
    return e[ya] || null;
  }
  var Ea = [],
    _a = -1;
  function ja(e) {
    return { current: e };
  }
  function Ta(e) {
    0 > _a || ((e.current = Ea[_a]), (Ea[_a] = null), _a--);
  }
  function Pa(e, t) {
    (_a++, (Ea[_a] = e.current), (e.current = t));
  }
  var za = {},
    Ma = ja(za),
    La = ja(!1),
    Fa = za;
  function Ra(e, t) {
    var n = e.type.contextTypes;
    if (!n) return za;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var a,
      l = {};
    for (a in n) l[a] = t[a];
    return (
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ia(e) {
    return null != e.childContextTypes;
  }
  function Da() {
    (Ta(La), Ta(Ma));
  }
  function Oa(e, t, r) {
    if (Ma.current !== za) throw Error(n(168));
    (Pa(Ma, t), Pa(La, r));
  }
  function Ua(e, t, r) {
    var a = e.stateNode;
    if (((t = t.childContextTypes), "function" != typeof a.getChildContext))
      return r;
    for (var l in (a = a.getChildContext()))
      if (!(l in t)) throw Error(n(108, q(e) || "Unknown", l));
    return $({}, r, a);
  }
  function Aa(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        za),
      (Fa = Ma.current),
      Pa(Ma, e),
      Pa(La, La.current),
      !0
    );
  }
  function $a(e, t, r) {
    var a = e.stateNode;
    if (!a) throw Error(n(169));
    (r
      ? ((e = Ua(e, t, Fa)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        Ta(La),
        Ta(Ma),
        Pa(Ma, e))
      : Ta(La),
      Pa(La, r));
  }
  var Ba = null,
    Va = !1,
    Ha = !1;
  function Wa(e) {
    null === Ba ? (Ba = [e]) : Ba.push(e);
  }
  function Qa() {
    if (!Ha && null !== Ba) {
      Ha = !0;
      var e = 0,
        t = St;
      try {
        var n = Ba;
        for (St = 1; e < n.length; e++) {
          var r = n[e];
          do {
            r = r(!0);
          } while (null !== r);
        }
        ((Ba = null), (Va = !1));
      } catch (a) {
        throw (null !== Ba && (Ba = Ba.slice(e + 1)), Xe(rt, Qa), a);
      } finally {
        ((St = t), (Ha = !1));
      }
    }
    return null;
  }
  var qa = [],
    Ka = 0,
    Ya = null,
    Ga = 0,
    Xa = [],
    Ja = 0,
    Za = null,
    el = 1,
    tl = "";
  function nl(e, t) {
    ((qa[Ka++] = Ga), (qa[Ka++] = Ya), (Ya = e), (Ga = t));
  }
  function rl(e, t, n) {
    ((Xa[Ja++] = el), (Xa[Ja++] = tl), (Xa[Ja++] = Za), (Za = e));
    var r = el;
    e = tl;
    var a = 32 - ct(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var l = 32 - ct(t) + a;
    if (30 < l) {
      var i = a - (a % 5);
      ((l = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (a -= i),
        (el = (1 << (32 - ct(t) + a)) | (n << a) | r),
        (tl = l + e));
    } else ((el = (1 << l) | (n << a) | r), (tl = e));
  }
  function al(e) {
    null !== e.return && (nl(e, 1), rl(e, 1, 0));
  }
  function ll(e) {
    for (; e === Ya; )
      ((Ya = qa[--Ka]), (qa[Ka] = null), (Ga = qa[--Ka]), (qa[Ka] = null));
    for (; e === Za; )
      ((Za = Xa[--Ja]),
        (Xa[Ja] = null),
        (tl = Xa[--Ja]),
        (Xa[Ja] = null),
        (el = Xa[--Ja]),
        (Xa[Ja] = null));
  }
  var il = null,
    ol = null,
    ul = !1,
    sl = null;
  function cl(e, t) {
    var n = Fs(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      null === (t = e.deletions)
        ? ((e.deletions = [n]), (e.flags |= 16))
        : t.push(n));
  }
  function dl(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          null !==
            (t =
              1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t) &&
          ((e.stateNode = t), (il = e), (ol = pa(t.firstChild)), !0)
        );
      case 6:
        return (
          null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
          ((e.stateNode = t), (il = e), (ol = null), !0)
        );
      case 13:
        return (
          null !== (t = 8 !== t.nodeType ? null : t) &&
          ((n = null !== Za ? { id: el, overflow: tl } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          ((n = Fs(18, null, null, 0)).stateNode = t),
          (n.return = e),
          (e.child = n),
          (il = e),
          (ol = null),
          !0)
        );
      default:
        return !1;
    }
  }
  function fl(e) {
    return !(!(1 & e.mode) || 128 & e.flags);
  }
  function pl(e) {
    if (ul) {
      var t = ol;
      if (t) {
        var r = t;
        if (!dl(e, t)) {
          if (fl(e)) throw Error(n(418));
          t = pa(r.nextSibling);
          var a = il;
          t && dl(e, t)
            ? cl(a, r)
            : ((e.flags = (-4097 & e.flags) | 2), (ul = !1), (il = e));
        }
      } else {
        if (fl(e)) throw Error(n(418));
        ((e.flags = (-4097 & e.flags) | 2), (ul = !1), (il = e));
      }
    }
  }
  function ml(e) {
    for (
      e = e.return;
      null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;
    )
      e = e.return;
    il = e;
  }
  function hl(e) {
    if (e !== il) return !1;
    if (!ul) return (ml(e), (ul = !0), !1);
    var t;
    if (
      ((t = 3 !== e.tag) &&
        !(t = 5 !== e.tag) &&
        (t =
          "head" !== (t = e.type) &&
          "body" !== t &&
          !ia(e.type, e.memoizedProps)),
      t && (t = ol))
    ) {
      if (fl(e)) throw (gl(), Error(n(418)));
      for (; t; ) (cl(e, t), (t = pa(t.nextSibling)));
    }
    if ((ml(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
        throw Error(n(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (8 === e.nodeType) {
            var r = e.data;
            if ("/$" === r) {
              if (0 === t) {
                ol = pa(e.nextSibling);
                break e;
              }
              t--;
            } else ("$" !== r && "$!" !== r && "$?" !== r) || t++;
          }
          e = e.nextSibling;
        }
        ol = null;
      }
    } else ol = il ? pa(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gl() {
    for (var e = ol; e; ) e = pa(e.nextSibling);
  }
  function yl() {
    ((ol = il = null), (ul = !1));
  }
  function vl(e) {
    null === sl ? (sl = [e]) : sl.push(e);
  }
  var bl = C.ReactCurrentBatchConfig;
  function kl(e, t, r) {
    if (
      null !== (e = r.ref) &&
      "function" != typeof e &&
      "object" != typeof e
    ) {
      if (r._owner) {
        if ((r = r._owner)) {
          if (1 !== r.tag) throw Error(n(309));
          var a = r.stateNode;
        }
        if (!a) throw Error(n(147, e));
        var l = a,
          i = "" + e;
        return null !== t &&
          null !== t.ref &&
          "function" == typeof t.ref &&
          t.ref._stringRef === i
          ? t.ref
          : (((t = function (e) {
              var t = l.refs;
              null === e ? delete t[i] : (t[i] = e);
            })._stringRef = i),
            t);
      }
      if ("string" != typeof e) throw Error(n(284));
      if (!r._owner) throw Error(n(290, e));
    }
    return e;
  }
  function wl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        n(
          31,
          "[object Object]" === e
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function xl(e) {
    return (0, e._init)(e._payload);
  }
  function Sl(e) {
    function t(t, n) {
      if (e) {
        var r = t.deletions;
        null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
      }
    }
    function r(n, r) {
      if (!e) return null;
      for (; null !== r; ) (t(n, r), (r = r.sibling));
      return null;
    }
    function a(e, t) {
      for (e = new Map(); null !== t; )
        (null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling));
      return e;
    }
    function l(e, t) {
      return (((e = Is(e, t)).index = 0), (e.sibling = null), e);
    }
    function i(t, n, r) {
      return (
        (t.index = r),
        e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 2), n)
              : r
            : ((t.flags |= 2), n)
          : ((t.flags |= 1048576), n)
      );
    }
    function o(t) {
      return (e && null === t.alternate && (t.flags |= 2), t);
    }
    function u(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = As(n, e.mode, r)).return = e), t)
        : (((t = l(t, n)).return = e), t);
    }
    function s(e, t, n, r) {
      var a = n.type;
      return a === _
        ? d(e, t, n.props.children, r, n.key)
        : null !== t &&
            (t.elementType === a ||
              ("object" == typeof a &&
                null !== a &&
                a.$$typeof === I &&
                xl(a) === t.type))
          ? (((r = l(t, n.props)).ref = kl(e, t, n)), (r.return = e), r)
          : (((r = Ds(n.type, n.key, n.props, null, e.mode, r)).ref = kl(
              e,
              t,
              n,
            )),
            (r.return = e),
            r);
    }
    function c(e, t, n, r) {
      return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
        ? (((t = $s(n, e.mode, r)).return = e), t)
        : (((t = l(t, n.children || [])).return = e), t);
    }
    function d(e, t, n, r, a) {
      return null === t || 7 !== t.tag
        ? (((t = Os(n, e.mode, r, a)).return = e), t)
        : (((t = l(t, n)).return = e), t);
    }
    function f(e, t, n) {
      if (("string" == typeof t && "" !== t) || "number" == typeof t)
        return (((t = As("" + t, e.mode, n)).return = e), t);
      if ("object" == typeof t && null !== t) {
        switch (t.$$typeof) {
          case N:
            return (
              ((n = Ds(t.type, t.key, t.props, null, e.mode, n)).ref = kl(
                e,
                null,
                t,
              )),
              (n.return = e),
              n
            );
          case E:
            return (((t = $s(t, e.mode, n)).return = e), t);
          case I:
            return f(e, (0, t._init)(t._payload), n);
        }
        if (le(t) || U(t))
          return (((t = Os(t, e.mode, n, null)).return = e), t);
        wl(e, t);
      }
      return null;
    }
    function p(e, t, n, r) {
      var a = null !== t ? t.key : null;
      if (("string" == typeof n && "" !== n) || "number" == typeof n)
        return null !== a ? null : u(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
        switch (n.$$typeof) {
          case N:
            return n.key === a ? s(e, t, n, r) : null;
          case E:
            return n.key === a ? c(e, t, n, r) : null;
          case I:
            return p(e, t, (a = n._init)(n._payload), r);
        }
        if (le(n) || U(n)) return null !== a ? null : d(e, t, n, r, null);
        wl(e, n);
      }
      return null;
    }
    function m(e, t, n, r, a) {
      if (("string" == typeof r && "" !== r) || "number" == typeof r)
        return u(t, (e = e.get(n) || null), "" + r, a);
      if ("object" == typeof r && null !== r) {
        switch (r.$$typeof) {
          case N:
            return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case E:
            return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case I:
            return m(e, t, n, (0, r._init)(r._payload), a);
        }
        if (le(r) || U(r)) return d(t, (e = e.get(n) || null), r, a, null);
        wl(t, r);
      }
      return null;
    }
    return function u(s, c, d, h) {
      if (
        ("object" == typeof d &&
          null !== d &&
          d.type === _ &&
          null === d.key &&
          (d = d.props.children),
        "object" == typeof d && null !== d)
      ) {
        switch (d.$$typeof) {
          case N:
            e: {
              for (var g = d.key, y = c; null !== y; ) {
                if (y.key === g) {
                  if ((g = d.type) === _) {
                    if (7 === y.tag) {
                      (r(s, y.sibling),
                        ((c = l(y, d.props.children)).return = s),
                        (s = c));
                      break e;
                    }
                  } else if (
                    y.elementType === g ||
                    ("object" == typeof g &&
                      null !== g &&
                      g.$$typeof === I &&
                      xl(g) === y.type)
                  ) {
                    (r(s, y.sibling),
                      ((c = l(y, d.props)).ref = kl(s, y, d)),
                      (c.return = s),
                      (s = c));
                    break e;
                  }
                  r(s, y);
                  break;
                }
                (t(s, y), (y = y.sibling));
              }
              d.type === _
                ? (((c = Os(d.props.children, s.mode, h, d.key)).return = s),
                  (s = c))
                : (((h = Ds(d.type, d.key, d.props, null, s.mode, h)).ref = kl(
                    s,
                    c,
                    d,
                  )),
                  (h.return = s),
                  (s = h));
            }
            return o(s);
          case E:
            e: {
              for (y = d.key; null !== c; ) {
                if (c.key === y) {
                  if (
                    4 === c.tag &&
                    c.stateNode.containerInfo === d.containerInfo &&
                    c.stateNode.implementation === d.implementation
                  ) {
                    (r(s, c.sibling),
                      ((c = l(c, d.children || [])).return = s),
                      (s = c));
                    break e;
                  }
                  r(s, c);
                  break;
                }
                (t(s, c), (c = c.sibling));
              }
              (((c = $s(d, s.mode, h)).return = s), (s = c));
            }
            return o(s);
          case I:
            return u(s, c, (y = d._init)(d._payload), h);
        }
        if (le(d))
          return (function (n, l, o, u) {
            for (
              var s = null, c = null, d = l, h = (l = 0), g = null;
              null !== d && h < o.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var y = p(n, d, o[h], u);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              (e && d && null === y.alternate && t(n, d),
                (l = i(y, l, h)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (d = g));
            }
            if (h === o.length) return (r(n, d), ul && nl(n, h), s);
            if (null === d) {
              for (; h < o.length; h++)
                null !== (d = f(n, o[h], u)) &&
                  ((l = i(d, l, h)),
                  null === c ? (s = d) : (c.sibling = d),
                  (c = d));
              return (ul && nl(n, h), s);
            }
            for (d = a(n, d); h < o.length; h++)
              null !== (g = m(d, n, h, o[h], u)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (l = i(g, l, h)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(n, e);
                }),
              ul && nl(n, h),
              s
            );
          })(s, c, d, h);
        if (U(d))
          return (function (l, o, u, s) {
            var c = U(u);
            if ("function" != typeof c) throw Error(n(150));
            if (null == (u = c.call(u))) throw Error(n(151));
            for (
              var d = (c = null), h = o, g = (o = 0), y = null, v = u.next();
              null !== h && !v.done;
              g++, v = u.next()
            ) {
              h.index > g ? ((y = h), (h = null)) : (y = h.sibling);
              var b = p(l, h, v.value, s);
              if (null === b) {
                null === h && (h = y);
                break;
              }
              (e && h && null === b.alternate && t(l, h),
                (o = i(b, o, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (h = y));
            }
            if (v.done) return (r(l, h), ul && nl(l, g), c);
            if (null === h) {
              for (; !v.done; g++, v = u.next())
                null !== (v = f(l, v.value, s)) &&
                  ((o = i(v, o, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return (ul && nl(l, g), c);
            }
            for (h = a(l, h); !v.done; g++, v = u.next())
              null !== (v = m(h, l, g, v.value, s)) &&
                (e &&
                  null !== v.alternate &&
                  h.delete(null === v.key ? g : v.key),
                (o = i(v, o, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                h.forEach(function (e) {
                  return t(l, e);
                }),
              ul && nl(l, g),
              c
            );
          })(s, c, d, h);
        wl(s, d);
      }
      return ("string" == typeof d && "" !== d) || "number" == typeof d
        ? ((d = "" + d),
          null !== c && 6 === c.tag
            ? (r(s, c.sibling), ((c = l(c, d)).return = s), (s = c))
            : (r(s, c), ((c = As(d, s.mode, h)).return = s), (s = c)),
          o(s))
        : r(s, c);
    };
  }
  var Cl = Sl(!0),
    Nl = Sl(!1),
    El = ja(null),
    _l = null,
    jl = null,
    Tl = null;
  function Pl() {
    Tl = jl = _l = null;
  }
  function zl(e) {
    var t = El.current;
    (Ta(El), (e._currentValue = t));
  }
  function Ml(e, t, n) {
    for (; null !== e; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
          : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Ll(e, t) {
    ((_l = e),
      (Tl = jl = null),
      null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (0 !== (e.lanes & t) && (xo = !0), (e.firstContext = null)));
  }
  function Fl(e) {
    var t = e._currentValue;
    if (Tl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), null === jl)) {
        if (null === _l) throw Error(n(308));
        ((jl = e), (_l.dependencies = { lanes: 0, firstContext: e }));
      } else jl = jl.next = e;
    return t;
  }
  var Rl = null;
  function Il(e) {
    null === Rl ? (Rl = [e]) : Rl.push(e);
  }
  function Dl(e, t, n, r) {
    var a = t.interleaved;
    return (
      null === a ? ((n.next = n), Il(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      Ol(e, r)
    );
  }
  function Ol(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
      ((e.childLanes |= t),
        null !== (n = e.alternate) && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
  }
  var Ul = !1;
  function Al(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function $l(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Bl(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vl(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 2 & zu)) {
      var a = r.pending;
      return (
        null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (r.pending = t),
        Ol(e, n)
      );
    }
    return (
      null === (a = r.interleaved)
        ? ((t.next = t), Il(r))
        : ((t.next = a.next), (a.next = t)),
      (r.interleaved = t),
      Ol(e, n)
    );
  }
  function Hl(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 4194240 & n)) {
      var r = t.lanes;
      ((n |= r &= e.pendingLanes), (t.lanes = n), xt(e, n));
    }
  }
  function Wl(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
      var a = null,
        l = null;
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (null === l ? (a = l = i) : (l = l.next = i), (n = n.next));
        } while (null !== n);
        null === l ? (a = l = t) : (l = l.next = t);
      } else a = l = t;
      return (
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: l,
          shared: r.shared,
          effects: r.effects,
        }),
        void (e.updateQueue = n)
      );
    }
    (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Ql(e, t, n, r) {
    var a = e.updateQueue;
    Ul = !1;
    var l = a.firstBaseUpdate,
      i = a.lastBaseUpdate,
      o = a.shared.pending;
    if (null !== o) {
      a.shared.pending = null;
      var u = o,
        s = u.next;
      ((u.next = null), null === i ? (l = s) : (i.next = s), (i = u));
      var c = e.alternate;
      null !== c &&
        (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
        (null === o ? (c.firstBaseUpdate = s) : (o.next = s),
        (c.lastBaseUpdate = u));
    }
    if (null !== l) {
      var d = a.baseState;
      for (i = 0, c = s = u = null, o = l; ; ) {
        var f = o.lane,
          p = o.eventTime;
        if ((r & f) === f) {
          null !== c &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var m = e,
              h = o;
            switch (((f = t), (p = n), h.tag)) {
              case 1:
                if ("function" == typeof (m = h.payload)) {
                  d = m.call(p, d, f);
                  break e;
                }
                d = m;
                break e;
              case 3:
                m.flags = (-65537 & m.flags) | 128;
              case 0:
                if (
                  null ==
                  (f =
                    "function" == typeof (m = h.payload) ? m.call(p, d, f) : m)
                )
                  break e;
                d = $({}, d, f);
                break e;
              case 2:
                Ul = !0;
            }
          }
          null !== o.callback &&
            0 !== o.lane &&
            ((e.flags |= 64),
            null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
        } else
          ((p = {
            eventTime: p,
            lane: f,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
            (i |= f));
        if (null === (o = o.next)) {
          if (null === (o = a.shared.pending)) break;
          ((o = (f = o).next),
            (f.next = null),
            (a.lastBaseUpdate = f),
            (a.shared.pending = null));
        }
      }
      if (
        (null === c && (u = d),
        (a.baseState = u),
        (a.firstBaseUpdate = s),
        (a.lastBaseUpdate = c),
        null !== (t = a.shared.interleaved))
      ) {
        a = t;
        do {
          ((i |= a.lane), (a = a.next));
        } while (a !== t);
      } else null === l && (a.shared.lanes = 0);
      ((Uu |= i), (e.lanes = i), (e.memoizedState = d));
    }
  }
  function ql(e, t, r) {
    if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
        var a = e[t],
          l = a.callback;
        if (null !== l) {
          if (((a.callback = null), (a = r), "function" != typeof l))
            throw Error(n(191, l));
          l.call(a);
        }
      }
  }
  var Kl = {},
    Yl = ja(Kl),
    Gl = ja(Kl),
    Xl = ja(Kl);
  function Jl(e) {
    if (e === Kl) throw Error(n(174));
    return e;
  }
  function Zl(e, t) {
    switch ((Pa(Xl, t), Pa(Gl, e), Pa(Yl, Kl), (e = t.nodeType))) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : fe(null, "");
        break;
      default:
        t = fe(
          (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
          (e = e.tagName),
        );
    }
    (Ta(Yl), Pa(Yl, t));
  }
  function ei() {
    (Ta(Yl), Ta(Gl), Ta(Xl));
  }
  function ti(e) {
    Jl(Xl.current);
    var t = Jl(Yl.current),
      n = fe(t, e.type);
    t !== n && (Pa(Gl, e), Pa(Yl, n));
  }
  function ni(e) {
    Gl.current === e && (Ta(Yl), Ta(Gl));
  }
  var ri = ja(0);
  function ai(e) {
    for (var t = e; null !== t; ) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (
          null !== n &&
          (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
        )
          return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (128 & t.flags) return t;
      } else if (null !== t.child) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; null === t.sibling; ) {
        if (null === t.return || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var li = [];
  function ii() {
    for (var e = 0; e < li.length; e++)
      li[e]._workInProgressVersionPrimary = null;
    li.length = 0;
  }
  var oi = C.ReactCurrentDispatcher,
    ui = C.ReactCurrentBatchConfig,
    si = 0,
    ci = null,
    di = null,
    fi = null,
    pi = !1,
    mi = !1,
    hi = 0,
    gi = 0;
  function yi() {
    throw Error(n(321));
  }
  function vi(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!dr(e[n], t[n])) return !1;
    return !0;
  }
  function bi(e, t, r, a, l, i) {
    if (
      ((si = i),
      (ci = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (oi.current = null === e || null === e.memoizedState ? no : ro),
      (e = r(a, l)),
      mi)
    ) {
      i = 0;
      do {
        if (((mi = !1), (hi = 0), 25 <= i)) throw Error(n(301));
        ((i += 1),
          (fi = di = null),
          (t.updateQueue = null),
          (oi.current = ao),
          (e = r(a, l)));
      } while (mi);
    }
    if (
      ((oi.current = to),
      (t = null !== di && null !== di.next),
      (si = 0),
      (fi = di = ci = null),
      (pi = !1),
      t)
    )
      throw Error(n(300));
    return e;
  }
  function ki() {
    var e = 0 !== hi;
    return ((hi = 0), e);
  }
  function wi() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (null === fi ? (ci.memoizedState = fi = e) : (fi = fi.next = e), fi);
  }
  function xi() {
    if (null === di) {
      var e = ci.alternate;
      e = null !== e ? e.memoizedState : null;
    } else e = di.next;
    var t = null === fi ? ci.memoizedState : fi.next;
    if (null !== t) ((fi = t), (di = e));
    else {
      if (null === e) throw Error(n(310));
      ((e = {
        memoizedState: (di = e).memoizedState,
        baseState: di.baseState,
        baseQueue: di.baseQueue,
        queue: di.queue,
        next: null,
      }),
        null === fi ? (ci.memoizedState = fi = e) : (fi = fi.next = e));
    }
    return fi;
  }
  function Si(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function Ci(e) {
    var t = xi(),
      r = t.queue;
    if (null === r) throw Error(n(311));
    r.lastRenderedReducer = e;
    var a = di,
      l = a.baseQueue,
      i = r.pending;
    if (null !== i) {
      if (null !== l) {
        var o = l.next;
        ((l.next = i.next), (i.next = o));
      }
      ((a.baseQueue = l = i), (r.pending = null));
    }
    if (null !== l) {
      ((i = l.next), (a = a.baseState));
      var u = (o = null),
        s = null,
        c = i;
      do {
        var d = c.lane;
        if ((si & d) === d)
          (null !== s &&
            (s = s.next =
              {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
            (a = c.hasEagerState ? c.eagerState : e(a, c.action)));
        else {
          var f = {
            lane: d,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          };
          (null === s ? ((u = s = f), (o = a)) : (s = s.next = f),
            (ci.lanes |= d),
            (Uu |= d));
        }
        c = c.next;
      } while (null !== c && c !== i);
      (null === s ? (o = a) : (s.next = u),
        dr(a, t.memoizedState) || (xo = !0),
        (t.memoizedState = a),
        (t.baseState = o),
        (t.baseQueue = s),
        (r.lastRenderedState = a));
    }
    if (null !== (e = r.interleaved)) {
      l = e;
      do {
        ((i = l.lane), (ci.lanes |= i), (Uu |= i), (l = l.next));
      } while (l !== e);
    } else null === l && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Ni(e) {
    var t = xi(),
      r = t.queue;
    if (null === r) throw Error(n(311));
    r.lastRenderedReducer = e;
    var a = r.dispatch,
      l = r.pending,
      i = t.memoizedState;
    if (null !== l) {
      r.pending = null;
      var o = (l = l.next);
      do {
        ((i = e(i, o.action)), (o = o.next));
      } while (o !== l);
      (dr(i, t.memoizedState) || (xo = !0),
        (t.memoizedState = i),
        null === t.baseQueue && (t.baseState = i),
        (r.lastRenderedState = i));
    }
    return [i, a];
  }
  function Ei() {}
  function _i(e, t) {
    var r = ci,
      a = xi(),
      l = t(),
      i = !dr(a.memoizedState, l);
    if (
      (i && ((a.memoizedState = l), (xo = !0)),
      (a = a.queue),
      Ui(Pi.bind(null, r, a, e), [e]),
      a.getSnapshot !== t || i || (null !== fi && 1 & fi.memoizedState.tag))
    ) {
      if (
        ((r.flags |= 2048),
        Fi(9, Ti.bind(null, r, a, l, t), void 0, null),
        null === Mu)
      )
        throw Error(n(349));
      30 & si || ji(r, t, l);
    }
    return l;
  }
  function ji(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      null === (t = ci.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (ci.updateQueue = t),
          (t.stores = [e]))
        : null === (n = t.stores)
          ? (t.stores = [e])
          : n.push(e));
  }
  function Ti(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), zi(t) && Mi(e));
  }
  function Pi(e, t, n) {
    return n(function () {
      zi(t) && Mi(e);
    });
  }
  function zi(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dr(e, n);
    } catch (r) {
      return !0;
    }
  }
  function Mi(e) {
    var t = Ol(e, 1);
    null !== t && ls(t, e, 1, -1);
  }
  function Li(e) {
    var t = wi();
    return (
      "function" == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Si,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Xi.bind(null, ci, e)),
      [t.memoizedState, e]
    );
  }
  function Fi(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = ci.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (ci.updateQueue = t),
          (t.lastEffect = e.next = e))
        : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function Ri() {
    return xi().memoizedState;
  }
  function Ii(e, t, n, r) {
    var a = wi();
    ((ci.flags |= e),
      (a.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r)));
  }
  function Di(e, t, n, r) {
    var a = xi();
    r = void 0 === r ? null : r;
    var l = void 0;
    if (null !== di) {
      var i = di.memoizedState;
      if (((l = i.destroy), null !== r && vi(r, i.deps)))
        return void (a.memoizedState = Fi(t, n, l, r));
    }
    ((ci.flags |= e), (a.memoizedState = Fi(1 | t, n, l, r)));
  }
  function Oi(e, t) {
    return Ii(8390656, 8, e, t);
  }
  function Ui(e, t) {
    return Di(2048, 8, e, t);
  }
  function Ai(e, t) {
    return Di(4, 2, e, t);
  }
  function $i(e, t) {
    return Di(4, 4, e, t);
  }
  function Bi(e, t) {
    return "function" == typeof t
      ? ((e = e()),
        t(e),
        function () {
          t(null);
        })
      : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
  }
  function Vi(e, t, n) {
    return (
      (n = null != n ? n.concat([e]) : null),
      Di(4, 4, Bi.bind(null, t, e), n)
    );
  }
  function Hi() {}
  function Wi(e, t) {
    var n = xi();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && vi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Qi(e, t) {
    var n = xi();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && vi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function qi(e, t, n) {
    return 21 & si
      ? (dr(n, t) ||
          ((n = bt()), (ci.lanes |= n), (Uu |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (xo = !0)), (e.memoizedState = n));
  }
  function Ki(e, t) {
    var n = St;
    ((St = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = ui.transition;
    ui.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((St = n), (ui.transition = r));
    }
  }
  function Yi() {
    return xi().memoizedState;
  }
  function Gi(e, t, n) {
    var r = as(e);
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ji(e)
        ? Zi(t, n)
        : null !== (n = Dl(e, t, n, r)) && (ls(n, e, r, rs()), eo(n, t, r)));
  }
  function Xi(e, t, n) {
    var r = as(e),
      a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ji(e)) Zi(t, a);
    else {
      var l = e.alternate;
      if (
        0 === e.lanes &&
        (null === l || 0 === l.lanes) &&
        null !== (l = t.lastRenderedReducer)
      )
        try {
          var i = t.lastRenderedState,
            o = l(i, n);
          if (((a.hasEagerState = !0), (a.eagerState = o), dr(o, i))) {
            var u = t.interleaved;
            return (
              null === u
                ? ((a.next = a), Il(t))
                : ((a.next = u.next), (u.next = a)),
              void (t.interleaved = a)
            );
          }
        } catch (s) {}
      null !== (n = Dl(e, t, a, r)) && (ls(n, e, r, (a = rs())), eo(n, t, r));
    }
  }
  function Ji(e) {
    var t = e.alternate;
    return e === ci || (null !== t && t === ci);
  }
  function Zi(e, t) {
    mi = pi = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function eo(e, t, n) {
    if (4194240 & n) {
      var r = t.lanes;
      ((n |= r &= e.pendingLanes), (t.lanes = n), xt(e, n));
    }
  }
  var to = {
      readContext: Fl,
      useCallback: yi,
      useContext: yi,
      useEffect: yi,
      useImperativeHandle: yi,
      useInsertionEffect: yi,
      useLayoutEffect: yi,
      useMemo: yi,
      useReducer: yi,
      useRef: yi,
      useState: yi,
      useDebugValue: yi,
      useDeferredValue: yi,
      useTransition: yi,
      useMutableSource: yi,
      useSyncExternalStore: yi,
      useId: yi,
      unstable_isNewReconciler: !1,
    },
    no = {
      readContext: Fl,
      useCallback: function (e, t) {
        return ((wi().memoizedState = [e, void 0 === t ? null : t]), e);
      },
      useContext: Fl,
      useEffect: Oi,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          Ii(4194308, 4, Bi.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ii(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ii(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = wi();
        return (
          (t = void 0 === t ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = wi();
        return (
          (t = void 0 !== n ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Gi.bind(null, ci, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        return ((e = { current: e }), (wi().memoizedState = e));
      },
      useState: Li,
      useDebugValue: Hi,
      useDeferredValue: function (e) {
        return (wi().memoizedState = e);
      },
      useTransition: function () {
        var e = Li(!1),
          t = e[0];
        return ((e = Ki.bind(null, e[1])), (wi().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var a = ci,
          l = wi();
        if (ul) {
          if (void 0 === r) throw Error(n(407));
          r = r();
        } else {
          if (((r = t()), null === Mu)) throw Error(n(349));
          30 & si || ji(a, t, r);
        }
        l.memoizedState = r;
        var i = { value: r, getSnapshot: t };
        return (
          (l.queue = i),
          Oi(Pi.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          Fi(9, Ti.bind(null, a, i, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = wi(),
          t = Mu.identifierPrefix;
        if (ul) {
          var n = tl;
          ((t =
            ":" +
            t +
            "R" +
            (n = (el & ~(1 << (32 - ct(el) - 1))).toString(32) + n)),
            0 < (n = hi++) && (t += "H" + n.toString(32)),
            (t += ":"));
        } else t = ":" + t + "r" + (n = gi++).toString(32) + ":";
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ro = {
      readContext: Fl,
      useCallback: Wi,
      useContext: Fl,
      useEffect: Ui,
      useImperativeHandle: Vi,
      useInsertionEffect: Ai,
      useLayoutEffect: $i,
      useMemo: Qi,
      useReducer: Ci,
      useRef: Ri,
      useState: function () {
        return Ci(Si);
      },
      useDebugValue: Hi,
      useDeferredValue: function (e) {
        return qi(xi(), di.memoizedState, e);
      },
      useTransition: function () {
        return [Ci(Si)[0], xi().memoizedState];
      },
      useMutableSource: Ei,
      useSyncExternalStore: _i,
      useId: Yi,
      unstable_isNewReconciler: !1,
    },
    ao = {
      readContext: Fl,
      useCallback: Wi,
      useContext: Fl,
      useEffect: Ui,
      useImperativeHandle: Vi,
      useInsertionEffect: Ai,
      useLayoutEffect: $i,
      useMemo: Qi,
      useReducer: Ni,
      useRef: Ri,
      useState: function () {
        return Ni(Si);
      },
      useDebugValue: Hi,
      useDeferredValue: function (e) {
        var t = xi();
        return null === di ? (t.memoizedState = e) : qi(t, di.memoizedState, e);
      },
      useTransition: function () {
        return [Ni(Si)[0], xi().memoizedState];
      },
      useMutableSource: Ei,
      useSyncExternalStore: _i,
      useId: Yi,
      unstable_isNewReconciler: !1,
    };
  function lo(e, t) {
    if (e && e.defaultProps) {
      for (var n in ((t = $({}, t)), (e = e.defaultProps)))
        void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function io(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : $({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n));
  }
  var oo = {
    isMounted: function (e) {
      return !!(e = e._reactInternals) && Qe(e) === e;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = rs(),
        a = as(e),
        l = Bl(r, a);
      ((l.payload = t),
        null != n && (l.callback = n),
        null !== (t = Vl(e, l, a)) && (ls(t, e, a, r), Hl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = rs(),
        a = as(e),
        l = Bl(r, a);
      ((l.tag = 1),
        (l.payload = t),
        null != n && (l.callback = n),
        null !== (t = Vl(e, l, a)) && (ls(t, e, a, r), Hl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = rs(),
        r = as(e),
        a = Bl(n, r);
      ((a.tag = 2),
        null != t && (a.callback = t),
        null !== (t = Vl(e, a, r)) && (ls(t, e, r, n), Hl(t, e, r)));
    },
  };
  function uo(e, t, n, r, a, l, i) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, l, i)
      : !(
          t.prototype &&
          t.prototype.isPureReactComponent &&
          fr(n, r) &&
          fr(a, l)
        );
  }
  function so(e, t, n) {
    var r = !1,
      a = za,
      l = t.contextType;
    return (
      "object" == typeof l && null !== l
        ? (l = Fl(l))
        : ((a = Ia(t) ? Fa : Ma.current),
          (l = (r = null != (r = t.contextTypes)) ? Ra(e, a) : za)),
      (t = new t(n, l)),
      (e.memoizedState =
        null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = oo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
    );
  }
  function co(e, t, n, r) {
    ((e = t.state),
      "function" == typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r),
      "function" == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && oo.enqueueReplaceState(t, t.state, null));
  }
  function fo(e, t, n, r) {
    var a = e.stateNode;
    ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), Al(e));
    var l = t.contextType;
    ("object" == typeof l && null !== l
      ? (a.context = Fl(l))
      : ((l = Ia(t) ? Fa : Ma.current), (a.context = Ra(e, l))),
      (a.state = e.memoizedState),
      "function" == typeof (l = t.getDerivedStateFromProps) &&
        (io(e, t, l, n), (a.state = e.memoizedState)),
      "function" == typeof t.getDerivedStateFromProps ||
        "function" == typeof a.getSnapshotBeforeUpdate ||
        ("function" != typeof a.UNSAFE_componentWillMount &&
          "function" != typeof a.componentWillMount) ||
        ((t = a.state),
        "function" == typeof a.componentWillMount && a.componentWillMount(),
        "function" == typeof a.UNSAFE_componentWillMount &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && oo.enqueueReplaceState(a, a.state, null),
        Ql(e, n, a, r),
        (a.state = e.memoizedState)),
      "function" == typeof a.componentDidMount && (e.flags |= 4194308));
  }
  function po(e, t) {
    try {
      var n = "",
        r = t;
      do {
        ((n += W(r)), (r = r.return));
      } while (r);
      var a = n;
    } catch (l) {
      a = "\nError generating stack: " + l.message + "\n" + l.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function mo(e, t, n) {
    return {
      value: e,
      source: null,
      stack: null != n ? n : null,
      digest: null != t ? t : null,
    };
  }
  var ho = "function" == typeof WeakMap ? WeakMap : Map;
  function go(e, t, n) {
    (((n = Bl(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        qu || ((qu = !0), (Ku = r));
      }),
      n
    );
  }
  function yo(e, t, n) {
    (n = Bl(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
      var a = t.value;
      ((n.payload = function () {
        return r(a);
      }),
        (n.callback = function () {}));
    }
    var l = e.stateNode;
    return (
      null !== l &&
        "function" == typeof l.componentDidCatch &&
        (n.callback = function () {
          "function" != typeof r &&
            (null === Yu ? (Yu = new Set([this])) : Yu.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : "",
          });
        }),
      n
    );
  }
  function vo(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
      r = e.pingCache = new ho();
      var a = new Set();
      r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = js.bind(null, e, t, n)), t.then(e, e));
  }
  function bo(e) {
    do {
      var t;
      if (
        ((t = 13 === e.tag) &&
          (t = null === (t = e.memoizedState) || null !== t.dehydrated),
        t)
      )
        return e;
      e = e.return;
    } while (null !== e);
    return null;
  }
  function ko(e, t, n, r, a) {
    return 1 & e.mode
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            1 === n.tag &&
              (null === n.alternate
                ? (n.tag = 17)
                : (((t = Bl(-1, 1)).tag = 2), Vl(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var wo = C.ReactCurrentOwner,
    xo = !1;
  function So(e, t, n, r) {
    t.child = null === e ? Nl(t, null, n, r) : Cl(t, e.child, n, r);
  }
  function Co(e, t, n, r, a) {
    n = n.render;
    var l = t.ref;
    return (
      Ll(t, a),
      (r = bi(e, t, n, r, l, a)),
      (n = ki()),
      null === e || xo
        ? (ul && n && al(t), (t.flags |= 1), So(e, t, r, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          qo(e, t, a))
    );
  }
  function No(e, t, n, r, a) {
    if (null === e) {
      var l = n.type;
      return "function" != typeof l ||
        Rs(l) ||
        void 0 !== l.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
        ? (((e = Ds(n.type, null, r, t, t.mode, a)).ref = t.ref),
          (e.return = t),
          (t.child = e))
        : ((t.tag = 15), (t.type = l), Eo(e, t, l, r, a));
    }
    if (((l = e.child), 0 === (e.lanes & a))) {
      var i = l.memoizedProps;
      if ((n = null !== (n = n.compare) ? n : fr)(i, r) && e.ref === t.ref)
        return qo(e, t, a);
    }
    return (
      (t.flags |= 1),
      ((e = Is(l, r)).ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Eo(e, t, n, r, a) {
    if (null !== e) {
      var l = e.memoizedProps;
      if (fr(l, r) && e.ref === t.ref) {
        if (((xo = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
          return ((t.lanes = e.lanes), qo(e, t, a));
        131072 & e.flags && (xo = !0);
      }
    }
    return To(e, t, n, r, a);
  }
  function _o(e, t, n) {
    var r = t.pendingProps,
      a = r.children,
      l = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode)
      if (1 & t.mode) {
        if (!(1073741824 & n))
          return (
            (e = null !== l ? l.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Pa(Iu, Ru),
            (Ru |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = null !== l ? l.baseLanes : n),
          Pa(Iu, Ru),
          (Ru |= r));
      } else
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Pa(Iu, Ru),
          (Ru |= n));
    else
      (null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Pa(Iu, Ru),
        (Ru |= r));
    return (So(e, t, a, n), t.child);
  }
  function jo(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function To(e, t, n, r, a) {
    var l = Ia(n) ? Fa : Ma.current;
    return (
      (l = Ra(t, l)),
      Ll(t, a),
      (n = bi(e, t, n, r, l, a)),
      (r = ki()),
      null === e || xo
        ? (ul && r && al(t), (t.flags |= 1), So(e, t, n, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          qo(e, t, a))
    );
  }
  function Po(e, t, n, r, a) {
    if (Ia(n)) {
      var l = !0;
      Aa(t);
    } else l = !1;
    if ((Ll(t, a), null === t.stateNode))
      (Qo(e, t), so(t, n, r), fo(t, n, r, a), (r = !0));
    else if (null === e) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var u = i.context,
        s = n.contextType;
      s =
        "object" == typeof s && null !== s
          ? Fl(s)
          : Ra(t, (s = Ia(n) ? Fa : Ma.current));
      var c = n.getDerivedStateFromProps,
        d =
          "function" == typeof c ||
          "function" == typeof i.getSnapshotBeforeUpdate;
      (d ||
        ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
          "function" != typeof i.componentWillReceiveProps) ||
        ((o !== r || u !== s) && co(t, i, r, s)),
        (Ul = !1));
      var f = t.memoizedState;
      ((i.state = f),
        Ql(t, r, i, a),
        (u = t.memoizedState),
        o !== r || f !== u || La.current || Ul
          ? ("function" == typeof c && (io(t, n, c, r), (u = t.memoizedState)),
            (o = Ul || uo(t, n, o, r, f, u, s))
              ? (d ||
                  ("function" != typeof i.UNSAFE_componentWillMount &&
                    "function" != typeof i.componentWillMount) ||
                  ("function" == typeof i.componentWillMount &&
                    i.componentWillMount(),
                  "function" == typeof i.UNSAFE_componentWillMount &&
                    i.UNSAFE_componentWillMount()),
                "function" == typeof i.componentDidMount &&
                  (t.flags |= 4194308))
              : ("function" == typeof i.componentDidMount &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (i.props = r),
            (i.state = u),
            (i.context = s),
            (r = o))
          : ("function" == typeof i.componentDidMount && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((i = t.stateNode),
        $l(e, t),
        (o = t.memoizedProps),
        (s = t.type === t.elementType ? o : lo(t.type, o)),
        (i.props = s),
        (d = t.pendingProps),
        (f = i.context),
        (u =
          "object" == typeof (u = n.contextType) && null !== u
            ? Fl(u)
            : Ra(t, (u = Ia(n) ? Fa : Ma.current))));
      var p = n.getDerivedStateFromProps;
      ((c =
        "function" == typeof p ||
        "function" == typeof i.getSnapshotBeforeUpdate) ||
        ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
          "function" != typeof i.componentWillReceiveProps) ||
        ((o !== d || f !== u) && co(t, i, r, u)),
        (Ul = !1),
        (f = t.memoizedState),
        (i.state = f),
        Ql(t, r, i, a));
      var m = t.memoizedState;
      o !== d || f !== m || La.current || Ul
        ? ("function" == typeof p && (io(t, n, p, r), (m = t.memoizedState)),
          (s = Ul || uo(t, n, s, r, f, m, u) || !1)
            ? (c ||
                ("function" != typeof i.UNSAFE_componentWillUpdate &&
                  "function" != typeof i.componentWillUpdate) ||
                ("function" == typeof i.componentWillUpdate &&
                  i.componentWillUpdate(r, m, u),
                "function" == typeof i.UNSAFE_componentWillUpdate &&
                  i.UNSAFE_componentWillUpdate(r, m, u)),
              "function" == typeof i.componentDidUpdate && (t.flags |= 4),
              "function" == typeof i.getSnapshotBeforeUpdate &&
                (t.flags |= 1024))
            : ("function" != typeof i.componentDidUpdate ||
                (o === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof i.getSnapshotBeforeUpdate ||
                (o === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = m)),
          (i.props = r),
          (i.state = m),
          (i.context = u),
          (r = s))
        : ("function" != typeof i.componentDidUpdate ||
            (o === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 4),
          "function" != typeof i.getSnapshotBeforeUpdate ||
            (o === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return zo(e, t, n, r, l, a);
  }
  function zo(e, t, n, r, a, l) {
    jo(e, t);
    var i = !!(128 & t.flags);
    if (!r && !i) return (a && $a(t, n, !1), qo(e, t, l));
    ((r = t.stateNode), (wo.current = t));
    var o =
      i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return (
      (t.flags |= 1),
      null !== e && i
        ? ((t.child = Cl(t, e.child, null, l)), (t.child = Cl(t, null, o, l)))
        : So(e, t, o, l),
      (t.memoizedState = r.state),
      a && $a(t, n, !0),
      t.child
    );
  }
  function Mo(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Oa(0, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Oa(0, t.context, !1),
      Zl(e, t.containerInfo));
  }
  function Lo(e, t, n, r, a) {
    return (yl(), vl(a), (t.flags |= 256), So(e, t, n, r), t.child);
  }
  var Fo,
    Ro,
    Io,
    Do,
    Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Uo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ao(e, t, r) {
    var a,
      l = t.pendingProps,
      i = ri.current,
      o = !1,
      u = !!(128 & t.flags);
    if (
      ((a = u) || (a = (null === e || null !== e.memoizedState) && !!(2 & i)),
      a
        ? ((o = !0), (t.flags &= -129))
        : (null !== e && null === e.memoizedState) || (i |= 1),
      Pa(ri, 1 & i),
      null === e)
    )
      return (
        pl(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
          ? (1 & t.mode
              ? "$!" === e.data
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = l.children),
            (e = l.fallback),
            o
              ? ((l = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                1 & l || null === o
                  ? (o = Us(u, l, 0, null))
                  : ((o.childLanes = 0), (o.pendingProps = u)),
                (e = Os(e, l, r, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Uo(r)),
                (t.memoizedState = Oo),
                e)
              : $o(t, u))
      );
    if (null !== (i = e.memoizedState) && null !== (a = i.dehydrated))
      return (function (e, t, r, a, l, i, o) {
        if (r)
          return 256 & t.flags
            ? ((t.flags &= -257), Bo(e, t, o, (a = mo(Error(n(422))))))
            : null !== t.memoizedState
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((i = a.fallback),
                (l = t.mode),
                (a = Us({ mode: "visible", children: a.children }, l, 0, null)),
                ((i = Os(i, l, o, null)).flags |= 2),
                (a.return = t),
                (i.return = t),
                (a.sibling = i),
                (t.child = a),
                1 & t.mode && Cl(t, e.child, null, o),
                (t.child.memoizedState = Uo(o)),
                (t.memoizedState = Oo),
                i);
        if (!(1 & t.mode)) return Bo(e, t, o, null);
        if ("$!" === l.data) {
          if ((a = l.nextSibling && l.nextSibling.dataset)) var u = a.dgst;
          return (
            (a = u),
            Bo(e, t, o, (a = mo((i = Error(n(419))), a, void 0)))
          );
        }
        if (((u = 0 !== (o & e.childLanes)), xo || u)) {
          if (null !== (a = Mu)) {
            switch (o & -o) {
              case 4:
                l = 2;
                break;
              case 16:
                l = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                l = 32;
                break;
              case 536870912:
                l = 268435456;
                break;
              default:
                l = 0;
            }
            0 !== (l = 0 !== (l & (a.suspendedLanes | o)) ? 0 : l) &&
              l !== i.retryLane &&
              ((i.retryLane = l), Ol(e, l), ls(a, e, l, -1));
          }
          return (vs(), Bo(e, t, o, (a = mo(Error(n(421))))));
        }
        return "$?" === l.data
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Ps.bind(null, e)),
            (l._reactRetry = t),
            null)
          : ((e = i.treeContext),
            (ol = pa(l.nextSibling)),
            (il = t),
            (ul = !0),
            (sl = null),
            null !== e &&
              ((Xa[Ja++] = el),
              (Xa[Ja++] = tl),
              (Xa[Ja++] = Za),
              (el = e.id),
              (tl = e.overflow),
              (Za = t)),
            ((t = $o(t, a.children)).flags |= 4096),
            t);
      })(e, t, u, l, a, i, r);
    if (o) {
      ((o = l.fallback), (u = t.mode), (a = (i = e.child).sibling));
      var s = { mode: "hidden", children: l.children };
      return (
        1 & u || t.child === i
          ? ((l = Is(i, s)).subtreeFlags = 14680064 & i.subtreeFlags)
          : (((l = t.child).childLanes = 0),
            (l.pendingProps = s),
            (t.deletions = null)),
        null !== a ? (o = Is(a, o)) : ((o = Os(o, u, r, null)).flags |= 2),
        (o.return = t),
        (l.return = t),
        (l.sibling = o),
        (t.child = l),
        (l = o),
        (o = t.child),
        (u =
          null === (u = e.child.memoizedState)
            ? Uo(r)
            : {
                baseLanes: u.baseLanes | r,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~r),
        (t.memoizedState = Oo),
        l
      );
    }
    return (
      (e = (o = e.child).sibling),
      (l = Is(o, { mode: "visible", children: l.children })),
      !(1 & t.mode) && (l.lanes = r),
      (l.return = t),
      (l.sibling = null),
      null !== e &&
        (null === (r = t.deletions)
          ? ((t.deletions = [e]), (t.flags |= 16))
          : r.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function $o(e, t) {
    return (
      ((t = Us({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
      (e.child = t)
    );
  }
  function Bo(e, t, n, r) {
    return (
      null !== r && vl(r),
      Cl(t, e.child, null, n),
      ((e = $o(t, t.pendingProps.children)).flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Vo(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), Ml(e.return, t, n));
  }
  function Ho(e, t, n, r, a) {
    var l = e.memoizedState;
    null === l
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = a));
  }
  function Wo(e, t, n) {
    var r = t.pendingProps,
      a = r.revealOrder,
      l = r.tail;
    if ((So(e, t, r.children, n), 2 & (r = ri.current)))
      ((r = (1 & r) | 2), (t.flags |= 128));
    else {
      if (null !== e && 128 & e.flags)
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && Vo(e, n, t);
          else if (19 === e.tag) Vo(e, n, t);
          else if (null !== e.child) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((Pa(ri, r), 1 & t.mode))
      switch (a) {
        case "forwards":
          for (n = t.child, a = null; null !== n; )
            (null !== (e = n.alternate) && null === ai(e) && (a = n),
              (n = n.sibling));
          (null === (n = a)
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
            Ho(t, !1, a, n, l));
          break;
        case "backwards":
          for (n = null, a = t.child, t.child = null; null !== a; ) {
            if (null !== (e = a.alternate) && null === ai(e)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
          }
          Ho(t, !0, n, null, l);
          break;
        case "together":
          Ho(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    else t.memoizedState = null;
    return t.child;
  }
  function Qo(e, t) {
    !(1 & t.mode) &&
      null !== e &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function qo(e, t, r) {
    if (
      (null !== e && (t.dependencies = e.dependencies),
      (Uu |= t.lanes),
      0 === (r & t.childLanes))
    )
      return null;
    if (null !== e && t.child !== e.child) throw Error(n(153));
    if (null !== t.child) {
      for (
        r = Is((e = t.child), e.pendingProps), t.child = r, r.return = t;
        null !== e.sibling;
      )
        ((e = e.sibling), ((r = r.sibling = Is(e, e.pendingProps)).return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function Ko(e, t) {
    if (!ul)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            (null !== t.alternate && (n = t), (t = t.sibling));
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            (null !== n.alternate && (r = n), (n = n.sibling));
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Yo(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var a = e.child; null !== a; )
        ((n |= a.lanes | a.childLanes),
          (r |= 14680064 & a.subtreeFlags),
          (r |= 14680064 & a.flags),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; null !== a; )
        ((n |= a.lanes | a.childLanes),
          (r |= a.subtreeFlags),
          (r |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Go(e, t, r) {
    var l = t.pendingProps;
    switch ((ll(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Yo(t), null);
      case 1:
      case 17:
        return (Ia(t.type) && Da(), Yo(t), null);
      case 3:
        return (
          (l = t.stateNode),
          ei(),
          Ta(La),
          Ta(Ma),
          ii(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (null !== e && null !== e.child) ||
            (hl(t)
              ? (t.flags |= 4)
              : null === e ||
                (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                ((t.flags |= 1024), null !== sl && (ss(sl), (sl = null)))),
          Ro(e, t),
          Yo(t),
          null
        );
      case 5:
        ni(t);
        var i = Jl(Xl.current);
        if (((r = t.type), null !== e && null != t.stateNode))
          (Io(e, t, r, l, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!l) {
            if (null === t.stateNode) throw Error(n(166));
            return (Yo(t), null);
          }
          if (((e = Jl(Yl.current)), hl(t))) {
            ((l = t.stateNode), (r = t.type));
            var o = t.memoizedProps;
            switch (((l[ga] = t), (l[ya] = o), (e = !!(1 & t.mode)), r)) {
              case "dialog":
                (Vr("cancel", l), Vr("close", l));
                break;
              case "iframe":
              case "object":
              case "embed":
                Vr("load", l);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ur.length; i++) Vr(Ur[i], l);
                break;
              case "source":
                Vr("error", l);
                break;
              case "img":
              case "image":
              case "link":
                (Vr("error", l), Vr("load", l));
                break;
              case "details":
                Vr("toggle", l);
                break;
              case "input":
                (ee(l, o), Vr("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!o.multiple }),
                  Vr("invalid", l));
                break;
              case "textarea":
                (ue(l, o), Vr("invalid", l));
            }
            for (var u in (xe(r, o), (i = null), o))
              if (o.hasOwnProperty(u)) {
                var s = o[u];
                "children" === u
                  ? "string" == typeof s
                    ? l.textContent !== s &&
                      (!0 !== o.suppressHydrationWarning &&
                        na(l.textContent, s, e),
                      (i = ["children", s]))
                    : "number" == typeof s &&
                      l.textContent !== "" + s &&
                      (!0 !== o.suppressHydrationWarning &&
                        na(l.textContent, s, e),
                      (i = ["children", "" + s]))
                  : a.hasOwnProperty(u) &&
                    null != s &&
                    "onScroll" === u &&
                    Vr("scroll", l);
              }
            switch (r) {
              case "input":
                (G(l), re(l, o, !0));
                break;
              case "textarea":
                (G(l), ce(l));
                break;
              case "select":
              case "option":
                break;
              default:
                "function" == typeof o.onClick && (l.onclick = ra);
            }
            ((l = i), (t.updateQueue = l), null !== l && (t.flags |= 4));
          } else {
            ((u = 9 === i.nodeType ? i : i.ownerDocument),
              "http://www.w3.org/1999/xhtml" === e && (e = de(r)),
              "http://www.w3.org/1999/xhtml" === e
                ? "script" === r
                  ? (((e = u.createElement("div")).innerHTML =
                      "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : "string" == typeof l.is
                    ? (e = u.createElement(r, { is: l.is }))
                    : ((e = u.createElement(r)),
                      "select" === r &&
                        ((u = e),
                        l.multiple
                          ? (u.multiple = !0)
                          : l.size && (u.size = l.size)))
                : (e = u.createElementNS(e, r)),
              (e[ga] = t),
              (e[ya] = l),
              Fo(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = Se(r, l)), r)) {
                case "dialog":
                  (Vr("cancel", e), Vr("close", e), (i = l));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Vr("load", e), (i = l));
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Ur.length; i++) Vr(Ur[i], e);
                  i = l;
                  break;
                case "source":
                  (Vr("error", e), (i = l));
                  break;
                case "img":
                case "image":
                case "link":
                  (Vr("error", e), Vr("load", e), (i = l));
                  break;
                case "details":
                  (Vr("toggle", e), (i = l));
                  break;
                case "input":
                  (ee(e, l), (i = Z(e, l)), Vr("invalid", e));
                  break;
                case "option":
                default:
                  i = l;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!l.multiple }),
                    (i = $({}, l, { value: void 0 })),
                    Vr("invalid", e));
                  break;
                case "textarea":
                  (ue(e, l), (i = oe(e, l)), Vr("invalid", e));
              }
              for (o in (xe(r, i), (s = i)))
                if (s.hasOwnProperty(o)) {
                  var c = s[o];
                  "style" === o
                    ? ke(e, c)
                    : "dangerouslySetInnerHTML" === o
                      ? null != (c = c ? c.__html : void 0) && he(e, c)
                      : "children" === o
                        ? "string" == typeof c
                          ? ("textarea" !== r || "" !== c) && ge(e, c)
                          : "number" == typeof c && ge(e, "" + c)
                        : "suppressContentEditableWarning" !== o &&
                          "suppressHydrationWarning" !== o &&
                          "autoFocus" !== o &&
                          (a.hasOwnProperty(o)
                            ? null != c && "onScroll" === o && Vr("scroll", e)
                            : null != c && k(e, o, c, u));
                }
              switch (r) {
                case "input":
                  (G(e), re(e, l, !1));
                  break;
                case "textarea":
                  (G(e), ce(e));
                  break;
                case "option":
                  null != l.value && e.setAttribute("value", "" + K(l.value));
                  break;
                case "select":
                  ((e.multiple = !!l.multiple),
                    null != (o = l.value)
                      ? ie(e, !!l.multiple, o, !1)
                      : null != l.defaultValue &&
                        ie(e, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  "function" == typeof i.onClick && (e.onclick = ra);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Yo(t), null);
      case 6:
        if (e && null != t.stateNode) Do(e, t, e.memoizedProps, l);
        else {
          if ("string" != typeof l && null === t.stateNode) throw Error(n(166));
          if (((r = Jl(Xl.current)), Jl(Yl.current), hl(t))) {
            if (
              ((l = t.stateNode),
              (r = t.memoizedProps),
              (l[ga] = t),
              (o = l.nodeValue !== r) && null !== (e = il))
            )
              switch (e.tag) {
                case 3:
                  na(l.nodeValue, r, !!(1 & e.mode));
                  break;
                case 5:
                  !0 !== e.memoizedProps.suppressHydrationWarning &&
                    na(l.nodeValue, r, !!(1 & e.mode));
              }
            o && (t.flags |= 4);
          } else
            (((l = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(l))[
              ga
            ] = t),
              (t.stateNode = l));
        }
        return (Yo(t), null);
      case 13:
        if (
          (Ta(ri),
          (l = t.memoizedState),
          null === e ||
            (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
        ) {
          if (ul && null !== ol && 1 & t.mode && !(128 & t.flags))
            (gl(), yl(), (t.flags |= 98560), (o = !1));
          else if (((o = hl(t)), null !== l && null !== l.dehydrated)) {
            if (null === e) {
              if (!o) throw Error(n(318));
              if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                throw Error(n(317));
              o[ga] = t;
            } else
              (yl(),
                !(128 & t.flags) && (t.memoizedState = null),
                (t.flags |= 4));
            (Yo(t), (o = !1));
          } else (null !== sl && (ss(sl), (sl = null)), (o = !0));
          if (!o) return 65536 & t.flags ? t : null;
        }
        return 128 & t.flags
          ? ((t.lanes = r), t)
          : ((l = null !== l) != (null !== e && null !== e.memoizedState) &&
              l &&
              ((t.child.flags |= 8192),
              1 & t.mode &&
                (null === e || 1 & ri.current ? 0 === Du && (Du = 3) : vs())),
            null !== t.updateQueue && (t.flags |= 4),
            Yo(t),
            null);
      case 4:
        return (
          ei(),
          Ro(e, t),
          null === e && Qr(t.stateNode.containerInfo),
          Yo(t),
          null
        );
      case 10:
        return (zl(t.type._context), Yo(t), null);
      case 19:
        if ((Ta(ri), null === (o = t.memoizedState))) return (Yo(t), null);
        if (((l = !!(128 & t.flags)), null === (u = o.rendering)))
          if (l) Ko(o, !1);
          else {
            if (0 !== Du || (null !== e && 128 & e.flags))
              for (e = t.child; null !== e; ) {
                if (null !== (u = ai(e))) {
                  for (
                    t.flags |= 128,
                      Ko(o, !1),
                      null !== (l = u.updateQueue) &&
                        ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = r,
                      r = t.child;
                    null !== r;
                  )
                    ((e = l),
                      ((o = r).flags &= 14680066),
                      null === (u = o.alternate)
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            null === e
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling));
                  return (Pa(ri, (1 & ri.current) | 2), t.child);
                }
                e = e.sibling;
              }
            null !== o.tail &&
              tt() > Wu &&
              ((t.flags |= 128), (l = !0), Ko(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (null !== (e = ai(u))) {
              if (
                ((t.flags |= 128),
                (l = !0),
                null !== (r = e.updateQueue) &&
                  ((t.updateQueue = r), (t.flags |= 4)),
                Ko(o, !0),
                null === o.tail &&
                  "hidden" === o.tailMode &&
                  !u.alternate &&
                  !ul)
              )
                return (Yo(t), null);
            } else
              2 * tt() - o.renderingStartTime > Wu &&
                1073741824 !== r &&
                ((t.flags |= 128), (l = !0), Ko(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : (null !== (r = o.last) ? (r.sibling = u) : (t.child = u),
              (o.last = u));
        }
        return null !== o.tail
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = tt()),
            (t.sibling = null),
            (r = ri.current),
            Pa(ri, l ? (1 & r) | 2 : 1 & r),
            t)
          : (Yo(t), null);
      case 22:
      case 23:
        return (
          ms(),
          (l = null !== t.memoizedState),
          null !== e && (null !== e.memoizedState) !== l && (t.flags |= 8192),
          l && 1 & t.mode
            ? !!(1073741824 & Ru) &&
              (Yo(t), 6 & t.subtreeFlags && (t.flags |= 8192))
            : Yo(t),
          null
        );
      case 24:
      case 25:
        return null;
    }
    throw Error(n(156, t.tag));
  }
  function Xo(e, t) {
    switch ((ll(t), t.tag)) {
      case 1:
        return (
          Ia(t.type) && Da(),
          65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
        );
      case 3:
        return (
          ei(),
          Ta(La),
          Ta(Ma),
          ii(),
          65536 & (e = t.flags) && !(128 & e)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null
        );
      case 5:
        return (ni(t), null);
      case 13:
        if ((Ta(ri), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
          if (null === t.alternate) throw Error(n(340));
          yl();
        }
        return 65536 & (e = t.flags)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null;
      case 19:
        return (Ta(ri), null);
      case 4:
        return (ei(), null);
      case 10:
        return (zl(t.type._context), null);
      case 22:
      case 23:
        return (ms(), null);
      default:
        return null;
    }
  }
  ((Fo = function (e, t) {
    for (var n = t.child; null !== n; ) {
      if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
      else if (4 !== n.tag && null !== n.child) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; null === n.sibling; ) {
        if (null === n.return || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Ro = function () {}),
    (Io = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), Jl(Yl.current));
        var i,
          o = null;
        switch (n) {
          case "input":
            ((l = Z(e, l)), (r = Z(e, r)), (o = []));
            break;
          case "select":
            ((l = $({}, l, { value: void 0 })),
              (r = $({}, r, { value: void 0 })),
              (o = []));
            break;
          case "textarea":
            ((l = oe(e, l)), (r = oe(e, r)), (o = []));
            break;
          default:
            "function" != typeof l.onClick &&
              "function" == typeof r.onClick &&
              (e.onclick = ra);
        }
        for (c in (xe(n, r), (n = null), l))
          if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
            if ("style" === c) {
              var u = l[c];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              "dangerouslySetInnerHTML" !== c &&
                "children" !== c &&
                "suppressContentEditableWarning" !== c &&
                "suppressHydrationWarning" !== c &&
                "autoFocus" !== c &&
                (a.hasOwnProperty(c)
                  ? o || (o = [])
                  : (o = o || []).push(c, null));
        for (c in r) {
          var s = r[c];
          if (
            ((u = null != l ? l[c] : void 0),
            r.hasOwnProperty(c) && s !== u && (null != s || null != u))
          )
            if ("style" === c)
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in s)
                  s.hasOwnProperty(i) &&
                    u[i] !== s[i] &&
                    (n || (n = {}), (n[i] = s[i]));
              } else (n || (o || (o = []), o.push(c, n)), (n = s));
            else
              "dangerouslySetInnerHTML" === c
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  null != s && u !== s && (o = o || []).push(c, s))
                : "children" === c
                  ? ("string" != typeof s && "number" != typeof s) ||
                    (o = o || []).push(c, "" + s)
                  : "suppressContentEditableWarning" !== c &&
                    "suppressHydrationWarning" !== c &&
                    (a.hasOwnProperty(c)
                      ? (null != s && "onScroll" === c && Vr("scroll", e),
                        o || u === s || (o = []))
                      : (o = o || []).push(c, s));
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4);
      }
    }),
    (Do = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  var Jo = !1,
    Zo = !1,
    eu = "function" == typeof WeakSet ? WeakSet : Set,
    tu = null;
  function nu(e, t) {
    var n = e.ref;
    if (null !== n)
      if ("function" == typeof n)
        try {
          n(null);
        } catch (r) {
          _s(e, t, r);
        }
      else n.current = null;
  }
  function ru(e, t, n) {
    try {
      n();
    } catch (r) {
      _s(e, t, r);
    }
  }
  var au = !1;
  function lu(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
      var a = (r = r.next);
      do {
        if ((a.tag & e) === e) {
          var l = a.destroy;
          ((a.destroy = void 0), void 0 !== l && ru(t, n, l));
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function iu(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ou(e) {
    var t = e.ref;
    if (null !== t) {
      var n = e.stateNode;
      (e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e));
    }
  }
  function uu(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), uu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      5 === e.tag &&
        null !== (t = e.stateNode) &&
        (delete t[ga], delete t[ya], delete t[ba], delete t[ka], delete t[wa]),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function su(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
  }
  function cu(e) {
    e: for (;;) {
      for (; null === e.sibling; ) {
        if (null === e.return || su(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
      ) {
        if (2 & e.flags) continue e;
        if (null === e.child || 4 === e.tag) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(2 & e.flags)) return e.stateNode;
    }
  }
  function du(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      ((e = e.stateNode),
        t
          ? 8 === n.nodeType
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (8 === n.nodeType
              ? (t = n.parentNode).insertBefore(e, n)
              : (t = n).appendChild(e),
            null != (n = n._reactRootContainer) ||
              null !== t.onclick ||
              (t.onclick = ra)));
    else if (4 !== r && null !== (e = e.child))
      for (du(e, t, n), e = e.sibling; null !== e; )
        (du(e, t, n), (e = e.sibling));
  }
  function fu(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
      for (fu(e, t, n), e = e.sibling; null !== e; )
        (fu(e, t, n), (e = e.sibling));
  }
  var pu = null,
    mu = !1;
  function hu(e, t, n) {
    for (n = n.child; null !== n; ) (gu(e, t, n), (n = n.sibling));
  }
  function gu(e, t, n) {
    if (st && "function" == typeof st.onCommitFiberUnmount)
      try {
        st.onCommitFiberUnmount(ut, n);
      } catch (o) {}
    switch (n.tag) {
      case 5:
        Zo || nu(n, t);
      case 6:
        var r = pu,
          a = mu;
        ((pu = null),
          hu(e, t, n),
          (mu = a),
          null !== (pu = r) &&
            (mu
              ? ((e = pu),
                (n = n.stateNode),
                8 === e.nodeType
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : pu.removeChild(n.stateNode)));
        break;
      case 18:
        null !== pu &&
          (mu
            ? ((e = pu),
              (n = n.stateNode),
              8 === e.nodeType
                ? fa(e.parentNode, n)
                : 1 === e.nodeType && fa(e, n),
              Qt(e))
            : fa(pu, n.stateNode));
        break;
      case 4:
        ((r = pu),
          (a = mu),
          (pu = n.stateNode.containerInfo),
          (mu = !0),
          hu(e, t, n),
          (pu = r),
          (mu = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Zo &&
          null !== (r = n.updateQueue) &&
          null !== (r = r.lastEffect)
        ) {
          a = r = r.next;
          do {
            var l = a,
              i = l.destroy;
            ((l = l.tag),
              void 0 !== i && (2 & l || 4 & l) && ru(n, t, i),
              (a = a.next));
          } while (a !== r);
        }
        hu(e, t, n);
        break;
      case 1:
        if (
          !Zo &&
          (nu(n, t),
          "function" == typeof (r = n.stateNode).componentWillUnmount)
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (o) {
            _s(n, t, o);
          }
        hu(e, t, n);
        break;
      case 21:
        hu(e, t, n);
        break;
      case 22:
        1 & n.mode
          ? ((Zo = (r = Zo) || null !== n.memoizedState), hu(e, t, n), (Zo = r))
          : hu(e, t, n);
        break;
      default:
        hu(e, t, n);
    }
  }
  function yu(e) {
    var t = e.updateQueue;
    if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      (null === n && (n = e.stateNode = new eu()),
        t.forEach(function (t) {
          var r = zs.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        }));
    }
  }
  function vu(e, t) {
    var r = t.deletions;
    if (null !== r)
      for (var a = 0; a < r.length; a++) {
        var l = r[a];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; null !== u; ) {
            switch (u.tag) {
              case 5:
                ((pu = u.stateNode), (mu = !1));
                break e;
              case 3:
              case 4:
                ((pu = u.stateNode.containerInfo), (mu = !0));
                break e;
            }
            u = u.return;
          }
          if (null === pu) throw Error(n(160));
          (gu(i, o, l), (pu = null), (mu = !1));
          var s = l.alternate;
          (null !== s && (s.return = null), (l.return = null));
        } catch (c) {
          _s(l, t, c);
        }
      }
    if (12854 & t.subtreeFlags)
      for (t = t.child; null !== t; ) (bu(t, e), (t = t.sibling));
  }
  function bu(e, t) {
    var r = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vu(t, e), ku(e), 4 & a)) {
          try {
            (lu(3, e, e.return), iu(3, e));
          } catch (g) {
            _s(e, e.return, g);
          }
          try {
            lu(5, e, e.return);
          } catch (g) {
            _s(e, e.return, g);
          }
        }
        break;
      case 1:
        (vu(t, e), ku(e), 512 & a && null !== r && nu(r, r.return));
        break;
      case 5:
        if (
          (vu(t, e),
          ku(e),
          512 & a && null !== r && nu(r, r.return),
          32 & e.flags)
        ) {
          var l = e.stateNode;
          try {
            ge(l, "");
          } catch (g) {
            _s(e, e.return, g);
          }
        }
        if (4 & a && null != (l = e.stateNode)) {
          var i = e.memoizedProps,
            o = null !== r ? r.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), null !== s))
            try {
              ("input" === u &&
                "radio" === i.type &&
                null != i.name &&
                te(l, i),
                Se(u, o));
              var c = Se(u, i);
              for (o = 0; o < s.length; o += 2) {
                var d = s[o],
                  f = s[o + 1];
                "style" === d
                  ? ke(l, f)
                  : "dangerouslySetInnerHTML" === d
                    ? he(l, f)
                    : "children" === d
                      ? ge(l, f)
                      : k(l, d, f, c);
              }
              switch (u) {
                case "input":
                  ne(l, i);
                  break;
                case "textarea":
                  se(l, i);
                  break;
                case "select":
                  var p = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var m = i.value;
                  null != m
                    ? ie(l, !!i.multiple, m, !1)
                    : p !== !!i.multiple &&
                      (null != i.defaultValue
                        ? ie(l, !!i.multiple, i.defaultValue, !0)
                        : ie(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[ya] = i;
            } catch (g) {
              _s(e, e.return, g);
            }
        }
        break;
      case 6:
        if ((vu(t, e), ku(e), 4 & a)) {
          if (null === e.stateNode) throw Error(n(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (g) {
            _s(e, e.return, g);
          }
        }
        break;
      case 3:
        if (
          (vu(t, e), ku(e), 4 & a && null !== r && r.memoizedState.isDehydrated)
        )
          try {
            Qt(t.containerInfo);
          } catch (g) {
            _s(e, e.return, g);
          }
        break;
      case 4:
      default:
        (vu(t, e), ku(e));
        break;
      case 13:
        (vu(t, e),
          ku(e),
          8192 & (l = e.child).flags &&
            ((i = null !== l.memoizedState),
            (l.stateNode.isHidden = i),
            !i ||
              (null !== l.alternate && null !== l.alternate.memoizedState) ||
              (Hu = tt())),
          4 & a && yu(e));
        break;
      case 22:
        if (
          ((d = null !== r && null !== r.memoizedState),
          1 & e.mode ? ((Zo = (c = Zo) || d), vu(t, e), (Zo = c)) : vu(t, e),
          ku(e),
          8192 & a)
        ) {
          if (
            ((c = null !== e.memoizedState),
            (e.stateNode.isHidden = c) && !d && 1 & e.mode)
          )
            for (tu = e, d = e.child; null !== d; ) {
              for (f = tu = d; null !== tu; ) {
                switch (((m = (p = tu).child), p.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    lu(4, p, p.return);
                    break;
                  case 1:
                    nu(p, p.return);
                    var h = p.stateNode;
                    if ("function" == typeof h.componentWillUnmount) {
                      ((a = p), (r = p.return));
                      try {
                        ((t = a),
                          (h.props = t.memoizedProps),
                          (h.state = t.memoizedState),
                          h.componentWillUnmount());
                      } catch (g) {
                        _s(a, r, g);
                      }
                    }
                    break;
                  case 5:
                    nu(p, p.return);
                    break;
                  case 22:
                    if (null !== p.memoizedState) {
                      Cu(f);
                      continue;
                    }
                }
                null !== m ? ((m.return = p), (tu = m)) : Cu(f);
              }
              d = d.sibling;
            }
          e: for (d = null, f = e; ; ) {
            if (5 === f.tag) {
              if (null === d) {
                d = f;
                try {
                  ((l = f.stateNode),
                    c
                      ? "function" == typeof (i = l.style).setProperty
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none")
                      : ((u = f.stateNode),
                        (o =
                          null != (s = f.memoizedProps.style) &&
                          s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (u.style.display = be("display", o))));
                } catch (g) {
                  _s(e, e.return, g);
                }
              }
            } else if (6 === f.tag) {
              if (null === d)
                try {
                  f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                } catch (g) {
                  _s(e, e.return, g);
                }
            } else if (
              ((22 !== f.tag && 23 !== f.tag) ||
                null === f.memoizedState ||
                f === e) &&
              null !== f.child
            ) {
              ((f.child.return = f), (f = f.child));
              continue;
            }
            if (f === e) break e;
            for (; null === f.sibling; ) {
              if (null === f.return || f.return === e) break e;
              (d === f && (d = null), (f = f.return));
            }
            (d === f && (d = null),
              (f.sibling.return = f.return),
              (f = f.sibling));
          }
        }
        break;
      case 19:
        (vu(t, e), ku(e), 4 & a && yu(e));
      case 21:
    }
  }
  function ku(e) {
    var t = e.flags;
    if (2 & t) {
      try {
        e: {
          for (var r = e.return; null !== r; ) {
            if (su(r)) {
              var a = r;
              break e;
            }
            r = r.return;
          }
          throw Error(n(160));
        }
        switch (a.tag) {
          case 5:
            var l = a.stateNode;
            (32 & a.flags && (ge(l, ""), (a.flags &= -33)), fu(e, cu(e), l));
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo;
            du(e, cu(e), i);
            break;
          default:
            throw Error(n(161));
        }
      } catch (o) {
        _s(e, e.return, o);
      }
      e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
  }
  function wu(e, t, n) {
    ((tu = e), xu(e));
  }
  function xu(e, t, n) {
    for (var r = !!(1 & e.mode); null !== tu; ) {
      var a = tu,
        l = a.child;
      if (22 === a.tag && r) {
        var i = null !== a.memoizedState || Jo;
        if (!i) {
          var o = a.alternate,
            u = (null !== o && null !== o.memoizedState) || Zo;
          o = Jo;
          var s = Zo;
          if (((Jo = i), (Zo = u) && !s))
            for (tu = a; null !== tu; )
              ((u = (i = tu).child),
                22 === i.tag && null !== i.memoizedState
                  ? Nu(a)
                  : null !== u
                    ? ((u.return = i), (tu = u))
                    : Nu(a));
          for (; null !== l; ) ((tu = l), xu(l), (l = l.sibling));
          ((tu = a), (Jo = o), (Zo = s));
        }
        Su(e);
      } else
        8772 & a.subtreeFlags && null !== l
          ? ((l.return = a), (tu = l))
          : Su(e);
    }
  }
  function Su(e) {
    for (; null !== tu; ) {
      var t = tu;
      if (8772 & t.flags) {
        var r = t.alternate;
        try {
          if (8772 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Zo || iu(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (4 & t.flags && !Zo)
                  if (null === r) a.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : lo(t.type, r.memoizedProps);
                    a.componentDidUpdate(
                      l,
                      r.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                null !== i && ql(t, i, a);
                break;
              case 3:
                var o = t.updateQueue;
                if (null !== o) {
                  if (((r = null), null !== t.child))
                    switch (t.child.tag) {
                      case 5:
                      case 1:
                        r = t.child.stateNode;
                    }
                  ql(t, o, r);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (null === r && 4 & t.flags) {
                  r = u;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && r.focus();
                      break;
                    case "img":
                      s.src && (r.src = s.src);
                  }
                }
                break;
              case 6:
              case 4:
              case 12:
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              case 13:
                if (null === t.memoizedState) {
                  var c = t.alternate;
                  if (null !== c) {
                    var d = c.memoizedState;
                    if (null !== d) {
                      var f = d.dehydrated;
                      null !== f && Qt(f);
                    }
                  }
                }
                break;
              default:
                throw Error(n(163));
            }
          Zo || (512 & t.flags && ou(t));
        } catch (p) {
          _s(t, t.return, p);
        }
      }
      if (t === e) {
        tu = null;
        break;
      }
      if (null !== (r = t.sibling)) {
        ((r.return = t.return), (tu = r));
        break;
      }
      tu = t.return;
    }
  }
  function Cu(e) {
    for (; null !== tu; ) {
      var t = tu;
      if (t === e) {
        tu = null;
        break;
      }
      var n = t.sibling;
      if (null !== n) {
        ((n.return = t.return), (tu = n));
        break;
      }
      tu = t.return;
    }
  }
  function Nu(e) {
    for (; null !== tu; ) {
      var t = tu;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              iu(4, t);
            } catch (u) {
              _s(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if ("function" == typeof r.componentDidMount) {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                _s(t, a, u);
              }
            }
            var l = t.return;
            try {
              ou(t);
            } catch (u) {
              _s(t, l, u);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ou(t);
            } catch (u) {
              _s(t, i, u);
            }
        }
      } catch (u) {
        _s(t, t.return, u);
      }
      if (t === e) {
        tu = null;
        break;
      }
      var o = t.sibling;
      if (null !== o) {
        ((o.return = t.return), (tu = o));
        break;
      }
      tu = t.return;
    }
  }
  var Eu,
    _u = Math.ceil,
    ju = C.ReactCurrentDispatcher,
    Tu = C.ReactCurrentOwner,
    Pu = C.ReactCurrentBatchConfig,
    zu = 0,
    Mu = null,
    Lu = null,
    Fu = 0,
    Ru = 0,
    Iu = ja(0),
    Du = 0,
    Ou = null,
    Uu = 0,
    Au = 0,
    $u = 0,
    Bu = null,
    Vu = null,
    Hu = 0,
    Wu = 1 / 0,
    Qu = null,
    qu = !1,
    Ku = null,
    Yu = null,
    Gu = !1,
    Xu = null,
    Ju = 0,
    Zu = 0,
    es = null,
    ts = -1,
    ns = 0;
  function rs() {
    return 6 & zu ? tt() : -1 !== ts ? ts : (ts = tt());
  }
  function as(e) {
    return 1 & e.mode
      ? 2 & zu && 0 !== Fu
        ? Fu & -Fu
        : null !== bl.transition
          ? (0 === ns && (ns = bt()), ns)
          : 0 !== (e = St)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : en(e.type))
      : 1;
  }
  function ls(e, t, r, a) {
    if (50 < Zu) throw ((Zu = 0), (es = null), Error(n(185)));
    (wt(e, r, a),
      (2 & zu && e === Mu) ||
        (e === Mu && (!(2 & zu) && (Au |= r), 4 === Du && cs(e, Fu)),
        is(e, a),
        1 === r &&
          0 === zu &&
          !(1 & t.mode) &&
          ((Wu = tt() + 500), Va && Qa())));
  }
  function is(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          a = e.expirationTimes,
          l = e.pendingLanes;
        0 < l;
      ) {
        var i = 31 - ct(l),
          o = 1 << i,
          u = a[i];
        (-1 === u
          ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = yt(o, t))
          : u <= t && (e.expiredLanes |= o),
          (l &= ~o));
      }
    })(e, t);
    var r = gt(e, e === Mu ? Fu : 0);
    if (0 === r)
      (null !== n && Je(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((null != n && Je(n), 1 === t))
        (0 === e.tag
          ? (function (e) {
              ((Va = !0), Wa(e));
            })(ds.bind(null, e))
          : Wa(ds.bind(null, e)),
          ca(function () {
            !(6 & zu) && Qa();
          }),
          (n = null));
      else {
        switch (Ct(r)) {
          case 1:
            n = rt;
            break;
          case 4:
            n = at;
            break;
          case 16:
          default:
            n = lt;
            break;
          case 536870912:
            n = ot;
        }
        n = Ms(n, os.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function os(e, t) {
    if (((ts = -1), (ns = 0), 6 & zu)) throw Error(n(327));
    var r = e.callbackNode;
    if (Ns() && e.callbackNode !== r) return null;
    var a = gt(e, e === Mu ? Fu : 0);
    if (0 === a) return null;
    if (30 & a || 0 !== (a & e.expiredLanes) || t) t = bs(e, a);
    else {
      t = a;
      var l = zu;
      zu |= 2;
      var i = ys();
      for (
        (Mu === e && Fu === t) || ((Qu = null), (Wu = tt() + 500), hs(e, t));
        ;
      )
        try {
          ws();
          break;
        } catch (u) {
          gs(e, u);
        }
      (Pl(),
        (ju.current = i),
        (zu = l),
        null !== Lu ? (t = 0) : ((Mu = null), (Fu = 0), (t = Du)));
    }
    if (0 !== t) {
      if ((2 === t && 0 !== (l = vt(e)) && ((a = l), (t = us(e, l))), 1 === t))
        throw ((r = Ou), hs(e, 0), cs(e, a), is(e, tt()), r);
      if (6 === t) cs(e, a);
      else {
        if (
          ((l = e.current.alternate),
          !(
            30 & a ||
            (function (e) {
              for (var t = e; ; ) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores))
                    for (var r = 0; r < n.length; r++) {
                      var a = n[r],
                        l = a.getSnapshot;
                      a = a.value;
                      try {
                        if (!dr(l(), a)) return !1;
                      } catch (o) {
                        return !1;
                      }
                    }
                }
                if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                  ((n.return = t), (t = n));
                else {
                  if (t === e) break;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) return !0;
                    t = t.return;
                  }
                  ((t.sibling.return = t.return), (t = t.sibling));
                }
              }
              return !0;
            })(l) ||
            ((t = bs(e, a)),
            2 === t && ((i = vt(e)), 0 !== i && ((a = i), (t = us(e, i)))),
            1 !== t)
          ))
        )
          throw ((r = Ou), hs(e, 0), cs(e, a), is(e, tt()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
          case 5:
            Cs(e, Vu, Qu);
            break;
          case 3:
            if (
              (cs(e, a), (130023424 & a) === a && 10 < (t = Hu + 500 - tt()))
            ) {
              if (0 !== gt(e, 0)) break;
              if (((l = e.suspendedLanes) & a) !== a) {
                (rs(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = oa(Cs.bind(null, e, Vu, Qu), t);
              break;
            }
            Cs(e, Vu, Qu);
            break;
          case 4:
            if ((cs(e, a), (4194240 & a) === a)) break;
            for (t = e.eventTimes, l = -1; 0 < a; ) {
              var o = 31 - ct(a);
              ((i = 1 << o), (o = t[o]) > l && (l = o), (a &= ~i));
            }
            if (
              ((a = l),
              10 <
                (a =
                  (120 > (a = tt() - a)
                    ? 120
                    : 480 > a
                      ? 480
                      : 1080 > a
                        ? 1080
                        : 1920 > a
                          ? 1920
                          : 3e3 > a
                            ? 3e3
                            : 4320 > a
                              ? 4320
                              : 1960 * _u(a / 1960)) - a))
            ) {
              e.timeoutHandle = oa(Cs.bind(null, e, Vu, Qu), a);
              break;
            }
            Cs(e, Vu, Qu);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return (is(e, tt()), e.callbackNode === r ? os.bind(null, e) : null);
  }
  function us(e, t) {
    var n = Bu;
    return (
      e.current.memoizedState.isDehydrated && (hs(e, t).flags |= 256),
      2 !== (e = bs(e, t)) && ((t = Vu), (Vu = n), null !== t && ss(t)),
      e
    );
  }
  function ss(e) {
    null === Vu ? (Vu = e) : Vu.push.apply(Vu, e);
  }
  function cs(e, t) {
    for (
      t &= ~$u,
        t &= ~Au,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - ct(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ds(e) {
    if (6 & zu) throw Error(n(327));
    Ns();
    var t = gt(e, 0);
    if (!(1 & t)) return (is(e, tt()), null);
    var r = bs(e, t);
    if (0 !== e.tag && 2 === r) {
      var a = vt(e);
      0 !== a && ((t = a), (r = us(e, a)));
    }
    if (1 === r) throw ((r = Ou), hs(e, 0), cs(e, t), is(e, tt()), r);
    if (6 === r) throw Error(n(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Cs(e, Vu, Qu),
      is(e, tt()),
      null
    );
  }
  function fs(e, t) {
    var n = zu;
    zu |= 1;
    try {
      return e(t);
    } finally {
      0 === (zu = n) && ((Wu = tt() + 500), Va && Qa());
    }
  }
  function ps(e) {
    null !== Xu && 0 === Xu.tag && !(6 & zu) && Ns();
    var t = zu;
    zu |= 1;
    var n = Pu.transition,
      r = St;
    try {
      if (((Pu.transition = null), (St = 1), e)) return e();
    } finally {
      ((St = r), (Pu.transition = n), !(6 & (zu = t)) && Qa());
    }
  }
  function ms() {
    ((Ru = Iu.current), Ta(Iu));
  }
  function hs(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), ua(n)), null !== Lu))
      for (n = Lu.return; null !== n; ) {
        var r = n;
        switch ((ll(r), r.tag)) {
          case 1:
            null != (r = r.type.childContextTypes) && Da();
            break;
          case 3:
            (ei(), Ta(La), Ta(Ma), ii());
            break;
          case 5:
            ni(r);
            break;
          case 4:
            ei();
            break;
          case 13:
          case 19:
            Ta(ri);
            break;
          case 10:
            zl(r.type._context);
            break;
          case 22:
          case 23:
            ms();
        }
        n = n.return;
      }
    if (
      ((Mu = e),
      (Lu = e = Is(e.current, null)),
      (Fu = Ru = t),
      (Du = 0),
      (Ou = null),
      ($u = Au = Uu = 0),
      (Vu = Bu = null),
      null !== Rl)
    ) {
      for (t = 0; t < Rl.length; t++)
        if (null !== (r = (n = Rl[t]).interleaved)) {
          n.interleaved = null;
          var a = r.next,
            l = n.pending;
          if (null !== l) {
            var i = l.next;
            ((l.next = a), (r.next = i));
          }
          n.pending = r;
        }
      Rl = null;
    }
    return e;
  }
  function gs(e, t) {
    for (;;) {
      var r = Lu;
      try {
        if ((Pl(), (oi.current = to), pi)) {
          for (var a = ci.memoizedState; null !== a; ) {
            var l = a.queue;
            (null !== l && (l.pending = null), (a = a.next));
          }
          pi = !1;
        }
        if (
          ((si = 0),
          (fi = di = ci = null),
          (mi = !1),
          (hi = 0),
          (Tu.current = null),
          null === r || null === r.return)
        ) {
          ((Du = 1), (Ou = t), (Lu = null));
          break;
        }
        e: {
          var i = e,
            o = r.return,
            u = r,
            s = t;
          if (
            ((t = Fu),
            (u.flags |= 32768),
            null !== s && "object" == typeof s && "function" == typeof s.then)
          ) {
            var c = s,
              d = u,
              f = d.tag;
            if (!(1 & d.mode || (0 !== f && 11 !== f && 15 !== f))) {
              var p = d.alternate;
              p
                ? ((d.updateQueue = p.updateQueue),
                  (d.memoizedState = p.memoizedState),
                  (d.lanes = p.lanes))
                : ((d.updateQueue = null), (d.memoizedState = null));
            }
            var m = bo(o);
            if (null !== m) {
              ((m.flags &= -257),
                ko(m, o, u, 0, t),
                1 & m.mode && vo(i, c, t),
                (s = c));
              var h = (t = m).updateQueue;
              if (null === h) {
                var g = new Set();
                (g.add(s), (t.updateQueue = g));
              } else h.add(s);
              break e;
            }
            if (!(1 & t)) {
              (vo(i, c, t), vs());
              break e;
            }
            s = Error(n(426));
          } else if (ul && 1 & u.mode) {
            var y = bo(o);
            if (null !== y) {
              (!(65536 & y.flags) && (y.flags |= 256),
                ko(y, o, u, 0, t),
                vl(po(s, u)));
              break e;
            }
          }
          ((i = s = po(s, u)),
            4 !== Du && (Du = 2),
            null === Bu ? (Bu = [i]) : Bu.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536),
                  (t &= -t),
                  (i.lanes |= t),
                  Wl(i, go(0, s, t)));
                break e;
              case 1:
                u = s;
                var v = i.type,
                  b = i.stateNode;
                if (
                  !(
                    128 & i.flags ||
                    ("function" != typeof v.getDerivedStateFromError &&
                      (null === b ||
                        "function" != typeof b.componentDidCatch ||
                        (null !== Yu && Yu.has(b))))
                  )
                ) {
                  ((i.flags |= 65536),
                    (t &= -t),
                    (i.lanes |= t),
                    Wl(i, yo(i, u, t)));
                  break e;
                }
            }
            i = i.return;
          } while (null !== i);
        }
        Ss(r);
      } catch (k) {
        ((t = k), Lu === r && null !== r && (Lu = r = r.return));
        continue;
      }
      break;
    }
  }
  function ys() {
    var e = ju.current;
    return ((ju.current = to), null === e ? to : e);
  }
  function vs() {
    ((0 !== Du && 3 !== Du && 2 !== Du) || (Du = 4),
      null === Mu || (!(268435455 & Uu) && !(268435455 & Au)) || cs(Mu, Fu));
  }
  function bs(e, t) {
    var r = zu;
    zu |= 2;
    var a = ys();
    for ((Mu === e && Fu === t) || ((Qu = null), hs(e, t)); ; )
      try {
        ks();
        break;
      } catch (l) {
        gs(e, l);
      }
    if ((Pl(), (zu = r), (ju.current = a), null !== Lu)) throw Error(n(261));
    return ((Mu = null), (Fu = 0), Du);
  }
  function ks() {
    for (; null !== Lu; ) xs(Lu);
  }
  function ws() {
    for (; null !== Lu && !Ze(); ) xs(Lu);
  }
  function xs(e) {
    var t = Eu(e.alternate, e, Ru);
    ((e.memoizedProps = e.pendingProps),
      null === t ? Ss(e) : (Lu = t),
      (Tu.current = null));
  }
  function Ss(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), 32768 & t.flags)) {
        if (null !== (n = Xo(n, t))) return ((n.flags &= 32767), void (Lu = n));
        if (null === e) return ((Du = 6), void (Lu = null));
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      } else if (null !== (n = Go(n, t, Ru))) return void (Lu = n);
      if (null !== (t = t.sibling)) return void (Lu = t);
      Lu = t = e;
    } while (null !== t);
    0 === Du && (Du = 5);
  }
  function Cs(e, t, r) {
    var a = St,
      l = Pu.transition;
    try {
      ((Pu.transition = null),
        (St = 1),
        (function (e, t, r, a) {
          do {
            Ns();
          } while (null !== Xu);
          if (6 & zu) throw Error(n(327));
          r = e.finishedWork;
          var l = e.finishedLanes;
          if (null === r) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
            throw Error(n(177));
          ((e.callbackNode = null), (e.callbackPriority = 0));
          var i = r.lanes | r.childLanes;
          if (
            ((function (e, t) {
              var n = e.pendingLanes & ~t;
              ((e.pendingLanes = t),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.expiredLanes &= t),
                (e.mutableReadLanes &= t),
                (e.entangledLanes &= t),
                (t = e.entanglements));
              var r = e.eventTimes;
              for (e = e.expirationTimes; 0 < n; ) {
                var a = 31 - ct(n),
                  l = 1 << a;
                ((t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l));
              }
            })(e, i),
            e === Mu && ((Lu = Mu = null), (Fu = 0)),
            (!(2064 & r.subtreeFlags) && !(2064 & r.flags)) ||
              Gu ||
              ((Gu = !0),
              Ms(lt, function () {
                return (Ns(), null);
              })),
            (i = !!(15990 & r.flags)),
            15990 & r.subtreeFlags || i)
          ) {
            ((i = Pu.transition), (Pu.transition = null));
            var o = St;
            St = 1;
            var u = zu;
            ((zu |= 4),
              (Tu.current = null),
              (function (e, t) {
                if (((aa = Kt), yr((e = gr())))) {
                  if ("selectionStart" in e)
                    var r = { start: e.selectionStart, end: e.selectionEnd };
                  else
                    e: {
                      var a =
                        (r = ((r = e.ownerDocument) && r.defaultView) || window)
                          .getSelection && r.getSelection();
                      if (a && 0 !== a.rangeCount) {
                        r = a.anchorNode;
                        var l = a.anchorOffset,
                          i = a.focusNode;
                        a = a.focusOffset;
                        try {
                          (r.nodeType, i.nodeType);
                        } catch (w) {
                          r = null;
                          break e;
                        }
                        var o = 0,
                          u = -1,
                          s = -1,
                          c = 0,
                          d = 0,
                          f = e,
                          p = null;
                        t: for (;;) {
                          for (
                            var m;
                            f !== r ||
                              (0 !== l && 3 !== f.nodeType) ||
                              (u = o + l),
                              f !== i ||
                                (0 !== a && 3 !== f.nodeType) ||
                                (s = o + a),
                              3 === f.nodeType && (o += f.nodeValue.length),
                              null !== (m = f.firstChild);
                          )
                            ((p = f), (f = m));
                          for (;;) {
                            if (f === e) break t;
                            if (
                              (p === r && ++c === l && (u = o),
                              p === i && ++d === a && (s = o),
                              null !== (m = f.nextSibling))
                            )
                              break;
                            p = (f = p).parentNode;
                          }
                          f = m;
                        }
                        r = -1 === u || -1 === s ? null : { start: u, end: s };
                      } else r = null;
                    }
                  r = r || { start: 0, end: 0 };
                } else r = null;
                for (
                  la = { focusedElem: e, selectionRange: r }, Kt = !1, tu = t;
                  null !== tu;
                )
                  if (
                    ((e = (t = tu).child), 1028 & t.subtreeFlags && null !== e)
                  )
                    ((e.return = t), (tu = e));
                  else
                    for (; null !== tu; ) {
                      t = tu;
                      try {
                        var h = t.alternate;
                        if (1024 & t.flags)
                          switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                              break;
                            case 1:
                              if (null !== h) {
                                var g = h.memoizedProps,
                                  y = h.memoizedState,
                                  v = t.stateNode,
                                  b = v.getSnapshotBeforeUpdate(
                                    t.elementType === t.type
                                      ? g
                                      : lo(t.type, g),
                                    y,
                                  );
                                v.__reactInternalSnapshotBeforeUpdate = b;
                              }
                              break;
                            case 3:
                              var k = t.stateNode.containerInfo;
                              1 === k.nodeType
                                ? (k.textContent = "")
                                : 9 === k.nodeType &&
                                  k.documentElement &&
                                  k.removeChild(k.documentElement);
                              break;
                            default:
                              throw Error(n(163));
                          }
                      } catch (w) {
                        _s(t, t.return, w);
                      }
                      if (null !== (e = t.sibling)) {
                        ((e.return = t.return), (tu = e));
                        break;
                      }
                      tu = t.return;
                    }
                ((h = au), (au = !1));
              })(e, r),
              bu(r, e),
              vr(la),
              (Kt = !!aa),
              (la = aa = null),
              (e.current = r),
              wu(r),
              et(),
              (zu = u),
              (St = o),
              (Pu.transition = i));
          } else e.current = r;
          if (
            (Gu && ((Gu = !1), (Xu = e), (Ju = l)),
            0 === (i = e.pendingLanes) && (Yu = null),
            (function (e) {
              if (st && "function" == typeof st.onCommitFiberRoot)
                try {
                  st.onCommitFiberRoot(
                    ut,
                    e,
                    void 0,
                    !(128 & ~e.current.flags),
                  );
                } catch (t) {}
            })(r.stateNode),
            is(e, tt()),
            null !== t)
          )
            for (a = e.onRecoverableError, r = 0; r < t.length; r++)
              a((l = t[r]).value, {
                componentStack: l.stack,
                digest: l.digest,
              });
          if (qu) throw ((qu = !1), (e = Ku), (Ku = null), e);
          (!!(1 & Ju) && 0 !== e.tag && Ns(),
            1 & (i = e.pendingLanes)
              ? e === es
                ? Zu++
                : ((Zu = 0), (es = e))
              : (Zu = 0),
            Qa());
        })(e, t, r, a));
    } finally {
      ((Pu.transition = l), (St = a));
    }
    return null;
  }
  function Ns() {
    if (null !== Xu) {
      var e = Ct(Ju),
        t = Pu.transition,
        r = St;
      try {
        if (((Pu.transition = null), (St = 16 > e ? 16 : e), null === Xu))
          var a = !1;
        else {
          if (((e = Xu), (Xu = null), (Ju = 0), 6 & zu)) throw Error(n(331));
          var l = zu;
          for (zu |= 4, tu = e.current; null !== tu; ) {
            var i = tu,
              o = i.child;
            if (16 & tu.flags) {
              var u = i.deletions;
              if (null !== u) {
                for (var s = 0; s < u.length; s++) {
                  var c = u[s];
                  for (tu = c; null !== tu; ) {
                    var d = tu;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        lu(8, d, i);
                    }
                    var f = d.child;
                    if (null !== f) ((f.return = d), (tu = f));
                    else
                      for (; null !== tu; ) {
                        var p = (d = tu).sibling,
                          m = d.return;
                        if ((uu(d), d === c)) {
                          tu = null;
                          break;
                        }
                        if (null !== p) {
                          ((p.return = m), (tu = p));
                          break;
                        }
                        tu = m;
                      }
                  }
                }
                var h = i.alternate;
                if (null !== h) {
                  var g = h.child;
                  if (null !== g) {
                    h.child = null;
                    do {
                      var y = g.sibling;
                      ((g.sibling = null), (g = y));
                    } while (null !== g);
                  }
                }
                tu = i;
              }
            }
            if (2064 & i.subtreeFlags && null !== o) ((o.return = i), (tu = o));
            else
              e: for (; null !== tu; ) {
                if (2048 & (i = tu).flags)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lu(9, i, i.return);
                  }
                var v = i.sibling;
                if (null !== v) {
                  ((v.return = i.return), (tu = v));
                  break e;
                }
                tu = i.return;
              }
          }
          var b = e.current;
          for (tu = b; null !== tu; ) {
            var k = (o = tu).child;
            if (2064 & o.subtreeFlags && null !== k) ((k.return = o), (tu = k));
            else
              e: for (o = b; null !== tu; ) {
                if (2048 & (u = tu).flags)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        iu(9, u);
                    }
                  } catch (x) {
                    _s(u, u.return, x);
                  }
                if (u === o) {
                  tu = null;
                  break e;
                }
                var w = u.sibling;
                if (null !== w) {
                  ((w.return = u.return), (tu = w));
                  break e;
                }
                tu = u.return;
              }
          }
          if (
            ((zu = l),
            Qa(),
            st && "function" == typeof st.onPostCommitFiberRoot)
          )
            try {
              st.onPostCommitFiberRoot(ut, e);
            } catch (x) {}
          a = !0;
        }
        return a;
      } finally {
        ((St = r), (Pu.transition = t));
      }
    }
    return !1;
  }
  function Es(e, t, n) {
    ((e = Vl(e, (t = go(0, (t = po(n, t)), 1)), 1)),
      (t = rs()),
      null !== e && (wt(e, 1, t), is(e, t)));
  }
  function _s(e, t, n) {
    if (3 === e.tag) Es(e, e, n);
    else
      for (; null !== t; ) {
        if (3 === t.tag) {
          Es(t, e, n);
          break;
        }
        if (1 === t.tag) {
          var r = t.stateNode;
          if (
            "function" == typeof t.type.getDerivedStateFromError ||
            ("function" == typeof r.componentDidCatch &&
              (null === Yu || !Yu.has(r)))
          ) {
            ((t = Vl(t, (e = yo(t, (e = po(n, e)), 1)), 1)),
              (e = rs()),
              null !== t && (wt(t, 1, e), is(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function js(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
      (t = rs()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Mu === e &&
        (Fu & n) === n &&
        (4 === Du || (3 === Du && (130023424 & Fu) === Fu && 500 > tt() - Hu)
          ? hs(e, 0)
          : ($u |= n)),
      is(e, t));
  }
  function Ts(e, t) {
    0 === t &&
      (1 & e.mode
        ? ((t = mt), !(130023424 & (mt <<= 1)) && (mt = 4194304))
        : (t = 1));
    var n = rs();
    null !== (e = Ol(e, t)) && (wt(e, t, n), is(e, n));
  }
  function Ps(e) {
    var t = e.memoizedState,
      n = 0;
    (null !== t && (n = t.retryLane), Ts(e, n));
  }
  function zs(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          l = e.memoizedState;
        null !== l && (r = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    (null !== a && a.delete(t), Ts(e, r));
  }
  function Ms(e, t) {
    return Xe(e, t);
  }
  function Ls(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Fs(e, t, n, r) {
    return new Ls(e, t, n, r);
  }
  function Rs(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function Is(e, t) {
    var n = e.alternate;
    return (
      null === n
        ? (((n = Fs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = 14680064 & e.flags),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ds(e, t, r, a, l, i) {
    var o = 2;
    if (((a = e), "function" == typeof e)) Rs(e) && (o = 1);
    else if ("string" == typeof e) o = 5;
    else
      e: switch (e) {
        case _:
          return Os(r.children, l, i, t);
        case j:
          ((o = 8), (l |= 8));
          break;
        case T:
          return (
            ((e = Fs(12, r, t, 2 | l)).elementType = T),
            (e.lanes = i),
            e
          );
        case L:
          return (((e = Fs(13, r, t, l)).elementType = L), (e.lanes = i), e);
        case F:
          return (((e = Fs(19, r, t, l)).elementType = F), (e.lanes = i), e);
        case D:
          return Us(r, l, i, t);
        default:
          if ("object" == typeof e && null !== e)
            switch (e.$$typeof) {
              case P:
                o = 10;
                break e;
              case z:
                o = 9;
                break e;
              case M:
                o = 11;
                break e;
              case R:
                o = 14;
                break e;
              case I:
                ((o = 16), (a = null));
                break e;
            }
          throw Error(n(130, null == e ? e : typeof e, ""));
      }
    return (
      ((t = Fs(o, r, t, l)).elementType = e),
      (t.type = a),
      (t.lanes = i),
      t
    );
  }
  function Os(e, t, n, r) {
    return (((e = Fs(7, e, r, t)).lanes = n), e);
  }
  function Us(e, t, n, r) {
    return (
      ((e = Fs(22, e, r, t)).elementType = D),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function As(e, t, n) {
    return (((e = Fs(6, e, null, t)).lanes = n), e);
  }
  function $s(e, t, n) {
    return (
      ((t = Fs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Bs(e, t, n, r, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = kt(0)),
      (this.expirationTimes = kt(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = kt(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Vs(e, t, n, r, a, l, i, o, u) {
    return (
      (e = new Bs(e, t, n, o, u)),
      1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
      (l = Fs(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Al(l),
      e
    );
  }
  function Hs(e) {
    if (!e) return za;
    e: {
      if (Qe((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(n(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ia(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (null !== t);
      throw Error(n(171));
    }
    if (1 === e.tag) {
      var r = e.type;
      if (Ia(r)) return Ua(e, r, t);
    }
    return t;
  }
  function Ws(e, t, n, r, a, l, i, o, u) {
    return (
      ((e = Vs(n, r, !0, e, 0, l, 0, o, u)).context = Hs(null)),
      (n = e.current),
      ((l = Bl((r = rs()), (a = as(n)))).callback = null != t ? t : null),
      Vl(n, l, a),
      (e.current.lanes = a),
      wt(e, a, r),
      is(e, r),
      e
    );
  }
  function Qs(e, t, n, r) {
    var a = t.current,
      l = rs(),
      i = as(a);
    return (
      (n = Hs(n)),
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = Bl(l, i)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      null !== (e = Vl(a, t, i)) && (ls(e, a, i, l), Hl(e, a, i)),
      i
    );
  }
  function qs(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
  }
  function Ks(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
    }
  }
  function Ys(e, t) {
    (Ks(e, t), (e = e.alternate) && Ks(e, t));
  }
  Eu = function (e, t, r) {
    if (null !== e)
      if (e.memoizedProps !== t.pendingProps || La.current) xo = !0;
      else {
        if (0 === (e.lanes & r) && !(128 & t.flags))
          return (
            (xo = !1),
            (function (e, t, n) {
              switch (t.tag) {
                case 3:
                  (Mo(t), yl());
                  break;
                case 5:
                  ti(t);
                  break;
                case 1:
                  Ia(t.type) && Aa(t);
                  break;
                case 4:
                  Zl(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  var r = t.type._context,
                    a = t.memoizedProps.value;
                  (Pa(El, r._currentValue), (r._currentValue = a));
                  break;
                case 13:
                  if (null !== (r = t.memoizedState))
                    return null !== r.dehydrated
                      ? (Pa(ri, 1 & ri.current), (t.flags |= 128), null)
                      : 0 !== (n & t.child.childLanes)
                        ? Ao(e, t, n)
                        : (Pa(ri, 1 & ri.current),
                          null !== (e = qo(e, t, n)) ? e.sibling : null);
                  Pa(ri, 1 & ri.current);
                  break;
                case 19:
                  if (((r = 0 !== (n & t.childLanes)), 128 & e.flags)) {
                    if (r) return Wo(e, t, n);
                    t.flags |= 128;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    Pa(ri, ri.current),
                    r)
                  )
                    break;
                  return null;
                case 22:
                case 23:
                  return ((t.lanes = 0), _o(e, t, n));
              }
              return qo(e, t, n);
            })(e, t, r)
          );
        xo = !!(131072 & e.flags);
      }
    else ((xo = !1), ul && 1048576 & t.flags && rl(t, Ga, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        (Qo(e, t), (e = t.pendingProps));
        var l = Ra(t, Ma.current);
        (Ll(t, r), (l = bi(null, t, a, e, l, r)));
        var i = ki();
        return (
          (t.flags |= 1),
          "object" == typeof l &&
          null !== l &&
          "function" == typeof l.render &&
          void 0 === l.$$typeof
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ia(a) ? ((i = !0), Aa(t)) : (i = !1),
              (t.memoizedState =
                null !== l.state && void 0 !== l.state ? l.state : null),
              Al(t),
              (l.updater = oo),
              (t.stateNode = l),
              (l._reactInternals = t),
              fo(t, a, e, r),
              (t = zo(null, t, a, !0, i, r)))
            : ((t.tag = 0), ul && i && al(t), So(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        e: {
          switch (
            (Qo(e, t),
            (e = t.pendingProps),
            (a = (l = a._init)(a._payload)),
            (t.type = a),
            (l = t.tag =
              (function (e) {
                if ("function" == typeof e) return Rs(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === M) return 11;
                  if (e === R) return 14;
                }
                return 2;
              })(a)),
            (e = lo(a, e)),
            l)
          ) {
            case 0:
              t = To(null, t, a, e, r);
              break e;
            case 1:
              t = Po(null, t, a, e, r);
              break e;
            case 11:
              t = Co(null, t, a, e, r);
              break e;
            case 14:
              t = No(null, t, a, lo(a.type, e), r);
              break e;
          }
          throw Error(n(306, a, ""));
        }
        return t;
      case 0:
        return (
          (a = t.type),
          (l = t.pendingProps),
          To(e, t, a, (l = t.elementType === a ? l : lo(a, l)), r)
        );
      case 1:
        return (
          (a = t.type),
          (l = t.pendingProps),
          Po(e, t, a, (l = t.elementType === a ? l : lo(a, l)), r)
        );
      case 3:
        e: {
          if ((Mo(t), null === e)) throw Error(n(387));
          ((a = t.pendingProps),
            (l = (i = t.memoizedState).element),
            $l(e, t),
            Ql(t, a, null, r));
          var o = t.memoizedState;
          if (((a = o.element), i.isDehydrated)) {
            if (
              ((i = {
                element: a,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              256 & t.flags)
            ) {
              t = Lo(e, t, a, r, (l = po(Error(n(423)), t)));
              break e;
            }
            if (a !== l) {
              t = Lo(e, t, a, r, (l = po(Error(n(424)), t)));
              break e;
            }
            for (
              ol = pa(t.stateNode.containerInfo.firstChild),
                il = t,
                ul = !0,
                sl = null,
                r = Nl(t, null, a, r),
                t.child = r;
              r;
            )
              ((r.flags = (-3 & r.flags) | 4096), (r = r.sibling));
          } else {
            if ((yl(), a === l)) {
              t = qo(e, t, r);
              break e;
            }
            So(e, t, a, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ti(t),
          null === e && pl(t),
          (a = t.type),
          (l = t.pendingProps),
          (i = null !== e ? e.memoizedProps : null),
          (o = l.children),
          ia(a, l) ? (o = null) : null !== i && ia(a, i) && (t.flags |= 32),
          jo(e, t),
          So(e, t, o, r),
          t.child
        );
      case 6:
        return (null === e && pl(t), null);
      case 13:
        return Ao(e, t, r);
      case 4:
        return (
          Zl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          null === e ? (t.child = Cl(t, null, a, r)) : So(e, t, a, r),
          t.child
        );
      case 11:
        return (
          (a = t.type),
          (l = t.pendingProps),
          Co(e, t, a, (l = t.elementType === a ? l : lo(a, l)), r)
        );
      case 7:
        return (So(e, t, t.pendingProps, r), t.child);
      case 8:
      case 12:
        return (So(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((a = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            Pa(El, a._currentValue),
            (a._currentValue = o),
            null !== i)
          )
            if (dr(i.value, o)) {
              if (i.children === l.children && !La.current) {
                t = qo(e, t, r);
                break e;
              }
            } else
              for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                var u = i.dependencies;
                if (null !== u) {
                  o = i.child;
                  for (var s = u.firstContext; null !== s; ) {
                    if (s.context === a) {
                      if (1 === i.tag) {
                        (s = Bl(-1, r & -r)).tag = 2;
                        var c = i.updateQueue;
                        if (null !== c) {
                          var d = (c = c.shared).pending;
                          (null === d
                            ? (s.next = s)
                            : ((s.next = d.next), (d.next = s)),
                            (c.pending = s));
                        }
                      }
                      ((i.lanes |= r),
                        null !== (s = i.alternate) && (s.lanes |= r),
                        Ml(i.return, r, t),
                        (u.lanes |= r));
                      break;
                    }
                    s = s.next;
                  }
                } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
                else if (18 === i.tag) {
                  if (null === (o = i.return)) throw Error(n(341));
                  ((o.lanes |= r),
                    null !== (u = o.alternate) && (u.lanes |= r),
                    Ml(o, r, t),
                    (o = i.sibling));
                } else o = i.child;
                if (null !== o) o.return = i;
                else
                  for (o = i; null !== o; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (null !== (i = o.sibling)) {
                      ((i.return = o.return), (o = i));
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          (So(e, t, l.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (a = t.pendingProps.children),
          Ll(t, r),
          (a = a((l = Fl(l)))),
          (t.flags |= 1),
          So(e, t, a, r),
          t.child
        );
      case 14:
        return (
          (l = lo((a = t.type), t.pendingProps)),
          No(e, t, a, (l = lo(a.type, l)), r)
        );
      case 15:
        return Eo(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (a = t.type),
          (l = t.pendingProps),
          (l = t.elementType === a ? l : lo(a, l)),
          Qo(e, t),
          (t.tag = 1),
          Ia(a) ? ((e = !0), Aa(t)) : (e = !1),
          Ll(t, r),
          so(t, a, l),
          fo(t, a, l, r),
          zo(null, t, a, !0, e, r)
        );
      case 19:
        return Wo(e, t, r);
      case 22:
        return _o(e, t, r);
    }
    throw Error(n(156, t.tag));
  };
  var Gs = "function" == typeof reportError ? reportError : function (e) {};
  function Xs(e) {
    this._internalRoot = e;
  }
  function Js(e) {
    this._internalRoot = e;
  }
  function Zs(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
  }
  function ec(e) {
    return !(
      !e ||
      (1 !== e.nodeType &&
        9 !== e.nodeType &&
        11 !== e.nodeType &&
        (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    );
  }
  function tc() {}
  function nc(e, t, n, r, a) {
    var l = n._reactRootContainer;
    if (l) {
      var i = l;
      if ("function" == typeof a) {
        var o = a;
        a = function () {
          var e = qs(i);
          o.call(e);
        };
      }
      Qs(t, i, e, a);
    } else
      i = (function (e, t, n, r, a) {
        if (a) {
          if ("function" == typeof r) {
            var l = r;
            r = function () {
              var e = qs(i);
              l.call(e);
            };
          }
          var i = Ws(t, r, e, 0, null, !1, 0, "", tc);
          return (
            (e._reactRootContainer = i),
            (e[va] = i.current),
            Qr(8 === e.nodeType ? e.parentNode : e),
            ps(),
            i
          );
        }
        for (; (a = e.lastChild); ) e.removeChild(a);
        if ("function" == typeof r) {
          var o = r;
          r = function () {
            var e = qs(u);
            o.call(e);
          };
        }
        var u = Vs(e, 0, !1, null, 0, !1, 0, "", tc);
        return (
          (e._reactRootContainer = u),
          (e[va] = u.current),
          Qr(8 === e.nodeType ? e.parentNode : e),
          ps(function () {
            Qs(t, u, n, r);
          }),
          u
        );
      })(n, t, e, a, r);
    return qs(i);
  }
  ((Js.prototype.render = Xs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (null === t) throw Error(n(409));
      Qs(e, t, null, null);
    }),
    (Js.prototype.unmount = Xs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (ps(function () {
            Qs(null, e, null, null);
          }),
            (t[va] = null));
        }
      }),
    (Js.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = jt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++);
        (Dt.splice(n, 0, e), 0 === n && $t(e));
      }
    }),
    (Nt = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = ht(t.pendingLanes);
            0 !== n &&
              (xt(t, 1 | n),
              is(t, tt()),
              !(6 & zu) && ((Wu = tt() + 500), Qa()));
          }
          break;
        case 13:
          (ps(function () {
            var t = Ol(e, 1);
            if (null !== t) {
              var n = rs();
              ls(t, e, 1, n);
            }
          }),
            Ys(e, 1));
      }
    }),
    (Et = function (e) {
      if (13 === e.tag) {
        var t = Ol(e, 134217728);
        (null !== t && ls(t, e, 134217728, rs()), Ys(e, 134217728));
      }
    }),
    (_t = function (e) {
      if (13 === e.tag) {
        var t = as(e),
          n = Ol(e, t);
        (null !== n && ls(n, e, t, rs()), Ys(e, t));
      }
    }),
    (jt = function () {
      return St;
    }),
    (Tt = function (e, t) {
      var n = St;
      try {
        return ((St = e), t());
      } finally {
        St = n;
      }
    }),
    (Ee = function (e, t, r) {
      switch (t) {
        case "input":
          if ((ne(e, r), (t = r.name), "radio" === r.type && null != t)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var a = r[t];
              if (a !== e && a.form === e.form) {
                var l = Na(a);
                if (!l) throw Error(n(90));
                (X(a), ne(a, l));
              }
            }
          }
          break;
        case "textarea":
          se(e, r);
          break;
        case "select":
          null != (t = r.value) && ie(e, !!r.multiple, t, !1);
      }
    }),
    (Me = fs),
    (Le = ps));
  var rc = { usingClientEntryPoint: !1, Events: [Sa, Ca, Na, Pe, ze, fs] },
    ac = {
      findFiberByHostInstance: xa,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    lc = {
      bundleType: ac.bundleType,
      version: ac.version,
      rendererPackageName: ac.rendererPackageName,
      rendererConfig: ac.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: C.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return null === (e = Ye(e)) ? null : e.stateNode;
      },
      findFiberByHostInstance:
        ac.findFiberByHostInstance ||
        function () {
          return null;
        },
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ic.isDisabled && ic.supportsFiber)
      try {
        ((ut = ic.inject(lc)), (st = ic));
      } catch (me) {}
  }
  return (
    (w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rc),
    (w.createPortal = function (e, t) {
      var r =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Zs(t)) throw Error(n(200));
      return (function (e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: E,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      })(e, t, null, r);
    }),
    (w.createRoot = function (e, t) {
      if (!Zs(e)) throw Error(n(299));
      var r = !1,
        a = "",
        l = Gs;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (r = !0),
          void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
          void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
        (t = Vs(e, 1, !1, null, 0, r, 0, a, l)),
        (e[va] = t.current),
        Qr(8 === e.nodeType ? e.parentNode : e),
        new Xs(t)
      );
    }),
    (w.findDOMNode = function (e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternals;
      if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(n(188));
        throw ((e = Object.keys(e).join(",")), Error(n(268, e)));
      }
      return null === (e = Ye(t)) ? null : e.stateNode;
    }),
    (w.flushSync = function (e) {
      return ps(e);
    }),
    (w.hydrate = function (e, t, r) {
      if (!ec(t)) throw Error(n(200));
      return nc(null, e, t, !0, r);
    }),
    (w.hydrateRoot = function (e, t, r) {
      if (!Zs(e)) throw Error(n(405));
      var a = (null != r && r.hydratedSources) || null,
        l = !1,
        i = "",
        o = Gs;
      if (
        (null != r &&
          (!0 === r.unstable_strictMode && (l = !0),
          void 0 !== r.identifierPrefix && (i = r.identifierPrefix),
          void 0 !== r.onRecoverableError && (o = r.onRecoverableError)),
        (t = Ws(t, null, e, 1, null != r ? r : null, l, 0, i, o)),
        (e[va] = t.current),
        Qr(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          ((l = (l = (r = a[e])._getVersion)(r._source)),
            null == t.mutableSourceEagerHydrationData
              ? (t.mutableSourceEagerHydrationData = [r, l])
              : t.mutableSourceEagerHydrationData.push(r, l));
      return new Js(t);
    }),
    (w.render = function (e, t, r) {
      if (!ec(t)) throw Error(n(200));
      return nc(null, e, t, !1, r);
    }),
    (w.unmountComponentAtNode = function (e) {
      if (!ec(e)) throw Error(n(40));
      return (
        !!e._reactRootContainer &&
        (ps(function () {
          nc(null, null, e, !1, function () {
            ((e._reactRootContainer = null), (e[va] = null));
          });
        }),
        !0)
      );
    }),
    (w.unstable_batchedUpdates = fs),
    (w.unstable_renderSubtreeIntoContainer = function (e, t, r, a) {
      if (!ec(r)) throw Error(n(200));
      if (null == e || void 0 === e._reactInternals) throw Error(n(38));
      return nc(e, t, r, !1, a);
    }),
    (w.version = "18.3.1-next-f1338f8080-20240426"),
    w
  );
}
const N = e(
  (function () {
    if (v) return b;
    v = 1;
    var e =
      (y ||
        ((y = 1),
        (function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {}
        })(),
        (k.exports = C())),
      k.exports);
    return ((b.createRoot = e.createRoot), (b.hydrateRoot = e.hydrateRoot), b);
  })(),
);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var E = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _ = (e, t) => {
    const n = f.forwardRef(
      (
        {
          color: n = "currentColor",
          size: r = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: l,
          className: i = "",
          children: o,
          ...u
        },
        s,
      ) => {
        return f.createElement(
          "svg",
          {
            ref: s,
            ...E,
            width: r,
            height: r,
            stroke: n,
            strokeWidth: l ? (24 * Number(a)) / Number(r) : a,
            className: [
              "lucide",
              `lucide-${
                ((c = e),
                c
                  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                  .toLowerCase()
                  .trim())
              }`,
              i,
            ].join(" "),
            ...u,
          },
          [
            ...t.map(([e, t]) => f.createElement(e, t)),
            ...(Array.isArray(o) ? o : [o]),
          ],
        );
        var c;
      },
    );
    return ((n.displayName = `${e}`), n);
  },
  j = _("Calendar", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        ry: "2",
        key: "eu3xkr",
      },
    ],
    ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
    ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
    ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ]),
  T = _("Clock3", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }],
  ]),
  P = _("Copy", [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ]),
  z = _("History", [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
  ]),
  M = _("Image", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ]),
  L = _("Languages", [
    ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
    ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
    ["path", { d: "M2 5h12", key: "or177f" }],
    ["path", { d: "M7 2h1", key: "1t2jsx" }],
    ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
    ["path", { d: "M14 18h6", key: "1m8k6r" }],
  ]),
  F = _("Loader2", [
    ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
  ]),
  R = _("Music", [
    ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
  ]),
  I = _("Smile", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
    ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
    ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
  ]),
  D = _("Trash2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
  ]),
  O = _("Type", [
    ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
    ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
    ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
  ]),
  U = _("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ]),
  A = _("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  $ = (e) => ({ fullDescription: e || "" }),
  B = {
    en: {
      "app.title": "Invisible FB Notes",
      "header.subtitle": "Create and read hidden messages",
      "preview.loading": "Loading latest note...",
      "preview.placeholder": "Your latest note will appear here",
      "composer.title": "Composer",
      "composer.placeholder": "Write your note here...",
      "audience.title": "Audience",
      "audience.default": "Default",
      "audience.friends": "Friends",
      "audience.public": "Public",
      "audience.contacts": "Contacts",
      "audience.custom": "Custom friends",
      "duration.title": "Duration",
      "duration.custom_placeholder": "Custom minutes",
      "duration.apply": "Apply",
      "duration.current": "Current: {duration}",
      "music.title": "Music",
      "music.search_placeholder": "Search music...",
      "music.search": "Search",
      "music.clear": "Clear",
      "music.empty": "No music results. Try another keyword.",
      "music.load_more": "Scroll to load more...",
      "friends.title": "Custom Friends ({count})",
      "friends.search_placeholder": "Search friends...",
      "friends.search": "Search",
      "friends.loading": "Loading friends...",
      "friends.empty": "No friends found.",
      "share.submitting": "Sending...",
      "share.button": "Share",
      "share.success": "Note created successfully!",
      "share.error.empty":
        "Note cannot be empty unless you select a music track",
      "share.error.missing_song":
        "Selected track is missing song ID. Please reselect music.",
      "share.error.failed": "Failed to create note",
      "action.github": "GitHub",
      "action.language": "Language",
      "lang.vi": "VI",
      "lang.en": "EN",
      "status.share.default": "Share by default",
      "status.share.public": "Share publicly",
      "status.share.friends": "Share with friends",
      "status.share.contacts": "Share with contacts",
      "status.share.custom.no_names": "Share with custom friends",
      "status.share.custom.with_names": "Share with: {names}",
      "status.share.custom.with_names_more": "Share with: {names} +{remaining}",
      "status.expiry.unknown": "Expiration time unknown",
      "status.expiry.with_days": "Expires: {date} ({days}d {hours}h left)",
      "status.expiry.with_hours": "Expires: {date} ({hours}h left)",
      "lang.ja": "JP",
      "emoji.title": "Emoji",
      "emoji.search_placeholder": "Search emoji...",
      "effects.title": "Text Effects",
      "effects.bold": "Bold",
      "effects.italic": "Italic",
      "effects.underline": "Underline",
      "effects.script": "Script",
      "effects.fraktur": "Fraktur",
      "effects.smallcaps": "Small Caps",
      "effects.circled": "Circled",
      "effects.fullwidth": "Fullwidth",
      "effects.apply": "Apply",
      "theme.toggle": "Toggle Theme",
      "theme.dark": "Dark",
      "theme.light": "Light",
      "history.title": "History",
      "history.empty": "No notes yet",
      "history.clear": "Clear History",
      "history.copy": "Copy",
      "schedule.title": "Schedule Note",
      "schedule.placeholder": "Minutes from now",
      "schedule.set": "Schedule",
      "schedule.cancel": "Cancel",
      "schedule.pending": "Scheduled: posting at {time}",
      "reminder.title": "Reminder",
      "reminder.expiring_soon": "Your note is expiring soon!",
      "share_template.copy": "Copy Template",
      "share_template.copied": "Copied!",
      "preview_image.generate": "Generate Preview Image",
      "preview_image.copied": "Image copied!",
    },
    vi: {
      "app.title": "Invisible FB Notes",
      "header.subtitle": "Tạo và đọc tin nhắn ẩn",
      "preview.loading": "Đang tải ghi chú gần nhất...",
      "preview.placeholder": "Ghi chú mới nhất sẽ hiển thị ở đây",
      "composer.title": "Soạn ghi chú",
      "composer.placeholder": "Viết ghi chú ở đây...",
      "audience.title": "Đối tượng",
      "audience.default": "Mặc định",
      "audience.friends": "Bạn bè",
      "audience.public": "Công khai",
      "audience.contacts": "Bạn bè và quan hệ kết nối",
      "audience.custom": "Bạn bè tuỳ chỉnh",
      "duration.title": "Thời hạn",
      "duration.custom_placeholder": "Số phút tuỳ chỉnh",
      "duration.apply": "Áp dụng",
      "duration.current": "Hiện tại: {duration}",
      "music.title": "Nhạc",
      "music.search_placeholder": "Tìm nhạc...",
      "music.search": "Tìm",
      "music.clear": "Xoá",
      "music.empty": "Không có kết quả. Thử từ khoá khác.",
      "music.load_more": "Cuộn để tải thêm...",
      "friends.title": "Bạn bè tuỳ chỉnh ({count})",
      "friends.search_placeholder": "Tìm bạn bè...",
      "friends.search": "Tìm",
      "friends.loading": "Đang tải bạn bè...",
      "friends.empty": "Không tìm thấy bạn bè.",
      "share.submitting": "Đang gửi...",
      "share.button": "Chia sẻ",
      "share.success": "Tạo note thành công!",
      "share.error.empty": "Không thể gửi note trống trừ khi bạn chọn nhạc",
      "share.error.missing_song":
        "Bài nhạc đang thiếu song ID. Vui lòng chọn lại.",
      "share.error.failed": "Tạo note thất bại",
      "action.github": "GitHub",
      "action.language": "Ngôn ngữ",
      "lang.vi": "VI",
      "lang.en": "EN",
      "status.share.default": "Chia sẻ theo mặc định",
      "status.share.public": "Chia sẻ công khai",
      "status.share.friends": "Chia sẻ với bạn bè",
      "status.share.contacts": "Chia sẻ với bạn bè và quan hệ kết nối",
      "status.share.custom.no_names": "Chia sẻ với bạn bè tuỳ chỉnh",
      "status.share.custom.with_names": "Chia sẻ với: {names}",
      "status.share.custom.with_names_more":
        "Chia sẻ với: {names} +{remaining}",
      "status.expiry.unknown": "Không rõ thời gian hết hạn",
      "status.expiry.with_days":
        "Hết hạn: {date} (còn {days} ngày {hours} giờ)",
      "status.expiry.with_hours": "Hết hạn: {date} (còn {hours} giờ)",
      "lang.ja": "JP",
      "emoji.title": "Emoji",
      "emoji.search_placeholder": "Tìm emoji...",
      "effects.title": "Hiệu ứng chữ",
      "effects.bold": "Đậm",
      "effects.italic": "Nghiêng",
      "effects.underline": "Gạch chân",
      "effects.script": "Viết tay",
      "effects.fraktur": "Fraktur",
      "effects.smallcaps": "Chữ nhỏ viết hoa",
      "effects.circled": "Tròn",
      "effects.fullwidth": "Toàn chiều rộng",
      "effects.apply": "Áp dụng",
      "theme.toggle": "Chuyển giao diện",
      "theme.dark": "Tối",
      "theme.light": "Sáng",
      "history.title": "Lịch sử",
      "history.empty": "Chưa có ghi chú nào",
      "history.clear": "Xoá lịch sử",
      "history.copy": "Sao chép",
      "schedule.title": "Hẹn giờ đăng",
      "schedule.placeholder": "Số phút",
      "schedule.set": "Hẹn giờ",
      "schedule.cancel": "Huỷ",
      "schedule.pending": "Đã hẹn: đăng lúc {time}",
      "reminder.title": "Nhắc nhở",
      "reminder.expiring_soon": "Ghi chú của bạn sắp hết hạn!",
      "share_template.copy": "Sao chép template",
      "share_template.copied": "Đã sao chép!",
      "preview_image.generate": "Tạo ảnh xem trước",
      "preview_image.copied": "Đã sao chép ảnh!",
    },
    ja: {
      "app.title": "Facebook Note+",
      "header.subtitle": "隠しメッセージの作成と読み取り",
      "preview.loading": "最新のノートを読み込み中...",
      "preview.placeholder": "最新のノートがここに表示されます",
      "composer.title": "ノート作成",
      "composer.placeholder": "ここにノートを書いてください...",
      "audience.title": "公開範囲",
      "audience.default": "デフォルト",
      "audience.friends": "友達",
      "audience.public": "公開",
      "audience.contacts": "連絡先",
      "audience.custom": "カスタム友達",
      "duration.title": "表示期間",
      "duration.custom_placeholder": "分数を入力",
      "duration.apply": "適用",
      "duration.current": "現在: {duration}",
      "music.title": "音楽",
      "music.search_placeholder": "音楽を検索...",
      "music.search": "検索",
      "music.clear": "クリア",
      "music.empty": "結果がありません。別のキーワードをお試しください。",
      "music.load_more": "スクロールしてさらに読み込む...",
      "music.preview": "試聴",
      "friends.title": "カスタム友達 ({count})",
      "friends.search_placeholder": "友達を検索...",
      "friends.search": "検索",
      "friends.loading": "友達を読み込み中...",
      "friends.empty": "友達が見つかりません。",
      "share.submitting": "送信中...",
      "share.button": "共有",
      "share.success": "ノートを作成しました！",
      "share.error.empty": "音楽を選択しない限り、空のノートは送信できません",
      "share.error.missing_song":
        "選択した曲のIDが見つかりません。音楽を再選択してください。",
      "share.error.failed": "ノートの作成に失敗しました",
      "action.github": "GitHub",
      "action.language": "言語",
      "lang.vi": "VI",
      "lang.en": "EN",
      "lang.ja": "JA",
      "status.share.default": "デフォルトで共有",
      "status.share.public": "公開で共有",
      "status.share.friends": "友達に共有",
      "status.share.contacts": "連絡先に共有",
      "status.share.custom.no_names": "カスタム友達に共有",
      "status.share.custom.with_names": "共有先: {names}",
      "status.share.custom.with_names_more": "共有先: {names} +{remaining}人",
      "status.expiry.unknown": "有効期限不明",
      "status.expiry.with_days": "期限: {date} (残り{days}日{hours}時間)",
      "status.expiry.with_hours": "期限: {date} (残り{hours}時間)",
      "emoji.title": "絵文字",
      "emoji.search_placeholder": "絵文字を検索...",
      "effects.title": "テキスト効果",
      "effects.bold": "太字",
      "effects.italic": "斜体",
      "effects.underline": "下線",
      "effects.script": "筆記体",
      "effects.fraktur": "フラクトゥール",
      "effects.smallcaps": "小型大文字",
      "effects.circled": "丸囲み",
      "effects.fullwidth": "全角",
      "effects.apply": "適用",
      "theme.toggle": "テーマ切替",
      "theme.dark": "ダーク",
      "theme.light": "ライト",
      "history.title": "履歴",
      "history.empty": "まだノートがありません",
      "history.clear": "履歴をクリア",
      "history.copy": "コピー",
      "schedule.title": "予約投稿",
      "schedule.placeholder": "何分後に投稿",
      "schedule.set": "予約する",
      "schedule.cancel": "キャンセル",
      "schedule.pending": "予約済み: {time}に投稿予定",
      "reminder.title": "リマインダー",
      "reminder.expiring_soon": "ノートがまもなく期限切れになります！",
      "share_template.copy": "テンプレートをコピー",
      "share_template.copied": "コピーしました！",
      "preview_image.generate": "プレビュー画像を生成",
      "preview_image.copied": "画像をコピーしました！",
    },
  },
  V = "vi",
  H = {
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ꜰ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "Q",
    r: "ʀ",
    s: "ꜱ",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ",
  };
function W(e, t, n) {
  return [...e]
    .map((e) => {
      const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e);
      if (-1 !== r) return String.fromCodePoint(t + r);
      const a = "abcdefghijklmnopqrstuvwxyz".indexOf(e);
      return -1 !== a ? String.fromCodePoint(n + a) : e;
    })
    .join("");
}
const Q = (e) => W(e, 119808, 119834),
  q = (e) => W(e, 119860, 119886),
  K = (e) => W(e, 119964, 119990),
  Y = (e) => W(e, 120172, 120198),
  G = (e) => W(e, 9398, 9424),
  X = (e) =>
    [...e]
      .map((e) => {
        const t = e.toLowerCase();
        return H[t] || e;
      })
      .join(""),
  J = (e) => [...e].map((e) => (" " === e ? " " : e + "̲")).join(""),
  Z = (e) =>
    [...e]
      .map((e) => {
        const t = e.charCodeAt(0);
        return t >= 33 && t <= 126
          ? String.fromCharCode(t + 65248)
          : 32 === t
            ? "　"
            : e;
      })
      .join(""),
  ee = [
    { key: "bold", label: "effects.bold", preview: Q("Abc") },
    { key: "italic", label: "effects.italic", preview: q("Abc") },
    { key: "underline", label: "effects.underline", preview: J("Abc") },
    { key: "script", label: "effects.script", preview: K("Abc") },
    { key: "fraktur", label: "effects.fraktur", preview: Y("Abc") },
    { key: "smallcaps", label: "effects.smallcaps", preview: X("Abc") },
    { key: "circled", label: "effects.circled", preview: G("Abc") },
    { key: "fullwidth", label: "effects.fullwidth", preview: Z("Abc") },
  ],
  te = (e, t) => {
    switch (t) {
      case "bold":
        return Q(e);
      case "italic":
        return q(e);
      case "underline":
        return J(e);
      case "script":
        return K(e);
      case "fraktur":
        return Y(e);
      case "smallcaps":
        return X(e);
      case "circled":
        return G(e);
      case "fullwidth":
        return Z(e);
      default:
        return e;
    }
  },
  ne = "popupComposerStateV2",
  re = "popupLanguageV1",
  ae = "popupNoteHistoryV1",
  le = "popupDraftV1",
  ie = [
    { label: "1h", value: 3600 },
    { label: "6h", value: 21600 },
    { label: "24h", value: 86400 },
    { label: "3d", value: 259200 },
  ],
  oe = [
    {
      category: "😀",
      emojis: [
        "😀",
        "😂",
        "🤣",
        "😊",
        "😍",
        "🥰",
        "😘",
        "😎",
        "🤩",
        "🥳",
        "😤",
        "😭",
        "🥺",
        "😴",
        "🤔",
        "🤫",
        "🤗",
        "😈",
        "💀",
        "👻",
      ],
    },
    {
      category: "❤️",
      emojis: [
        "❤️",
        "🧡",
        "💛",
        "💚",
        "💙",
        "💜",
        "🖤",
        "🤍",
        "💔",
        "❣️",
        "💕",
        "💞",
        "💓",
        "💗",
        "💖",
        "💘",
        "💝",
        "♥️",
        "🫶",
        "💑",
      ],
    },
    {
      category: "👋",
      emojis: [
        "👋",
        "👏",
        "🙌",
        "🤝",
        "👍",
        "👎",
        "✌️",
        "🤞",
        "🤟",
        "🤘",
        "👌",
        "🤌",
        "👈",
        "👉",
        "👆",
        "👇",
        "☝️",
        "✋",
        "🤚",
        "💪",
      ],
    },
    {
      category: "🎉",
      emojis: [
        "🎉",
        "🎊",
        "🎈",
        "🎁",
        "🎀",
        "🎂",
        "🍰",
        "🎵",
        "🎶",
        "🎤",
        "🎸",
        "🎺",
        "🥁",
        "🎮",
        "🎯",
        "🏆",
        "🥇",
        "⭐",
        "🌟",
        "✨",
      ],
    },
    {
      category: "🌸",
      emojis: [
        "🌸",
        "🌺",
        "🌻",
        "🌹",
        "🌷",
        "💐",
        "🌿",
        "🍀",
        "🌈",
        "☀️",
        "🌙",
        "⛅",
        "🔥",
        "❄️",
        "💧",
        "🌊",
        "🍃",
        "🌴",
        "🌵",
        "🍁",
      ],
    },
    {
      category: "🍕",
      emojis: [
        "🍕",
        "🍔",
        "🍟",
        "🌭",
        "🍿",
        "🧁",
        "🍩",
        "🍪",
        "🍫",
        "🍬",
        "🍭",
        "🍦",
        "🧋",
        "☕",
        "🍺",
        "🍷",
        "🥂",
        "🍾",
        "🥤",
        "🧃",
      ],
    },
    {
      category: "🐱",
      emojis: [
        "🐱",
        "🐶",
        "🐭",
        "🐹",
        "🐰",
        "🦊",
        "🐻",
        "🐼",
        "🐨",
        "🐯",
        "🦁",
        "🐮",
        "🐷",
        "🐸",
        "🐵",
        "🐔",
        "🐧",
        "🐦",
        "🦋",
        "🐝",
      ],
    },
  ],
  ue = (e) => {
    if (!e || e <= 0) return "--:--";
    const t = Math.floor(e / 1e3);
    return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
  },
  se = (e) => {
    if (e <= 0) return "0m";
    const t = Math.floor(e / 86400),
      n = Math.floor((e % 86400) / 3600),
      r = Math.floor((e % 3600) / 60);
    return t > 0 ? `${t}d ${n}h` : n > 0 ? `${n}h ${r}m` : `${r}m`;
  },
  ce = [
    { key: "audience.default", value: "DEFAULT" },
    { key: "audience.friends", value: "FRIENDS" },
    { key: "audience.public", value: "PUBLIC" },
    { key: "audience.contacts", value: "CONTACTS" },
    { key: "audience.custom", value: "CUSTOM" },
  ],
  de = () => {
    const [e, t] = f.useState(null),
      [n, r] = f.useState("loading"),
      [a, l] = f.useState(""),
      [i, o] = f.useState(86400),
      [u, s] = f.useState(""),
      [c, p] = f.useState("DEFAULT"),
      [m, h] = f.useState(""),
      [g, y] = f.useState([]),
      [v, b] = f.useState(!1),
      [k, w] = f.useState(null),
      [x, S] = f.useState(!1),
      [C, N] = f.useState([]),
      [E, _] = f.useState([]),
      [H, W] = f.useState(""),
      [Q, q] = f.useState([]),
      [K, Y] = f.useState(!1),
      [G, X] = f.useState(12),
      [J, Z] = f.useState(null),
      [de, fe] = f.useState(!1),
      [pe, me] = f.useState(null),
      [he, ge] = f.useState(!1),
      [ye, ve] = f.useState(0),
      [be, ke] = f.useState(null),
      [we, xe] = f.useState(!1),
      [Se, Ce] = f.useState(!1),
      [Ne, Ee] = f.useState(null),
      [_e, je] = f.useState(!1),
      [Te, Pe] = f.useState(
        (() => {
          const e = (
            ("undefined" != typeof navigator ? navigator.language : "") || ""
          ).toLowerCase();
          return e.startsWith("vi")
            ? "vi"
            : e.startsWith("ja")
              ? "ja"
              : e.startsWith("en")
                ? "en"
                : V;
        })(),
      ),
      [ze, Me] = f.useState(!1),
      [Le, Fe] = f.useState(0),
      [Re, Ie] = f.useState([]),
      [De, Oe] = f.useState(""),
      [Ue, Ae] = f.useState(""),
      $e = f.useRef(null),
      Be = f.useRef(null),
      Ve = f.useRef(null),
      He = f.useRef(null),
      We = f.useMemo(
        () =>
          ((e) => {
            const t = B[e] || B[V];
            return (e, n) =>
              ((e, t) =>
                t
                  ? e.replace(/\{(\w+)\}/g, (e, n) => {
                      const r = t[n];
                      return null == r ? "" : String(r);
                    })
                  : e)(t[e] ?? B[V][e] ?? e, n);
          })(Te),
        [Te],
      );
    (f.useEffect(() => {
      chrome.storage.local.get([re], (e) => {
        const t = e?.[re];
        ("vi" !== t && "en" !== t && "ja" !== t) || Pe(t);
      });
    }, []),
      f.useEffect(() => {
        chrome.storage.local.set({ [re]: Te });
      }, [Te]),
      f.useEffect(() => {
        chrome.storage.local.get([ae], (e) => {
          const t = e?.[ae];
          Array.isArray(t) && Ie(t);
        });
      }, []),
      f.useEffect(() => {
        chrome.storage.local.get([le], (e) => {
          const t = e?.[le];
          "string" == typeof t && t.length > 0 && l(t.slice(0, 600));
        });
      }, []),
      f.useEffect(() => {
        const e = setTimeout(() => {
          chrome.storage.local.set({ [le]: a });
        }, 500);
        return () => clearTimeout(e);
      }, [a]),
      f.useEffect(() => {
        if (!be?.expirationTime) return void Ae("");
        const e = () => {
          const e = be.expirationTime,
            t = new Date(1e3 * e),
            n = Date.now(),
            r = Math.max(0, t.getTime() - n);
          if (r <= 0) return void Ae("Expired");
          const a = Math.floor(r / 6e4),
            l = Math.floor(a / 60),
            i = a % 60;
          if (l > 24) {
            const e = Math.floor(l / 24);
            Ae(`${e}d ${l % 24}h`);
          } else Ae(l > 0 ? `${l}h ${i}m` : `${i}m`);
          try {
            (chrome.action.setBadgeText({ text: l > 0 ? `${l}h` : `${i}m` }),
              chrome.action.setBadgeBackgroundColor({
                color: r < 36e5 ? "#e74c3c" : "#3498db",
              }));
          } catch (o) {}
        };
        e();
        const t = setInterval(e, 6e4);
        return () => {
          clearInterval(t);
          try {
            chrome.action.setBadgeText({ text: "" });
          } catch (e) {}
        };
      }, [be?.expirationTime]),
      f.useEffect(() => {
        const e = (e) => {
          const t = e.target;
          t && (t.closest("[data-lang-menu]") || Me(!1));
        };
        return (
          document.addEventListener("mousedown", e),
          () => document.removeEventListener("mousedown", e)
        );
      }, []));
    const Qe = f.useMemo(() => Q.slice(0, G), [Q, G]);
    (f.useEffect(() => {
      chrome.storage.local.get([ne], (e) => {
        const t = e?.[ne];
        if (
          t &&
          (t.audienceSetting && p(t.audienceSetting),
          "number" == typeof t.durationSeconds &&
            t.durationSeconds > 0 &&
            o(t.durationSeconds),
          "string" == typeof t.customDurationMinutes &&
            s(t.customDurationMinutes),
          Array.isArray(t.selectedFriendIds) && N(t.selectedFriendIds),
          Array.isArray(t.selectedFriends) && _(t.selectedFriends),
          t.selectedMusic)
        ) {
          const e = Boolean(
            t.selectedMusic.songId || t.selectedMusic.audioClusterId,
          );
          Z(e ? t.selectedMusic : null);
        }
      });
    }, []),
      f.useEffect(() => {
        const e = {
          audienceSetting: c,
          durationSeconds: i,
          customDurationMinutes: u,
          selectedFriendIds: C,
          selectedFriends: E,
          selectedMusic: J,
        };
        chrome.storage.local.set({ [ne]: e });
      }, [c, i, u, C, E, J]),
      f.useEffect(() => {
        chrome.runtime.sendMessage({ type: "GET_TOKENS" }, (e) => {
          chrome.runtime.lastError || e?.error
            ? r("error")
            : e?.tokens
              ? (t(e.tokens), r("ready"))
              : r("error");
        });
      }, []),
      f.useEffect(() => {
        ve(a.length);
      }, [a]),
      f.useEffect(() => {
        if (pe) {
          ge(!0);
          const e = setTimeout(() => ge(!1), 3e3);
          return () => clearTimeout(e);
        }
      }, [pe]));
    const qe = f.useCallback(
        (t) => {
          e &&
            "ready" === n &&
            (Y(!0),
            chrome.runtime.sendMessage(
              { type: "SEARCH_MUSIC", tokens: e, query: t, count: 100 },
              (e) => {
                (Y(!1),
                  chrome.runtime.lastError
                    ? me({
                        type: "error",
                        message:
                          chrome.runtime.lastError.message ||
                          "Music search failed",
                      })
                    : e?.success
                      ? (q(Array.isArray(e.items) ? e.items : []), X(12))
                      : me({
                          type: "error",
                          message: e?.error || "Music search failed",
                        }));
              },
            ));
        },
        [e, n],
      ),
      Ke = f.useCallback(
        (t, r = null) => {
          e &&
            "ready" === n &&
            (b(!0),
            chrome.runtime.sendMessage(
              {
                type: "SEARCH_FRIENDS",
                tokens: e,
                query: t,
                cursor: r,
                count: 20,
              },
              (e) => {
                if ((b(!1), chrome.runtime.lastError))
                  me({
                    type: "error",
                    message:
                      chrome.runtime.lastError.message ||
                      "Friend search failed",
                  });
                else if (e?.success) {
                  const t = Array.isArray(e.items) ? e.items : [];
                  (y((e) => {
                    if (!r) return t;
                    const n = new Map(e.map((e) => [e.id, e]));
                    for (const r of t) n.set(r.id, r);
                    return Array.from(n.values());
                  }),
                    w("string" == typeof e.nextCursor ? e.nextCursor : null),
                    S(Boolean(e.hasNextPage)),
                    _((e) => {
                      if (0 === e.length) return e;
                      const n = new Map(t.map((e) => [e.id, e]));
                      return e.map((e) => n.get(e.id) || e);
                    }));
                } else
                  me({
                    type: "error",
                    message: e?.error || "Friend search failed",
                  });
              },
            ));
        },
        [e, n],
      );
    (f.useEffect(() => {
      "ready" === n &&
        e &&
        (qe(""),
        xe(!0),
        chrome.runtime.sendMessage(
          { type: "GET_CURRENT_NOTE_STATUS", tokens: e },
          (e) => {
            (xe(!1),
              !chrome.runtime.lastError && e?.success && ke(e.status || null));
          },
        ));
    }, [n, e, qe]),
      f.useEffect(() => {
        "CUSTOM" === c && "ready" === n && e && 0 === g.length && Ke("", null);
      }, [c, n, e, g.length, Ke]));
    const Ye = f.useCallback((e) => {
        (N((t) =>
          t.includes(e.id) ? t.filter((t) => t !== e.id) : [...t, e.id],
        ),
          _((t) =>
            t.some((t) => t.id === e.id)
              ? t.filter((t) => t.id !== e.id)
              : [e, ...t].slice(0, 30),
          ));
      }, []),
      Ge = f.useCallback((e) => {
        (N((t) => t.filter((t) => t !== e)),
          _((t) => t.filter((t) => t.id !== e)));
      }, []),
      Xe = f.useCallback((e) => {
        const t = Number(e);
        !Number.isFinite(t) || t <= 0 || o(Math.floor(60 * t));
      }, []),
      Je = f.useCallback(() => {
        const e = $e.current;
        e &&
          !K &&
          e.scrollTop + e.clientHeight >= e.scrollHeight - 40 &&
          G < Q.length &&
          X((e) => Math.min(e + 12, Q.length));
      }, [K, G, Q.length]),
      Ze = f.useCallback(() => {
        const e = Be.current;
        e &&
          !v &&
          x &&
          k &&
          e.scrollTop + e.clientHeight >= e.scrollHeight - 40 &&
          Ke(m, k);
      }, [v, x, k, Ke, m]),
      et = f.useCallback((e, t, n, r) => {
        const a = {
          id: Date.now().toString(),
          text: e.substring(0, 200),
          audience: t,
          duration: n,
          music: r,
          createdAt: Date.now(),
        };
        Ie((e) => {
          const t = [a, ...e].slice(0, 50);
          return (chrome.storage.local.set({ [ae]: t }), t);
        });
      }, []),
      tt = f.useCallback(async () => {
        if (!e || de) return;
        const t = $(a).fullDescription.trim(),
          n = Boolean(J?.id),
          r = Boolean(J?.songId || J?.audioClusterId);
        if (!t && !n)
          return void me({ type: "error", message: We("share.error.empty") });
        if (n && !r)
          return void me({
            type: "error",
            message: We("share.error.missing_song"),
          });
        (fe(!0), me(null));
        let o = 0;
        const u = () => {
          o++;
          try {
            chrome.runtime.sendMessage(
              {
                type: "CREATE_NOTE",
                tokens: e,
                description: t || null,
                duration: i,
                audienceSetting: c,
                selectedFriendIds: C,
                selectedMusic: J,
              },
              (n) => {
                if ((fe(!1), chrome.runtime.lastError))
                  me({
                    type: "error",
                    message:
                      chrome.runtime.lastError.message ||
                      "Background worker not available",
                  });
                else if (n?.success) {
                  (me({ type: "success", message: We("share.success") }),
                    et(t, c, i, J?.title),
                    l(""),
                    chrome.storage.local.set({ [le]: "" }));
                  try {
                    const e = i > 600 ? i - 300 : 0.8 * i;
                    chrome.alarms.create("noteExpiryReminder", {
                      delayInMinutes: e / 60,
                    });
                  } catch (r) {}
                  (xe(!0),
                    chrome.runtime.sendMessage(
                      { type: "GET_CURRENT_NOTE_STATUS", tokens: e },
                      (e) => {
                        (xe(!1),
                          !chrome.runtime.lastError &&
                            e?.success &&
                            ke(e.status || null));
                      },
                    ));
                } else
                  me({
                    type: "error",
                    message: n?.error || We("share.error.failed"),
                  });
              },
            );
          } catch (n) {
            o <= 2
              ? setTimeout(u, 1e3 * o)
              : (fe(!1),
                me({ type: "error", message: "Failed after retries" }));
          }
        };
        u();
      }, [e, a, i, c, C, J, de, We, et]),
      nt = f.useCallback(() => {
        const t = Number(De);
        if (!Number.isFinite(t) || t <= 0 || !e) return;
        const n = {
          noteText: a,
          duration: i,
          audienceSetting: c,
          selectedFriendIds: C,
          selectedMusic: J,
          tokens: e,
        };
        (chrome.storage.local.set({ scheduledNote: n }),
          chrome.alarms.create("scheduledNotePost", { delayInMinutes: t }),
          me({
            type: "success",
            message: We("schedule.pending", {
              time: new Date(Date.now() + 6e4 * t).toLocaleTimeString(),
            }),
          }),
          Ee(null),
          Oe(""));
      }, [De, a, i, c, C, J, e, We]),
      rt = f.useCallback(
        (e) => {
          const t = He.current;
          if (!t) return void l((t) => t + e);
          const n = t.selectionStart,
            r = t.selectionEnd,
            i = a.substring(0, n) + e + a.substring(r);
          (l(i),
            requestAnimationFrame(() => {
              ((t.selectionStart = t.selectionEnd = n + e.length), t.focus());
            }));
        },
        [a],
      ),
      at = f.useCallback(
        (e) => {
          const t = He.current;
          if (!t) return;
          const n = t.selectionStart,
            r = t.selectionEnd;
          if (n === r) l(te(a, e));
          else {
            const t = a.substring(n, r),
              i = te(t, e);
            l(a.substring(0, n) + i + a.substring(r));
          }
          Ee(null);
        },
        [a],
      ),
      lt = f.useCallback(async (e, t) => {
        try {
          await navigator.clipboard.writeText(e);
        } catch (n) {}
      }, []),
      it = f.useCallback(async () => {
        const e = document.createElement("canvas");
        ((e.width = 600), (e.height = 400));
        const t = e.getContext("2d");
        if (!t) return;
        const n = t.createLinearGradient(0, 0, 600, 400);
        (n.addColorStop(0, "#1a1a2e"),
          n.addColorStop(1, "#16213e"),
          (t.fillStyle = n),
          t.fillRect(0, 0, 600, 400),
          (t.fillStyle = "rgba(255, 255, 255, 0.08)"),
          t.beginPath(),
          t.roundRect(40, 40, 520, 320, 16),
          t.fill(),
          (t.fillStyle = "#ffffff"),
          (t.font =
            'bold 20px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'),
          t.fillText("Facebook Note+", 70, 85),
          (t.fillStyle = "#cccccc"),
          (t.font =
            '15px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'));
        const r = (a || "No content").split("\n");
        let l = 130;
        for (let a = 0; a < Math.min(r.length, 8); a++) {
          const e = r[a].substring(0, 55);
          (t.fillText(e, 70, l), (l += 24));
        }
        (r.length > 8 && t.fillText("...", 70, l),
          J &&
            ((t.fillStyle = "#3498db"),
            (t.font =
              '13px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'),
            t.fillText(`🎵 ${J.title} - ${J.artist}`, 70, 330)));
        try {
          e.toBlob(async (e) => {
            e &&
              (await navigator.clipboard.write([
                new ClipboardItem({ "image/png": e }),
              ]),
              me({ type: "success", message: We("preview_image.copied") }));
          }, "image/png");
        } catch (i) {
          me({ type: "error", message: "Failed to generate image" });
        }
      }, [a, J, We]),
      ot = f.useCallback(() => {
        const e = {
            text: a,
            audience: c,
            duration: i,
            music: J ? { title: J.title, artist: J.artist } : null,
          },
          t = btoa(unescape(encodeURIComponent(JSON.stringify(e))));
        (lt(
          `https://github.com/kazeidk/Facebook_Note#template=${t}`,
          "template",
        ),
          me({ type: "success", message: We("share_template.copied") }));
      }, [a, c, i, J, We, lt]),
      ut = (ye / 600) * 100,
      st = ut < 50 ? "safe" : ut < 80 ? "warning" : "danger",
      ct = f.useMemo(() => new Set(C), [C]),
      dt = f.useMemo(
        () =>
          (be?.description || "").trim() ||
          (be?.musicTitle ? `🎵 ${be.musicTitle}` : We("preview.placeholder")),
        [be, We],
      ),
      ft = f.useMemo(
        () => !(be?.description || "").trim() && !be?.musicTitle,
        [be],
      ),
      pt = f.useMemo(() => {
        const e = (be?.richStatusId || "").trim();
        return Boolean(e) && !ft;
      }, [be, ft]),
      mt = f.useCallback(() => {
        e &&
          (xe(!0),
          chrome.runtime.sendMessage(
            { type: "GET_CURRENT_NOTE_STATUS", tokens: e },
            (e) => {
              (xe(!1),
                !chrome.runtime.lastError &&
                  e?.success &&
                  ke(e.status || null));
            },
          ));
      }, [e]),
      ht = f.useCallback(() => {
        if (!e || Se) return;
        const t = (be?.richStatusId || "").trim();
        t &&
          (Ce(!0),
          chrome.runtime.sendMessage(
            { type: "DELETE_NOTE", tokens: e, richStatusId: t },
            (e) => {
              (Ce(!1),
                chrome.runtime.lastError
                  ? me({
                      type: "error",
                      message:
                        chrome.runtime.lastError.message ||
                        "Delete note failed",
                    })
                  : e?.success
                    ? mt()
                    : me({
                        type: "error",
                        message: e?.error || "Delete note failed",
                      }));
            },
          ));
      }, [e, Se, be, mt]),
      gt = f.useMemo(() => {
        if (ft) return "";
        const e = (
          be?.visibility ||
          be?.defaultAudienceSetting ||
          ""
        ).toUpperCase();
        if ("PUBLIC" === e) return We("status.share.public");
        if ("FRIENDS" === e) return We("status.share.friends");
        if ("CONTACTS" === e) return We("status.share.contacts");
        if ("CUSTOM" === e) {
          const e = Array.isArray(be?.customAudienceNames)
            ? be.customAudienceNames
            : [];
          if (0 === e.length) return We("status.share.custom.no_names");
          const t = e.slice(0, 2).join(", "),
            n = e.length - 2;
          return n > 0
            ? We("status.share.custom.with_names_more", {
                names: t,
                remaining: n,
              })
            : We("status.share.custom.with_names", { names: t });
        }
        return We("status.share.default");
      }, [be, ft, We]),
      yt = f.useMemo(() => {
        if (ft) return "";
        const e = be?.expirationTime;
        if (!e) return "";
        const t = new Date(1e3 * e);
        if (Number.isNaN(t.getTime())) return "";
        const n = Date.now(),
          r = Math.max(0, t.getTime() - n),
          a = Math.floor(r / 36e5),
          l = t.toLocaleString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
          });
        return We("status.expiry.with_hours", { date: l, hours: a });
      }, [be, ft, We]);
    return d.jsxs("div", {
      className: "container",
      children: [
        d.jsxs("div", {
          className: "note-preview-stage",
          children: [
            pt &&
              d.jsx("button", {
                className: "preview-delete-btn " + (Se ? "is-loading" : ""),
                onClick: ht,
                disabled: we || Se,
                title: "Delete note",
                type: "button",
                children: d.jsx(D, { size: 14 }),
              }),
            d.jsxs("div", {
              className: "note-bubble-preview",
              ref: Ve,
              children: [
                be?.musicTitle &&
                  !we &&
                  d.jsxs("div", {
                    className: "bubble-music-title-row",
                    children: [
                      d.jsx(R, { size: 13 }),
                      d.jsx("span", { children: be.musicTitle }),
                    ],
                  }),
                be?.musicArtist &&
                  !we &&
                  d.jsx("div", {
                    className: "bubble-music-artist-row",
                    children: be.musicArtist,
                  }),
                d.jsx("div", {
                  className: `bubble-note-content ${ft ? "is-placeholder" : ""} ${we ? "is-shimmer" : ""}`,
                  children: we ? "" : dt,
                }),
                Ue &&
                  !we &&
                  d.jsxs("div", {
                    className: "bubble-countdown",
                    children: ["⏱ ", Ue],
                  }),
                d.jsxs("div", {
                  className: "bubble-pointer-dots",
                  "aria-hidden": "true",
                  children: [
                    d.jsx("span", { className: "pointer-dot dot-large" }),
                    d.jsx("span", { className: "pointer-dot dot-small" }),
                  ],
                }),
              ],
            }),
            d.jsx("div", {
              className: "note-avatar-preview",
              children: we
                ? d.jsx("div", { className: "note-avatar-img avatar-shimmer" })
                : be?.avatarUri
                  ? d.jsx("img", {
                      src: be.avatarUri,
                      alt: "Avatar",
                      className: "note-avatar-img",
                    })
                  : d.jsx("div", { className: "note-avatar-fallback" }),
            }),
            d.jsxs("div", {
              className: "note-preview-meta",
              children: [
                d.jsx("div", {
                  className: "bubble-meta-line",
                  children: we ? We("preview.loading") : gt,
                }),
                d.jsx("div", {
                  className: "bubble-meta-line secondary",
                  children: we ? "" : yt,
                }),
              ],
            }),
          ],
        }),
        d.jsxs("div", {
          className: "section",
          children: [
            d.jsx("div", {
              className: "section-header",
              children: d.jsx("span", {
                className: "section-title",
                children: We("composer.title"),
              }),
            }),
            d.jsx("div", {
              className: "section-content",
              children: d.jsx("div", {
                className: "note-composer",
                children: d.jsxs("div", {
                  className: "composer-scroll",
                  children: [
                    d.jsx("textarea", {
                      ref: He,
                      className: "note-textarea",
                      placeholder: We("composer.placeholder"),
                      value: a,
                      onChange: (e) => l(e.target.value.slice(0, 600)),
                      disabled: "ready" !== n,
                      maxLength: 600,
                    }),
                    d.jsxs("div", {
                      className: "char-counter",
                      children: [
                        d.jsx("div", {
                          className: "char-bar-container",
                          children: d.jsx("div", {
                            className: `char-bar ${st}`,
                            style: { width: `${Math.min(ut, 100)}%` },
                          }),
                        }),
                        d.jsxs("span", {
                          className: "char-text",
                          children: [ye, " / ", 600],
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "char-counter-footer",
                      children: d.jsxs("div", {
                        className: "action-buttons-row",
                        children: [
                          d.jsxs("div", {
                            className: "action-left",
                            "data-lang-menu": !0,
                            children: [
                              d.jsxs("div", {
                                className: "lang-menu-wrapper",
                                "data-lang-menu": !0,
                                children: [
                                  d.jsxs("button", {
                                    className:
                                      "icon-btn " + (ze ? "has-value" : ""),
                                    onClick: () => Me((e) => !e),
                                    title: We("action.language"),
                                    type: "button",
                                    children: [
                                      d.jsx(L, { size: 14 }),
                                      d.jsx("span", {
                                        className: "icon-badge",
                                        children: Te.toUpperCase(),
                                      }),
                                    ],
                                  }),
                                  ze &&
                                    d.jsx("div", {
                                      className: "lang-menu",
                                      role: "menu",
                                      children: ["vi", "en", "ja"].map((e) =>
                                        d.jsx(
                                          "button",
                                          {
                                            className:
                                              "lang-option " +
                                              (Te === e ? "active" : ""),
                                            onClick: () => {
                                              (Pe(e), Me(!1));
                                            },
                                            type: "button",
                                            children: We(`lang.${e}`),
                                          },
                                          e,
                                        ),
                                      ),
                                    }),
                                ],
                              }),
                              d.jsx("button", {
                                className: "icon-btn",
                                onClick: () =>
                                  Ee("emoji" === Ne ? null : "emoji"),
                                disabled: "ready" !== n,
                                title: We("emoji.title"),
                                type: "button",
                                children: d.jsx(I, { size: 14 }),
                              }),
                              d.jsx("button", {
                                className: "icon-btn",
                                onClick: () =>
                                  Ee("effects" === Ne ? null : "effects"),
                                disabled: "ready" !== n,
                                title: We("effects.title"),
                                type: "button",
                                children: d.jsx(O, { size: 14 }),
                              }),
                              d.jsxs("button", {
                                className:
                                  "icon-btn " +
                                  (Re.length > 0 ? "has-value" : ""),
                                onClick: () =>
                                  Ee("history" === Ne ? null : "history"),
                                title: We("history.title"),
                                type: "button",
                                children: [
                                  d.jsx(z, { size: 14 }),
                                  Re.length > 0 &&
                                    d.jsx("span", {
                                      className: "icon-badge",
                                      children: Re.length,
                                    }),
                                ],
                              }),
                            ],
                          }),
                          d.jsxs("button", {
                            className:
                              "icon-btn " +
                              ("DEFAULT" !== c ? "has-value" : ""),
                            onClick: () => Ee("audience"),
                            disabled: "ready" !== n,
                            title: "Audience",
                            children: [
                              d.jsx(U, { size: 14 }),
                              "DEFAULT" !== c &&
                                d.jsx("span", {
                                  className: "icon-badge",
                                  children:
                                    "CUSTOM" === c
                                      ? `${C.length}`
                                      : c.charAt(0),
                                }),
                            ],
                          }),
                          d.jsxs("button", {
                            className:
                              "icon-btn " + (86400 !== i ? "has-value" : ""),
                            onClick: () => Ee("duration"),
                            disabled: "ready" !== n,
                            title: "Duration",
                            children: [
                              d.jsx(T, { size: 14 }),
                              86400 !== i &&
                                d.jsx("span", {
                                  className: "icon-badge",
                                  children: se(i),
                                }),
                            ],
                          }),
                          d.jsxs("button", {
                            className: "icon-btn " + (J ? "has-value" : ""),
                            onClick: () => Ee("music"),
                            disabled: "ready" !== n,
                            title: "Music",
                            children: [
                              d.jsx(R, { size: 14 }),
                              J &&
                                d.jsx("span", {
                                  className: "icon-badge",
                                  children: "♪",
                                }),
                            ],
                          }),
                          d.jsx("button", {
                            className: "icon-btn",
                            onClick: () => Ee("schedule"),
                            disabled: "ready" !== n,
                            title: We("schedule.title"),
                            type: "button",
                            children: d.jsx(j, { size: 14 }),
                          }),
                          d.jsx("button", {
                            className: "icon-btn",
                            onClick: ot,
                            disabled: "ready" !== n || !a.trim(),
                            title: We("share_template.copy"),
                            type: "button",
                            children: d.jsx(P, { size: 14 }),
                          }),
                          d.jsx("button", {
                            className: "icon-btn",
                            onClick: it,
                            disabled: "ready" !== n || !a.trim(),
                            title: We("preview_image.generate"),
                            type: "button",
                            children: d.jsx(M, { size: 14 }),
                          }),
                          d.jsx("button", {
                            className:
                              "action-btn " +
                              ("success" === pe?.type ? "success" : ""),
                            onClick: tt,
                            disabled: "ready" !== n || de,
                            children: de
                              ? d.jsxs(d.Fragment, {
                                  children: [
                                    d.jsx(F, {
                                      size: 12,
                                      className: "spinner",
                                    }),
                                    d.jsx("span", {
                                      children: We("share.submitting"),
                                    }),
                                  ],
                                })
                              : d.jsx("span", { children: We("share.button") }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        "emoji" === Ne &&
          d.jsxs("div", {
            className: "section emoji-section",
            children: [
              d.jsx("div", {
                className: "emoji-categories",
                children: oe.map((e, t) =>
                  d.jsx(
                    "button",
                    {
                      className: "emoji-cat-btn " + (Le === t ? "active" : ""),
                      onClick: () => Fe(t),
                      children: e.category,
                    },
                    t,
                  ),
                ),
              }),
              d.jsx("div", {
                className: "emoji-grid",
                children: oe[Le].emojis.map((e, t) =>
                  d.jsx(
                    "button",
                    {
                      className: "emoji-btn",
                      onClick: () => rt(e),
                      type: "button",
                      children: e,
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        "effects" === Ne &&
          d.jsx("div", {
            className: "section effects-section",
            children: d.jsx("div", {
              className: "effects-grid",
              children: ee.map((e) =>
                d.jsxs(
                  "button",
                  {
                    className: "effect-btn",
                    onClick: () => at(e.key),
                    type: "button",
                    children: [
                      d.jsx("span", {
                        className: "effect-preview",
                        children: e.preview,
                      }),
                      d.jsx("span", {
                        className: "effect-label",
                        children: We(e.label),
                      }),
                    ],
                  },
                  e.key,
                ),
              ),
            }),
          }),
        "history" === Ne &&
          d.jsxs("div", {
            className: "section history-section",
            children: [
              d.jsxs("div", {
                className: "history-header",
                children: [
                  d.jsx("span", {
                    className: "section-title",
                    children: We("history.title"),
                  }),
                  Re.length > 0 &&
                    d.jsx("button", {
                      className: "history-clear-btn",
                      onClick: () => {
                        (Ie([]), chrome.storage.local.set({ [ae]: [] }));
                      },
                      type: "button",
                      children: We("history.clear"),
                    }),
                ],
              }),
              d.jsx("div", {
                className: "history-list",
                children:
                  0 === Re.length
                    ? d.jsx("div", {
                        className: "history-empty",
                        children: We("history.empty"),
                      })
                    : Re.map((e) =>
                        d.jsxs(
                          "div",
                          {
                            className: "history-item",
                            children: [
                              d.jsx("div", {
                                className: "history-item-text",
                                children: e.text || "(no text)",
                              }),
                              d.jsxs("div", {
                                className: "history-item-meta",
                                children: [
                                  d.jsx("span", {
                                    children: new Date(
                                      e.createdAt,
                                    ).toLocaleString(),
                                  }),
                                  d.jsx("span", { children: e.audience }),
                                  e.music &&
                                    d.jsxs("span", {
                                      children: ["🎵 ", e.music],
                                    }),
                                ],
                              }),
                              d.jsx("div", {
                                className: "history-item-actions",
                                children: d.jsx("button", {
                                  className: "history-copy-btn",
                                  onClick: () => {
                                    (l(e.text), Ee(null));
                                  },
                                  type: "button",
                                  children: We("history.copy"),
                                }),
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
              }),
            ],
          }),
        "schedule" === Ne &&
          d.jsx("div", {
            className: "modal-overlay",
            onClick: () => Ee(null),
            children: d.jsxs("div", {
              className: "modal-content modal-small",
              onClick: (e) => e.stopPropagation(),
              children: [
                d.jsxs("div", {
                  className: "modal-header",
                  children: [
                    d.jsx("span", {
                      className: "modal-title",
                      children: We("schedule.title"),
                    }),
                    d.jsx("button", {
                      className: "modal-close",
                      onClick: () => Ee(null),
                      children: d.jsx(A, { size: 16 }),
                    }),
                  ],
                }),
                d.jsx("div", {
                  className: "modal-body",
                  children: d.jsxs("div", {
                    className: "schedule-form",
                    children: [
                      d.jsx("input", {
                        className: "duration-custom-input",
                        type: "number",
                        min: "1",
                        step: "1",
                        value: De,
                        onChange: (e) => Oe(e.target.value),
                        placeholder: We("schedule.placeholder"),
                      }),
                      d.jsxs("div", {
                        className: "schedule-btns",
                        children: [
                          d.jsx("button", {
                            className: "duration-custom-btn",
                            onClick: nt,
                            disabled: !De,
                            children: We("schedule.set"),
                          }),
                          d.jsx("button", {
                            className: "duration-custom-btn cancel",
                            onClick: () => Ee(null),
                            children: We("schedule.cancel"),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        "audience" === Ne &&
          d.jsx("div", {
            className: "modal-overlay",
            onClick: () => Ee(null),
            children: d.jsxs("div", {
              className: "modal-content",
              onClick: (e) => e.stopPropagation(),
              children: [
                d.jsxs("div", {
                  className: "modal-header",
                  children: [
                    d.jsx("span", {
                      className: "modal-title",
                      children: We("audience.title"),
                    }),
                    d.jsx("button", {
                      className: "modal-close",
                      onClick: () => Ee(null),
                      children: d.jsx(A, { size: 16 }),
                    }),
                  ],
                }),
                d.jsx("div", {
                  className: "modal-body",
                  children: d.jsx("div", {
                    className: "audience-options",
                    children: ce.map((e) =>
                      d.jsxs(
                        "button",
                        {
                          className:
                            "audience-option " +
                            (c === e.value ? "active" : ""),
                          onClick: () => {
                            (p(e.value),
                              "CUSTOM" === e.value ? je(!0) : (N([]), _([])));
                          },
                          children: [
                            We(e.key),
                            "CUSTOM" === e.value &&
                              C.length > 0 &&
                              d.jsx("span", {
                                className: "option-badge",
                                children: C.length,
                              }),
                          ],
                        },
                        e.value,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          }),
        "duration" === Ne &&
          d.jsx("div", {
            className: "modal-overlay",
            onClick: () => Ee(null),
            children: d.jsxs("div", {
              className: "modal-content modal-small",
              onClick: (e) => e.stopPropagation(),
              children: [
                d.jsxs("div", {
                  className: "modal-header",
                  children: [
                    d.jsx("span", {
                      className: "modal-title",
                      children: We("duration.title"),
                    }),
                    d.jsx("button", {
                      className: "modal-close",
                      onClick: () => Ee(null),
                      children: d.jsx(A, { size: 16 }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "modal-body",
                  children: [
                    d.jsx("div", {
                      className: "duration-selector",
                      children: ie.map((e) =>
                        d.jsx(
                          "button",
                          {
                            className:
                              "duration-btn " + (i === e.value ? "active" : ""),
                            onClick: () => {
                              (o(e.value), s(""));
                            },
                            children: e.label,
                          },
                          e.value,
                        ),
                      ),
                    }),
                    d.jsxs("div", {
                      className: "duration-custom-row",
                      children: [
                        d.jsx("input", {
                          className: "duration-custom-input",
                          type: "number",
                          min: "1",
                          step: "1",
                          value: u,
                          onChange: (e) => s(e.target.value),
                          placeholder: We("duration.custom_placeholder"),
                        }),
                        d.jsx("button", {
                          className: "duration-custom-btn",
                          onClick: () => Xe(u),
                          disabled: !u,
                          children: We("duration.apply"),
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "duration-current",
                      children: We("duration.current", { duration: se(i) }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        "music" === Ne &&
          d.jsx("div", {
            className: "modal-overlay",
            onClick: () => Ee(null),
            children: d.jsxs("div", {
              className: "modal-content",
              onClick: (e) => e.stopPropagation(),
              children: [
                d.jsxs("div", {
                  className: "modal-header",
                  children: [
                    d.jsx("span", {
                      className: "modal-title",
                      children: We("music.title"),
                    }),
                    d.jsx("button", {
                      className: "modal-close",
                      onClick: () => Ee(null),
                      children: d.jsx(A, { size: 16 }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "modal-body",
                  children: [
                    J &&
                      d.jsxs("div", {
                        className: "music-selected",
                        children: [
                          d.jsxs("div", {
                            className: "music-selected-text",
                            children: [
                              d.jsx("strong", { children: J.title }),
                              d.jsx("span", {
                                children: J.artist || "Unknown artist",
                              }),
                            ],
                          }),
                          d.jsx("button", {
                            className: "music-clear-btn",
                            onClick: () => Z(null),
                            children: We("music.clear"),
                          }),
                        ],
                      }),
                    d.jsxs("div", {
                      className: "music-search-row",
                      children: [
                        d.jsx("input", {
                          className: "music-search-input",
                          value: H,
                          onChange: (e) => W(e.target.value),
                          placeholder: We("music.search_placeholder"),
                          disabled: K,
                        }),
                        d.jsx("button", {
                          className: "music-search-btn",
                          onClick: () => qe(H),
                          disabled: K,
                          children: K ? "..." : We("music.search"),
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "music-list",
                      ref: $e,
                      onScroll: Je,
                      children: [
                        Qe.map((e) =>
                          d.jsx(
                            "button",
                            {
                              className:
                                "music-item " +
                                (J?.id === e.id ? "active" : ""),
                              onClick: () => Z(e),
                              children: d.jsxs("div", {
                                className: "music-item-top",
                                children: [
                                  e.imageUri
                                    ? d.jsx("img", {
                                        src: e.imageUri,
                                        alt: e.title,
                                        className: "music-cover",
                                        loading: "lazy",
                                      })
                                    : d.jsx("div", {
                                        className:
                                          "music-cover music-cover-placeholder",
                                        children: "♪",
                                      }),
                                  d.jsxs("div", {
                                    className: "music-item-text",
                                    children: [
                                      d.jsx("span", {
                                        className: "music-item-title",
                                        children: e.title,
                                      }),
                                      d.jsx("span", {
                                        className: "music-item-artist",
                                        children: e.artist || "Unknown artist",
                                      }),
                                    ],
                                  }),
                                  d.jsx("span", {
                                    className: "music-item-duration",
                                    children: ue(e.durationMs),
                                  }),
                                ],
                              }),
                            },
                            `${e.id}-${e.songId || ""}`,
                          ),
                        ),
                        !K &&
                          0 === Q.length &&
                          d.jsx("div", {
                            className: "music-empty",
                            children: We("music.empty"),
                          }),
                        Q.length > G &&
                          d.jsx("div", {
                            className: "music-loading-more",
                            children: We("music.load_more"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        _e &&
          d.jsx("div", {
            className: "modal-overlay",
            onClick: () => je(!1),
            children: d.jsxs("div", {
              className: "modal-content",
              onClick: (e) => e.stopPropagation(),
              children: [
                d.jsxs("div", {
                  className: "modal-header",
                  children: [
                    d.jsx("span", {
                      className: "modal-title",
                      children: We("friends.title", { count: C.length }),
                    }),
                    d.jsx("button", {
                      className: "modal-close",
                      onClick: () => je(!1),
                      children: d.jsx(A, { size: 16 }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "modal-body",
                  children: [
                    E.length > 0 &&
                      d.jsx("div", {
                        className: "selected-friends-chips",
                        children: E.map((e) =>
                          d.jsxs(
                            "button",
                            {
                              className: "friend-chip",
                              onClick: () => Ge(e.id),
                              children: [
                                d.jsx("span", { children: e.name }),
                                d.jsx(A, { size: 12 }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    d.jsxs("div", {
                      className: "friends-search-row",
                      children: [
                        d.jsx("input", {
                          className: "friends-search-input",
                          value: m,
                          onChange: (e) => h(e.target.value),
                          placeholder: We("friends.search_placeholder"),
                          disabled: v,
                        }),
                        d.jsx("button", {
                          className: "friends-search-btn",
                          onClick: () => Ke(m, null),
                          disabled: v,
                          children: v ? "..." : We("friends.search"),
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "friends-list",
                      ref: Be,
                      onScroll: Ze,
                      children: [
                        g.map((e) => {
                          const t = ct.has(e.id);
                          return d.jsxs(
                            "button",
                            {
                              className: "friend-item " + (t ? "active" : ""),
                              onClick: () => Ye(e),
                              children: [
                                v
                                  ? d.jsx("div", {
                                      className: "friend-avatar avatar-shimmer",
                                    })
                                  : e.imageUri
                                    ? d.jsx("img", {
                                        className: "friend-avatar",
                                        src: e.imageUri,
                                        alt: e.name,
                                        loading: "lazy",
                                      })
                                    : d.jsx("div", {
                                        className:
                                          "friend-avatar friend-avatar-placeholder",
                                        children: "👤",
                                      }),
                                d.jsx("span", {
                                  className: "friend-name",
                                  children: e.name,
                                }),
                                d.jsx("span", {
                                  className: "friend-check",
                                  children: t ? "✓" : "",
                                }),
                              ],
                            },
                            e.id,
                          );
                        }),
                        v &&
                          d.jsx("div", {
                            className: "music-loading-more",
                            children: We("friends.loading"),
                          }),
                        !v &&
                          0 === g.length &&
                          d.jsx("div", {
                            className: "music-empty",
                            children: We("friends.empty"),
                          }),
                      ],
                    }),
                    x &&
                      d.jsx("div", {
                        className: "friends-pagination-hint",
                        children: We("music.load_more"),
                      }),
                  ],
                }),
              ],
            }),
          }),
        he &&
          pe &&
          d.jsx("div", { className: `toast ${pe.type}`, children: pe.message }),
      ],
    });
  };
N.createRoot(document.getElementById("root")).render(
  d.jsx(p.StrictMode, { children: d.jsx(de, {}) }),
);
