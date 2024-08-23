import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constants";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

const useGptSearch = (searchText) => {
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await response.json();
    return json.results;
  };

  const genAI = new GoogleGenerativeAI(GEMINI_KEY);

  const handleGptSearchClick = async () => {
    const model = genAI.getGenerativeModel(
      { model: "gemini-1.5-flash" },
      { safetySettings: safetySettings }
    );
    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      const gptMovies = text.split(",");

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      //console.error("Error in GPT Search:", error);
      // Fallback movie recommendations
      const gptMovies = [
        "Andaz Apna Apna",
        "Hera Pheri",
        "Chupke Chupke",
        "Jaane Bhi Do Yaaro",
        "Padosan",
      ];
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    }
  };

  return {
    handleGptSearchClick,
  };
};

export default useGptSearch;
