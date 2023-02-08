import axios from 'axios';
import { useState, useEffect } from "react";
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import Carousel from 'react-bootstrap/Carousel';

function Carousel2() {

// llamada a la api para traer las peliculas

const [movieResult , setmovieResult] = useState([]);

useEffect(() => {
  const endPoint = "https://api.themoviedb.org/3/trending/all/day?api_key=c7be01a86fd8912720fa05d1dec010a7"
  axios.get(endPoint).then(res => {
    const dataApi = res.data.results;
    setmovieResult(dataApi)
    //console.log(dataApi)
}).catch(err => {
    console.log(err)
})
console.log(movieResult)
}, [])

return (

<div className=' d-flex justify-content-center mt-5  '  >

<Carousel slidestoshow={4} dots slidesToScroll={4} speed className="d-block w-50 " infinite>
     

        {movieResult.map((movie) => ( 

          <Carousel.Item key={movie.id} >
            <Card >
             <Card.Img variant="" 
              className="p-2 "
             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                 alt={movie.title}        
             />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center' >
                <Link
                  to={`/detalle?movieId=${movie.id}`}
                  className="btn btn-primary m-2"
                >
                  More Info
                </Link>
                </Card.Title>
            </Card.Body>
            </Card>
           
          </Carousel.Item>
        ))}
      
        </Carousel>
</div>
  );
}

export default Carousel2;