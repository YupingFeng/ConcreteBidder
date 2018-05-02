import React, { Component } from 'react';
import './index.css';
import Filters from './Filters';
import { FormControl, FormGroup, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RightHeader from './RightHeader';
import App from '../App';
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }

    this.sortByCategory = this.sortByCategory.bind(this);

  }
  //this update value and store the sortby category value in the state value
  sortByCategory(e) {
    const upValue = e.target.value;
    this.setState({ value: upValue });
    console.log(e.target.value);
    this.props.updateProjectSort(e.target.value);
  }
  render() {

    return (

      <Grid fluid>
        <Row className="HeaderBorder margin">
          <Col xs="12" md="8">
            <PageHeader className="header1">Projects <span>
              <small> Welcome To Concrete Bidder </small></span>
            </PageHeader>
          </Col>
          <Col xs='12' md='4'>
            <Row>
              <Col xm='12' sm='6' />

              <Link to={"#"}>
                <RightHeader title="&nbsp;Setting" buttonName="glyphicon-user" />
              </Link>
              <Link to={"/"}>
                <RightHeader title="&nbsp;Logout" buttonName="glyphicon-log-out" />
              </Link>
            </Row>
          </Col>
        </Row>

        <Row className="BodyContent">

          <Filters filterStatus={this.props.filterStatus}
          > </Filters>

          <Col xm={12} sm={9} className="projects">
            <Row>
              <Col xm={3} sm={2}>
                <h5>Sort by : </h5>
              </Col>
              <Col xm={3} sm={3}>
                <FormGroup controlId="formControlsSelect">
                  <FormControl componentClass="select" placeholder="select" value={this.setState.value} onChange={this.sortByCategory}>
                    <option value=" ">Select </option>
                    <option value="Cheapest">Cheapest </option>
                    <option value="Expensive">Expensive</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                  </FormControl>
                </FormGroup>
              </Col>
              <Col className="align-right" xm={6} sm={6}>
                <Link to={"/Newprojectform"}>Add New Project <button className="LargeIcons glyphicon glyphicon-plus" aria-hidden="true"></button> </Link>
              </Col>
            </Row>
            <Row>
              {this.props.filteredproject.map((project) => {
                return (
                  <Link key={project.ProjectID} to={"/elementspecification/" + (project.ProjectID)}>
                    <Col sm={4} className="New">
                      <ul className="New">
                        <li>Project Name: {project.ProjectName}</li>
                        <li>Date Created:{project.CreatedDate.substring(0, 10)}</li>
                        <li>Factory Name:{project.FactoryName}</li>
                        <li>Price:{project.Price}</li>
                      </ul>
                    </Col>
                  </Link>
                )
              })
              }
            </Row>
            <Row>
              <Col sm={12}>
                <a href="#">Load More</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Project;