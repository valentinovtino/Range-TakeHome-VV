import React, {useState} from 'react';
import '../stylesheets/LunchSpots.css';
import {mockObj} from '../api/helper';
import {useForm} from 'react-hook-form';

const LunchSpots = () => {
    const [lunches, setLunches] = useState(mockObj);
    const [lunchGenerator, setLunchGenerator] = useState({})
    const { register, formState, handleSubmit} = useForm();


    const randomLunch = () => {
        const length = lunches.length
        const randomVal = Math.floor(Math.random() * length);
        setLunchGenerator(lunches[randomVal]);   
    }

    const onSubmit = (data) => {
        console.log(data)
        setLunches([...lunches, data])
    }

    return (
        <div>
            <h1>Lunch App</h1>
            <button onClick={()=>randomLunch()}>Generate Lunch</button>
            <h2 className='lunchName'>{lunchGenerator.name}</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type='text' 
                        placeholder='Name' 
                        name='name'
                        />
                    <input
                        type='text' 
                        placeholder='Address'
                        name="address" 
                        />     
                    <input
                        type='url' 
                        placeholder='https://example.com'
                        name="link" 
                        />
                    <input
                        type='text' 
                        placeholder='Price Point'
                        name="price" 
                        />  
                    <input className='formSubmit' type='submit'/>
                </form>

        </div>
    )   
};

export default LunchSpots