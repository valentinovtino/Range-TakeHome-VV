import React from 'react';
import iconImage from '../stylesheets/images/chefIcon.png';

const LunchDetails = ({lunchGenerator}) => {
    const {name, address, link, price} = lunchGenerator;

    return (
        <div className='lunchContainer'>
            <h2 className='lunchName'>{name}</h2> 
            <div className='displayDetails'>
                <img className='imageIcon' alt='chef logo' src={iconImage} /> 
                <div className='lunchDetails'>
                    <p className='font'>{address}</p>
                    <a className='font' href={link}>{name}'s website</a> 
                    <p className='font' >{price}</p>
                </div>
            </div>
        </div>
    )
}

export default LunchDetails