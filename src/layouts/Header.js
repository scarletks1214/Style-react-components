// import React from 'react';
// import '../scss/Header.scss';

// import { SearchBox } from '../components/SearchBox';

// export class Header extends React.Component {

//   render() {
//     return <div className="header">
//         <div className="row">
//           <SearchBox className="search-box" />
//           <img src="/images/items/add.svg" className="add-abcd" alt="" />
//           <img src="/images/items/notifications-button.svg" className="notifications-button" alt="" />
//           <div className="line" />
//           <i className="fa fa-user room-chat-icon" />
//           <i className="fa fa-angle-down" />
//         </div>
//       </div>;
//   }
// }


import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { SearchBox } from "../components/SearchBox";
import "../scss/Header.scss";

export class Header extends React.Component {
         static defaultProps = { showSearch: true };

         constructor(props) {
           super(props);

           this.toggle = this.toggle.bind(this);
           this.state = { isOpen: false };
         }
         toggle() {
           this.setState({ isOpen: !this.state.isOpen });
         }
         render() {
           return <div>
               <Navbar color="none" light expand="md" id="navbar">
                 { this.props.showSearch !== true ? null:
                    <NavbarBrand>
                     <SearchBox className="search-box" />
                   </NavbarBrand>  }
                 <NavbarToggler onClick={this.toggle}>
                   <img src="/images/items/menu-button.svg" className="menu-button" alt="" />
                 </NavbarToggler>
                 <Collapse isOpen={this.state.isOpen} navbar>
                   <Nav className="ml-auto" navbar>
                     <NavItem>
                       <NavLink href="#">
                         <img src="/images/items/add.svg" className="add-abcd" alt="" />
                       </NavLink>
                     </NavItem>
                     <NavItem>
                       <NavLink href="#">
                         <img src="/images/items/notifications-button.svg" className="notifications-button" alt="" />
                       </NavLink>
                     </NavItem>
                     <NavItem>
                       <NavLink href="#">
                         <i className="fa fa-user room-chat-icon" />
                       </NavLink>
                     </NavItem>
                     <UncontrolledDropdown nav inNavbar>
                       <DropdownToggle nav caret>
                         <img src="/images/avatars/avatar-5.svg" className="notifications-button" alt="" />
                         <i className="fa fa-angle-down profile-icon-arrow" />
                       </DropdownToggle>
                       <DropdownMenu right>
                         <DropdownItem>Option 1</DropdownItem>
                         <DropdownItem>Option 2</DropdownItem>
                         <DropdownItem divider />
                         <DropdownItem>Sign Out</DropdownItem>
                       </DropdownMenu>
                     </UncontrolledDropdown>
                   </Nav>
                 </Collapse>
               </Navbar>
             </div>;
         }
       }
