"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuickMaths = function () {
  function QuickMaths(value) {
    _classCallCheck(this, QuickMaths);

    this.value = _getNumber(value);
    return number;
  }

  _createClass(QuickMaths, [{
    key: "_getNumber",
    value: function _getNumber(value) {
      if (value instanceof QuickMaths) {
        return value.is;
      } else if (typeof parseInt(value, 10) === "number") {
        return parseInt(value, 10);
      } else {
        throw TypeError("Value has to be number of QuickMaths instance");
      }
    }
  }, {
    key: "is",
    value: function is() {
      return this.value;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "" + this.is();
    }
  }, {
    key: "plus",
    value: function plus(value) {
      return new QuickMaths(this.base + this._getNumber(value));
    }
  }, {
    key: "minus",
    value: function minus(value) {
      return new QuickMaths(this.base - this._getNumber(value));
    }
  }]);

  return QuickMaths;
}();

exports.default = QuickMaths;
