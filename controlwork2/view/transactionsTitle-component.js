import { createElement } from "../src/framework/render.js";

function createTransactionsTitleComponentTemplate() {
  return `
<div class="transactions-container">
        <h2>Список операций</h2>
        <div id="transactions-list"></div>
      </div>
    `;
}

export default class TransactionsTitleComponent {
  getTemplate() {
    return createTransactionsTitleComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
