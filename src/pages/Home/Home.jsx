import HeroSection from "../../components/HeroSection/HeroSection";
import Empower from "../../components/Empower/empower"
import ClientsReview from "../../components/Clients-Review/ClientsReview";
import OurSolutions from "../../components/OurSolutions/Solutions";
import BlogSection from "../../components/Blog/Blog";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <div>
        <HeroSection />
        <Empower />
        <Testimonial />
        <ClientsReview />
        <OurSolutions />
        <BlogSection />
        <Footer wavePosition="bottom"/>
    </div>
  )
}

export default Home
