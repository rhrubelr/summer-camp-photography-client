import React, { useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Swal from 'sweetalert2';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';

// ..
AOS.init();

const AllClassCart = ({ allClass , refetch }) => {
    const {_id, name, image, available_seats, instructor, price } = allClass;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleEnroll = ()=>{
        if(user && user.email){
            const enrollData = {enrollId: _id, name, image, price,instructor,available_seats,  email: user.email }
            fetch('https://photography-school-server.vercel.app/all-enroll', {
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


        if(user && user.email){
            const seats = parseFloat(available_seats -1 );
            // const enrolls = parseFloat(enroll + 1)
            console.log(seats)
         
            const enrolData = {available_seats: seats}
            console.log(enrolData)
            // const enrollData = {enrollId: _id, danceName, image, instructorName, price, rating, availableSeats, email: user.email }
            fetch(`https://photography-school-server.vercel.app/class-update/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(enrolData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              refetch()
              // if (data. modifiedCount > 0) {
               
              //   Swal.fire({
              //     title: "success!",
              //     text: "Your toys is updated!!",
              //     icon: "success",
              //     confirmButtonText: "okk",          
              //   });
              //   refetch()
              // }
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
                        < button onClick={()=> handleEnroll(allClass)}  className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClassCart;