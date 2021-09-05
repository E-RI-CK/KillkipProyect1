import React from 'react';
import { ContenedorText1,DivBox13, Label,DivSelectThreeTable3 } from '../../elementos/table2';

const TextBox3 = () =>{
    return(

        <ContenedorText1>
            <DivBox13>
                <Label>
                    <b>CAPACIDAD DE ACEPTAR CRÍTICAS -<br/>Capacidad de recibir críticas<br/> constructivas en forma abierta.<br/> Grado de aceptación a las mismas. <br/> Capacidad de no ofenderse y <br/>aprovechar las críticas para mejorar.</b>
                </Label>
            </DivBox13>
            <DivSelectThreeTable3>
                <input type="number" id="input31" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectThreeTable3>
            <DivSelectThreeTable3>
                <input type="number" id="input32" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectThreeTable3>
            <DivSelectThreeTable3>
                <input type="number" id="input33" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectThreeTable3>
        </ContenedorText1>
    )
}

export default TextBox3;