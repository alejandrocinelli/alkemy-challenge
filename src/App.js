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
  return (
    <div className="">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route  path="/" element={<Login/>} />
      <Route path="/listado" element={<Listado/>}/>
      <Route path="/detalle" element={<Detalle/>}/>
      <Route path="/resultados" element={<Resultados/>}/>
     
     </Routes>
     <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
