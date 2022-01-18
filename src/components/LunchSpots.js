import React, {useState} from 'react';
import '../stylesheets/LunchSpots.css';
import {mockObj} from '../api/helper';

const LunchSpots = () => {
    const [lunches, setLunches] = useState(mockObj);
    const [lunchGenerator, setLunchGenerator] = useState({})

    const randomLunch = () => {
        const length = lunches.length
        const randomVal = Math.floor(Math.random() * length);
        setLunchGenerator(lunches[randomVal]);   
    }

    return (
        <div>
            <h1>Lunch App</h1>
            <button onClick={()=>randomLunch()}>Generate Lunch</button>
            <h2 className='lunchName'>{lunchGenerator.name}</h2>

        </div>
    )   
};

export default LunchSpots