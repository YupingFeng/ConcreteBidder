import React, { Component } from 'react';
import classnames from 'classnames';
import './index.css';
import { button, Col,Grid, PageHeader, Row, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render(){
      return (      
          
       <Col xs='12' md='2'>
              <PageHeader className="IconHeader">                
                  <button className={classnames('LargeIcons glyphicon', this.props.buttonName)}aria-hidden="true">{this.props.children}</button>                
                          
                <small className="smallfont">{this.props.title}</small>
                </PageHeader> 
              
            </Col>
          )
        }
      }      