import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center font-extrabold text-4xl my-28'>Top Instructor: <span className='my-4  text-3xl font-bold text-orange-500 text-center'>Best Instructor List</span> </h2>
            <PopularInstructor></PopularInstructor>

            <h2 className='text-center font-extrabold text-4xl my-28'> Top Class: <span className='my-4  text-3xl font-bold text-orange-500 text-center'>Best Instructor List</span> </h2>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;