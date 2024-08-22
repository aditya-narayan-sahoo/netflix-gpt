const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-28 md:pt-64 lg:pt-72 px-6 md:px-15 lg:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden lg:inline-block py-4 w-1/3 text-lg">{overview}</p>
      <div className="my-3 md:m-1">
        <button className="bg-white text-black px-1 py-1 md:px-10 md:py-3 md:mr-2 rounded-md text-xl hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="bg-gray-500 bg-opacity-70 hidden lg:inline-block px-10 py-3 mr-2 rounded-md text-xl hover:bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
