import React from "react";
import { ContenedorText,DivBox1,DivBox2,DivBox3 } from "../../elementos/table";

const ComponentTextBox = () => {
    return(
        <ContenedorText>
            <DivBox1>
                <p>Colaborador del proyecto</p>
            </DivBox1>
            <DivBox2>
                <p>Encargado del proyecto</p>
            </DivBox2>
            <DivBox3>
                <p>Director del proyecto</p>
            </DivBox3>
        </ContenedorText>
    )
}

export default ComponentTextBox;