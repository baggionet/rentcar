import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';


import "react-datepicker/dist/react-datepicker.css";


export const Formulario = () => {

  const showOficinas =  () => {
    fetch('js/Oficinas.json')
    .then(response => response.json())
    .then(datos => {
    for (let i = 0; i < datos.length; i++) {
      console.log(datos[i].StationName)
      
    }
  })
  }
  const fecha = new Date();
  const [startFecha, setStartFecha] = useState(new Date());
  const [startHora, setStartHora] = useState(new Date());
  const [endFecha, setEndFecha] = useState(new Date());
  const [endHora, setEndHora] = useState(new Date());
  console.log(startFecha, startHora)
  console.log(startFecha, startHora)

  return (
    <div>
        <div className='elForm'>
          <form >
            <div className='row mb-4'>
              <div className='col col-lg-6 col-md-6 col-sm-12 px-4'>
                <label  className='form-label'>OFICINA DE ENTREGA</label>
                <input type="text" className='select-oficina' />

                <div className='row pt-4'>
                  <div className='col col-lg-7 col-md-7 col-sm-7'>
                  <DatePicker

                    className='select-fecha'
                    dateFormat="dd/MM/yyyy"
                    selected={startFecha}
                    onChange={(date) => setStartFecha(date) }
                  />
                  </div>
                  <div className='col col-lg-5 col-md-5 col-sm-5'>
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
                  <div className='col col-lg-7 col-md-7 col-sm-7'>
                    <DatePicker
                      className='select-fecha'
                      dateFormat="dd/MM/yyyy"
                      selected={endFecha}
                      onChange={(date) => setEndFecha(date)}
                    />
                  </div>
                  <div className='col col-lg-5 col-md-5 col-sm-5'>
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
                <button >continuar</button>
              </div>
        </div>
    </div>
  )
}
