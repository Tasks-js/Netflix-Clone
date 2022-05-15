import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FavMovie from "./components/FavMovie";

function App() {
  return (
    <>

      <h1>Netflix Clone</h1>
      <br></br>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavMovie />} />
      </Routes>
    </>
  );
}

export default App;
