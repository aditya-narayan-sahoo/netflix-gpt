import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

const useGptSearch = () => {
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await response.json();
    //console.log(json.results);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    /*
      Code to fetch data from OPEN AI API, 
      handle error of too many requests if you intend to use the API

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gaddar, Sholay, Don, Golmaal, Deewar";
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }
    console.log(gptResults.choices?.[0]?.message?.content);
    Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    */

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
  };

  return {
    handleGptSearchClick,
  };
};

export default useGptSearch;
