import React, { Component } from 'react';
import './index.css';
import {button, Form, FormControl, FormGroup, Col, Grid, PageHeader, Row, Table, Image, Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const Dimension = (props) => {
        return (

      <Table className="Tablesecond">
      <Panel> 
        <Col className="dimensions" xs={6} md={3}>
         <h3>Main dimensions</h3>
         <p>B:1196 H:265 L:5895</p>
        </Col>
          
        <Row className="SectiontextsTable">
          <Col xs={16} md={8}>
          <h3>Section texts[mm]</h3>
              <Table striped bordered condensed hover>
                  <thead>
                   <tr>
                      <th>n</th>
                      <th>d</th>
                      <th>h</th>
                      <th>c/c</th>
                      <th>cö</th>
                      <th>rö</th>
                      <th>nö</th>
                      <th>ru</th>
                      <th>nu</th>
                      <th>bf</th>
                      <th>bö</th>
                      <th>hf</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><FormControl type="number" placeholder="5" /></td>
                      <td><FormControl type="number" placeholder="185" /></td>
                      <td><FormControl type="number" placeholder="223" /></td>
                      <td><FormControl type="number" placeholder="223" /></td>
                      <td><FormControl type="number" placeholder="132" /></td>
                      <td><FormControl type="number" placeholder="93" /></td>
                      <td><FormControl type="number" placeholder="5" /></td>
                      <td><FormControl type="number" placeholder="93" /></td>
                      <td><FormControl type="number" placeholder="5" /></td>
                      <td><FormControl type="number" placeholder="18" /></td>
                      <td><FormControl type="number" placeholder="3" /></td>
                      <td><FormControl type="number" placeholder="38" /></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
      </Panel> 
      </Table>

    );
};