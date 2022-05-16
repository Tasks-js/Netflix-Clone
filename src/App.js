import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FavList from "./components/FavList";
import Home from "./components/Home";

function App() {
  return (
    <>
<NavBar/>
      <h1>Netflix Clone</h1>
      <br></br>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavList/>}/>
      </Routes>
    </>
  );
}

export default App;
