import { useEffect, useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { fetchEvents, subscribeToTable } from "../../services/contentService";
import Cybersec from '../../assets/cybersecawareness.jpeg'
import Remotingwork from '../../assets/remoting.work.jpeg'
import eventImage3 from '../../assets/event-3.jpeg'
import Cyber2 from '../../assets/CyberA2.jpeg'
import Cyber3 from '../../assets/CyberA3.jpeg'
import Cyber4 from '../../assets/CyberA4.jpeg'
import Remoting from '../../assets/remoting.webp'
import Careers1 from '../../assets/remoting.work.jpeg'
import Careers2 from '../../assets/remoting.webp'
import eventImage1 from '../../assets/event-1.jpeg'
import eventImage2 from '../../assets/event-2.jpeg'
import Stackhpc from '../../assets/Pict/stackhpc.jpg'
import Stackhpc1 from '../../assets/Pict/stackhpc1.jpg'
import Stackhpc2 from '../../assets/Pict/stackhpc2.jpg'


export const blogPosts = [
  {
    id: 1,
    tag: "AI",
    image: Cybersec,
    date: "14",
    month: "Mar",
    year: "2026",
    title: "Empowering the Next Generation: Cybersecurity Awareness Session at Government Girls Secondary School, Giginyu",
    otherEventPics: [
      {
        image: Cyber2,
        alt: "Cybersecurity awareness session with students",
      },
      {
        image: Cyber3,
        alt: "Students participating in the cybersecurity awareness session",
      },
      {
        image: Cyber4,
        alt: "ElevateHER cybersecurity awareness event moment",
      },
    ],
    description:
      "We recently had the privilege of conducting a Cybersecurity Awareness Session for the students of Government Girls Secondary School, Giginyu. The session was designed to introduce young girls to the importance of staying safe in today's digital world while inspiring them to explore opportunities in technology and cybersecurity.\n\nThroughout the session, the students actively participated in discussions on topics such as online safety, protecting personal information, recognizing cyber threats, responsible use of social media, and creating strong passwords. The interactive nature of the program encouraged questions, practical demonstrations, and meaningful conversations, making the learning experience both engaging and memorable.\n\nBeyond raising awareness, the session aimed to spark curiosity and confidence among the students, showing them that they can become future innovators, cybersecurity professionals, and leaders in the technology industry.\n\nIt was truly inspiring to witness the enthusiasm and eagerness of the students to learn. We are grateful to the management and staff of Government Girls Secondary School, Giginyu, for providing the opportunity to engage with these bright young minds.\n\nAs technology continues to shape our world, cybersecurity awareness is no longer optional—it is essential. We remain committed to promoting digital safety, empowering young people with practical knowledge, and contributing to the development of a more secure digital future for our communities.",
  },
  {
    id: 2,
    tag: "DevOps",
    image: Remotingwork,
    date: "7",
    month: "May",
    year: "2026",
    title: "ElevateHER Innovation Space Partners with remoting.work to Unlock Global Career Opportunities for African Women in Tech",
    otherEventPics: [
      {
        image: Remoting,
        alt: "Remote work opportunities for women in tech",
      },
      {
        image: Careers1,
        alt: "Career development support for women in technology",
      },
      
    ],
    description:
      "We are excited to announce that ElevateHER Innovation Space Ltd has officially partnered with remoting.work to expand access to global remote work opportunities for African women in technology. This collaboration marks an important step toward bridging the gap between world-class digital talent and the growing international demand for skilled remote professionals. At ElevateHER Innovation Space, our mission has always been to equip women with the technical skills, confidence, and support they need to thrive in the digital economy. Through intensive training, mentorship, and innovation-driven programs, we have empowered aspiring professionals to build careers in software development, cybersecurity, artificial intelligence, data, and other high-demand technology fields. Our partnership with remoting.work takes this mission even further. By combining ElevateHER's talent development ecosystem with remoting.work's expertise in connecting professionals with remote opportunities, we are creating a pathway for qualified women to access meaningful careers with organizations across the globe—without being limited by geography. This collaboration is about more than remote jobs. It is about building a future where African talent is recognized for its excellence, where women can compete confidently in the global technology industry, and where local innovation contributes to solving global challenges. As businesses worldwide continue to embrace remote and distributed teams, opportunities for skilled professionals are growing faster than ever. Through this partnership, we are committed to ensuring that African women are well-positioned to seize these opportunities, build sustainable careers, and make lasting contributions to the global digital workforce. This is only the beginning. Together with remoting.work, we look forward to empowering more women, expanding access to international opportunities, and shaping a future where talent—not location—defines success. We invite our community to join us on this exciting journey as we continue building pathways that connect African innovation with the world.",
  },
  {
    id: 3,
    tag: "Business Development",
    image: Stackhpc,
    date: "12",
    month: "Nov",
    year: "2025",
    title: "Breaking Barriers in Cloud Computing: How ElevateHer and StackHPC Empowered the Next Generation of Women in STEM",
    otherEventPics: [
      {
        image: Stackhpc1,
        alt: "ElevateHER event audience",
      },
      {
        image: Stackhpc2,
        alt: "ElevateHER event session",
      },
    ],
    description:
    "At ElevateHer, we believe that empowering women in Science, Technology, Engineering, and Mathematics (STEM) goes beyond teaching technical skills—it means creating opportunities for young women to solve real-world problems, contribute to global technologies, and build careers without limits.This vision came to life through an exceptional collaboration with StackHPC and the University of Jos, where five talented women from ElevateHer joined two Computer Science students from the University of Jos in a seven-week internship focused on cloud computing, open-source software development, and OpenStack technologies.The internship was more than a training program—it was an opportunity to demonstrate that talent knows no borders and that with the right mentorship and resources, African women can make meaningful contributions to global technology communities.From Learning to ContributingThroughout the internship, participants gained hands-on experience working with OpenStack Magnum, one of the leading open-source platforms for managing container orchestration engines in cloud environments.Rather than learning through simulations alone, the interns worked within a real development environment using virtual machines hosted on StackHPC's OpenStack infrastructure. They explored deployment processes, tested software components, investigated bugs, managed code branches, and contributed to documentation while learning industry-standard development workflows.By the end of the program, the interns were confidently running Tempest tests, validating software patches, and understanding how open-source contributions are reviewed and integrated into production systems.Developing Industry-Ready SkillsThe internship exposed participants to modern software engineering practices and cloud technologies that are widely used across the global technology industry.Among the skills developed were:OpenStack cloud infrastructureMagnum deployment and configurationGit and GitHub collaboration workflowsPython developmentSSH and remote server managementUnit testing and integration testingTechnical documentationBug fixing and troubleshootingCollaborative code reviewsOpen-source contribution practicesMore importantly, participants experienced what it means to work as part of a distributed engineering team where communication, documentation, and collaboration are just as valuable as technical expertise.The ElevateHer Team's JourneyRepresenting ElevateHer were Hilda, Mariam, and Naja'atu Kabir, three aspiring computer engineers who immersed themselves in the world of cloud computing and open-source development.Working together, they:Forked and configured the OpenStack Magnum repository.Built local development environments.Solved dependency and configuration challenges.Executed unit tests using Tox.Improved documentation.Fixed software issues.Collaborated through GitHub pull requests and peer code reviews.Their experience reinforced an important lesson: successful software engineering is not simply about writing code—it's about persistence, teamwork, problem-solving, and continuous learning.Voices from the InternshipParticipants from both ElevateHer and the University of Jos described the internship as a transformative experience that bridged the gap between classroom learning and real-world software engineering.Working on active cloud infrastructure projects allowed them to strengthen their confidence, improve technical communication, understand collaborative development, and appreciate the importance of contributing to open-source communities.The internship also demonstrated how mentorship, practical exposure, and supportive learning environments can accelerate professional growth and prepare students for careers in cloud engineering, software development, DevOps, and infrastructure engineering.The Power of CollaborationThis initiative was made possible through the collective efforts of several partners committed to advancing STEM education and open-source innovation.Mentors from the University of Jos, Cloudsync Enterprise, ElevateHer, and StackHPC provided technical guidance, mentorship, and continuous support throughout the program, ensuring participants gained both technical competence and professional confidence.Their dedication reflects a shared commitment to expanding access to world-class learning opportunities and empowering more women to participate in shaping the future of technology.More Than Technical TrainingWhile the internship focused on cloud infrastructure and OpenStack technologies, its impact reached much further.Participants developed:Greater confidence in their abilities.Stronger collaboration and communication skills.Professional problem-solving techniques.Experience contributing to global open-source projects.A deeper understanding of modern software engineering practices.These experiences prepare them not only for future employment but also to become contributors, innovators, and leaders within the global technology ecosystem.Advancing ElevateHer's MissionAt ElevateHer, our mission is to bridge the gender gap in technology by equipping women with practical skills, mentorship, and opportunities that create lasting impact.Collaborations like this demonstrate the importance of connecting local talent with global technology communities. By giving aspiring engineers access to real projects, experienced mentors, and international collaboration, we help transform potential into opportunity.Every internship, mentorship program, and partnership moves us one step closer to a future where women are fully represented in technology, innovation, and digital leadership.Looking AheadThe success of this internship serves as a powerful reminder that meaningful change happens when organizations work together to create opportunities for emerging talent.As ElevateHer continues to expand its programs and partnerships, we remain committed to empowering more women with the knowledge, confidence, and practical experience needed to thrive in today's rapidly evolving technology landscape.Together, we are not only building careers—we are building a more inclusive, innovative, and connected future for STEM.About ElevateHerElevateHer is dedicated to empowering women and girls through technology education, mentorship, innovation, and career development. By providing access to industry-relevant training, strategic partnerships, and real-world opportunities, ElevateHer is helping shape the next generation of female leaders in STEM."

  },
];

const BlogSection = () => {
  const [posts, setPosts] = useState(blogPosts);

  useEffect(() => {
    let mounted = true;

    const loadEvents = async () => {
      try {
        const events = await fetchEvents();
        if (mounted && events !== null) setPosts(events);
      } catch (error) {
        console.warn("Unable to load Supabase events", error);
      }
    };

    loadEvents();
    const unsubscribe = subscribeToTable("events", loadEvents);

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  return (
    <section className="blog-section">
        <div className="blog-container container">
            <h2 className="blog-title">
                Latest <span className="highlight-blog">Events</span> & <span className="highlight-news">News</span>
            </h2>
            <p className="blog-subtitle">
                Stay updated with our latest workshops, training programs, and success stories that highlight the impact of our initiatives.
            </p>
            
            <div className="blog-cards">
                {posts.map((post) => (
                <div className="blog-card" key={post.id}>
                    <div className="blog-image-wrapper">
                    <span className="blog-tag">{post.tag}</span>
                    <div className="blog-image-container">
                        <img src={post.image} alt={post.title} className="blog-image" />
                    </div>
                    <div className="blog-date">
                        <p>{post.date}</p>
                        <small>{post.month}</small>
                        <small>{post.year}</small>
                    </div>
                    </div>
                    <div className="blog-content">
                    <h3>{post.title}</h3>
                    {(() => {
                      const normalized = (post.description || "").replace(/\n+/g, " ").trim();
                      const words = normalized.length ? normalized.split(/\s+/) : [];
                      const preview = words.slice(0, 15).join(" ");
                      return (
                        <p>
                          {preview}
                          {words.length > 15 ? "..." : ""}
                        </p>
                      );
                    })()}
                    <Link to={`/blog/${post.id}`}>
                      <button className="read-more-btn">Read more</button>
                    </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default BlogSection;
