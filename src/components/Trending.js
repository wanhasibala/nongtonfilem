import duneImage from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import joker from "../assets/images/trending/joker.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import morbius from "../assets/images/trending/morbius.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
import {Card, Col, Container, Row, Image} from 'react-bootstrap';

const Trending = () => {
    return (
        <div>
          <Container>
            <br />
            <h1 className="text-white text-white">TRENDING MOVIES</h1>
            <br />
            <Row>
              <Col md={4} className="movieWrapper" id="trending">
    <Card className=" movieImage">
      <Image src={duneImage} alt="Dune Movies" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Dune</Card.Title>
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
      <Image src={everything} alt="everything" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Everything</Card.Title>
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
      <Image src={infinite} alt="Infinite" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Infinite</Card.Title>
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
      <Image src={joker} alt="Joker" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Joker</Card.Title>
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
      <Image src={lightyear} alt="Lightyear" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Lightyear</Card.Title>
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
      <Image src={morbius} alt="Morbius" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Morbius</Card.Title>
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
export default Trending