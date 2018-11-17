import React, { Component } from 'react';
import "./SwapRoomsMarket.css";

import { Header } from './layouts/Header';
import { Sidebar } from './layouts/Sidebar';
import { MarketContent } from "./pages/MarketContent";

class SwapRoomsMarket extends Component {
  
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
    return <div className="market-container">
        <div className="market-sidebar-container d-none d-lg-block">
          <Sidebar callbackFromApp={this.setRoomState} />
        </div>
        <div className="market-content-container">
          <Header showSearch="false" />
          <MarketContent isRoomState={this.state.isRoomState} />
        </div>
      </div>;
  }
}

export default SwapRoomsMarket;
