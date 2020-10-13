import React from 'react';
import hotels from '../../fakeData/fakeData';
import SingleHotel from '../SingleHotel/SingleHotel';
import img from '../../Image/image 1.jpg';

const hotel = hotels;
const Hotels = () => {
    return (
        <div className = "d-flex justify-content-between">
        
        <div className = "flex-column ml-5">
        <p className= "pt-5">9 out of 9 hotel Found</p>
            {
                hotel.map(hotel => <SingleHotel hotel = {hotel}></SingleHotel>)
            }
        </div>
        <div className = "mt-3 mr-5 pr-5">
            <img src={img} alt=""/>
        </div>
        
        </div>
    );
};

export default Hotels;