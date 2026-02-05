import Navbar from "../../components/Navbar/Navbar";
import Courses from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import './Portfolio.css'


function Portfolio() {
  return (
    <div className="portfolio-page">
        {/* <Navbar /> */}
        <PageHeader title="Courses"/>
        <Courses />
        {/* <Footer /> */}
    </div>
  )
}

export default Portfolio
