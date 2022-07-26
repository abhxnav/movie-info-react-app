import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { MovieList } from "../componentsIndex";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Fast";
  const showText = "Office";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <>
      <div className="banner"></div>
      <MovieList />
    </>
  );
};

export default Home;
