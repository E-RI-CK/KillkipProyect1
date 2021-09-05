import React from 'react';
import { DivBox1,DivBox2,DivBox3,DivBox4,DivBox5,DivBox6,DivBox7,ContenedorText, } from '../../elementos/PromedioEstilo';


const Promedio = () =>{
    return(
        <div>
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
            <ContenedorText>
                        <DivBox4>
                             <p><b>Promedio</b></p> 
                        </DivBox4>   
                        <DivBox5>
                             <p></p> 
                        </DivBox5>
                        <DivBox6>
                             <p></p> 
                        </DivBox6>    
                        <DivBox7>
                             <p></p> 
                        </DivBox7>
            </ContenedorText>
        </div>
    )
}

export default Promedio;