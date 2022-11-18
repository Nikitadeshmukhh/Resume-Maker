import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import About from "./components/About/About";
import Screen2 from "./components/Screen2/Screen2";
import Contributors from "./components/Contributors/Contributors";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Screen2 />}></Route>
        <Route path="/contributors" element={<Contributors />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
