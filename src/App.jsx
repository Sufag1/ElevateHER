import Home from "./pages/Home/Home";
import AllBlogs from "./pages/BlogPage/AllBlogs";
import OneBlog from "./pages/BlogPage/OneBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<AllBlogs />}/>
          <Route path="/blog/:id" element={<OneBlog/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
