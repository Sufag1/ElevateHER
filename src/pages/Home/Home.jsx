import HeroSection from "../../components/HeroSection/HeroSection";
import Empower from "../../components/Empower/empower"
import ClientsReview from "../../components/Clients-Review/ClientsReview";
import OurSolutions from "../../components/OurSolutions/Solutions";
import BlogSection from "../../components/Blog/Blog";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import Impact from "../../components/Impact/Impact";
import FinalCTA from "../../components/FinalCTA/FinalCTA";


function Home() {
  return (
    <>
        <HeroSection/>
        <Empower />
        <Testimonial />
        <ClientsReview />
        <OurSolutions />
        <Impact />
        <BlogSection />
        <FinalCTA />
        <Footer wavePosition="bottom"/>
    </>
  )
}

export default Home
