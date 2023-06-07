import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const NavItems = <>
        <li><Link to='/'><a>Home</a></Link></li>
        <li><Link to='/instructor'><a>Instructor</a></Link></li>
        <li><Link to='/classes'><a>Classes</a></Link></li>
        
    </>
    return (
        <div>
            <div className="navbar bg-teal-700 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-teal-900 rounded-box w-52">
                             {NavItems}
                        </ul>
                    </div>
                    <img className='w-10 h-10 cursor-pointer'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg0Zfjx1LSbn8-wBGoM4MhBD5DIM6WdzjoVqxKobG2HUDCg6yrKkB9R94B5SWLaZi1F0&usqp=CAU" alt="" />
                    <a className="btn btn-ghost normal-case text-xl text-white">Digital Photography School</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {NavItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;