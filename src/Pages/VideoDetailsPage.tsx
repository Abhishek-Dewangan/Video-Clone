import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

const VideoDetailsPage = () => {
  const { postid } = useParams();
  const data = localStorage.getItem('data');
  const postData = data ? JSON.parse(data) : [];
  const videoUrl = postData.map((elem: any) => elem.postId);
  const index = videoUrl.indexOf(postid);

  const iconStyle: React.CSSProperties = {
    background: 'white',
    fontSize: '30px',
    borderRadius: '50px',
  };

  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(index);

  const handleNextVideo = () => {
    if (currentVideoIndex < videoUrl.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      // Wrap around to the first video
      setCurrentVideoIndex(0);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    } else {
      // Wrap around to the last video
      setCurrentVideoIndex(videoUrl.length - 1);
    }
  };

  return (
    <div>
      <p>{postData[currentVideoIndex].creator.name}</p>
      <div className='controls flex justify-center gap-10'>
        <button onClick={handlePrevVideo}>
          <GrLinkPrevious style={iconStyle} />
        </button>
        <div className='flex justify-center'>
          <ReactPlayer
            url={postData[currentVideoIndex].submission.mediaUrl}
            width='auto'
            height='500px'
            controls
            playing
            loop
            onEnded={handleNextVideo}
          />
        </div>
        <button onClick={handleNextVideo}>
          <GrLinkNext style={iconStyle} />
        </button>
      </div>
      <p className='w-80 mx-auto justifyfy'>
        {postData[currentVideoIndex].submission.description}
      </p>
    </div>
  );
};

export default VideoDetailsPage;
