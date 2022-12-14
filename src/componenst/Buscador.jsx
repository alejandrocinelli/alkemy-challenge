import {useNavigate} from "react-router-dom";
import swal from '@sweetalert/with-react'

const Buscador = () => {
 
  const navigate = useNavigate();
    
  const handlerSubmit = (e) => {
    e.preventDefault();
    // aca lo hicimos asi... en vez de usar un onChange en el input... 
    //medio el benefiio de poder tirar un msj si se manda a buscar con el campo vacio
    //.trim es para que no tome los espacios en blanco
    const keyword = e.currentTarget.keyword.value.trim(); 
    console.log('Buscando...'+ keyword);
    if(keyword.length === 0) {
      swal(<h3> Debes escribir algo para buscar </h3>) 
       }
       else if (keyword.length < 3) {
        swal(<h3> Debes escribir mas de 3 caracteres</h3>)
       }
        else {
          e.currentTarget.keyword.value = "";
          navigate(`/resultados?keyword=${keyword}`)
          //refrescar la pagina para que se vea el cambio
          window.location.reload();
          //e.currentTarget.reset();
        }
    }
  return (
    <div className="">
    
      <form className="d-flex justify-content-end" onSubmit={handlerSubmit}  >
      <input className="form-control me-2" name="keyword"  type="text" placeholder="" />
      <button className="btn btn-outline-primary border-0" type="submit">Buscar</button>
    </form>
    </div>
  );
};
export default Buscador;
