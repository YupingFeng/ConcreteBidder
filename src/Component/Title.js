import React, { Component } from 'react';
import './index.css';
import { button, Form, FormControl, FormGroup, Col, ControlLabel, Grid, PageHeader, Row, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TableHeader from './tableheader';
export const Title = (props) => {
      return (
        
          
         
          <Col xs={12} md={12} classname = "Title">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <TableHeader head="Element type" />
                  <TableHeader head="Variant Number" />
                  <TableHeader head="Width" />
                  <TableHeader head="Height" />
                  <TableHeader head="Length" />
                  <TableHeader head="Area [m^2]" />
                  <TableHeader head="Weight[ton]" />
                  <TableHeader head="Product Group" />
                  <TableHeader head="Cost" />
                  <TableHeader head="Actions" />
                </tr>
              </thead>
            </Table>
          </Col>
  

       
            );
        };