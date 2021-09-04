import React from 'react';
import { ContenedorText,DivBox6,Label,DivSelectThree } from '../../elementos/table'; 


const TextBox3 = (props) =>{
    function ingresarData(e){
        props.setData({box3:{...props.data.box3,[e.target.name]:e.target.value}})
        console.log(props.data)
       }
    return(
        <ContenedorText>
            <DivBox6>
                <Label>
                    <b>ORIENTACIÓN DE RESULTADOS -<br/> Termina oportunamente y cumple <br/> con los requerimientos que se le <br/> encomienda realizando un volumen <br/> adecuado a tareas. </b>
                </Label>
            </DivBox6>
            <DivSelectThree>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input7" name="input7" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectThree>
            <DivSelectThree>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input8" name="input8" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectThree>
            <DivSelectThree>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input9" name="input9" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectThree>
        </ContenedorText>
    )
}

export default TextBox3;
