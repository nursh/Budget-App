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

var user = {
  name: 'Lord Phantomhive',
  age: '1000',
  location: 'London, England'
};

var getLocation = function getLocation(_ref) {
  var location = _ref.location;

  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
