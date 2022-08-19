import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Footer,
  Header,
  Home,
  MovieDetail,
  PageNotFound,
} from "./components/componentsIndex";

import "./App.scss";

function App() {
  return (
    <>
      <div className="bg"></div>
      <div className="app">
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/movie/:imdbID" element={<MovieDetail />} />
              <Route element={<PageNotFound />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </Router>
      </div>
    </>
  );
}

export default App;
