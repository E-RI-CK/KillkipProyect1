import React from 'react';
import { ContenedorText1,DivBox12, Label,DivSelectTwoTable2 } from '../../elementos/table1';

const TextBox2 = () =>{
    return(

        <ContenedorText1>
            <DivBox12>
                <Label>
                    <b>ORGANIZACIÓN - <br/> Planifica sus<br/> actividades, mantiene en orden sus <br/> tareas incluso cuando maneja <br/> múltiples temas, hace uso de <br/> indicadores y se preocupa por <br/> alcanzar las metas establecidas.</b>
                </Label>
            </DivBox12>
            <DivSelectTwoTable2>
                <input type="number" id="input16" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectTwoTable2>
            <DivSelectTwoTable2>
                <input type="number" id="input17" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectTwoTable2>
            <DivSelectTwoTable2>
                <input type="number" id="input18" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectTwoTable2>
        </ContenedorText1>
    )
}

export default TextBox2;