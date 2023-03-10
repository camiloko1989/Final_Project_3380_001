import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//App components
import Home from './Home';
import Details from './Details';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} /> {/*I uses :id to differentiate each Shelter*/}
        </Routes> 
      </Router>
    </div>
  );
}

export default App;


