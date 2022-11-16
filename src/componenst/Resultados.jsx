import axios from "axios";
import { Link } from "react-router-dom";
import swal from '@sweetalert/with-react'
import { useEffect, useState } from "react";

const Resultados = () => {
   
   const [movieResult , setmovieResult] = useState([]);
   let query = new URLSearchParams(window.location.search);
   let keyword = query.get("keyword");
   console.log(keyword+" desde Resultados")
   
   
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
    <br/>
    {movieResult === 0 && <h4> No se encontraron resultados </h4>}
    <div className="row">
    {movieResult.map (movie =>  {
      return (
    <div key={movie.id} className="">
      <div className="col-4">
        <div className="card my-2 ">
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
    </div>

   </>
  )
}
export default Resultados