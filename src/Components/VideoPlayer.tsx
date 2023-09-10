import React from 'react';

type VideoModal = {
  videoUrl: string;
};

const VideoPlayer: React.FC<VideoModal> = ({ videoUrl }) => {
  console.log(videoUrl);
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='relative z-10 bg-white p-4 max-w-lg mx-auto rounded-lg shadow-lg'>
        <div className='aspect-w-16 aspect-h-9'>
          <video
            className='w-full h-full object-cover'
            autoPlay
            controls>
            <source
              src={videoUrl}
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
