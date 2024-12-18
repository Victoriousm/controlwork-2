import { createElement } from "../src/framework/render.js"

function createBalanceComponentTemplate() {
    return `
    <div class="balance">
        <h2>Общий баланс: <span id="total-balance">0</span> руб.</h2>
      </div>
    `;
  }
  
  export default class BalanceComponent {
    getTemplate() {
      return createBalanceComponentTemplate();
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
  