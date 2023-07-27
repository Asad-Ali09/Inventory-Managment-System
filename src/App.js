import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Coin from "./pages/Coin";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/market/:coinID" element={<Coin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
export const BASE_URL = "https://api.coingecko.com/api/v3";
