import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function AboutUs() {
    React.useEffect(() => {});
    return (
      <>
        <div className="section section-icons"
        >
          <Container fluid >
            <Row>
            <Col className="text-center" md="4">
                <h2 className="title revealOnScroll">Mission</h2>
                <h5 className="description" style={{color:"#34495e",fontWeight:400}}>
                To provide innovative, creative, and effective integrated brand marketing & public relations solutions which help our clients grow their businesses and realize true Creative and Marketing goals.
                </h5>
            </Col>
            <Col className="text-center" md="4">
                <h2 className="title revealOnScroll">Vision</h2>
                <h5 className="description" style={{color:"#34495e",fontWeight:400}}>          
                Delivering result-oriented branding and marketing programs as well as public relations campaigns that enhance our clients’ awareness, improve their sales and foster their growth.
                </h5>
            </Col>
            <Col className="text-center" md="4">
                <h2 className="title revealOnScroll">About Us</h2>
                <h5 className="description" style={{color:"#34495e",fontWeight:400}} >
                Minimal Holic™ is a creative solutions provider for all kinds of businesses. With a sole mission to help your brand stand out from the crowd, our experienced team will provide you with everything from branding, web content, graphics, app UI/UX, copywriting, creative content to social media management and digital marketing.
                </h5>
            </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
  
  export default AboutUs;