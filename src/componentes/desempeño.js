import React from 'react';
import { Asterisk, TitleNames } from '../elementos/formularios';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

const ComponentDesempeño = () => {
    return(
        <TitleNames>
            Desempeño
            <Asterisk icon={faAsterisk}/>
        </TitleNames>
        
    )
}

export default ComponentDesempeño;