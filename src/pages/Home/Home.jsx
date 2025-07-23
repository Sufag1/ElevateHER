import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import ClientsReview from "../../components/Clients-Review/ClientsReview";
import OurSolutions from "../../components/OurSolutions/Solutions";
import BlogSection from "../../components/Blog/Blog";

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <ClientsReview />
        <OurSolutions />
        <BlogSection />
    </div>
  )
}

export default Home
