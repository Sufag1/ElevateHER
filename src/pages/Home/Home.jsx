import HeroSection from "../../components/HeroSection/HeroSection";
import Empower from "../../components/Empower/empower"
import ClientsReview from "../../components/Clients-Review/ClientsReview";
import OurSolutions from "../../components/OurSolutions/Solutions";
import BlogSection from "../../components/Blog/Blog";
import Testimonial from "../../components/Testimonial/Testimonial";

function Home() {
  return (
    <div>
        <HeroSection />
        <Empower />
        <ClientsReview />
        <OurSolutions />
        <Testimonial />
        <BlogSection />
    </div>
  )
}

export default Home
