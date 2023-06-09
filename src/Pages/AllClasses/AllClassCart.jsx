import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AllClassCart = ({allClass}) => {
    const {  name, image, available_seats,instructor, price } = allClass;

    return (
        <div data-aos="zoom-in">
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

export default AllClassCart;