(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5572],{87857:function(e,t,i){"use strict";i.d(t,{I:function(){return r}});var r=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='330.529 16 297.559 16 178.441 496 211.412 496 330.529 16' class='ci-primary'/>"]},52001:function(e,t,i){"use strict";i.d(t,{B:function(){return r}});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M444.4,235.236,132.275,49.449A24,24,0,0,0,96,70.072V434.214a24.017,24.017,0,0,0,35.907,20.839L444.03,276.7a24,24,0,0,0,.367-41.461ZM128,420.429V84.144L416.244,255.718Z' class='ci-primary'/>"]},75867:function(e){var t=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=t},95095:function(e,t,i){var r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,c="object"==typeof self&&self&&self.Object===Object&&self,h=l||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,d=function(){return h.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=n.test(e);return i||o.test(e)?a(e.slice(2),i?2:8):s.test(e)?NaN:+e}e.exports=function(e,t,i){var r,s,n,o,a,l,c=0,h=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var i=r,n=s;return r=s=void 0,c=t,o=e.apply(n,i)}function y(e){return c=e,a=setTimeout(E,t),h?m(e):o}function x(e){var i=e-l;return void 0===l||i>=t||i<0||u&&e-c>=n}function E(){var e=d();if(x(e))return w(e);a=setTimeout(E,function(e){var i=t-(e-l);return u?p(i,n-(e-c)):i}(e))}function w(e){return a=void 0,g&&r?m(e):(r=s=void 0,o)}function O(){var e=d(),i=x(e);if(r=arguments,s=this,l=e,i){if(void 0===a)return y(l);if(u)return a=setTimeout(E,t),m(l)}return void 0===a&&(a=setTimeout(E,t)),o}return t=b(t)||0,v(i)&&(h=!!i.leading,n=(u="maxWait"in i)?f(b(i.maxWait)||0,t):n,g="trailing"in i?!!i.trailing:g),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=s=a=void 0},O.flush=function(){return void 0===a?o:w(d())},O}},9498:function(e,t,i){var r="__lodash_hash_undefined__",s="[object Function]",n="[object GeneratorFunction]",o=/^\[object .+?Constructor\]$/,a="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")();var h=Array.prototype,u=Function.prototype,f=Object.prototype,p=c["__core-js_shared__"],d=function(){var e=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),v=u.toString,b=f.hasOwnProperty,g=f.toString,m=RegExp("^"+v.call(b).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=h.splice,x=_(c,"Map"),E=_(Object,"create");function w(e){var t=-1,i=e?e.length:0;for(this.clear();++t<i;){var r=e[t];this.set(r[0],r[1])}}function O(e){var t=-1,i=e?e.length:0;for(this.clear();++t<i;){var r=e[t];this.set(r[0],r[1])}}function S(e){var t=-1,i=e?e.length:0;for(this.clear();++t<i;){var r=e[t];this.set(r[0],r[1])}}function k(e,t){for(var i,r,s=e.length;s--;)if((i=e[s][0])===(r=t)||i!==i&&r!==r)return s;return-1}function T(e){if(!z(e)||(t=e,d&&d in t))return!1;var t,i=function(e){var t=z(e)?g.call(e):"";return t==s||t==n}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(i){}return t}(e)?m:o;return i.test(function(e){if(null!=e){try{return v.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e))}function N(e,t){var i=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?i["string"==typeof t?"string":"hash"]:i.map}function _(e,t){var i=function(e,t){return null==e?void 0:e[t]}(e,t);return T(i)?i:void 0}function A(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var i=function i(){var r=arguments,s=t?t.apply(this,r):r[0],n=i.cache;if(n.has(s))return n.get(s);var o=e.apply(this,r);return i.cache=n.set(s,o),o};return i.cache=new(A.Cache||S),i}function z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}w.prototype.clear=function(){this.__data__=E?E(null):{}},w.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},w.prototype.get=function(e){var t=this.__data__;if(E){var i=t[e];return i===r?void 0:i}return b.call(t,e)?t[e]:void 0},w.prototype.has=function(e){var t=this.__data__;return E?void 0!==t[e]:b.call(t,e)},w.prototype.set=function(e,t){return this.__data__[e]=E&&void 0===t?r:t,this},O.prototype.clear=function(){this.__data__=[]},O.prototype.delete=function(e){var t=this.__data__,i=k(t,e);return!(i<0)&&(i==t.length-1?t.pop():y.call(t,i,1),!0)},O.prototype.get=function(e){var t=this.__data__,i=k(t,e);return i<0?void 0:t[i][1]},O.prototype.has=function(e){return k(this.__data__,e)>-1},O.prototype.set=function(e,t){var i=this.__data__,r=k(i,e);return r<0?i.push([e,t]):i[r][1]=t,this},S.prototype.clear=function(){this.__data__={hash:new w,map:new(x||O),string:new w}},S.prototype.delete=function(e){return N(this,e).delete(e)},S.prototype.get=function(e){return N(this,e).get(e)},S.prototype.has=function(e){return N(this,e).has(e)},S.prototype.set=function(e,t){return N(this,e).set(e,t),this},A.Cache=S,e.exports=A},33881:function(e,t,i){var r="Expected a function",s=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,h="object"==typeof self&&self&&self.Object===Object&&self,u=c||h||Function("return this")(),f=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return u.Date.now()};function b(e,t,i){var s,n,o,a,l,c,h=0,u=!1,f=!1,b=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var i=s,r=n;return s=n=void 0,h=t,a=e.apply(r,i)}function x(e){return h=e,l=setTimeout(w,t),u?y(e):a}function E(e){var i=e-c;return void 0===c||i>=t||i<0||f&&e-h>=o}function w(){var e=v();if(E(e))return O(e);l=setTimeout(w,function(e){var i=t-(e-c);return f?d(i,o-(e-h)):i}(e))}function O(e){return l=void 0,b&&s?y(e):(s=n=void 0,a)}function S(){var e=v(),i=E(e);if(s=arguments,n=this,c=e,i){if(void 0===l)return x(c);if(f)return l=setTimeout(w,t),y(c)}return void 0===l&&(l=setTimeout(w,t)),a}return t=m(t)||0,g(i)&&(u=!!i.leading,o=(f="maxWait"in i)?p(m(i.maxWait)||0,t):o,b="trailing"in i?!!i.trailing:b),S.cancel=function(){void 0!==l&&clearTimeout(l),h=0,s=c=n=l=void 0},S.flush=function(){return void 0===l?a:O(v())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var i=o.test(e);return i||a.test(e)?l(e.slice(2),i?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,i){var s=!0,n=!0;if("function"!=typeof e)throw new TypeError(r);return g(i)&&(s="leading"in i?!!i.leading:s,n="trailing"in i?!!i.trailing:n),b(e,t,{leading:s,maxWait:t,trailing:n})}},80888:function(e,t,i){"use strict";var r=i(79047);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,t,i,s,n,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:s};return i.PropTypes=i,i}},52007:function(e,t,i){e.exports=i(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},34358:function(e,t,i){"use strict";i.d(t,{Z:function(){return de}});var r,s=i(72791),n=i(52007),o=i.n(n),a=(i(69765),i(83265),i(33858),i(65202),i(18887),i(59147),i(87952),i(81740),i(33881)),l=i.n(a),c=i(95095),h=i.n(c),u=i(9498),f=i.n(u),p=[],d="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var v,b=function(e){return Object.freeze(e)},g=function(e,t){this.inlineSize=e,this.blockSize=t,b(this)},m=function(){function e(e,t,i,r){return this.x=e,this.y=t,this.width=i,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,b(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),y=function(e){return e instanceof SVGElement&&"getBBox"in e},x=function(e){if(y(e)){var t=e.getBBox(),i=t.width,r=t.height;return!i&&!r}var s=e,n=s.offsetWidth,o=s.offsetHeight;return!(n||o||e.getClientRects().length)},E=function(e){var t;if(e instanceof Element)return!0;var i=null===(t=null===e||void 0===e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(i&&e instanceof i.Element)},w="undefined"!==typeof window?window:{},O=new WeakMap,S=/auto|scroll/,k=/^tb|vertical/,T=/msie|trident/i.test(w.navigator&&w.navigator.userAgent),N=function(e){return parseFloat(e||"0")},_=function(e,t,i){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=!1),new g((i?t:e)||0,(i?e:t)||0)},A=b({devicePixelContentBoxSize:_(),borderBoxSize:_(),contentBoxSize:_(),contentRect:new m(0,0,0,0)}),z=function(e,t){if(void 0===t&&(t=!1),O.has(e)&&!t)return O.get(e);if(x(e))return O.set(e,A),A;var i=getComputedStyle(e),r=y(e)&&e.ownerSVGElement&&e.getBBox(),s=!T&&"border-box"===i.boxSizing,n=k.test(i.writingMode||""),o=!r&&S.test(i.overflowY||""),a=!r&&S.test(i.overflowX||""),l=r?0:N(i.paddingTop),c=r?0:N(i.paddingRight),h=r?0:N(i.paddingBottom),u=r?0:N(i.paddingLeft),f=r?0:N(i.borderTopWidth),p=r?0:N(i.borderRightWidth),d=r?0:N(i.borderBottomWidth),v=u+c,g=l+h,E=(r?0:N(i.borderLeftWidth))+p,w=f+d,z=a?e.offsetHeight-w-e.clientHeight:0,W=o?e.offsetWidth-E-e.clientWidth:0,C=s?v+E:0,L=s?g+w:0,R=r?r.width:N(i.width)-C-W,M=r?r.height:N(i.height)-L-z,B=R+v+W+E,j=M+g+z+w,P=b({devicePixelContentBoxSize:_(Math.round(R*devicePixelRatio),Math.round(M*devicePixelRatio),n),borderBoxSize:_(B,j,n),contentBoxSize:_(R,M,n),contentRect:new m(u,l,R,M)});return O.set(e,P),P},W=function(e,t,i){var s=z(e,i),n=s.borderBoxSize,o=s.contentBoxSize,a=s.devicePixelContentBoxSize;switch(t){case r.DEVICE_PIXEL_CONTENT_BOX:return a;case r.BORDER_BOX:return n;default:return o}},C=function(e){var t=z(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=b([t.borderBoxSize]),this.contentBoxSize=b([t.contentBoxSize]),this.devicePixelContentBoxSize=b([t.devicePixelContentBoxSize])},L=function(e){if(x(e))return 1/0;for(var t=0,i=e.parentNode;i;)t+=1,i=i.parentNode;return t},R=function(){var e=1/0,t=[];p.forEach((function(i){if(0!==i.activeTargets.length){var r=[];i.activeTargets.forEach((function(t){var i=new C(t.target),s=L(t.target);r.push(i),t.lastReportedSize=W(t.target,t.observedBox),s<e&&(e=s)})),t.push((function(){i.callback.call(i.observer,r,i.observer)})),i.activeTargets.splice(0,i.activeTargets.length)}}));for(var i=0,r=t;i<r.length;i++){(0,r[i])()}return e},M=function(e){p.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(i){i.isActive()&&(L(i.target)>e?t.activeTargets.push(i):t.skippedTargets.push(i))}))}))},B=function(){var e=0;for(M(e);p.some((function(e){return e.activeTargets.length>0}));)e=R(),M(e);return p.some((function(e){return e.skippedTargets.length>0}))&&function(){var e;"function"===typeof ErrorEvent?e=new ErrorEvent("error",{message:d}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=d),window.dispatchEvent(e)}(),e>0},j=[],P=function(e){if(!v){var t=0,i=document.createTextNode("");new MutationObserver((function(){return j.splice(0).forEach((function(e){return e()}))})).observe(i,{characterData:!0}),v=function(){i.textContent="".concat(t?t--:t++)}}j.push(e),v()},V=0,D={attributes:!0,characterData:!0,childList:!0,subtree:!0},I=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],F=function(e){return void 0===e&&(e=0),Date.now()+e},X=!1,H=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!X){X=!0;var i,r=F(e);i=function(){var i=!1;try{i=B()}finally{if(X=!1,e=r-F(),!V)return;i?t.run(1e3):e>0?t.run(e):t.start()}},P((function(){requestAnimationFrame(i)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,D)};document.body?t():w.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),I.forEach((function(t){return w.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),I.forEach((function(t){return w.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),q=function(e){!V&&e>0&&H.start(),!(V+=e)&&H.stop()},Y=function(){function e(e,t){this.target=e,this.observedBox=t||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=W(this.target,this.observedBox,!0);return e=this.target,y(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),$=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},U=new WeakMap,G=function(e,t){for(var i=0;i<e.length;i+=1)if(e[i].target===t)return i;return-1},Z=function(){function e(){}return e.connect=function(e,t){var i=new $(e,t);U.set(e,i)},e.observe=function(e,t,i){var r=U.get(e),s=0===r.observationTargets.length;G(r.observationTargets,t)<0&&(s&&p.push(r),r.observationTargets.push(new Y(t,i&&i.box)),q(1),H.schedule())},e.unobserve=function(e,t){var i=U.get(e),r=G(i.observationTargets,t),s=1===i.observationTargets.length;r>=0&&(s&&p.splice(p.indexOf(i),1),i.observationTargets.splice(r,1),q(-1))},e.disconnect=function(e){var t=this,i=U.get(e);i.observationTargets.slice().forEach((function(i){return t.unobserve(e,i.target)})),i.activeTargets.splice(0,i.activeTargets.length)},e}(),J=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Z.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!E(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Z.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!E(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Z.unobserve(this,e)},e.prototype.disconnect=function(){Z.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}(),K=i(75867),Q=i.n(K);i(2603),i(20447),i(86245),i(54178);function ee(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function te(e){return e&&e.ownerDocument?e.ownerDocument:document}var ie=null,re=null;function se(e){if(null===ie){var t=te(e);if("undefined"===typeof t)return ie=0;var i=t.body,r=t.createElement("div");r.classList.add("simplebar-hide-scrollbar"),i.appendChild(r);var s=r.getBoundingClientRect().right;i.removeChild(r),ie=s}return ie}Q()&&window.addEventListener("resize",(function(){re!==window.devicePixelRatio&&(re=window.devicePixelRatio,ie=null)}));var ne=function(){function e(t,i){var r=this;this.onScroll=function(){var e=ee(r.el);r.scrollXTicking||(e.requestAnimationFrame(r.scrollX),r.scrollXTicking=!0),r.scrollYTicking||(e.requestAnimationFrame(r.scrollY),r.scrollYTicking=!0)},this.scrollX=function(){r.axis.x.isOverflowing&&(r.showScrollbar("x"),r.positionScrollbar("x")),r.scrollXTicking=!1},this.scrollY=function(){r.axis.y.isOverflowing&&(r.showScrollbar("y"),r.positionScrollbar("y")),r.scrollYTicking=!1},this.onMouseEnter=function(){r.showScrollbar("x"),r.showScrollbar("y")},this.onMouseMove=function(e){r.mouseX=e.clientX,r.mouseY=e.clientY,(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseMoveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseMoveForAxis("y")},this.onMouseLeave=function(){r.onMouseMove.cancel(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseLeaveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseLeaveForAxis("y"),r.mouseX=-1,r.mouseY=-1},this.onWindowResize=function(){r.scrollbarWidth=r.getScrollbarWidth(),r.hideNativeScrollbar()},this.hideScrollbars=function(){r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.track.rect)||(r.axis.y.scrollbar.el.classList.remove(r.classNames.visible),r.axis.y.isVisible=!1),r.isWithinBounds(r.axis.x.track.rect)||(r.axis.x.scrollbar.el.classList.remove(r.classNames.visible),r.axis.x.isVisible=!1)},this.onPointerEvent=function(e){var t,i;r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&(t=r.isWithinBounds(r.axis.x.track.rect)),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&(i=r.isWithinBounds(r.axis.y.track.rect)),(t||i)&&(e.preventDefault(),e.stopPropagation(),"mousedown"===e.type&&(t&&(r.axis.x.scrollbar.rect=r.axis.x.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.x.scrollbar.rect)?r.onDragStart(e,"x"):r.onTrackClick(e,"x")),i&&(r.axis.y.scrollbar.rect=r.axis.y.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.scrollbar.rect)?r.onDragStart(e,"y"):r.onTrackClick(e,"y"))))},this.drag=function(t){var i=r.axis[r.draggedAxis].track,s=i.rect[r.axis[r.draggedAxis].sizeAttr],n=r.axis[r.draggedAxis].scrollbar,o=r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr],a=parseInt(r.elStyles[r.axis[r.draggedAxis].sizeAttr],10);t.preventDefault(),t.stopPropagation();var l=(("y"===r.draggedAxis?t.pageY:t.pageX)-i.rect[r.axis[r.draggedAxis].offsetAttr]-r.axis[r.draggedAxis].dragOffset)/(s-n.size)*(o-a);"x"===r.draggedAxis&&(l=r.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?l-(s+n.size):l,l=r.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-l:l),r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr]=l},this.onEndDrag=function(e){var t=te(r.el),i=ee(r.el);e.preventDefault(),e.stopPropagation(),r.el.classList.remove(r.classNames.dragging),t.removeEventListener("mousemove",r.drag,!0),t.removeEventListener("mouseup",r.onEndDrag,!0),r.removePreventClickId=i.setTimeout((function(){t.removeEventListener("click",r.preventClick,!0),t.removeEventListener("dblclick",r.preventClick,!0),r.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=t,this.minScrollbarWidth=20,this.options=Object.assign({},e.defaultOptions,i),this.classNames=Object.assign({},e.defaultOptions.classNames,this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,e.instances.has(this.el)||(this.recalculate=l()(this.recalculate.bind(this),64),this.onMouseMove=l()(this.onMouseMove.bind(this),64),this.hideScrollbars=h()(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=h()(this.onWindowResize.bind(this),64,{leading:!0}),e.getRtlHelpers=f()(e.getRtlHelpers),this.init())}e.getRtlHelpers=function(){var t=document.createElement("div");t.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var i=t.firstElementChild;document.body.appendChild(i);var r=i.firstElementChild;i.scrollLeft=0;var s=e.getOffset(i),n=e.getOffset(r);i.scrollLeft=999;var o=e.getOffset(r);return{isRtlScrollingInverted:s.left!==n.left&&n.left-o.left!==0,isRtlScrollbarInverted:s.left!==n.left}},e.getOffset=function(e){var t=e.getBoundingClientRect(),i=te(e),r=ee(e);return{top:t.top+(r.pageYOffset||i.documentElement.scrollTop),left:t.left+(r.pageXOffset||i.documentElement.scrollLeft)}};var t=e.prototype;return t.init=function(){e.instances.set(this.el,this),Q()&&(this.initDOM(),this.setAccessibilityAttributes(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},t.initDOM=function(){var e=this;if(Array.prototype.filter.call(this.el.children,(function(t){return t.classList.contains(e.classNames.wrapper)})).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var t=document.createElement("div"),i=document.createElement("div");t.classList.add(this.classNames.track),i.classList.add(this.classNames.scrollbar),t.appendChild(i),this.axis.x.track.el=t.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=t.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},t.setAccessibilityAttributes=function(){var e=this.options.ariaLabel||"scrollable content";this.contentWrapperEl.setAttribute("tabindex","0"),this.contentWrapperEl.setAttribute("role","region"),this.contentWrapperEl.setAttribute("aria-label",e)},t.initListeners=function(){var e=this,t=ee(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(t){e.el.addEventListener(t,e.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(t){e.el.addEventListener(t,e.onPointerEvent,{capture:!0,passive:!0})})),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),t.addEventListener("resize",this.onWindowResize);var i=!1,r=null,s=t.ResizeObserver||J;this.resizeObserver=new s((function(){i&&null===r&&(r=t.requestAnimationFrame((function(){e.recalculate(),r=null})))})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),t.requestAnimationFrame((function(){i=!0})),this.mutationObserver=new t.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},t.recalculate=function(){var e=ee(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.heightAutoObserverEl.offsetHeight<=1,i=this.heightAutoObserverEl.offsetWidth<=1,r=this.contentEl.offsetWidth,s=this.contentWrapperEl.offsetWidth,n=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var a=this.contentEl.scrollHeight,l=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=t?"auto":"100%",this.placeholderEl.style.width=i?r+"px":"auto",this.placeholderEl.style.height=a+"px";var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=l>r,this.axis.y.isOverflowing=a>c,this.axis.x.isOverflowing="hidden"!==n&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,u=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&l>s-u,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>c-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},t.getScrollbarSize=function(e){if(void 0===e&&(e="y"),!this.axis[e].isOverflowing)return 0;var t,i=this.contentEl[this.axis[e].scrollSizeAttr],r=this.axis[e].track.el[this.axis[e].offsetSizeAttr],s=r/i;return t=Math.max(~~(s*r),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(t=Math.min(t,this.options.scrollbarMaxSize)),t},t.positionScrollbar=function(t){if(void 0===t&&(t="y"),this.axis[t].isOverflowing){var i=this.contentWrapperEl[this.axis[t].scrollSizeAttr],r=this.axis[t].track.el[this.axis[t].offsetSizeAttr],s=parseInt(this.elStyles[this.axis[t].sizeAttr],10),n=this.axis[t].scrollbar,o=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],a=(o="x"===t&&this.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-o:o)/(i-s),l=~~((r-n.size)*a);l="x"===t&&this.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?l+(r-n.size):l,n.el.style.transform="x"===t?"translate3d("+l+"px, 0, 0)":"translate3d(0, "+l+"px, 0)"}},t.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,i=this.axis[e].scrollbar.el;this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll"):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden"),this.axis[e].isOverflowing?i.style.display="block":i.style.display="none"},t.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},t.onMouseMoveForAxis=function(e){void 0===e&&(e="y"),this.axis[e].track.rect=this.axis[e].track.el.getBoundingClientRect(),this.axis[e].scrollbar.rect=this.axis[e].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[e].scrollbar.rect)?this.axis[e].scrollbar.el.classList.add(this.classNames.hover):this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[e].track.rect)?(this.showScrollbar(e),this.axis[e].track.el.classList.add(this.classNames.hover)):this.axis[e].track.el.classList.remove(this.classNames.hover)},t.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),this.axis[e].track.el.classList.remove(this.classNames.hover),this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)},t.showScrollbar=function(e){void 0===e&&(e="y");var t=this.axis[e].scrollbar.el;this.axis[e].isVisible||(t.classList.add(this.classNames.visible),this.axis[e].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},t.onDragStart=function(e,t){void 0===t&&(t="y");var i=te(this.el),r=ee(this.el),s=this.axis[t].scrollbar,n="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=n-s.rect[this.axis[t].offsetAttr],this.draggedAxis=t,this.el.classList.add(this.classNames.dragging),i.addEventListener("mousemove",this.drag,!0),i.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(i.addEventListener("click",this.preventClick,!0),i.addEventListener("dblclick",this.preventClick,!0)):(r.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.onTrackClick=function(e,t){var i=this;if(void 0===t&&(t="y"),this.options.clickOnTrack){var r=ee(this.el);this.axis[t].scrollbar.rect=this.axis[t].scrollbar.el.getBoundingClientRect();var s=this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],n=parseInt(this.elStyles[this.axis[t].sizeAttr],10),o=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],a=("y"===t?this.mouseY-s:this.mouseX-s)<0?-1:1,l=-1===a?o-n:o+n;!function e(){var s,n;-1===a?o>l&&(o-=i.options.clickOnTrackSpeed,i.contentWrapperEl.scrollTo(((s={})[i.axis[t].offsetAttr]=o,s)),r.requestAnimationFrame(e)):o<l&&(o+=i.options.clickOnTrackSpeed,i.contentWrapperEl.scrollTo(((n={})[i.axis[t].offsetAttr]=o,n)),r.requestAnimationFrame(e))}()}},t.getContentElement=function(){return this.contentEl},t.getScrollElement=function(){return this.contentWrapperEl},t.getScrollbarWidth=function(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:se(this.el)}catch(e){return se(this.el)}},t.removeListeners=function(){var e=this,t=ee(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(t){e.el.removeEventListener(t,e.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(t){e.el.removeEventListener(t,e.onPointerEvent,{capture:!0,passive:!0})})),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},t.unMount=function(){this.removeListeners(),e.instances.delete(this.el)},t.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},t.findChild=function(e,t){var i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return i.call(e,t)}))[0]},e}();ne.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},ne.instances=new WeakMap;var oe=ne;function ae(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function le(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(i),!0).forEach((function(t){ce(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ae(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function ce(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},he.apply(this,arguments)}function ue(e,t){if(null==e)return{};var i,r,s=function(e,t){if(null==e)return{};var i,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var fe=["children","scrollableNodeProps","tag"],pe=s.forwardRef((function(e,t){var i,r=e.children,n=e.scrollableNodeProps,o=void 0===n?{}:n,a=e.tag,l=void 0===a?"div":a,c=ue(e,fe),h=l,u=(0,s.useRef)(),f=(0,s.useRef)(),p=(0,s.useRef)(),d={},v={},b=[];return Object.keys(c).forEach((function(e){Object.prototype.hasOwnProperty.call(oe.defaultOptions,e)?d[e]=c[e]:e.match(/data-simplebar-(.+)/)&&"data-simplebar-direction"!==e?b.push({name:e,value:c[e]}):v[e]=c[e]})),b.length&&console.warn("simplebar-react: this way of passing options is deprecated. Pass it like normal props instead:\n        'data-simplebar-auto-hide=\"false\"' \u2014> 'autoHide=\"false\"'\n      "),(0,s.useEffect)((function(){var e;return u=o.ref||u,f.current&&(i=new oe(f.current,le(le(le(le({},(e=b,Array.prototype.reduce.call(e,(function(e,t){var i=t.name.match(/data-simplebar-(.+)/);if(i){var r=i[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[r]=!0;break;case"false":e[r]=!1;break;case void 0:e[r]=!0;break;default:e[r]=t.value}}return e}),{}))),d),u&&{scrollableNode:u.current}),p.current&&{contentNode:p.current})),"function"===typeof t?t(i):t&&(t.current=i)),function(){i.unMount(),i=null,"function"===typeof t&&t(null)}}),[]),s.createElement(h,he({ref:f,"data-simplebar":!0},v),s.createElement("div",{className:"simplebar-wrapper"},s.createElement("div",{className:"simplebar-height-auto-observer-wrapper"},s.createElement("div",{className:"simplebar-height-auto-observer"})),s.createElement("div",{className:"simplebar-mask"},s.createElement("div",{className:"simplebar-offset"},"function"===typeof r?r({scrollableNodeRef:u,contentNodeRef:p}):s.createElement("div",he({},o,{className:"simplebar-content-wrapper".concat(o.className?" ".concat(o.className):"")}),s.createElement("div",{className:"simplebar-content"},r)))),s.createElement("div",{className:"simplebar-placeholder"})),s.createElement("div",{className:"simplebar-track simplebar-horizontal"},s.createElement("div",{className:"simplebar-scrollbar"})),s.createElement("div",{className:"simplebar-track simplebar-vertical"},s.createElement("div",{className:"simplebar-scrollbar"})))}));pe.displayName="SimpleBar",pe.propTypes={children:o().oneOfType([o().node,o().func]),scrollableNodeProps:o().object,tag:o().string};var de=pe},82454:function(){}}]);
//# sourceMappingURL=5572.87358177.chunk.js.map