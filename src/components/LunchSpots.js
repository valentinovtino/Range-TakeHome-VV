import React, {useState, useEffect} from 'react';
import '../stylesheets/LunchSpots.css';
import {mockObj} from '../api/helper';
import {useForm} from 'react-hook-form';

const LunchSpots = () => {
    const [lunches, setLunches] = useState(mockObj);
    const [lunchGenerator, setLunchGenerator] = useState({})
    const [toggle, setToggle] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);
    const [lunchError, setLunchError] = useState(false);
    const { register, formState, handleSubmit} = useForm();

    useEffect(()=> {
        const removedLunch = lunches.filter((lunch) => {
            return lunch.name != lunchGenerator.name
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
    }


    return (
        <div>
            {
            toggle && lunchGenerator ?
                <h2 className='lunchName'>{lunchGenerator.name}</h2> :
                <h1 className='introTitle' >...hungry?</h1> 
            }
            { lunchError ?
                <h3 >I'm sorry none of our segguestions have satisfied your hunger. Please submit a Lunch Spot to optimize your search, thank you! </h3> :
                null
            }

            <button onClick={()=>randomLunch()}>Generate Lunch</button>
            <button onClick={()=>showForm()} className='generateBtn'> Submit A Lunch </button>

            
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type='text' 
                        placeholder='Name' 
                        name='name'
                        {...register('name', {required: 'Name required. Please enter the name of your Lunch Spot!',})}
                        />
                        {formState.errors.name && formState.errors.name.message}
                    <input
                        type='text' 
                        placeholder='Address'
                        name="address" 
                        {...register('address', {required:'Address required. Please enter the address of your Lunch Spot!'})}
                        />
                        {formState.errors.address && formState.errors.address.message}     
                    <input
                        type='url' 
                        placeholder='https://example.com'
                        name="link" 
                        {...register('link', {required: true})}
                        />
                    <input
                        type='text' 
                        placeholder='Price Point'
                        name="price" 
                        {...register('price', {required: true})}
                        />  
                    <input className='formSubmit' type='submit'/>
                </form>

        </div>
    )   
};

export default LunchSpots