import React from 'react';
import WomanImg from '../img/home/woman.png';  // Assuming the image path is correct
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="section bg-blue-200">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center items-center lg:items-start z-10 lg:absolute">
          <h1 className="h1">Photographer<br />& Film Maker</h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Los angeles</p>
          <Link to={'/contact'} className='btn mb-[30px]'>hire</Link>
        </div>
        <div className="mt-8">
          {/* Image Section */}
          <img src={WomanImg} alt="Woman Photographer" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Home;