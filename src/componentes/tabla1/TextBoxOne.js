import React from 'react';
import { ContenedorText,DivBox4, Label,DivSelectOne } from '../../elementos/table';

const TextBox1 = (props) =>{
    
   function ingresarData(e){
    props.setData({box1:{...props.data.box1,[e.target.name]:e.target.value}})
    console.log(props.data)
   }
    return(

        <ContenedorText>
            <DivBox4>
                <Label>
                    <b>CUMPLIMIENTO - Grado de <br/> compromiso que asume para el <br/> cumplimiento de las metas. </b>
                </Label>
            </DivBox4>
            <DivSelectOne>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input1" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectOne>
            <DivSelectOne>
                <input onChange={ingresarData}  onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input2" defaultValue = '1'
                min="1" max="5"
                />
            </DivSelectOne>
            <DivSelectOne>
                <input onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input3" defaultValue = '1'
                    min="1" max="5"
                />
            </DivSelectOne>
        </ContenedorText>
    )
}


export default TextBox1;