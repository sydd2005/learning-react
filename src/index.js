import React from 'react';
import {render} from 'react-dom';
import Menu from "./Menu";
import data from './recipes-data';
import Summary from './Summary';

window.React = React;

render(
  <Summary title="Peanut Butter and Jelly"
           ingredients="peanut butter, jelly, bread"
           steps="spread peanut butter and jelly between bread"
  />,
  document.querySelector('#react-container')
);
