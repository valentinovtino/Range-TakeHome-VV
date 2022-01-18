import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const LunchForm = ({onSubmit, showForm, toggleForm, register, handleSubmit, formState}) => {
    return (
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
            </form>
    )
}

export default LunchForm