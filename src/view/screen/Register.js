import {Row,Col,Container,Form,Button, Navbar} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register(){
    const nav=useNavigate()
const[email,setEmail]=useState('')
const[contact,setContact]=useState('')
const[password,setPassword]=useState('')
function registerUser(){
console.log(email);
console.log(contact);
console.log(password); 
nav("/login")
}
return(
    <Container>
<Row>
    <Col>
    <div className="register-div">
        <div className="abcd-3">
   <h3>Registration Form</h3>
   </div>
   <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="abcd-1" type="email" placeholder="name@example.com" value={email} onChange={d=>setEmail(d.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control className="abcd-1" type="contact" placeholder="1234567890" value={contact} onChange={d=>setContact(d.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control className="abcd-1" type="password" placeholder="Password" value={password} onChange={d=>setPassword(d.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={registerUser } className="abcd-2">submit</Button>{' '} 
    </Form>

    </div>
    </Col>
</Row>
    </Container>
)
}