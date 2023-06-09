import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClass from '../PopularClass/PopularClass';
import { useTypewriter } from 'react-simple-typewriter'


const Home = () => {
    const [text] = useTypewriter({
        words: ['Top', 'Instructor', 'Photographer', 'List!'],
        loop: 1000000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [classes] = useTypewriter({
        words: ['Top', 'classes', 'Photographer', 'List!'],
        loop: 1000000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (

        <div>
            <Banner></Banner>
            <h2 className='text-center font-extrabold text-4xl my-28'> Top Instructor: <span className='my-4  text-3xl font-bold text-orange-500 text-center'><span>{text}</span> </span> </h2>
            <PopularInstructor></PopularInstructor>

            <h2 className='text-center font-extrabold text-4xl my-28'> Top Class: <span className='my-4  text-3xl font-bold text-orange-500 text-center'><span>{classes}</span></span> </h2>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;