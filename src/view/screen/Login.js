import {Row,Col,Container,Form,Button, Navbar} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const nav=useNavigate()
const[email,setEmail]=useState('')

const[password,setPassword]=useState('')
function loginUser(){
console.log(email);

console.log(password); 
localStorage.setItem("user",email)
window.location.reload()
}
return(
    <Container>
<Row>
    <Col>
    <div className="login-div">
        <div className="abcd-3">
   <h3>Login Form</h3>
   </div>
   <Form>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control className="login-1" type="email" placeholder="abcd@gmail.com" value={email} onChange={d=>setEmail(d.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control className="login-2" type="password" placeholder="Password" value={password} onChange={d=>setPassword(d.target.value)}/>
      </Form.Group>
      <Button className="button-3" variant="primary" type="button" onClick={loginUser } >submit</Button>{' '} 
    </Form>

    </div>
    </Col>
</Row>
    </Container>
)
}

