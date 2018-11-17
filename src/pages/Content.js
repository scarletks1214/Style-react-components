import React from 'react'
import '../scss/Content.scss'
import { RightSideBar } from '../layouts/RightSideBar';
import { MessageList } from '../components/MessageList';
import { InputBoard } from "../components/InputBoard";
export class Content extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    
    return <div className="content">
        <div className="messagelist-container">
          <div className="messagelist-history-container">
            <MessageList />
          </div>
          <div className="input-board-container">
            <InputBoard />
          </div>
        </div>
        <div className="rightside-container">
        <RightSideBar isRoomState={this.props.isRoomState}/>
        </div>
      </div>;
  }
}