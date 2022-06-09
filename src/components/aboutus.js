import React from "react";
import FadeIn from 'react-fade-in';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import "./aboutus.css";

function AboutUs() {
    React.useEffect(() => {});
    return (
      <>
        
        <div className="section section-icons"
        >
          <Container fluid >
            <FadeIn delay={2000} transitionDuration={1000}>
            <Row>
            <Col className = "text-center-abt" md="4">
              <div className="card">
                <h2 className="title revealOnScroll">Mission</h2>
                <p>
                To provide innovative, creative, and effective integrated brand marketing & public relations solutions which help our clients grow their businesses and realize true Creative and Marketing goals.
                </p>
              </div>
            </Col>

            <Col className = "text-center-abt" md="4">
            <div className="card">
                <h2 className="title revealOnScroll">Vision</h2>
                <p>         
                Delivering result-oriented branding and marketing programs as well as public relations campaigns that enhance our clients’ awareness, improve their overall sales and foster their growth.
                </p>
              </div>
            </Col>
            </Row>
            </FadeIn>
            <FadeIn delay={2000} transitionDuration={1000}>
            <Row>
            <Col className = "text-center-abt" md="6">
            <div className="card">
                <h2 className="title revealOnScroll">About Us</h2>
                <p>
                Minimal Holic™ is a creative solutions provider for all kinds of businesses. With a sole mission to help your brand stand out from the crowd, our experienced team will provide you with everything from branding, web content, graphics, app UI/UX, copywriting, creative content to social media management and digital marketing.
                </p>
              </div>
            </Col>
            </Row>
            </FadeIn>
          </Container>
        </div>
      </>
    );
  }
  
  export default AboutUs;