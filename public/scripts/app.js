'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;

var VisibilityToggle = function (_Component) {
  _inherits(VisibilityToggle, _Component);

  function VisibilityToggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VisibilityToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false
    }, _this.handleShowDetails = function () {
      _this.setState(function (prevState) {
        return {
          visible: !prevState.visible
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VisibilityToggle, [{
    key: 'render',
    value: function render() {
      var visible = this.state.visible;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.handleShowDetails },
          ' ',
          visible ? 'Hide details' : 'Show details'
        ),
        visible && React.createElement(
          'p',
          null,
          'Here are some juicy details!!!'
        )
      );
    }
  }]);

  return VisibilityToggle;
}(Component);

var root = document.getElementById('app');
ReactDOM.render(React.createElement(VisibilityToggle, null), root);
