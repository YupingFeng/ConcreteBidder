import React from 'react';
import './index.css';
import con3 from '../assets/con3.jpg';
import {Carousel, Col} from 'react-bootstrap';
export const ImageSlider = () => (
  <Col sm={12} >
        <Carousel className="sliderImg">
              <Carousel.Item >
                <img  alt="900x100" src={con3} />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img  alt="900x100" src={con3} />

              </Carousel.Item>
              <Carousel.Item>
                <img  alt="900x100" src={con3} />

              </Carousel.Item>
            </Carousel>
      </Col>
    )
