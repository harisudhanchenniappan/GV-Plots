import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
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
      */