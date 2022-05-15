import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


export default function NavBar() {
    return (
        <>
            
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Netflix</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favorite">Favorite Movies</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

