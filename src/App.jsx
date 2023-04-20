import Layout from "./Components/Layout";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "./Pages/MovieInfo";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
