import React, { Component } from 'react';
import './index.css';
import { button, Col, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Specificationdata extends React.Component {
  constructor() {
      super();
      this.deleteRow = this.deleteRow.bind(this);
    }


  deleteRow(elements){
    axios
      .delete('https://concretebidderapi.azurewebsites.net/elements/'+ elements)
      .then(response => {
        this.props.refreshProjects();
        this.props.refreshElements();
       
      })
      .catch(error => {
        console.error(error);
      });
  }


  render(){
   
      return(
        <Col xs={12} md={12} className="TableRow">
          <Table striped bordered condensed hover>
          <tbody>
          <tr>
          <td><Link to={"/DetailedCalculation/"+ this.props.ElementsID}>{this.props.projectId}</Link></td>
            <td>{this.props.number}</td>
            <td>{this.props.width}</td>
            <td>{this.props.height}</td>
            <td>{this.props.length}</td>
            <td>{this.props.area}</td>
            <td>{this.props.weight}</td>
            <td>{this.props.prodGrp}</td>
            <td>{this.props.amount}</td>
            <td><button onClick={() => this.deleteRow(this.props.ElementsID)} type="submit">{this.props.button}</button></td>
          </tr>
        </tbody>
          </Table>
        </Col>
      )
    
  } 
}     