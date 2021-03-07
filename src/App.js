import React from 'react';
import './App.css';
import { Accordion, Badge, Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudSunRain, faGlobe, faHome, faMap, faMapMarker, faMapMarkerAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import FontAwesome from 'react-fontawesome';

const App = () => (
 <>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="1.jpg"
            alt="First slide"
            height="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="2.jpg"
            alt="Second slide"
            height="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="3.jpg"
            alt="Third slide"
            height="500"
            />
        </Carousel.Item>
    </Carousel>
    <Card style ={ { backgroundImage: "url('doodle.png')" } }>
  <Card.Body className="justify-content-center">
    <Card.Title className="pl-3 pr-2 pt-3 mb-0">
    
        <Row>
        <Col md={9} xs={7} style={{color: '#0c6823'}}><b>SURAJ KUMAR</b></Col>
        <Col md={3} xs={5} style={{color: '#0c6823'}}>&#8377; 150 per session</Col>
      </Row>
      <br/>
      <Row>
        <Col md={9} xs={7} ><span style={{color: '#0c6823', fontSize: '2rem'}}><b>5+</b></span> years of Experience</Col>
        <Col md={3} xs={5} ><FontAwesomeIcon icon={faUserCheck} size="lg" style={{color: '#0c6823'}}/> Certified</Col>
      </Row>
      <hr></hr>
    </Card.Title>
    <Card.Text className="pl-3 pr-3 pt-3 mb-0">
      <h3>About me</h3>
      <p className="pb-3">I am a professional personal fitness trainer and I am here to make you workout at home. 
      You know that everyone is busy these days and no one has time for his body and health. That is why we have
      come to get you workouts from your home. So please contact us.</p>
      <hr></hr>
      <h3>My Expertise</h3>
      <Badge variant="primary" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-dark border border-warning p-2 m-1">Gym</Badge>{' '}
      <Badge variant="warning" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-dark border border-warning p-2 m-1">Yoga</Badge>{' '}
      <Badge variant="warning" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-dark border border-warning p-2 m-1">Boxing</Badge>{' '}
      <Badge variant="warning" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-dark border border-warning p-2 m-1">Taekwondo</Badge>{' '}
      <Badge variant="warning" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-dark border border-warning p-2 m-1">Sports Trainer</Badge>{' '}
      <hr></hr>
      <h3>Medical Condition Experience</h3>
      <p className="pb-3">Injury | Smoking Addiction | Anxiety | Drinking Addiction | Lung Disease</p>
      <hr></hr>
      <h3>My Location</h3>
      <p className="pb-3"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="text-danger"/> Amritsar, Punjab</p>
      <hr></hr>
      <h3>Modes of Training</h3>
      <ul className="pb-3 pt-3 list-unstyled">
      <li><FontAwesomeIcon icon={faGlobe} size="lg" className="text-primary"/> Online (Google Meet)</li><br></br>
      <li><FontAwesomeIcon icon={faHome} size="lg" className="text-secondary"/> In home</li><br></br>
      <li><FontAwesomeIcon icon={faCloudSunRain} size="lg" className="text-warning"/> Outdoors</li><br></br>
      </ul>
      <hr></hr>
      <h3>1-on-1 Pricing</h3>
      <Card className="text-center mb-3 ">
        <Card.Header style={{backgroundColor: 'grey', color: 'white'}}>STARTER PLAN</Card.Header>
        <Card.Body><p>Buy 5 sessions</p><p>Rs 150 / session</p></Card.Body>
        </Card>
        
        <Card className="text-center mb-3">
        <Card.Header style={{backgroundColor: 'grey', color: 'white'}}>POPULAR PLAN</Card.Header>
        <Card.Body><p>Buy 12 sessions</p><p>Rs 138 / session</p></Card.Body>
        </Card>
     
        <Card className="text-center mb-3">
        <Card.Header style={{backgroundColor: 'grey', color: 'white'}}>BEST VALUE PLAN</Card.Header>
        <Card.Body><p>Buy 24 sessions</p><p>Rs 127 / session</p><p>Save 15 %</p></Card.Body>
        </Card>
      <hr></hr>
      <h3>Availability</h3>
      <Badge variant="success" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-success border border-success p-2 m-1">6:00 AM TO 7:00 AM</Badge>{' '}
      <Badge variant="success" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-success border border-success p-2 m-1">10:30 AM TO 11:30 AM</Badge>{' '}
      <Badge variant="success" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-success border border-success p-2 m-1">11:00 AM TO 12:00 PM</Badge>{' '}
      <Badge variant="success" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-success border border-success p-2 m-1">12:28 PM TO 1:28 PM</Badge>{' '}
      <Badge variant="success" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-success border border-success p-2 m-1">1:00 PM TO 2:00 PM</Badge>{' '}
      <Badge variant="success" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-success border border-success p-2 m-1">2:30 PM TO 3:30 PM</Badge>{' '}
      <hr></hr>
      <h3>Training days</h3>
      <p className="pb-3">Monday | Tuesday | Wednesday | Thursday | Friday | Sunday</p>
      <hr></hr>
      <h3>Languages</h3>
      <ul className="pb-3 list-unstyled">
      <li>Hindi</li>
      <li>English</li>
      <li>Punjabi</li>
      </ul>
      <hr></hr>
      <h3>Educational Qualification</h3>
      <p className="pb-3">B.Sc in Sport and Exercise Science</p> 
      <hr></hr>
      <h3>People I love training with</h3>
      <Badge variant="primary" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-primary border border-primary p-2 m-1">ACTORS</Badge>{' '}
      <Badge variant="primary" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-primary border border-primary p-2 m-1">MEN</Badge>{' '}
      <Badge variant="primary" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-primary border border-primary p-2 m-1">WOMEN</Badge>{' '}
      <Badge variant="primary" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-primary border border-primary p-2 m-1">BEGINNERS</Badge>{' '}
      <Badge variant="primary" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-primary border border-primary p-2 m-1">MODEL</Badge>{' '}
      <Badge variant="primary" style={{backgroundColor: 'transparent', borderRadius: "16px"}} className="text-primary border border-primary p-2 m-1">YOUTH</Badge>{' '}


    </Card.Text>
  </Card.Body>
</Card>
</>
);

export default App;
