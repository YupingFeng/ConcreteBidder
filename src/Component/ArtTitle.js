import React, { Component } from 'react';
import './index.css';
import { button, Form, FormControl, FormGroup, Col, ControlLabel, Grid, PageHeader, Row, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TableHeader from './tableheader';
export const ArtTitle = (props) => {
      return (
        
          
         
          <Col xs={12} md={12} classname ="ArtTitle">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <TableHeader head="Articles" />
                  <TableHeader head="Designation" />
                  <TableHeader head="Unit" />
                  <TableHeader head="Time" />
                  <TableHeader head="Fare" />
                  <TableHeader head="Quantity" />
                  <TableHeader head="Amount" />
                  <TableHeader head="My time min" />
                  <TableHeader head="Arb salary kr" />
                  <TableHeader head="Cost kr" />
                  <TableHeader head="Operations" />
                </tr>
              </thead>
            </Table>
          </Col>
  

       
            );
        };