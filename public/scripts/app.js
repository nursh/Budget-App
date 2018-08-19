'use strict';

var hideDetails = true;

var onShowDetails = function onShowDetails() {
  hideDetails = !hideDetails;
  visibleComponent();
};

var root = document.getElementById('app');
var visibleComponent = function visibleComponent() {
  var visible = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility toggle'
    ),
    React.createElement(
      'button',
      { onClick: onShowDetails },
      ' ',
      hideDetails ? 'Show details' : 'Hide details'
    ),
    !hideDetails && React.createElement(
      'p',
      null,
      'Here are some juicy details!!!'
    )
  );

  ReactDOM.render(visible, root);
};

visibleComponent();
