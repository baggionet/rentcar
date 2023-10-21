
import './App.css';
import menu from './asset/img/menu.png';
import logo from './asset/img/logo.png';
import telefono from './asset/img/telefonoMenu.png';
import ef from './asset/img/elijeFecha.png';
import { Formulario } from './components/Formulario';
import { Cinta } from './components/Cinta';
import { Footer } from './components/Footer';
import { SubMain } from './components/SubMain';

function App() {
  return (
    <div className="App">
      <div className='contenedor-menu'>
        <div className='row'>
          <div className='col col-lg-1 col-md-2 col-sm-2 menu'>
            <img src={menu}/>
          </div>
          <div className='col col-lg-2 col-md-2 col-sm-2 logo'>
            <img src={logo}/>
          </div>
          <div className='col pe-5 text-end tel'>
            <img src={telefono}/>
          </div>
        </div>
      </div>

      <div className='fondo'>
        <div className='main'>
          <div className='row'> 
            <div className='col col-md-8 col-sm-8'>
              <img src={ef} />
            </div>
            <div className='col-md-4 col-sm-4'>
              <h1>Paso 1</h1>
            </div>
          </div>
          <Formulario />
        </div>
      </div>
      <Cinta />
      <SubMain />
      <Footer />
    </div>
  );
}

export default App;
