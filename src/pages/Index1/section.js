import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Image
// import img1 from "../../assets/images/bg-home.jpg";

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            height:window.innerHeight
        }
        this.setFullScreen.bind(this);
        this.callModal.bind(this);
    }

    callModal = () => {
        this.refs.child.openModal();
    }

    setFullScreen = () => {
        var topSectionEl = document.getElementById('home-fullscreen');
        if(topSectionEl.clientHeight>0) {
            var windowHeight = window.innerHeight;
            this.setState({ 
                height: windowHeight
            });
        }
    }

    componentDidMount(){
        this.setFullScreen();
        window.addEventListener("resize", this.setFullScreen);
    }

    componentWillUnmount(){
        window.addEventListener("resize", this.setFullScreen);
    }
    
    render() {
        return (
            <React.Fragment>
            <section className="home bg-home" id="home">

                <Container>
                    <Row>
                        <Col md="12">
                            <div className="home-fullscreen" id="home-fullscreen" style={{height : this.state.height+"px"}}>
                                <div className="full-screen">
                                    <div className="home-wrapper home-wrapper-alt">
                                        <Row>
                                            <Col md="10">
                                                <h1><span className="font-2" style={{color: "red"}}>WE BOOST YOUR BUSINESS </span><br/>WITH A BURST OF CREATIVITY</h1>
                                                <h4>LET’S KNOW THE SECRET!</h4> <Link onClick={this.callModal} to="#" className="video-btn btn popup-video"><i className="glyphicon glyphicon-play"></i>Watch Video</Link>
                                                {/* <Link to="" className="btn btn-custom">Learn more</Link> */}
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* Render ModalSection Component for Modal */}
                    <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Section;