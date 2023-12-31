import React from 'react';
import { Helmet } from 'react-helmet';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useMyClass from '../../Hooks/useMyClass';

const MyClasses = () => {
    const [classes, refetch] = useMyClass();
    console.log(classes)
    const total = classes.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (item) => {
        console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://photography-school-server.vercel.app/my-classes/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


    }
    return (
        <div className="w-full mt-24 pb-[600px] ">
            <Helmet>
                <title>Photography | Dashboard | My Class</title>
            </Helmet>
            <div className="flex uppercase font-semibold justify-evenly items-center gap-4 mb-2">
                <h3 className="text-3xl font-bold text-sky-500">My Class Information : <span className='text-red-500'>{classes.length}</span></h3>


            </div>

            <div className="overflow-x-auto  w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className=" text-xl">
                            <th>#</th>
                            <th>Photography Image</th>
                            <th>Instructor Email</th>
                            <th>Photography Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((item, index) => (
                            <tr key={item._id}>
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
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td className="">{item.price}$
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn bg-red-500  border-0 "
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
    );
};

export default MyClasses;