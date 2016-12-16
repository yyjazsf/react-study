/**
 * Created by yyj on 15/12/2016.
 */

import { connect } from 'react-redux';

import Counter from '../components/Counter';
import {
  incrementCount,
  decrementCount,
} from '../actions/counterActions';

export default connect(
  state => ({
    count: state.getIn(['counterReducers', 'count']),
  }),
  dispatch => ({
    onIncrement: () => (
      dispatch(incrementCount())
    ),
    onDecrement: () => (
      dispatch(decrementCount())
    ),
  }),
)(Counter);
