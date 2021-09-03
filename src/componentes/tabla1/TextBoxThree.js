import React from 'react';
import Select from 'react-select';
import { ContenedorText,DivBox6,Label,DivSelectThree } from '../../elementos/table'; 

const options = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"}
];


const TextBox3 = () =>{
    return(
        <ContenedorText>
            <DivBox6>
                <Label>
                    <b>ORIENTACIÓN DE RESULTADOS -<br/> Termina oportunamente y cumple <br/> con los requerimientos que se le <br/> encomienda realizando un volumen <br/> adecuado a tareas. </b>
                </Label>
            </DivBox6>
            <DivSelectThree>
                <Select
                    className = "select7"
                    options = {options}    
                />
            </DivSelectThree>
            <DivSelectThree>
                <Select
                    className = "select8"
                    options = {options}    
                />
            </DivSelectThree>
            <DivSelectThree>
                <Select
                    className = "select9"
                    options = {options}    
                />
            </DivSelectThree>
        </ContenedorText>
    )
}

export default TextBox3;
