import React from 'react';
import {render} from 'react-dom';
import Menu from "./Menu";
import data from './recipes-data';

window.React = React;

render(
  <Menu recipes={data} />,
  document.querySelector('#react-container')
);
