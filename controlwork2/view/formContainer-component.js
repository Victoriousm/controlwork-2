import { createElement } from "../src/framework/render.js"

function createFormContainerComponentTemplate() {
    return `
   <div class="form-container">
        <form id="transaction-form">
          <select id="type" required>
            <option value="">Выберите тип операции</option>
            <option value="income">Доход</option>
            <option value="expense">Расход</option>
          </select>

          <select id="category" required>
            <option value="">Выберите категорию</option>
            <option value="salary">Зарплата</option>
            <option value="food">Еда</option>
            <option value="transport">Транспорт</option>
            <option value="entertainment">Развлечения</option>
          </select>

          <input type="number" id="amount" placeholder="Сумма" />

          <button type="submit">Добавить операцию</button>
        </form>
      </div>
    `;
  }
  
  export default class FormContainerComponent {
    getTemplate() {
      return createFormContainerComponentTemplate();
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
  