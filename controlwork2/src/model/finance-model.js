export default class FinanceModel {
    constructor() {
      this.operations = []; 
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
      return this.operations;
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
  