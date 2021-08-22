import React from "react";
import {Label,GrupoInput,LeyendaError,IconoValidacion,Input} from './../elementos/formularios';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponentInput = ({state,changeState,type,label,placeholder,name,leyendError,expresionRegular}) =>{
    
    const onChange = (e) =>{
       // changeState({...state, campo: e.target.value});
       console.log(e.target.value);
    }
    
   /* const validation = () =>{
       if(expresionRegular){
            if(expresionRegular.test(state.campo)){
                console.log("Input correcto");
            }
            else{
                console.log("Input incorrecto");
            }
        }
    }*/

    return(
        <div>
            <Label htmlFor = {name}>{label}</Label>
                <GrupoInput>
                    <Input type = {type} 
                    placeholder={placeholder} 
                    id={name} 
                    value={state.campo} 
                    onChange={onChange} 
                    //onKeyUp={validation} 
                    //onBlur={validation}
                    />
                    <IconoValidacion icon={faTimesCircle}/>
                </GrupoInput>
            <LeyendaError>{leyendError}</LeyendaError>
        </div>
    )
}

export default ComponentInput;