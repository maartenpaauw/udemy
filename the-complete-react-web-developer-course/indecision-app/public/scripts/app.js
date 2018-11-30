"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this, props));
    _this.handleAddOne = _this.handleAddOne.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMinusOne = _this.handleMinusOne.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Counter, [{
    key: "handleAddOne",
    value: function handleAddOne() {
      console.log('Handle Add One');
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      console.log('Handle Minus One');
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      console.log('Handle Reset');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, "Count:"), React.createElement("button", {
        onClick: this.handleAddOne
      }, "+"), React.createElement("button", {
        onClick: this.handleMinusOne
      }, "-"), React.createElement("button", {
        onClick: this.handleReset
      }, "Reset"));
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app')); // let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }
// const renderCounterApp = () => {
//   const templateTwo = (
//       <div>
//           <h1>Count: {count}</h1>
//           <button onClick={addOne}>+1</button>
//           <button onClick={minusOne}>-1</button>
//           <button onClick={reset}>Reset</button>
//       </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// }
// renderCounterApp();
