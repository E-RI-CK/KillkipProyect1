import React from "react";
import {Label,GrupoInput,LeyendaError,IconoValidacion,Input} from '../../elementos/formularios';
import { faTimesCircle,faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ComponentInput = ({state,changeState,type,label,placeholder,name,leyendError,regularExpresion}) => {
    
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
            <Label htmlFor = {name} validation={state.valid}>{label}</Label>
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

export default ComponentInput;