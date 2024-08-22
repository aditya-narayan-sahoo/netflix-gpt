import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  //custom hook to fetch API from tmdb and update the value in redux store.
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json?.results);
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
