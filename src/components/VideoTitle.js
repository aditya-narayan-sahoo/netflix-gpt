const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-72 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-4 w-1/3 text-lg">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-10 py-3 mr-2 rounded-md text-xl hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="bg-gray-500 bg-opacity-70 px-10 py-3 mr-2 rounded-md text-xl hover:bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
