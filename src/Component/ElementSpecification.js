import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { button, Col, Grid, Row } from 'react-bootstrap';
import Header from './Header';
import RightHeader from './RightHeader';
import SpeSearch from './SpeSearch'
import { Title } from './Title'
import SpecificationTable from './SpecificationTable'
import Specificationdata from './Specificationdata'
import sessionstorage from "sessionstorage";
class ElementSpecification extends Component {
  constructor(props) {
    super(props);
    let project_id = this.props.match.params.projectId;
    sessionstorage.setItem('project_id', project_id)
 }

  render() {
    return (
      <Grid fluid>

        <Row className="HeaderBorder">
          {this.props.projects.filter(project => project.ProjectID === parseInt(this.props.match.params.projectId)).map((project) => {
            return (
              <Header title="ElementSpecification" name={project.ProjectName}


              />
            )
          }
          )
          }


          <Col xs='12' md='4'>
            <Row>
              <Col xm='12' sm='4' />
              <Link to={"/Project"}>
                <RightHeader title="&nbsp;&nbsp;Home" buttonName="glyphicon-home" />
              </Link>
              <Link to={"#"}>
                <RightHeader title="&nbsp;Setting" buttonName="glyphicon-user" />
              </Link>
              <Link to={"/"}>
                <RightHeader title="&nbsp;Logout" buttonName="glyphicon-log-out" />
              </Link>
            </Row>
          </Col>
        </Row>

        <Row className="marginTop">
          <Col xs={12} md={4}>
            <span className="leftHeader"> Number of Elements : &nbsp;
              {this.props.refreshProjects}
              {this.props.projects.filter(project => project.ProjectID === parseInt(this.props.match.params.projectId)).map((project) => {
                return (
                  project.numberElements
                )
              }
              )
              }

            </span>
            
          </Col>
          <SpeSearch searchElementid={this.props.searchElementid}
                     
          ></SpeSearch>

          <Col xs={12} md={4} >
            <p className="RevisionBar">Revision :
              <input type="text" placeholder='1' />  </p>
          </Col>
        </Row>

        <Row className="SpecificationTable">

          <Title />

        </Row>

        <Row className="SpecificationTable" id="newfield" >

          {this.props.elements.filter(element => element.ProjectID === parseInt(this.props.match.params.projectId)).map((element) => {

            return (

              <Specificationdata
                refreshElements={this.props.refreshElements}
                refreshProjects={this.props.refreshProjects}
                key={element.ElementsID}
                projectId={element.ElementsID}
                number={element.Number}
                littera={element.Littera}
                width={element.width}
                height={element.height}
                length={element.Length}
                area={element.Area}
                weight={element.Weight}
                prodGrp={element.ProductGroup}
                id={element.ProjectID}
                amount="1200"
                Ammaking={element.Anmarking}
                ElementsID={element.ElementsID}
                button="Delete"

              />
            )
          })
          }


          <SpecificationTable
            refreshElements={this.props.refreshElements}
            refreshProjects={this.props.refreshProjects}
            id={this.props.match.params.projectId}
          />

        </Row>
        <Row className="BottomRow">
          <Col className="AddProduct" xm={12} sm={6}>

          </Col>

          <Col className="PrintVersion" xm={12} sm={6}>
            <small className="bottomfont">Print out</small>
            <button className="BottomIcons glyphicon glyphicon-print" aria-hidden="true"></button>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default ElementSpecification;



