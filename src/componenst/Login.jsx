import axios from 'axios';
import { useState } from "react";
import swal from '@sweetalert/with-react'
import { useNavigate } from "react-router-dom"

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
    <form onSubmit={submitHandler}>
        <label htmlFor="email"><span>Email</span>
         <input type="email" name="email"
         onChange={(e) => setEmail(e.target.value)}
         /> <br /><br />
        </label>
       <label htmlFor="password"><span>Password</span>
       <input type="password" name="password"
       onChange={(e) => setPassword(e.target.value)}
       />
       </label> <br /><br />
        <button type="submit">Ingresar</button>
    </form>
  )
}

export default Login