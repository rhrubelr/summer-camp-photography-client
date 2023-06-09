import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';

const InstructorCart = ({ popular }) => {
    const { email, name, image, student, rating, price } = popular;
    return (
        <div data-aos="zoom-out-up">
            <div className="card h-full w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-full mx-center h-56 w-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">name: {name}</h2>
                    <p> Email: {email}</p>
                    <p> Student: {student}</p>
                    <p> Rating:  < Rating style={{ maxWidth: 100 }} value={rating} readOnly /> </p>
                    <p> price: ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCart;