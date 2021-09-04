import React from "react";
import { ContenedorText,DivBox7,Label,DivSelectFour } from '../../elementos/table'; 

const TextBox4 = () =>{
    return(
        <ContenedorText>
            <DivBox7>
                <Label>
                    <b>RESPONSABILIDAD - Grado de<br/> tranquilidad que le genera a al <br/> equipo de trabajo. </b>
                </Label>
            </DivBox7>
            <DivSelectFour>
                <input type="number" id="input10" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectFour>
            <DivSelectFour>
                <input type="number" id="input11" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectFour>
            <DivSelectFour>
                <input type="number" id="input12" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectFour>
        </ContenedorText>
    )
}

export default TextBox4;