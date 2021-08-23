import React,{useState} from 'react';
import './style.css';
import { Formulario,Asterisk,TitleNames,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from './elementos/formularios';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/input';
import Date from './componentes/date';
import Title from './componentes/title';
import DescriptionForm from './componentes/DescriptionForm';

const App = () => {

  const [apellido1,changeLastName1] = useState({campo:'',valid: null});
  const [apellido2,changeLastName2] = useState({campo:'',valid: null});
  const [nombres,changeNames] = useState({campo:'',valid: null});
  const [formulario,changeFomulario] = useState(null);
  const expression = {
    name:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ]{1,40}$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(apellido1.valid === 'true' && 
       apellido2.valid === 'true' &&
       nombres.valid === 'true'){
       changeFomulario(true);
       changeLastName1({campo: '', valid: 'null' });
       changeLastName2({campo: '', valid: 'null' });
       changeNames({campo: '', valid: 'null' });
      }
    else{
      changeFomulario(false);

    }
    
  }


  return(
    <main>
        <Title/>
        <Formulario action = '' onSubmit={onSubmit}>
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
              regularExpresion= {expression.lastName}
          />
          <Input
              state={apellido2}
              changeState={changeLastName2}
              type="text"
              label="Apellido 2"
              placeholder="Apellido 2"
              name="apellido2"
              leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
              regularExpresion={expression.lastName}
          />
          <Input
              state={nombres}
              changeState={changeNames}
              type="text"
              label="Nombres"
              placeholder="Nombres"
              name="nombres"
              leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
              regularExpresion= {expression.name}
          />
          <TitleNames>Fecha
              <Asterisk icon={faAsterisk}/>
          </TitleNames>
          <Date/>
					{formulario === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				  </MensajeError>}
				  <ContenedorBotonCentrado>
					  <Boton type="submit">Enviar</Boton>
					  {formulario === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				  </ContenedorBotonCentrado>
        </Formulario>
        <DescriptionForm/>
    </main>
  )
}                
export default App;