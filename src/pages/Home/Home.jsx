import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
// import ClientsReview from "../../components/Clients-Review/ClientsReview";
// import OurSolutions from "../../components/OurSolutions/Solutions";
import BlogSection from "../../components/Blog/Blog";
import AboutMain from "../../components/AboutMain/AboutMain";

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <AboutMain />
        {/* <ClientsReview /> */}
        {/* <OurSolutions /> */}
        <BlogSection />
    </div>
  )
}

export default Home
