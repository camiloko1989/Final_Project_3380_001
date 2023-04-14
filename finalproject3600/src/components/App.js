import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//App components
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Details from "./Details";
import ShelterForm from "./ShelterForm";

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />{" "}
          {/*I uses :id to differentiate each Shelter*/}
          <Route path="/shelterform" element={<ShelterForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
