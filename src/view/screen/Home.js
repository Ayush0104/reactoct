
import { Container,Row,Col, Carousel } from "react-bootstrap";
export default function Home()
{return(
 
 <Container>
<Row>
  <Col>
        <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/png;base64,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"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Best Platforml</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrD-OlC-UAABuPqWjPNRyBR5dEaafjCYovw&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Best platform</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOxzUuQX1BlPlWziZY7Y95iH8szadLGmA2g&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Best Platform</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
  </Col>
</Row>
 </Container>
);
}