import React, { Component } from 'react';
import { render } from 'react-dom';

const Template = () => (
  <div>
    Testing 1, 2, 3...
  </div>
)

render(<Template />, document.getElementById('app'));