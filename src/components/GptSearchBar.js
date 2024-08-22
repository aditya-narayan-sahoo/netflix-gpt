import { useRef } from "react";
import useGptSearch from "../hooks/useGptSearch";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const { handleGptSearchClick } = useGptSearch();

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="Funny Indian Retro Movies"
          className="p-3 my-4 ml-3 col-span-9 rounded-lg"
        />
        <button
          className="px-4 py-2 m-4 bg-red-600 text-white text-xl rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
