import React,{useState} from 'react';
import './style.css';
import { Formulario,Asterisk,TitleNames} from './elementos/formularios';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTimesCircle,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/input';
import Date from './componentes/date';
import Title from './componentes/title';
import DescriptionForm from './componentes/DescriptionForm';

const App = () => {

  const [apellido1,changeLastName1] = useState({campo:'',valid: null});
  const [apellido2,changeLastName2] = useState({campo:'',valid: null});
  const [nombres,changeNames] = useState({campo:'',valid: null});

const exprecion = {
  usuario:  /^.{4,12}$/
}

  return(
    <main>
        <Title/>
        <Formulario action = ''>
          <TitleNames>Nombre del evaluado
              <Asterisk icon={faAsterisk}/>
          </TitleNames>
          <Input
              state={apellido1}
              changeState={changeLastName1}
              type="text"
              label="Apellido 1"
              placeholder="Apellido 1"
              name="apellido1"
              leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
              regularExpresion= {exprecion.usuario}
          />
          <Input
              state={apellido2}
              changeState={changeLastName2}
              type="text"
              label="Apellido 2"
              placeholder="Apellido 2"
              name="apellido2"
              leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
              regularExpresion=""
          />
          <Input
              state={nombres}
              changeState={changeNames}
              type="text"
              label="Nombres"
              placeholder="Nombres"
              name="nombres"
              leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
              regularExpresion= ""
          />
          <TitleNames>Fecha
              <Asterisk icon={faAsterisk}/>
          </TitleNames>
          <Date/>
          <DescriptionForm/>
        </Formulario>
    </main>
  )
}                 
export default App;