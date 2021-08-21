import React from 'react';
import './style.css';
import { Formulario} from './elementos/formularios';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTimesCircle,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/input';

const App = () => {
  return(
    <main>
        <Formulario action = ''>
          <Input/>
            
          
        </Formulario>
    </main>
  )
}                 
export default App;