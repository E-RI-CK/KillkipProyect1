import React from 'react';
import { ContenedorText,DivBox4, Label,DivSelect } from '../elementos/formularios';
import Select from 'react-select';

const options = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"}
];



const TextBox1 = () =>{
    return(
        <ContenedorText>
            <DivBox4>
                <Label>
                    <b>CUMPLIMIENTO - Grado de <br/> compromiso que asume para el <br/> cumplimiento de las metas </b>
                </Label>
            </DivBox4>
            <DivSelect>
                <Select
                    className = "select1"
                    options = {options}    
                />
            </DivSelect>
            <DivSelect>
                <Select
                    className = "select2"
                    options = {options}    
                />
            </DivSelect>
            <DivSelect>
                <Select
                    className = "select3"
                    options = {options}    
                />
            </DivSelect>
        </ContenedorText>
    )
}

export default TextBox1;