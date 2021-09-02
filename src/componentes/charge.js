import React from "react";
import {GrupoInput,LeyendaError,IconoValidacion,Input,TitleNames,Asterisk} from './../elementos/formularios';
import { faTimesCircle,faCheckCircle,faAsterisk} from '@fortawesome/free-solid-svg-icons';

const ComponentCharge = ({state,changeState,type,placeholder,name,leyendError,regularExpresion}) => {
    
    const onChange = (e) =>{
       changeState({...state, campo: e.target.value});// (agregar todos los campos del state,modificar campo con el valor actual)
       console.log(e.target.value);
    }
    
    const validation = () =>{
       if(regularExpresion){
            if(regularExpresion.test(state.campo)){
                //console.log("Input correcto");
                changeState({...state, valid: 'true'});
            }
            else{
                changeState({...state, valid: 'false'});
            }
        }
    }

    return(
        <div>
            <TitleNames>Cargo
                <Asterisk icon={faAsterisk}/>
            </TitleNames>
            <GrupoInput>
                <Input type = {type} 
                    placeholder={placeholder} 
                    id={name} 
                    value={state.campo}
                    onChange={onChange} 
                    onKeyUp={validation} //presiona tecla y cuando levantas ejecuta funcion
                    onBlur={validation}  //presiona tecla fuera del input
                    validation={state.valid}
                />
                <IconoValidacion validation={state.valid} icon={state.valid === 'true' ? faCheckCircle : faTimesCircle}/>
            </GrupoInput>
            <LeyendaError validation={state.valid}>{leyendError}</LeyendaError>
        </div>
    )
}

export default ComponentCharge;