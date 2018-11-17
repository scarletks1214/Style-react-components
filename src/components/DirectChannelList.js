import React from "react";
import "../scss/RoomList.scss";

import { ListItem } from "./ListItem"
import * as constantsClass from '../constants/Common';

export class DirectChannelList extends React.Component {
  
  handleClickChannel(id) {
    console.log("ruby", id , ', clicked!');
    this.props.callbackFromSidebar(constantsClass.DirectStateFlag);
  }

  render() {
    return <div className="room-list">
        <div className="title text-left">Direct</div>
        <ListItem img="/images/avatars/avatar-4.png" text="0x23f32kh78yfs.." datetime="3:12 PM"
          onClick={this.handleClickChannel.bind(this, constantsClass.DirectStateFlag)} />
        <ListItem text="0xa3b43df9kjh.." datetime="3:22 PM"
          onClick={this.handleClickChannel.bind(this, constantsClass.DirectStateFlag)} />
        <ListItem img="/images/avatars/avatar-1.png" text="0x23f32kh78yfs.." datetime="4:52 PM"
          onClick={this.handleClickChannel.bind(this, constantsClass.DirectStateFlag)}/>
        <ListItem text="0x1042kh77435.." datetime="FRI"
          onClick={this.handleClickChannel.bind(this, constantsClass.DirectStateFlag)}/>
      </div>;
  }
}
