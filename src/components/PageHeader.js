import { html } from "../utils/html.js";

export function PageHeader(page) {
  return html`
    <header class="page-header">
      <p class="section-kicker">Calli</p>
      <div class="title-row">
        <div>
          <h1>${page.title}</h1>
          <p>${page.subtitle}</p>
        </div>
        <span class="status-badge ${page.tone}">${page.status}</span>
      </div>
    </header>
  `;
}
