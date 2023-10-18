import { useState } from "react";
import { Container,Row,Col ,Button} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { course } from "../data/Data";


export default function Details()
{
    const loc =useLocation()
    const nav= useNavigate()
    const[product,setProduct] = useState(loc.state)
    const[image,setImage] = useState(product.img)
    const[Name,setName] = useState(product.Name)
    const[Price,setPrice] = useState(product.Price)
    const[Validity,setValidity] = useState(product.Validity)
    const[Teacher,setTeacher] = useState(product.Teacher)
    const[discount,setDiscount] = useState(product.discount)
    console.log(product);
    return (
        <Container>
<Row>

    <Col lg={5} >
        <div className="detail-img">
            <img src={product.images}/>
            </div> 

       <div className="detail-img1">
          {course.map(d=>(
              <div className="detail-img1-1" onClick={()=>setImage(d)}>
                 <img src={d.img}/>
               </div>))
               } 
       </div>
        
        </Col>
    <Col lg={4}>
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
    <Col lg={3} >
      <div className="detail-cart">
           <div className="detail-cart1">
               <Button onClick={()=>nav("/addtocart",{state:{Name:product.Name,price:product.Price,validity:product.Validity,Teacher:product.Teacher,Discount:product.discount,Image:product.images}})}>Add to Cart</Button>
            </div>
            <div className="detail-cart2">
            <Button  onClick={()=>nav('/Payment')}>Buy Now</Button>
            </div>
        </div>
    </Col>
  </Row>
        </Container>
    );
}
 