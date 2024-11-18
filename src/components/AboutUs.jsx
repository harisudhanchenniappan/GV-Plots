import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container id="about" className="my-5" style={{ backgroundColor: '#f4f4f4', padding: '50px 0', borderRadius: '8px' }}>
      <Row>
        <Col>
          <h2 className="text-center mb-4" style={{ color: '#0056b3', fontSize: '36px' }}>About GV Plots and Homes</h2>
          <ul style={{ fontSize: '18px', lineHeight: '1.6' }}>
            <li><strong>GV Plots and Homes</strong> is a leading real estate company based in Erode, Tamil Nadu. We are dedicated to providing our clients with high-quality residential plots, homes, and farmhouses, helping them turn their property dreams into reality.</li>
            <li>Our mission is to offer personalized services, ensuring that every client gets the best value for their investment. We specialize in offering prime residential properties in top locations, backed by professional guidance and transparency.</li>
            <li>Our services include not only buying and selling but also property investment advice and real estate consulting. We offer end-to-end support throughout your property journey, ensuring a smooth and stress-free experience.</li>
            <li>We focus on building long-term relationships with our clients and work towards creating sustainable communities that enhance the quality of life. Whether you are a first-time homebuyer or a seasoned investor, GV Plots and Homes is here to guide you at every step.</li>
            <li>At GV Plots and Homes, we believe in excellence, trust, and commitment. We are more than just a real estate company; we are your partners in creating a future filled with prosperity and happiness. Let us help you find the property that perfectly suits your needs.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
