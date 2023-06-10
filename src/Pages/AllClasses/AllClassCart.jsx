import React, { useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Swal from 'sweetalert2';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';

// ..
AOS.init();

const AllClassCart = ({ allClass }) => {
    const {_id, name, image, available_seats, instructor, price } = allClass;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleEnroll = ()=>{
        if(user && user.email){
            const enrollData = {enrollId: _id, name, image, price,instructor,available_seats,  email: user.email }
            fetch('http://localhost:5000/all-enroll', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(enrollData)
            })
            .then( res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your class is added on selected page',
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
       
        }
        else{
            Swal.fire({
                title: "Are you want to login?",
                text: "For enroll you have to login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!",
              }).then((result) => {
                if (result.isConfirmed) {
                  Navigate("/login", {state: {from: location}});
                }
              });
        }
        
    
    }

    return (
        <div data-aos="zoom-in">
            <div className="card h-full w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">name: {name}</h2>
                    <h4 className="card-title">Instructor: {instructor}</h4>
                    <p> Student Seat: {available_seats}</p>
                    <p> price: ${price}</p>
                    <div className="card-actions">
                        < button onClick={()=> handleEnroll(allClass)}  className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClassCart;