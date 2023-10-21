import React, { useState } from 'react';
import axios from 'axios';


export const Login = () => {
  //creando el array que guardar los datos capturados del formulario
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const sessionId = '';
 
  //Creando la funcion que recogera los datos del formulario
  const handleChangeUser = (e)=>{
    setUsername(e.target.value)
      
  }
  const handleChangePass = (e)=>{
    setPassword(e.target.value)
      
  }
  console.log(username)
  console.log(password)
  const login = async ()=>{
    await axios.post("https://www.europcar.com.mx/ejercicio/rest/", {
        "Function":"LogIn",
        "ContractId":"0123456789",
        "Password":"0123456789",
        "LanguageId":"ES"
    })
    .then((response) =>{
      console.log(response)
    })
    .catch((error) =>{
      console.log(error.toJSON);
      console.log(error.config.headers);
      //console.log(error.response.headers);
    })
  }
  //data:"Function=LogIn&ContractId=0123456789&Password=0123456789&LanguageId=ES",
        
    
  
  return (
    <div className='row justify-content-center my-5'>
      <div className='col col-md-3 col-sm-8 text-center my-5 content-login'>
        <h1 className='my-5 login-sesion'>Inicio de sesion</h1>
        <div className='form-group'>
          <label>Usuario:</label>
          <br />
          <input 
            type='text'
            className='form-control'
            name="username"
            onChange={handleChangeUser}
          />
        </div>
        <div className='form-group mt-4'>
          <label>Contraseña:</label>
          <br />
          <input 
            type='password'
            className='form-control'
            name="password"
            onChange={handleChangePass}
          />
          <button className='btn btn-primary mt-3' onClick={login}>Iniciar Sesion</button>
        </div>
      </div>
    </div>
  )
}
