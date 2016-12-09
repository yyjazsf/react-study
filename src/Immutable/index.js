
import Immutable from 'immutable';
import React, { Component } from 'react';

class ImmutableDemo extends Component {
  constructor(props) {
    super(props);
    const map1 = Immutable.Map({ a: 1, b: 3 });
    const map2 = map1.set('a', 2);
    console.log(map1.toJS()); // 1
    console.log(map2.toJS()); // 2
  }
  render() {
    return (
      <div>
        123
      </div>
    );
  }
}

export default ImmutableDemo;
