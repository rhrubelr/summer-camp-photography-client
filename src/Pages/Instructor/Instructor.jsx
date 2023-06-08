import React, { useEffect, useState } from 'react';
import InstructorCart from './InstructorCart';


const Instructor = () => {
    const [populars, setPopulars] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/instructor")
            .then(res => res.json())
            .then(data => {
                setPopulars(data)
            })
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto my-10'>
                {
                    populars.map(popular =>
                        <InstructorCart
                            key={popular._id}
                            popular={popular}
                        ></InstructorCart>)
                }
            </div>
        </div>
    );
};

export default Instructor;