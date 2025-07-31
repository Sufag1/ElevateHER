import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import IndividualBlog from "./components/BlogIndividual/IndividualBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Events />}/>
          <Route path="/blog/:id" element={<IndividualBlog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
