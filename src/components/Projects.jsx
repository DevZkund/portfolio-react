import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
    
    return (
    <section id="projects" className="section">
      <Container className="text-center" style={styles.projectCont}>
        <div style={styles.txtService}>
          <p style={styles.upperText}>Projects</p>
          <p style={styles.lowerText}>Projects</p>
        </div>
        <Container>
          <Row>
            <Col style={styles.projectCard}>
              <img src="Images/analysis.png" alt="Web designer" style={styles.projectImage} />
              <br />
              <span>Wallpaper App</span>
            </Col>
            <Col style={styles.projectCard}>
              <img src="Images/analysis.png" alt="Web designer" style={styles.projectImage} />
              <br />
              <span>Notebook</span>
            </Col>
            <Col  style={styles.projectCard}>
              <img src="Images/analysis.png" alt="Web designer" style={styles.projectImage} />
              <br />
              <span>Portfolio</span>
            </Col>
          </Row>
          <Row>
            <Col style={styles.projectCard}>
              <img src="Images/analysis.png" alt="Web designer" style={styles.projectImage} />
              <br />
              <span>Quiz App</span>
            </Col>
            <Col style={styles.projectCard}>
              <img src="Images/analysis.png" alt="Web designer" style={styles.projectImage} />
              <br />
              <span>Payxo</span>
            </Col>
            <Col style={styles.projectCard}>
              <img src="Images/analysis.png" alt="Web designer" style={styles.projectImage} />
              <br />
              <span>Printy</span>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Projects;

      const styles = {
        txtService: {
            position: "relative"
        },
        lowerText: {
            position: 'absolute',
            fontSize: '3.5em',
            top: 0,
            left: '41%',
            margin: 0,
            color: 'white'
          },          
          upperText: {
            fontSize: '5.2em',
            position: 'relative',
            marginTop: '0px'
          },
        projectCont: {
            marginTop: '5em',
          overflow: 'hidden'
        },
        projectCard: {
          overflow: 'hidden',
          height: 'auto',
          margin: '0.8em',
          padding: '1.5em 1.6em',
          display: 'flex',
          color: 'white',
          fontSize: '1.0em',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.055)',
          borderRadius: '20px'
        },
        projectImage: {
          height: '4em',
          marginTop: '0.8em'
        }
      };