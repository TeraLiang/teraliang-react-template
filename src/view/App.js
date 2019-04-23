import React, { Component } from 'react';
import { Button,Input } from 'antd';
import '../style/App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Button disabled>Button</Button>
        <Input placeholder="Basic usage" />
      </div>
    )
  }
}

export default App;
