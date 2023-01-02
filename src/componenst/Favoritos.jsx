import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const Favoritos = ({addOrRemove}) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosFromLocal = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );
    //console.log(favoritosFromLocal);
    setFavoritos(favoritosFromLocal);
  }, []);

  return (
   
        <Row xs={1} md={1} sm={1} className="g-4 mt-2 m-5 justify-content-center ">
          {favoritos.map((favorito) => (
            <Card style={{ width: "18rem" }} className="m-2">
              <Card.Img variant="top" src={favorito.imgUrl} className="mt-2" />
              <button
               onClick={addOrRemove}
               dataMovieId={favorito.id}
                className="favorite-btn2"
              >
                ♡
              </button>
              <Card.Body key={favorito.id}>
                <Card.Title>{favorito.title}</Card.Title>
                <Card.Text>{favorito.overview}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
     
  );
};
export default Favoritos;
