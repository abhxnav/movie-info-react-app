import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

import user from "../../assets/images/user.png";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please Enter a Valid Search Term!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">WatchList</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search for Movies or Shows...."
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <SearchOutlined />
          </button>
        </form>
      </div>
      <div className="user-img">
        <img src={user} alt="user" style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Header;
