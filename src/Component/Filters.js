import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormControl, FormGroup, Grid, Row, Col, ControlLabel, Carousel } from 'react-bootstrap';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
    this.statusfilter = this.statusfilter.bind(this);
  } 
    
  statusfilter(e) {
    if(e.target.className == 'form-control')
    {
      const upValue = e.target.value;
      this.setState({ value: upValue });
      console.log(e.target.value);
      this.props.filterStatus(e.target);
    }
    else {
      this.setState({term:e.target.value})
      this.props.filterStatus(e.target)
    }
  }
    render(){
      
          return (
        <Col xm={12} sm={3} className="filters">
        <h4>Filter by: </h4>
        <hr />
        <Form>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Search Factory:</ControlLabel>
            <input type="text"
             onChange={this.statusfilter}
             value={this.state.term}
             />
          </FormGroup>
          
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Status</ControlLabel>
            <FormControl componentClass="select" placeholder="select" value={this.setState.value} onChange={this.statusfilter}>
              <option value="All">All</option>
              <option value="New">New(G)</option>
              <option value="Ongoing">Ongoing(Y)</option>
              <option value="Finished">Finish(R)</option>
              
            </FormControl>
          </FormGroup>
         
        </Form>
        </Col>
   );
  }
}
export default Filters;