import React from 'react';

const SelectedCard = ({ card }) => {
    const { name, image, instructor, email, price } = card;
    return (
        <div>


            <div className="w-full pb-[700px] pt-20  text-white">
                <Helmet>
                    <title>Bistro Boss | Dashboard | my-Select-class</title>
                </Helmet>
                <div className="flex uppercase font-semibold justify-evenly items-center gap-4 mb-2">
                    <h3 className="text-2xl">Total Class: <span className="text-red-500">{card.length}</span></h3>
                    <h3 className="text-2xl">Total Price: <span className="text-red-500">${total}</span></h3>
                    <Link to="/dashboard/payment">

                        <button className="btn border-0 btn-primary ">Pay Now</button>
                    </Link>
                </div>

                <div data-aos="fade-up" className="overflow-x-auto mt-5  w-full">
                    <table
                        className="table w-full">
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
                        <tbody>
                            {cart.map((item, index) => (
                                <tr
                                    key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className="">{item.price}$
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="btn bg-red-500 text-white border-0 "
                                        >
                                            <FaTrashAlt></FaTrashAlt>{" "}
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;