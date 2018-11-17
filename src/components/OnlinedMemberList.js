import React from "react";
import "../scss/RoomList.scss";

import { ListItem } from "./ListItem"

export class OnlinedMemberList extends React.Component {
  
  render() {
    return <div className="room-list">
      <div className="members-title text-left">Online</div>
      <ListItem img="/images/avatars/avatar-4.png" text="0x23f32kh78yfs.." />
      <ListItem text="0xa3b43df9kjh.." />
      <ListItem img="/images/avatars/avatar-1.png" text="0x23f32kh78yfs.."  />
      <ListItem text="0x1042kh77435.." />
      </div>;
  }
}
