
import {Row,Col, Carousel,Container,Button,Card,ListGroup} from "react-bootstrap";
import { banner,middle,four,Validity,Teacher,para,discount,registration, team1, team2 ,team3, team4 } from "../data/Data";
import {Image} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
export default function Home()

{ 
  const nav = useNavigate();
  console.log(four);
 
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
     
    <Button variant="primary">Learn More</Button>{' '}

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
<Card style={{ width: '18rem' }} className="Cur" onClick={()=>nav('/Details',{state:d})}>
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
        <Card.Link href="#">Details</Card.Link>
        <Card.Link href="#">Login</Card.Link>
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

<Row>
        <Col xs={3} md={3}>
          <Image src={team1} thumbnail style={{borderRadius:"7%"}} />
         <div style={{textAlign:"center"}}><h4> Shinu Varghese </h4>
         
         </div> 
        </Col>
        <Col xs={3} md={3}>
          <Image src={team2}thumbnail  style={{borderRadius:"7%"}}/>
          <div style={{textAlign:"center"}}><h4> Vishnu Sharma </h4></div> 
        </Col>
        <Col xs={3} md={3}>
          <Image src={team3} thumbnail  style={{borderRadius:"7%"}}/>
          <div style={{textAlign:"center"}}><h4> Jessica Peter </h4></div> 
        </Col>
        <Col xs={3} md={3}>
          <Image src={team4} thumbnail  style={{borderRadius:"7%"}}/>
          <div style={{textAlign:"center"}}><h4>Jitendra Singh </h4></div> 
        </Col>
        <Col>
        <Row>
          <h1>hii</h1>
        </Row>
        </Col>
 </Row>
 
</>
 </Container>
);
}  