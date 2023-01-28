(function(e, t) { if (typeof define === "function" && define.amd) { define([], t) } else { e.htmx = e.htmx || t() } })(typeof self !== "undefined" ? self : this, function() { return function() { "use strict"; var z = { onLoad: t, process: mt, on: D, off: X, trigger: ee, ajax: or, find: C, findAll: R, closest: A, values: function(e, t) { var r = Bt(e, t || "post"); return r.values }, remove: O, addClass: q, removeClass: T, toggleClass: L, takeClass: H, defineExtension: dr, removeExtension: vr, logAll: E, logger: null, config: { historyEnabled: true, historyCacheSize: 10, refreshOnHistoryMiss: false, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: true, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: true, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: false, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: false, scrollBehavior: "smooth", defaultFocusScroll: false, getCacheBusterParam: false }, parseInterval: v, _: e, createEventSource: function(e) { return new EventSource(e, { withCredentials: true }) }, createWebSocket: function(e) { var t = new WebSocket(e, []);
                t.binaryType = z.config.wsBinaryType; return t }, version: "1.8.5" }; var r = { addTriggerHandler: ft, bodyContains: re, canAccessLocalStorage: S, filterValues: Wt, hasAttribute: o, getAttributeValue: J, getClosestMatch: h, getExpressionVars: rr, getHeaders: _t, getInputValues: Bt, getInternalData: K, getSwapSpecification: Gt, getTriggerSpecs: Xe, getTarget: se, makeFragment: f, mergeObjects: ne, makeSettleInfo: Zt, oobSwap: V, selectAndSwap: Oe, settleImmediately: At, shouldCancel: Ve, triggerEvent: ee, triggerErrorEvent: Q, withExtensions: wt }; var n = ["get", "post", "put", "delete", "patch"]; var i = n.map(function(e) { return "[hx-" + e + "], [data-hx-" + e + "]" }).join(", ");

        function v(e) { if (e == undefined) { return undefined } if (e.slice(-2) == "ms") { return parseFloat(e.slice(0, -2)) || undefined } if (e.slice(-1) == "s") { return parseFloat(e.slice(0, -1)) * 1e3 || undefined } if (e.slice(-1) == "m") { return parseFloat(e.slice(0, -1)) * 1e3 * 60 || undefined } return parseFloat(e) || undefined }

        function G(e, t) { return e.getAttribute && e.getAttribute(t) }

        function o(e, t) { return e.hasAttribute && (e.hasAttribute(t) || e.hasAttribute("data-" + t)) }

        function J(e, t) { return G(e, t) || G(e, "data-" + t) }

        function u(e) { return e.parentElement }

        function $() { return document }

        function h(e, t) { while (e && !t(e)) { e = u(e) } return e ? e : null }

        function a(e, t, r) { var n = J(t, r); var i = J(t, "hx-disinherit"); if (e !== t && i && (i === "*" || i.split(" ").indexOf(r) >= 0)) { return "unset" } else { return n } }

        function Z(t, r) { var n = null;
            h(t, function(e) { return n = a(t, e, r) }); if (n !== "unset") { return n } }

        function d(e, t) { var r = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector; return r && r.call(e, t) }

        function s(e) { var t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i; var r = t.exec(e); if (r) { return r[1].toLowerCase() } else { return "" } }

        function l(e, t) { var r = new DOMParser; var n = r.parseFromString(e, "text/html"); var i = n.body; while (t > 0) { t--;
                i = i.firstChild } if (i == null) { i = $().createDocumentFragment() } return i }

        function f(e) { if (z.config.useTemplateFragments) { var t = l("<body><template>" + e + "</template></body>", 0); return t.querySelector("template").content } else { var r = s(e); switch (r) {
                    case "thead":
                    case "tbody":
                    case "tfoot":
                    case "colgroup":
                    case "caption":
                        return l("<table>" + e + "</table>", 1);
                    case "col":
                        return l("<table><colgroup>" + e + "</colgroup></table>", 2);
                    case "tr":
                        return l("<table><tbody>" + e + "</tbody></table>", 2);
                    case "td":
                    case "th":
                        return l("<table><tbody><tr>" + e + "</tr></tbody></table>", 3);
                    case "script":
                        return l("<div>" + e + "</div>", 1);
                    default:
                        return l(e, 0) } } }

        function te(e) { if (e) { e() } }

        function g(e, t) { return Object.prototype.toString.call(e) === "[object " + t + "]" }

        function p(e) { return g(e, "Function") }

        function m(e) { return g(e, "Object") }

        function K(e) { var t = "htmx-internal-data"; var r = e[t]; if (!r) { r = e[t] = {} } return r }

        function y(e) { var t = []; if (e) { for (var r = 0; r < e.length; r++) { t.push(e[r]) } } return t }

        function Y(e, t) { if (e) { for (var r = 0; r < e.length; r++) { t(e[r]) } } }

        function x(e) { var t = e.getBoundingClientRect(); var r = t.top; var n = t.bottom; return r < window.innerHeight && n >= 0 }

        function re(e) { if (e.getRootNode && e.getRootNode() instanceof ShadowRoot) { return $().body.contains(e.getRootNode().host) } else { return $().body.contains(e) } }

        function b(e) { return e.trim().split(/\s+/) }

        function ne(e, t) { for (var r in t) { if (t.hasOwnProperty(r)) { e[r] = t[r] } } return e }

        function w(e) { try { return JSON.parse(e) } catch (e) { St(e); return null } }

        function S() { var e = "htmx:localStorageTest"; try { localStorage.setItem(e, e);
                localStorage.removeItem(e); return true } catch (e) { return false } }

        function e(e) { return Qt($().body, function() { return eval(e) }) }

        function t(t) { var e = z.on("htmx:load", function(e) { t(e.detail.elt) }); return e }

        function E() { z.logger = function(e, t, r) { if (console) { console.log(t, e, r) } } }

        function C(e, t) { if (t) { return e.querySelector(t) } else { return C($(), e) } }

        function R(e, t) { if (t) { return e.querySelectorAll(t) } else { return R($(), e) } }

        function O(e, t) { e = M(e); if (t) { setTimeout(function() { O(e) }, t) } else { e.parentElement.removeChild(e) } }

        function q(e, t, r) { e = M(e); if (r) { setTimeout(function() { q(e, t) }, r) } else { e.classList && e.classList.add(t) } }

        function T(e, t, r) { e = M(e); if (r) { setTimeout(function() { T(e, t) }, r) } else { if (e.classList) { e.classList.remove(t); if (e.classList.length === 0) { e.removeAttribute("class") } } } }

        function L(e, t) { e = M(e);
            e.classList.toggle(t) }

        function H(e, t) { e = M(e);
            Y(e.parentElement.children, function(e) { T(e, t) });
            q(e, t) }

        function A(e, t) { e = M(e); if (e.closest) { return e.closest(t) } else { do { if (e == null || d(e, t)) { return e } } while (e = e && u(e)); return null } }

        function N(e, t) { if (t.indexOf("closest ") === 0) { return [A(e, t.substr(8))] } else if (t.indexOf("find ") === 0) { return [C(e, t.substr(5))] } else if (t.indexOf("next ") === 0) { return [I(e, t.substr(5))] } else if (t.indexOf("previous ") === 0) { return [k(e, t.substr(9))] } else if (t === "document") { return [document] } else if (t === "window") { return [window] } else { return $().querySelectorAll(t) } } var I = function(e, t) { var r = $().querySelectorAll(t); for (var n = 0; n < r.length; n++) { var i = r[n]; if (i.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_PRECEDING) { return i } } }; var k = function(e, t) { var r = $().querySelectorAll(t); for (var n = r.length - 1; n >= 0; n--) { var i = r[n]; if (i.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_FOLLOWING) { return i } } };

        function ie(e, t) { if (t) { return N(e, t)[0] } else { return N($().body, e)[0] } }

        function M(e) { if (g(e, "String")) { return C(e) } else { return e } }

        function P(e, t, r) { if (p(t)) { return { target: $().body, event: e, listener: t } } else { return { target: M(e), event: t, listener: r } } }

        function D(t, r, n) { pr(function() { var e = P(t, r, n);
                e.target.addEventListener(e.event, e.listener) }); var e = p(r); return e ? r : n }

        function X(t, r, n) { pr(function() { var e = P(t, r, n);
                e.target.removeEventListener(e.event, e.listener) }); return p(r) ? r : n } var ae = $().createElement("output");

        function F(e, t) { var r = Z(e, t); if (r) { if (r === "this") { return [oe(e, t)] } else { var n = N(e, r); if (n.length === 0) { St('The selector "' + r + '" on ' + t + " returned no matches!"); return [ae] } else { return n } } } }

        function oe(e, t) { return h(e, function(e) { return J(e, t) != null }) }

        function se(e) { var t = Z(e, "hx-target"); if (t) { if (t === "this") { return oe(e, "hx-target") } else { return ie(e, t) } } else { var r = K(e); if (r.boosted) { return $().body } else { return e } } }

        function B(e) { var t = z.config.attributesToSettle; for (var r = 0; r < t.length; r++) { if (e === t[r]) { return true } } return false }

        function j(t, r) { Y(t.attributes, function(e) { if (!r.hasAttribute(e.name) && B(e.name)) { t.removeAttribute(e.name) } });
            Y(r.attributes, function(e) { if (B(e.name)) { t.setAttribute(e.name, e.value) } }) }

        function U(e, t) { var r = gr(t); for (var n = 0; n < r.length; n++) { var i = r[n]; try { if (i.isInlineSwap(e)) { return true } } catch (e) { St(e) } } return e === "outerHTML" }

        function V(e, i, a) { var t = "#" + i.id; var o = "outerHTML"; if (e === "true") {} else if (e.indexOf(":") > 0) { o = e.substr(0, e.indexOf(":"));
                t = e.substr(e.indexOf(":") + 1, e.length) } else { o = e } var r = $().querySelectorAll(t); if (r) { Y(r, function(e) { var t; var r = i.cloneNode(true);
                    t = $().createDocumentFragment();
                    t.appendChild(r); if (!U(o, e)) { t = r } var n = { shouldSwap: true, target: e, fragment: t }; if (!ee(e, "htmx:oobBeforeSwap", n)) return;
                    e = n.target; if (n["shouldSwap"]) { Ce(o, e, e, t, a) }
                    Y(a.elts, function(e) { ee(e, "htmx:oobAfterSwap", n) }) });
                i.parentNode.removeChild(i) } else { i.parentNode.removeChild(i);
                Q($().body, "htmx:oobErrorNoTarget", { content: i }) } return e }

        function _(e, t, r) { var n = Z(e, "hx-select-oob"); if (n) { var i = n.split(","); for (let e = 0; e < i.length; e++) { var a = i[e].split(":", 2); var o = a[0]; if (o.indexOf("#") === 0) { o = o.substring(1) } var s = a[1] || "true"; var l = t.querySelector("#" + o); if (l) { V(s, l, r) } } }
            Y(R(t, "[hx-swap-oob], [data-hx-swap-oob]"), function(e) { var t = J(e, "hx-swap-oob"); if (t != null) { V(t, e, r) } }) }

        function W(e) { Y(R(e, "[hx-preserve], [data-hx-preserve]"), function(e) { var t = J(e, "id"); var r = $().getElementById(t); if (r != null) { e.parentNode.replaceChild(r, e) } }) }

        function le(n, e, i) { Y(e.querySelectorAll("[id]"), function(e) { if (e.id && e.id.length > 0) { var t = n.querySelector(e.tagName + "[id='" + e.id + "']"); if (t && t !== n) { var r = e.cloneNode();
                        j(e, t);
                        i.tasks.push(function() { j(e, r) }) } } }) }

        function ue(e) { return function() { T(e, z.config.addedClass);
                mt(e);
                ht(e);
                fe(e);
                ee(e, "htmx:load") } }

        function fe(e) { var t = "[autofocus]"; var r = d(e, t) ? e : e.querySelector(t); if (r != null) { r.focus() } }

        function ce(e, t, r, n) { le(e, r, n); while (r.childNodes.length > 0) { var i = r.firstChild;
                q(i, z.config.addedClass);
                e.insertBefore(i, t); if (i.nodeType !== Node.TEXT_NODE && i.nodeType !== Node.COMMENT_NODE) { n.tasks.push(ue(i)) } } }

        function he(e, t) { var r = 0; while (r < e.length) { t = (t << 5) - t + e.charCodeAt(r++) | 0 } return t }

        function de(e) { var t = 0; if (e.attributes) { for (var r = 0; r < e.attributes.length; r++) { var n = e.attributes[r]; if (n.value) { t = he(n.name, t);
                        t = he(n.value, t) } } } return t }

        function ve(e) { var t = K(e); if (t.webSocket) { t.webSocket.close() } if (t.sseEventSource) { t.sseEventSource.close() } if (t.listenerInfos) { Y(t.listenerInfos, function(e) { if (e.on) { e.on.removeEventListener(e.trigger, e.listener) } }) } }

        function ge(e) { ee(e, "htmx:beforeCleanupElement");
            ve(e); if (e.children) { Y(e.children, function(e) { ge(e) }) } }

        function pe(e, t, r) { if (e.tagName === "BODY") { return Se(e, t, r) } else { var n; var i = e.previousSibling;
                ce(u(e), e, t, r); if (i == null) { n = u(e).firstChild } else { n = i.nextSibling }
                K(e).replacedWith = n;
                r.elts = []; while (n && n !== e) { if (n.nodeType === Node.ELEMENT_NODE) { r.elts.push(n) }
                    n = n.nextElementSibling }
                ge(e);
                u(e).removeChild(e) } }

        function me(e, t, r) { return ce(e, e.firstChild, t, r) }

        function ye(e, t, r) { return ce(u(e), e, t, r) }

        function xe(e, t, r) { return ce(e, null, t, r) }

        function be(e, t, r) { return ce(u(e), e.nextSibling, t, r) }

        function we(e, t, r) { ge(e); return u(e).removeChild(e) }

        function Se(e, t, r) { var n = e.firstChild;
            ce(e, n, t, r); if (n) { while (n.nextSibling) { ge(n.nextSibling);
                    e.removeChild(n.nextSibling) }
                ge(n);
                e.removeChild(n) } }

        function Ee(e, t) { var r = Z(e, "hx-select"); if (r) { var n = $().createDocumentFragment();
                Y(t.querySelectorAll(r), function(e) { n.appendChild(e) });
                t = n } return t }

        function Ce(e, t, r, n, i) { switch (e) {
                case "none":
                    return;
                case "outerHTML":
                    pe(r, n, i); return;
                case "afterbegin":
                    me(r, n, i); return;
                case "beforebegin":
                    ye(r, n, i); return;
                case "beforeend":
                    xe(r, n, i); return;
                case "afterend":
                    be(r, n, i); return;
                case "delete":
                    we(r, n, i); return;
                default:
                    var a = gr(t); for (var o = 0; o < a.length; o++) { var f = a[o]; try { var s = f.handleSwap(e, r, n, i); if (s) { if (typeof s.length !== "undefined") { for (var l = 0; l < s.length; l++) { var u = s[l]; if (u.nodeType !== Node.TEXT_NODE && u.nodeType !== Node.COMMENT_NODE) { i.tasks.push(ue(u)) } } } return } } catch (e) { St(e) } } if (e === "innerHTML") { Se(r, n, i) } else { Ce(z.config.defaultSwapStyle, t, r, n, i) } } }

        function Re(e) { if (e.indexOf("<title") > -1) { var t = e.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, ""); var r = t.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im); if (r) { return r[2] } } }

        function Oe(e, t, r, n, i) { i.title = Re(n); var a = f(n); if (a) { _(r, a, i);
                a = Ee(r, a);
                W(a); return Ce(e, r, t, a, i) } }

        function qe(e, t, r) { var n = e.getResponseHeader(t); if (n.indexOf("{") === 0) { var i = w(n); for (var a in i) { if (i.hasOwnProperty(a)) { var o = i[a]; if (!m(o)) { o = { value: o } }
                        ee(r, a, o) } } } else { ee(r, n, []) } } var Te = /\s/; var Le = /[\s,]/; var He = /[_$a-zA-Z]/; var Ae = /[_$a-zA-Z0-9]/; var Ne = ['"', "'", "/"]; var Ie = /[^\s]/;

        function ke(e) { var t = []; var r = 0; while (r < e.length) { if (He.exec(e.charAt(r))) { var n = r; while (Ae.exec(e.charAt(r + 1))) { r++ }
                    t.push(e.substr(n, r - n + 1)) } else if (Ne.indexOf(e.charAt(r)) !== -1) { var i = e.charAt(r); var n = r;
                    r++; while (r < e.length && e.charAt(r) !== i) { if (e.charAt(r) === "\\") { r++ }
                        r++ }
                    t.push(e.substr(n, r - n + 1)) } else { var a = e.charAt(r);
                    t.push(a) }
                r++ } return t }

        function Me(e, t, r) { return He.exec(e.charAt(0)) && e !== "true" && e !== "false" && e !== "this" && e !== r && t !== "." }

        function Pe(e, t, r) { if (t[0] === "[") { t.shift(); var n = 1; var i = " return (function(" + r + "){ return ("; var a = null; while (t.length > 0) { var o = t[0]; if (o === "]") { n--; if (n === 0) { if (a === null) { i = i + "true" }
                            t.shift();
                            i += ")})"; try { var s = Qt(e, function() { return Function(i)() }, function() { return true });
                                s.source = i; return s } catch (e) { Q($().body, "htmx:syntax:error", { error: e, source: i }); return null } } } else if (o === "[") { n++ } if (Me(o, a, r)) { i += "((" + r + "." + o + ") ? (" + r + "." + o + ") : (window." + o + "))" } else { i = i + o }
                    a = t.shift() } } }

        function c(e, t) { var r = ""; while (e.length > 0 && !e[0].match(t)) { r += e.shift() } return r } var De = "input, textarea, select";

        function Xe(e) { var t = J(e, "hx-trigger"); var r = []; if (t) { var n = ke(t);
                do { c(n, Ie); var f = n.length; var i = c(n, /[,\[\s]/); if (i !== "") { if (i === "every") { var a = { trigger: "every" };
                            c(n, Ie);
                            a.pollInterval = v(c(n, /[,\[\s]/));
                            c(n, Ie); var o = Pe(e, n, "event"); if (o) { a.eventFilter = o }
                            r.push(a) } else if (i.indexOf("sse:") === 0) { r.push({ trigger: "sse", sseEvent: i.substr(4) }) } else { var s = { trigger: i }; var o = Pe(e, n, "event"); if (o) { s.eventFilter = o } while (n.length > 0 && n[0] !== ",") { c(n, Ie); var l = n.shift(); if (l === "changed") { s.changed = true } else if (l === "once") { s.once = true } else if (l === "consume") { s.consume = true } else if (l === "delay" && n[0] === ":") { n.shift();
                                    s.delay = v(c(n, Le)) } else if (l === "from" && n[0] === ":") { n.shift(); var u = c(n, Le); if (u === "closest" || u === "find" || u === "next" || u === "previous") { n.shift();
                                        u += " " + c(n, Le) }
                                    s.from = u } else if (l === "target" && n[0] === ":") { n.shift();
                                    s.target = c(n, Le) } else if (l === "throttle" && n[0] === ":") { n.shift();
                                    s.throttle = v(c(n, Le)) } else if (l === "queue" && n[0] === ":") { n.shift();
                                    s.queue = c(n, Le) } else if ((l === "root" || l === "threshold") && n[0] === ":") { n.shift();
                                    s[l] = c(n, Le) } else { Q(e, "htmx:syntax:error", { token: n.shift() }) } }
                            r.push(s) } } if (n.length === f) { Q(e, "htmx:syntax:error", { token: n.shift() }) }
                    c(n, Ie) } while (n[0] === "," && n.shift()) } if (r.length > 0) { return r } else if (d(e, "form")) { return [{ trigger: "submit" }] } else if (d(e, 'input[type="button"]')) { return [{ trigger: "click" }] } else if (d(e, De)) { return [{ trigger: "change" }] } else { return [{ trigger: "click" }] } }

        function Fe(e) { K(e).cancelled = true }

        function Be(e, t, r) { var n = K(e);
            n.timeout = setTimeout(function() { if (re(e) && n.cancelled !== true) { if (!We(r, xt("hx:poll:trigger", { triggerSpec: r, target: e }))) { t(e) }
                    Be(e, t, r) } }, r.pollInterval) }

        function je(e) { return location.hostname === e.hostname && G(e, "href") && G(e, "href").indexOf("#") !== 0 }

        function Ue(t, r, e) { if (t.tagName === "A" && je(t) && (t.target === "" || t.target === "_self") || t.tagName === "FORM") { r.boosted = true; var n, i; if (t.tagName === "A") { n = "get";
                    i = G(t, "href") } else { var a = G(t, "method");
                    n = a ? a.toLowerCase() : "get"; if (n === "get") {}
                    i = G(t, "action") }
                e.forEach(function(e) { ze(t, function(e, t) { lr(n, i, e, t) }, r, e, true) }) } }

        function Ve(e, t) { if (e.type === "submit" || e.type === "click") { if (t.tagName === "FORM") { return true } if (d(t, 'input[type="submit"], button') && A(t, "form") !== null) { return true } if (t.tagName === "A" && t.href && (t.getAttribute("href") === "#" || t.getAttribute("href").indexOf("#") !== 0)) { return true } } return false }

        function _e(e, t) { return K(e).boosted && e.tagName === "A" && t.type === "click" && (t.ctrlKey || t.metaKey) }

        function We(e, t) { var r = e.eventFilter; if (r) { try { return r(t) !== true } catch (e) { Q($().body, "htmx:eventFilter:error", { error: e, source: r.source }); return true } } return false }

        function ze(a, o, e, s, l) { var t; if (s.from) { t = N(a, s.from) } else { t = [a] }
            Y(t, function(n) { var i = function(e) { if (!re(a)) { n.removeEventListener(s.trigger, i); return } if (_e(a, e)) { return } if (l || Ve(e, a)) { e.preventDefault() } if (We(s, e)) { return } var t = K(e);
                    t.triggerSpec = s; if (t.handledFor == null) { t.handledFor = [] } var r = K(a); if (t.handledFor.indexOf(a) < 0) { t.handledFor.push(a); if (s.consume) { e.stopPropagation() } if (s.target && e.target) { if (!d(e.target, s.target)) { return } } if (s.once) { if (r.triggeredOnce) { return } else { r.triggeredOnce = true } } if (s.changed) { if (r.lastValue === a.value) { return } else { r.lastValue = a.value } } if (r.delayed) { clearTimeout(r.delayed) } if (r.throttle) { return } if (s.throttle) { if (!r.throttle) { o(a, e);
                                r.throttle = setTimeout(function() { r.throttle = null }, s.throttle) } } else if (s.delay) { r.delayed = setTimeout(function() { o(a, e) }, s.delay) } else { o(a, e) } } }; if (e.listenerInfos == null) { e.listenerInfos = [] }
                e.listenerInfos.push({ trigger: s.trigger, listener: i, on: n });
                n.addEventListener(s.trigger, i) }) } var Ge = false; var Je = null;

        function $e() { if (!Je) { Je = function() { Ge = true };
                window.addEventListener("scroll", Je);
                setInterval(function() { if (Ge) { Ge = false;
                        Y($().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e) { Ze(e) }) } }, 200) } }

        function Ze(t) { if (!o(t, "data-hx-revealed") && x(t)) { t.setAttribute("data-hx-revealed", "true"); var e = K(t); if (e.initHash) { ee(t, "revealed") } else { t.addEventListener("htmx:afterProcessNode", function(e) { ee(t, "revealed") }, { once: true }) } } }

        function Ke(e, t, r) { var n = b(r); for (var i = 0; i < n.length; i++) { var a = n[i].split(/:(.+)/); if (a[0] === "connect") { Ye(e, a[1], 0) } if (a[0] === "send") { et(e) } } }

        function Ye(s, r, n) { if (!re(s)) { return } if (r.indexOf("/") == 0) { var e = location.hostname + (location.port ? ":" + location.port : ""); if (location.protocol == "https:") { r = "wss://" + e + r } else if (location.protocol == "http:") { r = "ws://" + e + r } } var t = z.createWebSocket(r);
            t.onerror = function(e) { Q(s, "htmx:wsError", { error: e, socket: t });
                Qe(s) };
            t.onclose = function(e) { if ([1006, 1012, 1013].indexOf(e.code) >= 0) { var t = tt(n);
                    setTimeout(function() { Ye(s, r, n + 1) }, t) } };
            t.onopen = function(e) { n = 0 };
            K(s).webSocket = t;
            t.addEventListener("message", function(e) { if (Qe(s)) { return } var t = e.data;
                wt(s, function(e) { t = e.transformResponse(t, null, s) }); var r = Zt(s); var n = f(t); var i = y(n.children); for (var a = 0; a < i.length; a++) { var o = i[a];
                    V(J(o, "hx-swap-oob") || "true", o, r) }
                At(r.tasks) }) }

        function Qe(e) { if (!re(e)) { K(e).webSocket.close(); return true } }

        function et(u) { var f = h(u, function(e) { return K(e).webSocket != null }); if (f) { u.addEventListener(Xe(u)[0].trigger, function(e) { var t = K(f).webSocket; var r = _t(u, f); var n = Bt(u, "post"); var i = n.errors; var a = n.values; var o = rr(u); var s = ne(a, o); var l = Wt(s, u);
                    l["HEADERS"] = r; if (i && i.length > 0) { ee(u, "htmx:validation:halted", i); return }
                    t.send(JSON.stringify(l)); if (Ve(e, u)) { e.preventDefault() } }) } else { Q(u, "htmx:noWebSocketSourceError") } }

        function tt(e) { var t = z.config.wsReconnectDelay; if (typeof t === "function") { return t(e) } if (t === "full-jitter") { var r = Math.min(e, 6); var n = 1e3 * Math.pow(2, r); return n * Math.random() }
            St('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"') }

        function rt(e, t, r) { var n = b(r); for (var i = 0; i < n.length; i++) { var a = n[i].split(/:(.+)/); if (a[0] === "connect") { nt(e, a[1]) } if (a[0] === "swap") { it(e, a[1]) } } }

        function nt(t, e) { var r = z.createEventSource(e);
            r.onerror = function(e) { Q(t, "htmx:sseError", { error: e, source: r });
                ot(t) };
            K(t).sseEventSource = r }

        function it(a, o) { var s = h(a, st); if (s) { var l = K(s).sseEventSource; var u = function(e) { if (ot(s)) { l.removeEventListener(o, u); return } var t = e.data;
                    wt(a, function(e) { t = e.transformResponse(t, null, a) }); var r = Gt(a); var n = se(a); var i = Zt(a);
                    Oe(r.swapStyle, a, n, t, i);
                    At(i.tasks);
                    ee(a, "htmx:sseMessage", e) };
                K(a).sseListener = u;
                l.addEventListener(o, u) } else { Q(a, "htmx:noSSESourceError") } }

        function at(e, t, r) { var n = h(e, st); if (n) { var i = K(n).sseEventSource; var a = function() { if (!ot(n)) { if (re(e)) { t(e) } else { i.removeEventListener(r, a) } } };
                K(e).sseListener = a;
                i.addEventListener(r, a) } else { Q(e, "htmx:noSSESourceError") } }

        function ot(e) { if (!re(e)) { K(e).sseEventSource.close(); return true } }

        function st(e) { return K(e).sseEventSource != null }

        function lt(e, t, r, n) { var i = function() { if (!r.loaded) { r.loaded = true;
                    t(e) } }; if (n) { setTimeout(i, n) } else { i() } }

        function ut(t, i, e) { var a = false;
            Y(n, function(r) { if (o(t, "hx-" + r)) { var n = J(t, "hx-" + r);
                    a = true;
                    i.path = n;
                    i.verb = r;
                    e.forEach(function(e) { ft(t, e, i, function(e, t) { lr(r, n, e, t) }) }) } }); return a }

        function ft(n, e, t, r) { if (e.sseEvent) { at(n, r, e.sseEvent) } else if (e.trigger === "revealed") { $e();
                ze(n, r, t, e);
                Ze(n) } else if (e.trigger === "intersect") { var i = {}; if (e.root) { i.root = ie(n, e.root) } if (e.threshold) { i.threshold = parseFloat(e.threshold) } var a = new IntersectionObserver(function(e) { for (var t = 0; t < e.length; t++) { var r = e[t]; if (r.isIntersecting) { ee(n, "intersect"); break } } }, i);
                a.observe(n);
                ze(n, r, t, e) } else if (e.trigger === "load") { if (!We(e, xt("load", { elt: n }))) { lt(n, r, t, e.delay) } } else if (e.pollInterval) { t.polling = true;
                Be(n, r, e) } else { ze(n, r, t, e) } }

        function ct(e) { if (e.type === "text/javascript" || e.type === "module" || e.type === "") { var t = $().createElement("script");
                Y(e.attributes, function(e) { t.setAttribute(e.name, e.value) });
                t.textContent = e.textContent;
                t.async = false; if (z.config.inlineScriptNonce) { t.nonce = z.config.inlineScriptNonce } var r = e.parentElement; try { r.insertBefore(t, e) } catch (e) { St(e) } finally { if (e.parentElement) { e.parentElement.removeChild(e) } } } }

        function ht(e) { if (d(e, "script")) { ct(e) }
            Y(R(e, "script"), function(e) { ct(e) }) }

        function dt() { return document.querySelector("[hx-boost], [data-hx-boost]") }

        function vt(e) { if (e.querySelectorAll) { var t = dt() ? ", a, form" : ""; var r = e.querySelectorAll(i + t + ", [hx-sse], [data-hx-sse], [hx-ws]," + " [data-hx-ws], [hx-ext], [data-hx-ext]"); return r } else { return [] } }

        function gt(n) { var e = function(e) { var t = A(e.target, "button, input[type='submit']"); if (t !== null) { var r = K(n);
                    r.lastButtonClicked = t } };
            n.addEventListener("click", e);
            n.addEventListener("focusin", e);
            n.addEventListener("focusout", function(e) { var t = K(n);
                t.lastButtonClicked = null }) }

        function pt(e) { if (e.closest && e.closest(z.config.disableSelector)) { return } var t = K(e); if (t.initHash !== de(e)) { t.initHash = de(e);
                ve(e);
                ee(e, "htmx:beforeProcessNode"); if (e.value) { t.lastValue = e.value } var r = Xe(e); var n = ut(e, t, r); if (!n && Z(e, "hx-boost") === "true") { Ue(e, t, r) } if (e.tagName === "FORM") { gt(e) } var i = J(e, "hx-sse"); if (i) { rt(e, t, i) } var a = J(e, "hx-ws"); if (a) { Ke(e, t, a) }
                ee(e, "htmx:afterProcessNode") } }

        function mt(e) { e = M(e);
            pt(e);
            Y(vt(e), function(e) { pt(e) }) }

        function yt(e) { return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase() }

        function xt(e, t) { var r; if (window.CustomEvent && typeof window.CustomEvent === "function") { r = new CustomEvent(e, { bubbles: true, cancelable: true, detail: t }) } else { r = $().createEvent("CustomEvent");
                r.initCustomEvent(e, true, true, t) } return r }

        function Q(e, t, r) { ee(e, t, ne({ error: t }, r)) }

        function bt(e) { return e === "htmx:afterProcessNode" }

        function wt(e, t) { Y(gr(e), function(e) { try { t(e) } catch (e) { St(e) } }) }

        function St(e) { if (console.error) { console.error(e) } else if (console.log) { console.log("ERROR: ", e) } }

        function ee(e, t, r) { e = M(e); if (r == null) { r = {} }
            r["elt"] = e; var n = xt(t, r); if (z.logger && !bt(t)) { z.logger(e, t, r) } if (r.error) { St(r.error);
                ee(e, "htmx:error", { errorInfo: r }) } var i = e.dispatchEvent(n); var a = yt(t); if (i && a !== t) { var o = xt(a, n.detail);
                i = i && e.dispatchEvent(o) }
            wt(e, function(e) { i = i && e.onEvent(t, n) !== false }); return i } var Et = location.pathname + location.search;

        function Ct() { var e = $().querySelector("[hx-history-elt],[data-hx-history-elt]"); return e || $().body }

        function Rt(e, t, r, n) { if (!S()) { return } var i = w(localStorage.getItem("htmx-history-cache")) || []; for (var a = 0; a < i.length; a++) { if (i[a].url === e) { i.splice(a, 1); break } } var o = { url: e, content: t, title: r, scroll: n };
            ee($().body, "htmx:historyItemCreated", { item: o, cache: i });
            i.push(o); while (i.length > z.config.historyCacheSize) { i.shift() } while (i.length > 0) { try { localStorage.setItem("htmx-history-cache", JSON.stringify(i)); break } catch (e) { Q($().body, "htmx:historyCacheError", { cause: e, cache: i });
                    i.shift() } } }

        function Ot(e) { if (!S()) { return null } var t = w(localStorage.getItem("htmx-history-cache")) || []; for (var r = 0; r < t.length; r++) { if (t[r].url === e) { return t[r] } } return null }

        function qt(e) { var t = z.config.requestClass; var r = e.cloneNode(true);
            Y(R(r, "." + t), function(e) { T(e, t) }); return r.innerHTML }

        function Tt() { var e = Ct(); var t = Et || location.pathname + location.search; var r = $().querySelector('[hx-history="false" i],[data-hx-history="false" i]'); if (!r) { ee($().body, "htmx:beforeHistorySave", { path: t, historyElt: e });
                Rt(t, qt(e), $().title, window.scrollY) } if (z.config.historyEnabled) history.replaceState({ htmx: true }, $().title, window.location.href) }

        function Lt(e) { if (z.config.getCacheBusterParam) { e = e.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""); if (e.endsWith("&") || e.endsWith("?")) { e = e.slice(0, -1) } } if (z.config.historyEnabled) { history.pushState({ htmx: true }, "", e) }
            Et = e }

        function Ht(e) { if (z.config.historyEnabled) history.replaceState({ htmx: true }, "", e);
            Et = e }

        function At(e) { Y(e, function(e) { e.call() }) }

        function Nt(a) { var e = new XMLHttpRequest; var o = { path: a, xhr: e };
            ee($().body, "htmx:historyCacheMiss", o);
            e.open("GET", a, true);
            e.setRequestHeader("HX-History-Restore-Request", "true");
            e.onload = function() { if (this.status >= 200 && this.status < 400) { ee($().body, "htmx:historyCacheMissLoad", o); var e = f(this.response);
                    e = e.querySelector("[hx-history-elt],[data-hx-history-elt]") || e; var t = Ct(); var r = Zt(t); var n = Re(this.response); if (n) { var i = C("title"); if (i) { i.innerHTML = n } else { window.document.title = n } }
                    Se(t, e, r);
                    At(r.tasks);
                    Et = a;
                    ee($().body, "htmx:historyRestore", { path: a, cacheMiss: true, serverResponse: this.response }) } else { Q($().body, "htmx:historyCacheMissLoadError", o) } };
            e.send() }

        function It(e) { Tt();
            e = e || location.pathname + location.search; var t = Ot(e); if (t) { var r = f(t.content); var n = Ct(); var i = Zt(n);
                Se(n, r, i);
                At(i.tasks);
                document.title = t.title;
                window.scrollTo(0, t.scroll);
                Et = e;
                ee($().body, "htmx:historyRestore", { path: e, item: t }) } else { if (z.config.refreshOnHistoryMiss) { window.location.reload(true) } else { Nt(e) } } }

        function kt(e) { var t = F(e, "hx-indicator"); if (t == null) { t = [e] }
            Y(t, function(e) { var t = K(e);
                t.requestCount = (t.requestCount || 0) + 1;
                e.classList["add"].call(e.classList, z.config.requestClass) }); return t }

        function Mt(e) { Y(e, function(e) { var t = K(e);
                t.requestCount = (t.requestCount || 0) - 1; if (t.requestCount === 0) { e.classList["remove"].call(e.classList, z.config.requestClass) } }) }

        function Pt(e, t) { for (var r = 0; r < e.length; r++) { var n = e[r]; if (n.isSameNode(t)) { return true } } return false }

        function Dt(e) { if (e.name === "" || e.name == null || e.disabled) { return false } if (e.type === "button" || e.type === "submit" || e.tagName === "image" || e.tagName === "reset" || e.tagName === "file") { return false } if (e.type === "checkbox" || e.type === "radio") { return e.checked } return true }

        function Xt(t, r, n, e, i) { if (e == null || Pt(t, e)) { return } else { t.push(e) } if (Dt(e)) { var a = G(e, "name"); var o = e.value; if (e.multiple) { o = y(e.querySelectorAll("option:checked")).map(function(e) { return e.value }) } if (e.files) { o = y(e.files) } if (a != null && o != null) { var s = r[a]; if (s !== undefined) { if (Array.isArray(s)) { if (Array.isArray(o)) { r[a] = s.concat(o) } else { s.push(o) } } else { if (Array.isArray(o)) { r[a] = [s].concat(o) } else { r[a] = [s, o] } } } else { r[a] = o } } if (i) { Ft(e, n) } } if (d(e, "form")) { var l = e.elements;
                Y(l, function(e) { Xt(t, r, n, e, i) }) } }

        function Ft(e, t) { if (e.willValidate) { ee(e, "htmx:validation:validate"); if (!e.checkValidity()) { t.push({ elt: e, message: e.validationMessage, validity: e.validity });
                    ee(e, "htmx:validation:failed", { message: e.validationMessage, validity: e.validity }) } } }

        function Bt(e, t) { var r = []; var n = {}; var i = {}; var a = []; var o = K(e); var s = d(e, "form") && e.noValidate !== true || J(e, "hx-validate") === "true"; if (o.lastButtonClicked) { s = s && o.lastButtonClicked.formNoValidate !== true } if (t !== "get") { Xt(r, i, a, A(e, "form"), s) }
            Xt(r, n, a, e, s); if (o.lastButtonClicked) { var l = G(o.lastButtonClicked, "name"); if (l) { n[l] = o.lastButtonClicked.value } } var u = F(e, "hx-include");
            Y(u, function(e) { Xt(r, n, a, e, s); if (!d(e, "form")) { Y(e.querySelectorAll(De), function(e) { Xt(r, n, a, e, s) }) } });
            n = ne(n, i); return { errors: a, values: n } }

        function jt(e, t, r) { if (e !== "") { e += "&" } if (String(r) === "[object Object]") { r = JSON.stringify(r) } var n = encodeURIComponent(r);
            e += encodeURIComponent(t) + "=" + n; return e }

        function Ut(e) { var t = ""; for (var r in e) { if (e.hasOwnProperty(r)) { var n = e[r]; if (Array.isArray(n)) { Y(n, function(e) { t = jt(t, r, e) }) } else { t = jt(t, r, n) } } } return t }

        function Vt(e) { var t = new FormData; for (var r in e) { if (e.hasOwnProperty(r)) { var n = e[r]; if (Array.isArray(n)) { Y(n, function(e) { t.append(r, e) }) } else { t.append(r, n) } } } return t }

        function _t(e, t, r) { var n = { "HX-Request": "true", "HX-Trigger": G(e, "id"), "HX-Trigger-Name": G(e, "name"), "HX-Target": J(t, "id"), "HX-Current-URL": $().location.href };
            Yt(e, "hx-headers", false, n); if (r !== undefined) { n["HX-Prompt"] = r } if (K(e).boosted) { n["HX-Boosted"] = "true" } return n }

        function Wt(t, e) { var r = Z(e, "hx-params"); if (r) { if (r === "none") { return {} } else if (r === "*") { return t } else if (r.indexOf("not ") === 0) { Y(r.substr(4).split(","), function(e) { e = e.trim();
                        delete t[e] }); return t } else { var n = {};
                    Y(r.split(","), function(e) { e = e.trim();
                        n[e] = t[e] }); return n } } else { return t } }

        function zt(e) { return G(e, "href") && G(e, "href").indexOf("#") >= 0 }

        function Gt(e, t) { var r = t ? t : Z(e, "hx-swap"); var n = { swapStyle: K(e).boosted ? "innerHTML" : z.config.defaultSwapStyle, swapDelay: z.config.defaultSwapDelay, settleDelay: z.config.defaultSettleDelay }; if (K(e).boosted && !zt(e)) { n["show"] = "top" } if (r) { var i = b(r); if (i.length > 0) { n["swapStyle"] = i[0]; for (var a = 1; a < i.length; a++) { var o = i[a]; if (o.indexOf("swap:") === 0) { n["swapDelay"] = v(o.substr(5)) } if (o.indexOf("settle:") === 0) { n["settleDelay"] = v(o.substr(7)) } if (o.indexOf("scroll:") === 0) { var s = o.substr(7); var l = s.split(":"); var f = l.pop(); var u = l.length > 0 ? l.join(":") : null;
                            n["scroll"] = f;
                            n["scrollTarget"] = u } if (o.indexOf("show:") === 0) { var c = o.substr(5); var l = c.split(":"); var h = l.pop(); var u = l.length > 0 ? l.join(":") : null;
                            n["show"] = h;
                            n["showTarget"] = u } if (o.indexOf("focus-scroll:") === 0) { var d = o.substr("focus-scroll:".length);
                            n["focusScroll"] = d == "true" } } } } return n }

        function Jt(e) { return Z(e, "hx-encoding") === "multipart/form-data" || d(e, "form") && G(e, "enctype") === "multipart/form-data" }

        function $t(t, r, n) { var i = null;
            wt(r, function(e) { if (i == null) { i = e.encodeParameters(t, n, r) } }); if (i != null) { return i } else { if (Jt(r)) { return Vt(n) } else { return Ut(n) } } }

        function Zt(e) { return { tasks: [], elts: [e] } }

        function Kt(e, t) { var r = e[0]; var n = e[e.length - 1]; if (t.scroll) { var i = null; if (t.scrollTarget) { i = ie(r, t.scrollTarget) } if (t.scroll === "top" && (r || i)) { i = i || r;
                    i.scrollTop = 0 } if (t.scroll === "bottom" && (n || i)) { i = i || n;
                    i.scrollTop = i.scrollHeight } } if (t.show) { var i = null; if (t.showTarget) { var a = t.showTarget; if (t.showTarget === "window") { a = "body" }
                    i = ie(r, a) } if (t.show === "top" && (r || i)) { i = i || r;
                    i.scrollIntoView({ block: "start", behavior: z.config.scrollBehavior }) } if (t.show === "bottom" && (n || i)) { i = i || n;
                    i.scrollIntoView({ block: "end", behavior: z.config.scrollBehavior }) } } }

        function Yt(e, t, r, n) { if (n == null) { n = {} } if (e == null) { return n } var i = J(e, t); if (i) { var a = i.trim(); var o = r; if (a === "unset") { return null } if (a.indexOf("javascript:") === 0) { a = a.substr(11);
                    o = true } else if (a.indexOf("js:") === 0) { a = a.substr(3);
                    o = true } if (a.indexOf("{") !== 0) { a = "{" + a + "}" } var s; if (o) { s = Qt(e, function() { return Function("return (" + a + ")")() }, {}) } else { s = w(a) } for (var l in s) { if (s.hasOwnProperty(l)) { if (n[l] == null) { n[l] = s[l] } } } } return Yt(u(e), t, r, n) }

        function Qt(e, t, r) { if (z.config.allowEval) { return t() } else { Q(e, "htmx:evalDisallowedError"); return r } }

        function er(e, t) { return Yt(e, "hx-vars", true, t) }

        function tr(e, t) { return Yt(e, "hx-vals", false, t) }

        function rr(e) { return ne(er(e), tr(e)) }

        function nr(t, r, n) { if (n !== null) { try { t.setRequestHeader(r, n) } catch (e) { t.setRequestHeader(r, encodeURIComponent(n));
                    t.setRequestHeader(r + "-URI-AutoEncoded", "true") } } }

        function ir(t) { if (t.responseURL && typeof URL !== "undefined") { try { var e = new URL(t.responseURL); return e.pathname + e.search } catch (e) { Q($().body, "htmx:badResponseUrl", { url: t.responseURL }) } } }

        function ar(e, t) { return e.getAllResponseHeaders().match(t) }

        function or(e, t, r) { e = e.toLowerCase(); if (r) { if (r instanceof Element || g(r, "String")) { return lr(e, t, null, null, { targetOverride: M(r), returnPromise: true }) } else { return lr(e, t, M(r.source), r.event, { handler: r.handler, headers: r.headers, values: r.values, targetOverride: M(r.target), swapOverride: r.swap, returnPromise: true }) } } else { return lr(e, t, null, null, { returnPromise: true }) } }

        function sr(e) { var t = []; while (e) { t.push(e);
                e = e.parentElement } return t }

        function lr(e, t, n, r, i, f) { var c = null; var h = null;
            i = i != null ? i : {}; if (i.returnPromise && typeof Promise !== "undefined") { var d = new Promise(function(e, t) { c = e;
                    h = t }) } if (n == null) { n = $().body } var v = i.handler || fr; if (!re(n)) { return } var g = i.targetOverride || se(n); if (g == null || g == ae) { Q(n, "htmx:targetError", { target: J(n, "hx-target") }); return } if (!f) { var p = function() { return lr(e, t, n, r, i, true) }; var m = { target: g, elt: n, path: t, verb: e, triggeringEvent: r, etc: i, issueRequest: p }; if (ee(n, "htmx:confirm", m) === false) { return } } var y = n; var a = K(n); var x = Z(n, "hx-sync"); var b = null; var w = false; if (x) { var S = x.split(":"); var E = S[0].trim(); if (E === "this") { y = oe(n, "hx-sync") } else { y = ie(n, E) }
                x = (S[1] || "drop").trim();
                a = K(y); if (x === "drop" && a.xhr && a.abortable !== true) { return } else if (x === "abort") { if (a.xhr) { return } else { w = true } } else if (x === "replace") { ee(y, "htmx:abort") } else if (x.indexOf("queue") === 0) { var C = x.split(" ");
                    b = (C[1] || "last").trim() } } if (a.xhr) { if (a.abortable) { ee(y, "htmx:abort") } else { if (b == null) { if (r) { var R = K(r); if (R && R.triggerSpec && R.triggerSpec.queue) { b = R.triggerSpec.queue } } if (b == null) { b = "last" } } if (a.queuedRequests == null) { a.queuedRequests = [] } if (b === "first" && a.queuedRequests.length === 0) { a.queuedRequests.push(function() { lr(e, t, n, r, i) }) } else if (b === "all") { a.queuedRequests.push(function() { lr(e, t, n, r, i) }) } else if (b === "last") { a.queuedRequests = [];
                        a.queuedRequests.push(function() { lr(e, t, n, r, i) }) } return } } var o = new XMLHttpRequest;
            a.xhr = o;
            a.abortable = w; var s = function() { a.xhr = null;
                a.abortable = false; if (a.queuedRequests != null && a.queuedRequests.length > 0) { var e = a.queuedRequests.shift();
                    e() } }; var O = Z(n, "hx-prompt"); if (O) { var q = prompt(O); if (q === null || !ee(n, "htmx:prompt", { prompt: q, target: g })) { te(c);
                    s(); return d } } var T = Z(n, "hx-confirm"); if (T) { if (!confirm(T)) { te(c);
                    s(); return d } } var L = _t(n, g, q); if (i.headers) { L = ne(L, i.headers) } var H = Bt(n, e); var A = H.errors; var N = H.values; if (i.values) { N = ne(N, i.values) } var I = rr(n); var k = ne(N, I); var M = Wt(k, n); if (e !== "get" && !Jt(n)) { L["Content-Type"] = "application/x-www-form-urlencoded" } if (z.config.getCacheBusterParam && e === "get") { M["org.htmx.cache-buster"] = G(g, "id") || "true" } if (t == null || t === "") { t = $().location.href } var P = Yt(n, "hx-request"); var D = K(n).boosted; var l = { boosted: D, parameters: M, unfilteredParameters: k, headers: L, target: g, verb: e, errors: A, withCredentials: i.credentials || P.credentials || z.config.withCredentials, timeout: i.timeout || P.timeout || z.config.timeout, path: t, triggeringEvent: r }; if (!ee(n, "htmx:configRequest", l)) { te(c);
                s(); return d }
            t = l.path;
            e = l.verb;
            L = l.headers;
            M = l.parameters;
            A = l.errors; if (A && A.length > 0) { ee(n, "htmx:validation:halted", l);
                te(c);
                s(); return d } var X = t.split("#"); var F = X[0]; var B = X[1]; var j = null; if (e === "get") { j = F; var U = Object.keys(M).length !== 0; if (U) { if (j.indexOf("?") < 0) { j += "?" } else { j += "&" }
                    j += Ut(M); if (B) { j += "#" + B } }
                o.open("GET", j, true) } else { o.open(e.toUpperCase(), t, true) }
            o.overrideMimeType("text/html");
            o.withCredentials = l.withCredentials;
            o.timeout = l.timeout; if (P.noHeaders) {} else { for (var V in L) { if (L.hasOwnProperty(V)) { var _ = L[V];
                        nr(o, V, _) } } } var u = { xhr: o, target: g, requestConfig: l, etc: i, boosted: D, pathInfo: { requestPath: t, finalRequestPath: j || t, anchor: B } };
            o.onload = function() { try { var e = sr(n);
                    u.pathInfo.responsePath = ir(o);
                    v(n, u);
                    Mt(W);
                    ee(n, "htmx:afterRequest", u);
                    ee(n, "htmx:afterOnLoad", u); if (!re(n)) { var t = null; while (e.length > 0 && t == null) { var r = e.shift(); if (re(r)) { t = r } } if (t) { ee(t, "htmx:afterRequest", u);
                            ee(t, "htmx:afterOnLoad", u) } }
                    te(c);
                    s() } catch (e) { Q(n, "htmx:onLoadError", ne({ error: e }, u)); throw e } };
            o.onerror = function() { Mt(W);
                Q(n, "htmx:afterRequest", u);
                Q(n, "htmx:sendError", u);
                te(h);
                s() };
            o.onabort = function() { Mt(W);
                Q(n, "htmx:afterRequest", u);
                Q(n, "htmx:sendAbort", u);
                te(h);
                s() };
            o.ontimeout = function() { Mt(W);
                Q(n, "htmx:afterRequest", u);
                Q(n, "htmx:timeout", u);
                te(h);
                s() }; if (!ee(n, "htmx:beforeRequest", u)) { te(c);
                s(); return d } var W = kt(n);
            Y(["loadstart", "loadend", "progress", "abort"], function(t) { Y([o, o.upload], function(e) { e.addEventListener(t, function(e) { ee(n, "htmx:xhr:" + t, { lengthComputable: e.lengthComputable, loaded: e.loaded, total: e.total }) }) }) });
            ee(n, "htmx:beforeSend", u);
            o.send(e === "get" ? null : $t(o, n, M)); return d }

        function ur(e, t) { var r = t.xhr; var n = null; var i = null; if (ar(r, /HX-Push:/i)) { n = r.getResponseHeader("HX-Push");
                i = "push" } else if (ar(r, /HX-Push-Url:/i)) { n = r.getResponseHeader("HX-Push-Url");
                i = "push" } else if (ar(r, /HX-Replace-Url:/i)) { n = r.getResponseHeader("HX-Replace-Url");
                i = "replace" } if (n) { if (n === "false") { return {} } else { return { type: i, path: n } } } var a = t.pathInfo.finalRequestPath; var o = t.pathInfo.responsePath; var s = Z(e, "hx-push-url"); var f = Z(e, "hx-replace-url"); var c = K(e).boosted; var l = null; var u = null; if (s) { l = "push";
                u = s } else if (f) { l = "replace";
                u = f } else if (c) { l = "push";
                u = o || a } if (u) { if (u === "false") { return {} } if (u === "true") { u = o || a } if (t.pathInfo.anchor && u.indexOf("#") === -1) { u = u + "#" + t.pathInfo.anchor } return { type: l, path: u } } else { return {} } }

        function fr(s, l) { var u = l.xhr; var f = l.target; var n = l.etc; if (!ee(s, "htmx:beforeOnLoad", l)) return; if (ar(u, /HX-Trigger:/i)) { qe(u, "HX-Trigger", s) } if (ar(u, /HX-Location:/i)) { Tt(); var e = u.getResponseHeader("HX-Location"); var c; if (e.indexOf("{") === 0) { c = w(e);
                    e = c["path"];
                    delete c["path"] }
                or("GET", e, c).then(function() { Lt(e) }); return } if (ar(u, /HX-Redirect:/i)) { location.href = u.getResponseHeader("HX-Redirect"); return } if (ar(u, /HX-Refresh:/i)) { if ("true" === u.getResponseHeader("HX-Refresh")) { location.reload(); return } } if (ar(u, /HX-Retarget:/i)) { l.target = $().querySelector(u.getResponseHeader("HX-Retarget")) } var h = ur(s, l); var i = u.status >= 200 && u.status < 400 && u.status !== 204; var d = u.response; var t = u.status >= 400; var r = ne({ shouldSwap: i, serverResponse: d, isError: t }, l); if (!ee(f, "htmx:beforeSwap", r)) return;
            f = r.target;
            d = r.serverResponse;
            t = r.isError;
            l.failed = t;
            l.successful = !t; if (r.shouldSwap) { if (u.status === 286) { Fe(s) }
                wt(s, function(e) { d = e.transformResponse(d, u, s) }); if (h.type) { Tt() } var a = n.swapOverride; if (ar(u, /HX-Reswap:/i)) { a = u.getResponseHeader("HX-Reswap") } var c = Gt(s, a);
                f.classList.add(z.config.swappingClass); var o = function() { try { var e = document.activeElement; var t = {}; try { t = { elt: e, start: e ? e.selectionStart : null, end: e ? e.selectionEnd : null } } catch (e) {} var n = Zt(f);
                        Oe(c.swapStyle, f, s, d, n); if (t.elt && !re(t.elt) && t.elt.id) { var r = document.getElementById(t.elt.id); var i = { preventScroll: c.focusScroll !== undefined ? !c.focusScroll : !z.config.defaultFocusScroll }; if (r) { if (t.start && r.setSelectionRange) { try { r.setSelectionRange(t.start, t.end) } catch (e) {} }
                                r.focus(i) } }
                        f.classList.remove(z.config.swappingClass);
                        Y(n.elts, function(e) { if (e.classList) { e.classList.add(z.config.settlingClass) }
                            ee(e, "htmx:afterSwap", l) }); if (ar(u, /HX-Trigger-After-Swap:/i)) { var a = s; if (!re(s)) { a = $().body }
                            qe(u, "HX-Trigger-After-Swap", a) } var o = function() { Y(n.tasks, function(e) { e.call() });
                            Y(n.elts, function(e) { if (e.classList) { e.classList.remove(z.config.settlingClass) }
                                ee(e, "htmx:afterSettle", l) }); if (h.type) { if (h.type === "push") { Lt(h.path);
                                    ee($().body, "htmx:pushedIntoHistory", { path: h.path }) } else { Ht(h.path);
                                    ee($().body, "htmx:replacedInHistory", { path: h.path }) } } if (l.pathInfo.anchor) { var e = C("#" + l.pathInfo.anchor); if (e) { e.scrollIntoView({ block: "start", behavior: "auto" }) } } if (n.title) { var t = C("title"); if (t) { t.innerHTML = n.title } else { window.document.title = n.title } }
                            Kt(n.elts, c); if (ar(u, /HX-Trigger-After-Settle:/i)) { var r = s; if (!re(s)) { r = $().body }
                                qe(u, "HX-Trigger-After-Settle", r) } }; if (c.settleDelay > 0) { setTimeout(o, c.settleDelay) } else { o() } } catch (e) { Q(s, "htmx:swapError", l); throw e } }; if (c.swapDelay > 0) { setTimeout(o, c.swapDelay) } else { o() } } if (t) { Q(s, "htmx:responseError", ne({ error: "Response Status Error Code " + u.status + " from " + l.pathInfo.requestPath }, l)) } } var cr = {};

        function hr() { return { init: function(e) { return null }, onEvent: function(e, t) { return true }, transformResponse: function(e, t, r) { return e }, isInlineSwap: function(e) { return false }, handleSwap: function(e, t, r, n) { return false }, encodeParameters: function(e, t, r) { return null } } }

        function dr(e, t) { if (t.init) { t.init(r) }
            cr[e] = ne(hr(), t) }

        function vr(e) { delete cr[e] }

        function gr(e, r, n) { if (e == undefined) { return r } if (r == undefined) { r = [] } if (n == undefined) { n = [] } var t = J(e, "hx-ext"); if (t) { Y(t.split(","), function(e) { e = e.replace(/ /g, ""); if (e.slice(0, 7) == "ignore:") { n.push(e.slice(7)); return } if (n.indexOf(e) < 0) { var t = cr[e]; if (t && r.indexOf(t) < 0) { r.push(t) } } }) } return gr(u(e), r, n) }

        function pr(e) { if ($().readyState !== "loading") { e() } else { $().addEventListener("DOMContentLoaded", e) } }

        function mr() { if (z.config.includeIndicatorStyles !== false) { $().head.insertAdjacentHTML("beforeend", "<style>                      ." + z.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + z.config.requestClass + " ." + z.config.indicatorClass + "{opacity:1}                      ." + z.config.requestClass + "." + z.config.indicatorClass + "{opacity:1}                    </style>") } }

        function yr() { var e = $().querySelector('meta[name="htmx-config"]'); if (e) { return w(e.content) } else { return null } }

        function xr() { var e = yr(); if (e) { z.config = ne(z.config, e) } }
        pr(function() { xr();
            mr(); var e = $().body;
            mt(e); var t = $().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
            e.addEventListener("htmx:abort", function(e) { var t = e.target; var r = K(t); if (r && r.xhr) { r.xhr.abort() } });
            window.onpopstate = function(e) { if (e.state && e.state.htmx) { It();
                    Y(t, function(e) { ee(e, "htmx:restored", { document: $(), triggerEvent: ee }) }) } };
            setTimeout(function() { ee(e, "htmx:load", {}) }, 0) }); return z }() });