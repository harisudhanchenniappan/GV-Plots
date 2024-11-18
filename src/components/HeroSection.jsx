import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import tamilnagar from '../assets/tamilnagar.png';
import rajaraninagar from '../assets/rajaraninagar.png';
import consulting from '../assets/consulting.jpg';
import farmhouse from '../assets/farmhouse.jpg';
import villa from '../assets/villa.jpg';
import investment from '../assets/investment.jpg';
import plots from '../assets/plots.jpg';


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
            src={consulting}
            alt="First slide"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={villa}
            alt="Second slide"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={investment}
            alt="Third slide"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={plots}
            alt="Fourth slide"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={farmhouse}
            alt="Fifth slide"
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
