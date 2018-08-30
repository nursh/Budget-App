import React from 'react';
import { render } from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = () => (
  <IndecisionApp />
)

render(<App />, document.getElementById('app'));