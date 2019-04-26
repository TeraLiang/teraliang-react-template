import React, { Component } from 'react';
import '../style/App.css';
import Header from '../components/PublicHeader/index'
import Nav from '../components/PublicNav/index'

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="App__header"><Header></Header></div>
        <div className="App__nav"><Nav></Nav></div>
        <div className="App__content">内容区域</div>
      </div>
    )
  }
}

export default App;
