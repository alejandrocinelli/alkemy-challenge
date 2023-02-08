import axios from 'axios';
import { useState } from "react";
import swal from '@sweetalert/with-react'
import { useNavigate } from "react-router-dom"
import Carousel2 from './Carousel2';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(email === '' || password === '') {
      
      swal(<h3> Completa todo los Campos </h3>);
      return;
    }

    if(email !== '' && !regexEmail.test(email)) {
        swal(<h3> Debes escribir un correo valido </h3>);
        return;
  }
  
  if(password !== 'react' || email !== 'challenge@alkemy.org') {
    swal(<h3>Incorrect email or password </h3>);
    return;
  }

  
  axios.post('http://challenge-react.alkemy.org/', {email, password})
  .then(res => {
    swal(<h3>Login Success </h3>);
    // console.log(res.data)
    const token = res.data.token;
    sessionStorage.setItem('token', token);
    navigate('/listado');
  })

}

  return (
    <>
<form className=' w-50 mx-auto mt-5 bg-light p-5 ' onSubmit={submitHandler}>
  <div className="mb-3 form-group form-group-sm">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     onChange={(e) => setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">ingresa: challenge@alkemy.org y pass: react .</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    onChange={(e) => setPassword(e.target.value)}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>

  <Carousel2 />
    </>
   
  )
}

export default Login