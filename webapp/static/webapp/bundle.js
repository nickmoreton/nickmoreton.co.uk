(()=>{var t={858:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.animated=document.querySelector("[data-animated]"),this.swaps=["using","liking","loving"]}var e,r;return e=t,(r=[{key:"init",value:function(){this.animated&&(this.animate(),this.animated.innerHTML=this.swaps[0])}},{key:"animate",value:function(){var t=this,e=0;int=setInterval((function(){t.animated.innerHTML=t.swaps[e],++e===t.swaps.length&&(clearInterval(int),t.animated.classList.add("finished"))}),1e3)}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=r},86:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.navIcon=document.querySelector(".menu-switch"),this.nav=document.querySelector("nav"),this.state={open:!1}}var e,r;return e=t,(r=[{key:"toggleNav",value:function(){this.state.open?(this.nav.dataset.state="",this.state.open=!1):(this.nav.dataset.state="mobile-active",this.state.open=!0)}},{key:"init",value:function(){var t=this;this.navIcon.addEventListener("click",(function(){t.toggleNav()}))}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=r}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(86),e=n.n(t),r=n(858),o=n.n(r);(new(e())).init(),(new(o())).init()})()})();