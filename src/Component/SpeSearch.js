import React, { Component } from 'react';
import './index.css';
import { button, Form, FormControl, FormGroup, Col, ControlLabel, Grid, PageHeader, Row, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from "axios";

class SpeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
    }
   
    this.searchElementid = this.searchElementid.bind(this);
  } 

  searchElementid(x) {
   x.target.className == 'SearchBar'
    {
      const upValue = x.target.value;
      this.setState({ value: upValue });
      console.log(x.target.value);
      this.props.searchElementid(x.target);
    }
   
  }
    
  render(){
      return(
        <Col xs={12} md={4}>
        <span className="SearchBar">
        <p>Search ElementID</p>
        <input type="text"
        onChange={this.searchElementid}
        value={this.state.value}
        
       />
       </span>
      </Col>
  );
}
}


export default SpeSearch;