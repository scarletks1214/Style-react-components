import React from 'react'
import '../scss/RightSideBar.scss'

import { OnlinedMemberList } from '../components/OnlinedMemberList';
import { OfflinedMemberList } from "../components/OfflinedMemberList";
import { UserDetailPanel } from "../components/UserDetailPanel";
import * as constantClass from '../constants/Common';

export class RightSideBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    
    return <div>
        {this.props.isRoomState === constantClass.DirectStateFlag ?
          <div className="right-side-bar_direct">
            <UserDetailPanel />
          </div> : null}
        {this.props.isRoomState === constantClass.RoomStateFlag ?
          <div className="right-side-bar">
            <OnlinedMemberList />
            <OfflinedMemberList />
          </div> : null}
      </div>;
  }
}