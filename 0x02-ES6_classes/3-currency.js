export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // eslint-disable-next-line no-underscore-dangle
  get code() { return this._code; }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._code = value;
  }

  // eslint-disable-next-line no-underscore-dangle
  get name() { return this._name; }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
