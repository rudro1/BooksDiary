import React from 'react';
import { useRouteError } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div className='min-h-screen bg-white flex flex-col justify-center items-center'>
            <div className='bg-red-100 text-pretty flex w-1/2 flex-col items-center border-2 rounded-2xl py-5 px-5 h-full shadow-2xl border-amber-50 space-y-5'>
                <div className="text-3xl capitalize text-center">opps</div>
                {
                    error.statusText ? <p className='text-xl font-black'>{error.statusText}</p> : "null"
                }
                {
                    error.status ? <div className=' font-extrabold text-xl '>{error.status}</div> : "null"
                }
                <div className="btn btn-error   text-red-100 px-5 w-full text-center md:py-10 rounded-full text-xl md:text-4xl shadow-2xl  bg-red-400">
                    <NavLink to={'/'} className='w-full'>Go Back</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;