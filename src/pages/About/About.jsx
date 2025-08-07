import Navbar from "../../components/Navbar/Navbar";
import AboutMain from "../../components/AboutMain/AboutMain";
import PageHeader from "../../components/PageHeader/PageHeader";
import { blogPosts } from "../../components/Blog/Blog";

function About() {
  return (
    <div>
        <Navbar />
        <PageHeader />
        <AboutMain />
        blogPosts.map(() => {
          
        })
    </div>
  )
}

export default About
