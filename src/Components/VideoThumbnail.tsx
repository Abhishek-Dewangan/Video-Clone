import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidLike } from 'react-icons/bi';

type Thumbnail = {
  elem: {
    creator: {
      id: string;
      name: string;
    };
    submission: {
      mediaUrl: string;
      thumbnail: string;
      title: string;
    };
    reaction: {
      count: number;
    };
    comment: {
      count: number;
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
      className='relative rounded border'>
      <img
        className='rounded'
        src={elem.submission.thumbnail}
        alt={elem.submission.title}
      />
      <div className='absolute inset-x-0 top-0 text-white font-medium'>
        <div className='bg-gradient-to-b from-black to-transparent h-10 rounded'>
          {elem.submission.title}
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 text-white text-center font-medium rounded'>
        <div className='flex justify-between bg-gradient-to-t from-black to-transparent h-10 px-3 rounded'>
          <p>Likes - {elem.reaction.count}</p>
          <p>Comments - {elem.comment.count}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
