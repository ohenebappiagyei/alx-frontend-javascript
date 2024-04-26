export class Car {
    constructor(brand, motor, color) {
      // Define private properties using Symbol
      this[_brandSymbol] = brand;
      this[_motorSymbol] = motor;
      this[_colorSymbol] = color;
    }
  
    get brand() {
      return this[_brandSymbol];
    }
  
    get motor() {
      return this[_motorSymbol];
    }
  
    get color() {
      return this[_colorSymbol];
    }
  
    cloneCar() {
      // Create a new Car instance with the same properties
      return new Car(this.brand, this.motor, this.color);
    }
  }
  
  // Define private property symbols
  const _brandSymbol = Symbol('brand');
  const _motorSymbol = Symbol('motor');
  const _colorSymbol = Symbol('color');
