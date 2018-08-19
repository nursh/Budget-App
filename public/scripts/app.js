'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['Un', 'Deux', 'Trois']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options:' : 'No options'
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

var count = 0;

var addOne = function addOne() {
  console.log('One added');
};

var minusOne = function minusOne() {
  console.log('One subtracted');
};

var reset = function reset() {
  console.log('Reset count');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    'Add 1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    'Minus 1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset'
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
