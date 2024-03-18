import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Service() {
    return (
        <section id="service" className="section">
            <Container className="text-center" style={styles.ServiceCont}>
                <div style={styles.txtService}>
                    <p style={styles.upperText}>Services</p>
                    <p style={styles.lowerText}>Services</p>
                </div>

                <Container fluid>
                    <Row>
                        <Col style={styles.serviceCard}>
                            <Image style={styles.serviceCardImg} src="Images/android.png" alt="Flutter developer" />
                            <br />
                            <span>Flutter Developer</span>
                        </Col>
                        <Col style={styles.serviceCard}>
                            <Image style={styles.serviceCardImg} src="Images/web1.png" alt="Web developer" />
                            <br />
                            <span>Web Developer</span>
                        </Col>
                        <Col style={styles.serviceCard}>
                            <Image style={styles.serviceCardImg} src="Images/analysis.png" alt="Web designer" />
                            <br />
                            <span>Web Designer</span>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>

    )
}

export default Service


const styles = {
    ServiceCont: {
        overflow: 'hidden',
        paddingTop: "10em",
        marginBottom: "10em",
        width: "100%"
    },
    txtService: {
        position: "relative"
    },
    lowerText: {
        position: "absolute",
        fontSize: "3.5em",
        top: "0",
        left: "41%",
        margin: "0",
        color: "white"
    },
    upperText: {
        fontSize: "5.2em",
        position: "relative",
        marginTop: "0px"
    },
    serviceCard: {
        overflow: "hidden",
        height: "auto",
        margin: "0.8em",
        padding: "1.5em 1.6em",
        display: "flex",
        color: "white",
        fontSize: "1.0em",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.055)",
        borderRadius: "20px"
    },
    serviceCardImg: {
        height: "4em",
        marginTop: "0.8em"
    }
};