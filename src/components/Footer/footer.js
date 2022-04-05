import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Logo
import logo from "../../assets/images/logo.png";

//Import Footer link
import FooterLinks from "./footer-links";
import LinkSection from "./link-section";

class Footer extends Component {
    state = {
        links2 : [
            { link : "#", title : "Creative Graphics" },
            { link : "#", title : "Creative Content" },
            { link : "#", title : "Logo & Branding" },
            { link : "#", title : "Social Media Management" },
            { link : "#", title : "UI/UX Design" },
        ],
        links1 : [
            { link : "#", title : "About Us" },
            { link : "#", title : "Help & Support" },
            { link : "#", title : "Privacy Policy" },
            { link : "#", title : "Terms & Conditions" },
            { link : "#", title : "FAQ" },
        ],
        socials : [
            { class : "bg-dribbble", icon : "ti-instagram", link : "https://www.instagram.com/minimalholic.in/" },
            { class : "bg-linkedin", icon : "ti-linkedin", link : "https://www.linkedin.com/company/minimalholic/" },
            { class : "bg-twitter", icon : "ti-twitter-alt", link : "https://twitter.com/minimaloholic" },
            { class : "bg-googleplus", icon : "ti-pinterest", link : "https://www.pinterest.com/minimalholic/?invite_code=bb52c65dfb084191a53ebf008a461326&sender=641903890547385622" },
            { class : "bg-facebook", icon : "ti-facebook", link : "https://www.behance.net/minimalholic_graphic" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <footer className="bg-lightgray footer">
                    <Container>
                        <Row>

                            <Col md="4" sm="12">
                                <img src={logo} alt="logo" height="50" />
                                <p className="margin-t-20">Elegance lies within the impact, the difference between how much is said and how much is heard.</p>

                                <ul className="list-inline social">
                                    {
                                        this.state.socials.map((social, key) =>
                                            <li key={key} className="list-inline-item">
                                                <a href={social.link} target={'_blank'} className={social.class + " mr-1"}><i className={social.icon}></i></a>
                                            </li>
                                        )
                                    }
                                </ul>
                            </Col>

                            <Col md={{size:3, offset : 2}} sm="6">
                                <LinkSection title="Useful Links" links={this.state.links1} />
                            </Col>

                            <Col md="3" sm="6">
                            <LinkSection title="Solutions" links={this.state.links2} />
                            </Col>

                        </Row>

                    </Container>
                </footer>
                {/* Render footer links */}
                <FooterLinks/>
            </React.Fragment>
        );
    }
}

export default Footer;