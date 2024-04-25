export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
  }

  // eslint-disable-next-line no-underscore-dangle
  get name() { return this._name; }

  // eslint-disable-next-line no-underscore-dangle
  get code() { return this._code; }

  toString() {
    return `[object ${this.code}]`;
  }
}
