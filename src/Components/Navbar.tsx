import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scroll event and toggle sticky class
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Add and remove event listener on component mount and unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-md' : ''
      } p-4`}>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          to='/'
          className='text-xl font-semibold'>
          Home
        </Link>
        <div className='text-xl'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
