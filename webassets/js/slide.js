/*!
 * Splide.js
 * Version  : 4.1.2
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).Splide = t()
}(this, function() {
    "use strict";
    var n = "(prefers-reduced-motion: reduce)";

    function t(n) {
        n.length = 0
    }

    function e(n, t, e) {
        return Array.prototype.slice.call(n, t, e)
    }

    function i(n) {
        return n.bind.apply(n, [null].concat(e(arguments, 1)))
    }
    var o = setTimeout,
        r = function n() {};

    function u(n) {
        return requestAnimationFrame(n)
    }

    function s(n, t) {
        return typeof t === n
    }

    function c(n) {
        return !v(n) && s("object", n)
    }
    var a = Array.isArray,
        f = i(s, "function"),
        l = i(s, "string"),
        d = i(s, "undefined");

    function v(n) {
        return null === n
    }

    function p(n) {
        try {
            return n instanceof(n.ownerDocument.defaultView || window).HTMLElement
        } catch (t) {
            return !1
        }
    }

    function h(n) {
        return a(n) ? n : [n]
    }

    function g(n, t) {
        h(n).forEach(t)
    }

    function $(n, t) {
        return n.indexOf(t) > -1
    }

    function m(n, t) {
        return n.push.apply(n, h(t)), n
    }

    function _(n, t, e) {
        n && g(t, function(t) {
            t && n.classList[e ? "add" : "remove"](t)
        })
    }

    function y(n, t) {
        _(n, l(t) ? t.split(" ") : t, !0)
    }

    function b(n, t) {
        g(t, n.appendChild.bind(n))
    }

    function w(n, t) {
        g(n, function(n) {
            var e = (t || n).parentNode;
            e && e.insertBefore(n, t)
        })
    }

    function E(n, t) {
        return p(n) && (n.msMatchesSelector || n.matches).call(n, t)
    }

    function x(n, t) {
        var i = n ? e(n.children) : [];
        return t ? i.filter(function(n) {
            return E(n, t)
        }) : i
    }

    function S(n, t) {
        return t ? x(n, t)[0] : n.firstElementChild
    }
    var C = Object.keys;

    function P(n, t, e) {
        return n && (e ? C(n).reverse() : C(n)).forEach(function(e) {
            "__proto__" !== e && t(n[e], e)
        }), n
    }

    function k(n) {
        return e(arguments, 1).forEach(function(t) {
            P(t, function(e, i) {
                n[i] = t[i]
            })
        }), n
    }

    function L(n) {
        return e(arguments, 1).forEach(function(t) {
            P(t, function(t, e) {
                a(t) ? n[e] = t.slice() : c(t) ? n[e] = L({}, c(n[e]) ? n[e] : {}, t) : n[e] = t
            })
        }), n
    }

    function A(n, t) {
        g(t || C(n), function(t) {
            delete n[t]
        })
    }

    function D(n, t) {
        g(n, function(n) {
            g(t, function(t) {
                n && n.removeAttribute(t)
            })
        })
    }

    function z(n, t, e) {
        c(t) ? P(t, function(t, e) {
            z(n, e, t)
        }) : g(n, function(n) {
            v(e) || "" === e ? D(n, t) : n.setAttribute(t, String(e))
        })
    }

    function N(n, t, e) {
        var i = document.createElement(n);
        return t && (l(t) ? y(i, t) : z(i, t)), e && b(e, i), i
    }

    function I(n, t, e) {
        if (d(e)) return getComputedStyle(n)[t];
        v(e) || (n.style[t] = "" + e)
    }

    function M(n, t) {
        I(n, "display", t)
    }

    function T(n) {
        n.setActive && n.setActive() || n.focus({
            preventScroll: !0
        })
    }

    function O(n, t) {
        return n.getAttribute(t)
    }

    function R(n, t) {
        return n && n.classList.contains(t)
    }

    function F(n) {
        return n.getBoundingClientRect()
    }

    function W(n) {
        g(n, function(n) {
            n && n.parentNode && n.parentNode.removeChild(n)
        })
    }

    function X(n) {
        return S(new DOMParser().parseFromString(n, "text/html").body)
    }

    function j(n, t) {
        n.preventDefault(), t && (n.stopPropagation(), n.stopImmediatePropagation())
    }

    function G(n, t) {
        return n && n.querySelector(t)
    }

    function B(n, t) {
        return t ? e(n.querySelectorAll(t)) : []
    }

    function H(n, t) {
        _(n, t, !1)
    }

    function Y(n) {
        return n.timeStamp
    }

    function U(n) {
        return l(n) ? n : n ? n + "px" : ""
    }
    var q = "splide",
        K = "data-" + q;

    function V(n, t) {
        if (!n) throw Error("[" + q + "] " + (t || ""))
    }
    var J = Math.min,
        Q = Math.max,
        Z = Math.floor,
        nn = Math.ceil,
        nt = Math.abs;

    function ne(n, t, e) {
        return nt(n - t) < e
    }

    function ni(n, t, e, i) {
        var o = J(t, e),
            r = Q(t, e);
        return i ? o < n && n < r : o <= n && n <= r
    }

    function no(n, t, e) {
        var i = J(t, e),
            o = Q(t, e);
        return J(Q(i, n), o)
    }

    function nr(n) {
        return +(n > 0) - +(n < 0)
    }

    function nu(n, t) {
        return g(t, function(t) {
            n = n.replace("%s", "" + t)
        }), n
    }

    function ns(n) {
        return n < 10 ? "0" + n : "" + n
    }
    var nc = {};

    function na() {
        var n = [];

        function e(n, t, e) {
            g(n, function(n) {
                n && g(t, function(t) {
                    t.split(" ").forEach(function(t) {
                        var i = t.split(".");
                        e(n, i[0], i[1])
                    })
                })
            })
        }
        return {
            bind: function t(i, o, r, u) {
                e(i, o, function(t, e, i) {
                    var o = "addEventListener" in t,
                        s = o ? t.removeEventListener.bind(t, e, r, u) : t.removeListener.bind(t, r);
                    o ? t.addEventListener(e, r, u) : t.addListener(r), n.push([t, e, i, r, s])
                })
            },
            unbind: function t(i, o, r) {
                e(i, o, function(t, e, i) {
                    n = n.filter(function(n) {
                        return n[0] !== t || n[1] !== e || n[2] !== i || !!r && n[3] !== r || (n[4](), !1)
                    })
                })
            },
            dispatch: function n(t, e, i) {
                var o;
                return "function" == typeof CustomEvent ? o = new CustomEvent(e, {
                    bubbles: !0,
                    detail: i
                }) : (o = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !1, i), t.dispatchEvent(o), o
            },
            destroy: function e() {
                n.forEach(function(n) {
                    n[4]()
                }), t(n)
            }
        }
    }
    var nf = "mounted",
        nl = "ready",
        nd = "move",
        nv = "moved",
        np = "click",
        nh = "refresh",
        ng = "updated",
        n$ = "resize",
        nm = "resized",
        n_ = "scroll",
        ny = "scrolled",
        nb = "destroy",
        nw = "navigation:mounted",
        nE = "autoplay:play",
        nx = "autoplay:pause",
        nS = "lazyload:loaded";

    function nC(n) {
        var t = n ? n.event.bus : document.createDocumentFragment(),
            o = na();
        return n && n.event.on(nb, o.destroy), k(o, {
            bus: t,
            on: function n(e, i) {
                o.bind(t, h(e).join(" "), function(n) {
                    i.apply(i, a(n.detail) ? n.detail : [])
                })
            },
            off: i(o.unbind, t),
            emit: function n(i) {
                o.dispatch(t, i, e(arguments, 1))
            }
        })
    }

    function nP(n, t, e, i) {
        var o, r, s = Date.now,
            c = 0,
            a = !0,
            f = 0;

        function l() {
            if (!a) {
                if (c = n ? J((s() - o) / n, 1) : 1, e && e(c), c >= 1 && (t(), o = s(), i && ++f >= i)) return d();
                r = u(l)
            }
        }

        function d() {
            a = !0
        }

        function v() {
            r && cancelAnimationFrame(r), c = 0, r = 0, a = !0
        }

        function p(t) {
            n = t
        }

        function h() {
            return a
        }
        return {
            start: function t(e) {
                e || v(), o = s() - (e ? c * n : 0), a = !1, r = u(l)
            },
            rewind: function n() {
                o = s(), c = 0, e && e(c)
            },
            pause: d,
            cancel: v,
            set: p,
            isPaused: h
        }
    }
    var nk = "Arrow",
        nL = nk + "Left",
        n8 = nk + "Right",
        n2 = nk + "Up",
        nA = nk + "Down",
        nD = {
            width: ["height"],
            left: ["top", "right"],
            right: ["bottom", "left"],
            x: ["y"],
            X: ["Y"],
            Y: ["X"],
            ArrowLeft: [n2, n8],
            ArrowRight: [nA, nL]
        },
        nz = "role",
        nN = "tabindex",
        nI = "aria-",
        nM = nI + "controls",
        nT = nI + "current",
        n3 = nI + "selected",
        nO = nI + "label",
        nR = nI + "labelledby",
        n1 = nI + "hidden",
        n0 = nI + "orientation",
        n4 = nI + "roledescription",
        nF = nI + "live",
        nW = nI + "busy",
        nX = nI + "atomic",
        nj = [nz, nN, "disabled", nM, nT, nO, nR, n1, n0, n4],
        nG = q + "__",
        n6 = q,
        nB = nG + "track",
        nH = nG + "list",
        nY = nG + "slide",
        nU = nY + "--clone",
        n5 = nY + "__container",
        nq = nG + "arrows",
        nK = nG + "arrow",
        nV = nK + "--prev",
        n7 = nK + "--next",
        nJ = nG + "pagination",
        nQ = nJ + "__page",
        nZ = nG + "progress__bar",
        n9 = nG + "toggle",
        tn = nG + "sr",
        tt = "is-active",
        te = "is-prev",
        ti = "is-next",
        to = "is-visible",
        tr = "is-loading",
        tu = "is-focus-in",
        ts = "is-overflow",
        tc = [tt, to, te, ti, tr, tu, ts],
        ta = "touchstart mousedown",
        tf = "touchmove mousemove",
        tl = "touchend touchcancel mouseup click",
        td = "slide",
        tv = "loop",
        tp = "fade",
        th = K + "-interval",
        tg = {
            passive: !1,
            capture: !0
        },
        t$ = {
            Spacebar: " ",
            Right: n8,
            Left: nL,
            Up: n2,
            Down: nA
        };

    function tm(n) {
        return t$[n = l(n) ? n : n.key] || n
    }
    var t_ = "keydown",
        ty = K + "-lazy",
        tb = ty + "-srcset",
        tw = "[" + ty + "], [" + tb + "]",
        tE = [" ", "Enter"],
        tx = Object.freeze({
            __proto__: null,
            Media: function t(e, i, o) {
                var r = e.state,
                    u = o.breakpoints || {},
                    s = o.reducedMotion || {},
                    c = na(),
                    a = [];

                function f(n) {
                    n && c.destroy()
                }

                function l(n, t) {
                    var e = matchMedia(t);
                    c.bind(e, "change", d), a.push([n, e])
                }

                function d() {
                    var n = r.is(7),
                        t = o.direction,
                        i = a.reduce(function(n, t) {
                            return L(n, t[1].matches ? t[0] : {})
                        }, {});
                    A(o), v(i), o.destroy ? e.destroy("completely" === o.destroy) : n ? (f(!0), e.mount()) : t !== o.direction && e.refresh()
                }

                function v(n, t, i) {
                    L(o, n), t && L(Object.getPrototypeOf(o), n), (i || !r.is(1)) && e.emit(ng, o)
                }
                return {
                    setup: function t() {
                        var e = "min" === o.mediaQuery;
                        C(u).sort(function(n, t) {
                            return e ? +n - +t : +t - +n
                        }).forEach(function(n) {
                            l(u[n], "(" + (e ? "min" : "max") + "-width:" + n + "px)")
                        }), l(s, n), d()
                    },
                    destroy: f,
                    reduce: function t(e) {
                        matchMedia(n).matches && (e ? L(o, s) : A(o, C(s)))
                    },
                    set: v
                }
            },
            Direction: function n(t, e, i) {
                return {
                    resolve: function n(t, e, o) {
                        var r = "rtl" !== (o = o || i.direction) || e ? "ttb" === o ? 0 : -1 : 1;
                        return nD[t] && nD[t][r] || t.replace(/width|left|right/i, function(n, t) {
                            var e = nD[n.toLowerCase()][r] || n;
                            return t > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e
                        })
                    },
                    orient: function n(t) {
                        return t * ("rtl" === i.direction ? 1 : -1)
                    }
                }
            },
            Elements: function n(e, i, o) {
                var r, u, s, c = nC(e),
                    a = c.on,
                    l = c.bind,
                    d = e.root,
                    v = o.i18n,
                    p = {},
                    h = [],
                    g = [],
                    $ = [];

                function b() {
                    var n, t, e;
                    r = L("." + nB), u = S(r, "." + nH), V(r && u, "A track/list element is missing."), m(h, x(u, "." + nY + ":not(." + nU + ")")), P({
                        arrows: nq,
                        pagination: nJ,
                        prev: nV,
                        next: n7,
                        bar: nZ,
                        toggle: n9
                    }, function(n, t) {
                        p[t] = L("." + n)
                    }), k(p, {
                        root: d,
                        track: r,
                        list: u,
                        slides: h
                    }), t = d.id || "" + (n = q) + ns(nc[n] = (nc[n] || 0) + 1), e = o.role, d.id = t, r.id = r.id || t + "-track", u.id = u.id || t + "-list", !O(d, nz) && "SECTION" !== d.tagName && e && z(d, nz, e), z(d, n4, v.carousel), z(u, nz, "presentation"), C()
                }

                function w(n) {
                    var e = nj.concat("style");
                    t(h), H(d, g), H(r, $), D([r, u], e), D(d, n ? e : ["style", n4])
                }

                function C() {
                    H(d, g), H(r, $), g = A(n6), $ = A(nB), y(d, g), y(r, $), z(d, nO, o.label), z(d, nR, o.labelledby)
                }

                function L(n) {
                    var t = G(d, n);
                    return t && function n(t, e) {
                        if (f(t.closest)) return t.closest(e);
                        for (var i = t; i && 1 === i.nodeType && !E(i, e);) i = i.parentElement;
                        return i
                    }(t, "." + n6) === d ? t : void 0
                }

                function A(n) {
                    return [n + "--" + o.type, n + "--" + o.direction, o.drag && n + "--draggable", o.isNavigation && n + "--nav", n === n6 && tt]
                }
                return k(p, {
                    setup: b,
                    mount: function n() {
                        a(nh, w), a(nh, b), a(ng, C), l(document, ta + " keydown", function(n) {
                            s = "keydown" === n.type
                        }, {
                            capture: !0
                        }), l(d, "focusin", function() {
                            _(d, tu, !!s)
                        })
                    },
                    destroy: w
                })
            },
            Slides: function n(e, o, r) {
                var u = nC(e),
                    s = u.on,
                    c = u.emit,
                    a = u.bind,
                    d = o.Elements,
                    v = d.slides,
                    m = d.list,
                    x = [];

                function C() {
                    v.forEach(function(n, t) {
                        k(n, t, -1)
                    })
                }

                function P() {
                    A(function(n) {
                        n.destroy()
                    }), t(x)
                }

                function k(n, t, o) {
                    var r = function n(t, e, o, r) {
                        var u, s = nC(t),
                            c = s.on,
                            a = s.emit,
                            f = s.bind,
                            l = t.Components,
                            d = t.root,
                            v = t.options,
                            p = v.isNavigation,
                            h = v.updateOnMove,
                            g = v.i18n,
                            $ = v.pagination,
                            m = v.slideFocus,
                            y = l.Direction.resolve,
                            b = O(r, "style"),
                            w = O(r, nO),
                            E = o > -1,
                            x = S(r, "." + n5);

                        function C() {
                            var n = t.splides.map(function(n) {
                                var t = n.splide.Components.Slides.getAt(e);
                                return t ? t.slide.id : ""
                            }).join(" ");
                            z(r, nO, nu(g.slideX, (E ? o : e) + 1)), z(r, nM, n), z(r, nz, m ? "button" : ""), m && D(r, n4)
                        }

                        function P() {
                            u || k()
                        }

                        function k() {
                            if (!u) {
                                var n, i = t.index;
                                (n = L()) !== R(r, tt) && (_(r, tt, n), z(r, nT, p && n || ""), a(n ? "active" : "inactive", A)),
                                    function n() {
                                        var e = function n() {
                                                if (t.is(tp)) return L();
                                                var e = F(l.Elements.track),
                                                    i = F(r),
                                                    o = y("left", !0),
                                                    u = y("right", !0);
                                                return Z(e[o]) <= nn(i[o]) && Z(i[u]) <= nn(e[u])
                                            }(),
                                            i = !e && (!L() || E);
                                        if (t.state.is([4, 5]) || z(r, n1, i || ""), z(B(r, v.focusableNodes || ""), nN, i ? -1 : ""), m && z(r, nN, i ? -1 : 0), e !== R(r, to) && (_(r, to, e), a(e ? "visible" : "hidden", A)), !e && document.activeElement === r) {
                                            var o = l.Slides.getAt(t.index);
                                            o && T(o.slide)
                                        }
                                    }(), _(r, te, e === i - 1), _(r, ti, e === i + 1)
                            }
                        }

                        function L() {
                            var n = t.index;
                            return n === e || v.cloneStatus && n === o
                        }
                        var A = {
                            index: e,
                            slideIndex: o,
                            slide: r,
                            container: x,
                            isClone: E,
                            mount: function n() {
                                E || (r.id = d.id + "-slide" + ns(e + 1), z(r, nz, $ ? "tabpanel" : "group"), z(r, n4, g.slide), z(r, nO, w || nu(g.slideLabel, [e + 1, t.length]))), f(r, "click", i(a, np, A)), f(r, "keydown", i(a, "sk", A)), c([nv, "sh", ny], k), c(nw, C), h && c(nd, P)
                            },
                            destroy: function n() {
                                u = !0, s.destroy(), H(r, tc), D(r, nj), z(r, "style", b), z(r, nO, w || "")
                            },
                            update: k,
                            style: function n(t, e, i) {
                                I(i && x || r, t, e)
                            },
                            isWithin: function n(i, o) {
                                var r = nt(i - e);
                                return !E && (v.rewind || t.is(tv)) && (r = J(r, t.length - r)), r <= o
                            }
                        };
                        return A
                    }(e, t, o, n);
                    r.mount(), x.push(r), x.sort(function(n, t) {
                        return n.index - t.index
                    })
                }

                function L(n) {
                    return n ? N(function(n) {
                        return !n.isClone
                    }) : x
                }

                function A(n, t) {
                    L(t).forEach(n)
                }

                function N(n) {
                    return x.filter(f(n) ? n : function(t) {
                        return l(n) ? E(t.slide, n) : $(h(n), t.index)
                    })
                }
                return {
                    mount: function n() {
                        C(), s(nh, P), s(nh, C)
                    },
                    destroy: P,
                    update: function n() {
                        A(function(n) {
                            n.update()
                        })
                    },
                    register: k,
                    get: L,
                    getIn: function n(t) {
                        var e = o.Controller,
                            i = e.toIndex(t),
                            u = e.hasFocus() ? 1 : r.perPage;
                        return N(function(n) {
                            return ni(n.index, i, i + u - 1)
                        })
                    },
                    getAt: function n(t) {
                        return N(t)[0]
                    },
                    add: function n(t, e) {
                        g(t, function(n) {
                            if (l(n) && (n = X(n)), p(n)) {
                                var t, o, u, s, f = v[e];
                                f ? w(n, f) : b(m, n), y(n, r.classes.slide), t = n, o = i(c, n$), (s = (u = B(t, "img")).length) ? u.forEach(function(n) {
                                    a(n, "load error", function() {
                                        --s || o()
                                    })
                                }) : o()
                            }
                        }), c(nh)
                    },
                    remove: function n(t) {
                        W(N(t).map(function(n) {
                            return n.slide
                        })), c(nh)
                    },
                    forEach: A,
                    filter: N,
                    style: function n(t, e, i) {
                        A(function(n) {
                            n.style(t, e, i)
                        })
                    },
                    getLength: function n(t) {
                        return t ? v.length : x.length
                    },
                    isEnough: function n() {
                        return x.length > r.perPage
                    }
                }
            },
            Layout: function n(t, e, o) {
                var r, u, s, a = nC(t),
                    f = a.on,
                    l = a.bind,
                    d = a.emit,
                    v = e.Slides,
                    p = e.Direction.resolve,
                    h = e.Elements,
                    g = h.root,
                    $ = h.track,
                    m = h.list,
                    y = v.getAt,
                    b = v.style;

                function w() {
                    r = "ttb" === o.direction, I(g, "maxWidth", U(o.width)), I($, p("paddingLeft"), x(!1)), I($, p("paddingRight"), x(!0)), E(!0)
                }

                function E(n) {
                    var t, e = F(g);
                    (n || u.width !== e.width || u.height !== e.height) && (I($, "height", (t = "", r && (t = S(), V(t, "height or heightRatio is missing."), t = "calc(" + t + " - " + x(!1) + " - " + x(!0) + ")"), t)), b(p("marginRight"), U(o.gap)), b("width", o.autoWidth ? null : U(o.fixedWidth) || (r ? "" : C())), b("height", U(o.fixedHeight) || (r ? o.autoHeight ? null : C() : S()), !0), u = e, d(nm), s !== (s = z()) && (_(g, ts, s), d("overflow", s)))
                }

                function x(n) {
                    var t = o.padding,
                        e = p(n ? "right" : "left");
                    return t && U(t[e] || (c(t) ? 0 : t)) || "0px"
                }

                function S() {
                    return U(o.height || F(m).width * o.heightRatio)
                }

                function C() {
                    var n = U(o.gap);
                    return "calc((100%" + (n && " + " + n) + ")/" + (o.perPage || 1) + (n && " - " + n) + ")"
                }

                function P() {
                    return F(m)[p("width")]
                }

                function k(n, t) {
                    var e = y(n || 0);
                    return e ? F(e.slide)[p("width")] + (t ? 0 : D()) : 0
                }

                function L(n, t) {
                    var e = y(n);
                    if (e) {
                        var i = F(e.slide)[p("right")],
                            o = F(m)[p("left")];
                        return nt(i - o) + (t ? 0 : D())
                    }
                    return 0
                }

                function A(n) {
                    return L(t.length - 1) - L(0) + k(0, n)
                }

                function D() {
                    var n = y(0);
                    return n && parseFloat(I(n.slide, p("marginRight"))) || 0
                }

                function z() {
                    return t.is(tp) || A(!0) > P()
                }
                return {
                    mount: function n() {
                        var t, e;
                        w(), l(window, "resize load", (t = i(d, n$), e = nP(0, t, null, 1), function() {
                            e.isPaused() && e.start()
                        })), f([ng, nh], w), f(n$, E)
                    },
                    resize: E,
                    listSize: P,
                    slideSize: k,
                    sliderSize: A,
                    totalSize: L,
                    getPadding: function n(t) {
                        return parseFloat(I($, p("padding" + (t ? "Right" : "Left")))) || 0
                    },
                    isOverflow: z
                }
            },
            Clones: function n(e, i, o) {
                var r, u = nC(e),
                    s = u.on,
                    c = i.Elements,
                    a = i.Slides,
                    f = i.Direction.resolve,
                    l = [];

                function v() {
                    s(nh, p), s([ng, n$], g), (r = $()) && (function n(t) {
                        var i = a.get().slice(),
                            r = i.length;
                        if (r) {
                            for (; i.length < t;) m(i, i);
                            m(i.slice(-t), i.slice(0, t)).forEach(function(n, u) {
                                var s, f, d, v = u < t,
                                    p = (s = n.slide, f = u, d = s.cloneNode(!0), y(d, o.classes.clone), d.id = e.root.id + "-clone" + ns(f + 1), d);
                                v ? w(p, i[0].slide) : b(c.list, p), m(l, p), a.register(p, u - t + (v ? 0 : r), n.index)
                            })
                        }
                    }(r), i.Layout.resize(!0))
                }

                function p() {
                    h(), v()
                }

                function h() {
                    W(l), t(l), u.destroy()
                }

                function g() {
                    var n = $();
                    r !== n && (r < n || !n) && u.emit(nh)
                }

                function $() {
                    var n = o.clones;
                    if (e.is(tv)) {
                        if (d(n)) {
                            var t = o[f("fixedWidth")] && i.Layout.slideSize(0);
                            n = t && nn(F(c.track)[f("width")] / t) || o[f("autoWidth")] && e.length || 2 * o.perPage
                        }
                    } else n = 0;
                    return n
                }
                return {
                    mount: v,
                    destroy: h
                }
            },
            Move: function n(t, e, i) {
                var o, r = nC(t),
                    u = r.on,
                    s = r.emit,
                    c = t.state.set,
                    a = e.Layout,
                    f = a.slideSize,
                    l = a.getPadding,
                    v = a.totalSize,
                    p = a.listSize,
                    h = a.sliderSize,
                    g = e.Direction,
                    $ = g.resolve,
                    m = g.orient,
                    _ = e.Elements,
                    y = _.list,
                    b = _.track;

                function w() {
                    e.Controller.isBusy() || (e.Scroll.cancel(), E(t.index), e.Slides.update())
                }

                function E(n) {
                    x(k(n, !0))
                }

                function x(n, i) {
                    if (!t.is(tp)) {
                        var o = i ? n : function n(i) {
                            if (t.is(tv)) {
                                var o = P(i),
                                    r = o > e.Controller.getEnd();
                                (o < 0 || r) && (i = S(i, r))
                            }
                            return i
                        }(n);
                        I(y, "transform", "translate" + $("X") + "(" + o + "px)"), n !== o && s("sh")
                    }
                }

                function S(n, t) {
                    var e = n - A(t),
                        i = h();
                    return n - m(i * (nn(nt(e) / i) || 1)) * (t ? 1 : -1)
                }

                function C() {
                    x(L(), !0), o.cancel()
                }

                function P(n) {
                    for (var t = e.Slides.get(), i = 0, o = 1 / 0, r = 0; r < t.length; r++) {
                        var u = t[r].index,
                            s = nt(k(u, !0) - n);
                        if (s <= o) o = s, i = u;
                        else break
                    }
                    return i
                }

                function k(n, e) {
                    var o, r, u, s = m(v(n - 1) - (o = n, r = i.focus, "center" === r ? (p() - f(o, !0)) / 2 : +r * f(o) || 0));
                    return e ? (u = s, i.trimSpace && t.is(td) && (u = no(u, 0, m(h(!0) - p()))), u) : s
                }

                function L() {
                    var n = $("left");
                    return F(y)[n] - F(b)[n] + m(l(!1))
                }

                function A(n) {
                    return k(n ? e.Controller.getEnd() : 0, !!i.trimSpace)
                }
                return {
                    mount: function n() {
                        o = e.Transition, u([nf, nm, ng, nh], w)
                    },
                    move: function n(t, e, i, r) {
                        var u, a;
                        t !== e && (u = t > i, a = m(S(L(), u)), u ? a >