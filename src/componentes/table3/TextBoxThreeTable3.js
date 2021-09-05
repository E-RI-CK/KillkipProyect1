import React from 'react';
import { ContenedorText1,DivBox13, Label,DivSelectThreeTable2 } from '../../elementos/table1';

const TextBox3 = () =>{
    return(

        <ContenedorText1>
            <DivBox13>
                <Label>
                    <b>POTENCIAL Y CAPACIDAD DE<br/>APRENDIZAJE - Tiene perfil<br/> funcional. Inquietud y capacidad<br/> para conocer las distintas <br/> herramientas necesarias para el <br/>trabajo.</b>
                </Label>
            </DivBox13>
            <DivSelectThreeTable2>
                <input type="number" id="input19" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectThreeTable2>
            <DivSelectThreeTable2>
                <input type="number" id="input20" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectThreeTable2>
            <DivSelectThreeTable2>
                <input type="number" id="input21" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectThreeTable2>
        </ContenedorText1>
    )
}

export default TextBox3;