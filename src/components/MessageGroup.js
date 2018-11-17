import React from 'react'
import '../scss/MessageGroup.scss';
import { MessageItem } from './MessageItem';

export class MessageGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    name: 'my name',
    image: '/images/avatars/avatar-1.png',
    mine: false,
  }

  render() {
    if (!this.props.mine) {
      return <div className="message-group">
        <div className="row mx-0">
          <img src={this.props.image} className="chat-image align-self-end" alt="" />
          <div>
            <div className="message-group-name">{this.props.name}</div>
            <MessageItem text="Sorry I don’t" />
            <MessageItem text="I’m looking for emerald eyes.." />
          </div>
        </div>
      </div>;
    }
    return <div className="message-group">
      <div className="row mx-0">
        <div className="message-group-mine mr-2">
          <MessageItem text="Sorry I don’t" mine />
          <MessageItem text="ahh I actually have a gen3 with emerald eyes. Can pass it to you for 50 Dai.. Interested?" mine />
        </div>
      </div>
    </div>;
  }
}