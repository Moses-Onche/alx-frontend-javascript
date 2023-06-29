import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Get amount
  get amount() {
    return this._amount;
  }

  // Set amount value
  set amount(value) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Get currency
  get currency() {
    return this._currency;
  }

  // Set currency value
  set currency(value) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
