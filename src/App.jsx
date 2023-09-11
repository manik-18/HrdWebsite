import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Training from "./pages/Training";
import Clubs from "./pages/Clubs";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home/>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <Contact/>
            }
          />
          <Route
            exact
            path="/training"
            element={
              <Training/>
            }
          />
          <Route
            exact
            path="/clubs"
            element={
              <Clubs/>
            }
          />
          <Route
            exact
            path="/news"
            element={
              <News/>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
