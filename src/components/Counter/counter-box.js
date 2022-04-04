import React, { useState } from 'react';
import { Col } from "reactstrap";
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


function CounterBox ({counters}) {
        return (
            <React.Fragment>
                {
                    counters.map((counters, key) =>
                    <Col sm="4" key={key} className="facts">
                    <i className={counters.icon}></i> 
                    {
                        counters.isPostfix === true ?
                            <h1> <span className="counter"><CountUp end={counters.end} duration={8} >{({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
     
                            )</CountUp></span> {counters.postfix}</h1>
                        :   <h1 className="counter"><CountUp end={counters.end} duration={12} >{({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
 
                        )</CountUp></h1>
                    }
                    <h5>{counters.title}</h5>
                    
                </Col>
                    )
                }
            </React.Fragment>
        );
    }
export default CounterBox;