import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import OurSolutions from "../../components/OurSolutions/Solutions";

import BlogSection from "../../components/Blog/Blog";

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <OurSolutions />
        <BlogSection />
    </div>
  )
}

export default Home
