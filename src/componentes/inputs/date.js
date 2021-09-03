import React from 'react';
import { Date,TitleNames,Asterisk,GrupoInput,LeyendaError,IconoValidacion} from '../../elementos/formularios';
import { faAsterisk,faCheckCircle,faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ComponentDate = ({type,id,state,changeState,leyendError,name}) =>{

    const onChange = (e) => {

        changeState({...state, campo: e.target.value});
        console.log(e.target.value);
    }

    const validation = () => {
        if(state.campo !== ''){
            changeState({...state,valid: 'true'});
        }
        else{
            changeState({...state,valid: 'false'});
        }
    }



    return(
        <div>
             <GrupoInput>
                <TitleNames>Fecha
                    <Asterisk icon={faAsterisk}/>
                </TitleNames>
                <Date 
                state={state}
                changeState={changeState}
                type={type} 
                id={id} 
                value={state.campo}
                name={name}
                onChange={onChange}
                onKeyUp={validation} //presiona tecla y cuando levantas ejecuta funcion
                onBlur={validation}
                min="2019-12-31" 
                max="2021-12-31"
                validation={state.valid}
                >
                </Date>
                <IconoValidacion validation={state.valid} icon={state.valid === 'true' ? faCheckCircle : faTimesCircle}/>
            </GrupoInput>
            <LeyendaError validation={state.valid}>{leyendError}</LeyendaError>
        </div>
    )
}

export default ComponentDate;