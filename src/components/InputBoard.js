import React from 'react'
import '../scss/InputBoard.scss'

export class InputBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    
    return <div className="input-board">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Enter message here.." aria-describedby="send-message" id="input" />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button" id="send-message">
              <img src="/images/items/icons-email-send.svg"
                className="icons-email-send"
                alt="" />
            </button>
          </div>
        </div>
      </div>;
  }
}