import React from 'react'
import "../scss/MarketList.scss";
import { MarketItem } from "./MarketItem";

export class MarketList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    
    return <div className="market-list">
        <div className="row">
          <div className="col mb-4">
            <MarketItem />
          </div>
          <div className="col mb-4">
            <MarketItem />
          </div>
        </div>
      </div>;
  }
}