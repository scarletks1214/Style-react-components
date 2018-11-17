import React from "react";
import "../scss/UserDetailPanel.scss";

import { OpponentItem } from "./OpponentItem"

export class UserDetailPanel extends React.Component {
  
  render() {
    return <div>
      <OpponentItem img="/images/avatars/avatar-5.svg" text="0xa3b43df9kjlfk" />
        <div className="open-orders-title">
          <div className="open-orders text-left">Open Orders</div>
          
        </div>
        <div className="none-yet">none yet</div>
      </div>;
  }
}
