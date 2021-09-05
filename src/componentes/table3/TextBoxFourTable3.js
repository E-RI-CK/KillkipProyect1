import React from 'react';
import { ContenedorText1,DivBox14, Label,DivSelectFourTable3 } from '../../elementos/table2';

const TextBox4 = () =>{
    return(

        <ContenedorText1>
            <DivBox14>
                <Label>
                    <b>TRABAJO EN EQUIPO - Muestra<br/>aptitud para integrarse al equipo,se<br/> identifica facilmente con los <br/> objetivos del equipo y se muestra <br/> asequible al cambio.</b>
                </Label>
            </DivBox14>
            <DivSelectFourTable3>
                <input type="number" id="input34" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectFourTable3>
            <DivSelectFourTable3>
                <input type="number" id="input35" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectFourTable3>
            <DivSelectFourTable3>
                <input type="number" id="input36" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectFourTable3>
        </ContenedorText1>
    )
}

export default TextBox4;