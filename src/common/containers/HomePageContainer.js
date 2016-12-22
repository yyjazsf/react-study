/**
 * Created by yyj on 15/12/2016.
 */

import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

export default connect(
  state => ({
    recipes: state.getIn(['recipe', 'recipes']),
  }),
  () => ({}),
)(HomePage);
