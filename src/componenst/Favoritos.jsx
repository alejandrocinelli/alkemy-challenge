import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const Favoritos = ({addOrRemove, favoritos}) => {
 /* const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosFromLocal = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );
    //console.log(favoritosFromLocal);
    setFavoritos(favoritosFromLocal);
  }, []);*/

  return (
   
        <Row xs={1} md={1} sm={1} className="g-4 mt-2 m-5 justify-content-center ">
          {favoritos.map((favorito) => (
            <Card style={{ width: "18rem" }} className="m-2"key={favorito.id} >
              <Card.Img variant="top" src={favorito.imgUrl} className="mt-2" />
              <button
               onClick={addOrRemove}
               dataMovieId={favorito.id}
                className="favorite-btn2"
              >
                ♡
              </button>
              <Card.Body key={favorito.id}>
              <h5 className="card-title">{favorito.title}</h5>
                <p className="card-text">
                  {favorito.overview.substring(0, 100)}...
                </p>
                <Link
                  to={`/detalle?movieId=${favorito.id}`}
                  className="btn btn-primary"
                >
                  More Info
                </Link>
              
              </Card.Body>
            </Card>
          ))}
        </Row>
     
  );
};
export default Favoritos;
