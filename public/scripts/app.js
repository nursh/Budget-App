'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'Something Something'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'First item'
    ),
    React.createElement(
      'li',
      null,
      'Second item'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Nuradeen Sheikh'
  ),
  React.createElement(
    'p',
    null,
    'Age: 23'
  ),
  React.createElement(
    'p',
    null,
    'Location: Ottawa, Canada'
  )
);
var app = document.getElementById('app');

ReactDOM.render(templateTwo, app);