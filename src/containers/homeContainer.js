/**
 * home container
 */

import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

import {
  getGithub,
  changeUserId,
} from '../actions';

export default connect(
  state => ({// mapStateToProps
    userId: state.getIn(['github', 'userId']),
  }),
  // 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，
  // 而且这个对象会与 Redux store 绑定在一起，其中所定义的方法名将作为属性名，合并到组件的 props 中
  dispatch => ({// mapDispatchToProps(dispatch, [ownProps]): dispatchProps
    onChangeUserId: event => (
      dispatch(changeUserId(event.target.value))
    ),
    onSubmitUserId: userId => (
       dispatch(getGithub(userId))
    ),
  }),
  // mergeProps(stateProps, dispatchProps, ownProps): props
  // 如果指定了这个参数，mapStateToProps() 与 mapDispatchToProps() 的执行结果和组件自身的 props 将传入到这个回调函数中。
  // 该回调函数返回的对象将作为 props 传递到被包装的组件中。
  // 默认情况下返回 Object.assign({}, ownProps, stateProps, dispatchProps) 的结果
  (stateProps, dispatchProps, ownProps) => { // mergeProps
    const { userId } = stateProps;
    const { onSubmitUserId } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      onSubmitUserId: () => {
        onSubmitUserId(userId);
      },
    });
  },
)(HomePage);
