import React, { useEffect, useState } from 'react';
import PopularInsCart from '../PopularInsCart/PopularInsCart';

const PopularInstructor = () => {
    const [populars, setPopulars] = useState([])

    useEffect(() => {
        fetch('popularInstructor.json')
            .then(res => res.json())
            .then(data => {
                setPopulars(data)
            })
    }, [])

    return (
        < div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto my-10'>
            {
                populars.slice(0, 6).map(popular =>
                    <PopularInsCart
                       key={popular._id}
                       popular={popular}
                    ></PopularInsCart>)
            }
        </div>
    );
};

export default PopularInstructor;