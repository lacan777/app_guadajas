import { html } from "../utils/html.js";

export function MetricGrid(metrics) {
  return html`
    <section class="metric-grid" aria-label="Indicadores principales">
      ${metrics
        .map(
          (metric) => html`
            <article class="metric-card">
              <span>${metric.label}</span>
              <strong>${metric.value}</strong>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}
