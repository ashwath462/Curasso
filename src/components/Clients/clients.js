import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import Images
import img1 from "../../assets/images/clients/dc.png";
import img2 from "../../assets/images/clients/foe.png";
import img3 from "../../assets/images/clients/hubilo.png";
import img4 from "../../assets/images/clients/afo.png";
import img5 from "../../assets/images/clients/criada.png";
import img6 from "../../assets/images/clients/emerging.png";
import img7 from "../../assets/images/clients/jharkhand.png";
import img8 from "../../assets/images/clients/isha.png";
import img9 from "../../assets/images/clients/poshaq.png";
import img10 from "../../assets/images/clients/srs.png";
import img11 from "../../assets/images/clients/walkinedu.png";
import img12 from "../../assets/images/clients/dasmesh.png";
import user from "../../assets/images/user-1.jpg";

class Clients extends Component {
    state = {
        clients : [
            { id : 1, img : img1 },
            { id : 2, img : img2 },
            { id : 3, img : img3 },
            { id : 4, img : img4 },
            { id : 5, img : img5 },
            { id : 6, img : img6 },
            { id : 7, img : img7 },
            { id : 8, img : img8 },
            { id : 9, img : img9 },
            { id : 10, img : img10 },
            { id : 11, img : img11 },
            { id : 12, img : img12 }
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },            
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    }
    render() {
        return (
            <React.Fragment>
            <section className="section bg-testimonials">

                <Container>
                    <Row>
                        <Col sm={{size:10, offset :1 }} md={{size:8, offset : 2}}>

                            <div className="testimonial-box text-center">
                                <h1><i className="ti-quote-left"></i></h1>
                                <h4> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</h4>
                                <img src={user} className="testi-user rounded-circle" alt="testimonials-user"/>
                                <p>- Landing page User</p>
                                <p>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                </p>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                        <OwlCarousel
                                        className="owl-theme client-images text-center"
                                        id="clients-slider"
                                        items={6}
                                        loop={false}
                                        margin={4}
                                        nav={false}
                                        dots={false}
                                        responsive = {this.state.responsive}
                                    >
                                        {
                                            this.state.clients.map((client, key) =>
                                                <div className="item" key={key} style={{width : 105}}>
                                                    <div className="imgin">
                                                        <img src={client.img} alt="logo-img"/>
                                                    </div>
                                                </div>
                                            )
                                        }
                                </OwlCarousel> 
                        </Col>
                    </Row>

                    </Container>

                </section>
            </React.Fragment>
        );
    }
}

export default Clients;