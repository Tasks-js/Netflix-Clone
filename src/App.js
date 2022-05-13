import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
//import FavRecipe from "./components/MovieList";

function App() {
  return (
    <>

      <h1>Netflix Clone</h1>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
