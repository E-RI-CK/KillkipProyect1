import React from 'react';
import '../prueba.css';

const DivPrueba = () =>{
    return(
        <div class="container">
        <div class="titulo"></div>
        <div class="Cuerpo">
            <div class="cumplimientos"></div>
            <div class="sentido"></div>
            <div class="orientacion"></div>
            <div class="responsabilidad"></div>
            <div class="colaborador">
                <p>Colaborador del proyecto</p>
            </div>
            <div class="encargado"></div>
            <div class="director"></div>
            <div class="p1">
                <input type="number" id="input1" name="input1" defaultValue = '1'
                min="1" max="5"
                />
            </div>
            <div class="p2"></div>
            <div class="p3"></div>
            <div class="p4"></div>
            <div class="p5"></div>
            <div class="p6"></div>
            <div class="p7"></div>
            <div class="p8"></div>
            <div class="p9"></div>
            <div class="p10"></div>
            <div class="p11"></div>
            <div class="p12"></div>
        </div>
        <div class="titulo-texto">
            <div class="titulo-texto-tipo">
                <h1>Desempeño</h1>
            </div>
        </div>
    </div>

    )
}

export default DivPrueba;