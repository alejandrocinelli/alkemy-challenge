import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
            console.log(dataApi)
        }).catch(err => {
            console.log(err)
        })
    

    }, [])
    

  return (

    <>
    {!token && navigate("/")}
    {!movieDetail && <h1>Cargando...</h1>}
    {movieDetail && <>
    

     <h2>Detalle de Pelicula</h2>
     <div className="row">
         <div className="col-4"> <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} className="card-img-top" alt="..." /> </div>
      </div>
      <div className="col-8">
        <h3>{movieDetail.title}</h3>
        <h5>reseña</h5>
        <p>{movieDetail.overview}</p>
      <ul>
        {movieDetail.genres.map(genre => {
            return <li key={genre.id}>{genre.name}</li>
        })}
      </ul>
      </div>
    </> 
     }
    </> 
   
  )
}
export default Detalle