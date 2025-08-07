import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AllBlogs from "./pages/BlogPage/AllBlogs";
import OneBlog from "./pages/BlogPage/OneBlog";
import Portfolio from './pages/Portfolio/Portfolio';
import Artficial from './pages/AI-page/AI-page' 
import Devops from './pages/Devops-page/Devops-page';
import Fulstack from './pages/Fullstack-page/Fullstack-page'
import Frontend from './pages/Frontend-page/Frontend-page'
import Backend from './pages/Backend-page/Backend-page'
import Business from './pages/BusinessPage/Business-page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<AllBlogs />}/>
        <Route path="/blog/:id" element={<OneBlog/>}/>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/artificial-intelligence" element={<Artficial />} />
        <Route path="/devops" element={<Devops />} />
        <Route path="/full-stack-development" element={ <Fulstack />} />
        <Route path="/Frontend-development" element={ <Frontend />} />
        <Route path="/backend-development" element={<Backend />} />
        <Route path="/business-development" element={<Business />} />
      </Routes>
    </Router>
  );
}

export default App;
