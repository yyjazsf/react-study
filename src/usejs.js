import React, {Component} from "react";
import ReactDOM from "react-dom";

class HelloWorld extends Component {
  constructor() {
    super();
    this.onBtn = this.onBtn.bind(this);
  }

  onBtn() {
    alert(this.props.greetTarget);
  }

  render() {
    return (
      <p style={{color: '#333', fontSize: '30px'}} onClick={this.onBtn}>Hello, {this.props.greetTarget}!</p>
    );
  }
}

const lists = ['JavaScript', 'koa', 'Node', 'express'];

class UseJs extends Component{
  render(){
    return (
       <div>
          {
            lists.map((result, index) => {
              return (
                /**
                 * 多行注释
                 */
                <HelloWorld key={index} greetTarget={result}/>// 单行注解
              )
            })
          }

          {/*<h2 dangerouslySetInnerHTML={{__html: '<h1>Hello World!!</h1>'}}></h2>*/}
        </div>
    )
  }
}

export default UseJs;
