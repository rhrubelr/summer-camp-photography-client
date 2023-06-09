// import React, { useEffect, useState } from 'react';
import InstructorHooks from '../../Hooks/InstructorHooks';
import PopularInsCart from '../PopularInsCart/PopularInsCart';

const PopularInstructor = () => {

const [populars] = InstructorHooks(); 
    // useEffect(() => {
    //     fetch("http://localhost:5000/instructor")
    //         .then(res => res.json())
    //         .then(data => {
    //             setPopulars(data)
    //         })
    // }, [])

    return (
        < div >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto my-10'>
                {
                    populars.slice(0, 6).map(popular =>
                        <PopularInsCart
                            key={popular._id}
                            popular={popular}
                        ></PopularInsCart>)
                }
            </div>

            


        </div>
    );
};

export default PopularInstructor;