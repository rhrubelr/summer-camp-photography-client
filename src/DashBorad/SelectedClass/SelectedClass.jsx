import React from 'react';
import useEnroll from '../../Hooks/useEnroll';

const SelectedClass = () => {
    const [cart] = useEnroll();

    console.log(cart)
    return (
        <div>
            {

            }
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-3xl font-bold'>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    {
                        cart.map(ca)
                    }
                    
                    

                </table>
            </div>
        </div>
    );
};

export default SelectedClass;