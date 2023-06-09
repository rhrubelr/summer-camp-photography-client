import React from 'react';
import ClassesHooks from '../../Hooks/ClassesHooks';
import AllClassCart from './AllClassCart';

const AllClasses = () => {
    const [classes] = ClassesHooks();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto my-10'>
                {
                    classes.map(allClass=>
                <AllClassCart
                   key={allClass._id}
                   allClass={allClass}
                ></AllClassCart>)
                }
            </div>
        </div>
    );
};

export default AllClasses;