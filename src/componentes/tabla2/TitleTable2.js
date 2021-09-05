import React from 'react';
import { Asterisk, TitleNames } from '../../elementos/formularios'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

const ComponentHabilidad = () => {
    return(
        <TitleNames>
            Habilidades
            <Asterisk icon={faAsterisk}/>
        </TitleNames>
        
    )
}

export default ComponentHabilidad;