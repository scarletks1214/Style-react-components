import React from "react";
import "../scss/ListItem.scss";

export class ListItem extends React.Component {
  
  static defaultProps = {
    text: 'No Name',
    img: '/images/avatars/avatar-2.png',
    datetime: '',
    onClick: function() {}
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="list-item" onClick={this.handleClick.bind(this)}>
        <img src={this.props.img} alt="" className="item-avatar" />
        <span className="list-text">{this.props.text}</span>
        <span className="list-time">{this.props.datetime}</span>
      </div>
    );
  }
}
