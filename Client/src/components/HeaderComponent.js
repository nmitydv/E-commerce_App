import { Navbar, Nav, Container, NavDropdown, InputGroup, Badge, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand href="#home">MARTPIN</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup>
                            <DropdownButton id="dropdown-basic-button" title="All">
                                <Dropdown.Item>Electronics</Dropdown.Item>
                                <Dropdown.Item>Cars</Dropdown.Item>
                                <Dropdown.Item>Books</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control type="text" placeholder="Search" />
                            <Button variant="warning">
                                <i class="bi bi-search"></i>
                            </Button>
                        </InputGroup>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/admin/orders">
                            <Nav.Link>
                                <span className="me-1">Admin</span>
                                <span className="position-absolute top-1 start-10 traslate-middle p-1 bg-danger border border-light rounded-circle"></span>
                            </Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Namit Yadav" id="collapsible-nav-dropdown" className="ml-10">
                            <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">My orders</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/user" as={Link} to="/user">My Profile</NavDropdown.Item>
                            <NavDropdown.Item >LogOut</NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/login">
                            <Nav.Link>LogIn
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link>SingUp
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <i className="bi bi-cart4"></i>
                                <span className="ms-2">Shoping Cart</span>
                                <Badge pill bg="danger">
                                    2
                                </Badge>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default HeaderComponent;