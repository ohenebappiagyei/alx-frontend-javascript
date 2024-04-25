export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._size = size;
    // eslint-disable-next-line no-underscore-dangle
    this._location = location;
  }

  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }

  valueOf() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }
}
