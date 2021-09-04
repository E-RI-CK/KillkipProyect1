import React from 'react';

import { ContenedorText,DivBox5,Label,DivSelectTwo } from '../../elementos/table'; 



const TextBox2 = (props) =>{

    function ingresarData(e){
        props.setData({box2:{...props.data.box2,[e.target.name]:e.target.value}})
        console.log(props.data)
       }
    return(
        <ContenedorText>
            <DivBox5>
                <Label>
                    <b>SENTIDO COMÚN - Grado de <br/> cumplimiento de las normas, <br/> procedimientos y políticas <br/> existentes. </b>
                </Label>
            </DivBox5>
            <DivSelectTwo>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input4" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectTwo>
            <DivSelectTwo>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input5" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectTwo>
            <DivSelectTwo>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input6" name="input6" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectTwo>
        </ContenedorText>
    )
}

export default TextBox2;