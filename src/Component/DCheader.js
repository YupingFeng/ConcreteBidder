import React, { Component } from 'react';
import './index.css';
import { Col, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export let DCheader = (props) => {
      return (
            <Col xs={12} md={8}>
              <PageHeader className="header1">Detailed Calculation <br />
              </PageHeader>
            </Col>

            );
};