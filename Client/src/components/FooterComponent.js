import { Container, Row, Col } from 'react-bootstrap';
import '../index.js';
const FooterComponent = () => {

   return (
      <footer className='mt-5'>
         <Container fluid>
            <Row>
               <Col className='bg-dark text-white text-center py-5'>Copyright &copy; Best Online Shop MARTPIN</Col>
            </Row>
         </Container>
      </footer>
   )

}
export default FooterComponent;