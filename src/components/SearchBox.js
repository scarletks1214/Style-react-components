import React from 'react';
import { Input } from "reactstrap";
import "../scss/SearchBox.scss";

export class SearchBox extends React.Component {

  render() {
    return <div className="search-box">
        <Input placeholder="Search" id="inputbox">
        </Input>
    </div>;
  }
}