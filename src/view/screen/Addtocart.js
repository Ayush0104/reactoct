import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";
export default function Addtocart()
{
    const loc =useLocation()
    const nav=useNavigate()
    const[product,setproduct] = useState(loc.state)
    console.log(product);
    return (

<>
<Container>
<Row>
<Col className="bg-primary" lg={8}>
    <Row>
    <Col>My Cart</Col>
    <Col lg={3}>Course Name</Col>
    <Col lg={3}>Price</Col>
    </Row>

<Row>
    <Col lg={6}>
        <p>1 item(s) in your cart</p>
       <div className="addtocart-n-p-i">
               <div><img src={product.Image} className="addtocart-img"/></div>
            <div className="addtocart-item">
                  <div><p className="addtocart-text-name">{product.Name}</p></div>
                  <div><p className="addtocart-text-price">Rs.{product.price}</p></div>
            </div>
      </div>
    </Col>
   
   
</Row>
<Row className="mt-4" style={{margintop:100}}>
    <Col lg={6}>
        <p>1 item(s) in your cart</p>
       <div className="addtocart-n-p-i">
            <div><img src={product.Image} className="addtocart-img"/></div>
            <div className="addtocart-item">
            <div><p className="addtocart-text-name">{product.Name}</p></div>
            <div><p className="addtocart-text-price">Rs.{product.price}</p></div>
            </div>
      </div>
    </Col>
   
   
</Row>

</Col>
<Col className="bg-light" lg={4}>
    <div>
      <div>
        <h5>Payment Summary</h5>
      </div>
      
    </div>
    <div  className="total-amount">
      <div>
       <p>Total Amount</p>
      </div>
      {/* <div>
       <p>Total Amount</p>
      </div> */}
    </div>
    <div  className="total-amount">
      <div>
       <p>GST Charges</p>
      </div>
      {/* <div>
       <p>GST Charges</p>
      </div> */}
    </div>
    <div  className="total-amount">
      <div>
       <p>Shipping Charges</p>
      </div>
      {/* <div>
       <p>Shipping Charges</p>
      </div> */}
    </div>
    <div  className="total-amount">
      <div>
       <p>Total Discount</p>
      </div>
      {/* <div>
       <p>Total Discount</p>
      </div> */}
    </div>
    <div  className="total-amount">
      <div>
       <p>Amount Payable</p>
      </div>
      {/* <div>
       <p>Amount Payable</p>
      </div> */}
    </div>
    
</Col>
</Row>
</Container>

</>
  )
}