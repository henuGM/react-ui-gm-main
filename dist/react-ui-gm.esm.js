var uk = Object.defineProperty;
var ok = (b, D, C) => D in b ? uk(b, D, { enumerable: !0, configurable: !0, writable: !0, value: C }) : b[D] = C;
var tT = (b, D, C) => (ok(b, typeof D != "symbol" ? D + "" : D, C), C);
import cl, { createContext as fT, forwardRef as sk, useImperativeHandle as ck, memo as dT, useContext as m0, useState as fk, useMemo as y0, useEffect as Op, isValidElement as pT, cloneElement as vT, Suspense as dk, useRef as h0, useCallback as pk, createElement as vk, useLayoutEffect as hk } from "react";
function mk(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var zm = { exports: {} }, kp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function yk() {
  if (nT)
    return kp;
  nT = 1;
  var b = cl, D = Symbol.for("react.element"), C = Symbol.for("react.fragment"), Y = Object.prototype.hasOwnProperty, ue = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(ze, Q, ie) {
    var Ke, W = {}, ve = null, se = null;
    ie !== void 0 && (ve = "" + ie), Q.key !== void 0 && (ve = "" + Q.key), Q.ref !== void 0 && (se = Q.ref);
    for (Ke in Q)
      Y.call(Q, Ke) && !oe.hasOwnProperty(Ke) && (W[Ke] = Q[Ke]);
    if (ze && ze.defaultProps)
      for (Ke in Q = ze.defaultProps, Q)
        W[Ke] === void 0 && (W[Ke] = Q[Ke]);
    return { $$typeof: D, type: ze, key: ve, ref: se, props: W, _owner: ue.current };
  }
  return kp.Fragment = C, kp.jsx = g, kp.jsxs = g, kp;
}
var _p = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function gk() {
  return rT || (rT = 1, process.env.NODE_ENV !== "production" && function() {
    var b = cl, D = Symbol.for("react.element"), C = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), ue = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), ze = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), Ue = Symbol.iterator, lt = "@@iterator";
    function ut(E) {
      if (E === null || typeof E != "object")
        return null;
      var B = Ue && E[Ue] || E[lt];
      return typeof B == "function" ? B : null;
    }
    var It = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ie(E) {
      {
        for (var B = arguments.length, Z = new Array(B > 1 ? B - 1 : 0), Te = 1; Te < B; Te++)
          Z[Te - 1] = arguments[Te];
        Ve("error", E, Z);
      }
    }
    function Ve(E, B, Z) {
      {
        var Te = It.ReactDebugCurrentFrame, He = Te.getStackAddendum();
        He !== "" && (B += "%s", Z = Z.concat([He]));
        var et = Z.map(function(je) {
          return String(je);
        });
        et.unshift("Warning: " + B), Function.prototype.apply.call(console[E], console, et);
      }
    }
    var ot = !1, Pe = !1, wt = !1, Be = !1, xn = !1, Vn;
    Vn = Symbol.for("react.module.reference");
    function Bt(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === Y || E === oe || xn || E === ue || E === ie || E === Ke || Be || E === se || ot || Pe || wt || typeof E == "object" && E !== null && (E.$$typeof === ve || E.$$typeof === W || E.$$typeof === g || E.$$typeof === ze || E.$$typeof === Q || E.$$typeof === Vn || E.getModuleId !== void 0));
    }
    function ht(E, B, Z) {
      var Te = E.displayName;
      if (Te)
        return Te;
      var He = B.displayName || B.name || "";
      return He !== "" ? Z + "(" + He + ")" : Z;
    }
    function wn(E) {
      return E.displayName || "Context";
    }
    function Le(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && Ie("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case Y:
          return "Fragment";
        case C:
          return "Portal";
        case oe:
          return "Profiler";
        case ue:
          return "StrictMode";
        case ie:
          return "Suspense";
        case Ke:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case ze:
            var B = E;
            return wn(B) + ".Consumer";
          case g:
            var Z = E;
            return wn(Z._context) + ".Provider";
          case Q:
            return ht(E, E.render, "ForwardRef");
          case W:
            var Te = E.displayName || null;
            return Te !== null ? Te : Le(E.type) || "Memo";
          case ve: {
            var He = E, et = He._payload, je = He._init;
            try {
              return Le(je(et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Xe = Object.assign, dn = 0, Dt, Zn, G, Ee, ne, nt, st;
    function Dn() {
    }
    Dn.__reactDisabledLog = !0;
    function Jn() {
      {
        if (dn === 0) {
          Dt = console.log, Zn = console.info, G = console.warn, Ee = console.error, ne = console.group, nt = console.groupCollapsed, st = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Dn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        dn++;
      }
    }
    function Ma() {
      {
        if (dn--, dn === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Xe({}, E, {
              value: Dt
            }),
            info: Xe({}, E, {
              value: Zn
            }),
            warn: Xe({}, E, {
              value: G
            }),
            error: Xe({}, E, {
              value: Ee
            }),
            group: Xe({}, E, {
              value: ne
            }),
            groupCollapsed: Xe({}, E, {
              value: nt
            }),
            groupEnd: Xe({}, E, {
              value: st
            })
          });
        }
        dn < 0 && Ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nn = It.ReactCurrentDispatcher, Ir;
    function jn(E, B, Z) {
      {
        if (Ir === void 0)
          try {
            throw Error();
          } catch (He) {
            var Te = He.stack.trim().match(/\n( *(at )?)/);
            Ir = Te && Te[1] || "";
          }
        return `
` + Ir + E;
      }
    }
    var fr = !1, Na;
    {
      var dr = typeof WeakMap == "function" ? WeakMap : Map;
      Na = new dr();
    }
    function Qr(E, B) {
      if (!E || fr)
        return "";
      {
        var Z = Na.get(E);
        if (Z !== void 0)
          return Z;
      }
      var Te;
      fr = !0;
      var He = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = nn.current, nn.current = null, Jn();
      try {
        if (B) {
          var je = function() {
            throw Error();
          };
          if (Object.defineProperty(je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(je, []);
            } catch (rt) {
              Te = rt;
            }
            Reflect.construct(E, [], je);
          } else {
            try {
              je.call();
            } catch (rt) {
              Te = rt;
            }
            E.call(je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (rt) {
            Te = rt;
          }
          E();
        }
      } catch (rt) {
        if (rt && Te && typeof rt.stack == "string") {
          for (var xe = rt.stack.split(`
`), hn = Te.stack.split(`
`), Mt = xe.length - 1, Nt = hn.length - 1; Mt >= 1 && Nt >= 0 && xe[Mt] !== hn[Nt]; )
            Nt--;
          for (; Mt >= 1 && Nt >= 0; Mt--, Nt--)
            if (xe[Mt] !== hn[Nt]) {
              if (Mt !== 1 || Nt !== 1)
                do
                  if (Mt--, Nt--, Nt < 0 || xe[Mt] !== hn[Nt]) {
                    var er = `
` + xe[Mt].replace(" at new ", " at ");
                    return E.displayName && er.includes("<anonymous>") && (er = er.replace("<anonymous>", E.displayName)), typeof E == "function" && Na.set(E, er), er;
                  }
                while (Mt >= 1 && Nt >= 0);
              break;
            }
        }
      } finally {
        fr = !1, nn.current = et, Ma(), Error.prepareStackTrace = He;
      }
      var _i = E ? E.displayName || E.name : "", ys = _i ? jn(_i) : "";
      return typeof E == "function" && Na.set(E, ys), ys;
    }
    function pn(E, B, Z) {
      return Qr(E, !1);
    }
    function Bn(E) {
      var B = E.prototype;
      return !!(B && B.isReactComponent);
    }
    function bn(E, B, Z) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Qr(E, Bn(E));
      if (typeof E == "string")
        return jn(E);
      switch (E) {
        case ie:
          return jn("Suspense");
        case Ke:
          return jn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case Q:
            return pn(E.render);
          case W:
            return bn(E.type, B, Z);
          case ve: {
            var Te = E, He = Te._payload, et = Te._init;
            try {
              return bn(et(He), B, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var Pn = Object.prototype.hasOwnProperty, $n = {}, Gr = It.ReactDebugCurrentFrame;
    function ma(E) {
      if (E) {
        var B = E._owner, Z = bn(E.type, E._source, B ? B.type : null);
        Gr.setExtraStackFrame(Z);
      } else
        Gr.setExtraStackFrame(null);
    }
    function qa(E, B, Z, Te, He) {
      {
        var et = Function.call.bind(Pn);
        for (var je in E)
          if (et(E, je)) {
            var xe = void 0;
            try {
              if (typeof E[je] != "function") {
                var hn = Error((Te || "React class") + ": " + Z + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw hn.name = "Invariant Violation", hn;
              }
              xe = E[je](B, je, Te, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Mt) {
              xe = Mt;
            }
            xe && !(xe instanceof Error) && (ma(He), Ie("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", Z, je, typeof xe), ma(null)), xe instanceof Error && !(xe.message in $n) && ($n[xe.message] = !0, ma(He), Ie("Failed %s type: %s", Z, xe.message), ma(null));
          }
      }
    }
    var za = Array.isArray;
    function ya(E) {
      return za(E);
    }
    function kr(E) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, Z = B && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return Z;
      }
    }
    function Ua(E) {
      try {
        return _r(E), !1;
      } catch {
        return !0;
      }
    }
    function _r(E) {
      return "" + E;
    }
    function ga(E) {
      if (Ua(E))
        return Ie("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kr(E)), _r(E);
    }
    var Kt = It.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Di, Sa, q;
    q = {};
    function ge(E) {
      if (Pn.call(E, "ref")) {
        var B = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function $e(E) {
      if (Pn.call(E, "key")) {
        var B = Object.getOwnPropertyDescriptor(E, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function pt(E, B) {
      if (typeof E.ref == "string" && Kt.current && B && Kt.current.stateNode !== B) {
        var Z = Le(Kt.current.type);
        q[Z] || (Ie('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Le(Kt.current.type), E.ref), q[Z] = !0);
      }
    }
    function At(E, B) {
      {
        var Z = function() {
          Di || (Di = !0, Ie("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        Z.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function vn(E, B) {
      {
        var Z = function() {
          Sa || (Sa = !0, Ie("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        Z.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var Qt = function(E, B, Z, Te, He, et, je) {
      var xe = {
        $$typeof: D,
        type: E,
        key: B,
        ref: Z,
        props: je,
        _owner: et
      };
      return xe._store = {}, Object.defineProperty(xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: He
      }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
    };
    function pr(E, B, Z, Te, He) {
      {
        var et, je = {}, xe = null, hn = null;
        Z !== void 0 && (ga(Z), xe = "" + Z), $e(B) && (ga(B.key), xe = "" + B.key), ge(B) && (hn = B.ref, pt(B, He));
        for (et in B)
          Pn.call(B, et) && !Or.hasOwnProperty(et) && (je[et] = B[et]);
        if (E && E.defaultProps) {
          var Mt = E.defaultProps;
          for (et in Mt)
            je[et] === void 0 && (je[et] = Mt[et]);
        }
        if (xe || hn) {
          var Nt = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          xe && At(je, Nt), hn && vn(je, Nt);
        }
        return Qt(E, xe, hn, He, Te, Kt.current, je);
      }
    }
    var Rt = It.ReactCurrentOwner, Lr = It.ReactDebugCurrentFrame;
    function St(E) {
      if (E) {
        var B = E._owner, Z = bn(E.type, E._source, B ? B.type : null);
        Lr.setExtraStackFrame(Z);
      } else
        Lr.setExtraStackFrame(null);
    }
    var xt;
    xt = !1;
    function ru(E) {
      return typeof E == "object" && E !== null && E.$$typeof === D;
    }
    function fl() {
      {
        if (Rt.current) {
          var E = Le(Rt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function au(E) {
      {
        if (E !== void 0) {
          var B = E.fileName.replace(/^.*[\\\/]/, ""), Z = E.lineNumber;
          return `

Check your code at ` + B + ":" + Z + ".";
        }
        return "";
      }
    }
    var io = {};
    function ms(E) {
      {
        var B = fl();
        if (!B) {
          var Z = typeof E == "string" ? E : E.displayName || E.name;
          Z && (B = `

Check the top-level render call using <` + Z + ">.");
        }
        return B;
      }
    }
    function dl(E, B) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var Z = ms(B);
        if (io[Z])
          return;
        io[Z] = !0;
        var Te = "";
        E && E._owner && E._owner !== Rt.current && (Te = " It was passed a child from " + Le(E._owner.type) + "."), St(E), Ie('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, Te), St(null);
      }
    }
    function iu(E, B) {
      {
        if (typeof E != "object")
          return;
        if (ya(E))
          for (var Z = 0; Z < E.length; Z++) {
            var Te = E[Z];
            ru(Te) && dl(Te, B);
          }
        else if (ru(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var He = ut(E);
          if (typeof He == "function" && He !== E.entries)
            for (var et = He.call(E), je; !(je = et.next()).done; )
              ru(je.value) && dl(je.value, B);
        }
      }
    }
    function pl(E) {
      {
        var B = E.type;
        if (B == null || typeof B == "string")
          return;
        var Z;
        if (typeof B == "function")
          Z = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === Q || B.$$typeof === W))
          Z = B.propTypes;
        else
          return;
        if (Z) {
          var Te = Le(B);
          qa(Z, E.props, "prop", Te, E);
        } else if (B.PropTypes !== void 0 && !xt) {
          xt = !0;
          var He = Le(B);
          Ie("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", He || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && Ie("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lu(E) {
      {
        for (var B = Object.keys(E.props), Z = 0; Z < B.length; Z++) {
          var Te = B[Z];
          if (Te !== "children" && Te !== "key") {
            St(E), Ie("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), St(null);
            break;
          }
        }
        E.ref !== null && (St(E), Ie("Invalid attribute `ref` supplied to `React.Fragment`."), St(null));
      }
    }
    function Aa(E, B, Z, Te, He, et) {
      {
        var je = Bt(E);
        if (!je) {
          var xe = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var hn = au(He);
          hn ? xe += hn : xe += fl();
          var Mt;
          E === null ? Mt = "null" : ya(E) ? Mt = "array" : E !== void 0 && E.$$typeof === D ? (Mt = "<" + (Le(E.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Mt = typeof E, Ie("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Mt, xe);
        }
        var Nt = pr(E, B, Z, He, et);
        if (Nt == null)
          return Nt;
        if (je) {
          var er = B.children;
          if (er !== void 0)
            if (Te)
              if (ya(er)) {
                for (var _i = 0; _i < er.length; _i++)
                  iu(er[_i], E);
                Object.freeze && Object.freeze(er);
              } else
                Ie("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              iu(er, E);
        }
        return E === Y ? lu(Nt) : pl(Nt), Nt;
      }
    }
    function bi(E, B, Z) {
      return Aa(E, B, Z, !0);
    }
    function Mr(E, B, Z) {
      return Aa(E, B, Z, !1);
    }
    var Ca = Mr, ki = bi;
    _p.Fragment = Y, _p.jsx = Ca, _p.jsxs = ki;
  }()), _p;
}
(function(b) {
  process.env.NODE_ENV === "production" ? b.exports = yk() : b.exports = gk();
})(zm);
const Sk = zm.exports.Fragment, fn = zm.exports.jsx, hs = zm.exports.jsxs;
function Ck(b) {
  const {
    iconName: D,
    customClassName: C,
    onIconClick: Y
  } = b, ue = () => Y == null ? void 0 : Y();
  return /* @__PURE__ */ fn("span", {
    className: C,
    children: /* @__PURE__ */ fn("i", {
      className: `iconfont icon-${D}`,
      onClick: ue
    })
  });
}
const Ek = (b) => {
  const D = {
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
  return /* @__PURE__ */ hs("button", {
    onChange: b.onChange,
    onClick: b.onClick,
    className: `
      mx-1
      ${b.size ? `px-${D[b.size].y} py-${D[b.size].x} text-${D[b.size].text}` : ""}
      ${b.round ? "rounded-full" : "rounded-lg"}
      bg-${b.color}-${b.plain ? "100" : "500"}
      ${b.plain ? `border-2 border-${b.color}-400 hover:bg-white-200 hover:text-${b.color} text-${b.color}-500 border-solid` : `hover:bg-${b.color}-400 hover:text-white text-white`}
      cursor-pointer transition duration-300 ease-in-out transform hover:scale-105
    `,
    children: [b.children ? b.children : "", b.icon != "" ? /* @__PURE__ */ fn(Ck, {
      iconName: b.icon,
      customClassName: "p-1",
      onIconClick: () => {
        console.log("onClick 1");
      }
    }) : ""]
  });
};
Ek.defaultProps = {
  color: "white",
  icon: "",
  size: "medium",
  round: !1,
  plain: !1
};
const hT = fT();
var g0 = { exports: {} }, va = {}, d0 = { exports: {} }, p0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function Tk() {
  return aT || (aT = 1, function(b) {
    function D(G, Ee) {
      var ne = G.length;
      G.push(Ee);
      e:
        for (; 0 < ne; ) {
          var nt = ne - 1 >>> 1, st = G[nt];
          if (0 < ue(st, Ee))
            G[nt] = Ee, G[ne] = st, ne = nt;
          else
            break e;
        }
    }
    function C(G) {
      return G.length === 0 ? null : G[0];
    }
    function Y(G) {
      if (G.length === 0)
        return null;
      var Ee = G[0], ne = G.pop();
      if (ne !== Ee) {
        G[0] = ne;
        e:
          for (var nt = 0, st = G.length, Dn = st >>> 1; nt < Dn; ) {
            var Jn = 2 * (nt + 1) - 1, Ma = G[Jn], nn = Jn + 1, Ir = G[nn];
            if (0 > ue(Ma, ne))
              nn < st && 0 > ue(Ir, Ma) ? (G[nt] = Ir, G[nn] = ne, nt = nn) : (G[nt] = Ma, G[Jn] = ne, nt = Jn);
            else if (nn < st && 0 > ue(Ir, ne))
              G[nt] = Ir, G[nn] = ne, nt = nn;
            else
              break e;
          }
      }
      return Ee;
    }
    function ue(G, Ee) {
      var ne = G.sortIndex - Ee.sortIndex;
      return ne !== 0 ? ne : G.id - Ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var oe = performance;
      b.unstable_now = function() {
        return oe.now();
      };
    } else {
      var g = Date, ze = g.now();
      b.unstable_now = function() {
        return g.now() - ze;
      };
    }
    var Q = [], ie = [], Ke = 1, W = null, ve = 3, se = !1, Ue = !1, lt = !1, ut = typeof setTimeout == "function" ? setTimeout : null, It = typeof clearTimeout == "function" ? clearTimeout : null, Ie = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ve(G) {
      for (var Ee = C(ie); Ee !== null; ) {
        if (Ee.callback === null)
          Y(ie);
        else if (Ee.startTime <= G)
          Y(ie), Ee.sortIndex = Ee.expirationTime, D(Q, Ee);
        else
          break;
        Ee = C(ie);
      }
    }
    function ot(G) {
      if (lt = !1, Ve(G), !Ue)
        if (C(Q) !== null)
          Ue = !0, Dt(Pe);
        else {
          var Ee = C(ie);
          Ee !== null && Zn(ot, Ee.startTime - G);
        }
    }
    function Pe(G, Ee) {
      Ue = !1, lt && (lt = !1, It(xn), xn = -1), se = !0;
      var ne = ve;
      try {
        for (Ve(Ee), W = C(Q); W !== null && (!(W.expirationTime > Ee) || G && !ht()); ) {
          var nt = W.callback;
          if (typeof nt == "function") {
            W.callback = null, ve = W.priorityLevel;
            var st = nt(W.expirationTime <= Ee);
            Ee = b.unstable_now(), typeof st == "function" ? W.callback = st : W === C(Q) && Y(Q), Ve(Ee);
          } else
            Y(Q);
          W = C(Q);
        }
        if (W !== null)
          var Dn = !0;
        else {
          var Jn = C(ie);
          Jn !== null && Zn(ot, Jn.startTime - Ee), Dn = !1;
        }
        return Dn;
      } finally {
        W = null, ve = ne, se = !1;
      }
    }
    var wt = !1, Be = null, xn = -1, Vn = 5, Bt = -1;
    function ht() {
      return !(b.unstable_now() - Bt < Vn);
    }
    function wn() {
      if (Be !== null) {
        var G = b.unstable_now();
        Bt = G;
        var Ee = !0;
        try {
          Ee = Be(!0, G);
        } finally {
          Ee ? Le() : (wt = !1, Be = null);
        }
      } else
        wt = !1;
    }
    var Le;
    if (typeof Ie == "function")
      Le = function() {
        Ie(wn);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), dn = Xe.port2;
      Xe.port1.onmessage = wn, Le = function() {
        dn.postMessage(null);
      };
    } else
      Le = function() {
        ut(wn, 0);
      };
    function Dt(G) {
      Be = G, wt || (wt = !0, Le());
    }
    function Zn(G, Ee) {
      xn = ut(function() {
        G(b.unstable_now());
      }, Ee);
    }
    b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, b.unstable_continueExecution = function() {
      Ue || se || (Ue = !0, Dt(Pe));
    }, b.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Vn = 0 < G ? Math.floor(1e3 / G) : 5;
    }, b.unstable_getCurrentPriorityLevel = function() {
      return ve;
    }, b.unstable_getFirstCallbackNode = function() {
      return C(Q);
    }, b.unstable_next = function(G) {
      switch (ve) {
        case 1:
        case 2:
        case 3:
          var Ee = 3;
          break;
        default:
          Ee = ve;
      }
      var ne = ve;
      ve = Ee;
      try {
        return G();
      } finally {
        ve = ne;
      }
    }, b.unstable_pauseExecution = function() {
    }, b.unstable_requestPaint = function() {
    }, b.unstable_runWithPriority = function(G, Ee) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var ne = ve;
      ve = G;
      try {
        return Ee();
      } finally {
        ve = ne;
      }
    }, b.unstable_scheduleCallback = function(G, Ee, ne) {
      var nt = b.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? nt + ne : nt) : ne = nt, G) {
        case 1:
          var st = -1;
          break;
        case 2:
          st = 250;
          break;
        case 5:
          st = 1073741823;
          break;
        case 4:
          st = 1e4;
          break;
        default:
          st = 5e3;
      }
      return st = ne + st, G = { id: Ke++, callback: Ee, priorityLevel: G, startTime: ne, expirationTime: st, sortIndex: -1 }, ne > nt ? (G.sortIndex = ne, D(ie, G), C(Q) === null && G === C(ie) && (lt ? (It(xn), xn = -1) : lt = !0, Zn(ot, ne - nt))) : (G.sortIndex = st, D(Q, G), Ue || se || (Ue = !0, Dt(Pe))), G;
    }, b.unstable_shouldYield = ht, b.unstable_wrapCallback = function(G) {
      var Ee = ve;
      return function() {
        var ne = ve;
        ve = Ee;
        try {
          return G.apply(this, arguments);
        } finally {
          ve = ne;
        }
      };
    };
  }(p0)), p0;
}
var v0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function Rk() {
  return iT || (iT = 1, function(b) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var D = !1, C = !1, Y = 5;
      function ue(q, ge) {
        var $e = q.length;
        q.push(ge), ze(q, ge, $e);
      }
      function oe(q) {
        return q.length === 0 ? null : q[0];
      }
      function g(q) {
        if (q.length === 0)
          return null;
        var ge = q[0], $e = q.pop();
        return $e !== ge && (q[0] = $e, Q(q, $e, 0)), ge;
      }
      function ze(q, ge, $e) {
        for (var pt = $e; pt > 0; ) {
          var At = pt - 1 >>> 1, vn = q[At];
          if (ie(vn, ge) > 0)
            q[At] = ge, q[pt] = vn, pt = At;
          else
            return;
        }
      }
      function Q(q, ge, $e) {
        for (var pt = $e, At = q.length, vn = At >>> 1; pt < vn; ) {
          var Qt = (pt + 1) * 2 - 1, pr = q[Qt], Rt = Qt + 1, Lr = q[Rt];
          if (ie(pr, ge) < 0)
            Rt < At && ie(Lr, pr) < 0 ? (q[pt] = Lr, q[Rt] = ge, pt = Rt) : (q[pt] = pr, q[Qt] = ge, pt = Qt);
          else if (Rt < At && ie(Lr, ge) < 0)
            q[pt] = Lr, q[Rt] = ge, pt = Rt;
          else
            return;
        }
      }
      function ie(q, ge) {
        var $e = q.sortIndex - ge.sortIndex;
        return $e !== 0 ? $e : q.id - ge.id;
      }
      var Ke = 1, W = 2, ve = 3, se = 4, Ue = 5;
      function lt(q, ge) {
      }
      var ut = typeof performance == "object" && typeof performance.now == "function";
      if (ut) {
        var It = performance;
        b.unstable_now = function() {
          return It.now();
        };
      } else {
        var Ie = Date, Ve = Ie.now();
        b.unstable_now = function() {
          return Ie.now() - Ve;
        };
      }
      var ot = 1073741823, Pe = -1, wt = 250, Be = 5e3, xn = 1e4, Vn = ot, Bt = [], ht = [], wn = 1, Le = null, Xe = ve, dn = !1, Dt = !1, Zn = !1, G = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function nt(q) {
        for (var ge = oe(ht); ge !== null; ) {
          if (ge.callback === null)
            g(ht);
          else if (ge.startTime <= q)
            g(ht), ge.sortIndex = ge.expirationTime, ue(Bt, ge);
          else
            return;
          ge = oe(ht);
        }
      }
      function st(q) {
        if (Zn = !1, nt(q), !Dt)
          if (oe(Bt) !== null)
            Dt = !0, ga(Dn);
          else {
            var ge = oe(ht);
            ge !== null && Kt(st, ge.startTime - q);
          }
      }
      function Dn(q, ge) {
        Dt = !1, Zn && (Zn = !1, Or()), dn = !0;
        var $e = Xe;
        try {
          var pt;
          if (!C)
            return Jn(q, ge);
        } finally {
          Le = null, Xe = $e, dn = !1;
        }
      }
      function Jn(q, ge) {
        var $e = ge;
        for (nt($e), Le = oe(Bt); Le !== null && !D && !(Le.expirationTime > $e && (!q || ma())); ) {
          var pt = Le.callback;
          if (typeof pt == "function") {
            Le.callback = null, Xe = Le.priorityLevel;
            var At = Le.expirationTime <= $e, vn = pt(At);
            $e = b.unstable_now(), typeof vn == "function" ? Le.callback = vn : Le === oe(Bt) && g(Bt), nt($e);
          } else
            g(Bt);
          Le = oe(Bt);
        }
        if (Le !== null)
          return !0;
        var Qt = oe(ht);
        return Qt !== null && Kt(st, Qt.startTime - $e), !1;
      }
      function Ma(q, ge) {
        switch (q) {
          case Ke:
          case W:
          case ve:
          case se:
          case Ue:
            break;
          default:
            q = ve;
        }
        var $e = Xe;
        Xe = q;
        try {
          return ge();
        } finally {
          Xe = $e;
        }
      }
      function nn(q) {
        var ge;
        switch (Xe) {
          case Ke:
          case W:
          case ve:
            ge = ve;
            break;
          default:
            ge = Xe;
            break;
        }
        var $e = Xe;
        Xe = ge;
        try {
          return q();
        } finally {
          Xe = $e;
        }
      }
      function Ir(q) {
        var ge = Xe;
        return function() {
          var $e = Xe;
          Xe = ge;
          try {
            return q.apply(this, arguments);
          } finally {
            Xe = $e;
          }
        };
      }
      function jn(q, ge, $e) {
        var pt = b.unstable_now(), At;
        if (typeof $e == "object" && $e !== null) {
          var vn = $e.delay;
          typeof vn == "number" && vn > 0 ? At = pt + vn : At = pt;
        } else
          At = pt;
        var Qt;
        switch (q) {
          case Ke:
            Qt = Pe;
            break;
          case W:
            Qt = wt;
            break;
          case Ue:
            Qt = Vn;
            break;
          case se:
            Qt = xn;
            break;
          case ve:
          default:
            Qt = Be;
            break;
        }
        var pr = At + Qt, Rt = {
          id: wn++,
          callback: ge,
          priorityLevel: q,
          startTime: At,
          expirationTime: pr,
          sortIndex: -1
        };
        return At > pt ? (Rt.sortIndex = At, ue(ht, Rt), oe(Bt) === null && Rt === oe(ht) && (Zn ? Or() : Zn = !0, Kt(st, At - pt))) : (Rt.sortIndex = pr, ue(Bt, Rt), !Dt && !dn && (Dt = !0, ga(Dn))), Rt;
      }
      function fr() {
      }
      function Na() {
        !Dt && !dn && (Dt = !0, ga(Dn));
      }
      function dr() {
        return oe(Bt);
      }
      function Qr(q) {
        q.callback = null;
      }
      function pn() {
        return Xe;
      }
      var Bn = !1, bn = null, Pn = -1, $n = Y, Gr = -1;
      function ma() {
        var q = b.unstable_now() - Gr;
        return !(q < $n);
      }
      function qa() {
      }
      function za(q) {
        if (q < 0 || q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        q > 0 ? $n = Math.floor(1e3 / q) : $n = Y;
      }
      var ya = function() {
        if (bn !== null) {
          var q = b.unstable_now();
          Gr = q;
          var ge = !0, $e = !0;
          try {
            $e = bn(ge, q);
          } finally {
            $e ? kr() : (Bn = !1, bn = null);
          }
        } else
          Bn = !1;
      }, kr;
      if (typeof ne == "function")
        kr = function() {
          ne(ya);
        };
      else if (typeof MessageChannel < "u") {
        var Ua = new MessageChannel(), _r = Ua.port2;
        Ua.port1.onmessage = ya, kr = function() {
          _r.postMessage(null);
        };
      } else
        kr = function() {
          G(ya, 0);
        };
      function ga(q) {
        bn = q, Bn || (Bn = !0, kr());
      }
      function Kt(q, ge) {
        Pn = G(function() {
          q(b.unstable_now());
        }, ge);
      }
      function Or() {
        Ee(Pn), Pn = -1;
      }
      var Di = qa, Sa = null;
      b.unstable_IdlePriority = Ue, b.unstable_ImmediatePriority = Ke, b.unstable_LowPriority = se, b.unstable_NormalPriority = ve, b.unstable_Profiling = Sa, b.unstable_UserBlockingPriority = W, b.unstable_cancelCallback = Qr, b.unstable_continueExecution = Na, b.unstable_forceFrameRate = za, b.unstable_getCurrentPriorityLevel = pn, b.unstable_getFirstCallbackNode = dr, b.unstable_next = nn, b.unstable_pauseExecution = fr, b.unstable_requestPaint = Di, b.unstable_runWithPriority = Ma, b.unstable_scheduleCallback = jn, b.unstable_shouldYield = ma, b.unstable_wrapCallback = Ir, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(v0)), v0;
}
var lT;
function mT() {
  return lT || (lT = 1, function(b) {
    process.env.NODE_ENV === "production" ? b.exports = Tk() : b.exports = Rk();
  }(d0)), d0.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function xk() {
  if (uT)
    return va;
  uT = 1;
  var b = cl, D = mT();
  function C(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Y = /* @__PURE__ */ new Set(), ue = {};
  function oe(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (ue[n] = r, n = 0; n < r.length; n++)
      Y.add(r[n]);
  }
  var ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Q = Object.prototype.hasOwnProperty, ie = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ke = {}, W = {};
  function ve(n) {
    return Q.call(W, n) ? !0 : Q.call(Ke, n) ? !1 : ie.test(n) ? W[n] = !0 : (Ke[n] = !0, !1);
  }
  function se(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ue(n, r, l, o) {
    if (r === null || typeof r > "u" || se(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function lt(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var ut = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ut[n] = new lt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ut[r] = new lt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ut[n] = new lt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ut[n] = new lt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ut[n] = new lt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ut[n] = new lt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ut[n] = new lt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ut[n] = new lt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ut[n] = new lt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var It = /[\-:]([a-z])/g;
  function Ie(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      It,
      Ie
    );
    ut[r] = new lt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(It, Ie);
    ut[r] = new lt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(It, Ie);
    ut[r] = new lt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ut[n] = new lt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ut.xlinkHref = new lt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ut[n] = new lt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ve(n, r, l, o) {
    var c = ut.hasOwnProperty(r) ? ut[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ue(r, l, c, o) && (l = null), o || c === null ? ve(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ot = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pe = Symbol.for("react.element"), wt = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), xn = Symbol.for("react.strict_mode"), Vn = Symbol.for("react.profiler"), Bt = Symbol.for("react.provider"), ht = Symbol.for("react.context"), wn = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), dn = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Zn = Symbol.for("react.offscreen"), G = Symbol.iterator;
  function Ee(n) {
    return n === null || typeof n != "object" ? null : (n = G && n[G] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ne = Object.assign, nt;
  function st(n) {
    if (nt === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        nt = r && r[1] || "";
      }
    return `
` + nt + n;
  }
  var Dn = !1;
  function Jn(n, r) {
    if (!n || Dn)
      return "";
    Dn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (z) {
            var o = z;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (z) {
            o = z;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, S = d.length - 1; 1 <= h && 0 <= S && c[h] !== d[S]; )
          S--;
        for (; 1 <= h && 0 <= S; h--, S--)
          if (c[h] !== d[S]) {
            if (h !== 1 || S !== 1)
              do
                if (h--, S--, 0 > S || c[h] !== d[S]) {
                  var T = `
` + c[h].replace(" at new ", " at ");
                  return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
                }
              while (1 <= h && 0 <= S);
            break;
          }
      }
    } finally {
      Dn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? st(n) : "";
  }
  function Ma(n) {
    switch (n.tag) {
      case 5:
        return st(n.type);
      case 16:
        return st("Lazy");
      case 13:
        return st("Suspense");
      case 19:
        return st("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Jn(n.type, !1), n;
      case 11:
        return n = Jn(n.type.render, !1), n;
      case 1:
        return n = Jn(n.type, !0), n;
      default:
        return "";
    }
  }
  function nn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Be:
        return "Fragment";
      case wt:
        return "Portal";
      case Vn:
        return "Profiler";
      case xn:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Xe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ht:
          return (n.displayName || "Context") + ".Consumer";
        case Bt:
          return (n._context.displayName || "Context") + ".Provider";
        case wn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case dn:
          return r = n.displayName || null, r !== null ? r : nn(n.type) || "Memo";
        case Dt:
          r = n._payload, n = n._init;
          try {
            return nn(n(r));
          } catch {
          }
      }
    return null;
  }
  function Ir(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return nn(r);
      case 8:
        return r === xn ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function jn(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function fr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Na(n) {
    var r = fr(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function dr(n) {
    n._valueTracker || (n._valueTracker = Na(n));
  }
  function Qr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = fr(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function pn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Bn(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l != null ? l : n._wrapperState.initialChecked });
  }
  function bn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = jn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Pn(n, r) {
    r = r.checked, r != null && Ve(n, "checked", r, !1);
  }
  function $n(n, r) {
    Pn(n, r);
    var l = jn(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ma(n, r.type, l) : r.hasOwnProperty("defaultValue") && ma(n, r.type, jn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Gr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function ma(n, r, l) {
    (r !== "number" || pn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qa = Array.isArray;
  function za(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + jn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ya(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(C(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function kr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(C(92));
        if (qa(l)) {
          if (1 < l.length)
            throw Error(C(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: jn(l) };
  }
  function Ua(n, r) {
    var l = jn(r.value), o = jn(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function _r(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ga(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Kt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ga(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Or, Di = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Or = Or || document.createElement("div"), Or.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Or.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Sa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var q = {
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
    strokeWidth: !0
  }, ge = ["Webkit", "ms", "Moz", "O"];
  Object.keys(q).forEach(function(n) {
    ge.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), q[r] = q[n];
    });
  });
  function $e(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || q.hasOwnProperty(n) && q[n] ? ("" + r).trim() : r + "px";
  }
  function pt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = $e(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var At = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function vn(n, r) {
    if (r) {
      if (At[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(C(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(C(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(C(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(C(62));
    }
  }
  function Qt(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var pr = null;
  function Rt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Lr = null, St = null, xt = null;
  function ru(n) {
    if (n = ko(n)) {
      if (typeof Lr != "function")
        throw Error(C(280));
      var r = n.stateNode;
      r && (r = Se(r), Lr(n.stateNode, n.type, r));
    }
  }
  function fl(n) {
    St ? xt ? xt.push(n) : xt = [n] : St = n;
  }
  function au() {
    if (St) {
      var n = St, r = xt;
      if (xt = St = null, ru(n), r)
        for (n = 0; n < r.length; n++)
          ru(r[n]);
    }
  }
  function io(n, r) {
    return n(r);
  }
  function ms() {
  }
  var dl = !1;
  function iu(n, r, l) {
    if (dl)
      return n(r, l);
    dl = !0;
    try {
      return io(n, r, l);
    } finally {
      dl = !1, (St !== null || xt !== null) && (ms(), au());
    }
  }
  function pl(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Se(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(C(231, r, typeof l));
    return l;
  }
  var lu = !1;
  if (ze)
    try {
      var Aa = {};
      Object.defineProperty(Aa, "passive", { get: function() {
        lu = !0;
      } }), window.addEventListener("test", Aa, Aa), window.removeEventListener("test", Aa, Aa);
    } catch {
      lu = !1;
    }
  function bi(n, r, l, o, c, d, h, S, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (j) {
      this.onError(j);
    }
  }
  var Mr = !1, Ca = null, ki = !1, E = null, B = { onError: function(n) {
    Mr = !0, Ca = n;
  } };
  function Z(n, r, l, o, c, d, h, S, T) {
    Mr = !1, Ca = null, bi.apply(B, arguments);
  }
  function Te(n, r, l, o, c, d, h, S, T) {
    if (Z.apply(this, arguments), Mr) {
      if (Mr) {
        var z = Ca;
        Mr = !1, Ca = null;
      } else
        throw Error(C(198));
      ki || (ki = !0, E = z);
    }
  }
  function He(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function et(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function je(n) {
    if (He(n) !== n)
      throw Error(C(188));
  }
  function xe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = He(n), r === null)
        throw Error(C(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return je(c), n;
          if (d === o)
            return je(c), r;
          d = d.sibling;
        }
        throw Error(C(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var h = !1, S = c.child; S; ) {
          if (S === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            h = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = d.child; S; ) {
            if (S === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              h = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!h)
            throw Error(C(189));
        }
      }
      if (l.alternate !== o)
        throw Error(C(190));
    }
    if (l.tag !== 3)
      throw Error(C(188));
    return l.stateNode.current === l ? n : r;
  }
  function hn(n) {
    return n = xe(n), n !== null ? Mt(n) : null;
  }
  function Mt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Mt(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Nt = D.unstable_scheduleCallback, er = D.unstable_cancelCallback, _i = D.unstable_shouldYield, ys = D.unstable_requestPaint, rt = D.unstable_now, Um = D.unstable_getCurrentPriorityLevel, Za = D.unstable_ImmediatePriority, Qe = D.unstable_UserBlockingPriority, Oi = D.unstable_NormalPriority, Mp = D.unstable_LowPriority, df = D.unstable_IdlePriority, lo = null, Ea = null;
  function Np(n) {
    if (Ea && typeof Ea.onCommitFiberRoot == "function")
      try {
        Ea.onCommitFiberRoot(lo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Wr = Math.clz32 ? Math.clz32 : Am, zp = Math.log, Up = Math.LN2;
  function Am(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (zp(n) / Up | 0) | 0;
  }
  var gs = 64, uu = 4194304;
  function vl(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ta(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = vl(S) : (d &= h, d !== 0 && (o = vl(d)));
    } else
      h = l & ~c, h !== 0 ? o = vl(h) : d !== 0 && (o = vl(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Wr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function pf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ss(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - Wr(d), S = 1 << h, T = c[h];
      T === -1 ? ((S & l) === 0 || (S & o) !== 0) && (c[h] = pf(S, r)) : T <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function vf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Cs() {
    var n = gs;
    return gs <<= 1, (gs & 4194240) === 0 && (gs = 64), n;
  }
  function hf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function hl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Wr(r), n[r] = l;
  }
  function Fm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Wr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function uo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Wr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var vt = 0;
  function mf(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ap, Es, Ct, Fp, yf, Ne = !1, oo = [], qt = null, Xr = null, Kr = null, so = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), mt = [], Hm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ra(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        qt = null;
        break;
      case "dragenter":
      case "dragleave":
        Xr = null;
        break;
      case "mouseover":
      case "mouseout":
        Kr = null;
        break;
      case "pointerover":
      case "pointerout":
        so.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        rn.delete(r.pointerId);
    }
  }
  function Yn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ko(r), r !== null && Es(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Li(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return qt = Yn(qt, n, r, l, o, c), !0;
      case "dragenter":
        return Xr = Yn(Xr, n, r, l, o, c), !0;
      case "mouseover":
        return Kr = Yn(Kr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return so.set(d, Yn(so.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, rn.set(d, Yn(rn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Hp(n) {
    var r = Zr(n.target);
    if (r !== null) {
      var l = He(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = et(l), r !== null) {
            n.blockedOn = r, yf(n.priority, function() {
              Ct(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ou(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = xs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        pr = o, l.target.dispatchEvent(o), pr = null;
      } else
        return r = ko(l), r !== null && Es(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function gf(n, r, l) {
    ou(n) && l.delete(r);
  }
  function Vp() {
    Ne = !1, qt !== null && ou(qt) && (qt = null), Xr !== null && ou(Xr) && (Xr = null), Kr !== null && ou(Kr) && (Kr = null), so.forEach(gf), rn.forEach(gf);
  }
  function co(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ne || (Ne = !0, D.unstable_scheduleCallback(D.unstable_NormalPriority, Vp)));
  }
  function fo(n) {
    function r(c) {
      return co(c, n);
    }
    if (0 < oo.length) {
      co(oo[0], n);
      for (var l = 1; l < oo.length; l++) {
        var o = oo[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (qt !== null && co(qt, n), Xr !== null && co(Xr, n), Kr !== null && co(Kr, n), so.forEach(r), rn.forEach(r), l = 0; l < mt.length; l++)
      o = mt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < mt.length && (l = mt[0], l.blockedOn === null); )
      Hp(l), l.blockedOn === null && mt.shift();
  }
  var su = ot.ReactCurrentBatchConfig, ml = !0;
  function jp(n, r, l, o) {
    var c = vt, d = su.transition;
    su.transition = null;
    try {
      vt = 1, Rs(n, r, l, o);
    } finally {
      vt = c, su.transition = d;
    }
  }
  function Ts(n, r, l, o) {
    var c = vt, d = su.transition;
    su.transition = null;
    try {
      vt = 4, Rs(n, r, l, o);
    } finally {
      vt = c, su.transition = d;
    }
  }
  function Rs(n, r, l, o) {
    if (ml) {
      var c = xs(n, r, l, o);
      if (c === null)
        As(n, r, o, po, l), Ra(n, o);
      else if (Li(c, n, r, l, o))
        o.stopPropagation();
      else if (Ra(n, o), r & 4 && -1 < Hm.indexOf(n)) {
        for (; c !== null; ) {
          var d = ko(c);
          if (d !== null && Ap(d), d = xs(n, r, l, o), d === null && As(n, r, o, po, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        As(n, r, o, null, l);
    }
  }
  var po = null;
  function xs(n, r, l, o) {
    if (po = null, n = Rt(o), n = Zr(n), n !== null)
      if (r = He(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = et(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return po = n, null;
  }
  function Sf(n) {
    switch (n) {
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
        switch (Um()) {
          case Za:
            return 1;
          case Qe:
            return 4;
          case Oi:
          case Mp:
            return 16;
          case df:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ja = null, vo = null, ho = null;
  function Cf() {
    if (ho)
      return ho;
    var n, r = vo, l = r.length, o, c = "value" in Ja ? Ja.value : Ja.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return ho = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function cu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function mo() {
    return !0;
  }
  function Bp() {
    return !1;
  }
  function Nr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? mo : Bp, this.isPropagationStopped = Bp, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = mo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = mo);
    }, persist: function() {
    }, isPersistent: mo }), r;
  }
  var Mi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ws = Nr(Mi), fu = ne({}, Mi, { view: 0, detail: 0 }), Pp = Nr(fu), Ds, Ef, yo, mn = ne({}, fu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yo && (yo && n.type === "mousemove" ? (Ds = n.screenX - yo.screenX, Ef = n.screenY - yo.screenY) : Ef = Ds = 0, yo = n), Ds);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Ef;
  } }), bs = Nr(mn), $p = ne({}, mn, { dataTransfer: 0 }), Yp = Nr($p), Vm = ne({}, fu, { relatedTarget: 0 }), Ni = Nr(Vm), Tf = ne({}, Mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ip = Nr(Tf), jm = ne({}, Mi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Bm = Nr(jm), Pm = ne({}, Mi, { data: 0 }), Rf = Nr(Pm), xf = {
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
    MozPrintableKey: "Unidentified"
  }, Qp = {
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
    224: "Meta"
  }, Gp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Gp[n]) ? !!r[n] : !1;
  }
  function wf() {
    return Wp;
  }
  var ei = ne({}, fu, { key: function(n) {
    if (n.key) {
      var r = xf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = cu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Qp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wf, charCode: function(n) {
    return n.type === "keypress" ? cu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? cu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), $m = Nr(ei), Df = ne({}, mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ks = Nr(Df), bf = ne({}, fu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wf }), Ym = Nr(bf), _s = ne({}, Mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xp = Nr(_s), vr = ne({}, mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ti = Nr(vr), Zt = [9, 13, 27, 32], xa = ze && "CompositionEvent" in window, yl = null;
  ze && "documentMode" in document && (yl = document.documentMode);
  var Os = ze && "TextEvent" in window && !yl, Kp = ze && (!xa || yl && 8 < yl && 11 >= yl), du = String.fromCharCode(32), qp = !1;
  function Zp(n, r) {
    switch (n) {
      case "keyup":
        return Zt.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ls(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var pu = !1;
  function Im(n, r) {
    switch (n) {
      case "compositionend":
        return Ls(r);
      case "keypress":
        return r.which !== 32 ? null : (qp = !0, du);
      case "textInput":
        return n = r.data, n === du && qp ? null : n;
      default:
        return null;
    }
  }
  function Qm(n, r) {
    if (pu)
      return n === "compositionend" || !xa && Zp(n, r) ? (n = Cf(), ho = vo = Ja = null, pu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Kp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ev(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jp[n.type] : r === "textarea";
  }
  function tv(n, r, l, o) {
    fl(o), r = wo(r, "onChange"), 0 < r.length && (l = new ws("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var go = null, vu = null;
  function hu(n) {
    Us(n, 0);
  }
  function mu(n) {
    var r = gu(n);
    if (Qr(r))
      return n;
  }
  function nv(n, r) {
    if (n === "change")
      return r;
  }
  var kf = !1;
  if (ze) {
    var _f;
    if (ze) {
      var Of = "oninput" in document;
      if (!Of) {
        var rv = document.createElement("div");
        rv.setAttribute("oninput", "return;"), Of = typeof rv.oninput == "function";
      }
      _f = Of;
    } else
      _f = !1;
    kf = _f && (!document.documentMode || 9 < document.documentMode);
  }
  function av() {
    go && (go.detachEvent("onpropertychange", iv), vu = go = null);
  }
  function iv(n) {
    if (n.propertyName === "value" && mu(vu)) {
      var r = [];
      tv(r, vu, n, Rt(n)), iu(hu, r);
    }
  }
  function Gm(n, r, l) {
    n === "focusin" ? (av(), go = r, vu = l, go.attachEvent("onpropertychange", iv)) : n === "focusout" && av();
  }
  function Wm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return mu(vu);
  }
  function Xm(n, r) {
    if (n === "click")
      return mu(r);
  }
  function lv(n, r) {
    if (n === "input" || n === "change")
      return mu(r);
  }
  function Km(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var qr = typeof Object.is == "function" ? Object.is : Km;
  function So(n, r) {
    if (qr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Q.call(r, c) || !qr(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function uv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function ov(n, r) {
    var l = uv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = uv(l);
    }
  }
  function sv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? sv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ms() {
    for (var n = window, r = pn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = pn(n.document);
    }
    return r;
  }
  function ni(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ns(n) {
    var r = Ms(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && sv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ni(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = ov(l, d);
          var h = ov(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var cv = ze && "documentMode" in document && 11 >= document.documentMode, wa = null, Lf = null, Co = null, Mf = !1;
  function fv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Mf || wa == null || wa !== pn(o) || (o = wa, "selectionStart" in o && ni(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Co && So(Co, o) || (Co = o, o = wo(Lf, "onSelect"), 0 < o.length && (r = new ws("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = wa)));
  }
  function zs(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var gl = { animationend: zs("Animation", "AnimationEnd"), animationiteration: zs("Animation", "AnimationIteration"), animationstart: zs("Animation", "AnimationStart"), transitionend: zs("Transition", "TransitionEnd") }, Nf = {}, zf = {};
  ze && (zf = document.createElement("div").style, "AnimationEvent" in window || (delete gl.animationend.animation, delete gl.animationiteration.animation, delete gl.animationstart.animation), "TransitionEvent" in window || delete gl.transitionend.transition);
  function yn(n) {
    if (Nf[n])
      return Nf[n];
    if (!gl[n])
      return n;
    var r = gl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in zf)
        return Nf[n] = r[l];
    return n;
  }
  var Uf = yn("animationend"), dv = yn("animationiteration"), pv = yn("animationstart"), vv = yn("transitionend"), hv = /* @__PURE__ */ new Map(), mv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ri(n, r) {
    hv.set(n, r), oe(r, [n]);
  }
  for (var Eo = 0; Eo < mv.length; Eo++) {
    var Sl = mv[Eo], qm = Sl.toLowerCase(), To = Sl[0].toUpperCase() + Sl.slice(1);
    ri(qm, "on" + To);
  }
  ri(Uf, "onAnimationEnd"), ri(dv, "onAnimationIteration"), ri(pv, "onAnimationStart"), ri("dblclick", "onDoubleClick"), ri("focusin", "onFocus"), ri("focusout", "onBlur"), ri(vv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), oe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), oe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), oe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), oe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), oe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), oe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));
  function yv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Te(o, r, void 0, n), n.currentTarget = null;
  }
  function Us(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var S = o[h], T = S.instance, z = S.currentTarget;
            if (S = S.listener, T !== d && c.isPropagationStopped())
              break e;
            yv(c, S, z), d = T;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], T = S.instance, z = S.currentTarget, S = S.listener, T !== d && c.isPropagationStopped())
              break e;
            yv(c, S, z), d = T;
          }
      }
    }
    if (ki)
      throw n = E, ki = !1, E = null, n;
  }
  function Et(n, r) {
    var l = r[Pf];
    l === void 0 && (l = r[Pf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (gv(r, n, 2, !1), l.add(o));
  }
  function zi(n, r, l) {
    var o = 0;
    r && (o |= 4), gv(l, n, o, r);
  }
  var ai = "_reactListening" + Math.random().toString(36).slice(2);
  function yu(n) {
    if (!n[ai]) {
      n[ai] = !0, Y.forEach(function(l) {
        l !== "selectionchange" && (Zm.has(l) || zi(l, !1, n), zi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ai] || (r[ai] = !0, zi("selectionchange", !1, r));
    }
  }
  function gv(n, r, l, o) {
    switch (Sf(r)) {
      case 1:
        var c = jp;
        break;
      case 4:
        c = Ts;
        break;
      default:
        c = Rs;
    }
    l = c.bind(null, r, l, n), c = void 0, !lu || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function As(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var h = o.tag;
          if (h === 3 || h === 4) {
            var S = o.stateNode.containerInfo;
            if (S === c || S.nodeType === 8 && S.parentNode === c)
              break;
            if (h === 4)
              for (h = o.return; h !== null; ) {
                var T = h.tag;
                if ((T === 3 || T === 4) && (T = h.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c))
                  return;
                h = h.return;
              }
            for (; S !== null; ) {
              if (h = Zr(S), h === null)
                return;
              if (T = h.tag, T === 5 || T === 6) {
                o = d = h;
                continue e;
              }
              S = S.parentNode;
            }
          }
          o = o.return;
        }
    iu(function() {
      var z = d, j = Rt(l), P = [];
      e: {
        var V = hv.get(n);
        if (V !== void 0) {
          var ee = ws, ce = n;
          switch (n) {
            case "keypress":
              if (cu(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ee = $m;
              break;
            case "focusin":
              ce = "focus", ee = Ni;
              break;
            case "focusout":
              ce = "blur", ee = Ni;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Ni;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = bs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = Yp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = Ym;
              break;
            case Uf:
            case dv:
            case pv:
              ee = Ip;
              break;
            case vv:
              ee = Xp;
              break;
            case "scroll":
              ee = Pp;
              break;
            case "wheel":
              ee = ti;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = Bm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = ks;
          }
          var pe = (r & 4) !== 0, Wt = !pe && n === "scroll", k = pe ? V !== null ? V + "Capture" : null : V;
          pe = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var I = L.stateNode;
            if (L.tag === 5 && I !== null && (L = I, k !== null && (I = pl(x, k), I != null && pe.push(xo(x, I, L)))), Wt)
              break;
            x = x.return;
          }
          0 < pe.length && (V = new ee(V, ce, null, l, j), P.push({ event: V, listeners: pe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (V = n === "mouseover" || n === "pointerover", ee = n === "mouseout" || n === "pointerout", V && l !== pr && (ce = l.relatedTarget || l.fromElement) && (Zr(ce) || ce[ii]))
            break e;
          if ((ee || V) && (V = j.window === j ? j : (V = j.ownerDocument) ? V.defaultView || V.parentWindow : window, ee ? (ce = l.relatedTarget || l.toElement, ee = z, ce = ce ? Zr(ce) : null, ce !== null && (Wt = He(ce), ce !== Wt || ce.tag !== 5 && ce.tag !== 6) && (ce = null)) : (ee = null, ce = z), ee !== ce)) {
            if (pe = bs, I = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (pe = ks, I = "onPointerLeave", k = "onPointerEnter", x = "pointer"), Wt = ee == null ? V : gu(ee), L = ce == null ? V : gu(ce), V = new pe(I, x + "leave", ee, l, j), V.target = Wt, V.relatedTarget = L, I = null, Zr(j) === z && (pe = new pe(k, x + "enter", ce, l, j), pe.target = L, pe.relatedTarget = Wt, I = pe), Wt = I, ee && ce)
              t: {
                for (pe = ee, k = ce, x = 0, L = pe; L; L = Cl(L))
                  x++;
                for (L = 0, I = k; I; I = Cl(I))
                  L++;
                for (; 0 < x - L; )
                  pe = Cl(pe), x--;
                for (; 0 < L - x; )
                  k = Cl(k), L--;
                for (; x--; ) {
                  if (pe === k || k !== null && pe === k.alternate)
                    break t;
                  pe = Cl(pe), k = Cl(k);
                }
                pe = null;
              }
            else
              pe = null;
            ee !== null && Af(P, V, ee, pe, !1), ce !== null && Wt !== null && Af(P, Wt, ce, pe, !0);
          }
        }
        e: {
          if (V = z ? gu(z) : window, ee = V.nodeName && V.nodeName.toLowerCase(), ee === "select" || ee === "input" && V.type === "file")
            var he = nv;
          else if (ev(V))
            if (kf)
              he = lv;
            else {
              he = Wm;
              var fe = Gm;
            }
          else
            (ee = V.nodeName) && ee.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (he = Xm);
          if (he && (he = he(n, z))) {
            tv(P, he, l, j);
            break e;
          }
          fe && fe(n, V, z), n === "focusout" && (fe = V._wrapperState) && fe.controlled && V.type === "number" && ma(V, "number", V.value);
        }
        switch (fe = z ? gu(z) : window, n) {
          case "focusin":
            (ev(fe) || fe.contentEditable === "true") && (wa = fe, Lf = z, Co = null);
            break;
          case "focusout":
            Co = Lf = wa = null;
            break;
          case "mousedown":
            Mf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mf = !1, fv(P, l, j);
            break;
          case "selectionchange":
            if (cv)
              break;
          case "keydown":
          case "keyup":
            fv(P, l, j);
        }
        var ye;
        if (xa)
          e: {
            switch (n) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          pu ? Zp(n, l) && (_e = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Kp && l.locale !== "ko" && (pu || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && pu && (ye = Cf()) : (Ja = j, vo = "value" in Ja ? Ja.value : Ja.textContent, pu = !0)), fe = wo(z, _e), 0 < fe.length && (_e = new Rf(_e, n, null, l, j), P.push({ event: _e, listeners: fe }), ye ? _e.data = ye : (ye = Ls(l), ye !== null && (_e.data = ye)))), (ye = Os ? Im(n, l) : Qm(n, l)) && (z = wo(z, "onBeforeInput"), 0 < z.length && (j = new Rf("onBeforeInput", "beforeinput", null, l, j), P.push({ event: j, listeners: z }), j.data = ye));
      }
      Us(P, r);
    });
  }
  function xo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function wo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = pl(n, l), d != null && o.unshift(xo(n, d, c)), d = pl(n, r), d != null && o.push(xo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Cl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Af(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, T = S.alternate, z = S.stateNode;
      if (T !== null && T === o)
        break;
      S.tag === 5 && z !== null && (S = z, c ? (T = pl(l, d), T != null && h.unshift(xo(l, T, S))) : c || (T = pl(l, d), T != null && h.push(xo(l, T, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Ff = /\r\n?/g, Jm = /\u0000|\uFFFD/g;
  function Hf(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ff, `
`).replace(Jm, "");
  }
  function Fs(n, r, l) {
    if (r = Hf(r), Hf(n) !== r && l)
      throw Error(C(425));
  }
  function Hs() {
  }
  var Vf = null, El = null;
  function Do(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Tl = typeof setTimeout == "function" ? setTimeout : void 0, Sv = typeof clearTimeout == "function" ? clearTimeout : void 0, jf = typeof Promise == "function" ? Promise : void 0, Bf = typeof queueMicrotask == "function" ? queueMicrotask : typeof jf < "u" ? function(n) {
    return jf.resolve(null).then(n).catch(ey);
  } : Tl;
  function ey(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ui(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), fo(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    fo(r);
  }
  function Da(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function bo(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ai = Math.random().toString(36).slice(2), Fa = "__reactFiber$" + Ai, Rl = "__reactProps$" + Ai, ii = "__reactContainer$" + Ai, Pf = "__reactEvents$" + Ai, ty = "__reactListeners$" + Ai, $f = "__reactHandles$" + Ai;
  function Zr(n) {
    var r = n[Fa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ii] || l[Fa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = bo(n); n !== null; ) {
            if (l = n[Fa])
              return l;
            n = bo(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ko(n) {
    return n = n[Fa] || n[ii], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function gu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(C(33));
  }
  function Se(n) {
    return n[Rl] || null;
  }
  var Fi = [], bt = -1;
  function Ae(n) {
    return { current: n };
  }
  function ct(n) {
    0 > bt || (n.current = Fi[bt], Fi[bt] = null, bt--);
  }
  function ft(n, r) {
    bt++, Fi[bt] = n.current, n.current = r;
  }
  var Ha = {}, ke = Ae(Ha), Pt = Ae(!1), hr = Ha;
  function Jr(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ha;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ea() {
    ct(Pt), ct(ke);
  }
  function Hi(n, r, l) {
    if (ke.current !== Ha)
      throw Error(C(168));
    ft(ke, r), ft(Pt, l);
  }
  function _o(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(C(108, Ir(n) || "Unknown", c));
    return ne({}, l, o);
  }
  function Vs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ha, hr = ke.current, ft(ke, n), ft(Pt, Pt.current), !0;
  }
  function Cv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(C(169));
    l ? (n = _o(n, r, hr), o.__reactInternalMemoizedMergedChildContext = n, ct(Pt), ct(ke), ft(ke, n)) : ct(Pt), ft(Pt, l);
  }
  var zr = null, gn = !1, Oo = !1;
  function Yf(n) {
    zr === null ? zr = [n] : zr.push(n);
  }
  function If(n) {
    gn = !0, Yf(n);
  }
  function mr() {
    if (!Oo && zr !== null) {
      Oo = !0;
      var n = 0, r = vt;
      try {
        var l = zr;
        for (vt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        zr = null, gn = !1;
      } catch (c) {
        throw zr !== null && (zr = zr.slice(n + 1)), Nt(Za, mr), c;
      } finally {
        vt = r, Oo = !1;
      }
    }
    return null;
  }
  var Vi = [], yr = 0, xl = null, Su = 0, gr = [], In = 0, ta = null, kn = 1, li = "";
  function Ur(n, r) {
    Vi[yr++] = Su, Vi[yr++] = xl, xl = n, Su = r;
  }
  function Qf(n, r, l) {
    gr[In++] = kn, gr[In++] = li, gr[In++] = ta, ta = n;
    var o = kn;
    n = li;
    var c = 32 - Wr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Wr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, kn = 1 << 32 - Wr(r) + c | l << c | o, li = d + n;
    } else
      kn = 1 << d | l << c | o, li = n;
  }
  function js(n) {
    n.return !== null && (Ur(n, 1), Qf(n, 1, 0));
  }
  function Gf(n) {
    for (; n === xl; )
      xl = Vi[--yr], Vi[yr] = null, Su = Vi[--yr], Vi[yr] = null;
    for (; n === ta; )
      ta = gr[--In], gr[In] = null, li = gr[--In], gr[In] = null, kn = gr[--In], gr[In] = null;
  }
  var Ar = null, Sr = null, kt = !1, na = null;
  function Wf(n, r) {
    var l = oa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Ev(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ar = n, Sr = Da(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ar = n, Sr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ta !== null ? { id: kn, overflow: li } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = oa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ar = n, Sr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Bs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ps(n) {
    if (kt) {
      var r = Sr;
      if (r) {
        var l = r;
        if (!Ev(n, r)) {
          if (Bs(n))
            throw Error(C(418));
          r = Da(l.nextSibling);
          var o = Ar;
          r && Ev(n, r) ? Wf(o, l) : (n.flags = n.flags & -4097 | 2, kt = !1, Ar = n);
        }
      } else {
        if (Bs(n))
          throw Error(C(418));
        n.flags = n.flags & -4097 | 2, kt = !1, Ar = n;
      }
    }
  }
  function Tv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ar = n;
  }
  function $s(n) {
    if (n !== Ar)
      return !1;
    if (!kt)
      return Tv(n), kt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Do(n.type, n.memoizedProps)), r && (r = Sr)) {
      if (Bs(n))
        throw Rv(), Error(C(418));
      for (; r; )
        Wf(n, r), r = Da(r.nextSibling);
    }
    if (Tv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(C(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Sr = Da(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Sr = null;
      }
    } else
      Sr = Ar ? Da(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Rv() {
    for (var n = Sr; n; )
      n = Da(n.nextSibling);
  }
  function Ft() {
    Sr = Ar = null, kt = !1;
  }
  function Xf(n) {
    na === null ? na = [n] : na.push(n);
  }
  var Ys = ot.ReactCurrentBatchConfig;
  function Fr(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Va = Ae(null), Is = null, ji = null, Kf = null;
  function qf() {
    Kf = ji = Is = null;
  }
  function Bi(n) {
    var r = Va.current;
    ct(Va), n._currentValue = r;
  }
  function Sn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function X(n, r) {
    Is = n, Kf = ji = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Jt = !0), n.firstContext = null);
  }
  function Gt(n) {
    var r = n._currentValue;
    if (Kf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, ji === null) {
        if (Is === null)
          throw Error(C(308));
        ji = n, Is.dependencies = { lanes: 0, firstContext: n };
      } else
        ji = ji.next = n;
    return r;
  }
  var _n = null;
  function Zf(n) {
    _n === null ? _n = [n] : _n.push(n);
  }
  function xv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Zf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ui(n, o);
  }
  function ui(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Pi = !1;
  function Jf(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function an(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function oi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function $i(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, (Ge & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ui(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Zf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ui(n, l);
  }
  function Qs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, uo(n, l);
    }
  }
  function ed(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Yi(n, r, l, o) {
    var c = n.updateQueue;
    Pi = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var T = S, z = T.next;
      T.next = null, h === null ? d = z : h.next = z, h = T;
      var j = n.alternate;
      j !== null && (j = j.updateQueue, S = j.lastBaseUpdate, S !== h && (S === null ? j.firstBaseUpdate = z : S.next = z, j.lastBaseUpdate = T));
    }
    if (d !== null) {
      var P = c.baseState;
      h = 0, j = z = T = null, S = d;
      do {
        var V = S.lane, ee = S.eventTime;
        if ((o & V) === V) {
          j !== null && (j = j.next = {
            eventTime: ee,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ce = n, pe = S;
            switch (V = r, ee = l, pe.tag) {
              case 1:
                if (ce = pe.payload, typeof ce == "function") {
                  P = ce.call(ee, P, V);
                  break e;
                }
                P = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = pe.payload, V = typeof ce == "function" ? ce.call(ee, P, V) : ce, V == null)
                  break e;
                P = ne({}, P, V);
                break e;
              case 2:
                Pi = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, V = c.effects, V === null ? c.effects = [S] : V.push(S));
        } else
          ee = { eventTime: ee, lane: V, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, j === null ? (z = j = ee, T = P) : j = j.next = ee, h |= V;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          V = S, S = V.next, V.next = null, c.lastBaseUpdate = V, c.shared.pending = null;
        }
      } while (1);
      if (j === null && (T = P), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = j, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      di |= h, n.lanes = h, n.memoizedState = P;
    }
  }
  function wl(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(C(191, c));
          c.call(o);
        }
      }
  }
  var wv = new b.Component().refs;
  function td(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Gs = { isMounted: function(n) {
    return (n = n._reactInternals) ? He(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Xn(), c = en(n), d = oi(o, c);
    d.payload = r, l != null && (d.callback = l), r = $i(n, d, c), r !== null && (Kn(r, n, c, o), Qs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Xn(), c = en(n), d = oi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = $i(n, d, c), r !== null && (Kn(r, n, c, o), Qs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Xn(), o = en(n), c = oi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = $i(n, c, o), r !== null && (Kn(r, n, o, l), Qs(r, n, o));
  } };
  function Dv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !So(l, o) || !So(c, d) : !0;
  }
  function bv(n, r, l) {
    var o = !1, c = Ha, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Gt(d) : (c = zt(r) ? hr : ke.current, o = r.contextTypes, d = (o = o != null) ? Jr(n, c) : Ha), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Gs, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function kv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Gs.enqueueReplaceState(r, r.state, null);
  }
  function Ws(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = wv, Jf(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Gt(d) : (d = zt(r) ? hr : ke.current, c.context = Jr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (td(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Gs.enqueueReplaceState(c, c.state, null), Yi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Cu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(C(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(C(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          S === wv && (S = c.refs = {}), h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(C(284));
      if (!l._owner)
        throw Error(C(290, n));
    }
    return n;
  }
  function Xs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(C(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function _v(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ov(n) {
    function r(k, x) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [x], k.flags |= 16) : L.push(x);
      }
    }
    function l(k, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(k, x), x = x.sibling;
      return null;
    }
    function o(k, x) {
      for (k = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
      return k;
    }
    function c(k, x) {
      return k = Zi(k, x), k.index = 0, k.sibling = null, k;
    }
    function d(k, x, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < x ? (k.flags |= 2, x) : L) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function h(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function S(k, x, L, I) {
      return x === null || x.tag !== 6 ? (x = Xo(L, k.mode, I), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function T(k, x, L, I) {
      var he = L.type;
      return he === Be ? j(k, x, L.props.children, I, L.key) : x !== null && (x.elementType === he || typeof he == "object" && he !== null && he.$$typeof === Dt && _v(he) === x.type) ? (I = c(x, L.props), I.ref = Cu(k, x, L), I.return = k, I) : (I = bc(L.type, L.key, L.props, null, k.mode, I), I.ref = Cu(k, x, L), I.return = k, I);
    }
    function z(k, x, L, I) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Yl(L, k.mode, I), x.return = k, x) : (x = c(x, L.children || []), x.return = k, x);
    }
    function j(k, x, L, I, he) {
      return x === null || x.tag !== 7 ? (x = $l(L, k.mode, I, he), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function P(k, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = Xo("" + x, k.mode, L), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Pe:
            return L = bc(x.type, x.key, x.props, null, k.mode, L), L.ref = Cu(k, null, x), L.return = k, L;
          case wt:
            return x = Yl(x, k.mode, L), x.return = k, x;
          case Dt:
            var I = x._init;
            return P(k, I(x._payload), L);
        }
        if (qa(x) || Ee(x))
          return x = $l(x, k.mode, L, null), x.return = k, x;
        Xs(k, x);
      }
      return null;
    }
    function V(k, x, L, I) {
      var he = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return he !== null ? null : S(k, x, "" + L, I);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Pe:
            return L.key === he ? T(k, x, L, I) : null;
          case wt:
            return L.key === he ? z(k, x, L, I) : null;
          case Dt:
            return he = L._init, V(
              k,
              x,
              he(L._payload),
              I
            );
        }
        if (qa(L) || Ee(L))
          return he !== null ? null : j(k, x, L, I, null);
        Xs(k, L);
      }
      return null;
    }
    function ee(k, x, L, I, he) {
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return k = k.get(L) || null, S(x, k, "" + I, he);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Pe:
            return k = k.get(I.key === null ? L : I.key) || null, T(x, k, I, he);
          case wt:
            return k = k.get(I.key === null ? L : I.key) || null, z(x, k, I, he);
          case Dt:
            var fe = I._init;
            return ee(k, x, L, fe(I._payload), he);
        }
        if (qa(I) || Ee(I))
          return k = k.get(L) || null, j(x, k, I, he, null);
        Xs(x, I);
      }
      return null;
    }
    function ce(k, x, L, I) {
      for (var he = null, fe = null, ye = x, _e = x = 0, Tn = null; ye !== null && _e < L.length; _e++) {
        ye.index > _e ? (Tn = ye, ye = null) : Tn = ye.sibling;
        var tt = V(k, ye, L[_e], I);
        if (tt === null) {
          ye === null && (ye = Tn);
          break;
        }
        n && ye && tt.alternate === null && r(k, ye), x = d(tt, x, _e), fe === null ? he = tt : fe.sibling = tt, fe = tt, ye = Tn;
      }
      if (_e === L.length)
        return l(k, ye), kt && Ur(k, _e), he;
      if (ye === null) {
        for (; _e < L.length; _e++)
          ye = P(k, L[_e], I), ye !== null && (x = d(ye, x, _e), fe === null ? he = ye : fe.sibling = ye, fe = ye);
        return kt && Ur(k, _e), he;
      }
      for (ye = o(k, ye); _e < L.length; _e++)
        Tn = ee(ye, k, _e, L[_e], I), Tn !== null && (n && Tn.alternate !== null && ye.delete(Tn.key === null ? _e : Tn.key), x = d(Tn, x, _e), fe === null ? he = Tn : fe.sibling = Tn, fe = Tn);
      return n && ye.forEach(function(Ji) {
        return r(k, Ji);
      }), kt && Ur(k, _e), he;
    }
    function pe(k, x, L, I) {
      var he = Ee(L);
      if (typeof he != "function")
        throw Error(C(150));
      if (L = he.call(L), L == null)
        throw Error(C(151));
      for (var fe = he = null, ye = x, _e = x = 0, Tn = null, tt = L.next(); ye !== null && !tt.done; _e++, tt = L.next()) {
        ye.index > _e ? (Tn = ye, ye = null) : Tn = ye.sibling;
        var Ji = V(k, ye, tt.value, I);
        if (Ji === null) {
          ye === null && (ye = Tn);
          break;
        }
        n && ye && Ji.alternate === null && r(k, ye), x = d(Ji, x, _e), fe === null ? he = Ji : fe.sibling = Ji, fe = Ji, ye = Tn;
      }
      if (tt.done)
        return l(
          k,
          ye
        ), kt && Ur(k, _e), he;
      if (ye === null) {
        for (; !tt.done; _e++, tt = L.next())
          tt = P(k, tt.value, I), tt !== null && (x = d(tt, x, _e), fe === null ? he = tt : fe.sibling = tt, fe = tt);
        return kt && Ur(k, _e), he;
      }
      for (ye = o(k, ye); !tt.done; _e++, tt = L.next())
        tt = ee(ye, k, _e, tt.value, I), tt !== null && (n && tt.alternate !== null && ye.delete(tt.key === null ? _e : tt.key), x = d(tt, x, _e), fe === null ? he = tt : fe.sibling = tt, fe = tt);
      return n && ye.forEach(function(Ey) {
        return r(k, Ey);
      }), kt && Ur(k, _e), he;
    }
    function Wt(k, x, L, I) {
      if (typeof L == "object" && L !== null && L.type === Be && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Pe:
            e: {
              for (var he = L.key, fe = x; fe !== null; ) {
                if (fe.key === he) {
                  if (he = L.type, he === Be) {
                    if (fe.tag === 7) {
                      l(k, fe.sibling), x = c(fe, L.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (fe.elementType === he || typeof he == "object" && he !== null && he.$$typeof === Dt && _v(he) === fe.type) {
                    l(k, fe.sibling), x = c(fe, L.props), x.ref = Cu(k, fe, L), x.return = k, k = x;
                    break e;
                  }
                  l(k, fe);
                  break;
                } else
                  r(k, fe);
                fe = fe.sibling;
              }
              L.type === Be ? (x = $l(L.props.children, k.mode, I, L.key), x.return = k, k = x) : (I = bc(L.type, L.key, L.props, null, k.mode, I), I.ref = Cu(k, x, L), I.return = k, k = I);
            }
            return h(k);
          case wt:
            e: {
              for (fe = L.key; x !== null; ) {
                if (x.key === fe)
                  if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                    l(k, x.sibling), x = c(x, L.children || []), x.return = k, k = x;
                    break e;
                  } else {
                    l(k, x);
                    break;
                  }
                else
                  r(k, x);
                x = x.sibling;
              }
              x = Yl(L, k.mode, I), x.return = k, k = x;
            }
            return h(k);
          case Dt:
            return fe = L._init, Wt(k, x, fe(L._payload), I);
        }
        if (qa(L))
          return ce(k, x, L, I);
        if (Ee(L))
          return pe(k, x, L, I);
        Xs(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, L), x.return = k, k = x) : (l(k, x), x = Xo(L, k.mode, I), x.return = k, k = x), h(k)) : l(k, x);
    }
    return Wt;
  }
  var Eu = Ov(!0), Lv = Ov(!1), Lo = {}, ba = Ae(Lo), Mo = Ae(Lo), Tu = Ae(Lo);
  function Dl(n) {
    if (n === Lo)
      throw Error(C(174));
    return n;
  }
  function nd(n, r) {
    switch (ft(Tu, r), ft(Mo, n), ft(ba, Lo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Kt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Kt(r, n);
    }
    ct(ba), ft(ba, r);
  }
  function Ii() {
    ct(ba), ct(Mo), ct(Tu);
  }
  function Re(n) {
    Dl(Tu.current);
    var r = Dl(ba.current), l = Kt(r, n.type);
    r !== l && (ft(Mo, n), ft(ba, l));
  }
  function Ye(n) {
    Mo.current === n && (ct(ba), ct(Mo));
  }
  var we = Ae(0);
  function Ht(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ra = [];
  function Ks() {
    for (var n = 0; n < ra.length; n++)
      ra[n]._workInProgressVersionPrimary = null;
    ra.length = 0;
  }
  var qs = ot.ReactCurrentDispatcher, rd = ot.ReactCurrentBatchConfig, bl = 0, _t = null, F = null, qe = null, De = !1, ja = !1, Hr = 0, kl = 0;
  function Ot() {
    throw Error(C(321));
  }
  function _l(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!qr(n[l], r[l]))
        return !1;
    return !0;
  }
  function Qi(n, r, l, o, c, d) {
    if (bl = d, _t = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, qs.current = n === null || n.memoizedState === null ? ry : ay, n = l(o, c), ja) {
      d = 0;
      do {
        if (ja = !1, Hr = 0, 25 <= d)
          throw Error(C(301));
        d += 1, qe = F = null, r.updateQueue = null, qs.current = id, n = l(o, c);
      } while (ja);
    }
    if (qs.current = pc, r = F !== null && F.next !== null, bl = 0, qe = F = _t = null, De = !1, r)
      throw Error(C(300));
    return n;
  }
  function Ol() {
    var n = Hr !== 0;
    return Hr = 0, n;
  }
  function aa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return qe === null ? _t.memoizedState = qe = n : qe = qe.next = n, qe;
  }
  function Cr() {
    if (F === null) {
      var n = _t.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = F.next;
    var r = qe === null ? _t.memoizedState : qe.next;
    if (r !== null)
      qe = r, F = n;
    else {
      if (n === null)
        throw Error(C(310));
      F = n, n = { memoizedState: F.memoizedState, baseState: F.baseState, baseQueue: F.baseQueue, queue: F.queue, next: null }, qe === null ? _t.memoizedState = qe = n : qe = qe.next = n;
    }
    return qe;
  }
  function Ll(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function No(n) {
    var r = Cr(), l = r.queue;
    if (l === null)
      throw Error(C(311));
    l.lastRenderedReducer = n;
    var o = F, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, T = null, z = d;
      do {
        var j = z.lane;
        if ((bl & j) === j)
          T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var P = {
            lane: j,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (S = T = P, h = o) : T = T.next = P, _t.lanes |= j, di |= j;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? h = o : T.next = S, qr(o, r.memoizedState) || (Jt = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, _t.lanes |= d, di |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function zo(n) {
    var r = Cr(), l = r.queue;
    if (l === null)
      throw Error(C(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      qr(d, r.memoizedState) || (Jt = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Zs() {
  }
  function Js(n, r) {
    var l = _t, o = Cr(), c = r(), d = !qr(o.memoizedState, c);
    if (d && (o.memoizedState = c, Jt = !0), o = o.queue, Uo(nc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || qe !== null && qe.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ml(9, tc.bind(null, l, o, c, r), void 0, null), Vt === null)
        throw Error(C(349));
      (bl & 30) !== 0 || ec(l, r, c);
    }
    return c;
  }
  function ec(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = _t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, _t.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function tc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, rc(r) && ac(n);
  }
  function nc(n, r, l) {
    return l(function() {
      rc(r) && ac(n);
    });
  }
  function rc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !qr(n, l);
    } catch {
      return !0;
    }
  }
  function ac(n) {
    var r = ui(n, 1);
    r !== null && Kn(r, n, 1, -1);
  }
  function ic(n) {
    var r = aa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ll, lastRenderedState: n }, r.queue = n, n = n.dispatch = dc.bind(null, _t, n), [r.memoizedState, n];
  }
  function Ml(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = _t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, _t.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function lc() {
    return Cr().memoizedState;
  }
  function Nl(n, r, l, o) {
    var c = aa();
    _t.flags |= n, c.memoizedState = Ml(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function si(n, r, l, o) {
    var c = Cr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (F !== null) {
      var h = F.memoizedState;
      if (d = h.destroy, o !== null && _l(o, h.deps)) {
        c.memoizedState = Ml(r, l, d, o);
        return;
      }
    }
    _t.flags |= n, c.memoizedState = Ml(1 | r, l, d, o);
  }
  function uc(n, r) {
    return Nl(8390656, 8, n, r);
  }
  function Uo(n, r) {
    return si(2048, 8, n, r);
  }
  function oc(n, r) {
    return si(4, 2, n, r);
  }
  function sc(n, r) {
    return si(4, 4, n, r);
  }
  function ad(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ru(n, r, l) {
    return l = l != null ? l.concat([n]) : null, si(4, 4, ad.bind(null, r, n), l);
  }
  function cc() {
  }
  function xu(n, r) {
    var l = Cr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && _l(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Gi(n, r) {
    var l = Cr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && _l(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Er(n, r, l) {
    return (bl & 21) === 0 ? (n.baseState && (n.baseState = !1, Jt = !0), n.memoizedState = l) : (qr(l, r) || (l = Cs(), _t.lanes |= l, di |= l, n.baseState = !0), r);
  }
  function ny(n, r) {
    var l = vt;
    vt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = rd.transition;
    rd.transition = {};
    try {
      n(!1), r();
    } finally {
      vt = l, rd.transition = o;
    }
  }
  function Tt() {
    return Cr().memoizedState;
  }
  function fc(n, r, l) {
    var o = en(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wu(n))
      Ao(r, l);
    else if (l = xv(n, r, l, o), l !== null) {
      var c = Xn();
      Kn(l, n, o, c), Mv(l, r, o);
    }
  }
  function dc(n, r, l) {
    var o = en(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wu(n))
      Ao(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, qr(S, h)) {
            var T = r.interleaved;
            T === null ? (c.next = c, Zf(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = xv(n, r, c, o), l !== null && (c = Xn(), Kn(l, n, o, c), Mv(l, r, o));
    }
  }
  function wu(n) {
    var r = n.alternate;
    return n === _t || r !== null && r === _t;
  }
  function Ao(n, r) {
    ja = De = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Mv(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, uo(n, l);
    }
  }
  var pc = { readContext: Gt, useCallback: Ot, useContext: Ot, useEffect: Ot, useImperativeHandle: Ot, useInsertionEffect: Ot, useLayoutEffect: Ot, useMemo: Ot, useReducer: Ot, useRef: Ot, useState: Ot, useDebugValue: Ot, useDeferredValue: Ot, useTransition: Ot, useMutableSource: Ot, useSyncExternalStore: Ot, useId: Ot, unstable_isNewReconciler: !1 }, ry = { readContext: Gt, useCallback: function(n, r) {
    return aa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Gt, useEffect: uc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Nl(
      4194308,
      4,
      ad.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Nl(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Nl(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = aa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = aa();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = fc.bind(null, _t, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = aa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ic, useDebugValue: cc, useDeferredValue: function(n) {
    return aa().memoizedState = n;
  }, useTransition: function() {
    var n = ic(!1), r = n[0];
    return n = ny.bind(null, n[1]), aa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = _t, c = aa();
    if (kt) {
      if (l === void 0)
        throw Error(C(407));
      l = l();
    } else {
      if (l = r(), Vt === null)
        throw Error(C(349));
      (bl & 30) !== 0 || ec(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, uc(nc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ml(9, tc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = aa(), r = Vt.identifierPrefix;
    if (kt) {
      var l = li, o = kn;
      l = (o & ~(1 << 32 - Wr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Hr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = kl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ay = {
    readContext: Gt,
    useCallback: xu,
    useContext: Gt,
    useEffect: Uo,
    useImperativeHandle: Ru,
    useInsertionEffect: oc,
    useLayoutEffect: sc,
    useMemo: Gi,
    useReducer: No,
    useRef: lc,
    useState: function() {
      return No(Ll);
    },
    useDebugValue: cc,
    useDeferredValue: function(n) {
      var r = Cr();
      return Er(r, F.memoizedState, n);
    },
    useTransition: function() {
      var n = No(Ll)[0], r = Cr().memoizedState;
      return [n, r];
    },
    useMutableSource: Zs,
    useSyncExternalStore: Js,
    useId: Tt,
    unstable_isNewReconciler: !1
  }, id = { readContext: Gt, useCallback: xu, useContext: Gt, useEffect: Uo, useImperativeHandle: Ru, useInsertionEffect: oc, useLayoutEffect: sc, useMemo: Gi, useReducer: zo, useRef: lc, useState: function() {
    return zo(Ll);
  }, useDebugValue: cc, useDeferredValue: function(n) {
    var r = Cr();
    return F === null ? r.memoizedState = n : Er(r, F.memoizedState, n);
  }, useTransition: function() {
    var n = zo(Ll)[0], r = Cr().memoizedState;
    return [n, r];
  }, useMutableSource: Zs, useSyncExternalStore: Js, useId: Tt, unstable_isNewReconciler: !1 };
  function Du(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ma(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Fo(n, r, l) {
    return { value: n, source: null, stack: l != null ? l : null, digest: r != null ? r : null };
  }
  function vc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var iy = typeof WeakMap == "function" ? WeakMap : Map;
  function Nv(n, r, l) {
    l = oi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Ec || (Ec = !0, Hl = o), vc(n, r);
    }, l;
  }
  function Ho(n, r, l) {
    l = oi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        vc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      vc(n, r), typeof o != "function" && ($a === null ? $a = /* @__PURE__ */ new Set([this]) : $a.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function zv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new iy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = dy.bind(null, n, r, l), r.then(n, n));
  }
  function ld(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function ud(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = oi(-1, 1), r.tag = 2, $i(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var ly = ot.ReactCurrentOwner, Jt = !1;
  function ln(n, r, l, o) {
    r.child = n === null ? Lv(r, null, l, o) : Eu(r, n.child, l, o);
  }
  function Wi(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return X(r, c), o = Qi(n, r, l, o, d, c), l = Ol(), n !== null && !Jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (kt && l && js(r), r.flags |= 1, ln(n, r, o, c), r.child);
  }
  function hc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Dd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Tr(n, r, d, o, c)) : (n = bc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : So, l(h, o) && n.ref === r.ref)
        return On(n, r, c);
    }
    return r.flags |= 1, n = Zi(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Tr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (So(d, o) && n.ref === r.ref)
        if (Jt = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          (n.flags & 131072) !== 0 && (Jt = !0);
        else
          return r.lanes = n.lanes, On(n, r, c);
    }
    return bu(n, r, l, o, c);
  }
  function zl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if ((r.mode & 1) === 0)
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ft(Nu, Vr), Vr |= l;
      else {
        if ((l & 1073741824) === 0)
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, ft(Nu, Vr), Vr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, ft(Nu, Vr), Vr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, ft(Nu, Vr), Vr |= o;
    return ln(n, r, c, l), r.child;
  }
  function Fe(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function bu(n, r, l, o, c) {
    var d = zt(l) ? hr : ke.current;
    return d = Jr(r, d), X(r, c), l = Qi(n, r, l, o, d, c), o = Ol(), n !== null && !Jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (kt && o && js(r), r.flags |= 1, ln(n, r, l, c), r.child);
  }
  function od(n, r, l, o, c) {
    if (zt(l)) {
      var d = !0;
      Vs(r);
    } else
      d = !1;
    if (X(r, c), r.stateNode === null)
      Qn(n, r), bv(r, l, o), Ws(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var T = h.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Gt(z) : (z = zt(l) ? hr : ke.current, z = Jr(r, z));
      var j = l.getDerivedStateFromProps, P = typeof j == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      P || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || T !== z) && kv(r, h, o, z), Pi = !1;
      var V = r.memoizedState;
      h.state = V, Yi(r, o, h, c), T = r.memoizedState, S !== o || V !== T || Pt.current || Pi ? (typeof j == "function" && (td(r, l, j, o), T = r.memoizedState), (S = Pi || Dv(r, l, S, o, V, T, z)) ? (P || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), h.props = o, h.state = T, h.context = z, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, an(n, r), S = r.memoizedProps, z = r.type === r.elementType ? S : Fr(r.type, S), h.props = z, P = r.pendingProps, V = h.context, T = l.contextType, typeof T == "object" && T !== null ? T = Gt(T) : (T = zt(l) ? hr : ke.current, T = Jr(r, T));
      var ee = l.getDerivedStateFromProps;
      (j = typeof ee == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== P || V !== T) && kv(r, h, o, T), Pi = !1, V = r.memoizedState, h.state = V, Yi(r, o, h, c);
      var ce = r.memoizedState;
      S !== P || V !== ce || Pt.current || Pi ? (typeof ee == "function" && (td(r, l, ee, o), ce = r.memoizedState), (z = Pi || Dv(r, l, z, o, V, ce, T) || !1) ? (j || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, ce, T), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, ce, T)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ce), h.props = o, h.state = ce, h.context = T, o = z) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Uv(n, r, l, o, d, c);
  }
  function Uv(n, r, l, o, c, d) {
    Fe(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && Cv(r, l, !1), On(n, r, d);
    o = r.stateNode, ly.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = Eu(r, n.child, null, d), r.child = Eu(r, null, S, d)) : ln(n, r, S, d), r.memoizedState = o.state, c && Cv(r, l, !0), r.child;
  }
  function Av(n) {
    var r = n.stateNode;
    r.pendingContext ? Hi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hi(n, r.context, !1), nd(n, r.containerInfo);
  }
  function mc(n, r, l, o, c) {
    return Ft(), Xf(c), r.flags |= 256, ln(n, r, l, o), r.child;
  }
  var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
  function sd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function cd(n, r, l) {
    var o = r.pendingProps, c = we.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), ft(we, c & 1), n === null)
      return Ps(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Wo(h, o, 0, null), n = $l(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = sd(l), r.memoizedState = Ul, n) : fd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return uy(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return (h & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Zi(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Zi(S, d) : (d = $l(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? sd(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Ul, o;
    }
    return d = n.child, n = d.sibling, o = Zi(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function fd(n, r) {
    return r = Wo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ku(n, r, l, o) {
    return o !== null && Xf(o), Eu(r, n.child, null, l), n = fd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function uy(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Fo(Error(C(422))), ku(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Wo({ mode: "visible", children: o.children }, c, 0, null), d = $l(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && Eu(r, n.child, null, h), r.child.memoizedState = sd(h), r.memoizedState = Ul, d);
    if ((r.mode & 1) === 0)
      return ku(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(C(419)), o = Fo(d, o, void 0), ku(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Jt || S) {
      if (o = Vt, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | h)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ui(n, c), Kn(o, n, c, -1));
      }
      return Rd(), o = Fo(Error(C(421))), ku(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = py.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Sr = Da(c.nextSibling), Ar = r, kt = !0, na = null, n !== null && (gr[In++] = kn, gr[In++] = li, gr[In++] = ta, kn = n.id, li = n.overflow, ta = r), r = fd(r, o.children), r.flags |= 4096, r);
  }
  function dd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Sn(n.return, r, l);
  }
  function yc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function pd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ln(n, r, o.children, l), o = we.current, (o & 2) !== 0)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && dd(n, l, r);
            else if (n.tag === 19)
              dd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (ft(we, o), (r.mode & 1) === 0)
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Ht(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), yc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Ht(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          yc(r, !0, l, null, d);
          break;
        case "together":
          yc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Qn(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function On(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), di |= r.lanes, (l & r.childLanes) === 0)
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(C(153));
    if (r.child !== null) {
      for (n = r.child, l = Zi(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Zi(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ci(n, r, l) {
    switch (r.tag) {
      case 3:
        Av(r), Ft();
        break;
      case 5:
        Re(r);
        break;
      case 1:
        zt(r.type) && Vs(r);
        break;
      case 4:
        nd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        ft(Va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (ft(we, we.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? cd(n, r, l) : (ft(we, we.current & 1), n = On(n, r, l), n !== null ? n.sibling : null);
        ft(we, we.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o)
            return pd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ft(we, we.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, zl(n, r, l);
    }
    return On(n, r, l);
  }
  var Vo, Al, ia, un;
  Vo = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Al = function() {
  }, ia = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Dl(ba.current);
      var d = null;
      switch (l) {
        case "input":
          c = Bn(n, c), o = Bn(n, o), d = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), o = ne({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ya(n, c), o = ya(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Hs);
      }
      vn(l, o);
      var h;
      l = null;
      for (z in c)
        if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null)
          if (z === "style") {
            var S = c[z];
            for (h in S)
              S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (ue.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (S = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== S && (T != null || S != null))
          if (z === "style")
            if (S) {
              for (h in S)
                !S.hasOwnProperty(h) || T && T.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in T)
                T.hasOwnProperty(h) && S[h] !== T[h] && (l || (l = {}), l[h] = T[h]);
            } else
              l || (d || (d = []), d.push(
                z,
                l
              )), l = T;
          else
            z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, S = S ? S.__html : void 0, T != null && S !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (ue.hasOwnProperty(z) ? (T != null && z === "onScroll" && Et("scroll", n), d || S === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, un = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function jo(n, r) {
    if (!kt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Gn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function oy(n, r, l) {
    var o = r.pendingProps;
    switch (Gf(r), r.tag) {
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
        return Gn(r), null;
      case 1:
        return zt(r.type) && ea(), Gn(r), null;
      case 3:
        return o = r.stateNode, Ii(), ct(Pt), ct(ke), Ks(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && ($s(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, na !== null && (Go(na), na = null))), Al(n, r), Gn(r), null;
      case 5:
        Ye(r);
        var c = Dl(Tu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          ia(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(C(166));
            return Gn(r), null;
          }
          if (n = Dl(ba.current), $s(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Fa] = r, o[Rl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Et("cancel", o), Et("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Et("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ro.length; c++)
                  Et(Ro[c], o);
                break;
              case "source":
                Et("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Et(
                  "error",
                  o
                ), Et("load", o);
                break;
              case "details":
                Et("toggle", o);
                break;
              case "input":
                bn(o, d), Et("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Et("invalid", o);
                break;
              case "textarea":
                kr(o, d), Et("invalid", o);
            }
            vn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && Fs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && Fs(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : ue.hasOwnProperty(h) && S != null && h === "onScroll" && Et("scroll", o);
              }
            switch (l) {
              case "input":
                dr(o), Gr(o, d, !0);
                break;
              case "textarea":
                dr(o), _r(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Hs);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ga(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Fa] = r, n[Rl] = o, Vo(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Qt(l, o), l) {
                case "dialog":
                  Et("cancel", n), Et("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Et("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ro.length; c++)
                    Et(Ro[c], n);
                  c = o;
                  break;
                case "source":
                  Et("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Et(
                    "error",
                    n
                  ), Et("load", n), c = o;
                  break;
                case "details":
                  Et("toggle", n), c = o;
                  break;
                case "input":
                  bn(n, o), c = Bn(n, o), Et("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ne({}, o, { value: void 0 }), Et("invalid", n);
                  break;
                case "textarea":
                  kr(n, o), c = ya(n, o), Et("invalid", n);
                  break;
                default:
                  c = o;
              }
              vn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var T = S[d];
                  d === "style" ? pt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Di(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && Sa(n, T) : typeof T == "number" && Sa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ue.hasOwnProperty(d) ? T != null && d === "onScroll" && Et("scroll", n) : T != null && Ve(n, d, T, h));
                }
              switch (l) {
                case "input":
                  dr(n), Gr(n, o, !1);
                  break;
                case "textarea":
                  dr(n), _r(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + jn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? za(n, !!o.multiple, d, !1) : o.defaultValue != null && za(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Hs);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Gn(r), null;
      case 6:
        if (n && r.stateNode != null)
          un(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(C(166));
          if (l = Dl(Tu.current), Dl(ba.current), $s(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Fa] = r, (d = o.nodeValue !== l) && (n = Ar, n !== null))
              switch (n.tag) {
                case 3:
                  Fs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Fs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Fa] = r, r.stateNode = o;
        }
        return Gn(r), null;
      case 13:
        if (ct(we), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (kt && Sr !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            Rv(), Ft(), r.flags |= 98560, d = !1;
          else if (d = $s(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(C(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(C(317));
              d[Fa] = r;
            } else
              Ft(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Gn(r), d = !1;
          } else
            na !== null && (Go(na), na = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (we.current & 1) !== 0 ? sn === 0 && (sn = 3) : Rd())), r.updateQueue !== null && (r.flags |= 4), Gn(r), null);
      case 4:
        return Ii(), Al(n, r), n === null && yu(r.stateNode.containerInfo), Gn(r), null;
      case 10:
        return Bi(r.type._context), Gn(r), null;
      case 17:
        return zt(r.type) && ea(), Gn(r), null;
      case 19:
        if (ct(we), d = r.memoizedState, d === null)
          return Gn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            jo(d, !1);
          else {
            if (sn !== 0 || n !== null && (n.flags & 128) !== 0)
              for (n = r.child; n !== null; ) {
                if (h = Ht(n), h !== null) {
                  for (r.flags |= 128, jo(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return ft(we, we.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && rt() > Uu && (r.flags |= 128, o = !0, jo(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Ht(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), jo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !kt)
                return Gn(r), null;
            } else
              2 * rt() - d.renderingStartTime > Uu && l !== 1073741824 && (r.flags |= 128, o = !0, jo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = rt(), r.sibling = null, l = we.current, ft(we, o ? l & 1 | 2 : l & 1), r) : (Gn(r), null);
      case 22:
      case 23:
        return Td(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (Vr & 1073741824) !== 0 && (Gn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Gn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(C(156, r.tag));
  }
  function vd(n, r) {
    switch (Gf(r), r.tag) {
      case 1:
        return zt(r.type) && ea(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ii(), ct(Pt), ct(ke), Ks(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ye(r), null;
      case 13:
        if (ct(we), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(C(340));
          Ft();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return ct(we), null;
      case 4:
        return Ii(), null;
      case 10:
        return Bi(r.type._context), null;
      case 22:
      case 23:
        return Td(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bo = !1, on = !1, Fv = typeof WeakSet == "function" ? WeakSet : Set, le = null;
  function _u(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Yt(n, r, o);
        }
      else
        l.current = null;
  }
  function Po(n, r, l) {
    try {
      l();
    } catch (o) {
      Yt(n, r, o);
    }
  }
  var Hv = !1;
  function Vv(n, r) {
    if (Vf = ml, n = Ms(), ni(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var h = 0, S = -1, T = -1, z = 0, j = 0, P = n, V = null;
            t:
              for (; ; ) {
                for (var ee; P !== l || c !== 0 && P.nodeType !== 3 || (S = h + c), P !== d || o !== 0 && P.nodeType !== 3 || (T = h + o), P.nodeType === 3 && (h += P.nodeValue.length), (ee = P.firstChild) !== null; )
                  V = P, P = ee;
                for (; ; ) {
                  if (P === n)
                    break t;
                  if (V === l && ++z === c && (S = h), V === d && ++j === o && (T = h), (ee = P.nextSibling) !== null)
                    break;
                  P = V, V = P.parentNode;
                }
                P = ee;
              }
            l = S === -1 || T === -1 ? null : { start: S, end: T };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (El = { focusedElem: n, selectionRange: l }, ml = !1, le = r; le !== null; )
      if (r = le, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, le = n;
      else
        for (; le !== null; ) {
          r = le;
          try {
            var ce = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ce !== null) {
                    var pe = ce.memoizedProps, Wt = ce.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? pe : Fr(r.type, pe), Wt);
                    k.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(C(163));
              }
          } catch (I) {
            Yt(r, r.return, I);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, le = n;
            break;
          }
          le = r.return;
        }
    return ce = Hv, Hv = !1, ce;
  }
  function $o(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Po(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Yo(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function hd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function md(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, md(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Fa], delete r[Rl], delete r[Pf], delete r[ty], delete r[$f])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function jv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function gc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || jv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Ou(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Hs));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ou(n, r, l), n = n.sibling; n !== null; )
        Ou(n, r, l), n = n.sibling;
  }
  function Ba(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ba(n, r, l), n = n.sibling; n !== null; )
        Ba(n, r, l), n = n.sibling;
  }
  var Ut = null, Cn = !1;
  function la(n, r, l) {
    for (l = l.child; l !== null; )
      Lu(n, r, l), l = l.sibling;
  }
  function Lu(n, r, l) {
    if (Ea && typeof Ea.onCommitFiberUnmount == "function")
      try {
        Ea.onCommitFiberUnmount(lo, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        on || _u(l, r);
      case 6:
        var o = Ut, c = Cn;
        Ut = null, la(n, r, l), Ut = o, Cn = c, Ut !== null && (Cn ? (n = Ut, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Ut.removeChild(l.stateNode));
        break;
      case 18:
        Ut !== null && (Cn ? (n = Ut, l = l.stateNode, n.nodeType === 8 ? Ui(n.parentNode, l) : n.nodeType === 1 && Ui(n, l), fo(n)) : Ui(Ut, l.stateNode));
        break;
      case 4:
        o = Ut, c = Cn, Ut = l.stateNode.containerInfo, Cn = !0, la(n, r, l), Ut = o, Cn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!on && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Po(l, r, h), c = c.next;
          } while (c !== o);
        }
        la(n, r, l);
        break;
      case 1:
        if (!on && (_u(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (S) {
            Yt(l, r, S);
          }
        la(n, r, l);
        break;
      case 21:
        la(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (on = (o = on) || l.memoizedState !== null, la(n, r, l), on = o) : la(n, r, l);
        break;
      default:
        la(n, r, l);
    }
  }
  function fi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Fv()), r.forEach(function(o) {
        var c = vy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ka(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, h = r, S = h;
          e:
            for (; S !== null; ) {
              switch (S.tag) {
                case 5:
                  Ut = S.stateNode, Cn = !1;
                  break e;
                case 3:
                  Ut = S.stateNode.containerInfo, Cn = !0;
                  break e;
                case 4:
                  Ut = S.stateNode.containerInfo, Cn = !0;
                  break e;
              }
              S = S.return;
            }
          if (Ut === null)
            throw Error(C(160));
          Lu(d, h, c), Ut = null, Cn = !1;
          var T = c.alternate;
          T !== null && (T.return = null), c.return = null;
        } catch (z) {
          Yt(c, r, z);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Bv(r, n), r = r.sibling;
  }
  function Bv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ka(r, n), Pa(n), o & 4) {
          try {
            $o(3, n, n.return), Yo(3, n);
          } catch (pe) {
            Yt(n, n.return, pe);
          }
          try {
            $o(5, n, n.return);
          } catch (pe) {
            Yt(n, n.return, pe);
          }
        }
        break;
      case 1:
        ka(r, n), Pa(n), o & 512 && l !== null && _u(l, l.return);
        break;
      case 5:
        if (ka(r, n), Pa(n), o & 512 && l !== null && _u(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Sa(c, "");
          } catch (pe) {
            Yt(n, n.return, pe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && Pn(c, d), Qt(S, h);
              var z = Qt(S, d);
              for (h = 0; h < T.length; h += 2) {
                var j = T[h], P = T[h + 1];
                j === "style" ? pt(c, P) : j === "dangerouslySetInnerHTML" ? Di(c, P) : j === "children" ? Sa(c, P) : Ve(c, j, P, z);
              }
              switch (S) {
                case "input":
                  $n(c, d);
                  break;
                case "textarea":
                  Ua(c, d);
                  break;
                case "select":
                  var V = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ee = d.value;
                  ee != null ? za(c, !!d.multiple, ee, !1) : V !== !!d.multiple && (d.defaultValue != null ? za(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : za(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Rl] = d;
            } catch (pe) {
              Yt(n, n.return, pe);
            }
        }
        break;
      case 6:
        if (ka(r, n), Pa(n), o & 4) {
          if (n.stateNode === null)
            throw Error(C(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (pe) {
            Yt(n, n.return, pe);
          }
        }
        break;
      case 3:
        if (ka(r, n), Pa(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            fo(r.containerInfo);
          } catch (pe) {
            Yt(n, n.return, pe);
          }
        break;
      case 4:
        ka(r, n), Pa(n);
        break;
      case 13:
        ka(r, n), Pa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Sd = rt())), o & 4 && fi(n);
        break;
      case 22:
        if (j = l !== null && l.memoizedState !== null, n.mode & 1 ? (on = (z = on) || j, ka(r, n), on = z) : ka(r, n), Pa(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !j && (n.mode & 1) !== 0)
            for (le = n, j = n.child; j !== null; ) {
              for (P = le = j; le !== null; ) {
                switch (V = le, ee = V.child, V.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    $o(4, V, V.return);
                    break;
                  case 1:
                    _u(V, V.return);
                    var ce = V.stateNode;
                    if (typeof ce.componentWillUnmount == "function") {
                      o = V, l = V.return;
                      try {
                        r = o, ce.props = r.memoizedProps, ce.state = r.memoizedState, ce.componentWillUnmount();
                      } catch (pe) {
                        Yt(o, l, pe);
                      }
                    }
                    break;
                  case 5:
                    _u(V, V.return);
                    break;
                  case 22:
                    if (V.memoizedState !== null) {
                      yd(P);
                      continue;
                    }
                }
                ee !== null ? (ee.return = V, le = ee) : yd(P);
              }
              j = j.sibling;
            }
          e:
            for (j = null, P = n; ; ) {
              if (P.tag === 5) {
                if (j === null) {
                  j = P;
                  try {
                    c = P.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = P.stateNode, T = P.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null, S.style.display = $e("display", h));
                  } catch (pe) {
                    Yt(n, n.return, pe);
                  }
                }
              } else if (P.tag === 6) {
                if (j === null)
                  try {
                    P.stateNode.nodeValue = z ? "" : P.memoizedProps;
                  } catch (pe) {
                    Yt(n, n.return, pe);
                  }
              } else if ((P.tag !== 22 && P.tag !== 23 || P.memoizedState === null || P === n) && P.child !== null) {
                P.child.return = P, P = P.child;
                continue;
              }
              if (P === n)
                break e;
              for (; P.sibling === null; ) {
                if (P.return === null || P.return === n)
                  break e;
                j === P && (j = null), P = P.return;
              }
              j === P && (j = null), P.sibling.return = P.return, P = P.sibling;
            }
        }
        break;
      case 19:
        ka(r, n), Pa(n), o & 4 && fi(n);
        break;
      case 21:
        break;
      default:
        ka(
          r,
          n
        ), Pa(n);
    }
  }
  function Pa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (jv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(C(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Sa(c, ""), o.flags &= -33);
            var d = gc(n);
            Ba(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = gc(n);
            Ou(n, S, h);
            break;
          default:
            throw Error(C(161));
        }
      } catch (T) {
        Yt(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Pv(n, r, l) {
    le = n, Mu(n);
  }
  function Mu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; le !== null; ) {
      var c = le, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Bo;
        if (!h) {
          var S = c.alternate, T = S !== null && S.memoizedState !== null || on;
          S = Bo;
          var z = on;
          if (Bo = h, (on = T) && !z)
            for (le = c; le !== null; )
              h = le, T = h.child, h.tag === 22 && h.memoizedState !== null ? Yv(c) : T !== null ? (T.return = h, le = T) : Yv(c);
          for (; d !== null; )
            le = d, Mu(d), d = d.sibling;
          le = c, Bo = S, on = z;
        }
        $v(n);
      } else
        (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, le = d) : $v(n);
    }
  }
  function $v(n) {
    for (; le !== null; ) {
      var r = le;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                on || Yo(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !on)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Fr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && wl(r, d, o);
                break;
              case 3:
                var h = r.updateQueue;
                if (h !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  wl(r, h, l);
                }
                break;
              case 5:
                var S = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = S;
                  var T = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && l.focus();
                      break;
                    case "img":
                      T.src && (l.src = T.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var z = r.alternate;
                  if (z !== null) {
                    var j = z.memoizedState;
                    if (j !== null) {
                      var P = j.dehydrated;
                      P !== null && fo(P);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(C(163));
            }
          on || r.flags & 512 && hd(r);
        } catch (V) {
          Yt(r, r.return, V);
        }
      }
      if (r === n) {
        le = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, le = l;
        break;
      }
      le = r.return;
    }
  }
  function yd(n) {
    for (; le !== null; ) {
      var r = le;
      if (r === n) {
        le = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, le = l;
        break;
      }
      le = r.return;
    }
  }
  function Yv(n) {
    for (; le !== null; ) {
      var r = le;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Yo(4, r);
            } catch (T) {
              Yt(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Yt(r, c, T);
              }
            }
            var d = r.return;
            try {
              hd(r);
            } catch (T) {
              Yt(r, d, T);
            }
            break;
          case 5:
            var h = r.return;
            try {
              hd(r);
            } catch (T) {
              Yt(r, h, T);
            }
        }
      } catch (T) {
        Yt(r, r.return, T);
      }
      if (r === n) {
        le = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, le = S;
        break;
      }
      le = r.return;
    }
  }
  var Sc = Math.ceil, Io = ot.ReactCurrentDispatcher, gd = ot.ReactCurrentOwner, Wn = ot.ReactCurrentBatchConfig, Ge = 0, Vt = null, $t = null, En = 0, Vr = 0, Nu = Ae(0), sn = 0, Qo = null, di = 0, Cc = 0, zu = 0, Fl = null, tr = null, Sd = 0, Uu = 1 / 0, pi = null, Ec = !1, Hl = null, $a = null, Xi = !1, Ki = null, Tc = 0, Au = 0, Rc = null, Vl = -1, jl = 0;
  function Xn() {
    return (Ge & 6) !== 0 ? rt() : Vl !== -1 ? Vl : Vl = rt();
  }
  function en(n) {
    return (n.mode & 1) === 0 ? 1 : (Ge & 2) !== 0 && En !== 0 ? En & -En : Ys.transition !== null ? (jl === 0 && (jl = Cs()), jl) : (n = vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Sf(n.type)), n);
  }
  function Kn(n, r, l, o) {
    if (50 < Au)
      throw Au = 0, Rc = null, Error(C(185));
    hl(n, l, o), ((Ge & 2) === 0 || n !== Vt) && (n === Vt && ((Ge & 2) === 0 && (Cc |= l), sn === 4 && ua(n, En)), qn(n, o), l === 1 && Ge === 0 && (r.mode & 1) === 0 && (Uu = rt() + 500, gn && mr()));
  }
  function qn(n, r) {
    var l = n.callbackNode;
    Ss(n, r);
    var o = Ta(n, n === Vt ? En : 0);
    if (o === 0)
      l !== null && er(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && er(l), r === 1)
        n.tag === 0 ? If(Iv.bind(null, n)) : Yf(Iv.bind(null, n)), Bf(function() {
          (Ge & 6) === 0 && mr();
        }), l = null;
      else {
        switch (mf(o)) {
          case 1:
            l = Za;
            break;
          case 4:
            l = Qe;
            break;
          case 16:
            l = Oi;
            break;
          case 536870912:
            l = df;
            break;
          default:
            l = Oi;
        }
        l = wd(l, Fu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Fu(n, r) {
    if (Vl = -1, jl = 0, (Ge & 6) !== 0)
      throw Error(C(327));
    var l = n.callbackNode;
    if (Vu() && n.callbackNode !== l)
      return null;
    var o = Ta(n, n === Vt ? En : 0);
    if (o === 0)
      return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r)
      r = wc(n, o);
    else {
      r = o;
      var c = Ge;
      Ge |= 2;
      var d = xc();
      (Vt !== n || En !== r) && (pi = null, Uu = rt() + 500, Bl(n, r));
      do
        try {
          cy();
          break;
        } catch (S) {
          Qv(n, S);
        }
      while (1);
      qf(), Io.current = d, Ge = c, $t !== null ? r = 0 : (Vt = null, En = 0, r = sn);
    }
    if (r !== 0) {
      if (r === 2 && (c = vf(n), c !== 0 && (o = c, r = Cd(n, c))), r === 1)
        throw l = Qo, Bl(n, 0), ua(n, o), qn(n, rt()), l;
      if (r === 6)
        ua(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !Ed(c) && (r = wc(n, o), r === 2 && (d = vf(n), d !== 0 && (o = d, r = Cd(n, d))), r === 1))
          throw l = Qo, Bl(n, 0), ua(n, o), qn(n, rt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(C(345));
          case 2:
            Pl(n, tr, pi);
            break;
          case 3:
            if (ua(n, o), (o & 130023424) === o && (r = Sd + 500 - rt(), 10 < r)) {
              if (Ta(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Xn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Tl(Pl.bind(null, n, tr, pi), r);
              break;
            }
            Pl(n, tr, pi);
            break;
          case 4:
            if (ua(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Wr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = rt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Sc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Tl(Pl.bind(null, n, tr, pi), o);
              break;
            }
            Pl(n, tr, pi);
            break;
          case 5:
            Pl(n, tr, pi);
            break;
          default:
            throw Error(C(329));
        }
      }
    }
    return qn(n, rt()), n.callbackNode === l ? Fu.bind(null, n) : null;
  }
  function Cd(n, r) {
    var l = Fl;
    return n.current.memoizedState.isDehydrated && (Bl(n, r).flags |= 256), n = wc(n, r), n !== 2 && (r = tr, tr = l, r !== null && Go(r)), n;
  }
  function Go(n) {
    tr === null ? tr = n : tr.push.apply(tr, n);
  }
  function Ed(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!qr(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ua(n, r) {
    for (r &= ~zu, r &= ~Cc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Wr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Iv(n) {
    if ((Ge & 6) !== 0)
      throw Error(C(327));
    Vu();
    var r = Ta(n, 0);
    if ((r & 1) === 0)
      return qn(n, rt()), null;
    var l = wc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = vf(n);
      o !== 0 && (r = o, l = Cd(n, o));
    }
    if (l === 1)
      throw l = Qo, Bl(n, 0), ua(n, r), qn(n, rt()), l;
    if (l === 6)
      throw Error(C(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Pl(n, tr, pi), qn(n, rt()), null;
  }
  function Hu(n, r) {
    var l = Ge;
    Ge |= 1;
    try {
      return n(r);
    } finally {
      Ge = l, Ge === 0 && (Uu = rt() + 500, gn && mr());
    }
  }
  function qi(n) {
    Ki !== null && Ki.tag === 0 && (Ge & 6) === 0 && Vu();
    var r = Ge;
    Ge |= 1;
    var l = Wn.transition, o = vt;
    try {
      if (Wn.transition = null, vt = 1, n)
        return n();
    } finally {
      vt = o, Wn.transition = l, Ge = r, (Ge & 6) === 0 && mr();
    }
  }
  function Td() {
    Vr = Nu.current, ct(Nu);
  }
  function Bl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Sv(l)), $t !== null)
      for (l = $t.return; l !== null; ) {
        var o = l;
        switch (Gf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ea();
            break;
          case 3:
            Ii(), ct(Pt), ct(ke), Ks();
            break;
          case 5:
            Ye(o);
            break;
          case 4:
            Ii();
            break;
          case 13:
            ct(we);
            break;
          case 19:
            ct(we);
            break;
          case 10:
            Bi(o.type._context);
            break;
          case 22:
          case 23:
            Td();
        }
        l = l.return;
      }
    if (Vt = n, $t = n = Zi(n.current, null), En = Vr = r, sn = 0, Qo = null, zu = Cc = di = 0, tr = Fl = null, _n !== null) {
      for (r = 0; r < _n.length; r++)
        if (l = _n[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      _n = null;
    }
    return n;
  }
  function Qv(n, r) {
    do {
      var l = $t;
      try {
        if (qf(), qs.current = pc, De) {
          for (var o = _t.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          De = !1;
        }
        if (bl = 0, qe = F = _t = null, ja = !1, Hr = 0, gd.current = null, l === null || l.return === null) {
          sn = 1, Qo = r, $t = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, T = r;
          if (r = En, S.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, j = S, P = j.tag;
            if ((j.mode & 1) === 0 && (P === 0 || P === 11 || P === 15)) {
              var V = j.alternate;
              V ? (j.updateQueue = V.updateQueue, j.memoizedState = V.memoizedState, j.lanes = V.lanes) : (j.updateQueue = null, j.memoizedState = null);
            }
            var ee = ld(h);
            if (ee !== null) {
              ee.flags &= -257, ud(ee, h, S, d, r), ee.mode & 1 && zv(d, z, r), r = ee, T = z;
              var ce = r.updateQueue;
              if (ce === null) {
                var pe = /* @__PURE__ */ new Set();
                pe.add(T), r.updateQueue = pe;
              } else
                ce.add(T);
              break e;
            } else {
              if ((r & 1) === 0) {
                zv(d, z, r), Rd();
                break e;
              }
              T = Error(C(426));
            }
          } else if (kt && S.mode & 1) {
            var Wt = ld(h);
            if (Wt !== null) {
              (Wt.flags & 65536) === 0 && (Wt.flags |= 256), ud(Wt, h, S, d, r), Xf(Du(T, S));
              break e;
            }
          }
          d = T = Du(T, S), sn !== 4 && (sn = 2), Fl === null ? Fl = [d] : Fl.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Nv(d, T, r);
                ed(d, k);
                break e;
              case 1:
                S = T;
                var x = d.type, L = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && ($a === null || !$a.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var I = Ho(d, S, r);
                  ed(d, I);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        xd(l);
      } catch (he) {
        r = he, $t === l && l !== null && ($t = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function xc() {
    var n = Io.current;
    return Io.current = pc, n === null ? pc : n;
  }
  function Rd() {
    (sn === 0 || sn === 3 || sn === 2) && (sn = 4), Vt === null || (di & 268435455) === 0 && (Cc & 268435455) === 0 || ua(Vt, En);
  }
  function wc(n, r) {
    var l = Ge;
    Ge |= 2;
    var o = xc();
    (Vt !== n || En !== r) && (pi = null, Bl(n, r));
    do
      try {
        sy();
        break;
      } catch (c) {
        Qv(n, c);
      }
    while (1);
    if (qf(), Ge = l, Io.current = o, $t !== null)
      throw Error(C(261));
    return Vt = null, En = 0, sn;
  }
  function sy() {
    for (; $t !== null; )
      Gv($t);
  }
  function cy() {
    for (; $t !== null && !_i(); )
      Gv($t);
  }
  function Gv(n) {
    var r = Xv(n.alternate, n, Vr);
    n.memoizedProps = n.pendingProps, r === null ? xd(n) : $t = r, gd.current = null;
  }
  function xd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = oy(l, r, Vr), l !== null) {
          $t = l;
          return;
        }
      } else {
        if (l = vd(l, r), l !== null) {
          l.flags &= 32767, $t = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          sn = 6, $t = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        $t = r;
        return;
      }
      $t = r = n;
    } while (r !== null);
    sn === 0 && (sn = 5);
  }
  function Pl(n, r, l) {
    var o = vt, c = Wn.transition;
    try {
      Wn.transition = null, vt = 1, fy(n, r, l, o);
    } finally {
      Wn.transition = c, vt = o;
    }
    return null;
  }
  function fy(n, r, l, o) {
    do
      Vu();
    while (Ki !== null);
    if ((Ge & 6) !== 0)
      throw Error(C(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(C(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Fm(n, d), n === Vt && ($t = Vt = null, En = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || Xi || (Xi = !0, wd(Oi, function() {
      return Vu(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = Wn.transition, Wn.transition = null;
      var h = vt;
      vt = 1;
      var S = Ge;
      Ge |= 4, gd.current = null, Vv(n, l), Bv(l, n), Ns(El), ml = !!Vf, El = Vf = null, n.current = l, Pv(l), ys(), Ge = S, vt = h, Wn.transition = d;
    } else
      n.current = l;
    if (Xi && (Xi = !1, Ki = n, Tc = c), d = n.pendingLanes, d === 0 && ($a = null), Np(l.stateNode), qn(n, rt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ec)
      throw Ec = !1, n = Hl, Hl = null, n;
    return (Tc & 1) !== 0 && n.tag !== 0 && Vu(), d = n.pendingLanes, (d & 1) !== 0 ? n === Rc ? Au++ : (Au = 0, Rc = n) : Au = 0, mr(), null;
  }
  function Vu() {
    if (Ki !== null) {
      var n = mf(Tc), r = Wn.transition, l = vt;
      try {
        if (Wn.transition = null, vt = 16 > n ? 16 : n, Ki === null)
          var o = !1;
        else {
          if (n = Ki, Ki = null, Tc = 0, (Ge & 6) !== 0)
            throw Error(C(331));
          var c = Ge;
          for (Ge |= 4, le = n.current; le !== null; ) {
            var d = le, h = d.child;
            if ((le.flags & 16) !== 0) {
              var S = d.deletions;
              if (S !== null) {
                for (var T = 0; T < S.length; T++) {
                  var z = S[T];
                  for (le = z; le !== null; ) {
                    var j = le;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $o(8, j, d);
                    }
                    var P = j.child;
                    if (P !== null)
                      P.return = j, le = P;
                    else
                      for (; le !== null; ) {
                        j = le;
                        var V = j.sibling, ee = j.return;
                        if (md(j), j === z) {
                          le = null;
                          break;
                        }
                        if (V !== null) {
                          V.return = ee, le = V;
                          break;
                        }
                        le = ee;
                      }
                  }
                }
                var ce = d.alternate;
                if (ce !== null) {
                  var pe = ce.child;
                  if (pe !== null) {
                    ce.child = null;
                    do {
                      var Wt = pe.sibling;
                      pe.sibling = null, pe = Wt;
                    } while (pe !== null);
                  }
                }
                le = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && h !== null)
              h.return = d, le = h;
            else
              e:
                for (; le !== null; ) {
                  if (d = le, (d.flags & 2048) !== 0)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $o(9, d, d.return);
                    }
                  var k = d.sibling;
                  if (k !== null) {
                    k.return = d.return, le = k;
                    break e;
                  }
                  le = d.return;
                }
          }
          var x = n.current;
          for (le = x; le !== null; ) {
            h = le;
            var L = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && L !== null)
              L.return = h, le = L;
            else
              e:
                for (h = x; le !== null; ) {
                  if (S = le, (S.flags & 2048) !== 0)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Yo(9, S);
                      }
                    } catch (he) {
                      Yt(S, S.return, he);
                    }
                  if (S === h) {
                    le = null;
                    break e;
                  }
                  var I = S.sibling;
                  if (I !== null) {
                    I.return = S.return, le = I;
                    break e;
                  }
                  le = S.return;
                }
          }
          if (Ge = c, mr(), Ea && typeof Ea.onPostCommitFiberRoot == "function")
            try {
              Ea.onPostCommitFiberRoot(lo, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        vt = l, Wn.transition = r;
      }
    }
    return !1;
  }
  function Wv(n, r, l) {
    r = Du(l, r), r = Nv(n, r, 1), n = $i(n, r, 1), r = Xn(), n !== null && (hl(n, 1, r), qn(n, r));
  }
  function Yt(n, r, l) {
    if (n.tag === 3)
      Wv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Wv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && ($a === null || !$a.has(o))) {
            n = Du(l, n), n = Ho(r, n, 1), r = $i(r, n, 1), n = Xn(), r !== null && (hl(r, 1, n), qn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function dy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Xn(), n.pingedLanes |= n.suspendedLanes & l, Vt === n && (En & l) === l && (sn === 4 || sn === 3 && (En & 130023424) === En && 500 > rt() - Sd ? Bl(n, 0) : zu |= l), qn(n, r);
  }
  function Dc(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = uu, uu <<= 1, (uu & 130023424) === 0 && (uu = 4194304)));
    var l = Xn();
    n = ui(n, r), n !== null && (hl(n, r, l), qn(n, l));
  }
  function py(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Dc(n, l);
  }
  function vy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(C(314));
    }
    o !== null && o.delete(r), Dc(n, l);
  }
  var Xv;
  Xv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Pt.current)
        Jt = !0;
      else {
        if ((n.lanes & l) === 0 && (r.flags & 128) === 0)
          return Jt = !1, ci(n, r, l);
        Jt = (n.flags & 131072) !== 0;
      }
    else
      Jt = !1, kt && (r.flags & 1048576) !== 0 && Qf(r, Su, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Qn(n, r), n = r.pendingProps;
        var c = Jr(r, ke.current);
        X(r, l), c = Qi(null, r, o, n, c, l);
        var d = Ol();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zt(o) ? (d = !0, Vs(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Jf(r), c.updater = Gs, r.stateNode = c, c._reactInternals = r, Ws(r, o, n, l), r = Uv(null, r, o, !0, d, l)) : (r.tag = 0, kt && d && js(r), ln(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Qn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = Fr(o, n), c) {
            case 0:
              r = bu(null, r, o, n, l);
              break e;
            case 1:
              r = od(null, r, o, n, l);
              break e;
            case 11:
              r = Wi(null, r, o, n, l);
              break e;
            case 14:
              r = hc(null, r, o, Fr(o.type, n), l);
              break e;
          }
          throw Error(C(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Fr(o, c), bu(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Fr(o, c), od(n, r, o, c, l);
      case 3:
        e: {
          if (Av(r), n === null)
            throw Error(C(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, an(n, r), Yi(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Du(Error(C(423)), r), r = mc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Du(Error(C(424)), r), r = mc(n, r, o, l, c);
              break e;
            } else
              for (Sr = Da(r.stateNode.containerInfo.firstChild), Ar = r, kt = !0, na = null, l = Lv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ft(), o === c) {
              r = On(n, r, l);
              break e;
            }
            ln(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Re(r), n === null && Ps(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Do(o, c) ? h = null : d !== null && Do(o, d) && (r.flags |= 32), Fe(n, r), ln(n, r, h, l), r.child;
      case 6:
        return n === null && Ps(r), null;
      case 13:
        return cd(n, r, l);
      case 4:
        return nd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Eu(r, null, o, l) : ln(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Fr(o, c), Wi(n, r, o, c, l);
      case 7:
        return ln(n, r, r.pendingProps, l), r.child;
      case 8:
        return ln(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ln(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, ft(Va, o._currentValue), o._currentValue = h, d !== null)
            if (qr(d.value, h)) {
              if (d.children === c.children && !Pt.current) {
                r = On(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var S = d.dependencies;
                if (S !== null) {
                  h = d.child;
                  for (var T = S.firstContext; T !== null; ) {
                    if (T.context === o) {
                      if (d.tag === 1) {
                        T = oi(-1, l & -l), T.tag = 2;
                        var z = d.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var j = z.pending;
                          j === null ? T.next = T : (T.next = j.next, j.next = T), z.pending = T;
                        }
                      }
                      d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Sn(
                        d.return,
                        l,
                        r
                      ), S.lanes |= l;
                      break;
                    }
                    T = T.next;
                  }
                } else if (d.tag === 10)
                  h = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (h = d.return, h === null)
                    throw Error(C(341));
                  h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), Sn(h, l, r), h = d.sibling;
                } else
                  h = d.child;
                if (h !== null)
                  h.return = d;
                else
                  for (h = d; h !== null; ) {
                    if (h === r) {
                      h = null;
                      break;
                    }
                    if (d = h.sibling, d !== null) {
                      d.return = h.return, h = d;
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          ln(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, X(r, l), c = Gt(c), o = o(c), r.flags |= 1, ln(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Fr(o, r.pendingProps), c = Fr(o.type, c), hc(n, r, o, c, l);
      case 15:
        return Tr(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Fr(o, c), Qn(n, r), r.tag = 1, zt(o) ? (n = !0, Vs(r)) : n = !1, X(r, l), bv(r, o, c), Ws(r, o, c, l), Uv(null, r, o, !0, n, l);
      case 19:
        return pd(n, r, l);
      case 22:
        return zl(n, r, l);
    }
    throw Error(C(156, r.tag));
  };
  function wd(n, r) {
    return Nt(n, r);
  }
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function oa(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function Dd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function")
      return Dd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === wn)
        return 11;
      if (n === dn)
        return 14;
    }
    return 2;
  }
  function Zi(n, r) {
    var l = n.alternate;
    return l === null ? (l = oa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function bc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      Dd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case Be:
            return $l(l.children, c, d, r);
          case xn:
            h = 8, c |= 8;
            break;
          case Vn:
            return n = oa(12, l, r, c | 2), n.elementType = Vn, n.lanes = d, n;
          case Le:
            return n = oa(13, l, r, c), n.elementType = Le, n.lanes = d, n;
          case Xe:
            return n = oa(19, l, r, c), n.elementType = Xe, n.lanes = d, n;
          case Zn:
            return Wo(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Bt:
                  h = 10;
                  break e;
                case ht:
                  h = 9;
                  break e;
                case wn:
                  h = 11;
                  break e;
                case dn:
                  h = 14;
                  break e;
                case Dt:
                  h = 16, o = null;
                  break e;
              }
            throw Error(C(130, n == null ? n : typeof n, ""));
        }
    return r = oa(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function $l(n, r, l, o) {
    return n = oa(7, n, o, r), n.lanes = l, n;
  }
  function Wo(n, r, l, o) {
    return n = oa(22, n, o, r), n.elementType = Zn, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Xo(n, r, l) {
    return n = oa(6, n, null, r), n.lanes = l, n;
  }
  function Yl(n, r, l) {
    return r = oa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function yy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hf(0), this.expirationTimes = hf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function kc(n, r, l, o, c, d, h, S, T) {
    return n = new yy(n, r, l, S, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = oa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Jf(d), n;
  }
  function Kv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: wt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function bd(n) {
    if (!n)
      return Ha;
    n = n._reactInternals;
    e: {
      if (He(n) !== n || n.tag !== 1)
        throw Error(C(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(C(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zt(l))
        return _o(n, l, r);
    }
    return r;
  }
  function qv(n, r, l, o, c, d, h, S, T) {
    return n = kc(l, o, !0, n, c, d, h, S, T), n.context = bd(null), l = n.current, o = Xn(), c = en(l), d = oi(o, c), d.callback = r != null ? r : null, $i(l, d, c), n.current.lanes = c, hl(n, c, o), qn(n, o), n;
  }
  function Ko(n, r, l, o) {
    var c = r.current, d = Xn(), h = en(c);
    return l = bd(l), r.context === null ? r.context = l : r.pendingContext = l, r = oi(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = $i(c, r, h), n !== null && (Kn(n, c, h, d), Qs(n, c, h)), h;
  }
  function _c(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Zv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function kd(n, r) {
    Zv(n, r), (n = n.alternate) && Zv(n, r);
  }
  function Jv() {
    return null;
  }
  var _d = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Oc(n) {
    this._internalRoot = n;
  }
  vi.prototype.render = Oc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(C(409));
    Ko(n, r, null, null);
  }, vi.prototype.unmount = Oc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      qi(function() {
        Ko(null, n, null, null);
      }), r[ii] = null;
    }
  };
  function vi(n) {
    this._internalRoot = n;
  }
  vi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Fp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < mt.length && r !== 0 && r < mt[l].priority; l++)
        ;
      mt.splice(l, 0, n), l === 0 && Hp(n);
    }
  };
  function Od(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Lc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function eh() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = _c(h);
          d.call(z);
        };
      }
      var h = qv(r, o, n, 0, null, !1, !1, "", eh);
      return n._reactRootContainer = h, n[ii] = h.current, yu(n.nodeType === 8 ? n.parentNode : n), qi(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var z = _c(T);
        S.call(z);
      };
    }
    var T = kc(n, 0, !1, null, null, !1, !1, "", eh);
    return n._reactRootContainer = T, n[ii] = T.current, yu(n.nodeType === 8 ? n.parentNode : n), qi(function() {
      Ko(r, T, l, o);
    }), T;
  }
  function Mc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var T = _c(h);
          S.call(T);
        };
      }
      Ko(r, h, n, c);
    } else
      h = gy(l, r, n, c, o);
    return _c(h);
  }
  Ap = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = vl(r.pendingLanes);
          l !== 0 && (uo(r, l | 1), qn(r, rt()), (Ge & 6) === 0 && (Uu = rt() + 500, mr()));
        }
        break;
      case 13:
        qi(function() {
          var o = ui(n, 1);
          if (o !== null) {
            var c = Xn();
            Kn(o, n, 1, c);
          }
        }), kd(n, 1);
    }
  }, Es = function(n) {
    if (n.tag === 13) {
      var r = ui(n, 134217728);
      if (r !== null) {
        var l = Xn();
        Kn(r, n, 134217728, l);
      }
      kd(n, 134217728);
    }
  }, Ct = function(n) {
    if (n.tag === 13) {
      var r = en(n), l = ui(n, r);
      if (l !== null) {
        var o = Xn();
        Kn(l, n, r, o);
      }
      kd(n, r);
    }
  }, Fp = function() {
    return vt;
  }, yf = function(n, r) {
    var l = vt;
    try {
      return vt = n, r();
    } finally {
      vt = l;
    }
  }, Lr = function(n, r, l) {
    switch (r) {
      case "input":
        if ($n(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Se(o);
              if (!c)
                throw Error(C(90));
              Qr(o), $n(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ua(n, l);
        break;
      case "select":
        r = l.value, r != null && za(n, !!l.multiple, r, !1);
    }
  }, io = Hu, ms = qi;
  var Sy = { usingClientEntryPoint: !1, Events: [ko, gu, Se, fl, au, Hu] }, ju = { findFiberByHostInstance: Zr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Cy = { bundleType: ju.bundleType, version: ju.version, rendererPackageName: ju.rendererPackageName, rendererConfig: ju.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = hn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ju.findFiberByHostInstance || Jv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nc.isDisabled && Nc.supportsFiber)
      try {
        lo = Nc.inject(Cy), Ea = Nc;
      } catch {
      }
  }
  return va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, va.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Od(r))
      throw Error(C(200));
    return Kv(n, r, null, l);
  }, va.createRoot = function(n, r) {
    if (!Od(n))
      throw Error(C(299));
    var l = !1, o = "", c = _d;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = kc(n, 1, !1, null, null, l, !1, o, c), n[ii] = r.current, yu(n.nodeType === 8 ? n.parentNode : n), new Oc(r);
  }, va.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(C(188)) : (n = Object.keys(n).join(","), Error(C(268, n)));
    return n = hn(r), n = n === null ? null : n.stateNode, n;
  }, va.flushSync = function(n) {
    return qi(n);
  }, va.hydrate = function(n, r, l) {
    if (!Lc(r))
      throw Error(C(200));
    return Mc(null, n, r, !0, l);
  }, va.hydrateRoot = function(n, r, l) {
    if (!Od(n))
      throw Error(C(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = _d;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = qv(r, null, n, 1, l != null ? l : null, c, !1, d, h), n[ii] = r.current, yu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new vi(r);
  }, va.render = function(n, r, l) {
    if (!Lc(r))
      throw Error(C(200));
    return Mc(null, n, r, !1, l);
  }, va.unmountComponentAtNode = function(n) {
    if (!Lc(n))
      throw Error(C(40));
    return n._reactRootContainer ? (qi(function() {
      Mc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ii] = null;
      });
    }), !0) : !1;
  }, va.unstable_batchedUpdates = Hu, va.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Lc(l))
      throw Error(C(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(C(38));
    return Mc(n, r, l, !1, o);
  }, va.version = "18.2.0-next-9e3b772b8-20220608", va;
}
var ha = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oT;
function wk() {
  return oT || (oT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var b = cl, D = mT(), C = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = !1;
    function ue(e) {
      Y = e;
    }
    function oe(e) {
      if (!Y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ze("warn", e, a);
      }
    }
    function g(e) {
      if (!Y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ze("error", e, a);
      }
    }
    function ze(e, t, a) {
      {
        var i = C.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Q = 0, ie = 1, Ke = 2, W = 3, ve = 4, se = 5, Ue = 6, lt = 7, ut = 8, It = 9, Ie = 10, Ve = 11, ot = 12, Pe = 13, wt = 14, Be = 15, xn = 16, Vn = 17, Bt = 18, ht = 19, wn = 21, Le = 22, Xe = 23, dn = 24, Dt = 25, Zn = !0, G = !1, Ee = !1, ne = !1, nt = !1, st = !0, Dn = !1, Jn = !1, Ma = !0, nn = !0, Ir = !0, jn = /* @__PURE__ */ new Set(), fr = {}, Na = {};
    function dr(e, t) {
      Qr(e, t), Qr(e + "Capture", t);
    }
    function Qr(e, t) {
      fr[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), fr[e] = t;
      {
        var a = e.toLowerCase();
        Na[a] = e, e === "onDoubleClick" && (Na.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        jn.add(t[i]);
    }
    var pn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bn = Object.prototype.hasOwnProperty;
    function bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Pn(e) {
      try {
        return $n(e), !1;
      } catch {
        return !0;
      }
    }
    function $n(e) {
      return "" + e;
    }
    function Gr(e, t) {
      if (Pn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), $n(e);
    }
    function ma(e) {
      if (Pn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), $n(e);
    }
    function qa(e, t) {
      if (Pn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), $n(e);
    }
    function za(e, t) {
      if (Pn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), $n(e);
    }
    function ya(e) {
      if (Pn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), $n(e);
    }
    function kr(e) {
      if (Pn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", bn(e)), $n(e);
    }
    var Ua = 0, _r = 1, ga = 2, Kt = 3, Or = 4, Di = 5, Sa = 6, q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ge = q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", $e = new RegExp("^[" + q + "][" + ge + "]*$"), pt = {}, At = {};
    function vn(e) {
      return Bn.call(At, e) ? !0 : Bn.call(pt, e) ? !1 : $e.test(e) ? (At[e] = !0, !0) : (pt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Qt(e, t, a) {
      return t !== null ? t.type === Ua : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function pr(e, t, a, i) {
      if (a !== null && a.type === Ua)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Rt(e, t, a, i) {
      if (t === null || typeof t > "u" || pr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Kt:
            return !t;
          case Or:
            return t === !1;
          case Di:
            return isNaN(t);
          case Sa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Lr(e) {
      return xt.hasOwnProperty(e) ? xt[e] : null;
    }
    function St(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === ga || t === Kt || t === Or, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var xt = {}, ru = [
      "children",
      "dangerouslySetInnerHTML",
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ru.forEach(function(e) {
      xt[e] = new St(
        e,
        Ua,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      xt[t] = new St(
        t,
        _r,
        !1,
        a,
        null,
        !1,
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      xt[e] = new St(
        e,
        ga,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      xt[e] = new St(
        e,
        ga,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "itemScope"
    ].forEach(function(e) {
      xt[e] = new St(
        e,
        Kt,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      xt[e] = new St(
        e,
        Kt,
        !0,
        e,
        null,
        !1,
        !1
      );
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      xt[e] = new St(
        e,
        Or,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      xt[e] = new St(
        e,
        Sa,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      xt[e] = new St(
        e,
        Di,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var fl = /[\-\:]([a-z])/g, au = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
    ].forEach(function(e) {
      var t = e.replace(fl, au);
      xt[t] = new St(
        t,
        _r,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
    ].forEach(function(e) {
      var t = e.replace(fl, au);
      xt[t] = new St(
        t,
        _r,
        !1,
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var t = e.replace(fl, au);
      xt[t] = new St(
        t,
        _r,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      xt[e] = new St(
        e,
        _r,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var io = "xlinkHref";
    xt[io] = new St(
      "xlinkHref",
      _r,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      xt[e] = new St(
        e,
        _r,
        !1,
        e.toLowerCase(),
        null,
        !0,
        !0
      );
    });
    var ms = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, dl = !1;
    function iu(e) {
      !dl && ms.test(e) && (dl = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Gr(a, t), i.sanitizeURL && iu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Or) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Rt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Rt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Kt)
            return a;
          f = e.getAttribute(s);
        }
        return Rt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function lu(e, t, a, i) {
      {
        if (!vn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Gr(a, t), u === "" + a ? a : u;
      }
    }
    function Aa(e, t, a, i) {
      var u = Lr(t);
      if (!Qt(t, u, i)) {
        if (Rt(t, a, u, i) && (a = null), i || u === null) {
          if (vn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Gr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Kt ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var w = u.type, R;
          w === Kt || w === Or && a === !0 ? R = "" : (Gr(a, m), R = "" + a, u.sanitizeURL && iu(R.toString())), y ? e.setAttributeNS(y, m, R) : e.setAttribute(m, R);
        }
      }
    }
    var bi = Symbol.for("react.element"), Mr = Symbol.for("react.portal"), Ca = Symbol.for("react.fragment"), ki = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), Z = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), je = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), hn = Symbol.for("react.scope"), Mt = Symbol.for("react.debug_trace_mode"), Nt = Symbol.for("react.offscreen"), er = Symbol.for("react.legacy_hidden"), _i = Symbol.for("react.cache"), ys = Symbol.for("react.tracing_marker"), rt = Symbol.iterator, Um = "@@iterator";
    function Za(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = rt && e[rt] || e[Um];
      return typeof t == "function" ? t : null;
    }
    var Qe = Object.assign, Oi = 0, Mp, df, lo, Ea, Np, Wr, zp;
    function Up() {
    }
    Up.__reactDisabledLog = !0;
    function Am() {
      {
        if (Oi === 0) {
          Mp = console.log, df = console.info, lo = console.warn, Ea = console.error, Np = console.group, Wr = console.groupCollapsed, zp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Up,
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
        Oi++;
      }
    }
    function gs() {
      {
        if (Oi--, Oi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, e, {
              value: Mp
            }),
            info: Qe({}, e, {
              value: df
            }),
            warn: Qe({}, e, {
              value: lo
            }),
            error: Qe({}, e, {
              value: Ea
            }),
            group: Qe({}, e, {
              value: Np
            }),
            groupCollapsed: Qe({}, e, {
              value: Wr
            }),
            groupEnd: Qe({}, e, {
              value: zp
            })
          });
        }
        Oi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var uu = C.ReactCurrentDispatcher, vl;
    function Ta(e, t, a) {
      {
        if (vl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            vl = i && i[1] || "";
          }
        return `
` + vl + e;
      }
    }
    var pf = !1, Ss;
    {
      var vf = typeof WeakMap == "function" ? WeakMap : Map;
      Ss = new vf();
    }
    function Cs(e, t) {
      if (!e || pf)
        return "";
      {
        var a = Ss.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = uu.current, uu.current = null, Am();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (N) {
              i = N;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (N) {
              i = N;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            i = N;
          }
          e();
        }
      } catch (N) {
        if (N && i && typeof N.stack == "string") {
          for (var p = N.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, y = v.length - 1; m >= 1 && y >= 0 && p[m] !== v[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (p[m] !== v[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || p[m] !== v[y]) {
                    var w = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && Ss.set(e, w), w;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        pf = !1, uu.current = s, gs(), Error.prepareStackTrace = u;
      }
      var R = e ? e.displayName || e.name : "", M = R ? Ta(R) : "";
      return typeof e == "function" && Ss.set(e, M), M;
    }
    function hf(e, t, a) {
      return Cs(e, !0);
    }
    function hl(e, t, a) {
      return Cs(e, !1);
    }
    function Fm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function uo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Cs(e, Fm(e));
      if (typeof e == "string")
        return Ta(e);
      switch (e) {
        case He:
          return Ta("Suspense");
        case et:
          return Ta("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Te:
            return hl(e.render);
          case je:
            return uo(e.type, t, a);
          case xe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return uo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function vt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case se:
          return Ta(e.type);
        case xn:
          return Ta("Lazy");
        case Pe:
          return Ta("Suspense");
        case ht:
          return Ta("SuspenseList");
        case Q:
        case Ke:
        case Be:
          return hl(e.type);
        case Ve:
          return hl(e.type.render);
        case ie:
          return hf(e.type);
        default:
          return "";
      }
    }
    function mf(e) {
      try {
        var t = "", a = e;
        do
          t += vt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ap(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Es(e) {
      return e.displayName || "Context";
    }
    function Ct(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ca:
          return "Fragment";
        case Mr:
          return "Portal";
        case E:
          return "Profiler";
        case ki:
          return "StrictMode";
        case He:
          return "Suspense";
        case et:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Z:
            var t = e;
            return Es(t) + ".Consumer";
          case B:
            var a = e;
            return Es(a._context) + ".Provider";
          case Te:
            return Ap(e, e.render, "ForwardRef");
          case je:
            var i = e.displayName || null;
            return i !== null ? i : Ct(e.type) || "Memo";
          case xe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Ct(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Fp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function yf(e) {
      return e.displayName || "Context";
    }
    function Ne(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case dn:
          return "Cache";
        case It:
          var i = a;
          return yf(i) + ".Consumer";
        case Ie:
          var u = a;
          return yf(u._context) + ".Provider";
        case Bt:
          return "DehydratedFragment";
        case Ve:
          return Fp(a, a.render, "ForwardRef");
        case lt:
          return "Fragment";
        case se:
          return a;
        case ve:
          return "Portal";
        case W:
          return "Root";
        case Ue:
          return "Text";
        case xn:
          return Ct(a);
        case ut:
          return a === ki ? "StrictMode" : "Mode";
        case Le:
          return "Offscreen";
        case ot:
          return "Profiler";
        case wn:
          return "Scope";
        case Pe:
          return "Suspense";
        case ht:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case ie:
        case Q:
        case Vn:
        case Ke:
        case wt:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var oo = C.ReactDebugCurrentFrame, qt = null, Xr = !1;
    function Kr() {
      {
        if (qt === null)
          return null;
        var e = qt._debugOwner;
        if (e !== null && typeof e < "u")
          return Ne(e);
      }
      return null;
    }
    function so() {
      return qt === null ? "" : mf(qt);
    }
    function rn() {
      oo.getCurrentStack = null, qt = null, Xr = !1;
    }
    function mt(e) {
      oo.getCurrentStack = e === null ? null : so, qt = e, Xr = !1;
    }
    function Hm() {
      return qt;
    }
    function Ra(e) {
      Xr = e;
    }
    function Yn(e) {
      return "" + e;
    }
    function Li(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return kr(e), e;
        default:
          return "";
      }
    }
    var Hp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ou(e, t) {
      Hp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function gf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Vp(e) {
      return e._valueTracker;
    }
    function co(e) {
      e._valueTracker = null;
    }
    function fo(e) {
      var t = "";
      return e && (gf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function su(e) {
      var t = gf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      kr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            kr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            kr(p), i = "" + p;
          },
          stopTracking: function() {
            co(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ml(e) {
      Vp(e) || (e._valueTracker = su(e));
    }
    function jp(e) {
      if (!e)
        return !1;
      var t = Vp(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = fo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ts(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Rs = !1, po = !1, xs = !1, Sf = !1;
    function Ja(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function vo(e, t) {
      var a = e, i = t.checked, u = Qe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i != null ? i : a._wrapperState.initialChecked
      });
      return u;
    }
    function ho(e, t) {
      ou("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !po && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Kr() || "A component", t.type), po = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Rs && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Kr() || "A component", t.type), Rs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Li(t.value != null ? t.value : i),
        controlled: Ja(t)
      };
    }
    function Cf(e, t) {
      var a = e, i = t.checked;
      i != null && Aa(a, "checked", i, !1);
    }
    function cu(e, t) {
      var a = e;
      {
        var i = Ja(t);
        !a._wrapperState.controlled && i && !Sf && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Sf = !0), a._wrapperState.controlled && !i && !xs && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xs = !0);
      }
      Cf(e, t);
      var u = Li(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || a.value != u) && (a.value = Yn(u)) : a.value !== Yn(u) && (a.value = Yn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Mi(a, t.type, u) : t.hasOwnProperty("defaultValue") && Mi(a, t.type, Li(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function mo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Yn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Bp(e, t) {
      var a = e;
      cu(a, t), Nr(a, t);
    }
    function Nr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Gr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = yh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            jp(f), cu(f, p);
          }
        }
      }
    }
    function Mi(e, t, a) {
      (t !== "number" || Ts(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Yn(e._wrapperState.initialValue) : e.defaultValue !== Yn(a) && (e.defaultValue = Yn(a)));
    }
    var ws = !1, fu = !1, Pp = !1;
    function Ds(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? b.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || fu || (fu = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Pp || (Pp = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ws && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ws = !0);
    }
    function Ef(e, t) {
      t.value != null && e.setAttribute("value", Yn(Li(t.value)));
    }
    var yo = Array.isArray;
    function mn(e) {
      return yo(e);
    }
    var bs;
    bs = !1;
    function $p() {
      var e = Kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Yp = ["value", "defaultValue"];
    function Vm(e) {
      {
        ou("select", e);
        for (var t = 0; t < Yp.length; t++) {
          var a = Yp[t];
          if (e[a] != null) {
            var i = mn(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, $p()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, $p());
          }
        }
      }
    }
    function Ni(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = Yn(Li(a)), w = null, R = 0; R < u.length; R++) {
          if (u[R].value === y) {
            u[R].selected = !0, i && (u[R].defaultSelected = !0);
            return;
          }
          w === null && !u[R].disabled && (w = u[R]);
        }
        w !== null && (w.selected = !0);
      }
    }
    function Tf(e, t) {
      return Qe({}, t, {
        value: void 0
      });
    }
    function Ip(e, t) {
      var a = e;
      Vm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bs && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bs = !0);
    }
    function jm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ni(a, !!t.multiple, i, !1) : t.defaultValue != null && Ni(a, !!t.multiple, t.defaultValue, !0);
    }
    function Bm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ni(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ni(a, !!t.multiple, t.defaultValue, !0) : Ni(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Pm(e, t) {
      var a = e, i = t.value;
      i != null && Ni(a, !!t.multiple, i, !1);
    }
    var Rf = !1;
    function xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Qe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Yn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Qp(e, t) {
      var a = e;
      ou("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Rf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Kr() || "A component"), Rf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (mn(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Li(i)
      };
    }
    function Gp(e, t) {
      var a = e, i = Li(t.value), u = Li(t.defaultValue);
      if (i != null) {
        var s = Yn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Yn(u));
    }
    function Wp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function wf(e, t) {
      Gp(e, t);
    }
    var ei = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", Df = "http://www.w3.org/2000/svg";
    function ks(e) {
      switch (e) {
        case "svg":
          return Df;
        case "math":
          return $m;
        default:
          return ei;
      }
    }
    function bf(e, t) {
      return e == null || e === ei ? ks(t) : e === Df && t === "foreignObject" ? ei : e;
    }
    var Ym = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, _s, Xp = Ym(function(e, t) {
      if (e.namespaceURI === Df && !("innerHTML" in e)) {
        _s = _s || document.createElement("div"), _s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = _s.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), vr = 1, ti = 3, Zt = 8, xa = 9, yl = 11, Os = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ti) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Kp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, du = {
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
      strokeWidth: !0
    };
    function qp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Zp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(du).forEach(function(e) {
      Zp.forEach(function(t) {
        du[qp(t, e)] = du[e];
      });
    });
    function Ls(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(du.hasOwnProperty(e) && du[e]) ? t + "px" : (za(t, e), ("" + t).trim());
    }
    var pu = /([A-Z])/g, Im = /^ms-/;
    function Qm(e) {
      return e.replace(pu, "-$1").toLowerCase().replace(Im, "-ms-");
    }
    var Jp = function() {
    };
    {
      var ev = /^(?:webkit|moz|o)[A-Z]/, tv = /^-ms-/, go = /-(.)/g, vu = /;\s*$/, hu = {}, mu = {}, nv = !1, kf = !1, _f = function(e) {
        return e.replace(go, function(t, a) {
          return a.toUpperCase();
        });
      }, Of = function(e) {
        hu.hasOwnProperty(e) && hu[e] || (hu[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          _f(e.replace(tv, "ms-"))
        ));
      }, rv = function(e) {
        hu.hasOwnProperty(e) && hu[e] || (hu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, av = function(e, t) {
        mu.hasOwnProperty(t) && mu[t] || (mu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vu, "")));
      }, iv = function(e, t) {
        nv || (nv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Gm = function(e, t) {
        kf || (kf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Jp = function(e, t) {
        e.indexOf("-") > -1 ? Of(e) : ev.test(e) ? rv(e) : vu.test(t) && av(e, t), typeof t == "number" && (isNaN(t) ? iv(e, t) : isFinite(t) || Gm(e, t));
      };
    }
    var Wm = Jp;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (!!e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Qm(i)) + ":", t += Ls(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function lv(e, t) {
      var a = e.style;
      for (var i in t)
        if (!!t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Wm(i, t[i]);
          var s = Ls(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Km(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function qr(e) {
      var t = {};
      for (var a in e)
        for (var i = Kp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function So(e, t) {
      {
        if (!t)
          return;
        var a = qr(e), i = qr(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Km(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var uv = {
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
      wbr: !0
    }, ov = Qe({
      menuitem: !0
    }, uv), sv = "__html";
    function Ms(e, t) {
      if (!!t) {
        if (ov[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ni(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var Ns = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, cv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, wa = {}, Lf = new RegExp("^(aria)-[" + ge + "]*$"), Co = new RegExp("^(aria)[A-Z][" + ge + "]*$");
    function Mf(e, t) {
      {
        if (Bn.call(wa, t) && wa[t])
          return !0;
        if (Co.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = cv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), wa[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), wa[t] = !0, !0;
        }
        if (Lf.test(t)) {
          var u = t.toLowerCase(), s = cv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return wa[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), wa[t] = !0, !0;
        }
      }
      return !0;
    }
    function fv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Mf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function zs(e, t) {
      ni(e, t) || fv(e, t);
    }
    var gl = !1;
    function Nf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !gl && (gl = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var zf = function() {
    };
    {
      var yn = {}, Uf = /^on./, dv = /^on[^A-Z]/, pv = new RegExp("^(aria)-[" + ge + "]*$"), vv = new RegExp("^(aria)[A-Z][" + ge + "]*$");
      zf = function(e, t, a, i) {
        if (Bn.call(yn, t) && yn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), yn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), yn[t] = !0, !0;
          if (Uf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), yn[t] = !0, !0;
        } else if (Uf.test(t))
          return dv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), yn[t] = !0, !0;
        if (pv.test(t) || vv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), yn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), yn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), yn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), yn[t] = !0, !0;
        var v = Lr(t), m = v !== null && v.type === Ua;
        if (Ns.hasOwnProperty(u)) {
          var y = Ns[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), yn[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), yn[t] = !0, !0;
        return typeof a == "boolean" && pr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), yn[t] = !0, !0) : m ? !0 : pr(t, a, v, !1) ? (yn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Kt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), yn[t] = !0), !0);
      };
    }
    var hv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = zf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function mv(e, t, a) {
      ni(e, t) || hv(e, t, a);
    }
    var ri = 1, Eo = 1 << 1, Sl = 1 << 2, qm = ri | Eo | Sl, To = null;
    function Ro(e) {
      To !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), To = e;
    }
    function Zm() {
      To === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), To = null;
    }
    function yv(e) {
      return e === To;
    }
    function Us(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ti ? t.parentNode : t;
    }
    var Et = null, zi = null, ai = null;
    function yu(e) {
      var t = $u(e);
      if (!!t) {
        if (typeof Et != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = yh(a);
          Et(t.stateNode, t.type, i);
        }
      }
    }
    function gv(e) {
      Et = e;
    }
    function As(e) {
      zi ? ai ? ai.push(e) : ai = [e] : zi = e;
    }
    function xo() {
      return zi !== null || ai !== null;
    }
    function wo() {
      if (!!zi) {
        var e = zi, t = ai;
        if (zi = null, ai = null, yu(e), t)
          for (var a = 0; a < t.length; a++)
            yu(t[a]);
      }
    }
    var Cl = function(e, t) {
      return e(t);
    }, Af = function() {
    }, Ff = !1;
    function Jm() {
      var e = xo();
      e && (Af(), wo());
    }
    function Hf(e, t, a) {
      if (Ff)
        return e(t, a);
      Ff = !0;
      try {
        return Cl(e, t, a);
      } finally {
        Ff = !1, Jm();
      }
    }
    function Fs(e, t, a) {
      Cl = e, Af = a;
    }
    function Hs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Vf(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Hs(t));
        default:
          return !1;
      }
    }
    function El(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = yh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Vf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Do = !1;
    if (pn)
      try {
        var Tl = {};
        Object.defineProperty(Tl, "passive", {
          get: function() {
            Do = !0;
          }
        }), window.addEventListener("test", Tl, Tl), window.removeEventListener("test", Tl, Tl);
      } catch {
        Do = !1;
      }
    function Sv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var jf = Sv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Bf = document.createElement("react");
      jf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), w = !1, R = !0, M = window.event, N = Object.getOwnPropertyDescriptor(window, "event");
        function U() {
          Bf.removeEventListener(A, Ce, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var re = Array.prototype.slice.call(arguments, 3);
        function Ce() {
          w = !0, U(), a.apply(i, re), R = !1;
        }
        var me, Je = !1, We = !1;
        function _(O) {
          if (me = O.error, Je = !0, me === null && O.colno === 0 && O.lineno === 0 && (We = !0), O.defaultPrevented && me != null && typeof me == "object")
            try {
              me._suppressLogging = !0;
            } catch {
            }
        }
        var A = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", _), Bf.addEventListener(A, Ce, !1), y.initEvent(A, !1, !1), Bf.dispatchEvent(y), N && Object.defineProperty(window, "event", N), w && R && (Je ? We && (me = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : me = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(me)), window.removeEventListener("error", _), !w)
          return U(), Sv.apply(this, arguments);
      };
    }
    var ey = jf, Ui = !1, Da = null, bo = !1, Ai = null, Fa = {
      onError: function(e) {
        Ui = !0, Da = e;
      }
    };
    function Rl(e, t, a, i, u, s, f, p, v) {
      Ui = !1, Da = null, ey.apply(Fa, arguments);
    }
    function ii(e, t, a, i, u, s, f, p, v) {
      if (Rl.apply(this, arguments), Ui) {
        var m = $f();
        bo || (bo = !0, Ai = m);
      }
    }
    function Pf() {
      if (bo) {
        var e = Ai;
        throw bo = !1, Ai = null, e;
      }
    }
    function ty() {
      return Ui;
    }
    function $f() {
      if (Ui) {
        var e = Da;
        return Ui = !1, Da = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zr(e) {
      return e._reactInternals;
    }
    function ko(e) {
      return e._reactInternals !== void 0;
    }
    function gu(e, t) {
      e._reactInternals = t;
    }
    var Se = 0, Fi = 1, bt = 2, Ae = 4, ct = 16, ft = 32, Ha = 64, ke = 128, Pt = 256, hr = 512, Jr = 1024, zt = 2048, ea = 4096, Hi = 8192, _o = 16384, Vs = zt | Ae | Ha | hr | Jr | _o, Cv = 32767, zr = 32768, gn = 65536, Oo = 131072, Yf = 1048576, If = 2097152, mr = 4194304, Vi = 8388608, yr = 16777216, xl = 33554432, Su = Ae | Jr | 0, gr = bt | Ae | ct | ft | hr | ea | Hi, In = Ae | Ha | hr | Hi, ta = zt | ct, kn = mr | Vi | If, li = C.ReactCurrentOwner;
    function Ur(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (bt | ea)) !== Se && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === W ? a : null;
    }
    function Qf(e) {
      if (e.tag === Pe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function js(e) {
      return e.tag === W ? e.stateNode.containerInfo : null;
    }
    function Gf(e) {
      return Ur(e) === e;
    }
    function Ar(e) {
      {
        var t = li.current;
        if (t !== null && t.tag === ie) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ne(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Zr(e);
      return u ? Ur(u) === u : !1;
    }
    function Sr(e) {
      if (Ur(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function kt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ur(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Sr(s), e;
            if (v === u)
              return Sr(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, y = s.child; y; ) {
            if (y === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (y === u) {
              m = !0, u = s, i = f;
              break;
            }
            y = y.sibling;
          }
          if (!m) {
            for (y = f.child; y; ) {
              if (y === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (y === u) {
                m = !0, u = f, i = s;
                break;
              }
              y = y.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== W)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function na(e) {
      var t = kt(e);
      return t !== null ? Wf(t) : null;
    }
    function Wf(e) {
      if (e.tag === se || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Wf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Ev(e) {
      var t = kt(e);
      return t !== null ? Bs(t) : null;
    }
    function Bs(e) {
      if (e.tag === se || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ve) {
          var a = Bs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ps = D.unstable_scheduleCallback, Tv = D.unstable_cancelCallback, $s = D.unstable_shouldYield, Rv = D.unstable_requestPaint, Ft = D.unstable_now, Xf = D.unstable_getCurrentPriorityLevel, Ys = D.unstable_ImmediatePriority, Fr = D.unstable_UserBlockingPriority, Va = D.unstable_NormalPriority, Is = D.unstable_LowPriority, ji = D.unstable_IdlePriority, Kf = D.unstable_yieldValue, qf = D.unstable_setDisableYieldValue, Bi = null, Sn = null, X = null, Gt = !1, _n = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Zf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ma && (e = Qe({}, e, {
          getLaneLabelMap: $i,
          injectProfilingHooks: oi
        })), Bi = t.inject(e), Sn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function xv(e, t) {
      if (Sn && typeof Sn.onScheduleFiberRoot == "function")
        try {
          Sn.onScheduleFiberRoot(Bi, e, t);
        } catch (a) {
          Gt || (Gt = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function ui(e, t) {
      if (Sn && typeof Sn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ke) === ke;
          if (nn) {
            var i;
            switch (t) {
              case Qn:
                i = Ys;
                break;
              case On:
                i = Fr;
                break;
              case ci:
                i = Va;
                break;
              case Vo:
                i = ji;
                break;
              default:
                i = Va;
                break;
            }
            Sn.onCommitFiberRoot(Bi, e, i, a);
          }
        } catch (u) {
          Gt || (Gt = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Pi(e) {
      if (Sn && typeof Sn.onPostCommitFiberRoot == "function")
        try {
          Sn.onPostCommitFiberRoot(Bi, e);
        } catch (t) {
          Gt || (Gt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Jf(e) {
      if (Sn && typeof Sn.onCommitFiberUnmount == "function")
        try {
          Sn.onCommitFiberUnmount(Bi, e);
        } catch (t) {
          Gt || (Gt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function an(e) {
      if (typeof Kf == "function" && (qf(e), ue(e)), Sn && typeof Sn.setStrictMode == "function")
        try {
          Sn.setStrictMode(Bi, e);
        } catch (t) {
          Gt || (Gt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function oi(e) {
      X = e;
    }
    function $i() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _t; a++) {
          var i = ny(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Qs(e) {
      X !== null && typeof X.markCommitStarted == "function" && X.markCommitStarted(e);
    }
    function ed() {
      X !== null && typeof X.markCommitStopped == "function" && X.markCommitStopped();
    }
    function Yi(e) {
      X !== null && typeof X.markComponentRenderStarted == "function" && X.markComponentRenderStarted(e);
    }
    function wl() {
      X !== null && typeof X.markComponentRenderStopped == "function" && X.markComponentRenderStopped();
    }
    function wv(e) {
      X !== null && typeof X.markComponentPassiveEffectMountStarted == "function" && X.markComponentPassiveEffectMountStarted(e);
    }
    function td() {
      X !== null && typeof X.markComponentPassiveEffectMountStopped == "function" && X.markComponentPassiveEffectMountStopped();
    }
    function Gs(e) {
      X !== null && typeof X.markComponentPassiveEffectUnmountStarted == "function" && X.markComponentPassiveEffectUnmountStarted(e);
    }
    function Dv() {
      X !== null && typeof X.markComponentPassiveEffectUnmountStopped == "function" && X.markComponentPassiveEffectUnmountStopped();
    }
    function bv(e) {
      X !== null && typeof X.markComponentLayoutEffectMountStarted == "function" && X.markComponentLayoutEffectMountStarted(e);
    }
    function kv() {
      X !== null && typeof X.markComponentLayoutEffectMountStopped == "function" && X.markComponentLayoutEffectMountStopped();
    }
    function Ws(e) {
      X !== null && typeof X.markComponentLayoutEffectUnmountStarted == "function" && X.markComponentLayoutEffectUnmountStarted(e);
    }
    function Cu() {
      X !== null && typeof X.markComponentLayoutEffectUnmountStopped == "function" && X.markComponentLayoutEffectUnmountStopped();
    }
    function Xs(e, t, a) {
      X !== null && typeof X.markComponentErrored == "function" && X.markComponentErrored(e, t, a);
    }
    function _v(e, t, a) {
      X !== null && typeof X.markComponentSuspended == "function" && X.markComponentSuspended(e, t, a);
    }
    function Ov(e) {
      X !== null && typeof X.markLayoutEffectsStarted == "function" && X.markLayoutEffectsStarted(e);
    }
    function Eu() {
      X !== null && typeof X.markLayoutEffectsStopped == "function" && X.markLayoutEffectsStopped();
    }
    function Lv(e) {
      X !== null && typeof X.markPassiveEffectsStarted == "function" && X.markPassiveEffectsStarted(e);
    }
    function Lo() {
      X !== null && typeof X.markPassiveEffectsStopped == "function" && X.markPassiveEffectsStopped();
    }
    function ba(e) {
      X !== null && typeof X.markRenderStarted == "function" && X.markRenderStarted(e);
    }
    function Mo() {
      X !== null && typeof X.markRenderYielded == "function" && X.markRenderYielded();
    }
    function Tu() {
      X !== null && typeof X.markRenderStopped == "function" && X.markRenderStopped();
    }
    function Dl(e) {
      X !== null && typeof X.markRenderScheduled == "function" && X.markRenderScheduled(e);
    }
    function nd(e, t) {
      X !== null && typeof X.markForceUpdateScheduled == "function" && X.markForceUpdateScheduled(e, t);
    }
    function Ii(e, t) {
      X !== null && typeof X.markStateUpdateScheduled == "function" && X.markStateUpdateScheduled(e, t);
    }
    var Re = 0, Ye = 1, we = 2, Ht = 8, ra = 16, Ks = Math.clz32 ? Math.clz32 : bl, qs = Math.log, rd = Math.LN2;
    function bl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (qs(t) / rd | 0) | 0;
    }
    var _t = 31, F = 0, qe = 0, De = 1, ja = 2, Hr = 4, kl = 8, Ot = 16, _l = 32, Qi = 4194240, Ol = 64, aa = 128, Cr = 256, Ll = 512, No = 1024, zo = 2048, Zs = 4096, Js = 8192, ec = 16384, tc = 32768, nc = 65536, rc = 131072, ac = 262144, ic = 524288, Ml = 1048576, lc = 2097152, Nl = 130023424, si = 4194304, uc = 8388608, Uo = 16777216, oc = 33554432, sc = 67108864, ad = si, Ru = 134217728, cc = 268435455, xu = 268435456, Gi = 536870912, Er = 1073741824;
    function ny(e) {
      {
        if (e & De)
          return "Sync";
        if (e & ja)
          return "InputContinuousHydration";
        if (e & Hr)
          return "InputContinuous";
        if (e & kl)
          return "DefaultHydration";
        if (e & Ot)
          return "Default";
        if (e & _l)
          return "TransitionHydration";
        if (e & Qi)
          return "Transition";
        if (e & Nl)
          return "Retry";
        if (e & Ru)
          return "SelectiveHydration";
        if (e & xu)
          return "IdleHydration";
        if (e & Gi)
          return "Idle";
        if (e & Er)
          return "Offscreen";
      }
    }
    var Tt = -1, fc = Ol, dc = si;
    function wu(e) {
      switch (Jt(e)) {
        case De:
          return De;
        case ja:
          return ja;
        case Hr:
          return Hr;
        case kl:
          return kl;
        case Ot:
          return Ot;
        case _l:
          return _l;
        case Ol:
        case aa:
        case Cr:
        case Ll:
        case No:
        case zo:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case rc:
        case ac:
        case ic:
        case Ml:
        case lc:
          return e & Qi;
        case si:
        case uc:
        case Uo:
        case oc:
        case sc:
          return e & Nl;
        case Ru:
          return Ru;
        case xu:
          return xu;
        case Gi:
          return Gi;
        case Er:
          return Er;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ao(e, t) {
      var a = e.pendingLanes;
      if (a === F)
        return F;
      var i = F, u = e.suspendedLanes, s = e.pingedLanes, f = a & cc;
      if (f !== F) {
        var p = f & ~u;
        if (p !== F)
          i = wu(p);
        else {
          var v = f & s;
          v !== F && (i = wu(v));
        }
      } else {
        var m = a & ~u;
        m !== F ? i = wu(m) : s !== F && (i = wu(s));
      }
      if (i === F)
        return F;
      if (t !== F && t !== i && (t & u) === F) {
        var y = Jt(i), w = Jt(t);
        if (y >= w || y === Ot && (w & Qi) !== F)
          return t;
      }
      (i & Hr) !== F && (i |= a & Ot);
      var R = e.entangledLanes;
      if (R !== F)
        for (var M = e.entanglements, N = i & R; N > 0; ) {
          var U = Wi(N), re = 1 << U;
          i |= M[U], N &= ~re;
        }
      return i;
    }
    function Mv(e, t) {
      for (var a = e.eventTimes, i = Tt; t > 0; ) {
        var u = Wi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function pc(e, t) {
      switch (e) {
        case De:
        case ja:
        case Hr:
          return t + 250;
        case kl:
        case Ot:
        case _l:
        case Ol:
        case aa:
        case Cr:
        case Ll:
        case No:
        case zo:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case rc:
        case ac:
        case ic:
        case Ml:
        case lc:
          return t + 5e3;
        case si:
        case uc:
        case Uo:
        case oc:
        case sc:
          return Tt;
        case Ru:
        case xu:
        case Gi:
        case Er:
          return Tt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Tt;
      }
    }
    function ry(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wi(f), v = 1 << p, m = s[p];
        m === Tt ? ((v & i) === F || (v & u) !== F) && (s[p] = pc(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ay(e) {
      return wu(e.pendingLanes);
    }
    function id(e) {
      var t = e.pendingLanes & ~Er;
      return t !== F ? t : t & Er ? Er : F;
    }
    function Du(e) {
      return (e & De) !== F;
    }
    function Fo(e) {
      return (e & cc) !== F;
    }
    function vc(e) {
      return (e & Nl) === e;
    }
    function iy(e) {
      var t = De | Hr | Ot;
      return (e & t) === F;
    }
    function Nv(e) {
      return (e & Qi) === e;
    }
    function Ho(e, t) {
      var a = ja | Hr | kl | Ot;
      return (t & a) !== F;
    }
    function zv(e, t) {
      return (t & e.expiredLanes) !== F;
    }
    function ld(e) {
      return (e & Qi) !== F;
    }
    function ud() {
      var e = fc;
      return fc <<= 1, (fc & Qi) === F && (fc = Ol), e;
    }
    function ly() {
      var e = dc;
      return dc <<= 1, (dc & Nl) === F && (dc = si), e;
    }
    function Jt(e) {
      return e & -e;
    }
    function ln(e) {
      return Jt(e);
    }
    function Wi(e) {
      return 31 - Ks(e);
    }
    function hc(e) {
      return Wi(e);
    }
    function Tr(e, t) {
      return (e & t) !== F;
    }
    function zl(e, t) {
      return (e & t) === t;
    }
    function Fe(e, t) {
      return e | t;
    }
    function bu(e, t) {
      return e & ~t;
    }
    function od(e, t) {
      return e & t;
    }
    function Uv(e) {
      return e;
    }
    function Av(e, t) {
      return e !== qe && e < t ? e : t;
    }
    function mc(e) {
      for (var t = [], a = 0; a < _t; a++)
        t.push(e);
      return t;
    }
    function Ul(e, t, a) {
      e.pendingLanes |= t, t !== Gi && (e.suspendedLanes = F, e.pingedLanes = F);
      var i = e.eventTimes, u = hc(t);
      i[u] = a;
    }
    function sd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Wi(i), s = 1 << u;
        a[u] = Tt, i &= ~s;
      }
    }
    function cd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function fd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = F, e.pingedLanes = F, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wi(f), v = 1 << p;
        i[p] = F, u[p] = Tt, s[p] = Tt, f &= ~v;
      }
    }
    function ku(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Wi(u), f = 1 << s;
        f & t | i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function uy(e, t) {
      var a = Jt(t), i;
      switch (a) {
        case Hr:
          i = ja;
          break;
        case Ot:
          i = kl;
          break;
        case Ol:
        case aa:
        case Cr:
        case Ll:
        case No:
        case zo:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case rc:
        case ac:
        case ic:
        case Ml:
        case lc:
        case si:
        case uc:
        case Uo:
        case oc:
        case sc:
          i = _l;
          break;
        case Gi:
          i = xu;
          break;
        default:
          i = qe;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== qe ? qe : i;
    }
    function dd(e, t, a) {
      if (!!_n)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = hc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function yc(e, t) {
      if (!!_n)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = hc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function pd(e, t) {
      return null;
    }
    var Qn = De, On = Hr, ci = Ot, Vo = Gi, Al = qe;
    function ia() {
      return Al;
    }
    function un(e) {
      Al = e;
    }
    function jo(e, t) {
      var a = Al;
      try {
        return Al = e, t();
      } finally {
        Al = a;
      }
    }
    function Gn(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function oy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function vd(e, t) {
      return e !== 0 && e < t;
    }
    function Bo(e) {
      var t = Jt(e);
      return vd(Qn, t) ? vd(On, t) ? Fo(t) ? ci : Vo : On : Qn;
    }
    function on(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Fv;
    function le(e) {
      Fv = e;
    }
    function _u(e) {
      Fv(e);
    }
    var Po;
    function Hv(e) {
      Po = e;
    }
    var Vv;
    function $o(e) {
      Vv = e;
    }
    var Yo;
    function hd(e) {
      Yo = e;
    }
    var md;
    function jv(e) {
      md = e;
    }
    var gc = !1, Ou = [], Ba = null, Ut = null, Cn = null, la = /* @__PURE__ */ new Map(), Lu = /* @__PURE__ */ new Map(), fi = [], ka = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Bv(e) {
      return ka.indexOf(e) > -1;
    }
    function Pa(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Pv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ba = null;
          break;
        case "dragenter":
        case "dragleave":
          Ut = null;
          break;
        case "mouseover":
        case "mouseout":
          Cn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          la.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Lu.delete(i);
          break;
        }
      }
    }
    function Mu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Pa(t, a, i, u, s);
        if (t !== null) {
          var p = $u(t);
          p !== null && Po(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function $v(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ba = Mu(Ba, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ut = Mu(Ut, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Cn = Mu(Cn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return la.set(m, Mu(la.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, w = y.pointerId;
          return Lu.set(w, Mu(Lu.get(w) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function yd(e) {
      var t = Jo(e.target);
      if (t !== null) {
        var a = Ur(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Pe) {
            var u = Qf(a);
            if (u !== null) {
              e.blockedOn = u, md(e.priority, function() {
                Vv(a);
              });
              return;
            }
          } else if (i === W) {
            var s = a.stateNode;
            if (on(s)) {
              e.blockedOn = js(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Yv(e) {
      for (var t = Yo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < fi.length && vd(t, fi[i].priority); i++)
        ;
      fi.splice(i, 0, a), i === 0 && yd(a);
    }
    function Sc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Fl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ro(s), u.target.dispatchEvent(s), Zm();
        } else {
          var f = $u(i);
          return f !== null && Po(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Io(e, t, a) {
      Sc(e) && a.delete(t);
    }
    function gd() {
      gc = !1, Ba !== null && Sc(Ba) && (Ba = null), Ut !== null && Sc(Ut) && (Ut = null), Cn !== null && Sc(Cn) && (Cn = null), la.forEach(Io), Lu.forEach(Io);
    }
    function Wn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, gc || (gc = !0, D.unstable_scheduleCallback(D.unstable_NormalPriority, gd)));
    }
    function Ge(e) {
      if (Ou.length > 0) {
        Wn(Ou[0], e);
        for (var t = 1; t < Ou.length; t++) {
          var a = Ou[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ba !== null && Wn(Ba, e), Ut !== null && Wn(Ut, e), Cn !== null && Wn(Cn, e);
      var i = function(p) {
        return Wn(p, e);
      };
      la.forEach(i), Lu.forEach(i);
      for (var u = 0; u < fi.length; u++) {
        var s = fi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; fi.length > 0; ) {
        var f = fi[0];
        if (f.blockedOn !== null)
          break;
        yd(f), f.blockedOn === null && fi.shift();
      }
    }
    var Vt = C.ReactCurrentBatchConfig, $t = !0;
    function En(e) {
      $t = !!e;
    }
    function Vr() {
      return $t;
    }
    function Nu(e, t, a) {
      var i = tr(t), u;
      switch (i) {
        case Qn:
          u = sn;
          break;
        case On:
          u = Qo;
          break;
        case ci:
        default:
          u = di;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function sn(e, t, a, i) {
      var u = ia(), s = Vt.transition;
      Vt.transition = null;
      try {
        un(Qn), di(e, t, a, i);
      } finally {
        un(u), Vt.transition = s;
      }
    }
    function Qo(e, t, a, i) {
      var u = ia(), s = Vt.transition;
      Vt.transition = null;
      try {
        un(On), di(e, t, a, i);
      } finally {
        un(u), Vt.transition = s;
      }
    }
    function di(e, t, a, i) {
      !$t || Cc(e, t, a, i);
    }
    function Cc(e, t, a, i) {
      var u = Fl(e, t, a, i);
      if (u === null) {
        ky(e, t, i, zu, a), Pv(e, i);
        return;
      }
      if ($v(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Pv(e, i), t & Sl && Bv(e)) {
        for (; u !== null; ) {
          var s = $u(u);
          s !== null && _u(s);
          var f = Fl(e, t, a, i);
          if (f === null && ky(e, t, i, zu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      ky(e, t, i, null, a);
    }
    var zu = null;
    function Fl(e, t, a, i) {
      zu = null;
      var u = Us(i), s = Jo(u);
      if (s !== null) {
        var f = Ur(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Pe) {
            var v = Qf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === W) {
            var m = f.stateNode;
            if (on(m))
              return js(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return zu = s, null;
    }
    function tr(e) {
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
          return Qn;
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
          return On;
        case "message": {
          var t = Xf();
          switch (t) {
            case Ys:
              return Qn;
            case Fr:
              return On;
            case Va:
            case Is:
              return ci;
            case ji:
              return Vo;
            default:
              return ci;
          }
        }
        default:
          return ci;
      }
    }
    function Sd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Uu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function pi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ec(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Hl = null, $a = null, Xi = null;
    function Ki(e) {
      return Hl = e, $a = Rc(), !0;
    }
    function Tc() {
      Hl = null, $a = null, Xi = null;
    }
    function Au() {
      if (Xi)
        return Xi;
      var e, t = $a, a = t.length, i, u = Rc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Xi = u.slice(e, p), Xi;
    }
    function Rc() {
      return "value" in Hl ? Hl.value : Hl.textContent;
    }
    function Vl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function jl() {
      return !0;
    }
    function Xn() {
      return !1;
    }
    function en(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (!!e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = jl : this.isDefaultPrevented = Xn, this.isPropagationStopped = Xn, this;
      }
      return Qe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          !a || (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = jl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          !a || (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = jl);
        },
        persist: function() {
        },
        isPersistent: jl
      }), t;
    }
    var Kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, qn = en(Kn), Fu = Qe({}, Kn, {
      view: 0,
      detail: 0
    }), Cd = en(Fu), Go, Ed, ua;
    function Iv(e) {
      e !== ua && (ua && e.type === "mousemove" ? (Go = e.screenX - ua.screenX, Ed = e.screenY - ua.screenY) : (Go = 0, Ed = 0), ua = e);
    }
    var Hu = Qe({}, Fu, {
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
      getModifierState: Dc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Iv(e), Go);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ed;
      }
    }), qi = en(Hu), Td = Qe({}, Hu, {
      dataTransfer: 0
    }), Bl = en(Td), Qv = Qe({}, Fu, {
      relatedTarget: 0
    }), xc = en(Qv), Rd = Qe({}, Kn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), wc = en(Rd), sy = Qe({}, Kn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cy = en(sy), Gv = Qe({}, Kn, {
      data: 0
    }), xd = en(Gv), Pl = xd, fy = {
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
      MozPrintableKey: "Unidentified"
    }, Vu = {
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
      224: "Meta"
    };
    function Wv(e) {
      if (e.key) {
        var t = fy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Vl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vu[e.keyCode] || "Unidentified" : "";
    }
    var Yt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function dy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Yt[e];
      return i ? !!a[i] : !1;
    }
    function Dc(e) {
      return dy;
    }
    var py = Qe({}, Fu, {
      key: Wv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Dc,
      charCode: function(e) {
        return e.type === "keypress" ? Vl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vy = en(py), Xv = Qe({}, Hu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), wd = en(Xv), hy = Qe({}, Fu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Dc
    }), oa = en(hy), Dd = Qe({}, Kn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), my = en(Dd), Zi = Qe({}, Hu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), bc = en(Zi), $l = [9, 13, 27, 32], Wo = 229, Xo = pn && "CompositionEvent" in window, Yl = null;
    pn && "documentMode" in document && (Yl = document.documentMode);
    var yy = pn && "TextEvent" in window && !Yl, kc = pn && (!Xo || Yl && Yl > 8 && Yl <= 11), Kv = 32, bd = String.fromCharCode(Kv);
    function qv() {
      dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ko = !1;
    function _c(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    function Zv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function kd(e, t) {
      return e === "keydown" && t.keyCode === Wo;
    }
    function Jv(e, t) {
      switch (e) {
        case "keyup":
          return $l.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Wo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function _d(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Oc(e) {
      return e.locale === "ko";
    }
    var vi = !1;
    function Od(e, t, a, i, u) {
      var s, f;
      if (Xo ? s = Zv(t) : vi ? Jv(t, i) && (s = "onCompositionEnd") : kd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      kc && !Oc(i) && (!vi && s === "onCompositionStart" ? vi = Ki(u) : s === "onCompositionEnd" && vi && (f = Au()));
      var p = ah(a, s);
      if (p.length > 0) {
        var v = new xd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = _d(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Lc(e, t) {
      switch (e) {
        case "compositionend":
          return _d(t);
        case "keypress":
          var a = t.which;
          return a !== Kv ? null : (Ko = !0, bd);
        case "textInput":
          var i = t.data;
          return i === bd && Ko ? null : i;
        default:
          return null;
      }
    }
    function eh(e, t) {
      if (vi) {
        if (e === "compositionend" || !Xo && Jv(e, t)) {
          var a = Au();
          return Tc(), vi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!_c(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return kc && !Oc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function gy(e, t, a, i, u) {
      var s;
      if (yy ? s = Lc(t, i) : s = eh(t, i), !s)
        return null;
      var f = ah(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Pl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Mc(e, t, a, i, u, s, f) {
      Od(e, t, a, i, u), gy(e, t, a, i, u);
    }
    var Sy = {
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
      week: !0
    };
    function ju(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Sy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Cy(e) {
      if (!pn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Nc() {
      dr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      As(i);
      var u = ah(t, "onChange");
      if (u.length > 0) {
        var s = new qn("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, Us(e)), Hf(d, t);
    }
    function d(e) {
      N0(e, 0);
    }
    function h(e) {
      var t = Vc(e);
      if (jp(t))
        return e;
    }
    function S(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    pn && (T = Cy("input") && (!document.documentMode || document.documentMode > 9));
    function z(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", P);
    }
    function j() {
      !r || (r.detachEvent("onpropertychange", P), r = null, l = null);
    }
    function P(e) {
      e.propertyName === "value" && h(l) && c(e);
    }
    function V(e, t, a) {
      e === "focusin" ? (j(), z(t, a)) : e === "focusout" && j();
    }
    function ee(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(l);
    }
    function ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function pe(e, t) {
      if (e === "click")
        return h(t);
    }
    function Wt(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function k(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Mi(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? Vc(a) : window, v, m;
      if (o(p) ? v = S : ju(p) ? T ? v = Wt : (v = ee, m = V) : ce(p) && (v = pe), v) {
        var y = v(t, a);
        if (y) {
          n(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && k(p);
    }
    function L() {
      Qr("onMouseEnter", ["mouseout", "mouseover"]), Qr("onMouseLeave", ["mouseout", "mouseover"]), Qr("onPointerEnter", ["pointerout", "pointerover"]), Qr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function I(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !yv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (Jo(m) || Yd(m)))
          return;
      }
      if (!(!v && !p)) {
        var y;
        if (u.window === u)
          y = u;
        else {
          var w = u.ownerDocument;
          w ? y = w.defaultView || w.parentWindow : y = window;
        }
        var R, M;
        if (v) {
          var N = i.relatedTarget || i.toElement;
          if (R = a, M = N ? Jo(N) : null, M !== null) {
            var U = Ur(M);
            (M !== U || M.tag !== se && M.tag !== Ue) && (M = null);
          }
        } else
          R = null, M = a;
        if (R !== M) {
          var re = qi, Ce = "onMouseLeave", me = "onMouseEnter", Je = "mouse";
          (t === "pointerout" || t === "pointerover") && (re = wd, Ce = "onPointerLeave", me = "onPointerEnter", Je = "pointer");
          var We = R == null ? y : Vc(R), _ = M == null ? y : Vc(M), A = new re(Ce, Je + "leave", R, i, u);
          A.target = We, A.relatedTarget = _;
          var O = null, $ = Jo(u);
          if ($ === a) {
            var ae = new re(me, Je + "enter", M, i, u);
            ae.target = _, ae.relatedTarget = We, O = ae;
          }
          jT(e, A, O, R, M);
        }
      }
    }
    function he(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var fe = typeof Object.is == "function" ? Object.is : he;
    function ye(e, t) {
      if (fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Bn.call(t, s) || !fe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function _e(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Tn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function tt(e, t) {
      for (var a = _e(e), i = 0, u = 0; a; ) {
        if (a.nodeType === ti) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = _e(Tn(a));
      }
    }
    function Ji(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ey(e, u, s, f, p);
    }
    function Ey(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, w = null;
      e:
        for (; ; ) {
          for (var R = null; y === t && (a === 0 || y.nodeType === ti) && (f = s + a), y === i && (u === 0 || y.nodeType === ti) && (p = s + u), y.nodeType === ti && (s += y.nodeValue.length), (R = y.firstChild) !== null; )
            w = y, y = R;
          for (; ; ) {
            if (y === e)
              break e;
            if (w === t && ++v === a && (f = s), w === i && ++m === u && (p = s), (R = y.nextSibling) !== null)
              break;
            y = w, w = y.parentNode;
          }
          y = R;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function ET(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (!!i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = tt(e, f), y = tt(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var w = a.createRange();
          w.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(w), u.extend(y.node, y.offset)) : (w.setEnd(y.node, y.offset), u.addRange(w));
        }
      }
    }
    function E0(e) {
      return e && e.nodeType === ti;
    }
    function T0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : E0(e) ? !1 : E0(t) ? T0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function TT(e) {
      return e && e.ownerDocument && T0(e.ownerDocument.documentElement, e);
    }
    function RT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function R0() {
      for (var e = window, t = Ts(); t instanceof e.HTMLIFrameElement; ) {
        if (RT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ts(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function xT() {
      var e = R0();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? DT(e) : null
      };
    }
    function wT(e) {
      var t = R0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && TT(a)) {
        i !== null && Ty(a) && bT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === vr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function DT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ji(e), t || {
        start: 0,
        end: 0
      };
    }
    function bT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : ET(e, t);
    }
    var kT = pn && "documentMode" in document && document.documentMode <= 11;
    function _T() {
      dr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var zc = null, Ry = null, Ld = null, xy = !1;
    function OT(e) {
      if ("selectionStart" in e && Ty(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function LT(e) {
      return e.window === e ? e.document : e.nodeType === xa ? e : e.ownerDocument;
    }
    function x0(e, t, a) {
      var i = LT(a);
      if (!(xy || zc == null || zc !== Ts(i))) {
        var u = OT(zc);
        if (!Ld || !ye(Ld, u)) {
          Ld = u;
          var s = ah(Ry, "onSelect");
          if (s.length > 0) {
            var f = new qn("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = zc;
          }
        }
      }
    }
    function MT(e, t, a, i, u, s, f) {
      var p = a ? Vc(a) : window;
      switch (t) {
        case "focusin":
          (ju(p) || p.contentEditable === "true") && (zc = p, Ry = a, Ld = null);
          break;
        case "focusout":
          zc = null, Ry = null, Ld = null;
          break;
        case "mousedown":
          xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xy = !1, x0(e, i, u);
          break;
        case "selectionchange":
          if (kT)
            break;
        case "keydown":
        case "keyup":
          x0(e, i, u);
      }
    }
    function th(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Uc = {
      animationend: th("Animation", "AnimationEnd"),
      animationiteration: th("Animation", "AnimationIteration"),
      animationstart: th("Animation", "AnimationStart"),
      transitionend: th("Transition", "TransitionEnd")
    }, wy = {}, w0 = {};
    pn && (w0 = document.createElement("div").style, "AnimationEvent" in window || (delete Uc.animationend.animation, delete Uc.animationiteration.animation, delete Uc.animationstart.animation), "TransitionEvent" in window || delete Uc.transitionend.transition);
    function nh(e) {
      if (wy[e])
        return wy[e];
      if (!Uc[e])
        return e;
      var t = Uc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in w0)
          return wy[e] = t[a];
      return e;
    }
    var D0 = nh("animationend"), b0 = nh("animationiteration"), k0 = nh("animationstart"), _0 = nh("transitionend"), O0 = /* @__PURE__ */ new Map(), L0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      O0.set(e, t), dr(t, [e]);
    }
    function NT() {
      for (var e = 0; e < L0.length; e++) {
        var t = L0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + i);
      }
      Bu(D0, "onAnimationEnd"), Bu(b0, "onAnimationIteration"), Bu(k0, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(_0, "onTransitionEnd");
    }
    function zT(e, t, a, i, u, s, f) {
      var p = O0.get(t);
      if (p !== void 0) {
        var v = qn, m = t;
        switch (t) {
          case "keypress":
            if (Vl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = vy;
            break;
          case "focusin":
            m = "focus", v = xc;
            break;
          case "focusout":
            m = "blur", v = xc;
            break;
          case "beforeblur":
          case "afterblur":
            v = xc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = qi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Bl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = oa;
            break;
          case D0:
          case b0:
          case k0:
            v = wc;
            break;
          case _0:
            v = my;
            break;
          case "scroll":
            v = Cd;
            break;
          case "wheel":
            v = bc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = wd;
            break;
        }
        var y = (s & Sl) !== 0;
        {
          var w = !y && t === "scroll", R = HT(a, p, i.type, y, w);
          if (R.length > 0) {
            var M = new v(p, m, null, i, u);
            e.push({
              event: M,
              listeners: R
            });
          }
        }
      }
    }
    NT(), L(), Nc(), _T(), qv();
    function UT(e, t, a, i, u, s, f) {
      zT(e, t, a, i, u, s);
      var p = (s & qm) === 0;
      p && (I(e, t, a, i, u), x(e, t, a, i, u), MT(e, t, a, i, u), Mc(e, t, a, i, u));
    }
    var Md = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Dy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Md));
    function M0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ii(i, t, void 0, e), e.currentTarget = null;
    }
    function AT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          M0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], w = y.instance, R = y.currentTarget, M = y.listener;
          if (w !== i && e.isPropagationStopped())
            return;
          M0(e, M, R), i = w;
        }
    }
    function N0(e, t) {
      for (var a = (t & Sl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        AT(s, f, a);
      }
      Pf();
    }
    function FT(e, t, a, i, u) {
      var s = Us(a), f = [];
      UT(f, e, i, a, s, t), N0(f, t);
    }
    function jt(e, t) {
      Dy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = px(t), u = BT(e, a);
      i.has(u) || (z0(t, e, Eo, a), i.add(u));
    }
    function by(e, t, a) {
      Dy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Sl), z0(a, e, i, t);
    }
    var rh = "_reactListening" + Math.random().toString(36).slice(2);
    function Nd(e) {
      if (!e[rh]) {
        e[rh] = !0, jn.forEach(function(a) {
          a !== "selectionchange" && (Dy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === xa ? e : e.ownerDocument;
        t !== null && (t[rh] || (t[rh] = !0, by("selectionchange", !1, t)));
      }
    }
    function z0(e, t, a, i, u) {
      var s = Nu(e, t, a), f = void 0;
      Do && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? pi(e, t, s, f) : Uu(e, t, s) : f !== void 0 ? Ec(e, t, s, f) : Sd(e, t, s);
    }
    function U0(e, t) {
      return e === t || e.nodeType === Zt && e.parentNode === t;
    }
    function ky(e, t, a, i, u) {
      var s = i;
      if ((t & ri) === 0 && (t & Eo) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === W || v === ve) {
                var m = p.stateNode.containerInfo;
                if (U0(m, f))
                  break;
                if (v === ve)
                  for (var y = p.return; y !== null; ) {
                    var w = y.tag;
                    if (w === W || w === ve) {
                      var R = y.stateNode.containerInfo;
                      if (U0(R, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var M = Jo(m);
                  if (M === null)
                    return;
                  var N = M.tag;
                  if (N === se || N === Ue) {
                    p = s = M;
                    continue e;
                  }
                  m = m.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      Hf(function() {
        return FT(e, t, a, s);
      });
    }
    function zd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function HT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var w = m, R = w.stateNode, M = w.tag;
        if (M === se && R !== null && (y = R, p !== null)) {
          var N = El(m, p);
          N != null && v.push(zd(m, N, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function ah(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === se && f !== null) {
          var v = f, m = El(u, a);
          m != null && i.unshift(zd(u, m, v));
          var y = El(u, t);
          y != null && i.push(zd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function Ac(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== se);
      return e || null;
    }
    function VT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Ac(s))
        u++;
      for (var f = 0, p = i; p; p = Ac(p))
        f++;
      for (; u - f > 0; )
        a = Ac(a), u--;
      for (; f - u > 0; )
        i = Ac(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ac(a), i = Ac(i);
      }
      return null;
    }
    function A0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, w = v.tag;
        if (m !== null && m === i)
          break;
        if (w === se && y !== null) {
          var R = y;
          if (u) {
            var M = El(p, s);
            M != null && f.unshift(zd(p, M, R));
          } else if (!u) {
            var N = El(p, s);
            N != null && f.push(zd(p, N, R));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function jT(e, t, a, i, u) {
      var s = i && u ? VT(i, u) : null;
      i !== null && A0(e, t, i, s, !1), u !== null && a !== null && A0(e, a, u, s, !0);
    }
    function BT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var sa = !1, Ud = "dangerouslySetInnerHTML", ih = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", F0 = "autoFocus", qo = "children", Zo = "style", lh = "__html", _y, uh, Ad, H0, oh, V0, j0;
    _y = {
      dialog: !0,
      webview: !0
    }, uh = function(e, t) {
      zs(e, t), Nf(e, t), mv(e, t, {
        registrationNameDependencies: fr,
        possibleRegistrationNames: Na
      });
    }, V0 = pn && !document.documentMode, Ad = function(e, t, a) {
      if (!sa) {
        var i = sh(a), u = sh(t);
        u !== i && (sa = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, H0 = function(e) {
      if (!sa) {
        sa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, oh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, j0 = function(e, t) {
      var a = e.namespaceURI === ei ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var PT = /\r\n?/g, $T = /\u0000|\uFFFD/g;
    function sh(e) {
      ya(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(PT, `
`).replace($T, "");
    }
    function ch(e, t, a, i) {
      var u = sh(t), s = sh(e);
      if (s !== u && (i && (sa || (sa = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Zn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function B0(e) {
      return e.nodeType === xa ? e : e.ownerDocument;
    }
    function YT() {
    }
    function fh(e) {
      e.onclick = YT;
    }
    function IT(e, t, a, i, u) {
      for (var s in i)
        if (!!i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zo)
            f && Object.freeze(f), lv(t, f);
          else if (s === Ud) {
            var p = f ? f[lh] : void 0;
            p != null && Xp(t, p);
          } else if (s === qo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Os(t, f);
            } else
              typeof f == "number" && Os(t, "" + f);
          else
            s === ih || s === Pu || s === F0 || (fr.hasOwnProperty(s) ? f != null && (typeof f != "function" && oh(s, f), s === "onScroll" && jt("scroll", t)) : f != null && Aa(t, s, f, u));
        }
    }
    function QT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Zo ? lv(e, f) : s === Ud ? Xp(e, f) : s === qo ? Os(e, f) : Aa(e, s, f, i);
      }
    }
    function GT(e, t, a, i) {
      var u, s = B0(a), f, p = i;
      if (p === ei && (p = ks(e)), p === ei) {
        if (u = ni(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var y = f;
          t.multiple ? y.multiple = !0 : t.size && (y.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === ei && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Bn.call(_y, e) && (_y[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function WT(e, t) {
      return B0(t).createTextNode(e);
    }
    function XT(e, t, a, i) {
      var u = ni(t, a);
      uh(t, a);
      var s;
      switch (t) {
        case "dialog":
          jt("cancel", e), jt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          jt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Md.length; f++)
            jt(Md[f], e);
          s = a;
          break;
        case "source":
          jt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          jt("error", e), jt("load", e), s = a;
          break;
        case "details":
          jt("toggle", e), s = a;
          break;
        case "input":
          ho(e, a), s = vo(e, a), jt("invalid", e);
          break;
        case "option":
          Ds(e, a), s = a;
          break;
        case "select":
          Ip(e, a), s = Tf(e, a), jt("invalid", e);
          break;
        case "textarea":
          Qp(e, a), s = xf(e, a), jt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ms(t, s), IT(t, e, i, s, u), t) {
        case "input":
          ml(e), mo(e, a, !1);
          break;
        case "textarea":
          ml(e), Wp(e);
          break;
        case "option":
          Ef(e, a);
          break;
        case "select":
          jm(e, a);
          break;
        default:
          typeof s.onClick == "function" && fh(e);
          break;
      }
    }
    function KT(e, t, a, i, u) {
      uh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = vo(e, a), p = vo(e, i), s = [];
          break;
        case "select":
          f = Tf(e, a), p = Tf(e, i), s = [];
          break;
        case "textarea":
          f = xf(e, a), p = xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && fh(e);
          break;
      }
      Ms(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Zo) {
            var w = f[v];
            for (m in w)
              w.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else
            v === Ud || v === qo || v === ih || v === Pu || v === F0 || (fr.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var R = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || R === M || R == null && M == null))
          if (v === Zo)
            if (R && Object.freeze(R), M) {
              for (m in M)
                M.hasOwnProperty(m) && (!R || !R.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in R)
                R.hasOwnProperty(m) && M[m] !== R[m] && (y || (y = {}), y[m] = R[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = R;
          else if (v === Ud) {
            var N = R ? R[lh] : void 0, U = M ? M[lh] : void 0;
            N != null && U !== N && (s = s || []).push(v, N);
          } else
            v === qo ? (typeof R == "string" || typeof R == "number") && (s = s || []).push(v, "" + R) : v === ih || v === Pu || (fr.hasOwnProperty(v) ? (R != null && (typeof R != "function" && oh(v, R), v === "onScroll" && jt("scroll", e)), !s && M !== R && (s = [])) : (s = s || []).push(v, R));
      }
      return y && (So(y, p[Zo]), (s = s || []).push(Zo, y)), s;
    }
    function qT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Cf(e, u);
      var s = ni(a, i), f = ni(a, u);
      switch (QT(e, t, s, f), a) {
        case "input":
          cu(e, u);
          break;
        case "textarea":
          Gp(e, u);
          break;
        case "select":
          Bm(e, u);
          break;
      }
    }
    function ZT(e) {
      {
        var t = e.toLowerCase();
        return Ns.hasOwnProperty(t) && Ns[t] || null;
      }
    }
    function JT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ni(t, a), uh(t, a), t) {
        case "dialog":
          jt("cancel", e), jt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          jt("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Md.length; m++)
            jt(Md[m], e);
          break;
        case "source":
          jt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          jt("error", e), jt("load", e);
          break;
        case "details":
          jt("toggle", e);
          break;
        case "input":
          ho(e, a), jt("invalid", e);
          break;
        case "option":
          Ds(e, a);
          break;
        case "select":
          Ip(e, a), jt("invalid", e);
          break;
        case "textarea":
          Qp(e, a), jt("invalid", e);
          break;
      }
      Ms(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var y = e.attributes, w = 0; w < y.length; w++) {
          var R = y[w].name.toLowerCase();
          switch (R) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(y[w].name);
          }
        }
      }
      var M = null;
      for (var N in a)
        if (!!a.hasOwnProperty(N)) {
          var U = a[N];
          if (N === qo)
            typeof U == "string" ? e.textContent !== U && (a[Pu] !== !0 && ch(e.textContent, U, s, f), M = [qo, U]) : typeof U == "number" && e.textContent !== "" + U && (a[Pu] !== !0 && ch(e.textContent, U, s, f), M = [qo, "" + U]);
          else if (fr.hasOwnProperty(N))
            U != null && (typeof U != "function" && oh(N, U), N === "onScroll" && jt("scroll", e));
          else if (f && !0 && typeof p == "boolean") {
            var re = void 0, Ce = p && Dn ? null : Lr(N);
            if (a[Pu] !== !0) {
              if (!(N === ih || N === Pu || N === "value" || N === "checked" || N === "selected")) {
                if (N === Ud) {
                  var me = e.innerHTML, Je = U ? U[lh] : void 0;
                  if (Je != null) {
                    var We = j0(e, Je);
                    We !== me && Ad(N, me, We);
                  }
                } else if (N === Zo) {
                  if (v.delete(N), V0) {
                    var _ = Xm(U);
                    re = e.getAttribute("style"), _ !== re && Ad(N, re, _);
                  }
                } else if (p && !Dn)
                  v.delete(N.toLowerCase()), re = lu(e, N, U), U !== re && Ad(N, re, U);
                else if (!Qt(N, Ce, p) && !Rt(N, U, Ce, p)) {
                  var A = !1;
                  if (Ce !== null)
                    v.delete(Ce.attributeName), re = pl(e, N, U, Ce);
                  else {
                    var O = i;
                    if (O === ei && (O = ks(t)), O === ei)
                      v.delete(N.toLowerCase());
                    else {
                      var $ = ZT(N);
                      $ !== null && $ !== N && (A = !0, v.delete($)), v.delete(N);
                    }
                    re = lu(e, N, U);
                  }
                  var ae = Dn;
                  !ae && U !== re && !A && Ad(N, re, U);
                }
              }
            }
          }
        }
      switch (f && v.size > 0 && a[Pu] !== !0 && H0(v), t) {
        case "input":
          ml(e), mo(e, a, !0);
          break;
        case "textarea":
          ml(e), Wp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && fh(e);
          break;
      }
      return M;
    }
    function eR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Oy(e, t) {
      {
        if (sa)
          return;
        sa = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (sa)
          return;
        sa = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (sa)
          return;
        sa = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (t === "" || sa)
          return;
        sa = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function tR(e, t, a) {
      switch (t) {
        case "input":
          Bp(e, a);
          return;
        case "textarea":
          wf(e, a);
          return;
        case "select":
          Pm(e, a);
          return;
      }
    }
    var Fd = function() {
    }, Hd = function() {
    };
    {
      var nR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], P0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        "foreignObject",
        "desc",
        "title"
      ], rR = P0.concat(["button"]), aR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], $0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Hd = function(e, t) {
        var a = Qe({}, e || $0), i = {
          tag: t
        };
        return P0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), rR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), nR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var iR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return aR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, lR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, Y0 = {};
      Fd = function(e, t, a) {
        a = a || $0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = iR(e, u) ? null : i, f = s ? null : lR(e, a), p = s || f;
        if (!!p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!Y0[m]) {
            Y0[m] = !0;
            var y = e, w = "";
            if (e === "#text" ? /\S/.test(t) ? y = "Text nodes" : (y = "Whitespace text nodes", w = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : y = "<" + e + ">", s) {
              var R = "";
              v === "table" && e === "tr" && (R += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", y, v, w, R);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", y, v);
          }
        }
      };
    }
    var dh = "suppressHydrationWarning", ph = "$", vh = "/$", Vd = "$?", jd = "$!", uR = "style", zy = null, Uy = null;
    function oR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case xa:
        case yl: {
          t = i === xa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : bf(null, "");
          break;
        }
        default: {
          var s = i === Zt ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = bf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Hd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function sR(e, t, a) {
      {
        var i = e, u = bf(i.namespace, t), s = Hd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Qk(e) {
      return e;
    }
    function cR(e) {
      zy = Vr(), Uy = xT();
      var t = null;
      return En(!1), t;
    }
    function fR(e) {
      wT(Uy), En(zy), zy = null, Uy = null;
    }
    function dR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Fd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Hd(f.ancestorInfo, e);
          Fd(null, p, v);
        }
        s = f.namespace;
      }
      var m = GT(e, t, a, s);
      return $d(u, m), $y(m, t), m;
    }
    function pR(e, t) {
      e.appendChild(t);
    }
    function vR(e, t, a, i, u) {
      switch (XT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function hR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Hd(f.ancestorInfo, t);
          Fd(null, p, v);
        }
      }
      return KT(e, t, a, i);
    }
    function Ay(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function mR(e, t, a, i) {
      {
        var u = a;
        Fd(null, e, u.ancestorInfo);
      }
      var s = WT(e, t);
      return $d(i, s), s;
    }
    function yR() {
      var e = window.event;
      return e === void 0 ? ci : tr(e.type);
    }
    var Fy = typeof setTimeout == "function" ? setTimeout : void 0, gR = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, I0 = typeof Promise == "function" ? Promise : void 0, SR = typeof queueMicrotask == "function" ? queueMicrotask : typeof I0 < "u" ? function(e) {
      return I0.resolve(null).then(e).catch(CR);
    } : Fy;
    function CR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ER(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function TR(e, t, a, i, u, s) {
      qT(e, t, a, i, u), $y(e, u);
    }
    function Q0(e) {
      Os(e, "");
    }
    function RR(e, t, a) {
      e.nodeValue = a;
    }
    function xR(e, t) {
      e.appendChild(t);
    }
    function wR(e, t) {
      var a;
      e.nodeType === Zt ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && fh(a);
    }
    function DR(e, t, a) {
      e.insertBefore(t, a);
    }
    function bR(e, t, a) {
      e.nodeType === Zt ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function kR(e, t) {
      e.removeChild(t);
    }
    function _R(e, t) {
      e.nodeType === Zt ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Vy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Zt) {
          var s = u.data;
          if (s === vh)
            if (i === 0) {
              e.removeChild(u), Ge(t);
              return;
            } else
              i--;
          else
            (s === ph || s === Vd || s === jd) && i++;
        }
        a = u;
      } while (a);
      Ge(t);
    }
    function OR(e, t) {
      e.nodeType === Zt ? Vy(e.parentNode, t) : e.nodeType === vr && Vy(e, t), Ge(e);
    }
    function LR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function MR(e) {
      e.nodeValue = "";
    }
    function NR(e, t) {
      e = e;
      var a = t[uR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ls("display", i);
    }
    function zR(e, t) {
      e.nodeValue = t;
    }
    function UR(e) {
      e.nodeType === vr ? e.textContent = "" : e.nodeType === xa && e.documentElement && e.removeChild(e.documentElement);
    }
    function AR(e, t, a) {
      return e.nodeType !== vr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function FR(e, t) {
      return t === "" || e.nodeType !== ti ? null : e;
    }
    function HR(e) {
      return e.nodeType !== Zt ? null : e;
    }
    function G0(e) {
      return e.data === Vd;
    }
    function jy(e) {
      return e.data === jd;
    }
    function VR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function jR(e, t) {
      e._reactRetry = t;
    }
    function hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === vr || t === ti)
          break;
        if (t === Zt) {
          var a = e.data;
          if (a === ph || a === jd || a === Vd)
            break;
          if (a === vh)
            return null;
        }
      }
      return e;
    }
    function Bd(e) {
      return hh(e.nextSibling);
    }
    function BR(e) {
      return hh(e.firstChild);
    }
    function PR(e) {
      return hh(e.firstChild);
    }
    function $R(e) {
      return hh(e.nextSibling);
    }
    function YR(e, t, a, i, u, s, f) {
      $d(s, e), $y(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & Ye) !== Re;
      return JT(e, t, a, p, i, m, f);
    }
    function IR(e, t, a, i) {
      return $d(a, e), a.mode & Ye, eR(e, t);
    }
    function QR(e, t) {
      $d(t, e);
    }
    function GR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Zt) {
          var i = t.data;
          if (i === vh) {
            if (a === 0)
              return Bd(t);
            a--;
          } else
            (i === ph || i === jd || i === Vd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function W0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Zt) {
          var i = t.data;
          if (i === ph || i === jd || i === Vd) {
            if (a === 0)
              return t;
            a--;
          } else
            i === vh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function WR(e) {
      Ge(e);
    }
    function XR(e) {
      Ge(e);
    }
    function KR(e) {
      return e !== "head" && e !== "body";
    }
    function qR(e, t, a, i) {
      var u = !0;
      ch(t.nodeValue, a, i, u);
    }
    function ZR(e, t, a, i, u, s) {
      if (t[dh] !== !0) {
        var f = !0;
        ch(i.nodeValue, u, s, f);
      }
    }
    function JR(e, t) {
      t.nodeType === vr ? Oy(e, t) : t.nodeType === Zt || Ly(e, t);
    }
    function ex(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === vr ? Oy(a, t) : t.nodeType === Zt || Ly(a, t));
      }
    }
    function tx(e, t, a, i, u) {
      (u || t[dh] !== !0) && (i.nodeType === vr ? Oy(a, i) : i.nodeType === Zt || Ly(a, i));
    }
    function nx(e, t, a) {
      My(e, t);
    }
    function rx(e, t) {
      Ny(e, t);
    }
    function ax(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function ix(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ny(a, t);
      }
    }
    function lx(e, t, a, i, u, s) {
      (s || t[dh] !== !0) && My(a, i);
    }
    function ux(e, t, a, i, u) {
      (u || t[dh] !== !0) && Ny(a, i);
    }
    function ox(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function sx(e) {
      Nd(e);
    }
    var Fc = Math.random().toString(36).slice(2), Hc = "__reactFiber$" + Fc, By = "__reactProps$" + Fc, Pd = "__reactContainer$" + Fc, Py = "__reactEvents$" + Fc, cx = "__reactListeners$" + Fc, fx = "__reactHandles$" + Fc;
    function dx(e) {
      delete e[Hc], delete e[By], delete e[Py], delete e[cx], delete e[fx];
    }
    function $d(e, t) {
      t[Hc] = e;
    }
    function mh(e, t) {
      t[Pd] = e;
    }
    function X0(e) {
      e[Pd] = null;
    }
    function Yd(e) {
      return !!e[Pd];
    }
    function Jo(e) {
      var t = e[Hc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Pd] || a[Hc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = W0(e); u !== null; ) {
              var s = u[Hc];
              if (s)
                return s;
              u = W0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function $u(e) {
      var t = e[Hc] || e[Pd];
      return t && (t.tag === se || t.tag === Ue || t.tag === Pe || t.tag === W) ? t : null;
    }
    function Vc(e) {
      if (e.tag === se || e.tag === Ue)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function yh(e) {
      return e[By] || null;
    }
    function $y(e, t) {
      e[By] = t;
    }
    function px(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var K0 = {}, q0 = C.ReactDebugCurrentFrame;
    function gh(e) {
      if (e) {
        var t = e._owner, a = uo(e.type, e._source, t ? t.type : null);
        q0.setExtraStackFrame(a);
      } else
        q0.setExtraStackFrame(null);
    }
    function hi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Bn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (gh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), gh(null)), p instanceof Error && !(p.message in K0) && (K0[p.message] = !0, gh(u), g("Failed %s type: %s", a, p.message), gh(null));
          }
      }
    }
    var Yy = [], Sh;
    Sh = [];
    var Il = -1;
    function Yu(e) {
      return {
        current: e
      };
    }
    function Rr(e, t) {
      if (Il < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Sh[Il] && g("Unexpected Fiber popped."), e.current = Yy[Il], Yy[Il] = null, Sh[Il] = null, Il--;
    }
    function xr(e, t, a) {
      Il++, Yy[Il] = e.current, Sh[Il] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var _a = {};
    Object.freeze(_a);
    var Ql = Yu(_a), el = Yu(!1), Qy = _a;
    function jc(e, t, a) {
      return a && tl(t) ? Qy : Ql.current;
    }
    function Z0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Bc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return _a;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ne(e) || "Unknown";
          hi(i, s, "context", p);
        }
        return u && Z0(e, t, s), s;
      }
    }
    function Ch() {
      return el.current;
    }
    function tl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Eh(e) {
      Rr(el, e), Rr(Ql, e);
    }
    function Gy(e) {
      Rr(el, e), Rr(Ql, e);
    }
    function J0(e, t, a) {
      {
        if (Ql.current !== _a)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        xr(Ql, t, e), xr(el, a, e);
      }
    }
    function eC(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ne(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ne(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ne(e) || "Unknown";
          hi(u, f, "child context", v);
        }
        return Qe({}, a, f);
      }
    }
    function Th(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || _a;
        return Qy = Ql.current, xr(Ql, a, e), xr(el, el.current, e), !0;
      }
    }
    function tC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = eC(e, t, Qy);
          i.__reactInternalMemoizedMergedChildContext = u, Rr(el, e), Rr(Ql, e), xr(Ql, u, e), xr(el, a, e);
        } else
          Rr(el, e), xr(el, a, e);
      }
    }
    function vx(e) {
      {
        if (!Gf(e) || e.tag !== ie)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case W:
              return t.stateNode.context;
            case ie: {
              var a = t.type;
              if (tl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Iu = 0, Rh = 1, Gl = null, Wy = !1, Xy = !1;
    function nC(e) {
      Gl === null ? Gl = [e] : Gl.push(e);
    }
    function hx(e) {
      Wy = !0, nC(e);
    }
    function rC() {
      Wy && Qu();
    }
    function Qu() {
      if (!Xy && Gl !== null) {
        Xy = !0;
        var e = 0, t = ia();
        try {
          var a = !0, i = Gl;
          for (un(Qn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Gl = null, Wy = !1;
        } catch (s) {
          throw Gl !== null && (Gl = Gl.slice(e + 1)), Ps(Ys, Qu), s;
        } finally {
          un(t), Xy = !1;
        }
      }
      return null;
    }
    var Pc = [], $c = 0, xh = null, wh = 0, Ya = [], Ia = 0, es = null, Wl = 1, Xl = "";
    function mx(e) {
      return ns(), (e.flags & Yf) !== Se;
    }
    function yx(e) {
      return ns(), wh;
    }
    function gx() {
      var e = Xl, t = Wl, a = t & ~Sx(t);
      return a.toString(32) + e;
    }
    function ts(e, t) {
      ns(), Pc[$c++] = wh, Pc[$c++] = xh, xh = e, wh = t;
    }
    function aC(e, t, a) {
      ns(), Ya[Ia++] = Wl, Ya[Ia++] = Xl, Ya[Ia++] = es, es = e;
      var i = Wl, u = Xl, s = Dh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Dh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, w = (f & y).toString(32), R = f >> m, M = s - m, N = Dh(t) + M, U = p << M, re = U | R, Ce = w + u;
        Wl = 1 << N | re, Xl = Ce;
      } else {
        var me = p << s, Je = me | f, We = u;
        Wl = 1 << v | Je, Xl = We;
      }
    }
    function Ky(e) {
      ns();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ts(e, a), aC(e, a, i);
      }
    }
    function Dh(e) {
      return 32 - Ks(e);
    }
    function Sx(e) {
      return 1 << Dh(e) - 1;
    }
    function qy(e) {
      for (; e === xh; )
        xh = Pc[--$c], Pc[$c] = null, wh = Pc[--$c], Pc[$c] = null;
      for (; e === es; )
        es = Ya[--Ia], Ya[Ia] = null, Xl = Ya[--Ia], Ya[Ia] = null, Wl = Ya[--Ia], Ya[Ia] = null;
    }
    function Cx() {
      return ns(), es !== null ? {
        id: Wl,
        overflow: Xl
      } : null;
    }
    function Ex(e, t) {
      ns(), Ya[Ia++] = Wl, Ya[Ia++] = Xl, Ya[Ia++] = es, Wl = t.id, Xl = t.overflow, es = e;
    }
    function ns() {
      rr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var nr = null, Qa = null, mi = !1, rs = !1, Gu = null;
    function Tx() {
      mi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function iC() {
      rs = !0;
    }
    function Rx() {
      return rs;
    }
    function xx(e) {
      var t = e.stateNode.containerInfo;
      return Qa = PR(t), nr = e, mi = !0, Gu = null, rs = !1, !0;
    }
    function wx(e, t, a) {
      return Qa = $R(t), nr = e, mi = !0, Gu = null, rs = !1, a !== null && Ex(e, a), !0;
    }
    function lC(e, t) {
      switch (e.tag) {
        case W: {
          JR(e.stateNode.containerInfo, t);
          break;
        }
        case se: {
          var a = (e.mode & Ye) !== Re;
          tx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            a
          );
          break;
        }
        case Pe: {
          var i = e.memoizedState;
          i.dehydrated !== null && ex(i.dehydrated, t);
          break;
        }
      }
    }
    function uC(e, t) {
      lC(e, t);
      var a = kb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ct) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (rs)
          return;
        switch (e.tag) {
          case W: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case se:
                var i = t.type;
                t.pendingProps, nx(a, i);
                break;
              case Ue:
                var u = t.pendingProps;
                rx(a, u);
                break;
            }
            break;
          }
          case se: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case se: {
                var v = t.type, m = t.pendingProps, y = (e.mode & Ye) !== Re;
                lx(
                  s,
                  f,
                  p,
                  v,
                  m,
                  y
                );
                break;
              }
              case Ue: {
                var w = t.pendingProps, R = (e.mode & Ye) !== Re;
                ux(
                  s,
                  f,
                  p,
                  w,
                  R
                );
                break;
              }
            }
            break;
          }
          case Pe: {
            var M = e.memoizedState, N = M.dehydrated;
            if (N !== null)
              switch (t.tag) {
                case se:
                  var U = t.type;
                  t.pendingProps, ax(N, U);
                  break;
                case Ue:
                  var re = t.pendingProps;
                  ix(N, re);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function oC(e, t) {
      t.flags = t.flags & ~ea | bt, Zy(e, t);
    }
    function sC(e, t) {
      switch (e.tag) {
        case se: {
          var a = e.type;
          e.pendingProps;
          var i = AR(t, a);
          return i !== null ? (e.stateNode = i, nr = e, Qa = BR(i), !0) : !1;
        }
        case Ue: {
          var u = e.pendingProps, s = FR(t, u);
          return s !== null ? (e.stateNode = s, nr = e, Qa = null, !0) : !1;
        }
        case Pe: {
          var f = HR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Cx(),
              retryLane: Er
            };
            e.memoizedState = p;
            var v = _b(f);
            return v.return = e, e.child = v, nr = e, Qa = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & Ye) !== Re && (e.flags & ke) === Se;
    }
    function eg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function tg(e) {
      if (!!mi) {
        var t = Qa;
        if (!t) {
          Jy(e) && (Zy(nr, e), eg()), oC(nr, e), mi = !1, nr = e;
          return;
        }
        var a = t;
        if (!sC(e, t)) {
          Jy(e) && (Zy(nr, e), eg()), t = Bd(a);
          var i = nr;
          if (!t || !sC(e, t)) {
            oC(nr, e), mi = !1, nr = e;
            return;
          }
          uC(i, a);
        }
      }
    }
    function Dx(e, t, a) {
      var i = e.stateNode, u = !rs, s = YR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function bx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = IR(t, a, e);
      if (i) {
        var u = nr;
        if (u !== null)
          switch (u.tag) {
            case W: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ye) !== Re;
              qR(
                s,
                t,
                a,
                f
              );
              break;
            }
            case se: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & Ye) !== Re;
              ZR(
                p,
                v,
                m,
                t,
                a,
                y
              );
              break;
            }
          }
      }
      return i;
    }
    function kx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      QR(a, e);
    }
    function _x(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return GR(a);
    }
    function cC(e) {
      for (var t = e.return; t !== null && t.tag !== se && t.tag !== W && t.tag !== Pe; )
        t = t.return;
      nr = t;
    }
    function bh(e) {
      if (e !== nr)
        return !1;
      if (!mi)
        return cC(e), mi = !0, !1;
      if (e.tag !== W && (e.tag !== se || KR(e.type) && !Ay(e.type, e.memoizedProps))) {
        var t = Qa;
        if (t)
          if (Jy(e))
            fC(e), eg();
          else
            for (; t; )
              uC(e, t), t = Bd(t);
      }
      return cC(e), e.tag === Pe ? Qa = _x(e) : Qa = nr ? Bd(e.stateNode) : null, !0;
    }
    function Ox() {
      return mi && Qa !== null;
    }
    function fC(e) {
      for (var t = Qa; t; )
        lC(e, t), t = Bd(t);
    }
    function Yc() {
      nr = null, Qa = null, mi = !1, rs = !1;
    }
    function dC() {
      Gu !== null && (l1(Gu), Gu = null);
    }
    function rr() {
      return mi;
    }
    function ng(e) {
      Gu === null ? Gu = [e] : Gu.push(e);
    }
    var Lx = C.ReactCurrentBatchConfig, Mx = null;
    function Nx() {
      return Lx.transition;
    }
    var yi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var zx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Ht && (t = a), a = a.return;
        return t;
      }, as = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Id = [], Qd = [], Gd = [], Wd = [], Xd = [], Kd = [], is = /* @__PURE__ */ new Set();
      yi.recordUnsafeLifecycleWarnings = function(e, t) {
        is.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Id.push(e), e.mode & Ht && typeof t.UNSAFE_componentWillMount == "function" && Qd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gd.push(e), e.mode & Ht && typeof t.UNSAFE_componentWillReceiveProps == "function" && Wd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Xd.push(e), e.mode & Ht && typeof t.UNSAFE_componentWillUpdate == "function" && Kd.push(e));
      }, yi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Id.length > 0 && (Id.forEach(function(R) {
          e.add(Ne(R) || "Component"), is.add(R.type);
        }), Id = []);
        var t = /* @__PURE__ */ new Set();
        Qd.length > 0 && (Qd.forEach(function(R) {
          t.add(Ne(R) || "Component"), is.add(R.type);
        }), Qd = []);
        var a = /* @__PURE__ */ new Set();
        Gd.length > 0 && (Gd.forEach(function(R) {
          a.add(Ne(R) || "Component"), is.add(R.type);
        }), Gd = []);
        var i = /* @__PURE__ */ new Set();
        Wd.length > 0 && (Wd.forEach(function(R) {
          i.add(Ne(R) || "Component"), is.add(R.type);
        }), Wd = []);
        var u = /* @__PURE__ */ new Set();
        Xd.length > 0 && (Xd.forEach(function(R) {
          u.add(Ne(R) || "Component"), is.add(R.type);
        }), Xd = []);
        var s = /* @__PURE__ */ new Set();
        if (Kd.length > 0 && (Kd.forEach(function(R) {
          s.add(Ne(R) || "Component"), is.add(R.type);
        }), Kd = []), t.size > 0) {
          var f = as(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = as(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = as(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = as(e);
          oe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = as(a);
          oe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var w = as(u);
          oe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
      };
      var kh = /* @__PURE__ */ new Map(), pC = /* @__PURE__ */ new Set();
      yi.recordLegacyContextWarning = function(e, t) {
        var a = zx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!pC.has(e.type)) {
          var i = kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], kh.set(a, i)), i.push(e));
        }
      }, yi.flushLegacyContextWarning = function() {
        kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ne(s) || "Component"), pC.add(s.type);
            });
            var u = as(i);
            try {
              mt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              rn();
            }
          }
        });
      }, yi.discardPendingWarnings = function() {
        Id = [], Qd = [], Gd = [], Wd = [], Xd = [], Kd = [], kh = /* @__PURE__ */ new Map();
      };
    }
    function gi(e, t) {
      if (e && e.defaultProps) {
        var a = Qe({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var rg = Yu(null), ag;
    ag = {};
    var _h = null, Ic = null, ig = null, Oh = !1;
    function Lh() {
      _h = null, Ic = null, ig = null, Oh = !1;
    }
    function vC() {
      Oh = !0;
    }
    function hC() {
      Oh = !1;
    }
    function mC(e, t, a) {
      xr(rg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ag && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ag;
    }
    function lg(e, t) {
      var a = rg.current;
      Rr(rg, t), e._currentValue = a;
    }
    function ug(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (zl(i.childLanes, t) ? u !== null && !zl(u.childLanes, t) && (u.childLanes = Fe(u.childLanes, t)) : (i.childLanes = Fe(i.childLanes, t), u !== null && (u.childLanes = Fe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ux(e, t, a) {
      Ax(e, t, a);
    }
    function Ax(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ie) {
                var p = ln(a), v = Kl(Tt, p);
                v.tag = Nh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, w = y.pending;
                  w === null ? v.next = v : (v.next = w.next, w.next = v), y.pending = v;
                }
              }
              i.lanes = Fe(i.lanes, a);
              var R = i.alternate;
              R !== null && (R.lanes = Fe(R.lanes, a)), ug(i.return, a, e), s.lanes = Fe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ie)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Bt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Fe(M.lanes, a);
          var N = M.alternate;
          N !== null && (N.lanes = Fe(N.lanes, a)), ug(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var U = u.sibling;
            if (U !== null) {
              U.return = u.return, u = U;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Qc(e, t) {
      _h = e, Ic = null, ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Tr(a.lanes, t) && cp(), a.firstContext = null);
      }
    }
    function Rn(e) {
      Oh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ig !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Ic === null) {
          if (_h === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ic = a, _h.dependencies = {
            lanes: F,
            firstContext: a
          };
        } else
          Ic = Ic.next = a;
      }
      return t;
    }
    var ls = null;
    function og(e) {
      ls === null ? ls = [e] : ls.push(e);
    }
    function Fx() {
      if (ls !== null) {
        for (var e = 0; e < ls.length; e++) {
          var t = ls[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ls = null;
      }
    }
    function yC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Mh(e, i);
    }
    function Hx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Vx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Mh(e, i);
    }
    function ca(e, t) {
      return Mh(e, t);
    }
    var jx = Mh;
    function Mh(e, t) {
      e.lanes = Fe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Fe(a.lanes, t)), a === null && (e.flags & (bt | ea)) !== Se && g1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Fe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Fe(a.childLanes, t) : (u.flags & (bt | ea)) !== Se && g1(e), i = u, u = u.return;
      if (i.tag === W) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var gC = 0, SC = 1, Nh = 2, sg = 3, zh = !1, cg, Uh;
    cg = !1, Uh = null;
    function fg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: F
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function CC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Kl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: gC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Wu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Uh === u && !cg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), cg = !0), jD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, jx(e, a);
      } else
        return Vx(e, u, t, a);
    }
    function Ah(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (ld(a)) {
          var s = u.lanes;
          s = od(s, e.pendingLanes);
          var f = Fe(s, a);
          u.lanes = f, ku(e, f);
        }
      }
    }
    function dg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var y = a.lastBaseUpdate;
      y === null ? a.firstBaseUpdate = t : y.next = t, a.lastBaseUpdate = t;
    }
    function Bx(e, t, a, i, u, s) {
      switch (a.tag) {
        case SC: {
          var f = a.payload;
          if (typeof f == "function") {
            vC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Ht) {
                an(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  an(!1);
                }
              }
              hC();
            }
            return p;
          }
          return f;
        }
        case sg:
          e.flags = e.flags & ~gn | ke;
        case gC: {
          var v = a.payload, m;
          if (typeof v == "function") {
            vC(), m = v.call(s, i, u);
            {
              if (e.mode & Ht) {
                an(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  an(!1);
                }
              }
              hC();
            }
          } else
            m = v;
          return m == null ? i : Qe({}, i, m);
        }
        case Nh:
          return zh = !0, i;
      }
      return i;
    }
    function Fh(e, t, a, i) {
      var u = e.updateQueue;
      zh = !1, Uh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var y = e.alternate;
        if (y !== null) {
          var w = y.updateQueue, R = w.lastBaseUpdate;
          R !== f && (R === null ? w.firstBaseUpdate = m : R.next = m, w.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, N = F, U = null, re = null, Ce = null, me = s;
        do {
          var Je = me.lane, We = me.eventTime;
          if (zl(i, Je)) {
            if (Ce !== null) {
              var A = {
                eventTime: We,
                lane: qe,
                tag: me.tag,
                payload: me.payload,
                callback: me.callback,
                next: null
              };
              Ce = Ce.next = A;
            }
            M = Bx(e, u, me, M, t, a);
            var O = me.callback;
            if (O !== null && me.lane !== qe) {
              e.flags |= Ha;
              var $ = u.effects;
              $ === null ? u.effects = [me] : $.push(me);
            }
          } else {
            var _ = {
              eventTime: We,
              lane: Je,
              tag: me.tag,
              payload: me.payload,
              callback: me.callback,
              next: null
            };
            Ce === null ? (re = Ce = _, U = M) : Ce = Ce.next = _, N = Fe(N, Je);
          }
          if (me = me.next, me === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ae = p, J = ae.next;
            ae.next = null, me = J, u.lastBaseUpdate = ae, u.shared.pending = null;
          }
        } while (!0);
        Ce === null && (U = M), u.baseState = U, u.firstBaseUpdate = re, u.lastBaseUpdate = Ce;
        var be = u.shared.interleaved;
        if (be !== null) {
          var Me = be;
          do
            N = Fe(N, Me.lane), Me = Me.next;
          while (Me !== be);
        } else
          s === null && (u.shared.lanes = F);
        Tp(N), e.lanes = N, e.memoizedState = M;
      }
      Uh = null;
    }
    function Px(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EC() {
      zh = !1;
    }
    function Hh() {
      return zh;
    }
    function TC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Px(f, a));
        }
    }
    var pg = {}, RC = new b.Component().refs, vg, hg, mg, yg, gg, xC, Vh, Sg, Cg, Eg;
    {
      vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), Cg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set();
      var wC = /* @__PURE__ */ new Set();
      Vh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          wC.has(a) || (wC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, xC = function(e, t) {
        if (t === void 0) {
          var a = Ct(e) || "Component";
          gg.has(a) || (gg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(pg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(pg);
    }
    function Tg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Ht) {
          an(!0);
          try {
            s = a(i, u);
          } finally {
            an(!1);
          }
        }
        xC(t, s);
      }
      var f = s == null ? u : Qe({}, u, s);
      if (e.memoizedState = f, e.lanes === F) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Rg = {
      isMounted: Ar,
      enqueueSetState: function(e, t, a) {
        var i = Zr(e), u = Pr(), s = no(i), f = Kl(u, s);
        f.payload = t, a != null && (Vh(a, "setState"), f.callback = a);
        var p = Wu(i, f, s);
        p !== null && (Hn(p, i, s, u), Ah(p, i, s)), Ii(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Zr(e), u = Pr(), s = no(i), f = Kl(u, s);
        f.tag = SC, f.payload = t, a != null && (Vh(a, "replaceState"), f.callback = a);
        var p = Wu(i, f, s);
        p !== null && (Hn(p, i, s, u), Ah(p, i, s)), Ii(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Zr(e), i = Pr(), u = no(a), s = Kl(i, u);
        s.tag = Nh, t != null && (Vh(t, "forceUpdate"), s.callback = t);
        var f = Wu(a, s, u);
        f !== null && (Hn(f, a, u, i), Ah(f, a, u)), nd(a, u);
      }
    };
    function DC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Ht) {
            an(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              an(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ct(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ye(a, i) || !ye(u, s) : !0;
    }
    function $x(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ct(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Cg.has(t) && (Cg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ct(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !mg.has(t) && (mg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ct(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || mn(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function bC(e, t) {
      t.updater = Rg, e.stateNode = t, gu(t, e), t._reactInternalInstance = pg;
    }
    function kC(e, t, a) {
      var i = !1, u = _a, s = _a, f = t.contextType;
      if ("contextType" in t) {
        var p = f === null || f !== void 0 && f.$$typeof === Z && f._context === void 0;
        if (!p && !Eg.has(t)) {
          Eg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === B ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ct(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Rn(f);
      else {
        u = jc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Bc(e, u) : _a;
      }
      var y = new t(a, s);
      if (e.mode & Ht) {
        an(!0);
        try {
          y = new t(a, s);
        } finally {
          an(!1);
        }
      }
      var w = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      bC(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && w === null) {
          var R = Ct(t) || "Component";
          hg.has(R) || (hg.add(R), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", R, y.state === null ? "null" : "undefined", R));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var M = null, N = null, U = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? N = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (N = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? U = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (U = "UNSAFE_componentWillUpdate"), M !== null || N !== null || U !== null) {
            var re = Ct(t) || "Component", Ce = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            yg.has(re) || (yg.add(re), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, re, Ce, M !== null ? `
  ` + M : "", N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : ""));
          }
        }
      }
      return i && Z0(e, u, s), y;
    }
    function Yx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ne(e) || "Component"), Rg.enqueueReplaceState(t, t.state, null));
    }
    function _C(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ne(e) || "Component";
          vg.has(s) || (vg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Rg.enqueueReplaceState(t, t.state, null);
      }
    }
    function xg(e, t, a, i) {
      $x(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = RC, fg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Rn(s);
      else {
        var f = jc(e, t, !0);
        u.context = Bc(e, f);
      }
      {
        if (u.state === a) {
          var p = Ct(t) || "Component";
          Sg.has(p) || (Sg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ht && yi.recordLegacyContextWarning(e, u), yi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Tg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Yx(e, u), Fh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = Ae;
        m |= mr, (e.mode & ra) !== Re && (m |= yr), e.flags |= m;
      }
    }
    function Ix(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = _a;
      if (typeof p == "object" && p !== null)
        v = Rn(p);
      else {
        var m = jc(e, t, !0);
        v = Bc(e, m);
      }
      var y = t.getDerivedStateFromProps, w = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !w && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && _C(e, u, a, v), EC();
      var R = e.memoizedState, M = u.state = R;
      if (Fh(e, a, u, i), M = e.memoizedState, s === a && R === M && !Ch() && !Hh()) {
        if (typeof u.componentDidMount == "function") {
          var N = Ae;
          N |= mr, (e.mode & ra) !== Re && (N |= yr), e.flags |= N;
        }
        return !1;
      }
      typeof y == "function" && (Tg(e, t, y, a), M = e.memoizedState);
      var U = Hh() || DC(e, t, s, a, R, M, v);
      if (U) {
        if (!w && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var re = Ae;
          re |= mr, (e.mode & ra) !== Re && (re |= yr), e.flags |= re;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ce = Ae;
          Ce |= mr, (e.mode & ra) !== Re && (Ce |= yr), e.flags |= Ce;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, U;
    }
    function Qx(e, t, a, i, u) {
      var s = t.stateNode;
      CC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : gi(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, w = _a;
      if (typeof y == "object" && y !== null)
        w = Rn(y);
      else {
        var R = jc(t, a, !0);
        w = Bc(t, R);
      }
      var M = a.getDerivedStateFromProps, N = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !N && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== w) && _C(t, s, i, w), EC();
      var U = t.memoizedState, re = s.state = U;
      if (Fh(t, i, s, u), re = t.memoizedState, f === v && U === re && !Ch() && !Hh() && !Ee)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= Ae), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= Jr), !1;
      typeof M == "function" && (Tg(t, a, M, i), re = t.memoizedState);
      var Ce = Hh() || DC(t, a, p, i, U, re, w) || Ee;
      return Ce ? (!N && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, re, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, re, w)), typeof s.componentDidUpdate == "function" && (t.flags |= Ae), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Jr)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= Ae), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= Jr), t.memoizedProps = i, t.memoizedState = re), s.props = i, s.state = re, s.context = w, Ce;
    }
    var wg, Dg, bg, kg, _g, OC = function(e, t) {
    };
    wg = !1, Dg = !1, bg = {}, kg = {}, _g = {}, OC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ne(t) || "Component";
        kg[a] || (kg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function qd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Ht || Jn) && !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ne(e) || "Component";
          bg[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), bg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ie)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          qa(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(w) {
            var R = v.refs;
            R === RC && (R = v.refs = {}), w === null ? delete R[m] : R[m] = w;
          };
          return y._stringRef = m, y;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function jh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Bh(e) {
      {
        var t = Ne(e) || "Component";
        if (_g[t])
          return;
        _g[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function LC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function MC(e) {
      function t(_, A) {
        if (!!e) {
          var O = _.deletions;
          O === null ? (_.deletions = [A], _.flags |= ct) : O.push(A);
        }
      }
      function a(_, A) {
        if (!e)
          return null;
        for (var O = A; O !== null; )
          t(_, O), O = O.sibling;
        return null;
      }
      function i(_, A) {
        for (var O = /* @__PURE__ */ new Map(), $ = A; $ !== null; )
          $.key !== null ? O.set($.key, $) : O.set($.index, $), $ = $.sibling;
        return O;
      }
      function u(_, A) {
        var O = vs(_, A);
        return O.index = 0, O.sibling = null, O;
      }
      function s(_, A, O) {
        if (_.index = O, !e)
          return _.flags |= Yf, A;
        var $ = _.alternate;
        if ($ !== null) {
          var ae = $.index;
          return ae < A ? (_.flags |= bt, A) : ae;
        } else
          return _.flags |= bt, A;
      }
      function f(_) {
        return e && _.alternate === null && (_.flags |= bt), _;
      }
      function p(_, A, O, $) {
        if (A === null || A.tag !== Ue) {
          var ae = n0(O, _.mode, $);
          return ae.return = _, ae;
        } else {
          var J = u(A, O);
          return J.return = _, J;
        }
      }
      function v(_, A, O, $) {
        var ae = O.type;
        if (ae === Ca)
          return y(_, A, O.props.children, $, O.key);
        if (A !== null && (A.elementType === ae || T1(A, O) || typeof ae == "object" && ae !== null && ae.$$typeof === xe && LC(ae) === A.type)) {
          var J = u(A, O.props);
          return J.ref = qd(_, A, O), J.return = _, J._debugSource = O._source, J._debugOwner = O._owner, J;
        }
        var be = t0(O, _.mode, $);
        return be.ref = qd(_, A, O), be.return = _, be;
      }
      function m(_, A, O, $) {
        if (A === null || A.tag !== ve || A.stateNode.containerInfo !== O.containerInfo || A.stateNode.implementation !== O.implementation) {
          var ae = r0(O, _.mode, $);
          return ae.return = _, ae;
        } else {
          var J = u(A, O.children || []);
          return J.return = _, J;
        }
      }
      function y(_, A, O, $, ae) {
        if (A === null || A.tag !== lt) {
          var J = ao(O, _.mode, $, ae);
          return J.return = _, J;
        } else {
          var be = u(A, O);
          return be.return = _, be;
        }
      }
      function w(_, A, O) {
        if (typeof A == "string" && A !== "" || typeof A == "number") {
          var $ = n0("" + A, _.mode, O);
          return $.return = _, $;
        }
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case bi: {
              var ae = t0(A, _.mode, O);
              return ae.ref = qd(_, null, A), ae.return = _, ae;
            }
            case Mr: {
              var J = r0(A, _.mode, O);
              return J.return = _, J;
            }
            case xe: {
              var be = A._payload, Me = A._init;
              return w(_, Me(be), O);
            }
          }
          if (mn(A) || Za(A)) {
            var gt = ao(A, _.mode, O, null);
            return gt.return = _, gt;
          }
          jh(_, A);
        }
        return typeof A == "function" && Bh(_), null;
      }
      function R(_, A, O, $) {
        var ae = A !== null ? A.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ae !== null ? null : p(_, A, "" + O, $);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case bi:
              return O.key === ae ? v(_, A, O, $) : null;
            case Mr:
              return O.key === ae ? m(_, A, O, $) : null;
            case xe: {
              var J = O._payload, be = O._init;
              return R(_, A, be(J), $);
            }
          }
          if (mn(O) || Za(O))
            return ae !== null ? null : y(_, A, O, $, null);
          jh(_, O);
        }
        return typeof O == "function" && Bh(_), null;
      }
      function M(_, A, O, $, ae) {
        if (typeof $ == "string" && $ !== "" || typeof $ == "number") {
          var J = _.get(O) || null;
          return p(A, J, "" + $, ae);
        }
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case bi: {
              var be = _.get($.key === null ? O : $.key) || null;
              return v(A, be, $, ae);
            }
            case Mr: {
              var Me = _.get($.key === null ? O : $.key) || null;
              return m(A, Me, $, ae);
            }
            case xe:
              var gt = $._payload, at = $._init;
              return M(_, A, O, at(gt), ae);
          }
          if (mn($) || Za($)) {
            var cn = _.get(O) || null;
            return y(A, cn, $, ae, null);
          }
          jh(A, $);
        }
        return typeof $ == "function" && Bh(A), null;
      }
      function N(_, A, O) {
        {
          if (typeof _ != "object" || _ === null)
            return A;
          switch (_.$$typeof) {
            case bi:
            case Mr:
              OC(_, O);
              var $ = _.key;
              if (typeof $ != "string")
                break;
              if (A === null) {
                A = /* @__PURE__ */ new Set(), A.add($);
                break;
              }
              if (!A.has($)) {
                A.add($);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", $);
              break;
            case xe:
              var ae = _._payload, J = _._init;
              N(J(ae), A, O);
              break;
          }
        }
        return A;
      }
      function U(_, A, O, $) {
        for (var ae = null, J = 0; J < O.length; J++) {
          var be = O[J];
          ae = N(be, ae, _);
        }
        for (var Me = null, gt = null, at = A, cn = 0, it = 0, tn = null; at !== null && it < O.length; it++) {
          at.index > it ? (tn = at, at = null) : tn = at.sibling;
          var Dr = R(_, at, O[it], $);
          if (Dr === null) {
            at === null && (at = tn);
            break;
          }
          e && at && Dr.alternate === null && t(_, at), cn = s(Dr, cn, it), gt === null ? Me = Dr : gt.sibling = Dr, gt = Dr, at = tn;
        }
        if (it === O.length) {
          if (a(_, at), rr()) {
            var cr = it;
            ts(_, cr);
          }
          return Me;
        }
        if (at === null) {
          for (; it < O.length; it++) {
            var La = w(_, O[it], $);
            La !== null && (cn = s(La, cn, it), gt === null ? Me = La : gt.sibling = La, gt = La);
          }
          if (rr()) {
            var $r = it;
            ts(_, $r);
          }
          return Me;
        }
        for (var Yr = i(_, at); it < O.length; it++) {
          var br = M(Yr, _, it, O[it], $);
          br !== null && (e && br.alternate !== null && Yr.delete(br.key === null ? it : br.key), cn = s(br, cn, it), gt === null ? Me = br : gt.sibling = br, gt = br);
        }
        if (e && Yr.forEach(function(cf) {
          return t(_, cf);
        }), rr()) {
          var nu = it;
          ts(_, nu);
        }
        return Me;
      }
      function re(_, A, O, $) {
        var ae = Za(O);
        if (typeof ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && O[Symbol.toStringTag] === "Generator" && (Dg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Dg = !0), O.entries === ae && (wg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wg = !0);
          var J = ae.call(O);
          if (J)
            for (var be = null, Me = J.next(); !Me.done; Me = J.next()) {
              var gt = Me.value;
              be = N(gt, be, _);
            }
        }
        var at = ae.call(O);
        if (at == null)
          throw new Error("An iterable object provided no iterator.");
        for (var cn = null, it = null, tn = A, Dr = 0, cr = 0, La = null, $r = at.next(); tn !== null && !$r.done; cr++, $r = at.next()) {
          tn.index > cr ? (La = tn, tn = null) : La = tn.sibling;
          var Yr = R(_, tn, $r.value, $);
          if (Yr === null) {
            tn === null && (tn = La);
            break;
          }
          e && tn && Yr.alternate === null && t(_, tn), Dr = s(Yr, Dr, cr), it === null ? cn = Yr : it.sibling = Yr, it = Yr, tn = La;
        }
        if ($r.done) {
          if (a(_, tn), rr()) {
            var br = cr;
            ts(_, br);
          }
          return cn;
        }
        if (tn === null) {
          for (; !$r.done; cr++, $r = at.next()) {
            var nu = w(_, $r.value, $);
            nu !== null && (Dr = s(nu, Dr, cr), it === null ? cn = nu : it.sibling = nu, it = nu);
          }
          if (rr()) {
            var cf = cr;
            ts(_, cf);
          }
          return cn;
        }
        for (var bp = i(_, tn); !$r.done; cr++, $r = at.next()) {
          var sl = M(bp, _, cr, $r.value, $);
          sl !== null && (e && sl.alternate !== null && bp.delete(sl.key === null ? cr : sl.key), Dr = s(sl, Dr, cr), it === null ? cn = sl : it.sibling = sl, it = sl);
        }
        if (e && bp.forEach(function(lk) {
          return t(_, lk);
        }), rr()) {
          var ik = cr;
          ts(_, ik);
        }
        return cn;
      }
      function Ce(_, A, O, $) {
        if (A !== null && A.tag === Ue) {
          a(_, A.sibling);
          var ae = u(A, O);
          return ae.return = _, ae;
        }
        a(_, A);
        var J = n0(O, _.mode, $);
        return J.return = _, J;
      }
      function me(_, A, O, $) {
        for (var ae = O.key, J = A; J !== null; ) {
          if (J.key === ae) {
            var be = O.type;
            if (be === Ca) {
              if (J.tag === lt) {
                a(_, J.sibling);
                var Me = u(J, O.props.children);
                return Me.return = _, Me._debugSource = O._source, Me._debugOwner = O._owner, Me;
              }
            } else if (J.elementType === be || T1(J, O) || typeof be == "object" && be !== null && be.$$typeof === xe && LC(be) === J.type) {
              a(_, J.sibling);
              var gt = u(J, O.props);
              return gt.ref = qd(_, J, O), gt.return = _, gt._debugSource = O._source, gt._debugOwner = O._owner, gt;
            }
            a(_, J);
            break;
          } else
            t(_, J);
          J = J.sibling;
        }
        if (O.type === Ca) {
          var at = ao(O.props.children, _.mode, $, O.key);
          return at.return = _, at;
        } else {
          var cn = t0(O, _.mode, $);
          return cn.ref = qd(_, A, O), cn.return = _, cn;
        }
      }
      function Je(_, A, O, $) {
        for (var ae = O.key, J = A; J !== null; ) {
          if (J.key === ae)
            if (J.tag === ve && J.stateNode.containerInfo === O.containerInfo && J.stateNode.implementation === O.implementation) {
              a(_, J.sibling);
              var be = u(J, O.children || []);
              return be.return = _, be;
            } else {
              a(_, J);
              break;
            }
          else
            t(_, J);
          J = J.sibling;
        }
        var Me = r0(O, _.mode, $);
        return Me.return = _, Me;
      }
      function We(_, A, O, $) {
        var ae = typeof O == "object" && O !== null && O.type === Ca && O.key === null;
        if (ae && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case bi:
              return f(me(_, A, O, $));
            case Mr:
              return f(Je(_, A, O, $));
            case xe:
              var J = O._payload, be = O._init;
              return We(_, A, be(J), $);
          }
          if (mn(O))
            return U(_, A, O, $);
          if (Za(O))
            return re(_, A, O, $);
          jh(_, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ce(_, A, "" + O, $)) : (typeof O == "function" && Bh(_), a(_, A));
      }
      return We;
    }
    var Gc = MC(!0), NC = MC(!1);
    function Gx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Wx(e, t) {
      for (var a = e.child; a !== null; )
        Rb(a, t), a = a.sibling;
    }
    var Zd = {}, Xu = Yu(Zd), Jd = Yu(Zd), Ph = Yu(Zd);
    function $h(e) {
      if (e === Zd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function zC() {
      var e = $h(Ph.current);
      return e;
    }
    function Og(e, t) {
      xr(Ph, t, e), xr(Jd, e, e), xr(Xu, Zd, e);
      var a = oR(t);
      Rr(Xu, e), xr(Xu, a, e);
    }
    function Wc(e) {
      Rr(Xu, e), Rr(Jd, e), Rr(Ph, e);
    }
    function Lg() {
      var e = $h(Xu.current);
      return e;
    }
    function UC(e) {
      $h(Ph.current);
      var t = $h(Xu.current), a = sR(t, e.type);
      t !== a && (xr(Jd, e, e), xr(Xu, a, e));
    }
    function Mg(e) {
      Jd.current === e && (Rr(Xu, e), Rr(Jd, e));
    }
    var Xx = 0, AC = 1, FC = 1, ep = 2, Si = Yu(Xx);
    function Ng(e, t) {
      return (e & t) !== 0;
    }
    function Xc(e) {
      return e & AC;
    }
    function zg(e, t) {
      return e & AC | t;
    }
    function Kx(e, t) {
      return e | t;
    }
    function Ku(e, t) {
      xr(Si, t, e);
    }
    function Kc(e) {
      Rr(Si, e);
    }
    function qx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Yh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Pe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || G0(i) || jy(i))
              return t;
          }
        } else if (t.tag === ht && t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ke) !== Se;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var fa = 0, Ln = 1, nl = 2, Mn = 4, ar = 8, Ug = [];
    function Ag() {
      for (var e = 0; e < Ug.length; e++) {
        var t = Ug[e];
        t._workInProgressVersionPrimary = null;
      }
      Ug.length = 0;
    }
    function Zx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var te = C.ReactCurrentDispatcher, tp = C.ReactCurrentBatchConfig, Fg, qc;
    Fg = /* @__PURE__ */ new Set();
    var us = F, yt = null, Nn = null, zn = null, Ih = !1, np = !1, rp = 0, Jx = 0, ew = 25, H = null, Ga = null, qu = -1, Hg = !1;
    function dt() {
      {
        var e = H;
        Ga === null ? Ga = [e] : Ga.push(e);
      }
    }
    function K() {
      {
        var e = H;
        Ga !== null && (qu++, Ga[qu] !== e && tw(e));
      }
    }
    function Zc(e) {
      e != null && !mn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", H, typeof e);
    }
    function tw(e) {
      {
        var t = Ne(yt);
        if (!Fg.has(t) && (Fg.add(t), Ga !== null)) {
          for (var a = "", i = 30, u = 0; u <= qu; u++) {
            for (var s = Ga[u], f = u === qu ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function wr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Vg(e, t) {
      if (Hg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", H), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, H, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Jc(e, t, a, i, u, s) {
      us = s, yt = t, Ga = e !== null ? e._debugHookTypes : null, qu = -1, Hg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = F, e !== null && e.memoizedState !== null ? te.current = iE : Ga !== null ? te.current = aE : te.current = rE;
      var f = a(i, u);
      if (np) {
        var p = 0;
        do {
          if (np = !1, rp = 0, p >= ew)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Hg = !1, Nn = null, zn = null, t.updateQueue = null, qu = -1, te.current = lE, f = a(i, u);
        } while (np);
      }
      te.current = am, t._debugHookTypes = Ga;
      var v = Nn !== null && Nn.next !== null;
      if (us = F, yt = null, Nn = null, zn = null, H = null, Ga = null, qu = -1, e !== null && (e.flags & kn) !== (t.flags & kn) && (e.mode & Ye) !== Re && g("Internal React error: Expected static flag was missing. Please notify the React team."), Ih = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function ef() {
      var e = rp !== 0;
      return rp = 0, e;
    }
    function HC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ra) !== Re ? t.flags &= ~(xl | yr | zt | Ae) : t.flags &= ~(zt | Ae), e.lanes = bu(e.lanes, a);
    }
    function VC() {
      if (te.current = am, Ih) {
        for (var e = yt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Ih = !1;
      }
      us = F, yt = null, Nn = null, zn = null, Ga = null, qu = -1, H = null, ZC = !1, np = !1, rp = 0;
    }
    function rl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return zn === null ? yt.memoizedState = zn = e : zn = zn.next = e, zn;
    }
    function Wa() {
      var e;
      if (Nn === null) {
        var t = yt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Nn.next;
      var a;
      if (zn === null ? a = yt.memoizedState : a = zn.next, a !== null)
        zn = a, a = zn.next, Nn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Nn = e;
        var i = {
          memoizedState: Nn.memoizedState,
          baseState: Nn.baseState,
          baseQueue: Nn.baseQueue,
          queue: Nn.queue,
          next: null
        };
        zn === null ? yt.memoizedState = zn = i : zn = zn.next = i;
      }
      return zn;
    }
    function jC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function jg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Bg(e, t, a) {
      var i = rl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: F,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = iw.bind(null, yt, s);
      return [i.memoizedState, f];
    }
    function Pg(e, t, a) {
      var i = Wa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Nn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, w = s.baseState, R = null, M = null, N = null, U = y;
        do {
          var re = U.lane;
          if (zl(us, re)) {
            if (N !== null) {
              var me = {
                lane: qe,
                action: U.action,
                hasEagerState: U.hasEagerState,
                eagerState: U.eagerState,
                next: null
              };
              N = N.next = me;
            }
            if (U.hasEagerState)
              w = U.eagerState;
            else {
              var Je = U.action;
              w = e(w, Je);
            }
          } else {
            var Ce = {
              lane: re,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            };
            N === null ? (M = N = Ce, R = w) : N = N.next = Ce, yt.lanes = Fe(yt.lanes, re), Tp(re);
          }
          U = U.next;
        } while (U !== null && U !== y);
        N === null ? R = w : N.next = M, fe(w, i.memoizedState) || cp(), i.memoizedState = w, i.baseState = R, i.baseQueue = N, u.lastRenderedState = w;
      }
      var We = u.interleaved;
      if (We !== null) {
        var _ = We;
        do {
          var A = _.lane;
          yt.lanes = Fe(yt.lanes, A), Tp(A), _ = _.next;
        } while (_ !== We);
      } else
        f === null && (u.lanes = F);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function $g(e, t, a) {
      var i = Wa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var y = m.action;
          p = e(p, y), m = m.next;
        } while (m !== v);
        fe(p, i.memoizedState) || cp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Gk(e, t, a) {
    }
    function Wk(e, t, a) {
    }
    function Yg(e, t, a) {
      var i = yt, u = rl(), s, f = rr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), qc || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), qc = !0);
      } else {
        if (s = t(), !qc) {
          var p = t();
          fe(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), qc = !0);
        }
        var v = Tm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ho(v, us) || BC(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Kh($C.bind(null, i, m, e), [e]), i.flags |= zt, ap(Ln | ar, PC.bind(null, i, m, s, t), void 0, null), s;
    }
    function Qh(e, t, a) {
      var i = yt, u = Wa(), s = t();
      if (!qc) {
        var f = t();
        fe(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), qc = !0);
      }
      var p = u.memoizedState, v = !fe(p, s);
      v && (u.memoizedState = s, cp());
      var m = u.queue;
      if (lp($C.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || zn !== null && zn.memoizedState.tag & Ln) {
        i.flags |= zt, ap(Ln | ar, PC.bind(null, i, m, s, t), void 0, null);
        var y = Tm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ho(y, us) || BC(i, t, s);
      }
      return s;
    }
    function BC(e, t, a) {
      e.flags |= _o;
      var i = {
        getSnapshot: t,
        value: a
      }, u = yt.updateQueue;
      if (u === null)
        u = jC(), yt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function PC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, YC(t) && IC(e);
    }
    function $C(e, t, a) {
      var i = function() {
        YC(t) && IC(e);
      };
      return a(i);
    }
    function YC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !fe(a, i);
      } catch {
        return !0;
      }
    }
    function IC(e) {
      var t = ca(e, De);
      t !== null && Hn(t, e, De, Tt);
    }
    function Gh(e) {
      var t = rl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: F,
        dispatch: null,
        lastRenderedReducer: jg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = lw.bind(null, yt, a);
      return [t.memoizedState, i];
    }
    function Ig(e) {
      return Pg(jg);
    }
    function Qg(e) {
      return $g(jg);
    }
    function ap(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        next: null
      }, s = yt.updateQueue;
      if (s === null)
        s = jC(), yt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Gg(e) {
      var t = rl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Wh(e) {
      var t = Wa();
      return t.memoizedState;
    }
    function ip(e, t, a, i) {
      var u = rl(), s = i === void 0 ? null : i;
      yt.flags |= e, u.memoizedState = ap(Ln | t, a, void 0, s);
    }
    function Xh(e, t, a, i) {
      var u = Wa(), s = i === void 0 ? null : i, f = void 0;
      if (Nn !== null) {
        var p = Nn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Vg(s, v)) {
            u.memoizedState = ap(t, a, f, s);
            return;
          }
        }
      }
      yt.flags |= e, u.memoizedState = ap(Ln | t, a, f, s);
    }
    function Kh(e, t) {
      return (yt.mode & ra) !== Re ? ip(xl | zt | Vi, ar, e, t) : ip(zt | Vi, ar, e, t);
    }
    function lp(e, t) {
      return Xh(zt, ar, e, t);
    }
    function Wg(e, t) {
      return ip(Ae, nl, e, t);
    }
    function qh(e, t) {
      return Xh(Ae, nl, e, t);
    }
    function Xg(e, t) {
      var a = Ae;
      return a |= mr, (yt.mode & ra) !== Re && (a |= yr), ip(a, Mn, e, t);
    }
    function Zh(e, t) {
      return Xh(Ae, Mn, e, t);
    }
    function QC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Kg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ae;
      return u |= mr, (yt.mode & ra) !== Re && (u |= yr), ip(u, Mn, QC.bind(null, t, e), i);
    }
    function Jh(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Xh(Ae, Mn, QC.bind(null, t, e), i);
    }
    function nw(e, t) {
    }
    var em = nw;
    function qg(e, t) {
      var a = rl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function tm(e, t) {
      var a = Wa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Zg(e, t) {
      var a = rl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function nm(e, t) {
      var a = Wa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Jg(e) {
      var t = rl();
      return t.memoizedState = e, e;
    }
    function GC(e) {
      var t = Wa(), a = Nn, i = a.memoizedState;
      return XC(t, i, e);
    }
    function WC(e) {
      var t = Wa();
      if (Nn === null)
        return t.memoizedState = e, e;
      var a = Nn.memoizedState;
      return XC(t, a, e);
    }
    function XC(e, t, a) {
      var i = !iy(us);
      if (i) {
        if (!fe(a, t)) {
          var u = ud();
          yt.lanes = Fe(yt.lanes, u), Tp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, cp()), e.memoizedState = a, a;
    }
    function rw(e, t, a) {
      var i = ia();
      un(Gn(i, On)), e(!0);
      var u = tp.transition;
      tp.transition = {};
      var s = tp.transition;
      tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (un(i), tp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && oe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function eS() {
      var e = Gh(!1), t = e[0], a = e[1], i = rw.bind(null, a), u = rl();
      return u.memoizedState = i, [t, i];
    }
    function KC() {
      var e = Ig(), t = e[0], a = Wa(), i = a.memoizedState;
      return [t, i];
    }
    function qC() {
      var e = Qg(), t = e[0], a = Wa(), i = a.memoizedState;
      return [t, i];
    }
    var ZC = !1;
    function aw() {
      return ZC;
    }
    function tS() {
      var e = rl(), t = Tm(), a = t.identifierPrefix, i;
      if (rr()) {
        var u = gx();
        i = ":" + a + "R" + u;
        var s = rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Jx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function rm() {
      var e = Wa(), t = e.memoizedState;
      return t;
    }
    function iw(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (JC(e))
        eE(t, u);
      else {
        var s = yC(e, t, u, i);
        if (s !== null) {
          var f = Pr();
          Hn(s, e, i, f), tE(s, t, i);
        }
      }
      nE(e, i);
    }
    function lw(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (JC(e))
        eE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === F && (s === null || s.lanes === F)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = te.current, te.current = Ci;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, fe(m, v)) {
                Hx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              te.current = p;
            }
          }
        }
        var y = yC(e, t, u, i);
        if (y !== null) {
          var w = Pr();
          Hn(y, e, i, w), tE(y, t, i);
        }
      }
      nE(e, i);
    }
    function JC(e) {
      var t = e.alternate;
      return e === yt || t !== null && t === yt;
    }
    function eE(e, t) {
      np = Ih = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function tE(e, t, a) {
      if (ld(a)) {
        var i = t.lanes;
        i = od(i, e.pendingLanes);
        var u = Fe(i, a);
        t.lanes = u, ku(e, u);
      }
    }
    function nE(e, t, a) {
      Ii(e, t);
    }
    var am = {
      readContext: Rn,
      useCallback: wr,
      useContext: wr,
      useEffect: wr,
      useImperativeHandle: wr,
      useInsertionEffect: wr,
      useLayoutEffect: wr,
      useMemo: wr,
      useReducer: wr,
      useRef: wr,
      useState: wr,
      useDebugValue: wr,
      useDeferredValue: wr,
      useTransition: wr,
      useMutableSource: wr,
      useSyncExternalStore: wr,
      useId: wr,
      unstable_isNewReconciler: G
    }, rE = null, aE = null, iE = null, lE = null, al = null, Ci = null, im = null;
    {
      var nS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Oe = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      rE = {
        readContext: function(e) {
          return Rn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", dt(), Zc(t), qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", dt(), Rn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", dt(), Zc(t), Kh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", dt(), Zc(a), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", dt(), Zc(t), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", dt(), Zc(t), Xg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", dt(), Zc(t);
          var a = te.current;
          te.current = al;
          try {
            return Zg(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", dt();
          var i = te.current;
          te.current = al;
          try {
            return Bg(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", dt(), Gg(e);
        },
        useState: function(e) {
          H = "useState", dt();
          var t = te.current;
          te.current = al;
          try {
            return Gh(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", dt(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", dt(), Jg(e);
        },
        useTransition: function() {
          return H = "useTransition", dt(), eS();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", dt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", dt(), Yg(e, t, a);
        },
        useId: function() {
          return H = "useId", dt(), tS();
        },
        unstable_isNewReconciler: G
      }, aE = {
        readContext: function(e) {
          return Rn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", K(), qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", K(), Rn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", K(), Kh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", K(), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", K(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", K(), Xg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", K();
          var a = te.current;
          te.current = al;
          try {
            return Zg(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", K();
          var i = te.current;
          te.current = al;
          try {
            return Bg(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", K(), Gg(e);
        },
        useState: function(e) {
          H = "useState", K();
          var t = te.current;
          te.current = al;
          try {
            return Gh(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", K(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", K(), Jg(e);
        },
        useTransition: function() {
          return H = "useTransition", K(), eS();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", K(), Yg(e, t, a);
        },
        useId: function() {
          return H = "useId", K(), tS();
        },
        unstable_isNewReconciler: G
      }, iE = {
        readContext: function(e) {
          return Rn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", K(), tm(e, t);
        },
        useContext: function(e) {
          return H = "useContext", K(), Rn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", K(), lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", K(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", K(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", K(), Zh(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", K();
          var a = te.current;
          te.current = Ci;
          try {
            return nm(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", K();
          var i = te.current;
          te.current = Ci;
          try {
            return Pg(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", K(), Wh();
        },
        useState: function(e) {
          H = "useState", K();
          var t = te.current;
          te.current = Ci;
          try {
            return Ig(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", K(), em();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", K(), GC(e);
        },
        useTransition: function() {
          return H = "useTransition", K(), KC();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", K(), Qh(e, t);
        },
        useId: function() {
          return H = "useId", K(), rm();
        },
        unstable_isNewReconciler: G
      }, lE = {
        readContext: function(e) {
          return Rn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", K(), tm(e, t);
        },
        useContext: function(e) {
          return H = "useContext", K(), Rn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", K(), lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", K(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", K(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", K(), Zh(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", K();
          var a = te.current;
          te.current = im;
          try {
            return nm(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", K();
          var i = te.current;
          te.current = im;
          try {
            return $g(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", K(), Wh();
        },
        useState: function(e) {
          H = "useState", K();
          var t = te.current;
          te.current = im;
          try {
            return Qg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", K(), em();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", K(), WC(e);
        },
        useTransition: function() {
          return H = "useTransition", K(), qC();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", K(), Qh(e, t);
        },
        useId: function() {
          return H = "useId", K(), rm();
        },
        unstable_isNewReconciler: G
      }, al = {
        readContext: function(e) {
          return nS(), Rn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", Oe(), dt(), qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", Oe(), dt(), Rn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", Oe(), dt(), Kh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", Oe(), dt(), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", Oe(), dt(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", Oe(), dt(), Xg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", Oe(), dt();
          var a = te.current;
          te.current = al;
          try {
            return Zg(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", Oe(), dt();
          var i = te.current;
          te.current = al;
          try {
            return Bg(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", Oe(), dt(), Gg(e);
        },
        useState: function(e) {
          H = "useState", Oe(), dt();
          var t = te.current;
          te.current = al;
          try {
            return Gh(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", Oe(), dt(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", Oe(), dt(), Jg(e);
        },
        useTransition: function() {
          return H = "useTransition", Oe(), dt(), eS();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", Oe(), dt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", Oe(), dt(), Yg(e, t, a);
        },
        useId: function() {
          return H = "useId", Oe(), dt(), tS();
        },
        unstable_isNewReconciler: G
      }, Ci = {
        readContext: function(e) {
          return nS(), Rn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", Oe(), K(), tm(e, t);
        },
        useContext: function(e) {
          return H = "useContext", Oe(), K(), Rn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", Oe(), K(), lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", Oe(), K(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", Oe(), K(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", Oe(), K(), Zh(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", Oe(), K();
          var a = te.current;
          te.current = Ci;
          try {
            return nm(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", Oe(), K();
          var i = te.current;
          te.current = Ci;
          try {
            return Pg(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", Oe(), K(), Wh();
        },
        useState: function(e) {
          H = "useState", Oe(), K();
          var t = te.current;
          te.current = Ci;
          try {
            return Ig(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", Oe(), K(), em();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", Oe(), K(), GC(e);
        },
        useTransition: function() {
          return H = "useTransition", Oe(), K(), KC();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", Oe(), K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", Oe(), K(), Qh(e, t);
        },
        useId: function() {
          return H = "useId", Oe(), K(), rm();
        },
        unstable_isNewReconciler: G
      }, im = {
        readContext: function(e) {
          return nS(), Rn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", Oe(), K(), tm(e, t);
        },
        useContext: function(e) {
          return H = "useContext", Oe(), K(), Rn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", Oe(), K(), lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", Oe(), K(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", Oe(), K(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", Oe(), K(), Zh(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", Oe(), K();
          var a = te.current;
          te.current = Ci;
          try {
            return nm(e, t);
          } finally {
            te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", Oe(), K();
          var i = te.current;
          te.current = Ci;
          try {
            return $g(e, t, a);
          } finally {
            te.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", Oe(), K(), Wh();
        },
        useState: function(e) {
          H = "useState", Oe(), K();
          var t = te.current;
          te.current = Ci;
          try {
            return Qg(e);
          } finally {
            te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", Oe(), K(), em();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", Oe(), K(), WC(e);
        },
        useTransition: function() {
          return H = "useTransition", Oe(), K(), qC();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", Oe(), K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", Oe(), K(), Qh(e, t);
        },
        useId: function() {
          return H = "useId", Oe(), K(), rm();
        },
        unstable_isNewReconciler: G
      };
    }
    var Zu = D.unstable_now, uE = 0, lm = -1, up = -1, um = -1, rS = !1, om = !1;
    function oE() {
      return rS;
    }
    function uw() {
      om = !0;
    }
    function ow() {
      rS = !1, om = !1;
    }
    function sw() {
      rS = om, om = !1;
    }
    function sE() {
      return uE;
    }
    function cE() {
      uE = Zu();
    }
    function aS(e) {
      up = Zu(), e.actualStartTime < 0 && (e.actualStartTime = Zu());
    }
    function fE(e) {
      up = -1;
    }
    function sm(e, t) {
      if (up >= 0) {
        var a = Zu() - up;
        e.actualDuration += a, t && (e.selfBaseDuration = a), up = -1;
      }
    }
    function il(e) {
      if (lm >= 0) {
        var t = Zu() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ot:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function iS(e) {
      if (um >= 0) {
        var t = Zu() - um;
        um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ot:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ll() {
      lm = Zu();
    }
    function lS() {
      um = Zu();
    }
    function uS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function os(e, t) {
      return {
        value: e,
        source: t,
        stack: mf(t),
        digest: null
      };
    }
    function oS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function cw(e, t) {
      return !0;
    }
    function sS(e, t) {
      try {
        var a = cw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ie)
            return;
          console.error(i);
        }
        var p = u ? Ne(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === W)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Ne(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + y + ".");
        }
        var w = v + `
` + f + `

` + ("" + m);
        console.error(w);
      } catch (R) {
        setTimeout(function() {
          throw R;
        });
      }
    }
    var fw = typeof WeakMap == "function" ? WeakMap : Map;
    function dE(e, t, a) {
      var i = Kl(Tt, a);
      i.tag = sg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        rb(u), sS(e, t);
      }, i;
    }
    function cS(e, t, a) {
      var i = Kl(Tt, a);
      i.tag = sg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          R1(e), sS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        R1(e), sS(e, t), typeof u != "function" && tb(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Tr(e.lanes, De) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ne(e) || "Unknown"));
      }), i;
    }
    function pE(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new fw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = ab.bind(null, e, t, a);
        _n && Rp(e, a), t.then(s, s);
      }
    }
    function dw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function pw(e, t) {
      var a = e.tag;
      if ((e.mode & Ye) === Re && (a === Q || a === Ve || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function vE(e) {
      var t = e;
      do {
        if (t.tag === Pe && qx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function hE(e, t, a, i, u) {
      if ((e.mode & Ye) === Re) {
        if (e === t)
          e.flags |= gn;
        else {
          if (e.flags |= ke, a.flags |= Oo, a.flags &= ~(Vs | zr), a.tag === ie) {
            var s = a.alternate;
            if (s === null)
              a.tag = Vn;
            else {
              var f = Kl(Tt, De);
              f.tag = Nh, Wu(a, f, De);
            }
          }
          a.lanes = Fe(a.lanes, De);
        }
        return e;
      }
      return e.flags |= gn, e.lanes = u, e;
    }
    function vw(e, t, a, i, u) {
      if (a.flags |= zr, _n && Rp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        pw(a), rr() && a.mode & Ye && iC();
        var f = vE(t);
        if (f !== null) {
          f.flags &= ~Pt, hE(f, t, a, e, u), f.mode & Ye && pE(e, s, u), dw(f, e, s);
          return;
        } else {
          if (!Du(u)) {
            pE(e, s, u), $S();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (rr() && a.mode & Ye) {
        iC();
        var v = vE(t);
        if (v !== null) {
          (v.flags & gn) === Se && (v.flags |= Pt), hE(v, t, a, e, u), ng(os(i, a));
          return;
        }
      }
      i = os(i, a), GD(i);
      var m = t;
      do {
        switch (m.tag) {
          case W: {
            var y = i;
            m.flags |= gn;
            var w = ln(u);
            m.lanes = Fe(m.lanes, w);
            var R = dE(m, y, w);
            dg(m, R);
            return;
          }
          case ie:
            var M = i, N = m.type, U = m.stateNode;
            if ((m.flags & ke) === Se && (typeof N.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && !v1(U))) {
              m.flags |= gn;
              var re = ln(u);
              m.lanes = Fe(m.lanes, re);
              var Ce = cS(m, M, re);
              dg(m, Ce);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function hw() {
      return null;
    }
    var op = C.ReactCurrentOwner, Ei = !1, fS, sp, dS, pS, vS, ss, hS, cm;
    fS = {}, sp = {}, dS = {}, pS = {}, vS = {}, ss = !1, hS = {}, cm = {};
    function jr(e, t, a, i) {
      e === null ? t.child = NC(t, null, a, i) : t.child = Gc(t, e.child, a, i);
    }
    function mw(e, t, a, i) {
      t.child = Gc(t, e.child, null, i), t.child = Gc(t, null, a, i);
    }
    function mE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && hi(
          s,
          i,
          "prop",
          Ct(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Qc(t, u), Yi(t);
      {
        if (op.current = t, Ra(!0), v = Jc(e, t, f, i, p, u), m = ef(), t.mode & Ht) {
          an(!0);
          try {
            v = Jc(e, t, f, i, p, u), m = ef();
          } finally {
            an(!1);
          }
        }
        Ra(!1);
      }
      return wl(), e !== null && !Ei ? (HC(e, t, u), ql(e, t, u)) : (rr() && m && Ky(t), t.flags |= Fi, jr(e, t, v, u), t.child);
    }
    function yE(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (Eb(s) && a.compare === null && a.defaultProps === void 0) {
          var f = s;
          return f = sf(s), t.tag = Be, t.type = f, gS(t, s), gE(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && hi(
            p,
            i,
            "prop",
            Ct(s)
          );
        }
        var v = e0(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var m = a.type, y = m.propTypes;
        y && hi(
          y,
          i,
          "prop",
          Ct(m)
        );
      }
      var w = e.child, R = xS(e, u);
      if (!R) {
        var M = w.memoizedProps, N = a.compare;
        if (N = N !== null ? N : ye, N(M, i) && e.ref === t.ref)
          return ql(e, t, u);
      }
      t.flags |= Fi;
      var U = vs(w, i);
      return U.ref = t.ref, U.return = t, t.child = U, U;
    }
    function gE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === xe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && hi(
            m,
            i,
            "prop",
            Ct(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (ye(y, i) && e.ref === t.ref && t.type === e.type)
          if (Ei = !1, t.pendingProps = i = y, xS(e, u))
            (e.flags & Oo) !== Se && (Ei = !0);
          else
            return t.lanes = e.lanes, ql(e, t, u);
      }
      return mS(e, t, a, i, u);
    }
    function SE(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ne)
        if ((t.mode & Ye) === Re) {
          var f = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Rm(t, a);
        } else if (Tr(a, Er)) {
          var w = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = w;
          var R = s !== null ? s.baseLanes : a;
          Rm(t, R);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Fe(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Er;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, Rm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Fe(s.baseLanes, a), t.memoizedState = null) : M = a, Rm(t, M);
      }
      return jr(e, t, u, a), t.child;
    }
    function yw(e, t, a) {
      var i = t.pendingProps;
      return jr(e, t, i, a), t.child;
    }
    function gw(e, t, a) {
      var i = t.pendingProps.children;
      return jr(e, t, i, a), t.child;
    }
    function Sw(e, t, a) {
      {
        t.flags |= Ae;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return jr(e, t, s, a), t.child;
    }
    function CE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= hr, t.flags |= If);
    }
    function mS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && hi(
          s,
          i,
          "prop",
          Ct(a)
        );
      }
      var f;
      {
        var p = jc(t, a, !0);
        f = Bc(t, p);
      }
      var v, m;
      Qc(t, u), Yi(t);
      {
        if (op.current = t, Ra(!0), v = Jc(e, t, a, i, f, u), m = ef(), t.mode & Ht) {
          an(!0);
          try {
            v = Jc(e, t, a, i, f, u), m = ef();
          } finally {
            an(!1);
          }
        }
        Ra(!1);
      }
      return wl(), e !== null && !Ei ? (HC(e, t, u), ql(e, t, u)) : (rr() && m && Ky(t), t.flags |= Fi, jr(e, t, v, u), t.child);
    }
    function EE(e, t, a, i, u) {
      {
        switch (Ab(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= ke, t.flags |= gn;
            var m = new Error("Simulated error coming from DevTools"), y = ln(u);
            t.lanes = Fe(t.lanes, y);
            var w = cS(t, os(m, t), y);
            dg(t, w);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var R = a.propTypes;
          R && hi(
            R,
            i,
            "prop",
            Ct(a)
          );
        }
      }
      var M;
      tl(a) ? (M = !0, Th(t)) : M = !1, Qc(t, u);
      var N = t.stateNode, U;
      N === null ? (dm(e, t), kC(t, a, i), xg(t, a, i, u), U = !0) : e === null ? U = Ix(t, a, i, u) : U = Qx(e, t, a, i, u);
      var re = yS(e, t, a, U, M, u);
      {
        var Ce = t.stateNode;
        U && Ce.props !== i && (ss || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ne(t) || "a component"), ss = !0);
      }
      return re;
    }
    function yS(e, t, a, i, u, s) {
      CE(e, t);
      var f = (t.flags & ke) !== Se;
      if (!i && !f)
        return u && tC(t, a, !1), ql(e, t, s);
      var p = t.stateNode;
      op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, fE();
      else {
        Yi(t);
        {
          if (Ra(!0), v = p.render(), t.mode & Ht) {
            an(!0);
            try {
              p.render();
            } finally {
              an(!1);
            }
          }
          Ra(!1);
        }
        wl();
      }
      return t.flags |= Fi, e !== null && f ? mw(e, t, v, s) : jr(e, t, v, s), t.memoizedState = p.state, u && tC(t, a, !0), t.child;
    }
    function TE(e) {
      var t = e.stateNode;
      t.pendingContext ? J0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && J0(e, t.context, !1), Og(e, t.containerInfo);
    }
    function Cw(e, t, a) {
      if (TE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      CC(e, t), Fh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & Pt) {
          var y = os(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return RE(e, t, p, a, y);
        } else if (p !== s) {
          var w = os(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return RE(e, t, p, a, w);
        } else {
          xx(t);
          var R = NC(t, null, p, a);
          t.child = R;
          for (var M = R; M; )
            M.flags = M.flags & ~bt | ea, M = M.sibling;
        }
      } else {
        if (Yc(), p === s)
          return ql(e, t, a);
        jr(e, t, p, a);
      }
      return t.child;
    }
    function RE(e, t, a, i, u) {
      return Yc(), ng(u), t.flags |= Pt, jr(e, t, a, i), t.child;
    }
    function Ew(e, t, a) {
      UC(t), e === null && tg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ay(i, u);
      return p ? f = null : s !== null && Ay(i, s) && (t.flags |= ft), CE(e, t), jr(e, t, f, a), t.child;
    }
    function Tw(e, t) {
      return e === null && tg(t), null;
    }
    function Rw(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = Tb(v), y = gi(v, u), w;
      switch (m) {
        case Q:
          return gS(t, v), t.type = v = sf(v), w = mS(null, t, v, y, i), w;
        case ie:
          return t.type = v = WS(v), w = EE(null, t, v, y, i), w;
        case Ve:
          return t.type = v = XS(v), w = mE(null, t, v, y, i), w;
        case wt: {
          if (t.type !== t.elementType) {
            var R = v.propTypes;
            R && hi(
              R,
              y,
              "prop",
              Ct(v)
            );
          }
          return w = yE(
            null,
            t,
            v,
            gi(v.type, y),
            i
          ), w;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === xe && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function xw(e, t, a, i, u) {
      dm(e, t), t.tag = ie;
      var s;
      return tl(a) ? (s = !0, Th(t)) : s = !1, Qc(t, u), kC(t, a, i), xg(t, a, i, u), yS(null, t, a, !0, s, u);
    }
    function ww(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s;
      {
        var f = jc(t, a, !1);
        s = Bc(t, f);
      }
      Qc(t, i);
      var p, v;
      Yi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = Ct(a) || "Unknown";
          fS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), fS[m] = !0);
        }
        t.mode & Ht && yi.recordLegacyContextWarning(t, null), Ra(!0), op.current = t, p = Jc(null, t, a, u, s, i), v = ef(), Ra(!1);
      }
      if (wl(), t.flags |= Fi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = Ct(a) || "Unknown";
        sp[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), sp[y] = !0);
      }
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        {
          var w = Ct(a) || "Unknown";
          sp[w] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), sp[w] = !0);
        }
        t.tag = ie, t.memoizedState = null, t.updateQueue = null;
        var R = !1;
        return tl(a) ? (R = !0, Th(t)) : R = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, fg(t), bC(t, p), xg(t, a, u, i), yS(null, t, a, !0, R, i);
      } else {
        if (t.tag = Q, t.mode & Ht) {
          an(!0);
          try {
            p = Jc(null, t, a, u, s, i), v = ef();
          } finally {
            an(!1);
          }
        }
        return rr() && v && Ky(t), jr(null, t, p, i), gS(t, a), t.child;
      }
    }
    function gS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), vS[u] || (vS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Ct(t) || "Unknown";
          pS[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), pS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Ct(t) || "Unknown";
          dS[p] || (g("%s: Function components do not support contextType.", p), dS[p] = !0);
        }
      }
    }
    var SS = {
      dehydrated: null,
      treeContext: null,
      retryLane: qe
    };
    function CS(e) {
      return {
        baseLanes: e,
        cachePool: hw(),
        transitions: null
      };
    }
    function Dw(e, t) {
      var a = null;
      return {
        baseLanes: Fe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function bw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Ng(e, ep);
    }
    function kw(e, t) {
      return bu(e.childLanes, t);
    }
    function xE(e, t, a) {
      var i = t.pendingProps;
      Fb(t) && (t.flags |= ke);
      var u = Si.current, s = !1, f = (t.flags & ke) !== Se;
      if (f || bw(u, e) ? (s = !0, t.flags &= ~ke) : (e === null || e.memoizedState !== null) && (u = Kx(u, FC)), u = Xc(u), Ku(t, u), e === null) {
        tg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Nw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var w = _w(t, m, y, a), R = t.child;
          return R.memoizedState = CS(a), t.memoizedState = SS, w;
        } else
          return ES(t, m);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var N = M.dehydrated;
          if (N !== null)
            return zw(e, t, f, i, N, M, a);
        }
        if (s) {
          var U = i.fallback, re = i.children, Ce = Lw(e, t, re, U, a), me = t.child, Je = e.child.memoizedState;
          return me.memoizedState = Je === null ? CS(a) : Dw(Je, a), me.childLanes = kw(e, a), t.memoizedState = SS, Ce;
        } else {
          var We = i.children, _ = Ow(e, t, We, a);
          return t.memoizedState = null, _;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = TS(u, i);
      return s.return = e, e.child = s, s;
    }
    function _w(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ye) === Re && s !== null ? (p = s, p.childLanes = F, p.pendingProps = f, e.mode & we && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = ao(a, u, i, null)) : (p = TS(f, u), v = ao(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return w1(e, t, F, null);
    }
    function wE(e, t) {
      return vs(e, t);
    }
    function Ow(e, t, a, i) {
      var u = e.child, s = u.sibling, f = wE(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ye) === Re && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ct) : p.push(s);
      }
      return t.child = f, f;
    }
    function Lw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if ((s & Ye) === Re && t.child !== f) {
        var y = t.child;
        m = y, m.childLanes = F, m.pendingProps = v, t.mode & we && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = wE(f, v), m.subtreeFlags = f.subtreeFlags & kn;
      var w;
      return p !== null ? w = vs(p, i) : (w = ao(i, s, u, null), w.flags |= bt), w.return = t, m.return = t, m.sibling = w, t.child = m, w;
    }
    function fm(e, t, a, i) {
      i !== null && ng(i), Gc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= bt, t.memoizedState = null, f;
    }
    function Mw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = ao(i, s, u, null);
      return v.flags |= bt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ye) !== Re && Gc(t, e.child, null, u), v;
    }
    function Nw(e, t, a) {
      return (e.mode & Ye) === Re ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = De) : jy(t) ? e.lanes = kl : e.lanes = Er, null;
    }
    function zw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Pt) {
          t.flags &= ~Pt;
          var _ = oS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return fm(e, t, f, _);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ke, null;
          var A = i.children, O = i.fallback, $ = Mw(e, t, A, O, f), ae = t.child;
          return ae.memoizedState = CS(f), t.memoizedState = SS, $;
        }
      else {
        if (Tx(), (t.mode & Ye) === Re)
          return fm(
            e,
            t,
            f,
            null
          );
        if (jy(u)) {
          var p, v, m;
          {
            var y = VR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var w;
          v ? w = new Error(v) : w = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var R = oS(w, p, m);
          return fm(e, t, f, R);
        }
        var M = Tr(f, e.childLanes);
        if (Ei || M) {
          var N = Tm();
          if (N !== null) {
            var U = uy(N, f);
            if (U !== qe && U !== s.retryLane) {
              s.retryLane = U;
              var re = Tt;
              ca(e, U), Hn(N, e, U, re);
            }
          }
          $S();
          var Ce = oS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return fm(e, t, f, Ce);
        } else if (G0(u)) {
          t.flags |= ke, t.child = e.child;
          var me = ib.bind(null, e);
          return jR(u, me), null;
        } else {
          wx(t, u, s.treeContext);
          var Je = i.children, We = ES(t, Je);
          return We.flags |= ea, We;
        }
      }
    }
    function DE(e, t, a) {
      e.lanes = Fe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Fe(i.lanes, t)), ug(e.return, t, a);
    }
    function Uw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Pe) {
          var u = i.memoizedState;
          u !== null && DE(i, a, e);
        } else if (i.tag === ht)
          DE(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Aw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Yh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Fw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !hS[e])
        if (hS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Hw(e, t) {
      e !== void 0 && !cm[e] && (e !== "collapsed" && e !== "hidden" ? (cm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (cm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function bE(e, t) {
      {
        var a = mn(e), i = !a && typeof Za(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Vw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (mn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!bE(e[a], a))
              return;
        } else {
          var i = Za(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!bE(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function kE(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Fw(u), Hw(s, u), Vw(f, u), jr(e, t, f, a);
      var p = Si.current, v = Ng(p, ep);
      if (v)
        p = zg(p, ep), t.flags |= ke;
      else {
        var m = e !== null && (e.flags & ke) !== Se;
        m && Uw(t, t.child, a), p = Xc(p);
      }
      if (Ku(t, p), (t.mode & Ye) === Re)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = Aw(t.child), w;
            y === null ? (w = t.child, t.child = null) : (w = y.sibling, y.sibling = null), RS(
              t,
              !1,
              w,
              y,
              s
            );
            break;
          }
          case "backwards": {
            var R = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var N = M.alternate;
              if (N !== null && Yh(N) === null) {
                t.child = M;
                break;
              }
              var U = M.sibling;
              M.sibling = R, R = M, M = U;
            }
            RS(
              t,
              !0,
              R,
              null,
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              null,
              null,
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function jw(e, t, a) {
      Og(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Gc(t, null, i, a) : jr(e, t, i, a), t.child;
    }
    var _E = !1;
    function Bw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || _E || (_E = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && hi(v, s, "prop", "Context.Provider");
      }
      if (mC(t, u, p), f !== null) {
        var m = f.value;
        if (fe(m, p)) {
          if (f.children === s.children && !Ch())
            return ql(e, t, a);
        } else
          Ux(t, u, a);
      }
      var y = s.children;
      return jr(e, t, y, a), t.child;
    }
    var OE = !1;
    function Pw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (OE || (OE = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Qc(t, a);
      var f = Rn(i);
      Yi(t);
      var p;
      return op.current = t, Ra(!0), p = s(f), Ra(!1), wl(), t.flags |= Fi, jr(e, t, p, a), t.child;
    }
    function cp() {
      Ei = !0;
    }
    function dm(e, t) {
      (t.mode & Ye) === Re && e !== null && (e.alternate = null, t.alternate = null, t.flags |= bt);
    }
    function ql(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), fE(), Tp(t.lanes), Tr(a, t.childLanes) ? (Gx(e, t), t.child) : null;
    }
    function $w(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ct) : s.push(e), a.flags |= bt, a;
      }
    }
    function xS(e, t) {
      var a = e.lanes;
      return !!Tr(a, t);
    }
    function Yw(e, t, a) {
      switch (t.tag) {
        case W:
          TE(t), t.stateNode, Yc();
          break;
        case se:
          UC(t);
          break;
        case ie: {
          var i = t.type;
          tl(i) && Th(t);
          break;
        }
        case ve:
          Og(t, t.stateNode.containerInfo);
          break;
        case Ie: {
          var u = t.memoizedProps.value, s = t.type._context;
          mC(t, s, u);
          break;
        }
        case ot:
          {
            var f = Tr(a, t.childLanes);
            f && (t.flags |= Ae);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Pe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ku(t, Xc(Si.current)), t.flags |= ke, null;
            var m = t.child, y = m.childLanes;
            if (Tr(a, y))
              return xE(e, t, a);
            Ku(t, Xc(Si.current));
            var w = ql(e, t, a);
            return w !== null ? w.sibling : null;
          } else
            Ku(t, Xc(Si.current));
          break;
        }
        case ht: {
          var R = (e.flags & ke) !== Se, M = Tr(a, t.childLanes);
          if (R) {
            if (M)
              return kE(e, t, a);
            t.flags |= ke;
          }
          var N = t.memoizedState;
          if (N !== null && (N.rendering = null, N.tail = null, N.lastEffect = null), Ku(t, Si.current), M)
            break;
          return null;
        }
        case Le:
        case Xe:
          return t.lanes = F, SE(e, t, a);
      }
      return ql(e, t, a);
    }
    function LE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return $w(e, t, e0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ch() || t.type !== e.type)
          Ei = !0;
        else {
          var s = xS(e, a);
          if (!s && (t.flags & ke) === Se)
            return Ei = !1, Yw(e, t, a);
          (e.flags & Oo) !== Se ? Ei = !0 : Ei = !1;
        }
      } else if (Ei = !1, rr() && mx(t)) {
        var f = t.index, p = yx();
        aC(t, p, f);
      }
      switch (t.lanes = F, t.tag) {
        case Ke:
          return ww(e, t, t.type, a);
        case xn: {
          var v = t.elementType;
          return Rw(e, t, v, a);
        }
        case Q: {
          var m = t.type, y = t.pendingProps, w = t.elementType === m ? y : gi(m, y);
          return mS(e, t, m, w, a);
        }
        case ie: {
          var R = t.type, M = t.pendingProps, N = t.elementType === R ? M : gi(R, M);
          return EE(e, t, R, N, a);
        }
        case W:
          return Cw(e, t, a);
        case se:
          return Ew(e, t, a);
        case Ue:
          return Tw(e, t);
        case Pe:
          return xE(e, t, a);
        case ve:
          return jw(e, t, a);
        case Ve: {
          var U = t.type, re = t.pendingProps, Ce = t.elementType === U ? re : gi(U, re);
          return mE(e, t, U, Ce, a);
        }
        case lt:
          return yw(e, t, a);
        case ut:
          return gw(e, t, a);
        case ot:
          return Sw(e, t, a);
        case Ie:
          return Bw(e, t, a);
        case It:
          return Pw(e, t, a);
        case wt: {
          var me = t.type, Je = t.pendingProps, We = gi(me, Je);
          if (t.type !== t.elementType) {
            var _ = me.propTypes;
            _ && hi(
              _,
              We,
              "prop",
              Ct(me)
            );
          }
          return We = gi(me.type, We), yE(e, t, me, We, a);
        }
        case Be:
          return gE(e, t, t.type, t.pendingProps, a);
        case Vn: {
          var A = t.type, O = t.pendingProps, $ = t.elementType === A ? O : gi(A, O);
          return xw(e, t, A, $, a);
        }
        case ht:
          return kE(e, t, a);
        case wn:
          break;
        case Le:
          return SE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function tf(e) {
      e.flags |= Ae;
    }
    function ME(e) {
      e.flags |= hr, e.flags |= If;
    }
    var NE, wS, zE, UE;
    NE = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === se || u.tag === Ue)
          pR(e, u.stateNode);
        else if (u.tag !== ve) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, wS = function(e, t) {
    }, zE = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Lg(), v = hR(f, a, s, i, u, p);
        t.updateQueue = v, v && tf(t);
      }
    }, UE = function(e, t, a, i) {
      a !== i && tf(t);
    };
    function fp(e, t) {
      if (!rr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function ir(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = F, i = Se;
      if (t) {
        if ((e.mode & we) !== Re) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Fe(a, Fe(m.lanes, m.childLanes)), i |= m.subtreeFlags & kn, i |= m.flags & kn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Fe(a, Fe(y.lanes, y.childLanes)), i |= y.subtreeFlags & kn, i |= y.flags & kn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & we) !== Re) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Fe(a, Fe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Fe(a, Fe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Iw(e, t, a) {
      if (Ox() && (t.mode & Ye) !== Re && (t.flags & ke) === Se)
        return fC(t), Yc(), t.flags |= Pt | zr | gn, !1;
      var i = bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (kx(t), ir(t), (t.mode & we) !== Re) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Yc(), (t.flags & ke) === Se && (t.memoizedState = null), t.flags |= Ae, ir(t), (t.mode & we) !== Re) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return dC(), !0;
    }
    function AE(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case Ke:
        case xn:
        case Be:
        case Q:
        case Ve:
        case lt:
        case ut:
        case ot:
        case It:
        case wt:
          return ir(t), null;
        case ie: {
          var u = t.type;
          return tl(u) && Eh(t), ir(t), null;
        }
        case W: {
          var s = t.stateNode;
          if (Wc(t), Gy(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = bh(t);
            if (f)
              tf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              (!p.isDehydrated || (t.flags & Pt) !== Se) && (t.flags |= Jr, dC());
            }
          }
          return wS(e, t), ir(t), null;
        }
        case se: {
          Mg(t);
          var v = zC(), m = t.type;
          if (e !== null && t.stateNode != null)
            zE(e, t, m, i, v), e.ref !== t.ref && ME(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ir(t), null;
            }
            var y = Lg(), w = bh(t);
            if (w)
              Dx(t, v, y) && tf(t);
            else {
              var R = dR(m, i, v, y, t);
              NE(R, t, !1, !1), t.stateNode = R, vR(R, m, i, v) && tf(t);
            }
            t.ref !== null && ME(t);
          }
          return ir(t), null;
        }
        case Ue: {
          var M = i;
          if (e && t.stateNode != null) {
            var N = e.memoizedProps;
            UE(e, t, N, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var U = zC(), re = Lg(), Ce = bh(t);
            Ce ? bx(t) && tf(t) : t.stateNode = mR(M, U, re, t);
          }
          return ir(t), null;
        }
        case Pe: {
          Kc(t);
          var me = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Je = Iw(e, t, me);
            if (!Je)
              return t.flags & gn ? t : null;
          }
          if ((t.flags & ke) !== Se)
            return t.lanes = a, (t.mode & we) !== Re && uS(t), t;
          var We = me !== null, _ = e !== null && e.memoizedState !== null;
          if (We !== _ && We) {
            var A = t.child;
            if (A.flags |= Hi, (t.mode & Ye) !== Re) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !nt);
              O || Ng(Si.current, FC) ? QD() : $S();
            }
          }
          var $ = t.updateQueue;
          if ($ !== null && (t.flags |= Ae), ir(t), (t.mode & we) !== Re && We) {
            var ae = t.child;
            ae !== null && (t.treeBaseDuration -= ae.treeBaseDuration);
          }
          return null;
        }
        case ve:
          return Wc(t), wS(e, t), e === null && sx(t.stateNode.containerInfo), ir(t), null;
        case Ie:
          var J = t.type._context;
          return lg(J, t), ir(t), null;
        case Vn: {
          var be = t.type;
          return tl(be) && Eh(t), ir(t), null;
        }
        case ht: {
          Kc(t);
          var Me = t.memoizedState;
          if (Me === null)
            return ir(t), null;
          var gt = (t.flags & ke) !== Se, at = Me.rendering;
          if (at === null)
            if (gt)
              fp(Me, !1);
            else {
              var cn = WD() && (e === null || (e.flags & ke) === Se);
              if (!cn)
                for (var it = t.child; it !== null; ) {
                  var tn = Yh(it);
                  if (tn !== null) {
                    gt = !0, t.flags |= ke, fp(Me, !1);
                    var Dr = tn.updateQueue;
                    return Dr !== null && (t.updateQueue = Dr, t.flags |= Ae), t.subtreeFlags = Se, Wx(t, a), Ku(t, zg(Si.current, ep)), t.child;
                  }
                  it = it.sibling;
                }
              Me.tail !== null && Ft() > r1() && (t.flags |= ke, gt = !0, fp(Me, !1), t.lanes = ad);
            }
          else {
            if (!gt) {
              var cr = Yh(at);
              if (cr !== null) {
                t.flags |= ke, gt = !0;
                var La = cr.updateQueue;
                if (La !== null && (t.updateQueue = La, t.flags |= Ae), fp(Me, !0), Me.tail === null && Me.tailMode === "hidden" && !at.alternate && !rr())
                  return ir(t), null;
              } else
                Ft() * 2 - Me.renderingStartTime > r1() && a !== Er && (t.flags |= ke, gt = !0, fp(Me, !1), t.lanes = ad);
            }
            if (Me.isBackwards)
              at.sibling = t.child, t.child = at;
            else {
              var $r = Me.last;
              $r !== null ? $r.sibling = at : t.child = at, Me.last = at;
            }
          }
          if (Me.tail !== null) {
            var Yr = Me.tail;
            Me.rendering = Yr, Me.tail = Yr.sibling, Me.renderingStartTime = Ft(), Yr.sibling = null;
            var br = Si.current;
            return gt ? br = zg(br, ep) : br = Xc(br), Ku(t, br), Yr;
          }
          return ir(t), null;
        }
        case wn:
          break;
        case Le:
        case Xe: {
          PS(t);
          var nu = t.memoizedState, cf = nu !== null;
          if (e !== null) {
            var bp = e.memoizedState, sl = bp !== null;
            sl !== cf && !ne && (t.flags |= Hi);
          }
          return !cf || (t.mode & Ye) === Re ? ir(t) : Tr(ol, Er) && (ir(t), t.subtreeFlags & (bt | Ae) && (t.flags |= Hi)), null;
        }
        case dn:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qw(e, t, a) {
      switch (qy(t), t.tag) {
        case ie: {
          var i = t.type;
          tl(i) && Eh(t);
          var u = t.flags;
          return u & gn ? (t.flags = u & ~gn | ke, (t.mode & we) !== Re && uS(t), t) : null;
        }
        case W: {
          t.stateNode, Wc(t), Gy(t), Ag();
          var s = t.flags;
          return (s & gn) !== Se && (s & ke) === Se ? (t.flags = s & ~gn | ke, t) : null;
        }
        case se:
          return Mg(t), null;
        case Pe: {
          Kc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Yc();
          }
          var p = t.flags;
          return p & gn ? (t.flags = p & ~gn | ke, (t.mode & we) !== Re && uS(t), t) : null;
        }
        case ht:
          return Kc(t), null;
        case ve:
          return Wc(t), null;
        case Ie:
          var v = t.type._context;
          return lg(v, t), null;
        case Le:
        case Xe:
          return PS(t), null;
        case dn:
          return null;
        default:
          return null;
      }
    }
    function FE(e, t, a) {
      switch (qy(t), t.tag) {
        case ie: {
          var i = t.type.childContextTypes;
          i != null && Eh(t);
          break;
        }
        case W: {
          t.stateNode, Wc(t), Gy(t), Ag();
          break;
        }
        case se: {
          Mg(t);
          break;
        }
        case ve:
          Wc(t);
          break;
        case Pe:
          Kc(t);
          break;
        case ht:
          Kc(t);
          break;
        case Ie:
          var u = t.type._context;
          lg(u, t);
          break;
        case Le:
        case Xe:
          PS(t);
          break;
      }
    }
    var HE = null;
    HE = /* @__PURE__ */ new Set();
    var pm = !1, lr = !1, Gw = typeof WeakSet == "function" ? WeakSet : Set, de = null, nf = null, rf = null;
    function Ww(e) {
      Rl(null, function() {
        throw e;
      }), $f();
    }
    var Xw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & we)
        try {
          ll(), t.componentWillUnmount();
        } finally {
          il(e);
        }
      else
        t.componentWillUnmount();
    };
    function VE(e, t) {
      try {
        Ju(Mn, e);
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function DS(e, t, a) {
      try {
        Xw(e, a);
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function Kw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function jE(e, t) {
      try {
        PE(e);
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function af(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (nn && Ir && e.mode & we)
              try {
                ll(), i = a(null);
              } finally {
                il(e);
              }
            else
              i = a(null);
          } catch (u) {
            Lt(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ne(e));
        } else
          a.current = null;
    }
    function vm(e, t, a) {
      try {
        a();
      } catch (i) {
        Lt(e, t, i);
      }
    }
    var BE = !1;
    function qw(e, t) {
      cR(e.containerInfo), de = t, Zw();
      var a = BE;
      return BE = !1, a;
    }
    function Zw() {
      for (; de !== null; ) {
        var e = de, t = e.child;
        (e.subtreeFlags & Su) !== Se && t !== null ? (t.return = e, de = t) : Jw();
      }
    }
    function Jw() {
      for (; de !== null; ) {
        var e = de;
        mt(e);
        try {
          eD(e);
        } catch (a) {
          Lt(e, e.return, a);
        }
        rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, de = t;
          return;
        }
        de = e.return;
      }
    }
    function eD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Jr) !== Se) {
        switch (mt(e), e.tag) {
          case Q:
          case Ve:
          case Be:
            break;
          case ie: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ss && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ne(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ne(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : gi(e.type, i), u);
              {
                var p = HE;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ne(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case W: {
            {
              var v = e.stateNode;
              UR(v.containerInfo);
            }
            break;
          }
          case se:
          case Ue:
          case ve:
          case Vn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        rn();
      }
    }
    function Ti(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & ar) !== fa ? Gs(t) : (e & Mn) !== fa && Ws(t), (e & nl) !== fa && xp(!0), vm(t, a, p), (e & nl) !== fa && xp(!1), (e & ar) !== fa ? Dv() : (e & Mn) !== fa && Cu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ju(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & ar) !== fa ? wv(t) : (e & Mn) !== fa && bv(t);
            var f = s.create;
            (e & nl) !== fa && xp(!0), s.destroy = f(), (e & nl) !== fa && xp(!1), (e & ar) !== fa ? td() : (e & Mn) !== fa && kv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Mn) !== Se ? v = "useLayoutEffect" : (s.tag & nl) !== Se ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function tD(e, t) {
      if ((t.flags & Ae) !== Se)
        switch (t.tag) {
          case ot: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = sE(), p = t.alternate === null ? "mount" : "update";
            oE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case W:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case ot:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function nD(e, t, a, i) {
      if ((a.flags & In) !== Se)
        switch (a.tag) {
          case Q:
          case Ve:
          case Be: {
            if (!lr)
              if (a.mode & we)
                try {
                  ll(), Ju(Mn | Ln, a);
                } finally {
                  il(a);
                }
              else
                Ju(Mn | Ln, a);
            break;
          }
          case ie: {
            var u = a.stateNode;
            if (a.flags & Ae && !lr)
              if (t === null)
                if (a.type === a.elementType && !ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ne(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ne(a) || "instance")), a.mode & we)
                  try {
                    ll(), u.componentDidMount();
                  } finally {
                    il(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : gi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ne(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ne(a) || "instance")), a.mode & we)
                  try {
                    ll(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    il(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ne(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ne(a) || "instance")), TC(a, p, u));
            break;
          }
          case W: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case se:
                    m = a.child.stateNode;
                    break;
                  case ie:
                    m = a.child.stateNode;
                    break;
                }
              TC(a, v, m);
            }
            break;
          }
          case se: {
            var y = a.stateNode;
            if (t === null && a.flags & Ae) {
              var w = a.type, R = a.memoizedProps;
              ER(y, w, R);
            }
            break;
          }
          case Ue:
            break;
          case ve:
            break;
          case ot: {
            {
              var M = a.memoizedProps, N = M.onCommit, U = M.onRender, re = a.stateNode.effectDuration, Ce = sE(), me = t === null ? "mount" : "update";
              oE() && (me = "nested-update"), typeof U == "function" && U(a.memoizedProps.id, me, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ce);
              {
                typeof N == "function" && N(a.memoizedProps.id, me, re, Ce), JD(a);
                var Je = a.return;
                e:
                  for (; Je !== null; ) {
                    switch (Je.tag) {
                      case W:
                        var We = Je.stateNode;
                        We.effectDuration += re;
                        break e;
                      case ot:
                        var _ = Je.stateNode;
                        _.effectDuration += re;
                        break e;
                    }
                    Je = Je.return;
                  }
              }
            }
            break;
          }
          case Pe: {
            cD(e, a);
            break;
          }
          case ht:
          case Vn:
          case wn:
          case Le:
          case Xe:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      lr || a.flags & hr && PE(a);
    }
    function rD(e) {
      switch (e.tag) {
        case Q:
        case Ve:
        case Be: {
          if (e.mode & we)
            try {
              ll(), VE(e, e.return);
            } finally {
              il(e);
            }
          else
            VE(e, e.return);
          break;
        }
        case ie: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Kw(e, e.return, t), jE(e, e.return);
          break;
        }
        case se: {
          jE(e, e.return);
          break;
        }
      }
    }
    function aD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === se) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? LR(u) : NR(i.stateNode, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
          }
        } else if (i.tag === Ue) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? MR(s) : zR(s, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
        } else if (!((i.tag === Le || i.tag === Xe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function PE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case se:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & we)
            try {
              ll(), u = t(i);
            } finally {
              il(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ne(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ne(e)), t.current = i;
      }
    }
    function iD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function $E(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, $E(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === se) {
          var a = e.stateNode;
          a !== null && dx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function lD(e) {
      for (var t = e.return; t !== null; ) {
        if (YE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function YE(e) {
      return e.tag === se || e.tag === W || e.tag === ve;
    }
    function IE(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || YE(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== se && t.tag !== Ue && t.tag !== Bt; ) {
            if (t.flags & bt || t.child === null || t.tag === ve)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & bt))
            return t.stateNode;
        }
    }
    function uD(e) {
      var t = lD(e);
      switch (t.tag) {
        case se: {
          var a = t.stateNode;
          t.flags & ft && (Q0(a), t.flags &= ~ft);
          var i = IE(e);
          kS(e, i, a);
          break;
        }
        case W:
        case ve: {
          var u = t.stateNode.containerInfo, s = IE(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === se || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? bR(a, s, t) : wR(a, s);
      } else if (i !== ve) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === se || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? DR(a, s, t) : xR(a, s);
      } else if (i !== ve) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    var ur = null, Ri = !1;
    function oD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case se: {
                ur = i.stateNode, Ri = !1;
                break e;
              }
              case W: {
                ur = i.stateNode.containerInfo, Ri = !0;
                break e;
              }
              case ve: {
                ur = i.stateNode.containerInfo, Ri = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (ur === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        QE(e, t, a), ur = null, Ri = !1;
      }
      iD(a);
    }
    function eo(e, t, a) {
      for (var i = a.child; i !== null; )
        QE(e, t, i), i = i.sibling;
    }
    function QE(e, t, a) {
      switch (Jf(a), a.tag) {
        case se:
          lr || af(a, t);
        case Ue: {
          {
            var i = ur, u = Ri;
            ur = null, eo(e, t, a), ur = i, Ri = u, ur !== null && (Ri ? _R(ur, a.stateNode) : kR(ur, a.stateNode));
          }
          return;
        }
        case Bt: {
          ur !== null && (Ri ? OR(ur, a.stateNode) : Vy(ur, a.stateNode));
          return;
        }
        case ve: {
          {
            var s = ur, f = Ri;
            ur = a.stateNode.containerInfo, Ri = !0, eo(e, t, a), ur = s, Ri = f;
          }
          return;
        }
        case Q:
        case Ve:
        case wt:
        case Be: {
          if (!lr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var w = y, R = w.destroy, M = w.tag;
                  R !== void 0 && ((M & nl) !== fa ? vm(a, t, R) : (M & Mn) !== fa && (Ws(a), a.mode & we ? (ll(), vm(a, t, R), il(a)) : vm(a, t, R), Cu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          eo(e, t, a);
          return;
        }
        case ie: {
          if (!lr) {
            af(a, t);
            var N = a.stateNode;
            typeof N.componentWillUnmount == "function" && DS(a, t, N);
          }
          eo(e, t, a);
          return;
        }
        case wn: {
          eo(e, t, a);
          return;
        }
        case Le: {
          if (a.mode & Ye) {
            var U = lr;
            lr = U || a.memoizedState !== null, eo(e, t, a), lr = U;
          } else
            eo(e, t, a);
          break;
        }
        default: {
          eo(e, t, a);
          return;
        }
      }
    }
    function sD(e) {
      e.memoizedState;
    }
    function cD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && XR(s);
          }
        }
      }
    }
    function GE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Gw()), t.forEach(function(i) {
          var u = lb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), _n)
              if (nf !== null && rf !== null)
                Rp(rf, nf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function fD(e, t, a) {
      nf = a, rf = e, mt(t), WE(t, e), mt(t), nf = null, rf = null;
    }
    function xi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            oD(e, t, s);
          } catch (v) {
            Lt(s, t, v);
          }
        }
      var f = Hm();
      if (t.subtreeFlags & gr)
        for (var p = t.child; p !== null; )
          mt(p), WE(p, e), p = p.sibling;
      mt(f);
    }
    function WE(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Q:
        case Ve:
        case wt:
        case Be: {
          if (xi(t, e), ul(e), u & Ae) {
            try {
              Ti(nl | Ln, e, e.return), Ju(nl | Ln, e);
            } catch (be) {
              Lt(e, e.return, be);
            }
            if (e.mode & we) {
              try {
                ll(), Ti(Mn | Ln, e, e.return);
              } catch (be) {
                Lt(e, e.return, be);
              }
              il(e);
            } else
              try {
                Ti(Mn | Ln, e, e.return);
              } catch (be) {
                Lt(e, e.return, be);
              }
          }
          return;
        }
        case ie: {
          xi(t, e), ul(e), u & hr && i !== null && af(i, i.return);
          return;
        }
        case se: {
          xi(t, e), ul(e), u & hr && i !== null && af(i, i.return);
          {
            if (e.flags & ft) {
              var s = e.stateNode;
              try {
                Q0(s);
              } catch (be) {
                Lt(e, e.return, be);
              }
            }
            if (u & Ae) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    TR(f, y, m, v, p, e);
                  } catch (be) {
                    Lt(e, e.return, be);
                  }
              }
            }
          }
          return;
        }
        case Ue: {
          if (xi(t, e), ul(e), u & Ae) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var w = e.stateNode, R = e.memoizedProps, M = i !== null ? i.memoizedProps : R;
            try {
              RR(w, M, R);
            } catch (be) {
              Lt(e, e.return, be);
            }
          }
          return;
        }
        case W: {
          if (xi(t, e), ul(e), u & Ae && i !== null) {
            var N = i.memoizedState;
            if (N.isDehydrated)
              try {
                WR(t.containerInfo);
              } catch (be) {
                Lt(e, e.return, be);
              }
          }
          return;
        }
        case ve: {
          xi(t, e), ul(e);
          return;
        }
        case Pe: {
          xi(t, e), ul(e);
          var U = e.child;
          if (U.flags & Hi) {
            var re = U.stateNode, Ce = U.memoizedState, me = Ce !== null;
            if (re.isHidden = me, me) {
              var Je = U.alternate !== null && U.alternate.memoizedState !== null;
              Je || ID();
            }
          }
          if (u & Ae) {
            try {
              sD(e);
            } catch (be) {
              Lt(e, e.return, be);
            }
            GE(e);
          }
          return;
        }
        case Le: {
          var We = i !== null && i.memoizedState !== null;
          if (e.mode & Ye) {
            var _ = lr;
            lr = _ || We, xi(t, e), lr = _;
          } else
            xi(t, e);
          if (ul(e), u & Hi) {
            var A = e.stateNode, O = e.memoizedState, $ = O !== null, ae = e;
            if (A.isHidden = $, $ && !We && (ae.mode & Ye) !== Re) {
              de = ae;
              for (var J = ae.child; J !== null; )
                de = J, pD(J), J = J.sibling;
            }
            aD(ae, $);
          }
          return;
        }
        case ht: {
          xi(t, e), ul(e), u & Ae && GE(e);
          return;
        }
        case wn:
          return;
        default: {
          xi(t, e), ul(e);
          return;
        }
      }
    }
    function ul(e) {
      var t = e.flags;
      if (t & bt) {
        try {
          uD(e);
        } catch (a) {
          Lt(e, e.return, a);
        }
        e.flags &= ~bt;
      }
      t & ea && (e.flags &= ~ea);
    }
    function dD(e, t, a) {
      nf = a, rf = t, de = e, XE(e, t, a), nf = null, rf = null;
    }
    function XE(e, t, a) {
      for (var i = (e.mode & Ye) !== Re; de !== null; ) {
        var u = de, s = u.child;
        if (u.tag === Le && i) {
          var f = u.memoizedState !== null, p = f || pm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || lr, w = pm, R = lr;
            pm = p, lr = y, lr && !R && (de = u, vD(u));
            for (var M = s; M !== null; )
              de = M, XE(
                M,
                t,
                a
              ), M = M.sibling;
            de = u, pm = w, lr = R, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & In) !== Se && s !== null ? (s.return = u, de = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; de !== null; ) {
        var i = de;
        if ((i.flags & In) !== Se) {
          var u = i.alternate;
          mt(i);
          try {
            nD(t, u, i, a);
          } catch (f) {
            Lt(i, i.return, f);
          }
          rn();
        }
        if (i === e) {
          de = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, de = s;
          return;
        }
        de = i.return;
      }
    }
    function pD(e) {
      for (; de !== null; ) {
        var t = de, a = t.child;
        switch (t.tag) {
          case Q:
          case Ve:
          case wt:
          case Be: {
            if (t.mode & we)
              try {
                ll(), Ti(Mn, t, t.return);
              } finally {
                il(t);
              }
            else
              Ti(Mn, t, t.return);
            break;
          }
          case ie: {
            af(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && DS(t, t.return, i);
            break;
          }
          case se: {
            af(t, t.return);
            break;
          }
          case Le: {
            var u = t.memoizedState !== null;
            if (u) {
              KE(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, de = a) : KE(e);
      }
    }
    function KE(e) {
      for (; de !== null; ) {
        var t = de;
        if (t === e) {
          de = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, de = a;
          return;
        }
        de = t.return;
      }
    }
    function vD(e) {
      for (; de !== null; ) {
        var t = de, a = t.child;
        if (t.tag === Le) {
          var i = t.memoizedState !== null;
          if (i) {
            qE(e);
            continue;
          }
        }
        a !== null ? (a.return = t, de = a) : qE(e);
      }
    }
    function qE(e) {
      for (; de !== null; ) {
        var t = de;
        mt(t);
        try {
          rD(t);
        } catch (i) {
          Lt(t, t.return, i);
        }
        if (rn(), t === e) {
          de = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, de = a;
          return;
        }
        de = t.return;
      }
    }
    function hD(e, t, a, i) {
      de = t, mD(t, e, a, i);
    }
    function mD(e, t, a, i) {
      for (; de !== null; ) {
        var u = de, s = u.child;
        (u.subtreeFlags & ta) !== Se && s !== null ? (s.return = u, de = s) : yD(e, t, a, i);
      }
    }
    function yD(e, t, a, i) {
      for (; de !== null; ) {
        var u = de;
        if ((u.flags & zt) !== Se) {
          mt(u);
          try {
            gD(t, u, a, i);
          } catch (f) {
            Lt(u, u.return, f);
          }
          rn();
        }
        if (u === e) {
          de = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, de = s;
          return;
        }
        de = u.return;
      }
    }
    function gD(e, t, a, i) {
      switch (t.tag) {
        case Q:
        case Ve:
        case Be: {
          if (t.mode & we) {
            lS();
            try {
              Ju(ar | Ln, t);
            } finally {
              iS(t);
            }
          } else
            Ju(ar | Ln, t);
          break;
        }
      }
    }
    function SD(e) {
      de = e, CD();
    }
    function CD() {
      for (; de !== null; ) {
        var e = de, t = e.child;
        if ((de.flags & ct) !== Se) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              de = u, RD(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            de = e;
          }
        }
        (e.subtreeFlags & ta) !== Se && t !== null ? (t.return = e, de = t) : ED();
      }
    }
    function ED() {
      for (; de !== null; ) {
        var e = de;
        (e.flags & zt) !== Se && (mt(e), TD(e), rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, de = t;
          return;
        }
        de = e.return;
      }
    }
    function TD(e) {
      switch (e.tag) {
        case Q:
        case Ve:
        case Be: {
          e.mode & we ? (lS(), Ti(ar | Ln, e, e.return), iS(e)) : Ti(ar | Ln, e, e.return);
          break;
        }
      }
    }
    function RD(e, t) {
      for (; de !== null; ) {
        var a = de;
        mt(a), wD(a, t), rn();
        var i = a.child;
        i !== null ? (i.return = a, de = i) : xD(e);
      }
    }
    function xD(e) {
      for (; de !== null; ) {
        var t = de, a = t.sibling, i = t.return;
        if ($E(t), t === e) {
          de = null;
          return;
        }
        if (a !== null) {
          a.return = i, de = a;
          return;
        }
        de = i;
      }
    }
    function wD(e, t) {
      switch (e.tag) {
        case Q:
        case Ve:
        case Be: {
          e.mode & we ? (lS(), Ti(ar, e, t), iS(e)) : Ti(ar, e, t);
          break;
        }
      }
    }
    function DD(e) {
      switch (e.tag) {
        case Q:
        case Ve:
        case Be: {
          try {
            Ju(Mn | Ln, e);
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
        case ie: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
      }
    }
    function bD(e) {
      switch (e.tag) {
        case Q:
        case Ve:
        case Be: {
          try {
            Ju(ar | Ln, e);
          } catch (t) {
            Lt(e, e.return, t);
          }
          break;
        }
      }
    }
    function kD(e) {
      switch (e.tag) {
        case Q:
        case Ve:
        case Be: {
          try {
            Ti(Mn | Ln, e, e.return);
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
        case ie: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && DS(e, e.return, t);
          break;
        }
      }
    }
    function _D(e) {
      switch (e.tag) {
        case Q:
        case Ve:
        case Be:
          try {
            Ti(ar | Ln, e, e.return);
          } catch (t) {
            Lt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var dp = Symbol.for;
      dp("selector.component"), dp("selector.has_pseudo_class"), dp("selector.role"), dp("selector.test_id"), dp("selector.text");
    }
    var OD = [];
    function LD() {
      OD.forEach(function(e) {
        return e();
      });
    }
    var MD = C.ReactCurrentActQueue;
    function ND(e) {
      {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ZE() {
      {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !e && MD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var zD = Math.ceil, OS = C.ReactCurrentDispatcher, LS = C.ReactCurrentOwner, or = C.ReactCurrentBatchConfig, wi = C.ReactCurrentActQueue, Un = 0, JE = 1, sr = 2, Xa = 4, Zl = 0, pp = 1, cs = 2, hm = 3, vp = 4, e1 = 5, MS = 6, Ze = Un, Br = null, Xt = null, An = F, ol = F, NS = Yu(F), Fn = Zl, hp = null, mm = F, mp = F, ym = F, yp = null, da = null, zS = 0, t1 = 500, n1 = 1 / 0, UD = 500, Jl = null;
    function gp() {
      n1 = Ft() + UD;
    }
    function r1() {
      return n1;
    }
    var gm = !1, US = null, lf = null, fs = !1, to = null, Sp = F, AS = [], FS = null, AD = 50, Cp = 0, HS = null, VS = !1, Sm = !1, FD = 50, uf = 0, Cm = null, Ep = Tt, Em = F, a1 = !1;
    function Tm() {
      return Br;
    }
    function Pr() {
      return (Ze & (sr | Xa)) !== Un ? Ft() : (Ep !== Tt || (Ep = Ft()), Ep);
    }
    function no(e) {
      var t = e.mode;
      if ((t & Ye) === Re)
        return De;
      if ((Ze & sr) !== Un && An !== F)
        return ln(An);
      var a = Nx() !== Mx;
      if (a) {
        if (or.transition !== null) {
          var i = or.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Em === qe && (Em = ud()), Em;
      }
      var u = ia();
      if (u !== qe)
        return u;
      var s = yR();
      return s;
    }
    function HD(e) {
      var t = e.mode;
      return (t & Ye) === Re ? De : ly();
    }
    function Hn(e, t, a, i) {
      ob(), a1 && g("useInsertionEffect must not schedule updates."), VS && (Sm = !0), Ul(e, a, i), (Ze & sr) !== F && e === Br ? fb(t) : (_n && dd(e, t, a), db(t), e === Br && ((Ze & sr) === Un && (mp = Fe(mp, a)), Fn === vp && ro(e, An)), pa(e, i), a === De && Ze === Un && (t.mode & Ye) === Re && !wi.isBatchingLegacy && (gp(), rC()));
    }
    function VD(e, t, a) {
      var i = e.current;
      i.lanes = t, Ul(e, t, a), pa(e, a);
    }
    function jD(e) {
      return (Ze & sr) !== Un;
    }
    function pa(e, t) {
      var a = e.callbackNode;
      ry(e, t);
      var i = Ao(e, e === Br ? An : F);
      if (i === F) {
        a !== null && C1(a), e.callbackNode = null, e.callbackPriority = qe;
        return;
      }
      var u = Jt(i), s = e.callbackPriority;
      if (s === u && !(wi.current !== null && a !== QS)) {
        a == null && s !== De && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && C1(a);
      var f;
      if (u === De)
        e.tag === Iu ? (wi.isBatchingLegacy !== null && (wi.didScheduleLegacyUpdate = !0), hx(u1.bind(null, e))) : nC(u1.bind(null, e)), wi.current !== null ? wi.current.push(Qu) : SR(function() {
          (Ze & (sr | Xa)) === Un && Qu();
        }), f = null;
      else {
        var p;
        switch (Bo(i)) {
          case Qn:
            p = Ys;
            break;
          case On:
            p = Fr;
            break;
          case ci:
            p = Va;
            break;
          case Vo:
            p = ji;
            break;
          default:
            p = Va;
            break;
        }
        f = GS(p, i1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function i1(e, t) {
      if (ow(), Ep = Tt, Em = F, (Ze & (sr | Xa)) !== Un)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = tu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ao(e, e === Br ? An : F);
      if (u === F)
        return null;
      var s = !Ho(e, u) && !zv(e, u) && !t, f = s ? KD(e, u) : xm(e, u);
      if (f !== Zl) {
        if (f === cs) {
          var p = id(e);
          p !== F && (u = p, f = jS(e, p));
        }
        if (f === pp) {
          var v = hp;
          throw ds(e, F), ro(e, u), pa(e, Ft()), v;
        }
        if (f === MS)
          ro(e, u);
        else {
          var m = !Ho(e, u), y = e.current.alternate;
          if (m && !PD(y)) {
            if (f = xm(e, u), f === cs) {
              var w = id(e);
              w !== F && (u = w, f = jS(e, w));
            }
            if (f === pp) {
              var R = hp;
              throw ds(e, F), ro(e, u), pa(e, Ft()), R;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, BD(e, f, u);
        }
      }
      return pa(e, Ft()), e.callbackNode === a ? i1.bind(null, e) : null;
    }
    function jS(e, t) {
      var a = yp;
      if (on(e)) {
        var i = ds(e, t);
        i.flags |= Pt, ox(e.containerInfo);
      }
      var u = xm(e, t);
      if (u !== cs) {
        var s = da;
        da = a, s !== null && l1(s);
      }
      return u;
    }
    function l1(e) {
      da === null ? da = e : da.push.apply(da, e);
    }
    function BD(e, t, a) {
      switch (t) {
        case Zl:
        case pp:
          throw new Error("Root did not complete. This is a bug in React.");
        case cs: {
          ps(e, da, Jl);
          break;
        }
        case hm: {
          if (ro(e, a), vc(a) && !E1()) {
            var i = zS + t1 - Ft();
            if (i > 10) {
              var u = Ao(e, F);
              if (u !== F)
                break;
              var s = e.suspendedLanes;
              if (!zl(s, a)) {
                Pr(), cd(e, s);
                break;
              }
              e.timeoutHandle = Fy(ps.bind(null, e, da, Jl), i);
              break;
            }
          }
          ps(e, da, Jl);
          break;
        }
        case vp: {
          if (ro(e, a), Nv(a))
            break;
          if (!E1()) {
            var f = Mv(e, a), p = f, v = Ft() - p, m = ub(v) - v;
            if (m > 10) {
              e.timeoutHandle = Fy(ps.bind(null, e, da, Jl), m);
              break;
            }
          }
          ps(e, da, Jl);
          break;
        }
        case e1: {
          ps(e, da, Jl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function PD(e) {
      for (var t = e; ; ) {
        if (t.flags & _o) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!fe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & _o && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ro(e, t) {
      t = bu(t, ym), t = bu(t, mp), sd(e, t);
    }
    function u1(e) {
      if (sw(), (Ze & (sr | Xa)) !== Un)
        throw new Error("Should not already be working.");
      tu();
      var t = Ao(e, F);
      if (!Tr(t, De))
        return pa(e, Ft()), null;
      var a = xm(e, t);
      if (e.tag !== Iu && a === cs) {
        var i = id(e);
        i !== F && (t = i, a = jS(e, i));
      }
      if (a === pp) {
        var u = hp;
        throw ds(e, F), ro(e, t), pa(e, Ft()), u;
      }
      if (a === MS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ps(e, da, Jl), pa(e, Ft()), null;
    }
    function $D(e, t) {
      t !== F && (ku(e, Fe(t, De)), pa(e, Ft()), (Ze & (sr | Xa)) === Un && (gp(), Qu()));
    }
    function BS(e, t) {
      var a = Ze;
      Ze |= JE;
      try {
        return e(t);
      } finally {
        Ze = a, Ze === Un && !wi.isBatchingLegacy && (gp(), rC());
      }
    }
    function YD(e, t, a, i, u) {
      var s = ia(), f = or.transition;
      try {
        return or.transition = null, un(Qn), e(t, a, i, u);
      } finally {
        un(s), or.transition = f, Ze === Un && gp();
      }
    }
    function eu(e) {
      to !== null && to.tag === Iu && (Ze & (sr | Xa)) === Un && tu();
      var t = Ze;
      Ze |= JE;
      var a = or.transition, i = ia();
      try {
        return or.transition = null, un(Qn), e ? e() : void 0;
      } finally {
        un(i), or.transition = a, Ze = t, (Ze & (sr | Xa)) === Un && Qu();
      }
    }
    function o1() {
      return (Ze & (sr | Xa)) !== Un;
    }
    function Rm(e, t) {
      xr(NS, ol, e), ol = Fe(ol, t);
    }
    function PS(e) {
      ol = NS.current, Rr(NS, e);
    }
    function ds(e, t) {
      e.finishedWork = null, e.finishedLanes = F;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, gR(a)), Xt !== null)
        for (var i = Xt.return; i !== null; ) {
          var u = i.alternate;
          FE(u, i), i = i.return;
        }
      Br = e;
      var s = vs(e.current, null);
      return Xt = s, An = ol = t, Fn = Zl, hp = null, mm = F, mp = F, ym = F, yp = null, da = null, Fx(), yi.discardPendingWarnings(), s;
    }
    function s1(e, t) {
      do {
        var a = Xt;
        try {
          if (Lh(), VC(), rn(), LS.current = null, a === null || a.return === null) {
            Fn = pp, hp = t, Xt = null;
            return;
          }
          if (nn && a.mode & we && sm(a, !0), Ma)
            if (wl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              _v(a, i, An);
            } else
              Xs(a, t, An);
          vw(e, a.return, a, t, An), p1(a);
        } catch (u) {
          t = u, Xt === a && a !== null ? (a = a.return, Xt = a) : a = Xt;
          continue;
        }
        return;
      } while (!0);
    }
    function c1() {
      var e = OS.current;
      return OS.current = am, e === null ? am : e;
    }
    function f1(e) {
      OS.current = e;
    }
    function ID() {
      zS = Ft();
    }
    function Tp(e) {
      mm = Fe(e, mm);
    }
    function QD() {
      Fn === Zl && (Fn = hm);
    }
    function $S() {
      (Fn === Zl || Fn === hm || Fn === cs) && (Fn = vp), Br !== null && (Fo(mm) || Fo(mp)) && ro(Br, An);
    }
    function GD(e) {
      Fn !== vp && (Fn = cs), yp === null ? yp = [e] : yp.push(e);
    }
    function WD() {
      return Fn === Zl;
    }
    function xm(e, t) {
      var a = Ze;
      Ze |= sr;
      var i = c1();
      if (Br !== e || An !== t) {
        if (_n) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Rp(e, An), u.clear()), yc(e, t);
        }
        Jl = pd(), ds(e, t);
      }
      ba(t);
      do
        try {
          XD();
          break;
        } catch (s) {
          s1(e, s);
        }
      while (!0);
      if (Lh(), Ze = a, f1(i), Xt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Tu(), Br = null, An = F, Fn;
    }
    function XD() {
      for (; Xt !== null; )
        d1(Xt);
    }
    function KD(e, t) {
      var a = Ze;
      Ze |= sr;
      var i = c1();
      if (Br !== e || An !== t) {
        if (_n) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Rp(e, An), u.clear()), yc(e, t);
        }
        Jl = pd(), gp(), ds(e, t);
      }
      ba(t);
      do
        try {
          qD();
          break;
        } catch (s) {
          s1(e, s);
        }
      while (!0);
      return Lh(), f1(i), Ze = a, Xt !== null ? (Mo(), Zl) : (Tu(), Br = null, An = F, Fn);
    }
    function qD() {
      for (; Xt !== null && !$s(); )
        d1(Xt);
    }
    function d1(e) {
      var t = e.alternate;
      mt(e);
      var a;
      (e.mode & we) !== Re ? (aS(e), a = YS(t, e, ol), sm(e, !0)) : a = YS(t, e, ol), rn(), e.memoizedProps = e.pendingProps, a === null ? p1(e) : Xt = a, LS.current = null;
    }
    function p1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & zr) === Se) {
          mt(t);
          var u = void 0;
          if ((t.mode & we) === Re ? u = AE(a, t, ol) : (aS(t), u = AE(a, t, ol), sm(t, !1)), rn(), u !== null) {
            Xt = u;
            return;
          }
        } else {
          var s = Qw(a, t);
          if (s !== null) {
            s.flags &= Cv, Xt = s;
            return;
          }
          if ((t.mode & we) !== Re) {
            sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= zr, i.subtreeFlags = Se, i.deletions = null;
          else {
            Fn = MS, Xt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Xt = v;
          return;
        }
        t = i, Xt = t;
      } while (t !== null);
      Fn === Zl && (Fn = e1);
    }
    function ps(e, t, a) {
      var i = ia(), u = or.transition;
      try {
        or.transition = null, un(Qn), ZD(e, t, a, i);
      } finally {
        or.transition = u, un(i);
      }
      return null;
    }
    function ZD(e, t, a, i) {
      do
        tu();
      while (to !== null);
      if (sb(), (Ze & (sr | Xa)) !== Un)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Qs(s), u === null)
        return ed(), null;
      if (s === F && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = F, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = qe;
      var f = Fe(u.lanes, u.childLanes);
      fd(e, f), e === Br && (Br = null, Xt = null, An = F), ((u.subtreeFlags & ta) !== Se || (u.flags & ta) !== Se) && (fs || (fs = !0, FS = a, GS(Va, function() {
        return tu(), null;
      })));
      var p = (u.subtreeFlags & (Su | gr | In | ta)) !== Se, v = (u.flags & (Su | gr | In | ta)) !== Se;
      if (p || v) {
        var m = or.transition;
        or.transition = null;
        var y = ia();
        un(Qn);
        var w = Ze;
        Ze |= Xa, LS.current = null, qw(e, u), cE(), fD(e, u, s), fR(e.containerInfo), e.current = u, Ov(s), dD(u, e, s), Eu(), Rv(), Ze = w, un(y), or.transition = m;
      } else
        e.current = u, cE();
      var R = fs;
      if (fs ? (fs = !1, to = e, Sp = s) : (uf = 0, Cm = null), f = e.pendingLanes, f === F && (lf = null), R || y1(e.current, !1), ui(u.stateNode, i), _n && e.memoizedUpdaters.clear(), LD(), pa(e, Ft()), t !== null)
        for (var M = e.onRecoverableError, N = 0; N < t.length; N++) {
          var U = t[N], re = U.stack, Ce = U.digest;
          M(U.value, {
            componentStack: re,
            digest: Ce
          });
        }
      if (gm) {
        gm = !1;
        var me = US;
        throw US = null, me;
      }
      return Tr(Sp, De) && e.tag !== Iu && tu(), f = e.pendingLanes, Tr(f, De) ? (uw(), e === HS ? Cp++ : (Cp = 0, HS = e)) : Cp = 0, Qu(), ed(), null;
    }
    function tu() {
      if (to !== null) {
        var e = Bo(Sp), t = oy(ci, e), a = or.transition, i = ia();
        try {
          return or.transition = null, un(t), eb();
        } finally {
          un(i), or.transition = a;
        }
      }
      return !1;
    }
    function JD(e) {
      AS.push(e), fs || (fs = !0, GS(Va, function() {
        return tu(), null;
      }));
    }
    function eb() {
      if (to === null)
        return !1;
      var e = FS;
      FS = null;
      var t = to, a = Sp;
      if (to = null, Sp = F, (Ze & (sr | Xa)) !== Un)
        throw new Error("Cannot flush passive effects while already rendering.");
      VS = !0, Sm = !1, Lv(a);
      var i = Ze;
      Ze |= Xa, SD(t.current), hD(t, t.current, a, e);
      {
        var u = AS;
        AS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          tD(t, f);
        }
      }
      Lo(), y1(t.current, !0), Ze = i, Qu(), Sm ? t === Cm ? uf++ : (uf = 0, Cm = t) : uf = 0, VS = !1, Sm = !1, Pi(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function v1(e) {
      return lf !== null && lf.has(e);
    }
    function tb(e) {
      lf === null ? lf = /* @__PURE__ */ new Set([e]) : lf.add(e);
    }
    function nb(e) {
      gm || (gm = !0, US = e);
    }
    var rb = nb;
    function h1(e, t, a) {
      var i = os(a, t), u = dE(e, i, De), s = Wu(e, u, De), f = Pr();
      s !== null && (Ul(s, De, f), pa(s, f));
    }
    function Lt(e, t, a) {
      if (Ww(a), xp(!1), e.tag === W) {
        h1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === W) {
          h1(i, e, a);
          return;
        } else if (i.tag === ie) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !v1(s)) {
            var f = os(a, e), p = cS(i, f, De), v = Wu(i, p, De), m = Pr();
            v !== null && (Ul(v, De, m), pa(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ab(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Pr();
      cd(e, a), pb(e), Br === e && zl(An, a) && (Fn === vp || Fn === hm && vc(An) && Ft() - zS < t1 ? ds(e, F) : ym = Fe(ym, a)), pa(e, u);
    }
    function m1(e, t) {
      t === qe && (t = HD(e));
      var a = Pr(), i = ca(e, t);
      i !== null && (Ul(i, t, a), pa(i, a));
    }
    function ib(e) {
      var t = e.memoizedState, a = qe;
      t !== null && (a = t.retryLane), m1(e, a);
    }
    function lb(e, t) {
      var a = qe, i;
      switch (e.tag) {
        case Pe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ht:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), m1(e, a);
    }
    function ub(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : zD(e / 1960) * 1960;
    }
    function ob() {
      if (Cp > AD)
        throw Cp = 0, HS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      uf > FD && (uf = 0, Cm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function sb() {
      yi.flushLegacyContextWarning(), yi.flushPendingUnsafeLifecycleWarnings();
    }
    function y1(e, t) {
      mt(e), wm(e, yr, kD), t && wm(e, xl, _D), wm(e, yr, DD), t && wm(e, xl, bD), rn();
    }
    function wm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Se ? i = i.child : ((i.flags & t) !== Se && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Dm = null;
    function g1(e) {
      {
        if ((Ze & sr) !== Un || !(e.mode & Ye))
          return;
        var t = e.tag;
        if (t !== Ke && t !== W && t !== ie && t !== Q && t !== Ve && t !== wt && t !== Be)
          return;
        var a = Ne(e) || "ReactComponent";
        if (Dm !== null) {
          if (Dm.has(a))
            return;
          Dm.add(a);
        } else
          Dm = /* @__PURE__ */ new Set([a]);
        var i = qt;
        try {
          mt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? mt(e) : rn();
        }
      }
    }
    var YS;
    {
      var cb = null;
      YS = function(e, t, a) {
        var i = D1(cb, t);
        try {
          return LE(e, t, a);
        } catch (s) {
          if (Rx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Lh(), VC(), FE(e, t), D1(t, i), t.mode & we && aS(t), Rl(null, LE, null, e, t, a), ty()) {
            var u = $f();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var S1 = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function fb(e) {
      if (Xr && !aw())
        switch (e.tag) {
          case Q:
          case Ve:
          case Be: {
            var t = Xt && Ne(Xt) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = Ne(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ie: {
            S1 || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), S1 = !0);
            break;
          }
        }
    }
    function Rp(e, t) {
      if (_n) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          dd(e, i, t);
        });
      }
    }
    var QS = {};
    function GS(e, t) {
      {
        var a = wi.current;
        return a !== null ? (a.push(t), QS) : Ps(e, t);
      }
    }
    function C1(e) {
      if (e !== QS)
        return Tv(e);
    }
    function E1() {
      return wi.current !== null;
    }
    function db(e) {
      {
        if (e.mode & Ye) {
          if (!ZE())
            return;
        } else if (!ND() || Ze !== Un || e.tag !== Q && e.tag !== Ve && e.tag !== Be)
          return;
        if (wi.current === null) {
          var t = qt;
          try {
            mt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ne(e));
          } finally {
            t ? mt(e) : rn();
          }
        }
      }
    }
    function pb(e) {
      e.tag !== Iu && ZE() && wi.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function xp(e) {
      a1 = e;
    }
    var Ka = null, of = null, vb = function(e) {
      Ka = e;
    };
    function sf(e) {
      {
        if (Ka === null)
          return e;
        var t = Ka(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return sf(e);
    }
    function XS(e) {
      {
        if (Ka === null)
          return e;
        var t = Ka(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = sf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Te,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function T1(e, t) {
      {
        if (Ka === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ie: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Q: {
            (typeof i == "function" || s === xe) && (u = !0);
            break;
          }
          case Ve: {
            (s === Te || s === xe) && (u = !0);
            break;
          }
          case wt:
          case Be: {
            (s === je || s === xe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Ka(a);
          if (f !== void 0 && f === Ka(i))
            return !0;
        }
        return !1;
      }
    }
    function R1(e) {
      {
        if (Ka === null || typeof WeakSet != "function")
          return;
        of === null && (of = /* @__PURE__ */ new WeakSet()), of.add(e);
      }
    }
    var hb = function(e, t) {
      {
        if (Ka === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        tu(), eu(function() {
          KS(e.current, i, a);
        });
      }
    }, mb = function(e, t) {
      {
        if (e.context !== _a)
          return;
        tu(), eu(function() {
          wp(t, e, null, null);
        });
      }
    };
    function KS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Q:
          case Be:
          case ie:
            v = p;
            break;
          case Ve:
            v = p.render;
            break;
        }
        if (Ka === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var w = Ka(v);
          w !== void 0 && (a.has(w) ? y = !0 : t.has(w) && (f === ie ? y = !0 : m = !0));
        }
        if (of !== null && (of.has(e) || i !== null && of.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var R = ca(e, De);
          R !== null && Hn(R, e, De, Tt);
        }
        u !== null && !y && KS(u, t, a), s !== null && KS(s, t, a);
      }
    }
    var yb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Q:
          case Be:
          case ie:
            p = f;
            break;
          case Ve:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? gb(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function gb(e, t) {
      {
        var a = Sb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case se:
              t.add(i.stateNode);
              return;
            case ve:
              t.add(i.stateNode.containerInfo);
              return;
            case W:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Sb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === se)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var ZS;
    {
      ZS = !1;
      try {
        var x1 = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function Cb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Se, this.subtreeFlags = Se, this.deletions = null, this.lanes = F, this.childLanes = F, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Oa = function(e, t, a, i) {
      return new Cb(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Eb(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function Tb(e) {
      if (typeof e == "function")
        return JS(e) ? ie : Q;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Te)
          return Ve;
        if (t === je)
          return wt;
      }
      return Ke;
    }
    function vs(e, t) {
      var a = e.alternate;
      a === null ? (a = Oa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Se, a.subtreeFlags = Se, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & kn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ke:
        case Q:
        case Be:
          a.type = sf(e.type);
          break;
        case ie:
          a.type = WS(e.type);
          break;
        case Ve:
          a.type = XS(e.type);
          break;
      }
      return a;
    }
    function Rb(e, t) {
      e.flags &= kn | bt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = F, e.lanes = t, e.child = null, e.subtreeFlags = Se, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Se, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function xb(e, t, a) {
      var i;
      return e === Rh ? (i = Ye, t === !0 && (i |= Ht, i |= ra)) : i = Re, _n && (i |= we), Oa(W, null, null, i);
    }
    function e0(e, t, a, i, u, s) {
      var f = Ke, p = e;
      if (typeof e == "function")
        JS(e) ? (f = ie, p = WS(p)) : p = sf(p);
      else if (typeof e == "string")
        f = se;
      else {
        e:
          switch (e) {
            case Ca:
              return ao(a.children, u, s, t);
            case ki:
              f = ut, u |= Ht, (u & Ye) !== Re && (u |= ra);
              break;
            case E:
              return wb(a, u, s, t);
            case He:
              return Db(a, u, s, t);
            case et:
              return bb(a, u, s, t);
            case Nt:
              return w1(a, u, s, t);
            case er:
            case hn:
            case _i:
            case ys:
            case Mt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case B:
                    f = Ie;
                    break e;
                  case Z:
                    f = It;
                    break e;
                  case Te:
                    f = Ve, p = XS(p);
                    break e;
                  case je:
                    f = wt;
                    break e;
                  case xe:
                    f = xn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Ne(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      }
      var y = Oa(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function t0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = e0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function ao(e, t, a, i) {
      var u = Oa(lt, e, i, t);
      return u.lanes = a, u;
    }
    function wb(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Oa(ot, e, i, t | we);
      return u.elementType = E, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Db(e, t, a, i) {
      var u = Oa(Pe, e, i, t);
      return u.elementType = He, u.lanes = a, u;
    }
    function bb(e, t, a, i) {
      var u = Oa(ht, e, i, t);
      return u.elementType = et, u.lanes = a, u;
    }
    function w1(e, t, a, i) {
      var u = Oa(Le, e, i, t);
      u.elementType = Nt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function n0(e, t, a) {
      var i = Oa(Ue, e, null, t);
      return i.lanes = a, i;
    }
    function kb() {
      var e = Oa(se, null, null, Re);
      return e.elementType = "DELETED", e;
    }
    function _b(e) {
      var t = Oa(Bt, null, null, Re);
      return t.stateNode = e, t;
    }
    function r0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Oa(ve, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, u;
    }
    function D1(e, t) {
      return e === null && (e = Oa(Ke, null, null, Re)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Ob(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = qe, this.eventTimes = mc(F), this.expirationTimes = mc(Tt), this.pendingLanes = F, this.suspendedLanes = F, this.pingedLanes = F, this.expiredLanes = F, this.mutableReadLanes = F, this.finishedLanes = F, this.entangledLanes = F, this.entanglements = mc(F), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _t; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Rh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Iu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function b1(e, t, a, i, u, s, f, p, v, m) {
      var y = new Ob(e, t, a, p, v), w = xb(t, s);
      y.current = w, w.stateNode = y;
      {
        var R = {
          element: i,
          isDehydrated: a,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        w.memoizedState = R;
      }
      return fg(w), y;
    }
    var a0 = "18.2.0";
    function Lb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ma(i), {
        $$typeof: Mr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var i0, l0;
    i0 = !1, l0 = {};
    function k1(e) {
      if (!e)
        return _a;
      var t = Zr(e), a = vx(t);
      if (t.tag === ie) {
        var i = t.type;
        if (tl(i))
          return eC(t, i, a);
      }
      return a;
    }
    function Mb(e, t) {
      {
        var a = Zr(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = na(a);
        if (u === null)
          return null;
        if (u.mode & Ht) {
          var s = Ne(a) || "Component";
          if (!l0[s]) {
            l0[s] = !0;
            var f = qt;
            try {
              mt(u), a.mode & Ht ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? mt(f) : rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function _1(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return b1(e, t, v, m, a, i, u, s, f);
    }
    function O1(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, w = b1(a, i, y, e, u, s, f, p, v);
      w.context = k1(null);
      var R = w.current, M = Pr(), N = no(R), U = Kl(M, N);
      return U.callback = t != null ? t : null, Wu(R, U, N), VD(w, N, M), w;
    }
    function wp(e, t, a, i) {
      xv(t, e);
      var u = t.current, s = Pr(), f = no(u);
      Dl(f);
      var p = k1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Xr && qt !== null && !i0 && (i0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ne(qt) || "Unknown"));
      var v = Kl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Wu(u, v, f);
      return m !== null && (Hn(m, u, f, s), Ah(m, u, f)), f;
    }
    function bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case se:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Nb(e) {
      switch (e.tag) {
        case W: {
          var t = e.stateNode;
          if (on(t)) {
            var a = ay(t);
            $D(t, a);
          }
          break;
        }
        case Pe: {
          eu(function() {
            var u = ca(e, De);
            if (u !== null) {
              var s = Pr();
              Hn(u, e, De, s);
            }
          });
          var i = De;
          u0(e, i);
          break;
        }
      }
    }
    function L1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Av(a.retryLane, t));
    }
    function u0(e, t) {
      L1(e, t);
      var a = e.alternate;
      a && L1(a, t);
    }
    function zb(e) {
      if (e.tag === Pe) {
        var t = Ru, a = ca(e, t);
        if (a !== null) {
          var i = Pr();
          Hn(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function Ub(e) {
      if (e.tag === Pe) {
        var t = no(e), a = ca(e, t);
        if (a !== null) {
          var i = Pr();
          Hn(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function M1(e) {
      var t = Ev(e);
      return t === null ? null : t.stateNode;
    }
    var N1 = function(e) {
      return null;
    };
    function Ab(e) {
      return N1(e);
    }
    var z1 = function(e) {
      return !1;
    };
    function Fb(e) {
      return z1(e);
    }
    var U1 = null, A1 = null, F1 = null, H1 = null, V1 = null, j1 = null, B1 = null, P1 = null, $1 = null;
    {
      var Y1 = function(e, t, a) {
        var i = t[a], u = mn(e) ? e.slice() : Qe({}, e);
        return a + 1 === t.length ? (mn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Y1(e[i], t, a + 1), u);
      }, I1 = function(e, t) {
        return Y1(e, t, 0);
      }, Q1 = function(e, t, a, i) {
        var u = t[i], s = mn(e) ? e.slice() : Qe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], mn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Q1(
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, G1 = function(e, t, a) {
        if (t.length !== a.length) {
          oe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              oe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Q1(e, t, a, 0);
      }, W1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = mn(e) ? e.slice() : Qe({}, e);
        return s[u] = W1(e[u], t, a + 1, i), s;
      }, X1 = function(e, t, a) {
        return W1(e, t, 0, a);
      }, o0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      U1 = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = X1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Qe({}, e.memoizedProps);
          var f = ca(e, De);
          f !== null && Hn(f, e, De, Tt);
        }
      }, A1 = function(e, t, a) {
        var i = o0(e, t);
        if (i !== null) {
          var u = I1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Qe({}, e.memoizedProps);
          var s = ca(e, De);
          s !== null && Hn(s, e, De, Tt);
        }
      }, F1 = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = G1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Qe({}, e.memoizedProps);
          var f = ca(e, De);
          f !== null && Hn(f, e, De, Tt);
        }
      }, H1 = function(e, t, a) {
        e.pendingProps = X1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ca(e, De);
        i !== null && Hn(i, e, De, Tt);
      }, V1 = function(e, t) {
        e.pendingProps = I1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ca(e, De);
        a !== null && Hn(a, e, De, Tt);
      }, j1 = function(e, t, a) {
        e.pendingProps = G1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ca(e, De);
        i !== null && Hn(i, e, De, Tt);
      }, B1 = function(e) {
        var t = ca(e, De);
        t !== null && Hn(t, e, De, Tt);
      }, P1 = function(e) {
        N1 = e;
      }, $1 = function(e) {
        z1 = e;
      };
    }
    function Hb(e) {
      var t = na(e);
      return t === null ? null : t.stateNode;
    }
    function Vb(e) {
      return null;
    }
    function jb() {
      return qt;
    }
    function Bb(e) {
      var t = e.findFiberByHostInstance, a = C.ReactCurrentDispatcher;
      return Zf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: U1,
        overrideHookStateDeletePath: A1,
        overrideHookStateRenamePath: F1,
        overrideProps: H1,
        overridePropsDeletePath: V1,
        overridePropsRenamePath: j1,
        setErrorHandler: P1,
        setSuspenseHandler: $1,
        scheduleUpdate: B1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Hb,
        findFiberByHostInstance: t || Vb,
        findHostInstancesForRefresh: yb,
        scheduleRefresh: hb,
        scheduleRoot: mb,
        setRefreshHandler: vb,
        getCurrentFiber: jb,
        reconcilerVersion: a0
      });
    }
    var K1 = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function s0(e) {
      this._internalRoot = e;
    }
    km.prototype.render = s0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : _m(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Zt) {
          var i = M1(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      wp(e, t, null, null);
    }, km.prototype.unmount = s0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        o1() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), eu(function() {
          wp(null, e, null, null);
        }), X0(t);
      }
    };
    function Pb(e, t) {
      if (!_m(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      q1(e);
      var a = !1, i = !1, u = "", s = K1;
      t != null && (t.hydrate ? oe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === bi && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = _1(e, Rh, null, a, i, u, s);
      mh(f.current, e);
      var p = e.nodeType === Zt ? e.parentNode : e;
      return Nd(p), new s0(f);
    }
    function km(e) {
      this._internalRoot = e;
    }
    function $b(e) {
      e && Yv(e);
    }
    km.prototype.unstable_scheduleHydration = $b;
    function Yb(e, t, a) {
      if (!_m(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      q1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a != null ? a : null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = K1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = O1(t, null, e, Rh, i, s, f, p, v);
      if (mh(m.current, e), Nd(e), u)
        for (var y = 0; y < u.length; y++) {
          var w = u[y];
          Zx(m, w);
        }
      return new km(m);
    }
    function _m(e) {
      return !!(e && (e.nodeType === vr || e.nodeType === xa || e.nodeType === yl || !st));
    }
    function Dp(e) {
      return !!(e && (e.nodeType === vr || e.nodeType === xa || e.nodeType === yl || e.nodeType === Zt && e.nodeValue === " react-mount-point-unstable "));
    }
    function q1(e) {
      e.nodeType === vr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Yd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ib = C.ReactCurrentOwner, Z1;
    Z1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Zt) {
        var t = M1(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = c0(e), u = !!(i && $u(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === vr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function c0(e) {
      return e ? e.nodeType === xa ? e.documentElement : e.firstChild : null;
    }
    function J1() {
    }
    function Qb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var R = bm(f);
            s.call(R);
          };
        }
        var f = O1(
          t,
          i,
          e,
          Iu,
          null,
          !1,
          !1,
          "",
          J1
        );
        e._reactRootContainer = f, mh(f.current, e);
        var p = e.nodeType === Zt ? e.parentNode : e;
        return Nd(p), eu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var R = bm(y);
            m.call(R);
          };
        }
        var y = _1(
          e,
          Iu,
          null,
          !1,
          !1,
          "",
          J1
        );
        e._reactRootContainer = y, mh(y.current, e);
        var w = e.nodeType === Zt ? e.parentNode : e;
        return Nd(w), eu(function() {
          wp(t, y, a, i);
        }), y;
      }
    }
    function Gb(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Om(e, t, a, i, u) {
      Z1(a), Gb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Qb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = bm(f);
            p.call(v);
          };
        }
        wp(t, f, e, u);
      }
      return bm(f);
    }
    function Wb(e) {
      {
        var t = Ib.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ct(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === vr ? e : Mb(e, "findDOMNode");
    }
    function Xb(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Yd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Om(null, e, t, !0, a);
    }
    function Kb(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Yd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Om(null, e, t, !1, a);
    }
    function qb(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ko(e))
        throw new Error("parentComponent must be a valid React Component");
      return Om(e, t, a, !1, i);
    }
    function Zb(e) {
      if (!Dp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Yd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = c0(e), i = a && !$u(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return eu(function() {
          Om(null, null, e, !1, function() {
            e._reactRootContainer = null, X0(e);
          });
        }), !0;
      } else {
        {
          var u = c0(e), s = !!(u && $u(u)), f = e.nodeType === vr && Dp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    le(Nb), Hv(zb), $o(Ub), hd(ia), jv(jo), (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gv(tR), Fs(BS, YD, eu);
    function Jb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_m(t))
        throw new Error("Target container is not a DOM element.");
      return Lb(e, t, null, a);
    }
    function ek(e, t, a, i) {
      return qb(e, t, a, i);
    }
    var f0 = {
      usingClientEntryPoint: !1,
      Events: [$u, Vc, yh, As, wo, BS]
    };
    function tk(e, t) {
      return f0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Pb(e, t);
    }
    function nk(e, t, a) {
      return f0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Yb(e, t, a);
    }
    function rk(e) {
      return o1() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), eu(e);
    }
    var ak = Bb({
      findFiberByHostInstance: Jo,
      bundleType: 1,
      version: a0,
      rendererPackageName: "react-dom"
    });
    if (!ak && pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var eT = window.location.protocol;
      /^(https?|file):$/.test(eT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (eT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f0, ha.createPortal = Jb, ha.createRoot = tk, ha.findDOMNode = Wb, ha.flushSync = rk, ha.hydrate = Xb, ha.hydrateRoot = nk, ha.render = Kb, ha.unmountComponentAtNode = Zb, ha.unstable_batchedUpdates = BS, ha.unstable_renderSubtreeIntoContainer = ek, ha.version = a0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ha;
}
(function(b) {
  function D() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D);
      } catch (C) {
        console.error(C);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (D(), b.exports = xk()) : b.exports = wk();
})(g0);
const Dk = /* @__PURE__ */ mk(g0.exports), sT = [
  "setCallback",
  "dispatch",
  "registerValidateFields",
  "resetFields",
  "setFields",
  "setFieldsValue",
  "getFieldsValue",
  "getFieldValue",
  "validateFields",
  "submit",
  "unRegisterValidate"
], bk = (b) => b instanceof RegExp;
class S0 {
  constructor(D, C = {}) {
    this.FormUpdate = D, this.model = {}, this.control = {}, this.isSchedule = !1, this.callback = {}, this.penddingValidateQueue = [], this.defaultFormValue = C;
  }
  getForm() {
    return sT.reduce((D, C) => (D[C] = this[C].bind(this), D), {});
  }
  static createValidate(D) {
    const { value: C, rule: Y, required: ue, message: oe } = D;
    return {
      value: C,
      rule: Y || (() => !0),
      required: ue || !1,
      message: oe || "",
      status: "pendding"
    };
  }
  setCallback(D) {
    D && (this.callback = D);
  }
  dispatch(D, ...C) {
    if (!D && typeof D != "object")
      return null;
    const { type: Y } = D;
    if (~sT.indexOf(Y))
      return this[Y](...C);
    if (typeof this[Y] == "function")
      return this[Y](...C);
  }
  registerValidateFields(D, C, Y) {
    this.defaultFormValue[D] && (Y.value = this.defaultFormValue[D]);
    const ue = S0.createValidate(Y);
    this.model[D] = ue, this.control[D] = C;
  }
  unRegisterValidate(D) {
    delete this.model[D], delete this.control[D];
  }
  resetFields() {
    Object.keys(this.model).forEach((D) => {
      this.setValueClearStatus(this.model[D], D, null);
    });
  }
  setFields(D) {
    typeof D == "object" && Object.keys(D).forEach((C) => {
      this.setFieldsValue(C, D[C]);
    });
  }
  setFieldsValue(D, C) {
    const Y = this.model[D];
    if (!Y)
      return !1;
    if (typeof C == "object") {
      const { message: ue, rule: oe, value: g } = C;
      ue && (Y.message = ue), oe && (Y.rule = oe), g && (Y.value = g), Y.status = "pendding", this.validateFieldValue(D, !0);
    } else
      this.setValueClearStatus(Y, D, C);
  }
  setValueClearStatus(D, C, Y) {
    D.value = Y, D.status = "pendding", this.notifyChange(C);
  }
  notifyChange(D) {
    const C = this.control[D];
    C && (C == null || C.changeValue());
  }
  getFieldsValue() {
    const D = {};
    return Object.keys(this.model).forEach((C) => {
      D[C] = this.model[C].value;
    }), D;
  }
  getFieldModel(D) {
    const C = this.model[D];
    return C || {};
  }
  getFieldValue(D) {
    const C = this.model[D];
    return !C && this.defaultFormValue[D] ? this.defaultFormValue[D] : C ? C.value : null;
  }
  validateFieldValue(D, C = !1) {
    const Y = this.model[D], ue = Y.status;
    if (!Y)
      return null;
    const { required: oe, rule: g, value: ze } = Y;
    let Q = "resolve";
    if (oe && !ze ? Q = "reject" : bk(g) ? Q = g.test(ze) ? "resolve" : "reject" : typeof g == "function" && (Q = g(ze) ? "resolve" : "reject"), Y.status = Q, ue !== Q || C) {
      const ie = this.notifyChange.bind(this, D);
      this.penddingValidateQueue.push(ie);
    }
    return this.scheduleValidate(), Q;
  }
  scheduleValidate() {
    this.isSchedule || (this.isSchedule = !0, Promise.resolve().then(() => {
      g0.exports.unstable_batchedUpdates(() => {
        do {
          let D = this.penddingValidateQueue.shift();
          D && D();
        } while (this.penddingValidateQueue.length > 0);
        this.isSchedule = !1;
      });
    }));
  }
  validateFields(D) {
    let C = !0;
    Object.keys(this.model).forEach((Y) => {
      this.validateFieldValue(Y, !0) === "reject" && (C = !1);
    }), D(C);
  }
  submit(D) {
    this.validateFields((C) => {
      const { onFinish: Y, onFinishFailed: ue } = this.callback;
      D && D(C), C || ue && typeof ue == "function" && ue(), Y && typeof Y == "function" && Y(this.getFieldsValue());
    });
  }
}
function kk(b, D = {}) {
  const C = cl.useRef(null), [, Y] = cl.useState({});
  if (!C.current)
    if (b)
      C.current = b;
    else {
      const ue = new S0(Y, D);
      C.current = ue.getForm();
    }
  return C.current;
}
function _k({
  form: b,
  onFinish: D,
  onFinishFailed: C,
  initialValues: Y,
  children: ue
}, oe) {
  const g = kk(b, Y), {
    setCallback: ze,
    dispatch: Q,
    ...ie
  } = g;
  ze({
    onFinish: D,
    onFinishFailed: C
  }), ck(oe, () => ie, []);
  const Ke = /* @__PURE__ */ hs(hT.Provider, {
    value: g,
    children: [" ", ue, " "]
  });
  return /* @__PURE__ */ fn("form", {
    onReset: (W) => {
      W.preventDefault(), W.stopPropagation(), g.resetFields();
    },
    onSubmit: (W) => {
      W.preventDefault(), W.stopPropagation(), g.submit();
    },
    children: Ke
  });
}
const Ok = sk(_k);
function Lk(b) {
  const {
    status: D,
    message: C,
    required: Y,
    name: ue,
    value: oe
  } = b;
  let g = "", ze = "#fff";
  return Y && !oe && D === "reject" ? (g = `${ue} \u4E3A\u5FC5\u586B\u9879`, ze = "red") : D === "reject" ? (g = C, ze = "red") : D === "pendding" ? g = null : D === "resolve" && (g = "\u6821\u9A8C\u901A\u8FC7", ze = "green"), /* @__PURE__ */ fn("div", {
    className: "form-message",
    children: D === "resolve" || D === "pendding" ? /* @__PURE__ */ fn(Sk, {}) : /* @__PURE__ */ fn("span", {
      style: {
        color: ze
      },
      children: g
    })
  });
}
function Mk({
  children: b,
  label: D,
  labelWidth: C,
  required: Y,
  height: ue
}) {
  return /* @__PURE__ */ hs("div", {
    className: "form-label",
    style: {
      height: ue + "px"
    },
    children: [/* @__PURE__ */ hs("div", {
      className: "form-label-name",
      style: {
        width: `${C}px`
      },
      children: [Y ? /* @__PURE__ */ fn("span", {
        style: {
          color: "red"
        },
        children: "*"
      }) : null, D, ":"]
    }), "  ", b]
  });
}
function Nk({
  name: b,
  children: D,
  label: C,
  height: Y = 50,
  labelWidth: ue,
  required: oe = !1,
  rules: g = {},
  trigger: ze = "onChange",
  validateTrigger: Q = "onChange"
}) {
  const ie = m0(hT), {
    registerValidateFields: Ke,
    dispatch: W,
    unRegisterValidate: ve
  } = ie, [, se] = fk({}), Ue = y0(() => ({
    changeValue() {
      se({});
    }
  }), [ie]);
  Op(() => (b && Ke(b, Ue, {
    ...g,
    required: oe
  }), function() {
    b && ve(b);
  }), [Ue]);
  const lt = (It) => {
    const Ie = {
      ...It.props
    };
    if (!b)
      return Ie;
    const Ve = (ot) => {
      const Pe = ot.target.value;
      W({
        type: "setFieldsValue"
      }, b, Pe);
    };
    return Ie[ze] = Ve, (oe || g) && (Ie[Q] = (ot) => {
      Q === ze && Ve(ot), W({
        type: "validateFieldValue"
      }, b);
    }), Ie.value = W({
      type: "getFieldValue"
    }, b) || "", Ie;
  };
  let ut;
  return pT(D) ? ut = vT(D, lt(D)) : ut = D, /* @__PURE__ */ hs(Mk, {
    height: Y,
    label: C,
    labelWidth: ue,
    required: oe,
    children: [ut, /* @__PURE__ */ fn(Lk, {
      name: b,
      ...W({
        type: "getFieldModel"
      }, b)
    })]
  });
}
const zk = dT(Nk), qk = (b) => /* @__PURE__ */ fn("input", {
  className: "form-input",
  ...b
});
function Uk({
  children: b,
  ...D
}) {
  return /* @__PURE__ */ hs("select", {
    ...D,
    className: "form-input",
    children: [/* @__PURE__ */ fn("option", {
      label: D.placeholder,
      value: null,
      children: D.placeholder
    }), b]
  });
}
Uk.Option = function(b) {
  return /* @__PURE__ */ fn("option", {
    ...b,
    className: "",
    label: b.children
  });
};
function Ak(b, D) {
  const C = () => new Promise(async (Y) => {
    const ue = await D();
    Y({
      default: (oe) => /* @__PURE__ */ fn(b, {
        rdata: ue,
        ...oe
      })
    });
  });
  return cl.lazy(C);
}
const Fk = () => new Promise((b) => {
  setTimeout(() => {
    b({
      name: "alien",
      say: "let us learn React!"
    });
  }, 3e3);
});
function Hk({
  rdata: b,
  age: D
}) {
  return /* @__PURE__ */ fn("div", {
    children: /* @__PURE__ */ fn("text", {
      children: "\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u7EC4\u4EF6"
    })
  });
}
class Zk extends cl.Component {
  constructor() {
    super(...arguments);
    tT(this, "LazyTest", Ak(Hk, Fk));
  }
  render() {
    const {
      LazyTest: C
    } = this;
    return /* @__PURE__ */ fn("div", {
      children: /* @__PURE__ */ fn(dk, {
        fallback: /* @__PURE__ */ fn("div", {
          children: "loading..."
        }),
        children: /* @__PURE__ */ fn(C, {
          age: 18
        })
      })
    });
  }
}
const C0 = fT({}), Lm = "created", Lp = "active", yT = "actived", Mm = "unActive", ff = "unActived", gT = "destory", ST = "update", Vk = "__keepalive__";
function jk(b) {
  return Object.prototype.toString.call(b).slice(8, -1);
}
function Bk(b) {
  return jk(b) === "Function";
}
class CT {
  constructor(D, C) {
    this.setState = D, this.maxLimit = C, this.cacheList = [], this.kid = -1;
  }
  cacheDispatch({
    type: D,
    payload: C
  }) {
    this[D] && this[D](C), D !== Lm && this.setState({});
  }
  getKid() {
    return this.kid++, Vk + this.kid;
  }
  hasAliveStatus(D) {
    const C = this.cacheList.findIndex((Y) => Y.cacheId === D);
    return C >= 0 ? this.cacheList[C].status : null;
  }
  destoryItem(D) {
    const C = this.cacheList.findIndex((Y) => Y.cacheId === D);
    C !== -1 && this.cacheList[C].status === ff && this.cacheList.splice(C, 1);
  }
  [ST](D) {
    const {
      cacheId: C,
      children: Y
    } = D, ue = this.cacheList.findIndex((oe) => oe.cacheId === C);
    ue !== -1 && (this.cacheList[ue].updater = {}, this.cacheList[ue].children = Y);
  }
  [Lm](D) {
    const {
      children: C,
      load: Y,
      cacheId: ue
    } = D, oe = {
      cacheId: ue || this.getKid(),
      load: Y,
      status: Lm,
      children: C,
      updater: {}
    };
    this.cacheList.push(oe);
  }
  [gT](D) {
    Array.isArray(D) ? D.forEach(this.destoryItem.bind(this)) : this.destoryItem(D);
  }
  [Lp](D) {
    const {
      cacheId: C,
      load: Y
    } = D, ue = this.cacheList.findIndex((oe) => oe.cacheId === C);
    ue !== -1 && (this.cacheList[ue].status = Lp, this.cacheList[ue].load = Y);
  }
}
[Mm, yT, ff].forEach((b) => {
  CT.prototype[b] = function(D) {
    for (let C = 0; C < this.cacheList.length; C++)
      if (this.cacheList[C].cacheId === D) {
        this.cacheList[C].status = b;
        break;
      }
  };
});
function Pk(b) {
  const D = cl.useRef(), [, C] = cl.useState([]);
  return D.current || (D.current = new CT(C, b)), D.current;
}
const $k = 10, Yk = (b, D) => b.status === D.status && b.updater === D.updater, Nm = {}, Ik = dT(function({
  cacheId: b,
  updater: D,
  children: C,
  status: Y,
  dispatch: ue,
  load: oe = () => {
  }
}) {
  const g = h0(), ze = Y === Lp || Y === yT || Y === Mm || Y === ff ? C : () => null, Q = Dk.createPortal(/* @__PURE__ */ fn("div", {
    ref: g,
    style: {
      display: Y === ff ? "none" : "block"
    },
    children: y0(() => ze(), [D])
  }), document.body);
  return Op(() => (Nm[b] = function() {
    g.current && document.body.appendChild(g.current);
  }, function() {
    delete Nm[b];
  }), []), Op(() => {
    Y === Lp ? oe && oe(g.current) : Y === Mm && (document.body.appendChild(g.current), ue({
      type: ff,
      payload: b
    }));
  }, [Y]), Q;
}, Yk);
function Jk({
  children: b,
  maxLimit: D = $k
}) {
  const C = Pk(D), {
    cacheDispatch: Y,
    cacheList: ue,
    hasAliveStatus: oe
  } = C, g = pk(b, []);
  Op(() => function() {
    try {
      for (let Q in Nm)
        Nm[Q]();
    } catch {
    }
  }, []);
  const ze = y0(() => ({
    cacheDispatch: Y.bind(C),
    hasAliveStatus: oe.bind(C),
    cacheDestory: (Q) => Y.call(C, {
      type: gT,
      payload: Q
    })
  }), [C]);
  return /* @__PURE__ */ hs(C0.Provider, {
    value: ze,
    children: [g, ue.map((Q) => /* @__PURE__ */ vk(Ik, {
      ...Q,
      dispatch: Y.bind(C),
      key: Q.cacheId
    }))]
  });
}
const cT = (b) => (D) => b ? Bk(b) ? b(D) : pT(b) ? vT(b, D) : null : null;
function e_({
  children: b,
  cacheId: D,
  style: C
}) {
  const {
    cacheDispatch: Y,
    hasAliveStatus: ue
  } = m0(C0), oe = h0(!1), g = h0(null), ze = (Q) => {
    g.current.appendChild(Q);
  };
  return !oe.current && !ue(D) && Y({
    type: Lm,
    payload: {
      load: ze,
      cacheId: D,
      children: cT(b)
    }
  }), hk(() => {
    ue(D) !== ff && oe.current && Y({
      type: ST,
      payload: {
        cacheId: D,
        children: cT(b)
      }
    });
  }, [b]), Op(() => (oe.current = !0, Y({
    type: Lp,
    payload: {
      cacheId: D,
      load: ze
    }
  }), function() {
    Y({
      type: Mm,
      payload: D
    });
  }), []), /* @__PURE__ */ fn("div", {
    ref: g,
    style: C
  });
}
function t_() {
  return m0(C0).cacheDestory;
}
Ok.FormItem = zk;
export {
  Ak as AsyncComponent,
  Zk as AsyncDemo,
  Ok as Form,
  zk as FormItem,
  qk as Input,
  e_ as KeepaliveItem,
  Jk as KeepaliveScope,
  Ek as SButton,
  Uk as Select,
  t_ as useCacheDestroy
};
//# sourceMappingURL=react-ui-gm.esm.js.map
