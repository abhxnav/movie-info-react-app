import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarFilled,
  ClockCircleFilled,
  LikeFilled,
  StarFilled,
} from "@ant-design/icons";

import {
  fetchAsyncDetails,
  getSelected,
  removeSelected,
} from "../../features/movies/movieSlice";

import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelected);

  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID));
    return () => {
      dispatch(removeSelected());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading...</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <StarFilled className="star-icon" /> :{" "}
                <span
                  style={{
                    color: "white",
                    margin: 0,
                    padding: 0,
                    marginLeft: "10px",
                  }}
                  className=""
                >
                  {data.imdbRating}
                </span>
              </span>
              <span>
                Votes <LikeFilled className="vote-icon" /> :{" "}
                <span
                  style={{
                    color: "white",
                    margin: 0,
                    padding: 0,
                    marginLeft: "10px",
                  }}
                >
                  {data.imdbVotes}
                </span>
              </span>
              <span>
                Length <ClockCircleFilled className="time-icon" /> :{" "}
                <span
                  style={{
                    color: "white",
                    margin: 0,
                    padding: 0,
                    marginLeft: "10px",
                  }}
                >
                  {data.Runtime}
                </span>
              </span>
              <span>
                Year <CalendarFilled className="year-icon" /> :{" "}
                <span
                  style={{
                    color: "white",
                    margin: 0,
                    padding: 0,
                    marginLeft: "10px",
                  }}
                >
                  {data.Year}
                </span>
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Cast</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre(s)</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Language(s)</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} className="poster" />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
