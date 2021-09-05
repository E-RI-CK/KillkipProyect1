import React from 'react';
import { ContenedorText1,DivBox14, Label,DivSelectFourTable2 } from '../../elementos/table1';

const TextBox4 = () =>{
    return(

        <ContenedorText1>
            <DivBox14>
                <Label>
                    <b>INICIATIVA - Muestra nuevas ideas<br/>de mejora, se anticipa a las<br/> dificultades y tienen gran capacidad<br/> para resolver problemas.</b>
                </Label>
            </DivBox14>
            <DivSelectFourTable2>
                <input type="number" id="input22" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectFourTable2>
            <DivSelectFourTable2>
                <input type="number" id="input23" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectFourTable2>
            <DivSelectFourTable2>
                <input type="number" id="input24" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectFourTable2>
        </ContenedorText1>
    )
}

export default TextBox4;