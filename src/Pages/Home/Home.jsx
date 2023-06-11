import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClass from '../PopularClass/PopularClass';
import { useTypewriter } from 'react-simple-typewriter'
import ExtraSection from '../ExtraSection/ExtraSection';
import { Helmet } from 'react-helmet';


const Home = () => {
    const [text] = useTypewriter({
        words: ['Top', 'Instructor', 'Photographer', 'List!'],
        loop: 100,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [classes] = useTypewriter({
        words: ['Top', 'classes', 'Photographer', 'List!'],
        loop: 100,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [Instruments] = useTypewriter({
        words: ['Photography', 'Camera', 'Instruments', 'List!'],
        loop: 100,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (

        <div>
            <Helmet>
                <title> Photography School | Home</title>
            </Helmet>
            <Banner></Banner>
            <h2 className='text-center font-extrabold text-4xl my-28'> Top Instructor: <span className='my-4  text-3xl font-bold text-orange-500 text-center'><span>{text}</span> </span> </h2>
            <PopularInstructor></PopularInstructor>

            <h2 className='text-center font-extrabold text-4xl my-28'> Top Class: <span className='my-4  text-3xl font-bold text-orange-500 text-center'><span>{classes}</span></span> </h2>
            <PopularClass></PopularClass>

            <h2 className='mt-32 text-4xl font-bold  text-center'>Instruments:  <span className='text-3xl font-bold text-orange-700'>{Instruments} </span> </h2>

            <div className='text-xl text-center my-5 font-semibold'>
                <p>Photography is an art form that relies heavily on camera instruments to <br></br>capture and immortalize moments. These technological marvels have evolved <br></br>over time, becoming more sophisticated and accessible. The camera, the<br></br> primary instrument, serves as a gateway between the photographer's <br></br>vision and the physical world. It captures light through a lens, and <br></br>with each click, freezes time, preserving memories for generations to <br></br>come. But the camera is not alone in this process. Various supporting instruments,<br></br> such as tripods, filters, and flashes, enhance the photographer's<br></br> creative abilities, allowing for control over exposure,</p>
            </div>
             <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;