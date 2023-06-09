import React from 'react';
import ClassesHooks from '../../Hooks/ClassesHooks';
import PopularClassCart from './PopularClassCart';

const PopularClass = () => {
    const [classes] = ClassesHooks();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto my-10'>
                {
                    classes.slice(0, 6).map(topClass=>
                <PopularClassCart
                   key={topClass._id}
                   topClass={topClass}
                ></PopularClassCart>)
                }
            </div>
        </div>
    );
};

export default PopularClass;