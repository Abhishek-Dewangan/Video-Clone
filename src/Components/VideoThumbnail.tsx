import React from 'react';
import VideoPlayer from './VideoPlayer';

type Thumbnail = {
  elem: {
    creator: {
      id: string;
      name: string;
    };
    submission: {
      mediaUrl: string;
      thumbnail: string;
    };
  };
  openModal: () => void;
  closeModal: () => void;
  modelOpen: boolean;
};

const VideoThumbnail: React.FC<Thumbnail> = ({
  elem,
  openModal,
  closeModal,
  modelOpen,
}) => {
  return (
    <div
      onClick={openModal}
      key={elem.creator.id}
      className='relative aspect-w-1/2 aspect-h-1/2'>
      <VideoPlayer
        isOpen={modelOpen}
        onClose={closeModal}
        videoUrl={elem.submission.mediaUrl}
      />
      <img
        className='object-cover w-full h-full'
        src={elem.submission.thumbnail}
        alt={elem.creator.name}
      />
      <div className='absolute inset-x-0 top-0 text-white text-center'>
        <div className='bg-gradient-to-b from-black to-transparent h-20'>
          {elem.creator.name}
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
