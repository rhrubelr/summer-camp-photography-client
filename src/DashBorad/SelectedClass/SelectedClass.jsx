import React from 'react';
import useEnroll from '../../Hooks/useEnroll';
import SelectedCard from './SelectedCard';

const SelectedClass = () => {
    const [cart] = useEnroll();

    console.log(cart)
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white text-xl">
                            <th>#</th>
                            <th>Photography Image</th>
                            <th>Photography Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {
                        cart.map(card => <SelectedCard
                            key={card._id}
                            card={card}
                        ></SelectedCard>)
                    }



                </table>
            </div>
        </div>
    );
};

export default SelectedClass;