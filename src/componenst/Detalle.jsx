import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Image, Button, Col , ListGroup} from "react-bootstrap";
import axios from "axios";
//import "../css/detailCard.css"

const Detalle = () => {
    const navigate = useNavigate();
    const [movieDetail, setmovieDetail] = useState(null);
    let token = sessionStorage.getItem("token");
    // obtengo la url con javascrip y el query string "el Id de la peli"
    let query = new URLSearchParams(window.location.search);
    let movieId = query.get("movieId");
        
    useEffect(() => {
        const url =`https://api.themoviedb.org/3/movie/${movieId}?api_key=c7be01a86fd8912720fa05d1dec010a7&language=es-ES `
        axios.get(url).then(res => {
            const dataApi = res.data;
            setmovieDetail(dataApi);
            //console.log(dataApi)
        }).catch(err => {
            console.log(err)
        })
    

    }, [])
    

  return (

    <div className="d-flex justify-content-center mt-5 ">
    {!token && navigate("/")}
    {!movieDetail && <h1>Cargando...</h1>}
    {movieDetail && <>
    
      <Col xs={6} md={5} lg={5} className=" ">
    <Card className="my-3 " >
      <Image src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} fluid />
      <Card.Body>
        <Card.Title>{movieDetail.title}</Card.Title>
        <Card.Text>{movieDetail.overview}</Card.Text>
        <ListGroup variant="">
          {movieDetail.genres.map((genre) => (
            <ListGroup.Item key={genre.id}>{genre.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  </Col>
  
    </> 
     }


    </div> 
   
  )
}
export default Detalle