import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ranker from "./pages/Ranker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranker" element={<Ranker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
