import HeaderComponent from "../../view/header-component.js";
import BalanceComponent from "../../view/balance-component.js";
import FormContainerComponent from "../../view/formContainer-component.js";
import TransactionsTitleComponent from "../../view/transactionsTitle-component.js";
import FiltersComponent from "../../view/filters-component.js";
import FinanceModel from "../model/finance-model.js";
import { render, RenderPosition } from "../framework/render.js";

export default class FinancePresenter {
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.headerComponent = new HeaderComponent();
    this.balanceComponent = new BalanceComponent();
    this.formContainerComponent = new FormContainerComponent();
    this.transactionsComponent = new TransactionsTitleComponent();
    this.filtersComponent = new FiltersComponent();
  }

  init() {
    this._renderComponents();
    this._initializeHandlers();
  }

  _renderComponents() {
    render(this.headerComponent, this.container);
    render(this.balanceComponent, this.container);
    render(this.formContainerComponent, this.container);
    render(this.transactionsComponent, this.container);
    render(this.filtersComponent, this.container);

    this._updateView();
  }

  _initializeHandlers() {
    const formElement = this.formContainerComponent
      .getElement()
      .querySelector("#transaction-form");
    formElement.addEventListener("submit", this._handleFormSubmit.bind(this));
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();

    const type = this.formContainerComponent
      .getElement()
      .querySelector("#type").value;
    const category = this.formContainerComponent
      .getElement()
      .querySelector("#category").value;
    const amount = parseFloat(
      this.formContainerComponent.getElement().querySelector("#amount").value
    );

    if (!type || !category || isNaN(amount)) {
      alert("Заполните все поля корректно!");
      return;
    }

    const operation = { type, category, amount };
    this.model.addOperation(operation); 
    this._updateView(); 

    this.formContainerComponent
      .getElement()
      .querySelector("#transaction-form")
      .reset();
  }

  _handleDeleteTransaction(index) {
    this.model.removeOperation(index);
    this._updateView();
  }

  _updateBalance() {
    const operations = this.model.getOperations();

    const totalBalance = operations.reduce((acc, operation) => {
      return operation.type === "income"
        ? acc + operation.amount
        : acc - operation.amount;
    }, 0);

    const balanceElement = this.balanceComponent
      .getElement()
      .querySelector("#total-balance");
    balanceElement.textContent = totalBalance;
  }

  _renderTransactions() {
    const operations = this.model.getOperations();
    const transactionsList = this.transactionsComponent
      .getElement()
      .querySelector("#transactions-list");

    transactionsList.innerHTML = "";

    operations.forEach((operation, index) => {
      const transactionElement = document.createElement("div");
      transactionElement.classList.add(
        "transaction",
        operation.type === "income"
          ? "transaction--income"
          : "transaction--expense"
      );
      transactionElement.innerHTML = `
            <span>${operation.category}</span>
            <span>${operation.amount} руб.</span>
            <button data-index="${index}" class="delete-btn">Удалить</button>
          `;

      transactionElement
        .querySelector(".delete-btn")
        .addEventListener("click", () => this._handleDeleteTransaction(index));

      transactionsList.append(transactionElement);
    });
  }

  _updateView() {
    this._renderTransactions();
    this._updateBalance();
  }
}

