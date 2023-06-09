import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='my-4  text-3xl font-bold text-orange-500 text-center'>Best Instructor List </h2>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;