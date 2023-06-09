import React from 'react';

const ClassesCart = ({ topClass }) => {
    const {  name, image, available_seats,instructor, price } = topClass;
    return (
        <div>
            <div className="card h-full w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">name: {name}</h2>
                    <h4 className="card-title">Instructor: {instructor}</h4>
                    <p> Student Seat: {available_seats}</p>
                    <p> price: ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCart;