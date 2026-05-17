import { html } from "../utils/html.js";
import { pageOrder, pages } from "../data.js";
import { PageHeader } from "./PageHeader.js";
import { MetricGrid } from "./MetricGrid.js";
import { Timeline } from "./Timeline.js";

function Nav(activePage, className = "app-nav") {
  return html`
    <nav class="${className}" aria-label="Navegación principal">
      ${pageOrder
        .map((id) => {
          const isActive = id === activePage;
          return html`
            <button class="nav-button ${isActive ? "active" : ""}" data-route="${id}" type="button">
              <span class="nav-dot"></span>
              <span class="nav-label">${pages[id].navLabel}</span>
            </button>
          `;
        })
        .join("")}
    </nav>
  `;
}

function CareCard(page) {
  return html`
    <section class="care-card ${page.tone}">
      <div class="care-visual" aria-hidden="true">
        <span></span>
      </div>
      <div>
        <h2>${page.status}</h2>
        <p>${page.summary}</p>
      </div>
    </section>
  `;
}

function InsightPanel(page) {
  return html`
    <section class="content-grid">
      <article class="panel">
        <div class="panel-heading">
          <h2>Lectura actual</h2>
          <span>En vivo</span>
        </div>
        <div class="signal-map ${page.tone}">
          <div>
            <span>Presencia</span>
            <strong>${page.metrics[0].value}</strong>
          </div>
          <div>
            <span>Estado</span>
            <strong>${page.status}</strong>
          </div>
          <div>
            <span>Acción</span>
            <strong>${page.tone === "warn" ? "Atender" : "Observar"}</strong>
          </div>
        </div>
      </article>

      <article class="panel">
        <div class="panel-heading">
          <h2>Eventos recientes</h2>
          <span>Hoy</span>
        </div>
        ${Timeline(page.timeline)}
      </article>
    </section>
  `;
}

function Actions(page) {
  return html`
    <div class="actions">
      <button class="primary-action ${page.tone}" type="button">${page.primaryAction}</button>
      <button class="secondary-action" type="button">${page.secondaryAction}</button>
    </div>
  `;
}

export function AppShell(activePage) {
  const page = pages[activePage] ?? pages.presencia;

  return html`
    <div class="app-layout">
      <aside class="brand-panel">
        <div class="brand-lockup">
          <div class="brand-symbol" aria-hidden="true"></div>
          <div>
            <p>Calli</p>
            <h2>Cuidado inteligente para acompañar mejor.</h2>
          </div>
        </div>
        ${Nav(activePage, "app-nav sidebar-nav")}
        <p class="support-copy">Una interfaz cálida, clara y lista para conectarse a sensores, voz y alertas reales.</p>
      </aside>

      <main class="app-main">
        ${PageHeader(page)}
        ${CareCard(page)}
        ${MetricGrid(page.metrics)}
        ${InsightPanel(page)}
        ${Actions(page)}
      </main>

      ${Nav(activePage, "app-nav bottom-nav")}
    </div>
  `;
}
