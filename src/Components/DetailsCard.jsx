import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailsCard = () => {
  const params = useParams();

  const [film, setFilm] = useState([]);

  const myFilm = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=${params.id}&apikey=e29e6245`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setFilm(data);
      } else {
        alert("merda qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    myFilm();
  }, [params.id]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Card>
            <Card.Img
              variant="top"
              src={film.Poster}
              style={{
                height: "600px",
                width: "100%",
              }}
            />
            <Card.Body>
              <Card.Title>{film.Title}</Card.Title>
              <Card.Text>{film.Writer}</Card.Text>
              <Card.Text>{film.Actors}</Card.Text>
              <Card.Text>{film.Genre}</Card.Text>
              <Card.Text>{film.Awards}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default DetailsCard;
