import React from 'react';
import { render } from 'react-dom';

import IndecisionApp from './components/IndecisionApp';


const App = () => (
  <IndecisionApp />
)

render(<App />, document.getElementById('app'));