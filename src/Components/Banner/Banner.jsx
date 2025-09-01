import React from 'react';
import banner from '../../images/banner.jpeg'
const Banner = () => {
    return (
    <div className='bg-[#1313130D]'>

           <div className="hero  py-5 w-11/12 px-5 mx-auto  mb-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={banner}
      className="imgbanner max-w-sm rounded-lg shadow-2xl w-[200px] md:w-[315px] -rotate-12  "/>
    <div className='text-pretty'>
      <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold">Discover Worlds, One Chapter at a Time!</h1>
     
      <p className="py-6 text-black font-extralight text-lg text-center md:text-left">
        Apur Shongshar’ is the poignant continuation of Satyajit Ray’s Apu Trilogy, portraying Apu’s life as a husband and father. The film beautifully captures everyday joys, struggles, and the quiet depth of human relationships in rural and small-town Bengal.
      </p>
      <button className="btn bg-[#23BE0A] py-5 px-5 text-xl text-white rounded-lg flex justify-self-center lg:justify-self-start">View The List</button>
    </div>
  </div>
</div>
    </div>
    );
};

export default Banner;