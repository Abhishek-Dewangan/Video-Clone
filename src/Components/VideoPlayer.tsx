import React from 'react';

type VideoModal = {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
};

const VideoPlayer: React.FC<VideoModal> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        className='absolute inset-0 bg-black opacity-50'
        onClick={onClose}></div>
      <div className='relative z-10 bg-white p-4 max-w-lg mx-auto rounded-lg shadow-lg'>
        <div className='aspect-w-16 aspect-h-9'>
          <video
            className='w-full h-full object-cover'
            controls>
            <source
              src={videoUrl}
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <button
          className='absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none'
          onClick={onClose}>
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
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
