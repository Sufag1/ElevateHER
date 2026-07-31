import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AllBlogs from "./pages/BlogPage/AllBlogs";
import OneBlog from "./pages/BlogPage/OneBlog";
import Portfolio from './pages/Portfolio/Portfolio';
import Artficial from './pages/AI-page/AI-page';
import Devops from './pages/Devops-page/Devops-page';
import Fulstack from './pages/Fullstack-page/Fullstack-page';
import Frontend from './pages/Frontend-page/Frontend-page';
import Backend from './pages/Backend-page/Backend-page';
import Business from './pages/BusinessPage/Business-page';
import About from "./pages/About/About";
import Startup from "./pages/Startup/Startup";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import AdminApp from "./admin/Admin";

function AppRoutes() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<AllBlogs />} />
        <Route path="/blog/:id" element={<OneBlog />} />
        <Route path="/port" element={<Home />} />
        <Route path="/courses" element={<Portfolio />} />
        <Route path="/artificial-intelligence" element={<Artficial />} />
        <Route path="/devops" element={<Devops />} />
        <Route path="/full-stack-development" element={<Fulstack />} />
        <Route path="/frontend-development" element={<Frontend />} />
        <Route path="/backend-development" element={<Backend />} />
        <Route path="/business-development" element={<Business />} />
        <Route path="/about" element={<About />} />
        <Route path="/startup/:name" element={<Startup />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/admin/*" element={<AdminApp />} /> */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
