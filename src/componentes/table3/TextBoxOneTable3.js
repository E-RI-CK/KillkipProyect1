import React from 'react';
import { ContenedorText1,DivBox11, Label,DivSelectOneTable3 } from '../../elementos/table2';

const TextBox1 = () =>{
    return(

        <ContenedorText1>
            <DivBox11>
                <Label>
                    <b>COORDINACIÓN - Carisma, liderazgo <br/> natural, capacidad de mediar en los <br/> conflictos internos y capacidad de <br/> mediar en los conflictos con los <br/> clientes.</b>
                </Label>
            </DivBox11>
            <DivSelectOneTable3>
                <input type="number" id="input25" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectOneTable3>
            <DivSelectOneTable3>
                <input type="number" id="input26" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectOneTable3>
            <DivSelectOneTable3>
                <input type="number" id="input27" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectOneTable3>
        </ContenedorText1>
    )
}


export default TextBox1;