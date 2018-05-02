import React, { Component } from 'react';
import './index.css';
import { button, Col, Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RightHeader from './RightHeader';
import { Summary } from './SummaryTable';
import { DetailImage } from './DCimage';
import calc from '../assets/calc.png';
import { Dimension } from './Dimension';
import ArtTable from './ArtTable';
import Artdata from './Artdata';
import { ArtTitle } from './ArtTitle';
import sessionstorage from "sessionstorage";
import { DCheader } from './DCheader';

class DetailedCalculation extends React.Component {
    constructor(props) {
        super(props);
        this.project_id = sessionstorage.getItem('project_id');
    }
    

    render() {
        return (
            <Grid fluid>
                <Row className="HeaderBorder botpad">

                                <DCheader />


                    <Col xs='12' md='4'>
                        <Row>
                            <Col xm='12' sm='4' />
                            <Link to={"/Project"}>
                                <RightHeader title="&nbsp;&nbsp;Home" buttonName="glyphicon-home" />
                            </Link>
                            <Link to={"/elementspecification/" + (this.project_id)}>
                                <RightHeader title="&nbsp;&nbsp;&nbsp;Back" buttonName="glyphicon-backward" />
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

                <Summary></Summary>

                <DetailImage></DetailImage>
                <br />
                <Dimension></Dimension>
                <br />

                <Row className="ArtTitle">
                    <ArtTitle />
                </Row>

                <Row className="ArtTable" id="newfield" >
                    {this.props.elementItems.filter(elementItems => elementItems.ElementsID === parseInt(this.props.match.params.elementsId)).map((elementItem) => {
                        return (
                            <Artdata
                                refreshElementsItem={this.props.refreshElementsItem}
                                key={elementItem.ElementItemID}
                                ElementItemID={elementItem.ElementItemID}
                                Description={elementItem.Description}
                                Unit={elementItem.Unit}
                                Fields={elementItem.Fields}
                                Fare={elementItem.Fare}
                                Quantity={elementItem.Quantity}
                                Amount={elementItem.Amount}
                                Mytime={elementItem.Mytime}
                                Salary={elementItem.Salary}
                                TotalCost={elementItem.TotalCost}

                                button="Delete"
                            />
                        )
                    })
                    }

                </Row>
                <br />

                <ArtTable refreshElementsItem={this.props.refreshElementsItem}
                    id={this.props.match.params.elementsId} />

                <Row className="BottomRow">
                    <Col className="PrintVersion">
                        <small className="bottomfont">Print out</small>
                        <button className="BottomIcons glyphicon glyphicon-print" aria-hidden="true"></button>
                    </Col>
                </Row>

            </Grid>
        );
    }
}
export default DetailedCalculation;
