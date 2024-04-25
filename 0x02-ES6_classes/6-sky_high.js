import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    // eslint-disable-next-line no-underscore-dangle
    this._floors = floors;
  }

  // Getter for floors
  // eslint-disable-next-line no-underscore-dangle
  get floors() { return this._floors; }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    // eslint-disable-next-line no-underscore-dangle
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
