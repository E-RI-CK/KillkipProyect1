import React from 'react';

import { ContenedorText,DivBox5,Label,DivSelectTwo } from '../../elementos/table'; 



const TextBox2 = () =>{
    return(
        <ContenedorText>
            <DivBox5>
                <Label>
                    <b>SENTIDO COMÚN - Grado de <br/> cumplimiento de las normas, <br/> procedimientos y políticas <br/> existentes. </b>
                </Label>
            </DivBox5>
            <DivSelectTwo>
                <input type="number" id="input4" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectTwo>
            <DivSelectTwo>
                <input type="number" id="input5" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectTwo>
            <DivSelectTwo>
                <input type="number" id="input6" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectTwo>
        </ContenedorText>
    )
}

export default TextBox2;