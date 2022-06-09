import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/team/gouravsir.jfif";
import team2 from "../../assets/images/team/ps.jfif";
import team3 from "../../assets/images/team/akashsir.jfif";
import team4 from "../../assets/images/team/rehan.jfif";
import team5 from "../../assets/images/team/mohit.png";
import team6 from "../../assets/images/team/ashwath.jpg";
class OurTeam extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "Gourav Thadhani",
        image: team1,
        post: "Co-founder",
        // desc:
          // "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-googleplus", icon: "ti-email", link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gouravthadhani20@gmail.com" },
          { class: "bg-dribbble", icon: "ti-instagram", link: "https://www.instagram.com/gourav_thadhani/" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "https://www.linkedin.com/in/gourav-thadhani-72a6ba115/" },
        ],
      },
      {
        id: 2,
        name: "Pranjal Sahu",
        image: team2,
        post: "Co-founder",
        // desc:
          // "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-googleplus", icon: "ti-email", link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pranjalsahu2603@gmail.com" },
          { class: "bg-dribbble", icon: "ti-instagram", link: "https://www.instagram.com/_apostrophe_s/" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "https://www.linkedin.com/in/pranjal-sahu-8a70641b0/" },
        ],
      },
      {
        id: 3,
        name: "Akash Chakrwarti",
        image: team3,
        post: "Co-founder",
        // desc:
          // "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-googleplus", icon: "ti-email", link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akashchakrawarti2000@gmail.com" },
          { class: "bg-dribbble", icon: "ti-instagram", link: "https://www.instagram.com/ashhuu._/" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "https://www.linkedin.com/in/akash-chakrawarti/" },
        ],
      },
      {
        id: 4,
        name: "Rehan Mansoori",
        image: team4,
        post: "Marketing & Sales Executive",
        // desc:
          // "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-googleplus", icon: "ti-email", link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rhnrehan31@gmail.com" },
          { class: "bg-dribbble", icon: "ti-instagram", link: "https://www.instagram.com/saving_priv_rehan/" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "https://www.linkedin.com/in/rehanmansoori/" },
        ],
      },
      {
        id: 5,
        name: "Mohit Soneja",
        image: team5,
        post: "Creative Director",
        // desc:
          // "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-googleplus", icon: "ti-email", link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mohit98775@gmail.com" },
          { class: "bg-dribbble", icon: "ti-instagram", link: "https://www.instagram.com/mohitsoneja_/" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "https://www.linkedin.com/in/mohit-soneja/" },
        ],
      },
      {
        id: 6,
        name: "Ashwath Arora",
        image: team6,
        post: "Technical Executive",
        // desc:
          // "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-googleplus", icon: "ti-email", link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ashwatharora462@gmail.com" },
          { class: "bg-dribbble", icon: "ti-instagram", link: "https://www.instagram.com/ashwath.arora" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "https://www.linkedin.com/in/ashwath-arora-a14aa1222/" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-lightgray" id="team">
          <Container>
            <SectionTitle title3="Our" title1="Creative" title2="Team" />

            <Row>
              <TeamBox members={this.state.members} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default OurTeam;
