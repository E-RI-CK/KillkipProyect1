import React from 'react';
import { ContenedorText1,DivBox12, Label,DivSelectTwoTable3 } from '../../elementos/table2';

const TextBox2 = () =>{
    return(

        <ContenedorText1>
            <DivBox12>
                <Label>
                    <b>COOPERACIÓN CON EL EQUIPO - <br/> Colaboración en el desarrollo de<br/> trabajos de integrantes de otros <br/> grupos. Trabajo en equipo. <br/> Capacidad de compartir <br/> conocimientos y habilidades.</b>
                </Label>
            </DivBox12>
            <DivSelectTwoTable3>
                <input type="number" id="input28" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectTwoTable3>
            <DivSelectTwoTable3>
                <input type="number" id="input29" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectTwoTable3>
            <DivSelectTwoTable3>
                <input type="number" id="input30" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectTwoTable3>
        </ContenedorText1>
    )
}

export default TextBox2;