import React, { Component } from 'react';
import './index.css';
import { button, Col,Grid, PageHeader, Row, Table ,Panel } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const Summary = (props) => {
        return (
          
            <Col className="dimensions" xs={8} md={4}>
              <Panel>
               <h3>Summary</h3>
               <p>Product type:0 Variant Number:2</p>
               <Table striped bordered condensed hover>
                  <thead>
                   <tr>
                      <th>Weight</th>
                      <th>2070ton</th>
                      <th>916,1 kr/ton</th>
                   </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th>Area</th>
                      <th>7,05 m*2</th>
                      <th>269,0 kr/m*2</th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th>My time min</th>
                      <th>126</th>
                      <th></th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th>Arb salary kr</th>
                      <th>596</th>
                      <th></th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th>Cost kr</th>
                      <th>1300</th>
                      <th></th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th>Total cost kr</th>
                      <th>1896</th>
                      <th></th>
                    </tr>
                  </thead>
                  </Table>
                </Panel>
              </Col>
        );

};