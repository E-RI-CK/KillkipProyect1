import React from 'react';
import { ContenedorText,DivBox4, Label,DivSelectOne } from '../../elementos/table';


const TextBox1 = () =>{
    return(

        <ContenedorText>
            <DivBox4>
                <Label>
                    <b>CUMPLIMIENTO - Grado de <br/> compromiso que asume para el <br/> cumplimiento de las metas. </b>
                </Label>
            </DivBox4>
            <DivSelectOne>
                <input type="number" id="input1" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectOne>
            <DivSelectOne>
                <input type="number" id="input2" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectOne>
            <DivSelectOne>
                <input type="number" id="input3" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectOne>
        </ContenedorText>
    )
}



export default TextBox1;