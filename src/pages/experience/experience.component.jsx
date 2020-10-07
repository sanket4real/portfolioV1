import React from 'react';
import Tilt from 'react-tilt';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Pragiti from '../../assets/img/experience/pragiti.png';


import './experience.style.css';

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
            <Container>
                <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Pragiti} alt="Pragiti logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">jr. UI developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <br />
                    <strong>Role:</strong> ui engineer
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> with full customizability option across web application. Debugging existing code to solve problems. Also worked in <strong>Shopify stores</strong> providing  maintenance, and adding new features.
                    <br />
                    <strong>Technology:</strong> HTML5, CSS, jQuery, JavaScript
                    <br />
                    <strong>Duration:</strong> december 2019 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
            </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience;