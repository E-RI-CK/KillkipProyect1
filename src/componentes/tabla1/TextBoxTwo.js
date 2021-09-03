import React from 'react';
import Select from 'react-select';
import { ContenedorText,DivBox5,Label,DivSelectTwo } from '../../elementos/table'; 

const options = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"}
];



const TextBox2 = () =>{
    return(
        <ContenedorText>
            <DivBox5>
                <Label>
                    <b>SENTIDO COMÚN - Grado de <br/> cumplimiento de las normas, <br/> procedimientos y políticas <br/> existentes. </b>
                </Label>
            </DivBox5>
            <DivSelectTwo>
                <Select
                    className = "select4"
                    options = {options}    
                />
            </DivSelectTwo>
            <DivSelectTwo>
                <Select
                    className = "select5"
                    options = {options}    
                />
            </DivSelectTwo>
            <DivSelectTwo>
                <Select
                    className = "select6"
                    options = {options}    
                />
            </DivSelectTwo>
        </ContenedorText>
    )
}

export default TextBox2;