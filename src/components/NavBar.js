
import {Navbar,Container,Nav} from 'react-bootstrap'


export default function navbars(){

return(


    <>
    
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favorite">Favourite</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    
    
    </>
)







}


