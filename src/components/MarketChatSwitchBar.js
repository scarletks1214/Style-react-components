import React from 'react'
import "../scss/MarketChatSwitchBar.scss";

export class MarketChatSwitchBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = { mode: "MARKET" };
    }

    changeMode = modeValue => {
      this.setState({ mode: modeValue });
      console.log("ruby: mode changed to " + modeValue);
      this.props.callbackFromMarketContent(modeValue);
    };

    render() {
      const { mode } = this.state;
      let classNameForMarket = "select-market";
      let classNameForChat = "select-chat";
      if (mode === "MARKET") {
        classNameForMarket += " selected-mode";
      } else if (mode === "CHAT") {
        classNameForChat += " selected-mode";
      } else {
          return null;
      }
      return <div className="show-or-hide">
          <div className="select-market-chat row mx-0 pt-0">
            <div className={classNameForMarket} onClick={this.changeMode.bind(this, "MARKET")}>
              Market
            </div>
            <div className={classNameForChat} onClick={this.changeMode.bind(this, "CHAT")}>
              Chat
            </div>
          </div>
        </div>;
    }  
       }