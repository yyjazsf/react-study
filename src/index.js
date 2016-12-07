/**
 *
 */
import React, {Component} from "react";
import ReactDOM from "react-dom";

// import HelloMessage from './FunctionalComponent'; // Functional Component
// import UseJs from './usejs';// jsx 里面使用原生js  map
// import Timer from './states';// 文件名不能是关键字，比如state
import TodoApp from './todoList';

ReactDOM.render(
  <div>
    {/*<HelloMessage></HelloMessage>*/}
    {/*<UseJs></UseJs>*/}
    {/*<Timer></Timer>*/}
    <TodoApp></TodoApp>

  </div>,
  document.querySelector("#main")
);