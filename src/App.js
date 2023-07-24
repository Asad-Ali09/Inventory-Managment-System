import Header from "./components/Header";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} />
      </Routes>
    </Router>
  );
}

export default App;
