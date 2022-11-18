import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { AuthContext } from "../context/AuthContextProvider";
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#456",
        light: "#839eb9",
        dark: "#2a3541",
      },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
      // alert("please log in to see details");
    } else {
      toastWarnNotify("Please enter a text");
      // alert("please enter a text");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md outline-none border p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button className="dark:text-white" type="submit">
          Search
        </button>
      </form>

      <div className="flex justify-center flex-wrap">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </ThemeProvider>
  );
};

export default Home;
