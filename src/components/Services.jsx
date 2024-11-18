import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import consulting from '../assets/consulting.jpg';
import farmhouse from '../assets/farmhouse.jpg';
import villa from '../assets/villa.jpg';
import investment from '../assets/investment.jpg';
import plots from '../assets/plots.jpg';

const Services = () => {
  return (
    <Container id="services" className="my-5">
      <h2 className="text-center mb-4" style={{ color: '#0056b3' }}>Our Services</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
            style={{height:'300px'}}
              variant="top"
              src={plots} // Image for Residential Plots
              alt="Residential Plots"
            />
            <Card.Body>
              <Card.Title>Residential Plots</Card.Title>
              <Card.Text>
                We specialize in providing prime residential plots in the most sought-after locations of Erode and surrounding areas. Our plots are strategically located with easy access to major highways, schools, hospitals, and markets. With GV Plots and Homes, you can be assured of a sound investment in a growing neighborhood.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
            style={{height:'300px'}}
              variant="top"
              src={villa} // Image for Villas and Homes
              alt="Villas and Homes"
            />
            <Card.Body>
              <Card.Title>Villas and Homes</Card.Title>
              <Card.Text>
                GV Plots and Homes offers beautifully designed villas and houses tailored to meet your family's needs. We ensure that each property is built with the finest materials, offering modern amenities such as spacious living areas, landscaped gardens, and eco-friendly features. Whether you're looking for a cozy home or a luxurious villa, we have options for every budget.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
            style={{height:'300px'}}
              variant="top"
              src={farmhouse} // Image for Farmhouses
              alt="Farmhouses"
            />
            <Card.Body>
              <Card.Title>Farmhouses</Card.Title>
              <Card.Text>
                For those seeking a tranquil escape, our farmhouses offer a perfect blend of luxury and nature. Located on the outskirts of Erode, these properties provide you with a peaceful environment while still being close to the city. Ideal for families and retirees, our farmhouses come with lush green surroundings, outdoor spaces, and all the modern comforts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* New Service 1: Property Investment Advice */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
            style={{height:'300px'}}
              variant="top"
              src={investment} // Image for Property Investment Advice
              alt="Property Investment Advice"
            />
            <Card.Body>
              <Card.Title>Property Investment Advice</Card.Title>
              <Card.Text>
                At GV Plots and Homes, we offer expert advice on property investment, helping you make the right decisions based on current market trends. Our team has extensive knowledge of the local real estate market and can guide you in choosing high-growth areas, understanding market risks, and maximizing returns.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* New Service 2: Real Estate Consulting */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
            style={{height:'300px'}}
              variant="top"
              src={consulting} // Image for Real Estate Consulting
              alt="Real Estate Consulting"
            />
            <Card.Body>
              <Card.Title>Real Estate Consulting</Card.Title>
              <Card.Text>
                Our real estate consulting services provide clients with comprehensive guidance throughout their property journey. From identifying the best properties to negotiating the right deals, we offer personalized strategies and solutions to help you achieve your real estate goals. Our team ensures that your interests are safeguarded at every stage.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
