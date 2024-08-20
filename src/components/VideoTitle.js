const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-4 w-1/3 text-lg">{overview}</p>
      <div className="">
        <button className="bg-black text-white px-10 py-3 mr-2 rounded-md text-xl">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white bg-opacity-70 px-10 py-3 mr-2 rounded-md text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
