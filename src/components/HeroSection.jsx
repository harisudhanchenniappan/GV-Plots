import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import tamilnagar from '../assets/tamilnagar.png';
import rajaraninagar from '../assets/rajaraninagar.png';
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Handle the slide change
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 5); // Change to the next image after 5 seconds
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <Container fluid className="text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Row>
          <Col>
            <h1>Welcome to GV Plots and Homes</h1>
            <h4>Your trusted partner in real estate in Erode, Tamil Nadu.</h4>
            
          </Col>
        </Row>
      </Container>

      {/* Image Slider */}
      <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: '100%', margin: '30px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={a1}
            alt="First slide"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={a3}
            alt="Second slide"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={a2}
            alt="Third slide"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={a4}
            alt="Fourth slide"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
       
      </Carousel>

      {/* Hero Content Below the Image Slider */}
      

      {/* Current Projects Section */}
      <Container className="my-5" id="current-projects">
        <h2 className="text-center mb-4">Our Current Projects</h2>
        <Row>
          <Col md={6} className="mb-4">
            <img
            style={{height:'500px'}}
              src={tamilnagar}
              alt="Project 1"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6} className="mb-4">
            <img
             style={{height:'500px'}}
              src={rajaraninagar}
              alt="Project 2"
              className="img-fluid rounded"
            />
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
