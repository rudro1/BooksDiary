import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
const Navbar = () => {
    const link =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/ListedBook'}>Listed Books</NavLink></li>
            <li><NavLink to={'Read'}>Pages to Read</NavLink></li>
            <li className='lg:hidden mb-2 mt-1'>  <a className="btn   font-semibold px-5 text-lg text-white bg-green-500 rounded-lg py-5">Sign In</a></li>
           <li className='lg:hidden mb-2 mt-1'>     <a className="btn  bg-[#59C6D2] rounded-lg text-lg text-white px-5 py-5 ">Sign Up</a></li>

        </>



    return (
        <div className="navbar bg-base-100 ">
            <div className="lg:navbar-start grid grid-cols-2   ">
                <div className="dropdown justify-self-start col-span-1">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-normal ">
                        {link}
                   
                  
          
        
                   
                   
                    </ul>
                </div>
               <div className=" col-span-1">
                
<div>                <a className="btn btn-ghost text-2xl font-bold  ">Coffee<span className='text-green-400'>& </span> Chapters</a></div>
                </div> 
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-normal">
                    {link}
                </ul>
            </div>
            <div className=" hidden lg:navbar-end space-x-5    ">
                <a className="btn   font-semibold px-5 text-lg text-white bg-green-500 rounded-lg py-5">Sign In</a>
                <a className="btn  bg-[#59C6D2] rounded-lg text-lg text-white px-5 py-5 ">Sign Up</a>

            </div>

        </div>
    );
};

export default Navbar;