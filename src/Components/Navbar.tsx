import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='p-2'>
      <div className='container mx-auto flex flex-col items-center'>
        <Link to='/' className='text-4xl font-extrabold text-Black'>
          Video Clone
        </Link>
        <p className='text-gray-700 text-lg mt-1'>Explore Trending Videos</p>
      </div>
    </nav>
  );
};

export default Navbar;
