import axios from "axios";
import { Link } from "react-router-dom";
import swal from '@sweetalert/with-react'
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const Resultados = ({addOrRemove}) => {
   
   const [movieResult , setmovieResult] = useState([]);
   let query = new URLSearchParams(window.location.search);
   let keyword = query.get("keyword");
   //console.log(keyword+" desde Resultados")
   
   
useEffect(() => {

        const url =`https://api.themoviedb.org/3/search/movie?api_key=c7be01a86fd8912720fa05d1dec010a7&language=en-US&page=1&include_adult=false&query=${keyword}`
        axios.get(url).then(res => {
            const dataApi = res.data.results;
            if(dataApi.length === 0) {
                swal(<h4> No se encontraron resultados </h4>)
            }
            setmovieResult(dataApi)
            //console.log(dataApi)
           
        }).catch(err => {
            console.log(err)
        })
        
    },[keyword])
    

  return (
    <>
    <div>Resultados para {keyword}</div>
   
    {movieResult === 0 && <h4> No se encontraron resultados </h4>}
    <Row xs={1} md={1} sm={1} className="g-4 mt-2 m-5 justify-content-center ">
          {movieResult.map((movie) => (
            <Card style={{ width: "18rem" }} className="m-2" key={movie.id} > 
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

   </>
  )
}
export default Resultados