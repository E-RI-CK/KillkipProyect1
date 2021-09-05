import React, { useState } from 'react';
import './style.css';
import { Formulario, Asterisk, TitleNames, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './elementos/formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faAsterisk } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/inputs/input';
import Date from './componentes/inputs/date';
import Title from './componentes/title';
import DescriptionForm from './componentes/DescriptionForm';
import Desempeño from './componentes/desempeño';
import Charge from './componentes/inputs/charge';
import Textbox from './componentes/tabla1/TextBox';
import TextBoxOne from './componentes/tabla1/TextBoxOne';
import TextBoxTwo from './componentes/tabla1/TextBoxTwo';
import TextBoxThree from './componentes/tabla1/TextBoxThree';
import TextBoxFour from './componentes/tabla1/TextBoxFour';
import TextBox1 from './componentes/tabla2/TextBox1';
import TextBoxOneTable2 from './componentes/tabla2/TextBoxOneTable2';
import TextBoxTwoTable2 from './componentes/tabla2/TextBoxTwoTable2';
import TextBoxThreeTable2 from './componentes/tabla2/TextBoxThreeTable2';
import TextBoxFourTable2 from './componentes/tabla2/TextBoxFourTable2';
import Promedio from "./componentes/Promedio/Promedio";
import Habilidad from "./componentes/tabla2/TitleTable2";
import Liderazgo from "./componentes/table3/TitleTable3";
import TextBox2 from "./componentes/table3/TextBox2";
import TextBoxOneTable3 from './componentes/table3/TextBoxOneTable3';
import TextBoxTwoTable3 from './componentes/table3/TextBoxTwoTable3';
const App = () => {

  const [Fila1, setFila1] = useState({ box1: { input1: '1', input2: '1', input3: '1' } });
  const [Fila2, setFila2] = useState({ box2: { input4: '1', input5: '1', input6: '1' } });
  const [Fila3, setFila3] = useState({ box3: { input7: '1', input8: '1', input9: '1' } });
  const [Fila4, setFila4] = useState({ box4: { input10: '1', input11: '1', input12: '1' } });
  const Bloque1 = { Fila1, Fila2, Fila3, Fila4 };


  const [apellido1, changeLastName1] = useState({ campo: '', valid: null });
  const [apellido2, changeLastName2] = useState({ campo: '', valid: null });
  const [nombres, changeNames] = useState({ campo: '', valid: null });
  const [cargo, changeCharge] = useState({ campo: '', valid: null });
  const [fecha, changeDate] = useState({ campo: '', valid: null });
  const [formulario, changeFomulario] = useState(null);

  const expression = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ]{1,40}$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    charge: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  }

  const onSubmit = (e) => {
    console.log(Bloque1)
    e.preventDefault();

    if (apellido1.valid === 'true' &&
      apellido2.valid === 'true' &&
      nombres.valid === 'true') {
      fetch('https://killkip-backend.herokuapp.com/api/form', {
        method:"POST",
        body: JSON.stringify(
          {
            apellidoP: apellido1.campo,
            apellidoM: apellido2.campo,
            nombres: nombres.campo,
            fecha: "2002-12-31",
            desempeño: {
                cumplimiento: {
                    colaborador: Number(Bloque1.Fila1.box1.input1),
                  encargado: Number(Bloque1.Fila1.box1.input2),
                    director: Number(Bloque1.Fila1.box1.input3)
                },
                sentido_comun: {
                    colaborador: Number(Bloque1.Fila2.box2.input4),
                    encargado: Number(Bloque1.Fila2.box2.input5),
                    director: Number(Bloque1.Fila2.box2.input6)
                },
                orientacion_de_resultados: {
                    colaborador: Number(Bloque1.Fila3.box3.input7),
                    encargado: Number(Bloque1.Fila3.box3.input8),
                    director: Number(Bloque1.Fila3.box3.input9)
                },
                responsabilidad: {
                  colaborador: Number(Bloque1.Fila4.box4.input10),
                  encargado: Number(Bloque1.Fila4.box4.input11),
                  director: Number(Bloque1.Fila4.box4.input12)
                }
            },
            factor_humano: {
                actitud_organizacion: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                actitud_equipo: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                actitud_colaboradores: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                predisposicion: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                puntualidad: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                }
            },
            habilidades: {
                respuesta: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                organizacion: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                potencial: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                iniciativa: {
                  colaborador: 5,
                    encargado: 5,
                    director: 5
                }
            },
            calidad: {
                exactitud: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                grado_de_conocimiento: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                precision: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                relaciones_interpersonales: {
                  colaborador: 5,
                    encargado: 5,
                    director: 5
                },
                presentacion_personal: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                }
            },
            liderazgo: {
                coordinacion: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                cooperacion: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                capacidad: {
                  colaborador: 5,
                    encargado: 5,
                    director: 5
                },
                trabajo: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                },
                creatividad: {
                  colaborador: 5,
                  encargado: 5,
                  director: 5
                }
            },
            promedios: {
                eval_colaborador: 5,
                eval_jefe: 5,
                eval_gerente: 5,
                promedio_general: 5
            },
            observaciones: "sin observaciones",
            firma: "firma123"
        }),
        headers: {
          "Content-type": "application/json",
        }
      });
      changeFomulario(true);
      changeLastName1({ campo: '', valid: 'null' });
      changeLastName2({ campo: '', valid: 'null' });
      changeNames({ campo: '', valid: 'null' });
      changeCharge({campo:'',valid: 'null'});
      changeDate({campo:'', valid: 'null'});
    }
    else {
      changeFomulario(false);

    }



  }


  return (
    <main>
      <Title />
      <Formulario action='' onSubmit={onSubmit}>
        <TitleNames>Nombre del evaluado
          <Asterisk icon={faAsterisk} />
        </TitleNames>
        <Input
          state={apellido1}
          changeState={changeLastName1}
          type="text"
          label="Apellido 1"
          placeholder="Apellido 1"
          name="apellido1"
          leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
          regularExpresion={expression.lastName}
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
          regularExpresion={expression.name}
        />
        <Charge
          state={cargo}
          changeState={changeCharge}
          type="text"
          placeholder="Cargo"
          name="cargo"
          leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
          regularExpresion={expression.charge}
        />
        <Date
          state={fecha}
          changeState={changeDate}
          type='date'
          id='myDate'
          name='trip-start'
          leyendError='Ingrese una fecha'
        />
        <DescriptionForm />
        <Desempeño/>
        <Textbox/>
        <TextBoxOne/>
        <TextBoxTwo/>
        <TextBoxThree/>
        <TextBoxFour/>
        <TextBox1/>
        <Habilidad/>
        <TextBoxOneTable2/>
        <TextBoxTwoTable2/>
        <TextBoxThreeTable2/>
        <TextBoxFourTable2/>
        <Liderazgo/>
        <TextBox2/>
        <TextBoxOneTable3/>
        <TextBoxTwoTable3/>
        
        
      </Formulario>

    </main>
  )
}
export default App;

/*
<Promedio/>
{formulario === false && <MensajeError>
  <p>
    <FontAwesomeIcon icon={faExclamationTriangle} />
    <b>Error:</b> Por favor rellena el formulario correctamente.
  </p>
</MensajeError>}
<ContenedorBotonCentrado>
  <Boton type="submit">Enviar</Boton>
  {formulario === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
</ContenedorBotonCentrado>
*/