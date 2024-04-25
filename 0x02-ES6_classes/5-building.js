export default class Building {
  // eslint-disable-next-line no-underscore-dangle
  constructor(sqft) { this._sqft = sqft; }

  // Getter for sqft
  // eslint-disable-next-line no-underscore-dangle
  get sqft() { return this._sqft; }

  // Abstract method to be overridden by subclasses
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
