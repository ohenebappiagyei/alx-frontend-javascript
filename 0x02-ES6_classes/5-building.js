export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._sqft = sqft;
  }

  // eslint-disable-next-line no-underscore-dangle
  get sqft() { return this._sqft; }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
