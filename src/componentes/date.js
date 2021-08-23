import React from 'react';
import { Date,TitleNames,Asterisk } from '../elementos/formularios';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const ComponentDate = () =>{
    return(
        <div>
            <TitleNames>Fecha
                <Asterisk icon={faAsterisk}/>
            </TitleNames>
            <Date type="date" id="myDate" name="trip-start"
                value="2021-08-21"
                min="2019-12-31" max="2021-12-31">
            </Date>
        </div>
    )
}

export default ComponentDate;