import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import bannerResponsiveImage from "../../assets/hero-graphic.svg";
import Header from './Header';

const HeroGraphic = (props) => {
  return (
    <div className='hero-wrapper'>
        <Header />
        {/* <img src={heroGraphic} alt="image" className='hero-image img-fluid' /> */}
        <div className='hero-banner'>
            <Container>
                <Row className='justify-content-end hero-row'>
                  <Col lg={6} className="banner-responsive-image">
                    <img src={bannerResponsiveImage} alt="image" className='img-fluid' />
                  </Col>
                    {props.children}
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default HeroGraphic