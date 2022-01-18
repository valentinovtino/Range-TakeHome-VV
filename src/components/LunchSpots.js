import React, {useState, useEffect} from 'react';
import '../stylesheets/LunchSpots.css';
import {mockObj} from '../api/helper';
import {useForm} from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import image from '../stylesheets/images/chefHand.png';
import iconImage from '../stylesheets/images/chefIcon.png';

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
            <div className='lunchContainer'>
                <h2 className='lunchName'>{lunchGenerator.name}</h2> 
                <div className='displayDetails'>
                    <img className='imageIcon' src={iconImage} /> 
                    <div className='lunchDetails'>
                        <p className='font'>{lunchGenerator.address}</p>
                        <a className='font' href={lunchGenerator.link}>{lunchGenerator.name}'s website</a> 
                        <p className='font' >{lunchGenerator.price}</p>
                    </div>
                </div>
            </div> :
                <h1 className='introTitle' >...hungry?</h1> }
            { lunchError ?
                <h3 className='suggestionErr'>I'm sorry none of our segguestions have satisfied your hunger. Please submit a Lunch Spot to optimize your search, thank you! </h3> :
                null
            }
            <img src={image} />
            <button onClick={()=>randomLunch()} className='generateBtn'>Generate Lunch</button>
            <button onClick={()=>showForm()} className='generateBtn'> Submit A Lunch <AddIcon/></button>
            {toggleForm ?
            <form className={toggleForm ? "Form-container" : null} onSubmit={handleSubmit(onSubmit)}>
                    <CancelIcon className='exitFormBtn' onClick={showForm} />
                    <input
                        className='formInput' 
                        type='text' 
                        placeholder='Name' 
                        name='name'
                        {...register('name', {required: 'Name required. Please enter the name of your Lunch Spot!',})}
                        />
                        {formState.errors.name && formState.errors.name.message}
                    <input
                        className='formInput' 
                        type='text' 
                        placeholder='Address'
                        name="address" 
                        {...register('address', {required:'Address required. Please enter the address of your Lunch Spot!'})}
                        />
                        {formState.errors.address && formState.errors.address.message}     
                    <input
                        className='formInput' 
                        type='url' 
                        placeholder='https://example.com'
                        pattern="https://.*" 
                        name="link" 
                        {...register('link', {required: 'Don\'t forget to include https://'})}
                        />
                    <input
                        className='formInput' 
                        type='text' 
                        placeholder='Price Point'
                        name="price" 
                        {...register('price', {required: true})}
                        />  
                    <input className='formSubmit' type='submit'/>
                </form> :
                null}
        </div>
    )   
};

export default LunchSpots