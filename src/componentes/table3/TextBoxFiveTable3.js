import React from 'react';
import { ContenedorText1,DivBox15, Label,DivSelectFiveTable3 } from '../../elementos/table2';

const TextBox5 = () =>{
    return(

        <ContenedorText1>
            <DivBox15>
                <Label>
                    <b>CREATIVIDAD - Inquietud por<br/>avanzar y mejorar.<br/>Facilidad para ofrecerse como ejecutor de sus <br/> propuestas.Tiene empuje. Ofrece <br/>alternativas innovados para <br/> solucionar problemas.</b>
                </Label>
            </DivBox15>
            <DivSelectFiveTable3>
                <input type="number" id="input37" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectFiveTable3>
            <DivSelectFiveTable3>
                <input type="number" id="input38" name="tentacles" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectFiveTable3>
            <DivSelectFiveTable3>
                <input type="number" id="input39" name="tentacles" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectFiveTable3>
        </ContenedorText1>
    )
}

export default TextBox5;