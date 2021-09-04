import React from 'react';
import { ContenedorText,DivBox6,Label,DivSelectThree } from '../../elementos/table'; 


const TextBox3 = () =>{
    return(
        <ContenedorText>
            <DivBox6>
                <Label>
                    <b>ORIENTACIÓN DE RESULTADOS -<br/> Termina oportunamente y cumple <br/> con los requerimientos que se le <br/> encomienda realizando un volumen <br/> adecuado a tareas. </b>
                </Label>
            </DivBox6>
            <DivSelectThree>
                <input type="number" id="input7" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectThree>
            <DivSelectThree>
                <input type="number" id="input8" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectThree>
            <DivSelectThree>
                <input type="number" id="input9" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectThree>
        </ContenedorText>
    )
}

export default TextBox3;
