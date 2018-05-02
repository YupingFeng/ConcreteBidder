import React, { Component } from 'react';
import './index.css';
import { button, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Artdata extends React.Component {
  constructor() {
    super();
    this.deleteArticles  =  this.deleteArticles.bind(this);
  }


  deleteArticles(elementItems) {
        axios
            .delete('http://concretebidderapi.azurewebsites.net/elementItems/'  +  elementItems)
            .then(response  =>  {
                this.props.refreshElementsItem();
            })
            .catch(error  =>  {
        console.log("hello");
                console.error(error);
            });
  }


  render() {

    return (
      <Col xs={12} md={12} className="ArticlesData">
        <Table striped bordered condensed hover>
          <tbody>
            <tr>
              <td>{this.props.ElementItems}</td>
              <td>{this.props.Description}</td>
              <td>{this.props.Unit} </td>
              <td>{this.props.Fields}</td>
              <td>{this.props.Fare}</td>
              <td>{this.props.Quantity}</td>
              <td>{this.props.Amount}</td>
              <td>{this.props.Mytime}</td>
              <td>{this.props.Salary}</td>
              <td>{this.props.TotalCost}</td>
              <td><button  onClick={()  =>  this.deleteArticles(this.props.ElementItemID)}  type="submit">{this.props.button}</button></td>
            </tr>
          </tbody>
        </Table>
      </Col>
    )

  }
} 