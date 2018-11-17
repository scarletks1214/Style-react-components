import React from 'react'
import '../scss/MessageList.scss';

import { MessageGroup } from './MessageGroup';

export class MessageList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    
    return <div className="message-list">
      <MessageGroup name="0x9adjd43fs.." image="/images/avatars/avatar-6.svg"/>
        <MessageGroup mine />
        <MessageGroup name="0x23f32fjkh78yfs.." />
        <MessageGroup mine />
      </div>;
  }
}