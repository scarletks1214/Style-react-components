import React from 'react'
import '../scss/MarketItem.scss';

export class MarketItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    
    return <div className="market-item mx-auto">
        <div className="text-center row mx-0">
          <div className="ml-auto">
            <div className="text-top">SEND</div>
            <img src="/images/items/group-8.svg" className="item-left" alt="" />
            <div className="text-bottom">0.2 ETH</div>
          </div>
          <div className="px-0">
            <img src="/images/items/swap-horiz.svg" className="swap-horiz" alt="" />
          </div>
          <div className="mr-auto">
            <div className="text-top">RECEIVE</div>
            <img src="/images/items/group-14.svg" className="item-right" alt="" />
            <div className="text-bottom">#1216 CK</div>
          </div>
        </div>
      </div>;
  }
}