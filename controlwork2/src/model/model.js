

export default class FinanceModel {
  constructor() {
    this.operations = []; 
    this.typeFilter = '';
    this.categoryFilter = '';
  }

  addOperation(operation) {
    this.operations.push(operation);
    this._notify();
  }

  removeOperation(index) {
    this.operations.splice(index, 1);
    this._notify();
  }

  getOperations() {
    let filteredOperations = this.operations;

    if (this.typeFilter) {
      filteredOperations = filteredOperations.filter(op => op.type === this.typeFilter);
    }

    if (this.categoryFilter) {
      filteredOperations = filteredOperations.filter(op => op.category === this.categoryFilter);
    }

    return filteredOperations;
  }

  setFilters(type, category) {
    this.typeFilter = type;
    this.categoryFilter = category;
  }

  setFilterCallback(callback) {
    this._filterCallback = callback;
  }

  _notify() {
    if (this._filterCallback) {
      this._filterCallback(this.operations);
    }
  }
}
