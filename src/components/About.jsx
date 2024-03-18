import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="section pt-5">
      <Container fluid style={styles.detailsAbout}>
        <Row>
          <Col>
            <div style={styles.ImgAbout}>
              <Image
                className="img-fluid"
                src="Images/about1.png"
                alt="picture"
              />
            </div>
          </Col>
          <Col style={styles.aboutDtlBox}>
            <span style={styles.txtAbout}>About Us</span>
            <br />
            <Container>
              <Row>
                <Col md={4} style={styles.details_title}>
                  <span>Name :</span>
                  <br />
                  <br />
                  <span>DOB :</span>
                  <br />
                  <br />
                  <span>Address :</span>
                  <br />
                  <br />
                  <span>Pin code :</span>
                  <br />
                  <br />
                  <span>Email :</span>
                  <br />
                  <br />
                  <span>Phone :</span>
                  <br />
                  <br />
                </Col>
                <Col md={7} style={styles.details}>
                  <span>Kundan kumar</span>
                  <br />
                  <br />
                  <span>December 22, 2000</span>
                  <br />
                  <br />
                  <span>Bihar, India</span>
                  <br />
                  <br />
                  <span>804428</span>
                  <br />
                  <br />
                  <span>kundankumarcu@gmail.com</span>
                  <br />
                  <br />
                  <span>8083217599</span>
                  <br />
                  <br />
                </Col>
                <Col md={12} className="mt-2" style={styles.proCom}>
                  <span style={{ color: '#ffbd39' }}>9*</span> Project Complete
                </Col>
                <Col md={12} className="mt-2">
                  <a href="Images/Resume.pdf" download>
                    <Button
                      variant="warning"
                      className="rounded-pill" style={styles.btnDownload}
                    >
                      <span>Download cv</span>
                    </Button>
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

const styles = {
 
  aboutBox: {
    backgroundColor: "rgba(255, 255, 255, 0.048)"
  },
  txtAbout: {
    fontSize: "2.5em",
    fontWeight: "800",
    color: "#d8ca06",
    textShadow: "1px 2px rgb(204, 255, 163)"
  },
  ImgAbout: {
    margin: "auto",
    width: "50%"
  },
  ImgAbout_img: {
    overflow: "hidden",
    width: "20em",
    opacity: "0.3"
  },
  aboutDtlBox: {
    overflow: 'hidden',
    marginTop: "60px",
    width: "50%"
  },
  AboutCont: {
    marginTop: "0.5em",
    paddingTop: "1em",
    paddingLeft: "10em"
  },
  details_title: {
    color: "white",
    fontWeight: "700",
    fontSize: "0.8em",
    paddingTop: '2em'
  },
  details: {
    fontSize: "0.8em",
    color: "rgb(240, 222, 166)",
    paddingTop: '2em'
  },
  proCom: {
    fontSize: "0.8em",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.733)"
  },
  btnDownload: {
    width: "10em",
    height: "3em",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: "600",
    marginTop: "1em",
    marginBottom: "3em"
  },
  // detailsAbout: {
  //   backgroundImage: `linear-gradient(
  //       rgba(0, 0, 0, 0.829),
  //       rgba(0, 0, 0, 0.685)
  //     ),
  //     url(Images/about1.png)`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover'
  // }
}
