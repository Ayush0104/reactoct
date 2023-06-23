import { useState } from "react";
import { Container,Row,Col ,Button} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { four } from "../data/Data";
export default function Details()
{
    const loc =useLocation()
    const[product,setproduct] = useState(loc.state)
    console.log(product);
    return (
        <Container>
<Row>

    <Col lg={5} className="bg-primary">
        <div className="detail-img">
          <img src={product.images}/>
            </div> 

           <div className="detail-img1">
        
           <div className="detail-img1-1">

           </div>
           <div className="detail-img1-1">

           </div>
          <div className="detail-img1-1">

          </div>
          <div className="detail-img1-1">

          </div>
        </div> 
        </Col>
    <Col lg={4} className="bg-success">
        <div className="detail-text">
        <div className="detail-text1">
            <h5>Course Name : {product.Name}</h5></div>
            <div className="detail-text2">
            <h5>Price : {product.Price}</h5></div>
            <div className="detail-text3">
            <h5>Exclusive Offer: {product.discount}</h5></div>
            <div className="detail-text3">
            <h5>Validity : {product.Validity}</h5></div>
            <div className="detail-text3">
            <h5>Teacher Name : {product.Teacher}</h5></div>
        </div>
        </Col>
    <Col lg={3} className="bg-primary">
      <div className="detail-cart">
           <div className="detail-cart1">
               <Button>Add to Cart</Button>
            </div>
            <div className="detail-cart2">
            <Button>Buy Now</Button>
            </div>
        </div>
            
    </Col>
</Row>
        </Container>
    );
}
 