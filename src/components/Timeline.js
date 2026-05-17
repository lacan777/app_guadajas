import { html } from "../utils/html.js";

export function Timeline(items) {
  return html`
    <ol class="timeline">
      ${items
        .map(
          (item) => html`
            <li>
              <time>${item.time}</time>
              <div>
                <strong>${item.title}</strong>
                <p>${item.detail}</p>
              </div>
            </li>
          `
        )
        .join("")}
    </ol>
  `;
}
