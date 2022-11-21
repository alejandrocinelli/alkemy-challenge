import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Login from "./componenst/Login";
import Listado from "./componenst/Listado";
import Header from "./componenst/Header";
import Footer from "./componenst/Footer";
import'./css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from "./componenst/Detalle";
import Resultados from "./componenst/Resultados";

function App() {
  
  //funcion para sumar favoritos... esto deberia hacerlo en un contexto, pero para el 
  //ejemplo lo hago aca

  const addOrRemove = (e) => {
   const btn = e.currentTarget;
   const parent = btn.parentElement;
   const imgUrl = parent.querySelector('img').getAttribute('src');
   const title = parent.querySelector('h5').textContent;
   const overview = parent.querySelector('p').textContent;
   const id = parent.querySelector('button').getAttribute('dataMovieId');
     
   const movieData = { imgUrl, title, overview, id };
   console.log(movieData);
 }

  return (
    <div className="">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route  path="/" element={<Login/>} />
      <Route path="/listado" element={<Listado addOrRemove={addOrRemove}/>}/>
      <Route path="/detalle" element={<Detalle/>}/>
      <Route path="/resultados" element={<Resultados/>}/>
     
     </Routes>
     <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
