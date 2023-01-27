import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.js";
import SimpleBottomNavigation from "./components/MainNav.js";
import { Container } from "@material-ui/core";
import Trending from "./Pages/Trending/Trending.js";
import Movies from "./Pages/Movies/Movies.js";
import Series from "./Pages/Series/Series.js";
import Search from "./Pages/Search/Search.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
