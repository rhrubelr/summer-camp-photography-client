import React from 'react';
import ClassesHooks from '../../Hooks/ClassesHooks';
import AllClassCart from './AllClassCart';
import { Helmet } from 'react-helmet';

const AllClasses = () => {
    const [classes, loading, refetch] = ClassesHooks();
    return (
        <div>
            <Helmet>
                <title> Photography School | All Class</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto my-10'>
                {
                    classes.map(allClass=>
                <AllClassCart
                   key={allClass._id}
                   allClass={allClass}
                   refetch={refetch}
                ></AllClassCart>)
                }
            </div>
        </div>
    );
};

export default AllClasses;