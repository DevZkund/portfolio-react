import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button, Image } from "react-bootstrap";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="section">
        <Container className="mt-5">
          <Row className="justify-content-md-center">
            <Col xs lg="6" className="border pt-5" style={Styles.col}>
              <h6 style={{ color: "#ffbd39", marginBottom: 20 }}>HELLO!</h6>
              <span id="info" style={Styles.info}>
                I'm a
              </span>
              <span id="proName" style={Styles.proName}>
                {" "}
                Flutter
              </span>
              <br />
              <span id="info" style={Styles.info}>
                Developer
              </span>{" "}
              <br />
              <br className="clsBr" />
              <span id="prof" style={Styles.prof}>
                A <b style={{ color: "#ffbd39d2" }}>freelancer</b>
                <br className="clsBr" />
                App Developer
              </span>
              <br />
              <Button
                variant="warning"
                className="rounded-pill btnCustom"
                style={Styles.btnCustom}
              >
                <span>Hire me</span>
              </Button>
              <Button
                variant="light"
                className="rounded-pill btnCustom"
                style={Styles.btnCustom}
              >
                <span>My works</span>
              </Button>
            </Col>

            <Col xs lg="5" className="border ">
              <Image
                className="img-fluid" style={Styles.profileImg}
                src="Images/about.png"
                alt="picture"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Portfolio;

const Styles = {
  info: {
    fontSize: "2.5em",
    fontWeight: 800,
    lineHeight: "1.2em",
    color: "white",
  },
  proName: {
    fontSize: "2.5em",
    fontWeight: 800,
    lineHeight: "1.2em",
    color: "#ffbd39",
  },
  prof: {
    fontSize: "1.2em",
    letterSpacing: "0.1em",
    color: "rgba(255, 255, 255, 0.733)",
  },
  btnCustom: {
    width: "16em",
    height: "4em",
    marginLeft: "0.3em",
    marginTop: "3.8em",
    textAlign: "center",
    fontSize: "0.6em",
    fontWeight: 600,
  },
  profileImg: {
    width: "14em",
    overflow: 'hidden'
  },
};
