import React, { Component } from 'react';
import './index.css';
import { button, Col,Grid, PageHeader, Row, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render(){
      return (      
          
            <Col xs={12} md={8}>
              <PageHeader className="header1 "> {this.props.title} <span>
               {/*  <small className="smallfont">Factory account:{this.props.account}</small>
                <small className="smallfont">Project Number: {this.props.number}</small> */}
                <small className="smallfont">Project name: {this.props.name}</small> </span>
              </PageHeader>
            </Col>          
        
            )
        }
      }      