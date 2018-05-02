import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormControl, FormGroup, Col, ControlLabel,Grid } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Login extends Component {
  state = {
    Email:"",
    Password:"",
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
 
  render() {

    return (

      <Grid className="Absolute-Center is-Responsive">
        <Col sm={12} md={10} md-offset={1}>
          <Form action="" horizontal className="Borderwrap">
            <FormGroup controlId="formHorizontalTitle">
              <Col componentClass={ControlLabel} sm={8}>
                <h1 className="loginHeader">Concrete Bidder</h1>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                <i className="material-icons">account_box</i>
              </Col>
              <Col sm={8}>
                <FormControl 
                  name="Email" 
                  type="email" 
                  placeholder="Email"
                  value={this.state.Email}
                  onChange={e=> this.change(e)} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                <i className="material-icons">lock_open</i>
              </Col>
              <Col sm={8}>
                <FormControl 
                  type="password" 
                  placeholder="Password"  
                  value={this.state.Password}
                  onChange={e=> this.change(e)} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={12}>
              <Link to={"/Project"}><Button bsStyle="success" type="button" >LogIn</Button> </Link>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Grid>


   
    );
  }
}
export default Login;
