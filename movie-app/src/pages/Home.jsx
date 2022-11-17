import React from "react";
import Navbar from "../components/Navbar";
import { createTheme, ThemeProvider, Button } from "@mui/material";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#456",
        light: "#839eb9",
        dark: "#2a3541",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
};

export default Home;
