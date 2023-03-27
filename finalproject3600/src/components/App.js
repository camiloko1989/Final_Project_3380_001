import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//App components
import Header from "./Header";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Details from "./Details";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />{" "}
          {/*I uses :id to differentiate each Shelter*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
