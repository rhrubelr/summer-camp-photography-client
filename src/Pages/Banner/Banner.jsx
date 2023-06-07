import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

const Banner = () => {
    return (
        <div>


            <div>
                <Carousel>
                    <div className='relative '>

                        <img className='h-3/4' src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />

                        <div className='absolute md:top-36 top-10 left-10 md:left-96'>
                            <h3 className='text-3xl my-2 text-orange-800 font-bold'>LOVE PHOTOGRAPHY?</h3>
                            <p className='text-white text-xl'>Digital Photography School has what you need to take your <br></br>photography to the next level. </p>
                            <button className='btn btn-warning my-2'>Start Here</button>
                        </div>
                    </div>
                    <div className='relative '>
                    <div className='absolute md:top-36 top-10 left-10 md:left-96'>
                            <h3 className='text-3xl my-2 text-orange-800 font-bold'>LOVE PHOTOGRAPHY?</h3>
                            <p className='text-white text-xl'>Digital Photography School has what you need to take your <br></br>photography to the next level. </p>
                            <button className='btn btn-warning my-2'>Start Here</button>
                        </div>
                        <img className='h-3/4' src="https://media.istockphoto.com/id/1440289090/photo/bridge-and-downtown-dallas-tx.webp?b=1&s=170667a&w=0&k=20&c=QBT2QJ_VqPNf1rRhGa6x2m2jxTUQIzUogcCCKoz6hSc=" />

                    </div>
                    <div className='relative'>
                    <div className='absolute md:top-36 top-10 left-10 md:left-96'>
                            <h3 className='text-3xl my-2 text-orange-800 font-bold'>LOVE PHOTOGRAPHY?</h3>
                            <p className='text-white text-xl'>Digital Photography School has what you need to take your <br></br>photography to the next level. </p>
                            <button className='btn btn-warning my-2'>Start Here</button>
                        </div>
                        <img className='h-3/4' src="https://media.istockphoto.com/id/618066222/photo/camera-capturing-a-forest.jpg?s=612x612&w=0&k=20&c=Mqr3fFI2QPY09_bu3GyRYJvcdwBO2qeHPT88GFsLTS4=" />

                    </div>
                    <div className='relative'>
                    <div className='absolute md:top-36 top-10 left-10 md:left-96'>
                            <h3 className='text-3xl my-2 text-orange-800 font-bold'>LOVE PHOTOGRAPHY?</h3>
                            <p className='text-white text-xl'>Digital Photography School has what you need to take your <br></br>photography to the next level. </p>
                            <button className='btn btn-warning my-2'>Start Here</button>
                        </div>
                        <img className='h-3/4' src="https://media.istockphoto.com/id/943988552/photo/young-asian-woman-traveler-in-bangkok-downtown-district-holding-a-vintage-film-camera.webp?b=1&s=170667a&w=0&k=20&c=GUTppFmZqZwrL5lqg8kXqcUv0gUhmfwxmwCB8ocXUIw=" />

                    </div>
                    <div className='relative'>
                        <div className='absolute md:top-36 top-10 left-10 md:left-96'>
                            <h3 className='text-3xl my-2 text-orange-800 font-bold'>LOVE PHOTOGRAPHY?</h3>
                            <p className='text-white text-xl'>Digital Photography School has what you need to take your <br></br>photography to the next level. </p>
                            <button className='btn btn-warning my-2'>Start Here</button>
                        </div>
                        <img className='h-3/4' src="https://media.istockphoto.com/id/1167643870/photo/photographer-working-in-a-studio.jpg?s=612x612&w=0&k=20&c=jk0tt8NOJlr25ELe83So80lDCeUyq5U4fn_WC6y11f0=" />

                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;