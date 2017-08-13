import React from 'react';
import ReactDOM from 'react-dom';
import { Ball, Bar, Bubbles, Cylon, Spin } from './loading';

ReactDOM.render(
  <div>
    <Ball />
    <Bar />
    <Bubbles />
    <Cylon />
    <Spin />
  </div>,
  document.getElementById('container'),
);
