import React from "react";
import "../scss/RoomList.scss";

import {ListItem } from "./ListItem";
import * as constantsClass from '../constants/Common';

export class RoomList extends React.Component {

  handleClickRoom(id) {
    console.log("ruby:", id , ', clicked!');
    this.props.callbackFromSidebar(constantsClass.RoomStateFlag);
  }
  
  render() {
    return <div className="room-list">
        <div className="title text-left">Rooms</div>
        <ListItem img="/images/avatars/avatar-4.png" text="Home" onClick={this.handleClickRoom.bind(this, constantsClass.RoomStateFlag)} />
        <ListItem text="Decentraland" onClick={this.handleClickRoom.bind(this, constantsClass.RoomStateFlag)} />
        <ListItem img="/images/avatars/avatar-1.png" text="OmiseGo" onClick={this.handleClickRoom.bind(this, constantsClass.RoomStateFlag)}/>
        <ListItem text="Cryptokitties" onClick={this.handleClickRoom.bind(this, constantsClass.RoomStateFlag)}/>
      </div>;
  }
}
