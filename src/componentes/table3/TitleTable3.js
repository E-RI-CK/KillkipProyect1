import React from 'react';
import { Asterisk, TitleNames } from '../../elementos/table2'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

const ComponentHabilidad = () => {
    return(
        <TitleNames>
            Liderazgo
            <Asterisk icon={faAsterisk}/>
        </TitleNames>
        
    )
}

export default ComponentHabilidad;