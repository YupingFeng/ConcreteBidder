import React, { Component } from 'react';
import '../App.css';
import {button, Form, FormControl, FormGroup, Col, Grid, PageHeader, Row, Table, Image, Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ArtTable extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
      Description: '',
      Unit: '',
      Fields: '',
      Fare:'',
      Quantity: '',
      Amount: '',     
      Mytime: '',
      Salary:'',           
      TotalCost: '',
      ElementsID: this.props.id 
  }
  
  this.postRow = this.postRow.bind(this);
  this.onChange = this.onChange.bind(this); 
  }
  
  onChange = (e) => {
  const state = this.state
  state[e.target.name] = e.target.value;
  this.setState(state);
  }
  
  postRow(id)  {
 
  const {
      Description,
      Unit,
      Fields,
      Fare,
      Quantity,
      Amount,     
      Mytime,
      Salary,           
      TotalCost,
      ElementsID  } = this.state;
  axios.post('http://concretebidderapi.azurewebsites.net/elementItems', {
      Description,
      Unit,
      Fields,
      Fare,
      Quantity,
      Amount,     
      Mytime,
      Salary,           
      TotalCost,
      ElementsID
  })
  .then(response => {this.props. refreshElementsItem();})
  .catch(error => {
  console.log(error)
  })
  } 

  render(){
        return (

             <Col xs={12} md={12} className="ArticlesTable">
              <Table striped bordered condensed hover>

                  <tbody>
                    <tr>
                      <td>Arbetslön för</td>
                      <td><input
                       className="addinput"
                           value={this.state.Description}
                           onChange={this.onChange.bind(this)}
                           type="string"
                           name="Description" /></td>
                      <td>min</td>
                      <td>0</td>
                      <td>0</td>
                      <td><input
                       className="addinput"
                            value={this.state.Quantity}
                            onChange={this.onChange.bind(this)}
                            type="int"
                            name="Quantity" /></td>
                      <td><input
                       className="addinput"
                            value={this.state.Amount}
                            onChange={this.onChange.bind(this)}
                            type="int"
                            name="Amount" /></td>
                      <td><input
                       className="addinput"
                            value={this.state.Mytime}
                            onChange={this.onChange.bind(this)}
                            type="int"
                            name="Mytime" /></td>
                      <td><input
                       className="addinput"
                            value={this.state.Salary}
                            onChange={this.onChange.bind(this)}
                            type="int"
                            name="Salary" /></td>
                      <td>TBD</td>

                      <td><button onClick={() => this.postRow(this.state.ElementsID)} type="submit">Add</button></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            
       
          )
        }
      }