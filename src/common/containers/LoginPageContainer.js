/**
 * Created by yyj on 19/12/2016.
 */

import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';

export default connect(
  state => ({
    spinnerVisible: state.getIn(['ui', 'spinnerVisible']),
  }),
  () => ({}),
)(LoginPage);
