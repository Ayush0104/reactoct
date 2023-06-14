import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Details()
{
    const loc =useLocation()
    const[product,setproduct] = useState(loc.state)
    console.log(product);
    return (
        <Container>
<Row>
    <Col xxl={2}>
        <div>
             <img src={product.images}/>
             </div> 
    </Col>
    <Col xxl={10}>
    <div>
<h3>Course Name : {product.Name}</h3>
<h4>Price : {product.Price}</h4>
<h4>{product.Validity}</h4>
<h4>Trainer : {product.Teacher}</h4>
<h6>{product.para}</h6>
<h5>{product.discount}</h5>

    </div>
    </Col>
    
</Row>
        </Container>
    );
}
 