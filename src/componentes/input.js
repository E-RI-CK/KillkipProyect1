import React from "react";
import {Label,GrupoInput,LeyendaError,IconoValidacion,Input} from './../elementos/formularios';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponentInput = () =>{
    return(
        <div>
            <Label htmlFor = "apellido1">Apellido 1</Label>
                <GrupoInput>
                    <Input type = "text" placeholder="Apellido 1" id="apellido1"/>
                    <IconoValidacion icon={faTimesCircle}/>
                </GrupoInput>
            <LeyendaError>Error en validación</LeyendaError>
        </div>
    )
}

export default ComponentInput;