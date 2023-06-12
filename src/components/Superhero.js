import antman from "../assets/images/superhero/antman.jpg"
import avenger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
import robinhood from "../assets/images/superhero/robinhood.jpg"
import spiderman from "../assets/images/superhero/spiderman-cover.jpg"
import superman from "../assets/images/superhero/superman.jpg"
import {Card, Col, Container, Row, Image} from 'react-bootstrap';

const Superhero = () => {
    return (
        <div>
          <Container>
            <br />
            <h1 className="text-white text-white">SUPERHERO</h1>
            <br />
            <Row>
              <Col md={4} className="movieWrapper" id="superhero">
    <Card className=" movieImage">
      <Image src={antman} alt="Ant Man" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Ant Man</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
              </Col>
              <Col md={4} className="movieWrapper">
    <Card className=" movieImage">
      <Image src={avenger} alt="Avengers" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Avengers</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
              </Col>
              <Col md={4} className="movieWrapper">
    <Card className=" movieImage">
      <Image src={batman} alt="Batman" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Batman</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
              </Col>
              <Col md={4} className="movieWrapper">
    <Card className=" movieImage">
      <Image src={robinhood} alt="RobinHood" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Robin Hood </Card.Title>
        <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
              </Col>
              <Col md={4} className="movieWrapper">
    <Card className=" movieImage">
      <Image src={spiderman} alt="Spiderman" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Spiderman </Card.Title>
        <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
              </Col>
              <Col md={4} className="movieWrapper">
    <Card className=" movieImage">
      <Image src={superman} alt="Superman" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Superman</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
              </Col>
            </Row>
          </Container>
        </div>
    )
} 
export default Superhero