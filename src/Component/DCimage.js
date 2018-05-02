import React, { Component } from 'react';
import './index.css';
import calc from '../assets/calc.png'; 
import {button, Form, FormControl, FormGroup, Col, Grid, PageHeader, Row, Table, Image, Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const DetailImage = (props) => {
        return (

            <Col xs={18} md={8}>
              <Panel>            
                    <Image width={750} height={300} src={calc}/>
              </Panel> 
            </Col>
        );
};