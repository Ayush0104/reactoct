
import {Row,Col, Carousel,Container,Button,Card,ListGroup} from "react-bootstrap";
import { banner,middle,four,Validity,Teacher,para,discount,registration, team1, team2 ,team3, team4,  icons1, icons2,icons3,icons4 } from "../data/Data";
import {Image} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import  axios  from "axios";
import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect, useState } from "react";
export default function Home(){ 
  const nav = useNavigate();


  // console.log(four);
  // console.log(menubar);

  // const[images,setImages]=useState("");

  // console.log(proimage);
  
//   useEffect(()=>
//   {
// async function showdata(){
// var res = await axios.get("http://localhost:8080/product").catch(d=>console.log(d))
// console.log(res?.data);

//     }
//   })
 function updateproduct(){
//   var img=[]
//   setProImage(img)
 }
  return(
 <Container>
<Row>
  <Col>
        <Carousel>
          {
            banner.map(function(d)
            {
              return(
            <Carousel.Item>
             
                <img
                  className="d-block w-100"
                  src={d}
                  alt="First slide"
                />
                
                <Carousel.Caption>
                <div className="institute-name">
                  <h1>THE SKILL FACTORY</h1>
                  </div>
                  <h3>Best Online Courses</h3>
                  <h1>New Way To Learn From Home</h1>
                </Carousel.Caption>
               
          </Carousel.Item>
              
        )
            
            })
          }
               
        </Carousel>
        
  </Col>
</Row>
<Row>
  <Col>
<div style={{padding:"2%"}}>
    <Carousel>
   
            <Carousel.Item>
            <img
              className="d-block"
              src={middle} style={{width:800, height:400}} 
             alt="about image"
             />
           
              </Carousel.Item>
   </Carousel>
       </div>    
  </Col>
</Row>
<>
<div style={{textAlign:"center"}}>
   
    <h3>About Us</h3>
    <h1>Innovative Way To Learn</h1>
    <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et.</p>
    </div>
    </>
     
    <Button  className="learn"  onClick={()=>nav('/About')} >Learn More</Button>{' '}

    <div style={{textAlign:"center", color:"orangered"}} >
      <h1>SUBJECTS</h1>
      </div>
      <div style={{color:"purple",textAlign:"center"}}>
      <h1>Explore Top Subjects</h1>
    </div>
  <Row>
{
  four.map(function(d){
   return(
<Col>
<Card style={{ width: '18rem'}} className="Cur" onClick={()=>nav('/Details',{state:d})}>
      <Card.Img variant="top" src={d.images} />
      <Card.Body>
        <Card.Title>{d.Name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Rs.{d.Price}</ListGroup.Item>
        {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        <Card.Link >Details</Card.Link>
        {/* <Card.Link href="#">Login</Card.Link> */}
      </Card.Body>
    </Card>
</Col>
   )
  })
}
  </Row>
  <>
  <Row>
    <Col>
       <div >
        <img src={registration}  style={{width:"100%", height:"40%", marginTop:"6%",filter:"brightness(40%)"}}/>
        <h4><i style={{color:"orangered", position:"absolute",top:"415%",left:"15%"}}>NEED ANY COURSES</i></h4> 
        <h1><b  style={{color:"white", position:"absolute",top:"425%",left:"15%"}}>27% Off For First 100 Students</b></h1>
        <pre> <p style={{color:"white", position:"absolute",top:"440%",left:"15%"}}>
          Invidunt lorem justo sanctus clita.
          Erat lorem labore ea,justo dolor lorem ipsum
          ut sed eos, ipsum et dolor kasd sit ea justo.
       </p> </pre>
       </div>
      
    </Col>
     </Row>
  </>
  <hr/>
  <>
  
    <div style={{textAlign:'center', color:'orangered',margin:'3%'}}>
       <h4>TEACHERS</h4>
       </div>
    
   
      <div  style={{textAlign:'center', color:'grey', margin:'2%'}}> 
        <h1>MEET OUR TEACHERS</h1>
      </div>

<Row >
        <Col xs={3} md={3} className="team-1">
          <Image src={team1} thumbnail style={{borderRadius:"7%"}} />
         <div style={{textAlign:"center"}}><h4> Shinu Varghese </h4>
         
         </div> 
        </Col>
        <Col xs={3} md={3} className="team-2">
          <Image src={team2}thumbnail  style={{borderRadius:"7%"}}/>
          <div style={{textAlign:"center"}}><h4> Vishnu Sharma </h4></div> 
        </Col>
        <Col xs={3} md={3} className="team-3">
          <Image src={team3} thumbnail  style={{borderRadius:"7%"}}/>
          <div style={{textAlign:"center"}}><h4> Jessica Peter </h4></div> 
        </Col>
        <Col xs={3} md={3} className="team-4">
          <Image src={team4} thumbnail  style={{borderRadius:"7%"}}/>
          <div style={{textAlign:"center"}}><h4>Jitendra Singh </h4></div> 
        </Col>
        
 </Row>
 <Row>
  <Col>
      <div className="footer1">
          <div className="footer2">
            <div className="footer2-1"> <h5>GET IN TOUCH</h5>
            <div className="add"><h6>Address: 12, Lions Lane, Jaipur</h6></div>
            <div className="mob"><h6>Contact: 7181122344</h6></div>
            <div className="mail"><h6>E-mail: ecourses.123@gmail.com</h6></div>
            <div className="footer2-1-1">
                  <div>
                   {icons1.map(d=>(
                  <div className="icon-1" >
                 <a href="https://facebook.com" ><img src={d.img1}/></a>
                  </div>))
                     } 
                </div>
                <div>
                   {icons2.map(d=>(
                  <div className="icon-2" >
                 <a href="https://instagram.com" > <img src={d.img2}/></a>
                  </div>))
                     } 
                </div>
                <div>
                   {icons3.map(d=>(
                  <div className="icon-3" >
                   <a href="https://twitter.com" > <img src={d.img3}/></a> 
                  </div>))
                     } 
                </div>
                <div>
                   {icons4.map(d=>(
                  <div className="icon-4" >
                <a href="https://linkedin.com" > <img src={d.img4}/></a>
                  </div>))
                     } 
                </div>
               </div>
           </div>
            
             <div className="footer2-2"><h5>OUR COURSES</h5>
              <div className="footer2-2-1">
                 <h6>Flutter</h6>
                 <h6>React-Js</h6>
                 <h6>Seo</h6>
                 <h6>Content Writing</h6>
              </div>
             </div>
            <div className="footer2-3">
              <h5>CONTACT NO.</h5>
          <div className="contact">
           <h5>1882688887 </h5>
           <h5>653426245</h5>
           <h5>546576873</h5>
          </div>
               
            </div> 
            
          </div>
          <div className="rights">
            
              <h5>Copyright © 2023 The Skill Factory - All Rights Reserved </h5>
              
            </div>
      </div>
  </Col>
 </Row>
</>
 </Container>
);

}