import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './view/screen/Home';
import Register from './view/screen/Register';
import Details from './view/screen/Details';
import Login from './view/screen/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Button,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { menubar } from './view/data/Data';
import './view/style/style.css'

function App(){
  console.log(menubar);
  return(
    <>
    <BrowserRouter>
    <Container>
      <Row>
        <Col>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">E-COURSES</Navbar.Brand>

  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Details">Details</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      {
        menubar.map(function(d){
          return(
            <Nav.Link href={'/${d}'}></Nav.Link>
           
           
          )
          })
      }
      
      
      {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown> */}
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </Col>
      </Row>
    </Container>
    <Routes>
       <Route path='/' element ={<Home/>}/>
       <Route path='/Register' element ={<Register/>}/>
       <Route path='/Details' element ={<Details/>}/>
       <Route path='/Login' element ={<Login/>}/>
    </Routes>
   
    <>
    <Container>
     
    </Container>
    </>
  
    </BrowserRouter>
    </>
  );
}
export default App;