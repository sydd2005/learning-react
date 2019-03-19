import {Component} from 'react';
import PropTypes from 'prop-types';

const Summary = ({ingredients, steps, title}) => (
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>{ingredients.length} Ingredients</span>
          <span> | </span>
          <span>{steps.length} Steps</span>
        </p>
      </div>
    );

Summary.propTypes = {
  ingredients: PropTypes.array,
  steps: PropTypes.array,
  title: PropTypes.string,
};

export default Summary;
