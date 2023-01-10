import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Login from "./componenst/Login";
import Listado from "./componenst/Listado";
import Header from "./componenst/Header";
import Footer from "./componenst/Footer";
import'./css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from "./componenst/Detalle";
import Resultados from "./componenst/Resultados";
import Favoritos from "./componenst/Favoritos";
import { useEffect, useState } from "react";
import Carousel2 from "./componenst/Carousel2";

function App() {
  
  //funcion para sumar favoritos... esto deberia hacerlo en un contexto, pero para el 
  //ejemplo lo hago aca

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosFromLocal = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );
    //console.log(favoritosFromLocal);
    setFavoritos(favoritosFromLocal);
  }, []);


  const addOrRemove = (e) => {
   
    // algo aca se piso pero funciona el favoritos lo dejo asi jojojo 
    const favoritos = localStorage.getItem('favoritos');
  let tempMoviesFav ;
  if(favoritos === null){ 
    tempMoviesFav = [];
   } 
    else{
      tempMoviesFav = JSON.parse(favoritos);
     // setFavoritos(tempMoviesFav);
    }

   const btn = e.currentTarget;
   const parent = btn.parentElement;
   const imgUrl = parent.querySelector('img').getAttribute('src');
   const title = parent.querySelector('h5').textContent;
   const overview = parent.querySelector('p').textContent;
   const id = parent.querySelector('button').getAttribute('datamovieid');
     
   const movieData = { imgUrl, title, overview, id };
  
   let movieIsInFav = tempMoviesFav.find(movie => movie.id === movieData.id);
   
   if(!movieIsInFav){
      tempMoviesFav.push(movieData);
      localStorage.setItem('favoritos', JSON.stringify(tempMoviesFav));
      //console.log('producto agregado a favoritos');
      setFavoritos(tempMoviesFav);
   }
   else{
      tempMoviesFav = tempMoviesFav.filter(movie => movie.id !== movieData.id);
      localStorage.setItem('favoritos', JSON.stringify(tempMoviesFav));
      //console.log('producto eliminado de favoritos');
      setFavoritos(tempMoviesFav);
   }
   
   //console.log(localStorage.getItem('favoritos'));
   
 }

  return (
    <div className="container-fluid " id="appCss">
      <BrowserRouter>
      <Header favoritos={favoritos}/>
      <Routes>
      <Route  path="/" element={<Login/>} />
      <Route path="/listado" element={<Listado favoritos={favoritos} addOrRemove={addOrRemove}/>}/>
      <Route path="/detalle" element={<Detalle/>}/>
      <Route path="/resultados" element={<Resultados favoritos={favoritos} addOrRemove={addOrRemove}/>}/>
      <Route path="/favoritos" element={<Favoritos favoritos={favoritos} addOrRemove={addOrRemove}/>}/>
      </Routes>
    
      <Carousel2/>
      <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
