import { AppShell } from "./components/AppShell.js";
import { pages } from "./data.js";

const root = document.querySelector("#app");

function getRoute() {
  const route = window.location.hash.replace("#", "");
  return pages[route] ? route : "presencia";
}

function render() {
  root.innerHTML = AppShell(getRoute());
}

function navigate(route) {
  window.location.hash = route;
}

root.addEventListener("click", (event) => {
  const button = event.target.closest("[data-route]");
  if (!button) return;
  navigate(button.dataset.route);
});

window.addEventListener("hashchange", render);

render();
