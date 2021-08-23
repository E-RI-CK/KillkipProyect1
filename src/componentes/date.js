import React from 'react';
import { Date } from '../elementos/formularios';

const ComponentDate = () =>{
    return(
        <Date type="date" id="myDate" name="trip-start"
            value="2021-08-21"
            min="2019-12-31" max="2021-12-31">
        </Date>
    )
}

export default ComponentDate;