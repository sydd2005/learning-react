import {Component} from 'react';
import PropTypes from 'prop-types';

class Summary extends Component {
  static propTypes = {
    ingredients: PropTypes.array,
    steps: PropTypes.array,
    title: PropTypes.string,
  }

  render() {
    const {ingredients, steps, title} = this.props;
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>{ingredients.length} Ingredients</span>
          <span> | </span>
          <span>{steps.length} Steps</span>
        </p>
      </div>
    );
  }
}

export default Summary;
