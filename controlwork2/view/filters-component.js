import { createElement } from "../src/framework/render.js";

function createFiltersComponentTemplate() {
  return `
<div class="filters">
        <h2>Фильтры</h2>
        <select id="type-filter">
          <option value="">Все операции</option>
          <option value="income">Доходы</option>
          <option value="expense">Расходы</option>
        </select>
        <select id="category-filter">
          <option value="">Все категории</option>
          <option value="salary">Зарплата</option>
          <option value="food">Еда</option>
          <option value="transport">Транспорт</option>
          <option value="entertainment">Развлечения</option>
        </select>
      </div>
    `;
}

export default class FiltersComponent {
  getTemplate() {
    return createFiltersComponentTemplate();
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
