import { useNavigate,Link} from "react-router-dom";
import { useEffect, useState } from "react";
import swal from '@sweetalert/with-react'
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Listado = ({addOrRemove}) => {

  const navigate = useNavigate();
  
  const [movieList, setmovieList] = useState([]);

  let token = sessionStorage.getItem("token");

  //console.log (token);
 
  useEffect(() => {

    if(!token){
      navigate("/")
    }

    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=c7be01a86fd8912720fa05d1dec010a7&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    
    axios.get(endPoint)
    .then(res => {
      const dataApi = res.data.results;
      setmovieList(dataApi);
      //console.log(dataApi)
    })
    .catch(err => {
      console.log(err)
      swal(<h3> El llamado de la Api no se pudo realizar </h3>);

    })

  }, [])
  
  return (
   <>
  
   <h3 className="d-flex justify-content-center mt-3" style={{ fontFamily: 'sans-serif' , color: '#0d6efd ' }  }>Listado de Peliculas mas vistas</h3>
    
  <Row xs={1} md={1} sm={1} className="g-4 mt-2 m-5 justify-content-center ">
          {movieList.map((movie) => (
            <Card style={{ width: "18rem" }} className="m-2" key={movie.id}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="mt-2" />
              <button
               onClick={addOrRemove}
               dataMovieId={movie.id}
                className="favorite-btn2"
              >
                ♡
              </button>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {movie.overview.substring(0, 100)}...
                </p>
                <Link
                  to={`/detalle?movieId=${movie.id}`}
                  className="btn btn-primary"
                >
                  More Info
                </Link>
              </div>
            </Card>
          ))}
        </Row>

  </>);
};
export default Listado;
