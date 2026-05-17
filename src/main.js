import "./app.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // La app sigue funcionando aunque el navegador bloquee el service worker en desarrollo.
    });
  });
}
