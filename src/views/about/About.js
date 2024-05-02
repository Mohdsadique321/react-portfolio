import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                <br />Web Developer with expertise of React.js, Redux, Cloud Firestore, HTML and CSS. currently learning React Native for Mobile Application.
                <br /><br />
                I am passionate programmer and a learner, born and brought up in Delhi.Currently, I am enrolled in Full Stack Web Dev - Web Development Program "Conducted by Alma Better".
                <br />
                {/* <br />
                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br /> */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://docs.google.com/document/d/1ELmRIO32lRQI7l_d4xbG4Gx2lKLB0d3V/edit?usp=sharing&ouid=115017573476899482632&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  {/* <div>
                    <a href="https://medium.com/@adibaabid" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-secondary">
                        Medium
                      </Button>
                    </a>
                  </div> */}
                  <div>
                    <a href="https://github.com/Mohdsadique321" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="www.linkedin.com/in/mohd-sadique-12b7051b4" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;