import React from 'react';
import '../scss/Sidebar.scss';
import { ActiveRoom } from '../components/ActiveRoom';
import { RoomList } from '../components/RoomList';
import { DirectChannelList } from "../components/DirectChannelList";

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRoomState : '',
    }
  }

  setRoomState = (dataFromChild) => {
    this.setState({ isRoomState: dataFromChild });
    this.props.callbackFromApp(dataFromChild);
  }

  render() {
    return <div>
        <ActiveRoom />
        <RoomList callbackFromSidebar={this.setRoomState} />
        <DirectChannelList callbackFromSidebar={this.setRoomState} />
      </div>;
  }
}
