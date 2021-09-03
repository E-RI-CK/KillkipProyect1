import React from 'react';
import { ContenedorText,DivBox4, Label,DivSelectOne } from '../../elementos/table';
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
                    <b>CUMPLIMIENTO - Grado de <br/> compromiso que asume para el <br/> cumplimiento de las metas. </b>
                </Label>
            </DivBox4>
            <DivSelectOne>
                <Select
                    className = "select1"
                    options = {options}    
                />
            </DivSelectOne>
            <DivSelectOne>
                <Select
                    className = "select2"
                    options = {options}    
                />
            </DivSelectOne>
            <DivSelectOne>
                <Select
                    className = "select3"
                    options = {options}  
                    isDisabled = {false}  
                />
            </DivSelectOne>
            <DivSelectOne>
                <Select
                    className = "select4"
                    options = {options}  
                    isDisabled = {false}  
                />
            </DivSelectOne>
        </ContenedorText>
    )
}

export default TextBox1;