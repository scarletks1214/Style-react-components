import React, { Component } from 'react';
import './App.css';

import { Header } from './layouts/Header';
import { Sidebar } from './layouts/Sidebar';
import { Content } from './pages/Content';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isRoomState: 'ROOM',
    };
  }

  setRoomState = (dataFromChild) => {
    this.setState({ isRoomState: dataFromChild });
  }

  render() {
    return (
      <div className="app-container">
        <div className="sidebar-container">
          <Sidebar callbackFromApp={this.setRoomState} />
        </div>
        <div className="content-container">
          <Header />
          <Content isRoomState={this.state.isRoomState}/>
        </div>
      </div>
    );
  }
}

export default App;
