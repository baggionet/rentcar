import React from 'react'
import logoblanco from '../asset/img/logoBlanco.png';

export const Footer = () => {
  return (
    <div className=''>
        <div className='row fondo-footer'>
            <div className='col col-md-2 col-sm-3 f-logo'>
                <img src={logoblanco} />
            </div>

            <div className='col col-md-10 col-sm-9'>
                <div className='f-text'>
                    <span>Atención al cliente <br />
                        01 800 272 02 91 <br /> 
                        Nuestro horario de atención telefónica es 24 hrs.
                    </span>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col col-md-6 col-sm-6 text-center f-content1-text py-2'>
                <span className='f-subtext'>
                    Sitio clásico
                </span>
            </div>
            <div className='col col-md-6 col-sm-6 text-center py-2'>
                <span className='f-subtext'>
                    Términos y condiciones
                </span>
            </div>
        </div>
    </div>
  )
}
