// import HeaderComponent from "../view/header-component.js";
// import BalanceComponent from "../view/balance-component.js";
// import FormContainerComponent from "../view/formContainer-component.js";
// import TransactionsTitleComponent from "../view/transactionsTitle-component.js";
// import FiltersComponent from "../view/filters-component.js";
// import { render, RenderPosition } from "./framework/render.js";
// import FinancePresenter from "../src/presenter/finance-presenter.js";

// const bodyContainer = document.querySelector(".board-app");

// // Рендеринг базовых компонентов
// render(new HeaderComponent(), bodyContainer);
// render(new BalanceComponent(), bodyContainer);
// render(new FiltersComponent(), bodyContainer);
// const formComponent = new FormContainerComponent();
// render(formComponent, bodyContainer);

// // Инициализация презентера
// const financePresenter = new FinancePresenter(bodyContainer);
// financePresenter.init();

// // Обработка формы
// const formElement = formComponent.getElement().querySelector("#transaction-form");
// formElement.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const type = formElement.querySelector("#type").value;
//   const category = formElement.querySelector("#category").value;
//   const amount = parseFloat(formElement.querySelector("#amount").value);

//   if (type && category && amount > 0) {
//     financePresenter.addOperation({ type, category, amount });
//     formElement.reset(); // Очистка формы
//   }
// });

import { render, RenderPosition } from "./framework/render.js";
import FinancePresenter from "../src/presenter/finance-presenter.js";
import FinanceModel from "../src/model/finance-model.js";

// Получение контейнера для рендеринга
const bodyContainer = document.querySelector(".board-app");

// Создание модели и презентера
const financeModel = new FinanceModel();
const financePresenter = new FinancePresenter(bodyContainer, financeModel);

// Инициализация презентера
financePresenter.init();
