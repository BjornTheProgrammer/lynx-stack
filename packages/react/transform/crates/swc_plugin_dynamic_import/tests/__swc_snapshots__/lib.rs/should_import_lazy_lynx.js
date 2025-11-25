import "@lynx-js/react/experimental/lazy/lynx";
(async function() {
    await import(/*webpackChunkName: "./index.js-test"*/ "./index.js");
})();
