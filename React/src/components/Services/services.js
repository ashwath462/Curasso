import React, { Component} from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

export default class Services extends Component {
    state = {
        services1 : [
           { title : "Creative Content", icon : "ti-ruler-pencil", desc : "Content is the King of Marketing and Creating the perfect Content Strategy for your Brand requires a team of experts who can give a professional look to your brand. We have crafted Content for over 10+ Brands with our personal touch of Creativity helping them boost their business growth." },
           { title : "Creative Graphics", icon : "ti-video-clapper", desc : "Great design tells a story. A good creative design helps in creating a strong impression, building a brand identity, convey key information and establish customer trust. We at Minimal Holic™ create unique and flawless designs which have helped our clients to narrate their brand stories to millions around the globe." },
           { title : "UI/UX Design", icon : "ti-light-bulb", desc : "A mobile application is the most effective way to reach and retain a specific audience. And to make your app successful, you must provide an amazing user interface and user experience. We understand the needs of your target audience and their market preference and design the perfect app for your brand." },
        ],   
        services2 : [
            { title : "Website Development", icon : "ti-harddrives", desc : "Website is an essential tool for your business to establish brand credibility and build trust among your customers. We help our clients by using perfect SEO and Compelling Designs, to reach their target audience with ease." },
            { title : "Social Media Management", icon : "ti-bar-chart-alt", desc : "Social media is the most powerful tool to grow any business digitally at a minimal cost. We launch impactful Social Media Campaigns along with strategic posting to reach the maximum number of potential customers for your business." },
            { title : "Friendly Support", icon : "ti-headphone-alt", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
         ],
        services3 : [
            { title : "Video Editing", icon : "ti-ruler-alt-2", desc : "Video content increases brand awareness and recognition, it creates customer excitement about a product or service, and allows your brand to stand out from your competitors in a unique and engaging way. We create lively and impactful videos to communicate your brand presence." },
            { title : "Logo & Branding", icon : "ti-paint-roller", desc : "A logo is what differentiates your brand from it's competition. It makes a strong first impression and is the foundation of your brand's identity. We create premium quality logos with high recall branding colors, fonts and taglines to foster the target audience's loyalty for your brand." },
            { title : "Creative Idea", icon : "ti-notepad", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
        ],     
    }
    render() {
        return (
            <React.Fragment>
    <section className={this.props.isBgWhite === true ? "section" : "section bg-lightgray"} id="services">
        <Container>
            <SectionTitle title1="Best" title2="Services" />          

            <Row>
                <ServiceBox services={this.state.services1} />                
            </Row>      

            <Row>
                <ServiceBox services={this.state.services2} />                
            </Row> 

            <Row>
                <ServiceBox services={this.state.services3} />                
            </Row>       

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}