import React from 'react'
import '../scss/ActiveRoom.scss'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class ActiveRoom extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {

    return <div className="active-room-container">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            <div className="text-center active-room-avatar-container">
              <img src="/images/avatars/avatar-4.png" className="active-room-avatar" alt="" />
              <span>Cryptokitties</span>
              <i className="fa fa-angle-down" />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>;
  }
}