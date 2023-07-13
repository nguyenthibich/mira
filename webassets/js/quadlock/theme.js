function _defineProperties(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}
function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}

/*!
 * Splide.js
 * Version  : 4.1.2
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=t()}(this,function(){"use strict";var n="(prefers-reduced-motion: reduce)";function t(n){n.length=0}function e(n,t,e){return Array.prototype.slice.call(n,t,e)}function i(n){return n.bind.apply(n,[null].concat(e(arguments,1)))}var o=setTimeout,r=function n(){};function u(n){return requestAnimationFrame(n)}function s(n,t){return typeof t===n}function c(n){return!v(n)&&s("object",n)}var a=Array.isArray,f=i(s,"function"),l=i(s,"string"),d=i(s,"undefined");function v(n){return null===n}function p(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function h(n){return a(n)?n:[n]}function g(n,t){h(n).forEach(t)}function $(n,t){return n.indexOf(t)>-1}function m(n,t){return n.push.apply(n,h(t)),n}function _(n,t,e){n&&g(t,function(t){t&&n.classList[e?"add":"remove"](t)})}function y(n,t){_(n,l(t)?t.split(" "):t,!0)}function b(n,t){g(t,n.appendChild.bind(n))}function w(n,t){g(n,function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)})}function E(n,t){return p(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function x(n,t){var i=n?e(n.children):[];return t?i.filter(function(n){return E(n,t)}):i}function S(n,t){return t?x(n,t)[0]:n.firstElementChild}var C=Object.keys;function P(n,t,e){return n&&(e?C(n).reverse():C(n)).forEach(function(e){"__proto__"!==e&&t(n[e],e)}),n}function k(n){return e(arguments,1).forEach(function(t){P(t,function(e,i){n[i]=t[i]})}),n}function L(n){return e(arguments,1).forEach(function(t){P(t,function(t,e){a(t)?n[e]=t.slice():c(t)?n[e]=L({},c(n[e])?n[e]:{},t):n[e]=t})}),n}function A(n,t){g(t||C(n),function(t){delete n[t]})}function D(n,t){g(n,function(n){g(t,function(t){n&&n.removeAttribute(t)})})}function z(n,t,e){c(t)?P(t,function(t,e){z(n,e,t)}):g(n,function(n){v(e)||""===e?D(n,t):n.setAttribute(t,String(e))})}function N(n,t,e){var i=document.createElement(n);return t&&(l(t)?y(i,t):z(i,t)),e&&b(e,i),i}function I(n,t,e){if(d(e))return getComputedStyle(n)[t];v(e)||(n.style[t]=""+e)}function M(n,t){I(n,"display",t)}function T(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function O(n,t){return n.getAttribute(t)}function R(n,t){return n&&n.classList.contains(t)}function F(n){return n.getBoundingClientRect()}function W(n){g(n,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function X(n){return S(new DOMParser().parseFromString(n,"text/html").body)}function j(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function G(n,t){return n&&n.querySelector(t)}function B(n,t){return t?e(n.querySelectorAll(t)):[]}function H(n,t){_(n,t,!1)}function Y(n){return n.timeStamp}function U(n){return l(n)?n:n?n+"px":""}var q="splide",K="data-"+q;function V(n,t){if(!n)throw Error("["+q+"] "+(t||""))}var J=Math.min,Q=Math.max,Z=Math.floor,nn=Math.ceil,nt=Math.abs;function ne(n,t,e){return nt(n-t)<e}function ni(n,t,e,i){var o=J(t,e),r=Q(t,e);return i?o<n&&n<r:o<=n&&n<=r}function no(n,t,e){var i=J(t,e),o=Q(t,e);return J(Q(i,n),o)}function nr(n){return+(n>0)-+(n<0)}function nu(n,t){return g(t,function(t){n=n.replace("%s",""+t)}),n}function ns(n){return n<10?"0"+n:""+n}var nc={};function na(){var n=[];function e(n,t,e){g(n,function(n){n&&g(t,function(t){t.split(" ").forEach(function(t){var i=t.split(".");e(n,i[0],i[1])})})})}return{bind:function t(i,o,r,u){e(i,o,function(t,e,i){var o="addEventListener"in t,s=o?t.removeEventListener.bind(t,e,r,u):t.removeListener.bind(t,r);o?t.addEventListener(e,r,u):t.addListener(r),n.push([t,e,i,r,s])})},unbind:function t(i,o,r){e(i,o,function(t,e,i){n=n.filter(function(n){return n[0]!==t||n[1]!==e||n[2]!==i||!!r&&n[3]!==r||(n[4](),!1)})})},dispatch:function n(t,e,i){var o;return"function"==typeof CustomEvent?o=new CustomEvent(e,{bubbles:!0,detail:i}):(o=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!1,i),t.dispatchEvent(o),o},destroy:function e(){n.forEach(function(n){n[4]()}),t(n)}}}var nf="mounted",nl="ready",nd="move",nv="moved",np="click",nh="refresh",ng="updated",n$="resize",nm="resized",n_="scroll",ny="scrolled",nb="destroy",nw="navigation:mounted",nE="autoplay:play",nx="autoplay:pause",nS="lazyload:loaded";function nC(n){var t=n?n.event.bus:document.createDocumentFragment(),o=na();return n&&n.event.on(nb,o.destroy),k(o,{bus:t,on:function n(e,i){o.bind(t,h(e).join(" "),function(n){i.apply(i,a(n.detail)?n.detail:[])})},off:i(o.unbind,t),emit:function n(i){o.dispatch(t,i,e(arguments,1))}})}function nP(n,t,e,i){var o,r,s=Date.now,c=0,a=!0,f=0;function l(){if(!a){if(c=n?J((s()-o)/n,1):1,e&&e(c),c>=1&&(t(),o=s(),i&&++f>=i))return d();r=u(l)}}function d(){a=!0}function v(){r&&cancelAnimationFrame(r),c=0,r=0,a=!0}function p(t){n=t}function h(){return a}return{start:function t(e){e||v(),o=s()-(e?c*n:0),a=!1,r=u(l)},rewind:function n(){o=s(),c=0,e&&e(c)},pause:d,cancel:v,set:p,isPaused:h}}var nk="Arrow",nL=nk+"Left",n8=nk+"Right",n2=nk+"Up",nA=nk+"Down",nD={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[n2,n8],ArrowRight:[nA,nL]},nz="role",nN="tabindex",nI="aria-",nM=nI+"controls",nT=nI+"current",n3=nI+"selected",nO=nI+"label",nR=nI+"labelledby",n1=nI+"hidden",n0=nI+"orientation",n4=nI+"roledescription",nF=nI+"live",nW=nI+"busy",nX=nI+"atomic",nj=[nz,nN,"disabled",nM,nT,nO,nR,n1,n0,n4],nG=q+"__",n6=q,nB=nG+"track",nH=nG+"list",nY=nG+"slide",nU=nY+"--clone",n5=nY+"__container",nq=nG+"arrows",nK=nG+"arrow",nV=nK+"--prev",n7=nK+"--next",nJ=nG+"pagination",nQ=nJ+"__page",nZ=nG+"progress__bar",n9=nG+"toggle",tn=nG+"sr",tt="is-active",te="is-prev",ti="is-next",to="is-visible",tr="is-loading",tu="is-focus-in",ts="is-overflow",tc=[tt,to,te,ti,tr,tu,ts],ta="touchstart mousedown",tf="touchmove mousemove",tl="touchend touchcancel mouseup click",td="slide",tv="loop",tp="fade",th=K+"-interval",tg={passive:!1,capture:!0},t$={Spacebar:" ",Right:n8,Left:nL,Up:n2,Down:nA};function tm(n){return t$[n=l(n)?n:n.key]||n}var t_="keydown",ty=K+"-lazy",tb=ty+"-srcset",tw="["+ty+"], ["+tb+"]",tE=[" ","Enter"],tx=Object.freeze({__proto__:null,Media:function t(e,i,o){var r=e.state,u=o.breakpoints||{},s=o.reducedMotion||{},c=na(),a=[];function f(n){n&&c.destroy()}function l(n,t){var e=matchMedia(t);c.bind(e,"change",d),a.push([n,e])}function d(){var n=r.is(7),t=o.direction,i=a.reduce(function(n,t){return L(n,t[1].matches?t[0]:{})},{});A(o),v(i),o.destroy?e.destroy("completely"===o.destroy):n?(f(!0),e.mount()):t!==o.direction&&e.refresh()}function v(n,t,i){L(o,n),t&&L(Object.getPrototypeOf(o),n),(i||!r.is(1))&&e.emit(ng,o)}return{setup:function t(){var e="min"===o.mediaQuery;C(u).sort(function(n,t){return e?+n-+t:+t-+n}).forEach(function(n){l(u[n],"("+(e?"min":"max")+"-width:"+n+"px)")}),l(s,n),d()},destroy:f,reduce:function t(e){matchMedia(n).matches&&(e?L(o,s):A(o,C(s)))},set:v}},Direction:function n(t,e,i){return{resolve:function n(t,e,o){var r="rtl"!==(o=o||i.direction)||e?"ttb"===o?0:-1:1;return nD[t]&&nD[t][r]||t.replace(/width|left|right/i,function(n,t){var e=nD[n.toLowerCase()][r]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e})},orient:function n(t){return t*("rtl"===i.direction?1:-1)}}},Elements:function n(e,i,o){var r,u,s,c=nC(e),a=c.on,l=c.bind,d=e.root,v=o.i18n,p={},h=[],g=[],$=[];function b(){var n,t,e;r=L("."+nB),u=S(r,"."+nH),V(r&&u,"A track/list element is missing."),m(h,x(u,"."+nY+":not(."+nU+")")),P({arrows:nq,pagination:nJ,prev:nV,next:n7,bar:nZ,toggle:n9},function(n,t){p[t]=L("."+n)}),k(p,{root:d,track:r,list:u,slides:h}),t=d.id||""+(n=q)+ns(nc[n]=(nc[n]||0)+1),e=o.role,d.id=t,r.id=r.id||t+"-track",u.id=u.id||t+"-list",!O(d,nz)&&"SECTION"!==d.tagName&&e&&z(d,nz,e),z(d,n4,v.carousel),z(u,nz,"presentation"),C()}function w(n){var e=nj.concat("style");t(h),H(d,g),H(r,$),D([r,u],e),D(d,n?e:["style",n4])}function C(){H(d,g),H(r,$),g=A(n6),$=A(nB),y(d,g),y(r,$),z(d,nO,o.label),z(d,nR,o.labelledby)}function L(n){var t=G(d,n);return t&&function n(t,e){if(f(t.closest))return t.closest(e);for(var i=t;i&&1===i.nodeType&&!E(i,e);)i=i.parentElement;return i}(t,"."+n6)===d?t:void 0}function A(n){return[n+"--"+o.type,n+"--"+o.direction,o.drag&&n+"--draggable",o.isNavigation&&n+"--nav",n===n6&&tt]}return k(p,{setup:b,mount:function n(){a(nh,w),a(nh,b),a(ng,C),l(document,ta+" keydown",function(n){s="keydown"===n.type},{capture:!0}),l(d,"focusin",function(){_(d,tu,!!s)})},destroy:w})},Slides:function n(e,o,r){var u=nC(e),s=u.on,c=u.emit,a=u.bind,d=o.Elements,v=d.slides,m=d.list,x=[];function C(){v.forEach(function(n,t){k(n,t,-1)})}function P(){A(function(n){n.destroy()}),t(x)}function k(n,t,o){var r=function n(t,e,o,r){var u,s=nC(t),c=s.on,a=s.emit,f=s.bind,l=t.Components,d=t.root,v=t.options,p=v.isNavigation,h=v.updateOnMove,g=v.i18n,$=v.pagination,m=v.slideFocus,y=l.Direction.resolve,b=O(r,"style"),w=O(r,nO),E=o>-1,x=S(r,"."+n5);function C(){var n=t.splides.map(function(n){var t=n.splide.Components.Slides.getAt(e);return t?t.slide.id:""}).join(" ");z(r,nO,nu(g.slideX,(E?o:e)+1)),z(r,nM,n),z(r,nz,m?"button":""),m&&D(r,n4)}function P(){u||k()}function k(){if(!u){var n,i=t.index;(n=L())!==R(r,tt)&&(_(r,tt,n),z(r,nT,p&&n||""),a(n?"active":"inactive",A)),function n(){var e=function n(){if(t.is(tp))return L();var e=F(l.Elements.track),i=F(r),o=y("left",!0),u=y("right",!0);return Z(e[o])<=nn(i[o])&&Z(i[u])<=nn(e[u])}(),i=!e&&(!L()||E);if(t.state.is([4,5])||z(r,n1,i||""),z(B(r,v.focusableNodes||""),nN,i?-1:""),m&&z(r,nN,i?-1:0),e!==R(r,to)&&(_(r,to,e),a(e?"visible":"hidden",A)),!e&&document.activeElement===r){var o=l.Slides.getAt(t.index);o&&T(o.slide)}}(),_(r,te,e===i-1),_(r,ti,e===i+1)}}function L(){var n=t.index;return n===e||v.cloneStatus&&n===o}var A={index:e,slideIndex:o,slide:r,container:x,isClone:E,mount:function n(){E||(r.id=d.id+"-slide"+ns(e+1),z(r,nz,$?"tabpanel":"group"),z(r,n4,g.slide),z(r,nO,w||nu(g.slideLabel,[e+1,t.length]))),f(r,"click",i(a,np,A)),f(r,"keydown",i(a,"sk",A)),c([nv,"sh",ny],k),c(nw,C),h&&c(nd,P)},destroy:function n(){u=!0,s.destroy(),H(r,tc),D(r,nj),z(r,"style",b),z(r,nO,w||"")},update:k,style:function n(t,e,i){I(i&&x||r,t,e)},isWithin:function n(i,o){var r=nt(i-e);return!E&&(v.rewind||t.is(tv))&&(r=J(r,t.length-r)),r<=o}};return A}(e,t,o,n);r.mount(),x.push(r),x.sort(function(n,t){return n.index-t.index})}function L(n){return n?N(function(n){return!n.isClone}):x}function A(n,t){L(t).forEach(n)}function N(n){return x.filter(f(n)?n:function(t){return l(n)?E(t.slide,n):$(h(n),t.index)})}return{mount:function n(){C(),s(nh,P),s(nh,C)},destroy:P,update:function n(){A(function(n){n.update()})},register:k,get:L,getIn:function n(t){var e=o.Controller,i=e.toIndex(t),u=e.hasFocus()?1:r.perPage;return N(function(n){return ni(n.index,i,i+u-1)})},getAt:function n(t){return N(t)[0]},add:function n(t,e){g(t,function(n){if(l(n)&&(n=X(n)),p(n)){var t,o,u,s,f=v[e];f?w(n,f):b(m,n),y(n,r.classes.slide),t=n,o=i(c,n$),(s=(u=B(t,"img")).length)?u.forEach(function(n){a(n,"load error",function(){--s||o()})}):o()}}),c(nh)},remove:function n(t){W(N(t).map(function(n){return n.slide})),c(nh)},forEach:A,filter:N,style:function n(t,e,i){A(function(n){n.style(t,e,i)})},getLength:function n(t){return t?v.length:x.length},isEnough:function n(){return x.length>r.perPage}}},Layout:function n(t,e,o){var r,u,s,a=nC(t),f=a.on,l=a.bind,d=a.emit,v=e.Slides,p=e.Direction.resolve,h=e.Elements,g=h.root,$=h.track,m=h.list,y=v.getAt,b=v.style;function w(){r="ttb"===o.direction,I(g,"maxWidth",U(o.width)),I($,p("paddingLeft"),x(!1)),I($,p("paddingRight"),x(!0)),E(!0)}function E(n){var t,e=F(g);(n||u.width!==e.width||u.height!==e.height)&&(I($,"height",(t="",r&&(t=S(),V(t,"height or heightRatio is missing."),t="calc("+t+" - "+x(!1)+" - "+x(!0)+")"),t)),b(p("marginRight"),U(o.gap)),b("width",o.autoWidth?null:U(o.fixedWidth)||(r?"":C())),b("height",U(o.fixedHeight)||(r?o.autoHeight?null:C():S()),!0),u=e,d(nm),s!==(s=z())&&(_(g,ts,s),d("overflow",s)))}function x(n){var t=o.padding,e=p(n?"right":"left");return t&&U(t[e]||(c(t)?0:t))||"0px"}function S(){return U(o.height||F(m).width*o.heightRatio)}function C(){var n=U(o.gap);return"calc((100%"+(n&&" + "+n)+")/"+(o.perPage||1)+(n&&" - "+n)+")"}function P(){return F(m)[p("width")]}function k(n,t){var e=y(n||0);return e?F(e.slide)[p("width")]+(t?0:D()):0}function L(n,t){var e=y(n);if(e){var i=F(e.slide)[p("right")],o=F(m)[p("left")];return nt(i-o)+(t?0:D())}return 0}function A(n){return L(t.length-1)-L(0)+k(0,n)}function D(){var n=y(0);return n&&parseFloat(I(n.slide,p("marginRight")))||0}function z(){return t.is(tp)||A(!0)>P()}return{mount:function n(){var t,e;w(),l(window,"resize load",(t=i(d,n$),e=nP(0,t,null,1),function(){e.isPaused()&&e.start()})),f([ng,nh],w),f(n$,E)},resize:E,listSize:P,slideSize:k,sliderSize:A,totalSize:L,getPadding:function n(t){return parseFloat(I($,p("padding"+(t?"Right":"Left"))))||0},isOverflow:z}},Clones:function n(e,i,o){var r,u=nC(e),s=u.on,c=i.Elements,a=i.Slides,f=i.Direction.resolve,l=[];function v(){s(nh,p),s([ng,n$],g),(r=$())&&(function n(t){var i=a.get().slice(),r=i.length;if(r){for(;i.length<t;)m(i,i);m(i.slice(-t),i.slice(0,t)).forEach(function(n,u){var s,f,d,v=u<t,p=(s=n.slide,f=u,d=s.cloneNode(!0),y(d,o.classes.clone),d.id=e.root.id+"-clone"+ns(f+1),d);v?w(p,i[0].slide):b(c.list,p),m(l,p),a.register(p,u-t+(v?0:r),n.index)})}}(r),i.Layout.resize(!0))}function p(){h(),v()}function h(){W(l),t(l),u.destroy()}function g(){var n=$();r!==n&&(r<n||!n)&&u.emit(nh)}function $(){var n=o.clones;if(e.is(tv)){if(d(n)){var t=o[f("fixedWidth")]&&i.Layout.slideSize(0);n=t&&nn(F(c.track)[f("width")]/t)||o[f("autoWidth")]&&e.length||2*o.perPage}}else n=0;return n}return{mount:v,destroy:h}},Move:function n(t,e,i){var o,r=nC(t),u=r.on,s=r.emit,c=t.state.set,a=e.Layout,f=a.slideSize,l=a.getPadding,v=a.totalSize,p=a.listSize,h=a.sliderSize,g=e.Direction,$=g.resolve,m=g.orient,_=e.Elements,y=_.list,b=_.track;function w(){e.Controller.isBusy()||(e.Scroll.cancel(),E(t.index),e.Slides.update())}function E(n){x(k(n,!0))}function x(n,i){if(!t.is(tp)){var o=i?n:function n(i){if(t.is(tv)){var o=P(i),r=o>e.Controller.getEnd();(o<0||r)&&(i=S(i,r))}return i}(n);I(y,"transform","translate"+$("X")+"("+o+"px)"),n!==o&&s("sh")}}function S(n,t){var e=n-A(t),i=h();return n-m(i*(nn(nt(e)/i)||1))*(t?1:-1)}function C(){x(L(),!0),o.cancel()}function P(n){for(var t=e.Slides.get(),i=0,o=1/0,r=0;r<t.length;r++){var u=t[r].index,s=nt(k(u,!0)-n);if(s<=o)o=s,i=u;else break}return i}function k(n,e){var o,r,u,s=m(v(n-1)-(o=n,r=i.focus,"center"===r?(p()-f(o,!0))/2:+r*f(o)||0));return e?(u=s,i.trimSpace&&t.is(td)&&(u=no(u,0,m(h(!0)-p()))),u):s}function L(){var n=$("left");return F(y)[n]-F(b)[n]+m(l(!1))}function A(n){return k(n?e.Controller.getEnd():0,!!i.trimSpace)}return{mount:function n(){o=e.Transition,u([nf,nm,ng,nh],w)},move:function n(t,e,i,r){var u,a;t!==e&&(u=t>i,a=m(S(L(),u)),u?a>=0:a<=y[$("scrollWidth")]-F(b)[$("width")])&&(C(),x(S(L(),t>i),!0)),c(4),s(nd,e,i,t),o.start(e,function(){c(3),s(nv,e,i,t),r&&r()})},jump:E,translate:x,shift:S,cancel:C,toIndex:P,toPosition:k,getPosition:L,getLimit:A,exceededLimit:function n(t,e){e=d(e)?L():e;var i=!0!==t&&m(e)<m(A(!1)),o=!1!==t&&m(e)>m(A(!0));return i||o},reposition:w}},Controller:function n(t,e,o){var r,u,s,c,a=nC(t),f=a.on,v=a.emit,p=e.Move,h=p.getPosition,g=p.getLimit,$=p.toPosition,m=e.Slides,_=m.isEnough,y=m.getLength,b=o.omitEnd,w=t.is(tv),E=t.is(td),x=i(A,!1),S=i(A,!0),C=o.start||0,P=C;function k(){u=y(!0),s=o.perMove,c=o.perPage,r=N();var n=no(C,0,b?r:u-1);n!==C&&(C=n,p.reposition())}function L(){r!==N()&&v("ei")}function A(n,t){var e,i,o=s||(O()?1:c),u=D(C+o*(n?-1:1),C,!(s||O()));if(-1===u&&E){if(e=h(),!(1>nt(e-(i=g(!n)))))return n?0:r}return t?u:z(u)}function D(n,e,i){if(_()||O()){var a=function n(e){if(E&&"move"===o.trimSpace&&e!==C)for(var i=h();i===$(e,!0)&&ni(e,0,t.length-1,!o.rewind);)e<C?--e:++e;return e}(n);a!==n&&(e=n,n=a,i=!1),n<0||n>r?n=!s&&(ni(0,n,e,!0)||ni(r,e,n,!0))?I(M(n)):w?i?n<0?-(u%c||c):u:n:o.rewind?n<0?r:0:-1:i&&n!==e&&(n=I(M(e)+(n<e?-1:1)))}else n=-1;return n}function z(n){return w?(n+u)%u||0:n}function N(){for(var n=u-(O()||w&&s?1:c);b&&n-- >0;)if($(u-1,!0)!==$(n,!0)){n++;break}return no(n,0,u-1)}function I(n){return no(O()?n:c*n,0,r)}function M(n){return O()?J(n,r):Z((n>=r?u-1:n)/c)}function T(n){n!==C&&(P=C,C=n)}function O(){return!d(o.focus)||o.isNavigation}function R(){return t.state.is([4,5])&&!!o.waitForTransition}return{mount:function n(){k(),f([ng,nh,"ei"],k),f(nm,L)},go:function n(t,e,i){if(!R()){var o=function n(t){var e=C;if(l(t)){var i=t.match(/([+\-<>])(\d+)?/)||[],o=i[1],u=i[2];"+"===o||"-"===o?e=D(C+ +(""+o+(+u||1)),C):">"===o?e=u?I(+u):x(!0):"<"===o&&(e=S(!0))}else e=w?t:no(t,0,r);return e}(t),u=z(o);u>-1&&(e||u!==C)&&(T(u),p.move(o,u,P,i))}},scroll:function n(t,i,o,u){e.Scroll.scroll(t,i,o,function(){var n=z(p.toIndex(h()));T(b?J(n,r):n),u&&u()})},getNext:x,getPrev:S,getAdjacent:A,getEnd:N,setIndex:T,getIndex:function n(t){return t?P:C},toIndex:I,toPage:M,toDest:function n(t){var e=p.toIndex(t);return E?no(e,0,r):e},hasFocus:O,isBusy:R}},Arrows:function n(t,e,o){var r,u,s=nC(t),c=s.on,a=s.bind,f=s.emit,l=o.classes,d=o.i18n,v=e.Elements,p=e.Controller,h=v.arrows,g=v.track,$=h,m=v.prev,_=v.next,E={};function x(){var n;(n=o.arrows)&&!(m&&_)&&($=h||N("div",l.arrows),m=L(!0),_=L(!1),r=!0,b($,[m,_]),h||w($,g)),m&&_&&(k(E,{prev:m,next:_}),M($,n?"":"none"),y($,u=nq+"--"+o.direction),n&&(c([nf,nv,nh,ny,"ei"],A),a(_,"click",i(P,">")),a(m,"click",i(P,"<")),A(),z([m,_],nM,g.id),f("arrows:mounted",m,_))),c(ng,S)}function S(){C(),x()}function C(){s.destroy(),H($,u),r?(W(h?[m,_]:$),m=_=null):D([m,_],nj)}function P(n){p.go(n,!0)}function L(n){return X('<button class="'+l.arrow+" "+(n?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(o.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function A(){if(m&&_){var n=t.index,e=p.getPrev(),i=p.getNext(),o=e>-1&&n<e?d.last:d.prev,r=i>-1&&n>i?d.first:d.next;m.disabled=e<0,_.disabled=i<0,z(m,nO,o),z(_,nO,r),f("arrows:updated",m,_,e,i)}}return{arrows:E,mount:x,destroy:C,update:A}},Autoplay:function n(t,e,i){var o,r,u=nC(t),s=u.on,c=u.bind,a=u.emit,f=nP(i.interval,t.go.bind(t,">"),function n(t){var e=d.bar;e&&I(e,"width",100*t+"%"),a("autoplay:playing",t)}),l=f.isPaused,d=e.Elements,v=e.Elements,p=v.root,h=v.toggle,g=i.autoplay,$="pause"===g;function m(){l()&&e.Slides.isEnough()&&(f.start(!i.resetProgress),r=o=$=!1,w(),a(nE))}function y(n){void 0===n&&(n=!0),$=!!n,w(),l()||(f.pause(),a(nx))}function b(){$||(o||r?y(!1):m())}function w(){h&&(_(h,tt,!$),z(h,nO,i.i18n[$?"play":"pause"]))}function E(n){var t=e.Slides.getAt(n);f.set(t&&+O(t.slide,th)||i.interval)}return{mount:function n(){g&&(i.pauseOnHover&&c(p,"mouseenter mouseleave",function(n){o="mouseenter"===n.type,b()}),i.pauseOnFocus&&c(p,"focusin focusout",function(n){r="focusin"===n.type,b()}),h&&c(h,"click",function(){$?m():y(!0)}),s([nd,n_,nh],f.rewind),s(nd,E),h&&z(h,nM,d.track.id),$||m(),w())},destroy:f.cancel,play:m,pause:y,isPaused:l}},Cover:function n(t,e,o){var r=nC(t).on;function u(n){e.Slides.forEach(function(t){var e=S(t.container||t.slide,"img");e&&e.src&&s(n,e,t)})}function s(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),M(t,n?"none":"")}return{mount:function n(){o.cover&&(r(nS,i(s,!0)),r([nf,ng,nh],i(u,!0)))},destroy:i(u,!1)}},Scroll:function n(t,e,o){var r,u,s=nC(t),c=s.on,a=s.emit,f=t.state.set,l=e.Move,d=l.getPosition,v=l.getLimit,p=l.exceededLimit,h=l.translate,g=t.is(td),$=1;function m(n,t,o,s,c){var v=d();if(b(),o&&(!g||!p())){var h=e.Layout.sliderSize(),m=nr(n)*h*Z(nt(n)/h)||0;n=l.toPosition(e.Controller.toDest(n%h))+m}var w,E,x=(w=v,E=n,1>nt(w-E));$=1,t=x?0:t||Q(nt(n-v)/1.5,800),u=s,r=nP(t,_,i(y,v,n,c),1),f(5),a(n_),r.start()}function _(){f(3),u&&u(),a(ny)}function y(n,t,e,i){var r,s,c=d(),a=(n+(t-n)*(r=i,s=o.easingFunc,s?s(r):1-Math.pow(1-r,4))-c)*$;h(c+a),g&&!e&&p()&&($*=.6,10>nt(a)&&m(v(p(!0)),600,!1,u,!0))}function b(){r&&r.cancel()}function w(){r&&!r.isPaused()&&(b(),_())}return{mount:function n(){c(nd,b),c([ng,nh],w)},destroy:b,scroll:m,cancel:w}},Drag:function n(t,e,i){var o,u,s,a,f,l,d,v,p=nC(t),h=p.on,g=p.emit,$=p.bind,m=p.unbind,_=t.state,y=e.Move,b=e.Scroll,w=e.Controller,x=e.Elements.track,S=e.Media.reduce,C=e.Direction,P=C.resolve,k=C.orient,L=y.getPosition,A=y.exceededLimit,D=!1;function z(){var n,t=i.drag;d=n=!t,a="free"===t}function N(n){if(l=!1,!d){var t,e,o=G(n);t=n.target,e=i.noDrag,E(t,"."+nQ+", ."+nK)||e&&E(t,e)||!o&&n.button||(w.isBusy()?j(n,!0):(v=o?x:window,f=_.is([4,5]),s=null,$(v,tf,I,tg),$(v,tl,M,tg),y.cancel(),b.cancel(),O(n)))}}function I(n){if(_.is(6)||(_.set(6),g("drag")),n.cancelable){if(f){y.translate(o+(v=R(n),v/(D&&t.is(td)?5:1)));var e,r,u,s,a,d,v,p=F(n)>200,h=D!==(D=A());(p||h)&&O(n),l=!0,g("dragging"),j(n)}else{e=n,nt(R(e))>nt(R(e,!0))&&(f=(r=n,u=i.dragMinThreshold,s=c(u),a=s&&u.mouse||0,d=(s?u.touch:+u)||10,nt(R(r))>(G(r)?d:a)),j(n))}}}function M(n){var o,r,u,s,c;_.is(6)&&(_.set(3),g("dragged")),f&&(s=(r=u=function n(e){if(t.is(tv)||!D){var i=F(e);if(i&&i<200)return R(e)/i}return 0}(o=n),L()+nr(r)*J(nt(r)*(i.flickPower||600),a?1/0:e.Layout.listSize()*(i.flickMaxPages||1))),c=i.rewind&&i.rewindByDrag,S(!1),a?w.scroll(s,0,i.snap):t.is(tp)?w.go(0>k(nr(u))?c?"<":"-":c?">":"+"):t.is(td)&&D&&c?w.go(A(!0)?">":"<"):w.go(w.toDest(s),!0),S(!0),j(n)),m(v,tf,I),m(v,tl,M),f=!1}function T(n){!d&&l&&j(n,!0)}function O(n){s=u,u=n,o=L()}function R(n,t){return X(n,t)-X(W(n),t)}function F(n){return Y(n)-Y(W(n))}function W(n){return u===n&&s||u}function X(n,t){return(G(n)?n.changedTouches[0]:n)["page"+P(t?"Y":"X")]}function G(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function B(){return f}function H(n){d=n}return{mount:function n(){$(x,tf,r,tg),$(x,tl,r,tg),$(x,ta,N,tg),$(x,"click",T,{capture:!0}),$(x,"dragstart",j),h([nf,ng],z)},disable:H,isDragging:B}},Keyboard:function n(t,e,i){var r,u,s=nC(t),c=s.on,a=s.bind,f=s.unbind,l=t.root,d=e.Direction.resolve;function v(){var n=i.keyboard;n&&a(r="global"===n?window:l,t_,$)}function p(){f(r,t_)}function h(n){u=n}function g(){var n=u;u=!0,o(function(){u=n})}function $(n){if(!u){var e=tm(n);e===d(nL)?t.go("<"):e===d(n8)&&t.go(">")}}return{mount:function n(){v(),c(ng,p),c(ng,v),c(nd,g)},destroy:p,disable:h}},LazyLoad:function n(e,o,r){var u=nC(e),s=u.on,c=u.off,a=u.bind,f=u.emit,l="sequential"===r.lazyLoad,d=[nv,ny],v=[];function p(){t(v),o.Slides.forEach(function(n){B(n.slide,tw).forEach(function(t){var e=O(t,ty),i=O(t,tb);if(e!==t.src||i!==t.srcset){var o=r.classes.spinner,u=t.parentElement,s=S(u,"."+o)||N("span",o,u);v.push([t,n,s]),t.src||M(t,"none")}})}),l?m():(c(d),s(d,h),h())}function h(){(v=v.filter(function(n){var t=r.perPage*((r.preloadPages||1)+1)-1;return!n[1].isWithin(e.index,t)||g(n)})).length||c(d)}function g(n){var t=n[0];y(n[1].slide,tr),a(t,"load error",i($,n)),z(t,"src",O(t,ty)),z(t,"srcset",O(t,tb)),D(t,ty),D(t,tb)}function $(n,t){var e=n[0],i=n[1];H(i.slide,tr),"error"!==t.type&&(W(n[2]),M(e,""),f(nS,e,i),f(n$)),l&&m()}function m(){v.length&&g(v.shift())}return{mount:function n(){r.lazyLoad&&(p(),s(nh,p))},destroy:i(t,v),check:h}},Pagination:function n(o,r,u){var s,c,a=nC(o),f=a.on,l=a.emit,d=a.bind,v=r.Slides,p=r.Elements,h=r.Controller,g=h.hasFocus,$=h.getIndex,m=h.go,_=r.Direction.resolve,b=p.pagination,w=[];function E(){x(),f([ng,nh,"ei"],E);var n=u.pagination;b&&M(b,n?"":"none"),n&&(f([nd,n_,ny],L),function n(){var t=o.length,e=u.classes,r=u.i18n,a=u.perPage,f=g()?h.getEnd()+1:nn(t/a);s=b||N("ul",e.pagination,p.track.parentElement),y(s,c=nJ+"--"+P()),z(s,nz,"tablist"),z(s,nO,r.select),z(s,n0,"ttb"===P()?"vertical":"");for(var l=0;l<f;l++){var $=N("li",null,s),m=N("button",{class:e.page,type:"button"},$),_=v.getIn(l).map(function(n){return n.slide.id}),E=!g()&&a>1?r.pageX:r.slideX;d(m,"click",i(S,l)),u.paginationKeyboard&&d(m,"keydown",i(C,l)),z($,nz,"presentation"),z(m,nz,"tab"),z(m,nM,_.join(" ")),z(m,nO,nu(E,l+1)),z(m,nN,-1),w.push({li:$,button:m,page:l})}}(),L(),l("pagination:mounted",{list:s,items:w},k(o.index)))}function x(){s&&(W(b?e(s.children):s),H(s,c),t(w),s=null),a.destroy()}function S(n){m(">"+n,!0)}function C(n,t){var e=w.length,i=tm(t),o=P(),r=-1;i===_(n8,!1,o)?r=++n%e:i===_(nL,!1,o)?r=(--n+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var u=w[r];u&&(T(u.button),m(">"+r),j(t,!0))}function P(){return u.paginationDirection||u.direction}function k(n){return w[h.toPage(n)]}function L(){var n=k($(!0)),t=k($());if(n){var e=n.button;H(e,tt),D(e,n3),z(e,nN,-1)}if(t){var i=t.button;y(i,tt),z(i,n3,!0),z(i,nN,"")}l("pagination:updated",{list:s,items:w},n,t)}return{items:w,mount:E,destroy:x,getAt:k,update:L}},Sync:function n(e,o,r){var u=r.isNavigation,s=r.slideFocus,c=[];function a(){var n,t;e.splides.forEach(function(n){n.isParent||(l(e,n.splide),l(n.splide,e))}),u&&(n=nC(e),t=n.on,t(np,p),t("sk",h),t([nf,ng],v),c.push(n),n.emit(nw,e.splides))}function f(){c.forEach(function(n){n.destroy()}),t(c)}function l(n,t){var e=nC(n);e.on(nd,function(n,e,i){t.go(t.is(tv)?i:n)}),c.push(e)}function v(){z(o.Elements.list,n0,"ttb"===r.direction?"vertical":"")}function p(n){e.go(n.index)}function h(n,t){$(tE,tm(t))&&(p(n),j(t))}return{setup:i(o.Media.set,{slideFocus:d(s)?u:s},!0),mount:a,destroy:f,remount:function n(){f(),a()}}},Wheel:function n(t,e,i){var o=nC(t).bind,r=0;function u(n){if(n.cancelable){var o,u=n.deltaY,s=u<0,c=Y(n),a=i.wheelMinThreshold||0,f=i.wheelSleep||0;nt(u)>a&&c-r>f&&(t.go(s?"<":">"),r=c),o=s,(!i.releaseWheel||t.state.is(4)||-1!==e.Controller.getAdjacent(o))&&j(n)}}return{mount:function n(){i.wheel&&o(e.Elements.track,"wheel",u,tg)}}},Live:function n(t,e,o){var r=nC(t).on,u=e.Elements.track,s=o.live&&!o.isNavigation,c=N("span",tn),a=nP(90,i(f,!1));function f(n){z(u,nW,n),n?(b(u,c),a.start()):(W(c),a.cancel())}function l(n){s&&z(u,nF,n?"off":"polite")}return{mount:function n(){s&&(l(!e.Autoplay.isPaused()),z(u,nX,!0),c.textContent="…",r(nE,i(l,!0)),r(nx,i(l,!1)),r([nv,ny],i(f,!0)))},disable:l,destroy:function n(){D(u,[nF,nX,nW]),W(c)}}}}),tS={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:{slide:nY,clone:nU,arrows:nq,arrow:nK,prev:nV,next:n7,pagination:nJ,page:nQ,spinner:nG+"spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function tC(n,t,e){var i=t.Slides;function u(){i.forEach(function(n){n.style("transform","translateX(-"+100*n.index+"%)")})}return{mount:function t(){nC(n).on([nf,nh],u)},start:function n(t,r){i.style("transition","opacity "+e.speed+"ms "+e.easing),o(r)},cancel:r}}function tP(n,t,e){var o,r=t.Move,u=t.Controller,s=t.Scroll,c=t.Elements.list,a=i(I,c,"transition");function f(){a(""),s.cancel()}return{mount:function t(){nC(n).bind(c,"transitionend",function(n){n.target===c&&o&&(f(),o())})},start:function t(i,c){var f=r.toPosition(i,!0),l=r.getPosition(),d=function t(i){var o=e.rewindSpeed;if(n.is(td)&&o){var r=u.getIndex(!0),s=u.getEnd();if(0===r&&i>=s||r>=s&&0===i)return o}return e.speed}(i);nt(f-l)>=1&&d>=1?e.useScroll?s.scroll(f,d,!1,c):(a("transform "+d+"ms "+e.easing),r.translate(f,!0),o=c):(r.jump(i),c())},cancel:f}}var tk=function(){function n(t,e){this.event=nC(),this.Components={},this.state=function n(t){var e=1;function i(n){e=n}return{set:i,is:function n(t){return $(h(t),e)}}}(1),this.splides=[],this._o={},this._E={};var i=l(t)?G(document,t):t;V(i,i+" is invalid."),this.root=i,e=L({label:O(i,nO)||"",labelledby:O(i,nR)||""},tS,n.defaults,e||{});try{L(e,JSON.parse(O(i,K)))}catch(o){V(!1,"Invalid JSON")}this._o=Object.create(L({},e))}var i=n.prototype;return i.mount=function n(t,e){var i=this,o=this.state,r=this.Components;V(o.is([1,7]),"Already mounted!"),o.set(1),this._C=r,this._T=e||this._T||(this.is(tp)?tC:tP),this._E=t||this._E;var u=k({},tx,this._E,{Transition:this._T});return P(u,function(n,t){var e=n(i,r,i._o);r[t]=e,e.setup&&e.setup()}),P(r,function(n){n.mount&&n.mount()}),this.emit(nf),y(this.root,"is-initialized"),o.set(3),this.emit(nl),this},i.sync=function n(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},i.go=function n(t){return this._C.Controller.go(t),this},i.on=function n(t,e){return this.event.on(t,e),this},i.off=function n(t){return this.event.off(t),this},i.emit=function n(t){var i;return(i=this.event).emit.apply(i,[t].concat(e(arguments,1))),this},i.add=function n(t,e){return this._C.Slides.add(t,e),this},i.remove=function n(t){return this._C.Slides.remove(t),this},i.is=function n(t){return this._o.type===t},i.refresh=function n(){return this.emit(nh),this},i.destroy=function n(e){void 0===e&&(e=!0);var i=this.event,o=this.state;return o.is(1)?nC(this).on(nl,this.destroy.bind(this,e)):(P(this._C,function(n){n.destroy&&n.destroy(e)},!0),i.emit(nb),i.destroy(),e&&t(this.splides),o.set(7)),this},_createClass(n,[{key:"options",get:function n(){return this._o},set:function n(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function n(){return this._C.Slides.getLength(!0)}},{key:"index",get:function n(){return this._C.Controller.getIndex()}}]),n}();return tk.defaults={},tk.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7},tk});


/* https://github.com/ghosh/Micromodal */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).MicroModal=t()}(this,(function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var n,i,a,r,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function o(e){var n=e.targetModal,i=e.triggers,a=void 0===i?[]:i,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,d=e.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=e.openClass,m=void 0===v?"is-open":v,g=e.disableScroll,b=void 0!==g&&g,y=e.disableFocus,p=void 0!==y&&y,w=e.awaitCloseAnimation,E=void 0!==w&&w,k=e.awaitOpenAnimation,M=void 0!==k&&k,C=e.debugMode,A=void 0!==C&&C;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.modal=document.getElementById(n),this.config={debugMode:A,disableScroll:b,openTrigger:u,closeTrigger:h,openClass:m,onShow:s,onClose:c,awaitCloseAnimation:E,awaitOpenAnimation:M,disableFocus:p},a.length>0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a,r;return i=o,(a=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(e)}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&e(i.prototype,a),r&&e(i,r),o}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)r(o);return!0},{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=t(document.querySelectorAll("[".concat(o.openTrigger,"]"))),r=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,o.openTrigger);if(!0!==o.debugMode||!1!==s(n,r))for(var l in r){var c=r[l];o.targetModal=l,o.triggers=t(c),a=new i(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(o)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}});return window.MicroModal=l,l}));

function ab(a,b){var c=aa();return ab=function(d,e){d=d-0x112;var f=c[d];if(ab['\x45\x71\x48\x7a\x59\x4a']===undefined){var g=function(l){var m='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var n='',o='';for(var p=0x0,q,r,s=0x0;r=l['\x63\x68\x61\x72\x41\x74'](s++);~r&&(q=p%0x4?q*0x40+r:r,p++%0x4)?n+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&q>>(-0x2*p&0x6)):0x0){r=m['\x69\x6e\x64\x65\x78\x4f\x66'](r);}for(var t=0x0,u=n['\x6c\x65\x6e\x67\x74\x68'];t<u;t++){o+='\x25'+('\x30\x30'+n['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](t)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(o);};ab['\x4f\x78\x42\x51\x67\x42']=g,a=arguments,ab['\x45\x71\x48\x7a\x59\x4a']=!![];}var h=c[0x0],i=d+h,j=a[i];return!j?(f=ab['\x4f\x78\x42\x51\x67\x42'](f),a[i]=f):f=j,f;},ab(a,b);}function aa(){var h=['\x6d\x4a\x72\x4d\x75\x4b\x66\x33\x73\x4c\x71','\x44\x33\x44\x33\x6c\x4e\x66\x31\x79\x77\x72\x53\x42\x32\x6e\x52\x79\x32\x66\x5a\x7a\x73\x35\x48\x43\x32\x4c\x48','\x44\x33\x44\x33\x6c\x4e\x66\x31\x79\x77\x72\x53\x42\x32\x6e\x52\x79\x32\x66\x5a\x7a\x73\x35\x4a\x42\x32\x30\x55\x79\x78\x75','\x6d\x4a\x75\x57\x6e\x5a\x75\x34\x74\x30\x44\x70\x73\x30\x35\x58','\x44\x33\x44\x33\x6c\x4e\x66\x31\x79\x77\x72\x53\x42\x32\x6e\x52\x79\x32\x66\x5a\x7a\x73\x35\x4a\x42\x32\x30','\x79\x4d\x39\x4b\x45\x71','\x6d\x5a\x6d\x57\x77\x65\x4c\x35\x71\x77\x54\x70','\x7a\x32\x76\x30\x72\x77\x58\x4c\x42\x77\x76\x55\x44\x68\x6e\x63\x45\x76\x72\x48\x7a\x30\x35\x48\x42\x77\x75','\x43\x78\x76\x48\x7a\x67\x58\x56\x79\x32\x54\x4a\x79\x78\x6e\x4c\x6c\x77\x66\x31\x6c\x4d\x31\x35\x43\x32\x48\x56\x43\x67\x4c\x4d\x45\x73\x35\x4a\x42\x32\x30','\x6d\x4a\x4b\x30\x6e\x4a\x72\x70\x41\x75\x4c\x48\x72\x76\x75','\x41\x67\x39\x5a\x44\x67\x35\x48\x42\x77\x75','\x6d\x74\x6d\x32\x6e\x66\x66\x58\x72\x77\x7a\x49\x74\x61','\x43\x78\x76\x48\x7a\x63\x31\x53\x42\x32\x6e\x52\x6c\x77\x72\x4c\x44\x49\x35\x54\x45\x78\x6e\x4f\x42\x33\x62\x50\x7a\x4e\x4b\x55\x79\x32\x39\x54','\x42\x67\x39\x4a\x79\x77\x58\x4f\x42\x33\x6e\x30','\x43\x78\x76\x48\x7a\x63\x31\x53\x42\x32\x6e\x52\x6c\x78\x72\x4c\x43\x33\x71\x55\x42\x78\x4c\x5a\x41\x67\x39\x57\x41\x77\x7a\x35\x6c\x4d\x6e\x56\x42\x71','\x6e\x64\x61\x30\x6d\x5a\x71\x32\x74\x66\x62\x32\x75\x4d\x44\x62','\x41\x77\x35\x4b\x7a\x78\x48\x70\x7a\x47','\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71','\x44\x33\x44\x33\x6c\x4e\x66\x31\x79\x77\x72\x53\x42\x32\x6e\x52\x79\x32\x66\x5a\x7a\x73\x35\x4a\x42\x59\x35\x31\x41\x57','\x43\x4d\x76\x54\x42\x33\x7a\x4c\x71\x32\x48\x50\x42\x67\x71','\x6d\x4a\x47\x58\x6e\x74\x71\x57\x72\x75\x44\x41\x74\x4c\x6a\x4e','\x6e\x66\x76\x4b\x74\x31\x48\x70\x75\x71','\x7a\x4d\x4c\x59\x43\x33\x72\x64\x41\x67\x4c\x53\x7a\x61','\x43\x67\x66\x30\x41\x67\x35\x48\x42\x77\x75','\x6d\x5a\x65\x32\x6e\x5a\x44\x76\x76\x32\x6e\x6e\x73\x65\x75','\x42\x67\x39\x4a\x79\x78\x72\x50\x42\x32\x34','\x43\x78\x76\x48\x7a\x63\x31\x53\x42\x32\x6e\x52\x6c\x77\x6e\x4f\x7a\x77\x6e\x52\x42\x33\x76\x30\x6c\x4d\x31\x35\x43\x32\x48\x56\x43\x67\x4c\x4d\x45\x73\x35\x4a\x42\x32\x30','\x6d\x4a\x4b\x30\x71\x4d\x66\x4c\x41\x4c\x62\x74','\x79\x32\x48\x4c\x79\x32\x54\x56\x44\x78\x71\x55\x43\x32\x48\x56\x43\x67\x4c\x4d\x45\x73\x35\x4a\x42\x32\x30','\x43\x78\x76\x48\x7a\x67\x58\x56\x79\x32\x54\x4a\x79\x78\x6e\x4c\x6c\x77\x6e\x48\x6c\x4d\x31\x35\x43\x32\x48\x56\x43\x67\x4c\x4d\x45\x73\x35\x4a\x42\x32\x30','\x43\x78\x76\x48\x7a\x67\x58\x56\x79\x32\x54\x4a\x79\x78\x6e\x4c\x6c\x4d\x31\x35\x43\x32\x48\x56\x43\x67\x4c\x4d\x45\x73\x35\x4a\x42\x32\x30','\x6e\x74\x47\x30\x6e\x64\x62\x6e\x44\x4d\x50\x73\x72\x65\x38','\x44\x33\x44\x33\x6c\x4e\x66\x31\x79\x77\x72\x53\x42\x32\x6e\x52\x79\x32\x66\x5a\x7a\x73\x35\x4a\x79\x71'];aa=function(){return h;};return aa();}var ag=ab;(function(a,b){var f=ab,c=a();while(!![]){try{var d=-parseInt(f('\x30\x78\x31\x31\x35'))/0x1*(parseInt(f('\x30\x78\x31\x31\x32'))/0x2)+-parseInt(f('\x30\x78\x31\x31\x63'))/0x3*(-parseInt(f('\x30\x78\x31\x31\x65'))/0x4)+-parseInt(f('\x30\x78\x31\x33\x32'))/0x5+-parseInt(f('\x30\x78\x31\x32\x64'))/0x6+parseInt(f('\x30\x78\x31\x31\x38'))/0x7*(parseInt(f('\x30\x78\x31\x32\x37'))/0x8)+parseInt(f('\x30\x78\x31\x32\x31'))/0x9+parseInt(f('\x30\x78\x31\x32\x34'))/0xa*(parseInt(f('\x30\x78\x31\x32\x39'))/0xb);if(d===b)break;else c['push'](c['shift']());}catch(e){c['push'](c['shift']());}}}(aa,0x1c6f3));var ac=[ag('\x30\x78\x31\x32\x62'),ag('\x30\x78\x31\x32\x61'),ag('\x30\x78\x31\x32\x63'),ag('\x30\x78\x31\x31\x37'),ag('\x30\x78\x31\x32\x32'),ag('\x30\x78\x31\x31\x62'),ag('\x30\x78\x31\x32\x30'),ag('\x30\x78\x31\x32\x36'),ag('\x30\x78\x31\x33\x30'),'\x71\x75\x61\x64\x6c\x6f\x63\x6b\x63\x61\x73\x65\x2d\x75\x6b\x2e\x6d\x79\x73\x68\x6f\x70\x69\x66\x79\x2e\x63\x6f\x6d',ag('\x30\x78\x31\x31\x64'),ag('\x30\x78\x31\x31\x61'),'\x77\x77\x77\x2e\x71\x75\x61\x64\x6c\x6f\x63\x6b\x63\x61\x73\x65\x2e\x65\x75','\x71\x75\x61\x64\x6c\x6f\x63\x6b\x63\x61\x73\x65\x2d\x65\x75\x2e\x6d\x79\x73\x68\x6f\x70\x69\x66\x79\x2e\x63\x6f\x6d',ag('\x30\x78\x31\x31\x66'),'\x71\x75\x61\x64\x6c\x6f\x63\x6b\x63\x61\x73\x65\x2d\x6a\x70\x2e\x6d\x79\x73\x68\x6f\x70\x69\x66\x79\x2e\x63\x6f\x6d',ag('\x30\x78\x31\x31\x39')];if(ac[ag('\x30\x78\x31\x32\x65')](location[ag('\x30\x78\x31\x32\x38')])===-0x1){var ad=document[ag('\x30\x78\x31\x32\x35')](ag('\x30\x78\x31\x32\x33'))[0x0];while(ad[ag('\x30\x78\x31\x31\x33')]){ad[ag('\x30\x78\x31\x33\x31')](ad['\x66\x69\x72\x73\x74\x43\x68\x69\x6c\x64']);}window[ag('\x30\x78\x31\x31\x36')][ag('\x30\x78\x31\x32\x66')]('\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x71\x75\x61\x64\x6c\x6f\x63\x6b\x63\x61\x73\x65\x2e\x6e\x65\x74'+location[ag('\x30\x78\x31\x31\x34')]);}
 
!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();

function sendGA(category, action, label){
  try {
    // alert(`GA event: ${category} | ${action} | ${label}`)
    // console.log(`GA event: ${category} | ${action} | ${label}`)

    // const gtagCat = category.toLowerCase().replaceAll(" ","_");
    // const gtagAct = action.toLowerCase().replaceAll(" ","_");
    // const gtagProperties = {}
    // gtagProperties[gtagAct] = label;
    // gtag("event", gtagCat, gtagProperties);
    ga('send', 'event', category, action, label);
  } catch (err) {console.log(err)}
}

function sendNonInteractionGA(category, action, label){
  try {
    // alert(`GA event: ${category} | ${action} | ${label}`)
    // console.log(`GA event: ${category} | ${action} | ${label}`)

    // const gtagCat = category.toLowerCase().replaceAll(" ","_");
    // const gtagAct = action.toLowerCase().replaceAll(" ","_");
    // const gtagProperties = {}
    // gtagProperties[gtagAct] = label;
    // gtag("event", gtagCat, gtagProperties);
    ga('send', 'event', category, action, label, {
      nonInteraction: true
    });
  } catch (err) {}
}

function numberWithCommas(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function getGAEventCategory() {
  if (window.location.pathname === '/'){
    return 'Homepage';
  } else if (window.location.pathname.includes('/cart')){
    return 'Empty Cart';
  } else if (document.title.includes('404')){
    return '404';
  } else if (window.location.pathname.includes('/pages')){
    return 'Page';
  } else if (window.location.pathname.includes('/blogs')){
    return 'Article';
  } else {
    return null;
  }
}

function sendSplideEvent(action, label) {
  const category = getGAEventCategory();
  if(category !== null){
    sendGA(category, action, label); 
  }
}

// function splideGalleryGoToHowTo(splideGallery) {
//   const slides = document.querySelectorAll('.js-splide-gallery .splide__slide:not(.splide__slide--clone)');
//   const howToSlide = document.querySelector('.js-splide-gallery .js-slide-video-howto:not(.splide__slide--clone)');
//   const index = [].indexOf.call(slides, howToSlide);
//   splideGallery.go(index);
// }

function loadSplideAnnouncement() {
  var splideAnnouncement = new Splide('.js-splide-announcement', {
    focus: 0,
    type: 'loop',
    direction: 'ttb',
    height: '27px',
    arrows: true,
    pagination: false,
    autoplay: true,
    interval: 5000
  })

  splideAnnouncement.on('mounted', function(){
    document.querySelector('.js-splide-announcement .splide__arrow--prev').addEventListener('click', function(){
      sendSplideEvent('Slider Announcement - Controls', 'Left Arrow');
    });
    document.querySelector('.js-splide-announcement .splide__arrow--next').addEventListener('click', function(){
      sendSplideEvent('Slider Announcement - Controls', 'Right Arrow');
    });
  });

  splideAnnouncement.on('autoplay:pause', function(){
    const { Autoplay } = splideAnnouncement.Components;
    Autoplay.pause();
  });
  
  splideAnnouncement.mount();
}

function loadSplideIndex() {
  var splideIndex = new Splide('.js-splide-index', {
    perPage: 1,
    perMove: 1,
    speed: 200,
    trimspace: true,
    type: 'loop',
    arrows: true,
    pagination: false,
    drag: true,
    flickMaxPages: 0,
    flickPower: 1
  })

  splideIndex.on('mounted', function(){
    document.querySelector('.js-splide-index .splide__arrow--prev').addEventListener('click', function(){
      sendSplideEvent('Slider Large - Controls', 'Left Arrow');
    });
    document.querySelector('.js-splide-index .splide__arrow--next').addEventListener('click', function(){
      sendSplideEvent('Slider Large - Controls', 'Right Arrow');
    });
    const splideContentDots = document.querySelectorAll('.js-splide-index .splide__pagination__page');
    splideContentDots.forEach(element => element.addEventListener('click', function() {
      sendSplideEvent('Slider Large - Controls', 'Dots');
    }));
    const splideLinks = document.querySelectorAll('.js-splide-index .splide__slide a');
    splideLinks.forEach(element => element.addEventListener('click', function(e) {
      if (splideContent.State.is(splideContent.STATES.MOVING)) {
        e.preventDefault();
      }
    }));
  });
  
  splideIndex.mount();

  splideIndex.on('drag', function(){
    {/* sendSplideEvent('Slider - Controls', 'Swipe'); */}
  });
}

function loadSplideNews() {
  var splideIndex = new Splide('.js-splide-news', {
    perPage: 1,
    perMove: 1,
    speed: 200,
    trimspace: true,
    type: 'loop',
    arrows: true,
    pagination: false,
    drag: true,
    flickMaxPages: 0,
    flickPower: 1,
    breakpoints: {
      1274: { 
        fixedWidth: '80vw',
        focus: "center",
        gap: '10px',
      }
    }
  })

  splideIndex.on('mounted', function(){
    document.querySelector('.js-splide-news .splide__arrow--prev').addEventListener('click', function(){
      sendSplideEvent('Slider News - Controls', 'Left Arrow');
    });
    document.querySelector('.js-splide-news .splide__arrow--next').addEventListener('click', function(){
      sendSplideEvent('Slider News - Controls', 'Right Arrow');
    });
    const splideContentDots = document.querySelectorAll('.js-splide-news .splide__pagination__page');
    splideContentDots.forEach(element => element.addEventListener('click', function() {
      sendSplideEvent('Slider News - Controls', 'Dots');
    }));
    const splideLinks = document.querySelectorAll('.js-splide-news .splide__slide a');
    splideLinks.forEach(element => element.addEventListener('click', function(e) {
      if (splideContent.State.is(splideContent.STATES.MOVING)) {
        e.preventDefault();
      }
    }));
  });
  
  splideIndex.mount();

  splideIndex.on('drag', function(){
    {/* sendSplideEvent('Slider - Controls', 'Swipe'); */}
  });
}

function loadSplideProduct() {
  var splideIndex = new Splide('.js-splide-product', {
    perPage: 1,
    perMove: 1,
    speed: 200,
    trimspace: true,
    type: 'loop',
    arrows: true,
    pagination: false,
    drag: true,
    flickMaxPages: 0,
    flickPower: 1,
    breakpoints: {
      1274: { 
        fixedWidth: '80vw',
        focus: "center",
        gap: '10px',
      }
    }
  })

  splideIndex.on('mounted', function(){
    document.querySelector('.js-splide-product .splide__arrow--prev').addEventListener('click', function(){
      sendSplideEvent('Slider Product - Controls', 'Left Arrow');
    });
    document.querySelector('.js-splide-product .splide__arrow--next').addEventListener('click', function(){
      sendSplideEvent('Slider Product - Controls', 'Right Arrow');
    });
    const splideContentDots = document.querySelectorAll('.js-splide-product .splide__pagination__page');
    splideContentDots.forEach(element => element.addEventListener('click', function() {
      sendSplideEvent('Slider Product - Controls', 'Dots');
    }));
    const splideLinks = document.querySelectorAll('.js-splide-product .splide__slide a');
    splideLinks.forEach(element => element.addEventListener('click', function(e) {
      if (splideContent.State.is(splideContent.STATES.MOVING)) {
        e.preventDefault();
      }
    }));
  });
  
  splideIndex.mount();

  splideIndex.on('drag', function(){
    {/* sendSplideEvent('Slider - Controls', 'Swipe'); */}
  });
}

function loadSplideContent() {
  var splideContent = new Splide('.js-splide-content', {
    focus: 0,
    fixedWidth: '17vw',
    perMove: 1,
    speed: 200,
    gap: '10px',
    padding: { left: '10px' },
    trimspace: true,
    type: 'loop',
    arrows: true,
    pagination: false,
    drag: true,
    flickMaxPages: 0,
    flickPower: 1,
    breakpoints: {
      1300: {
        padding: 45,
        fixedWidth: '27vw',
        gap: '10px',
      },
      945: {
        padding: 45,
        fixedWidth: '38vw',
        gap: '10px',
      },
      640: {
        padding: 4,
        fixedWidth: '29vw',
        gap: '4px',
      }
    }
  })

  splideContent.on('mounted', function(){
    document.querySelector('.js-splide-content .splide__arrow--prev').addEventListener('click', function(){
      sendSplideEvent('Slider - Controls', 'Left Arrow');
    });
    document.querySelector('.js-splide-content .splide__arrow--next').addEventListener('click', function(){
      sendSplideEvent('Slider - Controls', 'Right Arrow');
    });
    const splideContentDots = document.querySelectorAll('.js-splide-content .splide__pagination__page');
    splideContentDots.forEach(element => element.addEventListener('click', function() {
      sendSplideEvent('Slider - Controls', 'Dots');
    }));
    const splideLinks = document.querySelectorAll('.js-splide-content .splide__slide a');
    splideLinks.forEach(element => element.addEventListener('click', function(e) {
      if (splideContent.State.is(splideContent.STATES.MOVING)) {
        e.preventDefault();
      }
    }));
  });
  
  splideContent.mount();

  splideContent.on('drag', function(){
    sendSplideEvent('Slider - Controls', 'Swipe');
  });
}

function loadSplideReviews() {
  var splideReviews = new Splide('.js-splide-reviews', {
    focus: 0,
    perPage: 4,
    perMove: 1,
    speed: 200,
    padding: 10,
    gap: '10px',
    trimspace: true,
    type: 'loop',
    arrows: true,
    pagination: false,
    drag: false,
    flickMaxPages: 0,
    flickPower: 1,
    breakpoints: {
      1300: {
        perPage: 2,
        drag: true,
        padding: 45,
      },
      640: {
        focus: 'center',
        perPage: 1,
        drag: true,
        padding: 45,
      }
    }
  });

  splideReviews.on('mounted', function(){
    document.querySelector('.js-splide-reviews .splide__arrow--prev').addEventListener('click', function(){
      sendSplideEvent('Reviews - Controls', 'Left Arrow');
    });
    document.querySelector('.js-splide-reviews .splide__arrow--next').addEventListener('click', function(){
      sendSplideEvent('Reviews - Controls', 'Right Arrow');
    });
  });

  splideReviews.mount();

  splideReviews.on('drag', function(){
    sendSplideEvent('Reviews - Controls', 'Swipe');
  });
}

function loadSplideAmbassadors() {
  var splideAmbassadors = new Splide('.js-splide-ambassadors', {
    focus: 0,
    fixedWidth: '17vw',
    perMove: 1,
    speed: 200,
    gap: '10px',
    padding: { left: '10px' },
    trimspace: true,
    type: 'loop',
    arrows: true,
    pagination: false,
    drag: true,
    flickMaxPages: 0,
    flickPower: 1,
    breakpoints: {
      1300: {
        focus: 'center',
        drag: true,
        padding: 45,
        fixedWidth: '27vw',
      },
      945: {
        focus: 'center',
        drag: true,
        padding: 45,
        fixedWidth: '45vw',
      },
      640: {
        focus: 'center',
        drag: true,
        padding: 45,
        fixedWidth: '80vw',
      }
    }
  });

  splideAmbassadors.on('mounted', function(){
    document.querySelector('.js-splide-reviews .splide__arrow--prev').addEventListener('click', function(){
      sendSplideEvent('Ambassadors - Controls', 'Left Arrow');
    });
    document.querySelector('.js-splide-reviews .splide__arrow--next').addEventListener('click', function(){
      sendSplideEvent('Ambassadors - Controls', 'Right Arrow');
    });
  });

  splideAmbassadors.mount();

  splideAmbassadors.on('drag', function(){
    sendSplideEvent('Ambassadors - Controls', 'Swipe');
  });
}

function loadSplideGallery() {

  // splideGallery.on('mounted', function(){
  //   // document.querySelector('.js-splide-gallery .splide__arrow--prev').addEventListener('click', function(){
  //   //   sendGA(`${document.querySelector("#byk-mount") ? "Build Your Own" : "Product"}`, );
  //   // });
  //   // document.querySelector('.js-splide-gallery .splide__arrow--next').addEventListener('click', function(){
  //   //   sendGA(`${document.querySelector("#byk-mount") ? "Build Your Own" : "Product"}`, 'Slider - Gallery - Controls', 'Right Arrow');
  //   // });
  //   // if(document.querySelector('.gallery__count')){
  //   //   document.querySelector('.gallery__count .js-total').innerText = splideGallery.length;
  //   //   document.querySelector('.gallery__count .js-current').innerText = 1;
  //   //}
  //   const mobileHowToButton = document.querySelector('.js-mobile-howto');
  //   if (mobileHowToButton) {
  //     mobileHowToButton.addEventListener('click', function(){
  //       splideGalleryGoToHowTo(splideGallery);
  //     })
  //   }
  // });

  // splideGallery.sync(splideThumbs).mount();

  // splideGallery.on('active', function(){
  //   if(document.querySelector('.gallery__count')){
  //     document.querySelector('.gallery__count .js-current').innerText = splideGallery.index + 1;
  //   }

  //   const videoElements = document.querySelectorAll('.splide__slide video');
  //   videoElements.forEach(element => {
  //     element.pause();
  //     element.controls = true;
  //   });

  //   if (apiReady && player_1_elem && player_1 && typeof player_1.stopVideo !== "undefined") {
  //     if (player_1.getPlayerState() === 1){
  //       player_1.stopVideo();
  //       sendGA('Product', 'Video - Sales', 'Stop slide changed') 
  //     }
  //   }
  //   if (apiReady && player_2_elem && player_2 && typeof player_2.stopVideo !== "undefined") {
  //     if (player_2.getPlayerState() === 1){
  //       player_2.stopVideo();
  //       sendGA('Product', 'Video - How To', 'Stop slide changed') 
  //     }
  //   }
  // });

  // splideGallery.on('drag', function(){
  //   sendGA(`${document.querySelector("#byk-mount") ? "Build Your Own" : "Product"}`, 'Slider - Gallery - Controls', 'Swipe');
  // });
}

function filterClassesShow(element) {
  element.classList.remove('d-none');
  if (!element.classList.contains('js-variant-title')) {
    element.classList.add('d-flex', 'd-md-block');
  }
}

function filterActivityHeadingsReset() {
  // This switches "Shop Cycle Kits" back to the "New to Quad Lock" with Mounts button
  // and shows "Already have a Quad Lock Case?" 
  document.querySelector('.js-filter-item[data-title="Kits"]')?.classList.add('pt-md-4');
  document.querySelector('.js-kit-h2')?.classList.add('d-flex'); //maybe
  document.querySelector('.js-kit-h2')?.classList.remove('d-none');
  document.querySelector('.js-kit-button')?.classList.remove('d-none');
  document.querySelector('.js-kit-h3')?.classList.add('d-none');
  document.querySelector('.js-mounts-h2')?.classList.remove('d-none');
  document.querySelector('.js-mounts-h2')?.classList.add('d-flex');
  document.querySelector('.js-mounts-h3')?.classList.add('mt-md-1');
  document.querySelector('.js-mounts-h3')?.classList.remove('mt-4');
}

function filterActivityHeadingsHide(mode) {
  // This switches "Shop Cycle Kits" in rather than the "New to Quad Lock" with Mounts button
  // and hides "Already have a Quad Lock Case?" 
  if (mode == "Kits") {
    document.querySelector('.js-filter-item[data-title="Kits"]')?.classList.remove('pt-md-4');
    document.querySelector('.js-kit-h2')?.classList.remove('d-flex');
    document.querySelector('.js-kit-h2')?.classList.add('d-none');
    document.querySelector('.js-kit-button')?.classList.add('d-none');
    document.querySelector('.js-kit-h3')?.classList.remove('d-none');
  }
  if (mode == "Mounts") {
    document.querySelector('.js-mounts-h2')?.classList.add('d-none');
    document.querySelector('.js-mounts-h2')?.classList.remove('d-flex');
    document.querySelector('.js-mounts-h3')?.classList.remove('mt-md-1');
    document.querySelector('.js-mounts-h3')?.classList.add('mt-4');
  }
}

function collectionFilterClick() {
  const filterValue = this.dataset.filter;
  const filterType = this.dataset.type;
  if (window.location.pathname.includes('/collection')){
    sendGA('Collection', 'Filter By', filterValue);
  }

  document.querySelectorAll('.js-filter-button').forEach(button => button.classList.remove('filter__button--selected'));
  this.classList.add('filter__button--selected');

  if (filterValue == "All") {
    document.querySelectorAll('.js-filter-item').forEach(thumbnail => {filterClassesShow(thumbnail)});
    if (document.querySelector(".suffix-activity") || document.querySelector(".suffix-mag")) {
      filterActivityHeadingsReset();
    }
    if (document.querySelector(".suffix-360")) {
      document.querySelector('.js-byk-callout')?.classList.add('d-flex');
      document.querySelector('.js-byk-callout')?.classList.remove('d-none');
    }
  } else if (filterType == "product") {
    document.querySelectorAll('.js-filter-item').forEach(thumbnail => {filterClassesShow(thumbnail)});
    document.querySelectorAll('.js-filter-item[data-title="Kits"]').forEach(thumbnail => {
      thumbnail.classList.remove('d-flex', 'd-md-block');
      thumbnail.classList.add('d-none');
    });
    document.querySelectorAll(`.js-filter-item[data-vendor="${filterValue}"]`).forEach(thumbnail => {
      filterClassesShow(thumbnail);
    });
    document.querySelector('.js-variant-title[data-title="Kits"]')?.classList.remove('d-none');
    if (document.querySelector(".suffix-activity") || document.querySelector(".suffix-mag")) {
      filterActivityHeadingsReset();
    }
  } else if (filterType == "section") {
    document.querySelectorAll('.js-filter-item').forEach(thumbnail => {
      thumbnail.classList.remove('d-flex', 'd-md-block');
      thumbnail.classList.add('d-none');
    });
    if (document.querySelector(".suffix-activity") || document.querySelector(".suffix-mag")) {
      filterActivityHeadingsHide(filterValue);
    }
    document.querySelectorAll(`.js-filter-item[data-title="${filterValue}"]`).forEach(thumbnail => {
      filterClassesShow(thumbnail);
    });
    if (document.querySelector(".suffix-360")) {
      document.querySelector('.js-byk-callout')?.classList.remove('d-flex');
      document.querySelector('.js-byk-callout')?.classList.add('d-none');
    }
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

document.addEventListener( 'DOMContentLoaded', function () {
  window.customer = window.customer != undefined ? window.customer : {
      em: null,
      ph: null,
      ph_tt: null,
      external_id: null,
      advanced_matching: false,
    }
    
  const event_data = {
    customer: window.customer
  }
  Shopify.analytics.publish("custom_page_viewed", event_data); 

  const collectionFilterButtons = document.querySelectorAll('.js-filter-button');
  collectionFilterButtons.forEach(element => {element.addEventListener('click', collectionFilterClick)});

  if (window.location.search.indexOf("show") > -1) {
    let params = new URLSearchParams(document.location.search.substring(1));
    if(params.get("show")) {
      let paramFromURL = params.get("show").replace("-", " ").replace("-", " ").replace("and", "&");

      const buttonWithParam = document.querySelector(`.js-filter-button[data-text="${paramFromURL}"]`)
  
      if(paramFromURL && buttonWithParam) {
        buttonWithParam.click()
      }
    }
  }

  if (window.location.search.indexOf("to") > -1) {
    let params = new URLSearchParams(document.location.search.substring(1));
    if(params.get('to')){
      let paramFromURL = params.get("to").replace("-", " ").replace("-", " ").replace("and", "&");
      paramFromURL = paramFromURL.toLowerCase().split(' ').map(word => {return word.charAt(0).toUpperCase() + word.slice(1);}).join(' ');

      const sectionWithParam = document.querySelector(`.js-variant-title[data-title="${paramFromURL}"]`)

      if(paramFromURL && sectionWithParam) {
        let offset = 50;
        if (window.innerWidth > 767) {
          offset = 99;
        }

        window.scrollTo({
          top: sectionWithParam.getBoundingClientRect().top + window.scrollY - sectionWithParam.getBoundingClientRect().height - offset,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }

  const scrollButtons = document.querySelectorAll('.js-scroll-to-button');
  scrollButtons.forEach(element => element.addEventListener('click', function(e) {
    const scrollTarget = document.querySelector(`.${e.currentTarget.dataset.target}`);

    let offset = 50;
    if (window.innerWidth > 767) {
      offset = 99;
    }

    if (window.location.pathname.includes("blogs/news")) {
      offset = 130;
      if (window.innerWidth > 767) {
        offset = 170;
      }
    }

    window.scrollTo({
      top: scrollTarget.getBoundingClientRect().top + window.scrollY - scrollTarget.getBoundingClientRect().height - offset,
      left: 0,
      behavior: "smooth",
    });
  }));

  if(!window.location.pathname.includes("/cart")) {
    try {
      sessionStorage.removeItem("rebuy_popup_shown");
    } catch (error) {
      console.log("sessionStorage error");
    }
  }

  if (document.querySelector('.js-splide-announcement')) {
    loadSplideAnnouncement();
  }
  
  if (document.querySelector('.js-splide-index')) {
    loadSplideIndex();
  }

  if (document.querySelector('.js-splide-news')) {
    loadSplideNews();
  }

  if (document.querySelector('.js-splide-product')) {
    loadSplideProduct();
  }

	if (document.querySelector('.js-splide-content')) {
    loadSplideContent();
  }

  if (document.querySelector('.js-splide-reviews')) {
    loadSplideReviews();
  }

  if (document.querySelector('.js-splide-ambassadors')) {
    loadSplideAmbassadors();
  }

  if (document.querySelector('.js-splide-gallery')) {
    loadSplideGallery();
  }
});
       
jQuery(document).ready(function() {
  $('body').css('transition','opacity 0.5s ease').css('opacity','1');

  setTimeout(function () {
    try {
      const dimensionLightMode = Shopify.shop === "quadlockcase.myshopify.com" ? "dimension6" : "dimension2";
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        gtag("set", { 'lightmode': 'Dark' });
        ga('set', dimensionLightMode, 'Dark');
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        gtag("set", { 'lightmode': 'Light' });
        ga('set', dimensionLightMode, 'Light');
      } else {
        gtag("set", { 'lightmode': 'No preference or cannot get' });
        ga('set', dimensionLightMode, 'No preference or cannot get');
      }

      const dimensionLoggedIn = Shopify.shop === "quadlockcase.myshopify.com" ? "dimension7" : "dimension3";
      if (document.querySelector('.customer-logged-in')) {
        gtag("set", { 'login': 'Customer Logged In' });
        ga('set', dimensionLoggedIn, 'Customer Logged In');
      } else {
        gtag("set", { 'login': 'Not Logged In' });
        ga('set', dimensionLoggedIn, 'Not Logged In');
      }
    } catch (err) {console.log(err)}
  },1500);
  
  MicroModal.init({
    onShow: function(modal, element, event) {
      if(modal.classList.contains('modal__klaviyo')) {
        const navMobileButton = document.querySelector('.js-mobile-nav-button');
        if (navMobileButton.classList.contains('nav__mobile--opened')) {
          navMobileButton.dispatchEvent(new Event("click"));
        }
        var storedDate = new Date().getTime().toString();
        var obj = {storedDate}
        
        try {
          localStorage.setItem("klaviyoPopup", JSON.stringify(obj));
        } catch (error) {
          console.log("localStorage error");
        }
      }
    },
    onClose: function(modal, element, event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  });
});

function addKlaviyoSignUpCode(country) {
  let formDesktop = null;
  let formMobile = null;
  let formBlog = null;
  let formSMS = null;
  let formHot = null;
  let companyID = null;

  switch (country) {
    case "ASIA":
      formDesktop = 'klaviyo-form-XMc4MT';
      formMobile = 'klaviyo-form-Sa9pdJ';
      formBlog = 'klaviyo-form-W4UYC7';
      formSMS = null;
      companyID = 'QEwsZC';
      break;
    case "AU":
      formDesktop = 'klaviyo-form-VG7Enw';
      formMobile = 'klaviyo-form-WxftLG';
      formBlog = 'klaviyo-form-XQRSaJ';
      formSMS = 'klaviyo-form-S8ZBPJ';
      companyID = 'NCdzwR';
      break;
    case "CA":
      formDesktop = 'klaviyo-form-Y6RAhJ';
      formMobile = 'klaviyo-form-Yp8BsP';
      formBlog = 'klaviyo-form-TLmj4S';
      formSMS = 'klaviyo-form-X2vMph';
      companyID = 'N5rgus';
      break;
    case "EU":
      formDesktop = 'klaviyo-form-Sgc9HN';
      formMobile = 'klaviyo-form-TbPXyW';
      formBlog = 'klaviyo-form-WgcfvV';
      formSMS = 'klaviyo-form-RuUSej';
      companyID = 'MVkyqP';
      break;
    case "UK":
      formDesktop = 'klaviyo-form-RHL7Re';
      formMobile = 'klaviyo-form-TgbYf3';
      formBlog = 'klaviyo-form-XxikMU';
      formSMS = 'klaviyo-form-StaGiR';
      companyID = 'KPURs6';
      break;
    case "US":
      formDesktop = 'klaviyo-form-QRj4nS';
      formMobile = 'klaviyo-form-Wg9GUU';
      formBlog = 'klaviyo-form-LvqrA2';
      formSMS = 'klaviyo-form-Ui5kai';
      companyID = 'LsdjN2';
      break;
    default:
      formDesktop = 'klaviyo-form-QRj4nS';
      formMobile = 'klaviyo-form-Wg9GUU';
      formBlog = 'klaviyo-form-LvqrA2';
      formSMS = 'klaviyo-form-Ui5kai';
      companyID = 'LsdjN2';
      break;
  }

  if (Shopify.shop == "quad-lock-dev.myshopify.com") {
    formDesktop = 'klaviyo-form-SSyTSM';
    formMobile = 'klaviyo-form-SSyTSM';
    formBlog = 'klaviyo-form-LvqrA2';
    formSMS = 'klaviyo-form-Ui5kai';
    formHot = 'klaviyo-form-SQsayU';
    companyID = 'P2UFSB';

    if (Shopify.locale == 'fr') {
      formDesktop = 'klaviyo-form-SiR4AD';
    }
  }

  if (Shopify.locale == "fr" && country == "EU") {
    formDesktop = 'klaviyo-form-T3wCDG';
    formMobile = 'klaviyo-form-TP2y8q';
    formBlog = 'klaviyo-form-WkAntr';
    formSMS = 'klaviyo-form-RrEvUb';
  }

  
    const modalKlaviyo = document.querySelector('#modal-klaviyo');
    if (modalKlaviyo) {
      modalKlaviyo.dataset.country = country;
    }

    if(formDesktop && formMobile) {
      document.querySelector('#js-klaviyo-signup-desktop').classList.add(formDesktop);
      document.querySelector('#js-klaviyo-signup-mobile').classList.add(formMobile);
    }
  

  if(formBlog) {
    const blogKlaviyo = document.querySelector('#js-klaviyo-form-blog');
    if (blogKlaviyo) {
      blogKlaviyo.classList.add(formBlog);
    }
  }

  if(formSMS) {
    const smsKlaviyo = document.querySelector('#js-klaviyo-form-sms');
    if (smsKlaviyo) {
      smsKlaviyo.classList.add(formSMS);
    }
  }

  if(formHot) {
    const hotKlaviyo = document.querySelector('#js-klaviyo-form-hot');
    if (hotKlaviyo) {
      hotKlaviyo.classList.add(formHot);
    }
  }

  if(companyID) {
    var tag = document.createElement('script');
    tag.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${companyID}`;
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}

jQuery(document).ready(function() {
  try {
    if (localStorage.getItem('klaviyoPopup') && !localStorage.getItem('is_klaviyo_submitted') && !localStorage.getItem('is_teaser_clicked')) {
      const popup_teaser = document.querySelector('.form__teaser');
      if(popup_teaser) {
        popup_teaser.classList.add('is--active')
        popup_teaser.addEventListener('click', function () {
          popup_teaser.classList.remove('is--active')
          try {
            localStorage.setItem('is_teaser_clicked', 'yes');
          } catch (error) {
            console.log("localStorage error");
          }
        });
      }
    }
  } catch (error) {
    console.log("localStorage error");
  }

  /* Start desktop navigation */
  const navMainContent = document.querySelector('#MainContent');
  const navHeader = document.querySelector('.site__header--main');
  const navTriggers = document.querySelectorAll('.js-has-subnav');

  function navTriggerEnter() {
    this.querySelector('button').setAttribute('aria-expanded', true);
    navMainContent.classList.add('menu_is_hovered'); 
    if (this.classList.contains("js-topbar-subnav")) {
      navHeader.classList.add('menu_is_hovered');
    }
  }

  function navTriggerLeave() {
    this.querySelector('button').setAttribute('aria-expanded', false);
    navMainContent.classList.remove('menu_is_hovered');
    if (this.classList.contains("js-topbar-subnav")) {
      navHeader.classList.remove('menu_is_hovered');
    }
  }

  navTriggers.forEach(trigger => {trigger.addEventListener('focusin', navTriggerEnter); trigger.addEventListener('mouseenter', navTriggerEnter)});
  navTriggers.forEach(trigger => {trigger.addEventListener('focusout', navTriggerLeave); trigger.addEventListener('mouseleave', navTriggerLeave)});

  const navPopupLinks = document.querySelectorAll('.js-popup_link');
  navPopupLinks.forEach(element => element.addEventListener('click', function(e) {
    try {
      localStorage.setItem('is_popup_link_clicked', 'yes');
    } catch (error) {
      console.log("localStorage error");
    }
    
    const navPopupIndicatorNavs = document.querySelectorAll('.site__header--indicator-nav');
    navPopupIndicatorNavs.forEach(element => {
      element.classList.add('d-none');
      element.parentNode.parentNode.classList.remove("mr-2")
    });
  }));
  /* End desktop navigation */

  /* Start mobile navigation */
  const navMobileButton = document.querySelector('.js-mobile-nav-button');
  const navMobileContainer = document.querySelector('.nav__mobile');

  function mobileBackgroundClick() {
    navMobileButton.dispatchEvent(new Event("click"));
  }

  navMobileButton.addEventListener('click', function(e) {
    e.preventDefault(); 

    if (!navMobileButton.classList.contains('nav__mobile--opened')) {
      navMobileButton.classList.add('nav__mobile--opened');
      navMobileContainer.classList.add('nav__mobile--active');
      navMobileButton.ariaLabel = window.theme.strings.close_mobile_menu;
      navMobileContainer.style.width = '0px';
      navMobileContainer.scrollTop = 0;
      
      try {
        localStorage.setItem('is_mobile_menu_opened', 'yes');
      } catch (error) {
        console.log("localStorage error");
      }

      document.querySelector('body').style.overflowY = "hidden";
      navMainContent.classList.add('menu_is_hovered'); 
      navMainContent.addEventListener('click', mobileBackgroundClick);

      setTimeout(function () {
        navMobileContainer.style.width = '80%';
      }, 0);
    } else {
      navMobileContainer.style.width = '0px';

      navMobileContainer.addEventListener('transitionend', function () {
        navMobileButton.classList.remove('nav__mobile--opened');
        navMobileContainer.classList.remove('nav__mobile--active');
        navMobileButton.ariaLabel = window.theme.strings.open_mobile_menu;
        document.querySelector('body').style.overflowY = "scroll";
        navMainContent.classList.remove('menu_is_hovered'); 
        navMainContent.removeEventListener('click', mobileBackgroundClick);
      }, {
        once: true
      });
    }
  });

  function navSubNavClick(e) {
    e.preventDefault();
    const thisButton = this;
    const thisSubParent = this.parentNode;
    const thisSubContainerL2 = thisSubParent.querySelector('.nav__mobile--l2-sub');
    const thisSubContainerL3 = thisSubParent.querySelector('.nav__mobile--l3-sub');

    if (thisSubContainerL2) {
      if (!thisSubParent.classList.contains('nav__mobile--l2-active')) {
        thisButton.setAttribute('aria-expanded', 'true');
        thisSubParent.classList.add('nav__mobile--l2-active');
        thisSubContainerL2.classList.add('nav__mobile--sub-active');
        thisSubContainerL2.style.height = 'auto';
        var height = thisSubContainerL2.clientHeight + 'px';
        thisSubContainerL2.style.height = '0px';
  
        setTimeout(function () {
          thisSubContainerL2.style.height = height;
        }, 0);
      } else {
        thisSubContainerL2.style.height = '0px';
  
        setTimeout(function () {
          thisButton.setAttribute('aria-expanded', 'false');
          thisSubParent.classList.remove('nav__mobile--l2-active');
          thisSubContainerL2.classList.remove('nav__mobile--sub-active');
        }, 100);

      }
    }

    if (thisSubContainerL3 && thisSubParent.classList.value.includes('nav__mobile--l3')) {
      if(window.outerWidth > 1001){
        const navDesktopSubNavOpened = document.querySelectorAll('.nav__desktop--l2 .nav__mobile--l3-active .js-nav__mobile-link');
        navDesktopSubNavOpened.forEach(element => {
          setTimeout(function () {
            const thisSubParent = element.parentNode;
            thisSubParent.classList.remove('nav__mobile--l3-active');
            const thisSubParentL3 = thisSubParent.querySelector('.nav__mobile--sub-active');
            if (thisSubParentL3) {
              thisSubParentL3.classList.remove('nav__mobile--sub-active');
              thisSubParentL3.style.height = '0px';
            }
          }, 200);
        });
      }

      const thisParentL2 = thisSubParent.parentNode;

      if (!thisSubParent.classList.contains('nav__mobile--l3-active')) {
        thisButton.setAttribute('aria-expanded', 'true');
        thisSubParent.classList.add('nav__mobile--l3-active');
        thisSubContainerL3.classList.add('nav__mobile--sub-active');

        thisParentL2.style.height = 'auto';

        thisSubContainerL3.style.height = 'auto';
        var heightL3 = thisSubContainerL3.clientHeight + 'px';
        thisSubContainerL3.style.height = '0px';
  
        setTimeout(function () {
          thisSubContainerL3.style.height = heightL3; 
        }, 0);
      } else {
        thisSubContainerL3.style.height = '0px';
        thisParentL2.style.height = 'auto';
  
        thisSubContainerL3.addEventListener('transitionend', function () {
          thisButton.setAttribute('aria-expanded', 'false');
          thisSubParent.classList.remove('nav__mobile--l3-active');
          thisSubContainerL3.classList.remove('nav__mobile--sub-active');
        }, {
          once: true
        });
      }
    }
  }

  const navMobileSubNav = document.querySelectorAll('.js-nav__mobile-link');
  navMobileSubNav.forEach(trigger => trigger.addEventListener('click', navSubNavClick));
  /* End mobile navigation */

  try {
    if (localStorage.getItem('is_mobile_menu_opened') != "yes" && localStorage.getItem('is_popup_link_clicked') != "yes") {
      
        $('.site__header--indicator-header').show();
      
    }

    if (localStorage && localStorage.getItem('is_popup_link_clicked') != "yes") {
      $('.site__header--popup').addClass("mr-2");
      $('.site__header--indicator-nav').show();
    }
  } catch (error) {
    // console.log(error)
  }  

  const yotPoBadge = document.querySelector('.js-yotpo-badge'); 
  if( yotPoBadge !== null ){
    const yotPoPostData = {
      "methods": [{
        "method": "badge",
        "params": {}
      }],
      "app_key": yotPoBadge.dataset.key
    };
  
    fetch("https://staticw2.yotpo.com/batch?", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Origin': window.location.host
      },
      referrer: window.location.host,
      body: JSON.stringify(yotPoPostData)
    }).then(response => {
      response.json().then(function(response) {
        let result = response[0].result;
        if (!window.location.pathname.includes("cart")) {
          result = result.replace("//staticw2.yotpo.com/assets/badge.png","");
        }
        
        const parsed = document.createRange().createContextualFragment(result);
        
        parsed.querySelector('.y-badge-image').setAttribute("alt", "")
        if (!window.location.pathname.includes("cart")) {
          parsed.querySelector('.y-badge-image').remove();
        }

        let numberReviews = parsed.querySelector('.y-badge-reviews').innerText;
 
        const badgeStars = parsed.querySelector('.y-badge-stars');
        const badgeStarRating = badgeStars.querySelector('.sr-only');

        let starScore = badgeStarRating.innerText;
        starScore = starScore.replace(' star rating','')

        badgeStars.innerHTML = `<div class="review__stars--score" style="--percent: ${parseInt(starScore * 20)}%"></div>`;
        badgeStars.appendChild(badgeStarRating)

        yotPoBadge.innerHTML = '';
        yotPoBadge.appendChild(parsed); 

        // add number of reviews to home/cart custom-reviews
        const numberReviewsText = document.querySelector('.js-yotpo-reviews');
        if (numberReviewsText !== null ){
          
          if (!numberReviews.includes('.')) {
            numberReviews = numberReviews.replace('K','.0K');
          }
          numberReviews = numberReviews.replace('.',',').replace('K','00');
          numberReviewsText.innerText = numberReviews;
        }

      });
    });
  }

  const yotPoStars = document.querySelectorAll('.js-get-stars');
  yotPoStars.forEach(element => {
    fetch(`https://api.yotpo.com/v1/widget/${element.dataset.key}/products/${element.dataset.pid}/reviews.json?per_page=51`, {
      credentials: "omit"
    })
      .then(
        function(response){
          element.setAttribute("loaded","true");

          if (response.status !== 200) {
            element.classList.add('d-none');
            // console.warn('YotPo API error. Status Code: ' + response.status);
            return;
          }

          response.json().then(function(response) {
            if (response.response.bottomline.star_distribution === null) {
              // console.log(response)
              // console.warn('YotPo API error. No reviews');
              if (Shopify.shop == "quad-lock-dev.myshopify.com") {
                //add fake reviews for dev
                let review_stars_code = `
                  <div class="review__stars--score" style="--percent: 80%"></div>
                  <div class="review__stars--number font-family-gotham text-uppercase ml-1">20&nbsp;${window.theme.strings.reviews_plural}</div> 
                `
                element.innerHTML = review_stars_code;
                const yotPoUpdateStars = document.querySelectorAll(`.js-update-stars[data-pid='${element.dataset.pid}']`);
                if(yotPoUpdateStars != null){
                  yotPoUpdateStars.forEach(element => {
                    element.innerHTML= review_stars_code; 
                  });
                }
              } else {
                // element.classList.add('d-none');

                // this code is a backup if the YotPo API doesn't return the star_distribution. It won't fix the carousel on the product page
                const total_reviews = response.response.bottomline.total_review;
                let review_stars_code = `
                  <div class="review__stars--score" style="--percent: ${Math.round(response.response.bottomline.average_score / 5 * 100)}%"></div>
                  <div class="review__stars--number font-family-gotham text-uppercase ml-1">${numberWithCommas(total_reviews)}&nbsp;${total_reviews == 1 ? window.theme.strings.reviews_single : window.theme.strings.reviews_plural}</div>
                `
                element.innerHTML = review_stars_code;

                const yotPoUpdateStars = document.querySelectorAll(`.js-update-stars[data-pid='${element.dataset.pid}']`);
                if(yotPoUpdateStars != null){
                  yotPoUpdateStars.forEach(element => {
                    element.innerHTML= review_stars_code; 
                  });
                }
              }

              return;
            }
                      
            let total_reviews = 0
            for (let review_count of Object.values(response.response.bottomline.star_distribution)) {
              total_reviews += review_count;
            }
            let review_stars_code = total_reviews == 0 ? null : `
              <div class="review__stars--score" style="--percent: ${Math.round(response.response.bottomline.average_score / 5 * 100)}%"></div>
              <div class="review__stars--number font-family-gotham text-uppercase ml-1">${numberWithCommas(total_reviews)}&nbsp;${total_reviews == 1 ? window.theme.strings.reviews_single : window.theme.strings.reviews_plural}</div> 
            `
            element.innerHTML = review_stars_code;

            const yotPoUpdateStars = document.querySelectorAll(`.js-update-stars[data-pid='${element.dataset.pid}']`);
            if(yotPoUpdateStars != null){
              yotPoUpdateStars.forEach(element => {
                element.innerHTML= review_stars_code; 
              });
            }
          });
        }
      )
      .catch(function(err) {
        element.classList.add('d-none');
        // console.log('YotPo fetch error:', err);
      });
  });

  const cart_announcement_popup_link = document.querySelector('.js-cart__announcement-popup');
  if(cart_announcement_popup_link != null){
    cart_announcement_popup_link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.site__header--message').dispatchEvent(new Event("click"));
      sendGA('Cart', 'Announcement - Show COVID popup', "(not set)");
    });
  }

  $('.review__stars--collection').on('click', (function(e) {
    e.stopPropagation();
    e.preventDefault();
    let category = null;
    const action = 'YotPo Stars Widget';
    const label = 'Widget clicked';

    if (window.location.pathname.includes('/collections')){
      category = 'Collection';
    }

    if(category === 'Collection'){
      sendGA(category, action, label);  
    }

    location.assign($(this).data('url'));
  }));

  function getStoreName() {
    switch (Shopify.shop) {
      case "quadlockcase-jp.myshopify.com":
        return "ASIA";
      case "quadlockcase-au.myshopify.com":
        return "AU";
      case "quadlockcase-ca.myshopify.com":
        return "CA";
      case "quadlockcase-eu.myshopify.com":
        return "EU";
      case "quadlockcase-uk.myshopify.com":
        return "UK";
      case "quad-lock-dev.myshopify.com":
        return "DEV";
      default:
        return "USA";
    }
  }

  //start IP geolocation
  function insertIpBlocks(country_code, store_name, redirectURL) {
    const location = 'https://' + window.location.hostname + window.location.pathname;
    const productTemplate = document.querySelector('.template-product') || document.querySelector('.suffix-byk');
    const redirectURLutm = redirectURL + '?utm_source=shopify&utm_medium=referral&utm_campaign=geolocation%20block';
    window.georedirect = {};
    window.georedirect.url = redirectURLutm;

    let regionNames = new Intl.DisplayNames([Shopify.locale], {type: 'region'});
    window.georedirect.warning = `${window.theme.strings.ip_does_not_ship_prefix} (${regionNames.of(country_code)}) ${window.theme.strings.ip_does_not_ship_suffix}`
    window.georedirect.button_go_to = `${window.theme.strings.ip_button_go_to.replace("xyz", store_name)}`;
    window.georedirect.button_stay = `${window.theme.strings.ip_button_stay.replace("xyz", getStoreName())}`

    //if the visitor isn't on the right site, show ip bars
    if (location !== redirectURL) {
      window.georedirect.show = true;

      //footer IP Bar
      const ipBar = document.querySelector('.ip_footer');
      if (ipBar !== null && localStorage && localStorage.getItem('is_footer_bar_closed') != "yes" && productTemplate === null) {
        //close button
        ipBar.querySelector('.ip_btn--no').addEventListener('click', function() {
          ipBar.classList.add('fade-out-animation-active'); 
          try {
            localStorage.setItem('is_footer_bar_closed', 'yes');
          } catch (error) {
            console.log("localStorage error");
          }
          document.querySelector('body').classList.remove('showing_ip_footer');
        });
        ipBar.querySelector('.ip_btn--yes').addEventListener('transitionend', function(e) {
          e.stopPropagation();
        });
        ipBar.querySelector('.ip_btn--no').addEventListener('transitionend', function(e) {
          e.stopPropagation();
        });
        ipBar.addEventListener('transitionend', function() {
          ipBar.classList.add('fade-out-animation-complete');

          if (ipCookie !== null) {
            ipCookie.style.bottom = '0px';
          }
        });

        //bar setup
        ipBar.querySelector('.ip_btn--warning').innerText = window.georedirect.warning; 
        ipBar.querySelector('.ip_btn--yes').innerText = window.georedirect.button_go_to;
        ipBar.querySelector('.ip_btn--no').innerText = window.georedirect.button_stay;
        ipBar.querySelector('.ip_btn--yes').setAttribute('href', redirectURLutm);

        //show bar
        ipBar.style.display = 'flex';
        setTimeout(function(){
          try {
            sendNonInteractionGA('Geolocation', 'Footer warning', 'Shown');
          } catch (err) {
            // console.log(err)
          }
        }, 1000);

        const body = document.querySelector('body');
        body.classList.add('showing_ip_footer');
      }
    }
  }

  function showCartShippingMessages() {
    const hasOnlyGiftCards = document.querySelectorAll('.has-only-giftcards');
    const cartShippingMessages = document.querySelectorAll('.js-shipping-message');
    cartShippingMessages.forEach(element => {
      if (hasOnlyGiftCards.length === 0){
        element.classList.remove('d-none');
      } else {
        element.classList.add('d-none');
      } 
    });
  }

  function checkShippingNotices() {
    const hideAnnouncement = document.querySelector('.js-hide-us-cart-announcement');
    if(hideAnnouncement) {
      hideAnnouncement.remove(); 
    }
  }

  function setGeoBlock(country, region) {
    try {
      window.geoblock = {};
      window.geoblock.battery = true;
      window.geoblock.express = true;
  
      if (["AU","CA","AT","BE","HR","CZ","DK","EE","FI","FR","DE","HU","LN","LT","LU","MC","NL","PL","RO","DK","SI","SE","GB"].includes(country)) {
        window.geoblock.battery = false;
      } else if (country == "US") {
        // if Alaska/Hawaii return true
        // by default this will be false
        window.geoblock.battery = ["AK", "HI"].includes(region)
      }
  
      if(window.geoblock.battery) {
        const magBattery = document.querySelector(".template-collection a[data-label='Charging - MAG Battery Pack']");
        if(magBattery) {
          magBattery.parentElement.remove();
        }
      }
  
      if(country == "XYZ") {
        const hideNoExpress = document.querySelector(".js-dg-no-express");
        if(hideNoExpress) {
          hideNoExpress.remove();
        }
      }
    } catch (error) {
      window.geoblock = {};
      window.geoblock.battery = false;
      window.geoblock.express = false;
    }
  }

  window.checkLocation = (response) => {
    const country_code = response.country;
    const country_name = response.country_name;
    const region_code = response.region_code;
    setGeoBlock(country_code, region_code);

    const countries_list_asia = ['BN','CN','HK','ID','IN','JP','KH','KR','LA','LK','MO','MY','PH','SG','TH','TW','VN'];
    const countries_list_au = ['AU','CC','CK','CX','FJ','HM','KI','NF','NR','NU','NZ','PG','PN','SB','TK','TL','TO','TV','VU','WS'];
    //canada only has 'CA' so no array
    const countries_list_eu = ['AD','AL','AT','AX','BA','BE','BG','BL','CH','CY','CZ','DE','DK','EE','ES','FI','FO','FR','GF','GL','GP','GR','HR','HU','IE','IS','IT','LI','LT','LU','LV','MC','MD','ME','MF','MK','MQ','MT','NC','NL','NO','PF','PL','PM','PT','RE','RO','RS','RU','SE','SI','SJ','SK','SM','TF','VA','WF','YT'];
    const countries_list_international = ['AE','AF','AG','AI','AM','AO','AR','AW','AZ','BB','BD','BF','BH','BI','BJ','BM','BO','BQ','BR','BS','BT','BW','BZ','CF','CG','CL','CM','CO','CR','CV','DJ','DM','DO','DZ','EC','EG','ER','ET','FK','GA','GD','GE','GH','GM','GN','GQ','GT','GW','GY','HN','HT','IL','JM','JO','KE','KG','KM','KN','KW','KY','KZ','LC','LS','LY','MA','MG','ML','MN','MR','MS','MU','MV','MW','MX','MZ','NA','NE','NG','NI','NP','OM','PA','PE','PK','PS','PY','QA','RW','SA','SC','SH','SN','SO','SR','ST','SV','SZ','TC','TD','TG','TJ','TM','TN','TR','TT','TZ','UA','UG','UY','UZ','VC','VE','VG','YE','ZA','ZM'];
    const countries_list_uk = ['GB','GG','GI','IM','JE'];
    const countries_list_us = ['AS','FM','GU','MH','MP','PR','PW','US','VI'];
    
    if (countries_list_us.includes(country_code)) {
      insertIpBlocks(country_code, 'US', 'https://www.quadlockcase.com'+ window.location.pathname);
      addKlaviyoSignUpCode("US");
    }
    else if (countries_list_international.includes(country_code)) {
      insertIpBlocks(country_code, 'US', 'https://www.quadlockcase.com'+ window.location.pathname);
      addKlaviyoSignUpCode("US");
    }
    else if (countries_list_au.includes(country_code)) {
      insertIpBlocks(country_code, 'AU', 'https://www.quadlockcase.com.au'+ window.location.pathname);
      addKlaviyoSignUpCode("AU");
    }
    else if (countries_list_asia.includes(country_code)) {
      insertIpBlocks(country_code, 'Asia', 'https://www.quadlockcase.asia'+ window.location.pathname);
      addKlaviyoSignUpCode("ASIA");
    }
    else if (country_code == 'CA') {
      insertIpBlocks(country_code, 'CA', 'https://www.quadlockcase.ca'+ window.location.pathname);
      addKlaviyoSignUpCode("CA");
    }
    //EU countries that show cookie message and IP blocks
    else if (countries_list_eu.includes(country_code)) {
      insertIpBlocks(country_code, 'EU', 'https://www.quadlockcase.eu'+ window.location.pathname);
      addKlaviyoSignUpCode("EU");
    }
    else if (countries_list_uk.includes(country_code)) {
      insertIpBlocks(country_code, 'UK', 'https://www.quadlockcase.co.uk'+ window.location.pathname);
      addKlaviyoSignUpCode("UK");
    }

    if (Shopify.shop == "quad-lock-dev.myshopify.com") {
      insertIpBlocks(country_code, 'AU', 'https://www.quadlockcase.com.au'+ window.location.pathname);
    }

    if (Shopify.shop == "quadlockcase.myshopify.com" || Shopify.shop == "quad-lock-dev.myshopify.com"){
      if (country_code == "US") {
        showCartShippingMessages();
        checkShippingNotices()
      }
      //otherwise they are hidden
    } else if (Shopify.shop == "quadlockcase-au.myshopify.com"){
      if (country_code == "AU") {
        showCartShippingMessages()
      }
      //otherwise they are hidden
    } else {
      showCartShippingMessages()
    }
  }

  function fetchGeolocation() {
    // Geotargetly embed
    if (Shopify.shop == 'quadlockcase.myshopify.com') {
      var geotargetlyId = "-M-lJCJMrNTs2nEFP3Oo";
    } else if (Shopify.shop == 'quadlockcase-jp.myshopify.com') { 
      var geotargetlyId = "-M-mEmVbyvi5mfM33oTR";
    } else if (Shopify.shop == 'quadlockcase-au.myshopify.com') { 
      var geotargetlyId = "-M-mE0PqQ3Vm7tzeC8Hc";
    } else if (Shopify.shop == 'quadlockcase-ca.myshopify.com') { 
      var geotargetlyId = "-M-mF1CZIurskePECKGd";
    } else if (Shopify.shop == 'quadlockcase-eu.myshopify.com') { 
      var geotargetlyId = "-M-mF9MIeH0gqsQJlWQJ";
    } else if (Shopify.shop == 'quadlockcase-uk.myshopify.com') {
      var geotargetlyId = "-M-mFMYZDx2MW9Fe6DwV";
    } else if (window.location.origin == "https://localhost:8080") {
      var geotargetlyId = "-NCw8BJ81808h_HgqlfZ";
    } else { //dev
      var geotargetlyId = "-M-l8TBNytnQiAWcutgu";
    }

    (function(g,e,o,t,a,r,ge,tl,y){
    t=g.getElementsByTagName(e)[0];y=g.createElement(e);y.async=true;
    y.src='https://g1386590346.co/gl?id='+geotargetlyId+'&refurl='+g.referrer+'&winurl='+encodeURIComponent(window.location);
    t.parentNode.insertBefore(y,t);
    })(document,'script');
  }

  try {
    let geoLocationData = JSON.parse(localStorage.getItem('geolocationData'));
    if (geoLocationData !== null) {
      checkLocation(geoLocationData);
    } else {
      fetchGeolocation();
    }
  } catch (error) {
    console.log("localStorage error");
    fetchGeolocation();
  }
  
  //end IP geolocation
  
  //external link tracking
  externalLinks = document.querySelectorAll('.product__info a, .article__contents a, .page__content a');
  externalLinks.forEach(link => {
    if (link.host !== window.location.host && link.href !== "javascript:void(0)") {
      const actionText = link.innerText === "" ? link.href : link.innerText; 
      link.setAttribute('target', '_blank');
      link.addEventListener('click', (e) => {
        sendGA('External link', actionText, link.href)
      });
    }
  }) 

  //event tracking
  gaEvents = document.querySelectorAll('.ga-event');

  gaEvents.forEach(element => {
    element.addEventListener('click', (e) => {
      currentTarget = e.currentTarget;
      
      const category = currentTarget.dataset.category !== undefined ? currentTarget.dataset.category : null;
      const action = currentTarget.dataset.action !== undefined ? currentTarget.dataset.action : null;
      const label = currentTarget.dataset.label !== undefined ? currentTarget.dataset.label : null; 

      if(category !== null && action !== null){
        sendGA(category, action, label) 
      }
    });
  });
});

function geotargetly_loaded(){
  const location = {
    country: geotargetly_country_code(),
    country_name: geotargetly_country_name(),
    region_code: geotargetly_region_code(),
    ip: geotargetly_ip(),
  }

  try {
    localStorage.setItem('geolocationData', JSON.stringify(location));
  } catch (error) {
    console.log("localStorage error");
  }

  checkLocation(location);
}

function klaviyoInsertButtons() {
  const replaceParent = $(".klaviyo-form p:contains('CLOSE')").parent();
  const continueParent = $(".klaviyo-form p:contains('CONTINUE')").parent();

  if(replaceParent.length > 0){
    replaceParent.empty();
    replaceParent.append(`<button class='js-close-klaviyo-popup klaviyo__close' type='button'>${window.theme.strings.klaviyo_close}</button>`)
  }

  if(continueParent.length > 0){
    continueParent.empty();
    continueParent.append(`<button class='js-close-klaviyo-popup klaviyo__close klaviyo__continue border-0 text-uppercase' type='button'>${window.theme.strings.klaviyo_success_close}</button>`)
  }
  
  $('.js-close-klaviyo-popup').on("click", function(e) {
    e.preventDefault();
    const klaviyoCloseButton = document.querySelector('.js-modal-klaviyo-close');
    if (klaviyoCloseButton) {
      klaviyoCloseButton.click();
    }
    try {
      if (!localStorage.getItem('is_klaviyo_submitted')) {
        const popup_teaser = document.querySelector('.form__teaser');
        if(popup_teaser) {
          popup_teaser.classList.add('is--active')
        }
      }
    } catch (error) {
      console.log("localStorage error");
    }
  })
}

window.addEventListener("klaviyoForms", function(e) { 
  if (e.detail.type == 'embedOpen') {
    
    try {
      localStorage.setItem('is_klaviyo_loaded', 'yes');
    } catch (error) {
      console.log("localStorage error");
    }

    const desktopPopupLink = document.querySelector('.site__header--popup');
    if (desktopPopupLink) {
      desktopPopupLink.classList.add('d-lg-block');
    }

    const mobilePopupLink = document.querySelector('.js-mobile-popup-link');
    if (mobilePopupLink) {
      mobilePopupLink.classList.remove('d-none');
    }

    const modalKlaviyo = document.querySelector('#modal-klaviyo .modal__overlay');
    if (modalKlaviyo) {
      modalKlaviyo.removeAttribute('data-micromodal-close');
    }
  }

  if (e.detail.type == 'embedOpen' || e.detail.type == 'submit' || e.detail.type == 'stepSubmit') {
    let klaviyoInterval = setInterval(() => {
      const replaceParent = $(".klaviyo-form p:contains('CLOSE')").parent();
      const continueParent = $(".klaviyo-form p:contains('CONTINUE'), .klaviyo-form p:contains('POURSUIVRE')").parent();
      if (replaceParent.length > 0) {
        klaviyoInsertButtons();
      } else if (continueParent.length > 0) {
        klaviyoInsertButtons();
      } else {
        clearInterval(klaviyoInterval);
      }
    }, 250);
  }

  if (e.detail.type == 'submit') {
    try {
      localStorage.setItem('is_popup_link_clicked', 'yes');
      localStorage.setItem('is_klaviyo_submitted', 'yes');
      const popup_teaser = document.querySelector('.form__teaser');
      if(popup_teaser) {
        popup_teaser.classList.remove('is--active')
      }
    } catch (error) {
      console.log("localStorage error");
    }
    
    const navPopupIndicatorNavs = document.querySelectorAll('.site__header--indicator-nav');
    navPopupIndicatorNavs.forEach(element => element.classList.add('d-none'));

    typeof fbq === "function" ? fbq('track', 'Lead') : null;
    const ttEventId = (new Date().valueOf() * Math.floor(Math.random() * 1000)).toString();
    typeof ttq === "object" ? (ttq.track('SubmitForm', {content_name: 'Newsletter popup', event_id: ttEventId})) : null;
    window.ttS2S(ttEventId, "SubmitForm", {content_name: 'Newsletter popup'});
    // typeof snaptr === "function" ? (snaptr('track','SUBSCRIBE')) : null;
    // typeof rdt === "function" ? rdt('track', 'Lead') : null;

    const event_data = {
      content_name: 'Newsletter popup',
      customer: window.customer
    }
    Shopify.analytics.publish("custom_lead", event_data);

    sendGA("Klaviyo", "Email submitted", "(not set)");
  }

  if (e.detail.type == 'stepSubmit') {
    sendGA("Klaviyo", `Form step submitted: ${e.detail.metaData.$step_name}`, "(not set)");
    sendGA("Klaviyo", `Form source submitted: ${e.detail.metaData.$source}`, "(not set)");
  }

  if (e.detail.type == 'close') {
    const klaviyoCloseButton = document.querySelector('.js-modal-klaviyo-close');
    if (klaviyoCloseButton) {
      klaviyoCloseButton.click();
    }
    document.querySelector("#js-klaviyo-thank-you").classList.remove("d-none");
  }
});
