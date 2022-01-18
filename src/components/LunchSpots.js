import React, {useState, useEffect} from 'react';
import '../stylesheets/LunchSpots.css';
import {mockObj} from '../api/helper';
import {useForm} from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import image from '../stylesheets/images/chefHand.png';
import LunchDetails from '../components/LunchDetails';
import LunchForm from '../components/LunchForm';

const LunchSpots = () => {
    const [lunches, setLunches] = useState(mockObj);
    const [lunchGenerator, setLunchGenerator] = useState({})
    const [toggle, setToggle] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);
    const [lunchError, setLunchError] = useState(false);
    const { register, formState, reset, handleSubmit} = useForm();

    useEffect(()=> {
        const removedLunch = lunches.filter((lunch) => {
            return lunch.name !== lunchGenerator.name
        })
        setLunches(removedLunch);
    }, [lunchGenerator]);

    const showForm = () => {
        setToggleForm(!toggleForm)
    }
    
    const randomLunch = () => {
        setToggle(true);
        const length = lunches.length
        const randomVal = Math.floor(Math.random() * length);
        setLunchGenerator(lunches[randomVal]);
        if (lunches.length === 0) {
            setLunchError(true);
        }     
    }

    const onSubmit = (data) => {
        setLunches([...lunches, data])
        if (lunchError === true) {
            setLunchError(false)
        }
        reset()
    }

    return (
        <div className='mainContainer'>
            { toggle && lunchGenerator ?
            <LunchDetails lunchGenerator={lunchGenerator}/> :
                <h1 className='introTitle' >...hungry?</h1> }
            { lunchError ?
                <h3 className='suggestionErr'>I'm sorry none of our segguestions have satisfied your hunger. 
                                            Please submit a Lunch Spot to optimize your search, thank you! </h3> :
                null}
            <img alt="chef's hand displaying lunch spot optioins" src={image} />
            <button onClick={()=>randomLunch()} className='generateBtn'>Generate Lunch</button>
            <button onClick={()=>showForm()} className='generateBtn'> Submit A Lunch <AddIcon/></button>
            {toggleForm ?
            <LunchForm 
                onSubmit={handleSubmit(onSubmit)} 
                showForm={showForm} 
                toggleForm={toggleForm} 
                register={register} 
                handleSubmit={handleSubmit} 
                formState={formState}/> :
                null}
        </div>
    )   
};

export default LunchSpots