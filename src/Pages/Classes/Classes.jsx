import React from 'react';
import ClassesHooks from '../../Hooks/ClassesHooks';
import ClassesCart from './ClassesCart';

const Classes = () => {
    const [classes] = ClassesHooks();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto my-10'>
                {
                    classes.slice(0, 6).map(topClass=>
                <ClassesCart
                   key={topClass._id}
                   topClass={topClass}
                ></ClassesCart>)
                }
            </div>
        </div>
    );
};

export default Classes;