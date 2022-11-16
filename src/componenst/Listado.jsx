import { useNavigate,Link, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from '@sweetalert/with-react'
import axios from "axios";

const Listado = () => {
  const navigate = useNavigate();
  
  const [movieList, setmovieList] = useState([]);

  let token = sessionStorage.getItem("token");

  console.log (token);
  /*useEffect(() => {
    
    if (!token) {
      navigate("/");
    }
  }, []);*/

  useEffect(() => {
    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=c7be01a86fd8912720fa05d1dec010a7&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    
    axios.get(endPoint)
    .then(res => {
      const dataApi = res.data.results;
      setmovieList(dataApi);
      console.log(dataApi)
    })
    .catch(err => {
      console.log(err)
      swal(<h3> El llamado de la Api no se pudo realizar </h3>);

    })

  }, [token])
  
  return (
   <>
    {!token && navigate("/")}
    
    <h1>Listado de Peliculas</h1>
    {movieList.map (movie =>  {
      return (
       <div key={movie.id} className="">
      <div className="col-3 border d-flex">
        <div className="card container">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">
              {movie.overview.substring(0, 100)}...
            </p>
            <Link to={`/detalle?movieId=${movie.id}`} className="btn btn-primary">
              More Info 
            </Link>
          </div>
        </div>
      </div>
    </div>
    
      )
    })}
    
    </>
  );
};
export default Listado;
