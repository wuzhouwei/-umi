import React, { Component } from 'react';
import {Button} from 'antd'
import route from 'umi/router'
class Demo extends Component {
  constructor(props) {
    super(props);

  }
  handleClick=()=>{
    route.push('/list2')
  }
  render() {

    return (
      <div>
        <Button onClick={this.handleClick}>跳转2</Button>
        123
      </div>
    );
  }
}

export default Demo;
