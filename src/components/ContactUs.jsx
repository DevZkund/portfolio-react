import React from 'react'
import { Container, Row, Col, Form, Image } from 'react-bootstrap';

function ContactUs() {
  return (
    <section id="contactUs" className="section">
      <Container className="text-center" style={styles.contactCont} >
        <div style={styles.txtServiceContact}>
          <p style={styles.upperTextContact}>Contacts</p>
          <p style={styles.lowerTextContact}>Contacts</p>
        </div>
        <Container className="mt-5">
          <Row>
            <Col style={styles.addressCont}>
              <div style={styles.circle}>
                <Image style={styles.circleImg} src="Images/address.png" alt="Address" />
              </div>
              <span style={styles.addressTitle}>ADDRESS</span>
              <span style={styles.addressDetails}>NH-139 Bihar India.</span>
            </Col>
            <Col style={styles.addressCont} >
              <div style={styles.circle}>
                <Image style={styles.circleImg} src="Images/phone.png" alt="Phone" />
              </div>
              <span style={styles.addressTitle}>CONTACTS</span>
              <span style={styles.addressDetails}>+91 808-321-7599</span>
            </Col>
            <Col style={styles.addressCont} >
              <div style={styles.circle}>
                <Image style={styles.circleImg} src="Images/email.png" alt="Email" />
              </div>
              <span style={styles.addressTitle}>EMAIL</span>
              <span style={styles.addressDetails}>kundankumarcu@gmail.com</span>
            </Col>
            <Col style={styles.addressCont} >
              <div style={styles.circle}>
                <Image style={styles.circleImg} src="Images/internet.png" alt="Web designer" />
              </div>
              <span style={styles.addressTitle}>WEBSITE</span>
              <span style={styles.addressDetails}>www.devzkund.in</span>
            </Col>
          </Row>
        </Container>
        <Container>
          <Form style={styles.contactBox} id="contactForm">
            <Form.Control style={styles.textFields} type="text" id="name" name="name" placeholder="Name" required />
            <Form.Control style={styles.textFields} type="email" id="email" name="email" placeholder="Email" required />
            <Form.Control style={styles.textFields} type="text" id="subject" name="subject" placeholder="Subject" required />
            <Form.Control style={styles.message}  as="textarea" id="message" name="message" placeholder="Message" rows="6" required />
            <input style={styles.submitButton}  className="btn btn-warning rounded-pill" id="submit" type="submit" value="Submit" />
          </Form>
        </Container>
      </Container>
    </section>
  )
}

export default ContactUs


const styles ={
    contactCont: {
        overflow: 'hidden',
      paddingTop: '3em',
      width: '100%'
    },
    txtServiceContact: {
      position: 'relative'
    },
    lowerTextContact: {
      position: 'absolute',
      fontSize: '3.2em',
      top: 0,
      left: '41.5%',
      margin: 0,
      color: 'white'
    },
    upperTextContact: {
      fontSize: '5.2em',
      position: 'relative',
      marginTop: '0px'
    },
    circle: {
      display: 'flex',
      width: '1.5em',
      height: '1em',
      marginBottom: '0.8em',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.005)',
      boxShadow: '2px 2px 2px #ffbd39'
    },
    addressCont: {
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    addressTitle: {
      display: 'none'
    },
    addressDetails: {
      marginLeft: '1.6em',
      fontSize: '0.8em',
      color: 'rgb(240, 222, 166)'
    },
    circleImg: {
      padding: '0.3em',
      overflow: 'hidden'
    },
    contactBox: {
      margin: 'auto',
      marginTop: '5%',
      width: '50%'
    },
    textFields: {
      backgroundColor: 'transparent',
      color: '#ffbd397c',
      borderRadius: '10px',
      boxShadow: '0px 0px 3px',
      borderColor: 'transparent',
      marginBottom: '0.5em',
      paddingBottom: '0.7em'
    },
    message: {
      backgroundColor: 'transparent',
      color: '#ffbd397c',
      borderRadius: '10px',
      boxShadow: '0px 0px 3px',
      borderColor: 'transparent',
      margin: '5px',
      padding: '8'
    },
    submitButton: {
      width: '10em',
      height: '3em',
      textAlign: 'center',
      fontSize: '12px',
      fontWeight: 600,
      marginTop: '1em',
      marginBottom: '3em'
    }
  };