import Navbar from "../../components/Navbar/Navbar";
import AboutMain from "../../components/AboutMain/AboutMain";
import PageHeader from "../../components/PageHeader/PageHeader";
import AboutSocials from "../../components/AboutSocials/AboutSocials";
import AboutPartners from "../../components/AboutPartners/AboutPartners";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
    <div>
      <PageHeader title="About Us" />
    </div>
    <div  className="container">
        <Navbar />
        <AboutMain />
        <AboutSocials />
        <AboutPartners />
        <Footer />
    </div>
    
    </>
    
  )
}

export default About
