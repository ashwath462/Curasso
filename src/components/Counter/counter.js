import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import VisibilitySensor from 'react-visibility-sensor';
import CountUp,{ startAnimation } from 'react-countup';


//Import Blog Box
import CounterBox from "./counter-box";

class Counter extends Component {
    state = {
        counters : [
            { icon : "ti-timer", end : 10, postfix : "k+", isPostfix : true, title : "Working Hours" },
            { icon : "ti-briefcase", end : 548, title : "Completed Projects" },
            { icon : "ti-user", end : 89, title : "No. of Clients" },
        ]
    }
    constructor(props) {
        super(props);
        this.onVisibilityChange = this.onVisibilityChange.bind(this); // Bind for appropriate 'this' context
      }
    
      onVisibilityChange(isVisible) {
        if (isVisible) {
          startAnimation(this.CountUp);
        }
      }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-lightgray funfacts" style={{backgroundColor:"#f5f6fa"}}>
                    <Container>
                        
                        <Row className="text-center">
                            <CounterBox counters={this.state.counters}/>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Counter;