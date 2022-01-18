import React, {useState} from 'react';
import '../stylesheets/LunchSpots.css';
import {mockObj} from '../api/helper';

const LunchSpots = () => {
    const [lunches, setLunches] = useState(mockObj);

    return (
        <div>
            <h1>{lunches.map(x=>x.name)}</h1>
        </div>
    )   
};

export default LunchSpots