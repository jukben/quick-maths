"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QuickMaths =
/*#__PURE__*/
function () {
  function QuickMaths() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, QuickMaths);

    this.value = this._getNumber(value);
  }

  _createClass(QuickMaths, [{
    key: "_getNumber",
    value: function _getNumber(value) {
      var number = parseInt(value, 10);

      if (value instanceof QuickMaths) {
        return value.is();
      } else if (typeof number === "number" && !Number.isNaN(number)) {
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
    key: "valueOf",
    value: function valueOf() {
      return this.is();
    }
  }, {
    key: "plus",
    value: function plus(value) {
      return new QuickMaths(this.value + this._getNumber(value));
    }
  }, {
    key: "minus",
    value: function minus(value) {
      return new QuickMaths(this.value - this._getNumber(value));
    }
  }]);

  return QuickMaths;
}();

exports["default"] = QuickMaths;
