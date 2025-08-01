import Navbar from "../../components/Navbar/Navbar";
import AboutMain from "../../components/AboutMain/AboutMain";
import PageHeader from "../../components/PageHeader/PageHeader";
import AboutSocials from "../../components/AboutSocials/AboutSocials";
import AboutPartners from "../../components/AboutPartners/AboutPartners";


function About() {
  return (
    <div>
        <Navbar />
        <PageHeader />
        <AboutMain />
        <AboutSocials />
        <AboutPartners />
    </div>
  )
}

export default About
