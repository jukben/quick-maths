export default class QuickMaths {
  constructor(value = 0) {
    this.value = this._getNumber(value);
  }

  _getNumber(value) {
    const number = parseInt(value, 10);

    if (value instanceof QuickMaths) {
      return value.is;
    } else if (typeof number === "number" && !Number.isNaN(number)) {
      return parseInt(value, 10);
    } else {
      throw TypeError("Value has to be number of QuickMaths instance");
    }
  }

  is() {
    return this.value;
  }

  toString() {
    return "" + this.is();
  }

  valueOf() {
    return this.is();
  }

  plus(value) {
    return new QuickMaths(this.value + this._getNumber(value));
  }

  minus(value) {
    return new QuickMaths(this.value - this._getNumber(value));
  }
}
