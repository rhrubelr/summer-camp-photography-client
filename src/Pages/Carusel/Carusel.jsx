import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Carusel = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <div>
                        <img className='h-3/4' src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />

                    </div>
                    <div>
                        <img className='h-3/4' src="https://media.istockphoto.com/id/1440289090/photo/bridge-and-downtown-dallas-tx.webp?b=1&s=170667a&w=0&k=20&c=QBT2QJ_VqPNf1rRhGa6x2m2jxTUQIzUogcCCKoz6hSc=" />

                    </div>
                    <div>
                        <img className='h-3/4' src="https://media.istockphoto.com/id/618066222/photo/camera-capturing-a-forest.jpg?s=612x612&w=0&k=20&c=Mqr3fFI2QPY09_bu3GyRYJvcdwBO2qeHPT88GFsLTS4=" />

                    </div>
                    <div>
                        <img className='h-3/4' src="https://media.istockphoto.com/id/1388134976/photo/woman-hands-holding-mobile-phone-at-sunset.jpg?s=612x612&w=0&k=20&c=WetN-_LOnznckEYQczQt-GZBqZNS2vGvqbUxfwClOxI=" />

                    </div>
                    <div>
                        <img className='h-3/4' src="https://media.istockphoto.com/id/1167643870/photo/photographer-working-in-a-studio.jpg?s=612x612&w=0&k=20&c=jk0tt8NOJlr25ELe83So80lDCeUyq5U4fn_WC6y11f0=" />

                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Carusel;