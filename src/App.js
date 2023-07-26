import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
export const BASE_URL = "https://api.coingecko.com/api/v3";
