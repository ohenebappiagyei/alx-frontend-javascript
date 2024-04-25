export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  // eslint-disable-next-line no-underscore-dangle
  get length() { return this._length; }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._length = value;
  }

  // eslint-disable-next-line no-underscore-dangle
  get students() { return this._students.slice(); }

  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = value.slice();
  }
}
