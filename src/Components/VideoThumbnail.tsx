import React from 'react';
import { useNavigate } from 'react-router-dom';

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
};

const VideoThumbnail: React.FC<Thumbnail> = ({ elem }) => {
  const navigate = useNavigate();
  const playVideo = (elem: any) => {
    navigate(`/videodetails/${elem.postId}`);
  };
  return (
    <div
      onClick={() => playVideo(elem)}
      key={elem.creator.id}
      className='relative'>
      <img
        className='w-200 h-300'
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
