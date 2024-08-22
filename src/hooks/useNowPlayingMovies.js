import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  //custom hook to fetch API from tmdb and update the value in redux store.
  const dispatch = useDispatch();

  //add memoization
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    //add condition for memoization
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
