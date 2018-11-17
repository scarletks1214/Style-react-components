import React from 'react'
import "../scss/MarketContent.scss";
import { MessageList } from '../components/MessageList';
import { MarketList } from "../components/MarketList";
import { InputBoard } from "../components/InputBoard";
import { MarketChatSwitchBar } from "../components/MarketChatSwitchBar";

export class MarketContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mode: "MARKET" };
  }

  changeMode = modeValue => {
    this.setState({ mode: modeValue });
  };

  render() {
    let isMobile = typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1;
    let isiPad = navigator.userAgent.match(/iPad/i) != null;
    let isHandy = !isiPad && isMobile;
    //let isDesktop = !isMobile;
    console.log("ruby is mobile", isMobile, "is iPad ", isiPad, "check val ", !isMobile || isiPad);



    return <div className="content">
        {!isHandy && <div className="messagelist-history-container">
            <MarketList />
          </div>}

        <div className="rightside-container">
          <MarketChatSwitchBar callbackFromMarketContent={this.changeMode}/>
          <div className="messagelist-history-container">
            <MessageList />
          </div>
          <div className="input-board-container">
            <InputBoard />
          </div>
        </div>
      </div>;
  }
}