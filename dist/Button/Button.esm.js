import Ce from "react";
var X = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function ur() {
  if (Te)
    return D;
  Te = 1;
  var u = Ce, m = Symbol.for("react.element"), S = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, x = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(_, f, C) {
    var h, b = {}, R = null, I = null;
    C !== void 0 && (R = "" + C), f.key !== void 0 && (R = "" + f.key), f.ref !== void 0 && (I = f.ref);
    for (h in f)
      g.call(f, h) && !A.hasOwnProperty(h) && (b[h] = f[h]);
    if (_ && _.defaultProps)
      for (h in f = _.defaultProps, f)
        b[h] === void 0 && (b[h] = f[h]);
    return { $$typeof: m, type: _, key: R, ref: I, props: b, _owner: x.current };
  }
  return D.Fragment = S, D.jsx = j, D.jsxs = j, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function sr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Ce, m = Symbol.for("react.element"), S = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), _ = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), Z = Symbol.iterator, Oe = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var O = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Se = !1, je = !1, ke = !1, $e = !1, De = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === A || De || e === x || e === C || e === h || $e || e === I || Se || je || ke || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === b || e.$$typeof === j || e.$$typeof === _ || e.$$typeof === f || e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case S:
          return "Portal";
        case A:
          return "Profiler";
        case x:
          return "StrictMode";
        case C:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ee(r) + ".Consumer";
          case j:
            var t = e;
            return ee(t._context) + ".Provider";
          case f:
            return Ae(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case R: {
            var i = e, s = i._payload, o = i._init;
            try {
              return y(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, k = 0, re, te, ne, ae, oe, ie, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ie() {
      {
        if (k === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        k++;
      }
    }
    function Ne() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: re
            }),
            info: T({}, e, {
              value: te
            }),
            warn: T({}, e, {
              value: ne
            }),
            error: T({}, e, {
              value: ae
            }),
            group: T({}, e, {
              value: oe
            }),
            groupCollapsed: T({}, e, {
              value: ie
            }),
            groupEnd: T({}, e, {
              value: ue
            })
          });
        }
        k < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = O.ReactCurrentDispatcher, U;
    function N(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var z = !1, W;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      W = new We();
    }
    function le(e, r) {
      if (!e || z)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = M.current, M.current = null, Ie();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              n = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), v = n.stack.split(`
`), l = a.length - 1, c = v.length - 1; l >= 1 && c >= 0 && a[l] !== v[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== v[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== v[c]) {
                    var p = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, p), p;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        z = !1, M.current = s, Ne(), Error.prepareStackTrace = i;
      }
      var P = e ? e.displayName || e.name : "", Re = P ? N(P) : "";
      return typeof e == "function" && W.set(e, Re), Re;
    }
    function Ye(e, r, t) {
      return le(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Le(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case C:
          return N("Suspense");
        case h:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ye(e.render);
          case b:
            return Y(e.type, r, t);
          case R: {
            var n = e, i = n._payload, s = n._init;
            try {
              return Y(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ce = {}, fe = O.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, i) {
      {
        var s = Function.call.bind(L);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (V(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, V(i), d("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Me = Array.isArray;
    function B(e) {
      return Me(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (ze(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), de(e);
    }
    var $ = O.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, pe, q;
    q = {};
    function qe(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = y($.current.type);
        q[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y($.current.type), e.ref), q[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          he || (he = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, i, s, o) {
      var a = {
        $$typeof: m,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, i) {
      {
        var s, o = {}, a = null, v = null;
        t !== void 0 && (ve(t), a = "" + t), Je(r) && (ve(r.key), a = "" + r.key), qe(r) && (v = r.ref, Ge(r, i));
        for (s in r)
          L.call(r, s) && !Be.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            o[s] === void 0 && (o[s] = l[s]);
        }
        if (a || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(o, c), v && He(o, c);
        }
        return Xe(e, a, v, i, n, $.current, o);
      }
    }
    var J = O.ReactCurrentOwner, me = O.ReactDebugCurrentFrame;
    function w(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function ge() {
      {
        if (J.current) {
          var e = y(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function er(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + y(e._owner.type) + "."), w(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), w(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && ye(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = we(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              K(o.value) && ye(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = y(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            w(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), w(null);
            break;
          }
        }
        e.ref !== null && (w(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    function _e(e, r, t, n, i, s) {
      {
        var o = Fe(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Qe(i);
          v ? a += v : a += ge();
          var l;
          e === null ? l = "null" : B(e) ? l = "array" : e !== void 0 && e.$$typeof === m ? (l = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = Ze(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (B(p)) {
                for (var P = 0; P < p.length; P++)
                  Ee(p[P], e);
                Object.freeze && Object.freeze(p);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(p, e);
        }
        return e === g ? tr(c) : rr(c), c;
      }
    }
    function nr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ar(e, r, t) {
      return _e(e, r, t, !1);
    }
    var or = ar, ir = nr;
    F.Fragment = g, F.jsx = or, F.jsxs = ir;
  }()), F;
}
(function(u) {
  process.env.NODE_ENV === "production" ? u.exports = ur() : u.exports = sr();
})(X);
const H = X.exports.jsx, lr = X.exports.jsxs;
function cr(u) {
  const {
    iconName: m,
    customClassName: S,
    onIconClick: g
  } = u, x = () => g == null ? void 0 : g();
  return /* @__PURE__ */ H("span", {
    className: S,
    children: /* @__PURE__ */ H("i", {
      className: `iconfont icon-${m}`,
      onClick: x
    })
  });
}
const fr = (u) => {
  const m = {
    small: {
      x: "1",
      y: "1",
      text: "sm"
    },
    medium: {
      x: "1.5",
      y: "2",
      text: "base"
    },
    large: {
      x: "2",
      y: "3",
      text: "lg"
    }
  };
  return /* @__PURE__ */ lr("button", {
    onChange: u.onChange,
    onClick: u.onClick,
    className: `
      mx-1
      ${u.size ? `px-${m[u.size].y} py-${m[u.size].x} text-${m[u.size].text}` : ""}
      ${u.round ? "rounded-full" : "rounded-lg"}
      bg-${u.color}-${u.plain ? "100" : "500"}
      ${u.plain ? `border-2 border-${u.color}-400 hover:bg-white-200 hover:text-${u.color} text-${u.color}-500 border-solid` : `hover:bg-${u.color}-400 hover:text-white text-white`}
      cursor-pointer transition duration-300 ease-in-out transform hover:scale-105
    `,
    children: [u.children ? u.children : "", u.icon != "" ? /* @__PURE__ */ H(cr, {
      iconName: u.icon,
      customClassName: "p-1",
      onIconClick: () => {
        console.log("onClick 1");
      }
    }) : ""]
  });
};
fr.defaultProps = {
  color: "white",
  icon: "",
  size: "medium",
  round: !1,
  plain: !1
};
export {
  fr as SButton
};
//# sourceMappingURL=Button.esm.js.map
