/**
 *
 */
import React, {Component} from "react";
import ReactDOM from "react-dom";

// Functional Component
const HelloMessage = (props) => (
   <div>hello {props.name}</div>
);
HelloMessage.propTypes = {
  name:React.PropTypes.string
}
HelloMessage.defaultProps = {
  name:'yingyujia'
}

export default HelloMessage;
