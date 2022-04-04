import React, { Component } from 'react';
import { Col } from "reactstrap";

const HoverableDiv = React.memo(({ handleMouseOver, handleMouseOut, p , t }) => {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <i className={p}></i> <h4>{t}</h4>
      </div>
    );
  });
  
  const HoverText = ({m}) => {
    return (
      <div>
        <p>{m}</p>
      </div>
    );
};

class ServiceBox extends Component {
    constructor(props) {
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.state = {
          isHovering: false
        };
      }
    
      handleMouseOver() {
        this.setState(() => ({
          isHovering: true
        }));
      }
    
      handleMouseOut() {
        this.setState(() => ({
          isHovering: false
        }));
      }
    render() {
        return (
            <React.Fragment>
                {
                    this.props.services.map((service, key) =>
                    <Col key={key}>
                        <div className="services-box">
                        <HoverableDiv handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} p={service.icon} t={service.title}/>
                            {this.state.isHovering && <HoverText m = {service.desc}/>}
                        </div>
                    </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ServiceBox;