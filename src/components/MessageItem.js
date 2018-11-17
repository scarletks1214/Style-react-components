import React from 'react'
import '../scss/MessageItem.scss';

export class MessageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps =
  {
    text: "No Name",
    color: "/images/avatars/avatar-4.png",
    mine: false,
  };

  render() {
      let bg_class = 'BG';
      if(this.props.mine){
        bg_class = bg_class + ' mine-item';
      }else {
        bg_class = bg_class + ' other-item'
      }
      return <div className={bg_class}>
        <span className="message-item">{this.props.text}</span>
      </div>;


  }
}