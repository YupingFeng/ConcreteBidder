import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Form, FormControl, FormGroup, Col, ReactDOM, OverlayTrigger, ControlLabel, Table } from 'react-bootstrap';
import axios from 'axios';

export default class SpecificationTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductType: '',
      Number: '',
      Littera: '',
      Width: '',
      Height: '',
      Length: '',
      Area: '',
      Weight: '',
      ProductGroup: '',
      Anmarking: '',
      Img: '',
      ProjectID: this.props.id,
    }

    this.postRow = this.postRow.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  postRow(id) {
    const {
    ProductType,
      Number,
      Littera,
      Width,
      Height,
      Length,
      Area,
      Weight,
      ProductGroup,
      Anmarking,
      Img,
      ProjectID } = this.state;
    axios.post('https://concretebidderapi.azurewebsites.net/elements/', {
      ProductType,
      Number,
      Littera,
      Width,
      Height,
      Length,
      Area,
      Weight,
      ProductGroup,
      Anmarking,
      Img,
      ProjectID
    })

      .then(response => {
        this.props.refreshProjects();
        this.props.refreshElements();
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {

    return (
      <Col xs={12} md={12} className="TableRow">
        <Table striped bordered condensed hover>
          <tbody>
            <tr>
              <td>TBD</td>
              <td>TBD</td>
              <td><input
                className="addinput"
                value={this.state.Width}
                onChange={this.onChange.bind(this)}
                type="int"
                name="Width" />
              </td>

              <td><input
                className="addinput"
                value={this.state.Height}
                onChange={this.onChange.bind(this)}
                type="int"
                name="Height" />
              </td>

              <td><input
                className="addinput"
                value={this.state.Length}
                onChange={this.onChange.bind(this)}
                type="int"
                name="Length" />
              </td>

              <td>TBD m2</td>

              <td>TBD ton</td>

              <td><input
                className="addinput"
                value={this.state.ProductGroup}
                onChange={this.onChange.bind(this)}
                type="int"
                name="ProductGroup" />
              </td>

              <td>$$</td>

              <td>
                <button onClick={() => this.postRow(this.state.projectID)} type="submit">Add</button>
              </td>

            </tr>
          </tbody>
        </Table>
      </Col>

    )
  }
}


