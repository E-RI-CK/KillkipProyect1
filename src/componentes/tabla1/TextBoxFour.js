import React from "react";
import { ContenedorText,DivBox7,Label,DivSelectFour } from '../../elementos/table'; 

const TextBox4 = (props) =>{
    function ingresarData(e){
        props.setData({box4:{...props.data.box4,[e.target.name]:e.target.value}})
        console.log(props.data)
       }
    return(
        <ContenedorText>
            <DivBox7>
                <Label>
                    <b>RESPONSABILIDAD - Grado de<br/> tranquilidad que le genera a al <br/> equipo de trabajo. </b>
                </Label>
            </DivBox7>
            <DivSelectFour>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input10" name="input10" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectFour>
            <DivSelectFour>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input11" name="input11" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectFour>
            <DivSelectFour>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input12" name="input12" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectFour>
        </ContenedorText>
    )
}

export default TextBox4;