const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 my-4 ml-3 col-span-9 rounded-lg"
        />
        <button className="px-4 py-2 m-4 bg-red-600 text-white text-xl rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
