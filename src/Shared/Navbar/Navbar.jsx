import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';
import useAdmin from '../../Hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }


    // const { user, logOut } = useContext(AuthContext);
    // const [isAdmin] = useAdmin();
    // const handleLogout = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch((error => console.log(error)));
    // };
    const NavItems = <>
        <li><Link to='/'><a>Home</a></Link></li>
        <li><Link to='/instructor'><a> All Instructor</a></Link></li>
        <li><Link to='/allClasses'><a>All Class</a></Link></li>

        {/* <li><Link to='/dashBoard'><a>Dash Board</a></Link></li> */}

        {
            user ? <li><Link to='/dashboard' >Dashboard</Link></li> : ''

        }


    </>
    return (
        <div>


            <div className="navbar bg-teal-700 text-white">
                <div className="navbar-start z-20">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>
                    <img className='w-8 h-8 sm:w-10 sm:h-10 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg0Zfjx1LSbn8-wBGoM4MhBD5DIM6WdzjoVqxKobG2HUDCg6yrKkB9R94B5SWLaZi1F0&usqp=CAU" alt="" />
                    <a className="btn btn-ghost normal-case text-xl"> Photography School</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to="/login"><a className="btn">Login</a></Link>
                     */}
                    {/* {
                        user ? <> <img className='rounded-full h-10 w-10' src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button></> : <> <button className='btn btn-ghost'><Link to="/login">Login</Link></button> </>
                    } */}


                    {user ? (
                        <>
                            <img
                                className="rounded-full w-10 mr-2 "
                                src={user?.photoURL}
                                alt=""
                            />
                            <button
                                onClick={handleLogOut}
                                className="btn btn-xs md:btn-md text-white btn-neutral"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <p className="btn btn-accent btn-xs md:btn-md  text-white">Login</p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;