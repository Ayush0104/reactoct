import {Row,Col,Container,Form,Button} from "react-bootstrap"
export default function Register(){
return(
    <Container>
<Row>
    <Col>
    <div className="register-div">
   <h1>Register</h1>
   <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="abcd-1" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control className="abcd-1" type="email" placeholder="1234567890" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control className="abcd-1" type="email" placeholder="abcd@123" />
      </Form.Group>
      <Button variant="primary" className="abcd-2">submit</Button>{' '} 
    </Form>

    </div>
    </Col>
</Row>
    </Container>
)
}