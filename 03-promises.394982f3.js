!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("6JpON"),i={form:document.querySelector(".form"),btnCreate:document.querySelector(".form button"),firstDelay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function a(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function c(t,n){"success"===n?e(u).Notify.success(t):"failure"===n?e(u).Notify.failure(t):e(u).Notify.info(t)}i.form.addEventListener("submit",(function(e){e.preventDefault(),t=i.btnCreate,t.disabled=!0;var t;for(var n=[],o=Number(i.firstDelay.value),r=Number(i.step.value),u=Number(i.amount.value),l=o,f=1;f<=u;f+=1){var s=a(f,l).then((function(e){var t=e.position,n=e.delay;c("✅ Виконано проміс ".concat(t," in ").concat(n,"ms"),"success")})).catch((function(e){var t=e.position,n=e.delay;c("❌ Відхилено проміс ".concat(t," in ").concat(n,"ms"),"failure")}));n.push(s),l+=r}Promise.allSettled(n).then((function(){return function(e){e.disabled=!1}(i.btnCreate)}))}))}();
//# sourceMappingURL=03-promises.394982f3.js.map