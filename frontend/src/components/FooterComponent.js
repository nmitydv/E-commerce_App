import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
          <Col className="bg-dark text-white text-center py-5">
            Copyright &copy; Best Online Shop
            <p>Made by Namit Yadav ❤️</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
