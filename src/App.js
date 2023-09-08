import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
