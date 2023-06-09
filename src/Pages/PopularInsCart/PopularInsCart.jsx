import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
 
const PopularInsCart = ({ popular }) => {
    const { email, name, image, student, rating, price } = popular;
    return (
        <div data-aos="zoom-out-up">
            <div className="card h-full w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image}alt="Shoes" className="rounded-full mx-auto h-56 w-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">name: {name}</h2>
                    <p> Email: {email}</p>
                    <p> Student: {student}</p>
                    <p> Rating: {rating} <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> </p>
                    <p> price: ${price}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default PopularInsCart;