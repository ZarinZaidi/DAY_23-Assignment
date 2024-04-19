import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Image, Modal } from 'react-bootstrap';

// Header component
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"><img src='logo.png' style={{ width: '25px' }} /></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

// Footer component
const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Navbar.Brand href="#home"><img src='logo.png' style={{ width: '25px' }} /></Navbar.Brand>
    </Navbar>
  );
};

// Template for Card Component
const CardComponent = ({ title, description, imageUrl }) => {
  // Use state and props to manage data and update component UI.
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" onClick={handleShow}>View Details</Button>
            {/* Add event handlers to components (e.g., onClick for buttons). */}
          </Card.Body>
        </Card>
      </Col>

      {/* Close the Card Component state */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imageUrl} style={{ width: '465px' }} />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Single Page Rendering
const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1>Welcome to My Gallery</h1>
          </Col>
        </Row>
        <Row>
          <CardComponent
            title="Card 1"
            description="Integer bibendum eros est, et dictum ligula rhoncus at. In quis leo efficitur, dignissim erat id, eleifend turpis. Phasellus at."
            imageUrl="placeholder2.jpg"
          />
          <CardComponent
            title="Card 2"
            description="Ut sollicitudin, sapien at aliquet faucibus, purus mi accumsan elit, a dictum eros justo nec ipsum."
            imageUrl="placeholder1.jpg"
          />
          <CardComponent
            title="Card 3"
            description="Nulla non neque arcu. Pellentesque finibus vulputate condimentum. Sed congue lorem felis, vel mollis lacus dignissim vitae. Etiam mollis euismod."
            imageUrl="placeholder3.jpg"
          />
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;