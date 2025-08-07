import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Empower from "../../components/Empower/empower"
import ClientsReview from "../../components/Clients-Review/ClientsReview";
import OurSolutions from "../../components/OurSolutions/Solutions";
import BlogSection from "../../components/Blog/Blog";
import Testimonial from "../../components/Testimonial/Testimonial";
// import ClientsReview from "../../components/Clients-Review/ClientsReview";
// import OurSolutions from "../../components/OurSolutions/Solutions";
import AboutMain from "../../components/AboutMain/AboutMain";

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Empower />
        {/* <ClientsReview /> */}
        {/* <OurSolutions /> */}
        <Testimonial />
        <AboutMain />
        <ClientsReview />
        <OurSolutions />
        <BlogSection />
    </div>
  )
}

export default Home
