import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

export const Formulario = () => {
  const [startFecha, setStartFecha] = useState(new Date());
  const [startHora, setStartHora] = useState(new Date());
  const [endFecha, setEndFecha] = useState(new Date());
  const [endHora, setEndHora] = useState(new Date());
  let h = "5:54 pm"


  const loginFetch = async () => {
    await fetch('https://www.europcar.com.mx/ejercicio/rest',
    {
      'mode': 'cors',
      headers: {
          'Access-Control-Allow-Origin': '*',
      }
  },
      {method: 'GET'},
      {
        "Function":"GetStationList",
        "SessionId":"5968145",
        "StationType":"CheckIn"
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch((error) =>{
      //console.log(error.toJSON);
      console.log(error);
      //console.log(error.response.headers);
    })
  }


  const loginAxios = async (e)=>{
    e.preventDefault();
    await axios.get("https://www.europcar.com.mx/ejercicio/rest",
    {
      'mode': 'no-cors',
      headers: {
          'Access-Control-Allow-Origin': 'origin',
      }
  },)
    .then((response) =>{
      console.log(response)
    })
    .catch((error) =>{
      console.log(error.toJSON);
      console.log(error.config.headers);
      //console.log(error.response.headers);
    })
  }
  return (
    <div>
        <div className='elForm'>
          <form onSubmit={loginAxios}>
            <div className='row mb-4'>
              <div className='col col-lg-6 col-md-6 col-sm-12 px-4'>
                <label  className='form-label'>OFICINA DE ENTREGA</label>
                <input type="text" className='select-oficina' />

                <div className='row pt-4'>
                  <div className='col col-lg-6 col-md-6 col-sm-6'>
                  <DatePicker
                    className='select-fecha'
                    dateFormat="yyyy/MM/dd"
                    selected={startFecha}
                    onChange={(date) => setStartFecha(date)}
                  />
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-6'>
                  <DatePicker
                    className='select-hora'
                    selected={startHora}
                    onChange={(date) => setStartHora(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                  </div>
                </div>
              </div>
              <div className='mt-4 linea-divisoria'></div>

              <div className='col col-lg-6 col-md-6 col-sm-12 px-4'>
                <label  className='form-label'>OFICINA DE ENTREGA</label>
                <input type="text" className='select-oficina' />

                <div className='row pt-4'>
                  <div className='col col-lg-6 col-md-6 col-sm-6'>
                  <DatePicker
                    className='select-fecha'
                    dateFormat="yyyy/MM/dd"
                    selected={endFecha}
                    onChange={(date) => setEndFecha(date)}
                  />
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-6'>
                  <DatePicker
                    className='select-hora'
                    selected={endHora}
                    onChange={(date) => setEndHora(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4 linea-divisoria'></div>
            <div className='row footer-form'>
              <div className='col col-md-8 col-sm-8 mt-5'>
                <h3>OFICINAS PRINCIPALES</h3>
              </div>
              <div className='col col-md-4 col-sm-4 mt-5 text-end'>
                <button type='submit' className='btn-enviar' >continuar</button>
              </div>

            </div>
          </form>

          <div className='col col-md-4 col-sm-4 mt-5 text-end'>
                <button onClick={loginFetch}>continuar</button>
              </div>
        </div>
    </div>
  )
}
