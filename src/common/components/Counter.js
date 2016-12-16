/**
 * Created by yyj on 16/12/2016.
 */
import React, { PropTypes } from 'react';

const Counter = ({
  count,
  onIncrement,
  onDecrement,
}) => (
  <div>
    <p>Clicked: {count} times</p>
    <button onClick={onIncrement}>add</button>
    <button onClick={onDecrement}>subtract</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

Counter.defauleProps = {
  count: 0,
  onIncrement: () => {
  },
  onDecrement: () => {
  },
};

export default Counter;
