import React from 'react';
import { ContenedorText1,DivBox11, Label,DivSelectOneTable2 } from '../../elementos/table1';

const TextBox1 = () =>{
    return(

        <ContenedorText1>
            <DivBox11>
                <Label>
                    <b>RESPUESTA BAJO PRESIÓN - <br/> Capacidad de mantener la calma y <br/> transmitirla a sus compañeros. <br/> Capacidad de tomar decisiones <br/> correctas bajo presión. Capacidad de <br/> sacar provecho de situaciones <br/> adversas. Capacidad de realización en <br/> estos casos. </b>
                </Label>
            </DivBox11>
            <DivSelectOneTable2>
                <input type="number" id="input13" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectOneTable2>
            <DivSelectOneTable2>
                <input type="number" id="input14" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectOneTable2>
            <DivSelectOneTable2>
                <input type="number" id="input15" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectOneTable2>
        </ContenedorText1>
    )
}


export default TextBox1;