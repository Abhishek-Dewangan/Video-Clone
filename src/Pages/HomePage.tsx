import { useEffect, useState } from 'react';
import VideoThumbnail from '../Components/VideoThumbnail';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState<number>(0);
  const [nextButoon, setNextButton] = useState(false);

  const fetchData = () => {
    fetch(`https://internship-service.onrender.com/videos?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.posts);
        localStorage.setItem('data', JSON.stringify(res.data.posts));
        setData(res.data.posts);
      })
      .catch((error) => console.log(error));

    fetch(`https://internship-service.onrender.com/videos?page=${page + 1}`)
      .then((res) => res.json())
      .then((res) => {
        res.data.posts.length === 0
          ? setNextButton(true)
          : setNextButton(false);
      })
      .catch((error) => console.log(error));
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => fetchData(), [page]);

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-4/5 border-solid p-2 mx-auto my-3 min-h-screen'>
        {data.length ? (
          data.map((elem: any) => {
            return (
              <div key={elem.postid}>
                <VideoThumbnail elem={elem} />
              </div>
            );
          })
        ) : (
          <h1 className='text-2xl justify-self-center'>Loading...</h1>
        )}
      </div>
      <div className='my-4'>
        <button
          onClick={handlePreviousPage}
          className={`${
            page === 0
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-700'
          } text-white font-bold py-2 px-4 mr-2`}>
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          className={`${
            nextButoon
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-700'
          }  text-white font-bold py-2 px-4`}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default HomePage;
