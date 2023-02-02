import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
// import Card from "./components/card/Card";
import MovieList from "./components/movielist/MovieList";

// API KEY = fca3dd00420b0a6c8e13b7c6e93bcc97
// https://api.themoviedb.org/3/movie/550?api_key=fca3dd00420b0a6c8e13b7c6e93bcc97

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<h1>Movie Detail Page</h1>} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

