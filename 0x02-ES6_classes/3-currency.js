export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Get code
  get code() {
    return this._code;
  }

  // Set code value
  set code(value) {
    this._code = value;
  }

  // Get name
  get name() {
    return this._name;
  }

  // Set name value
  set name(value) {
    this._name = value;
  }

  // Return attributes in specified format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
