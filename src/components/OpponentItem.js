import React from "react";
import "../scss/OpponentItem.scss";

export class OpponentItem extends React.Component {
  static defaultProps = {
    text: 'No Name',
    img: '/images/avatars/avatar-4.png',
  }
  render() {
    return (
      <div className="opponent-item">
        <img src={this.props.img} alt="" className="opponent-avatar" />
        <span className="opponent-text">{this.props.text}</span>
      </div>
    );
  }
}
