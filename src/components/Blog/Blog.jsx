import "./Blog.css";
import { Link } from "react-router-dom";
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
  // {
  //   id: 3,
  //   tag: "Business Development",
  //   image: eventImage3,
  //   date: "02",
  //   month: "May",
  //   year: "2026",
  //   title: "Meta Release New ‘Widely Viewed Content’ Report for Facebook",
  //   otherEventPics: [
  //     {
  //       image: eventImage1,
  //       alt: "ElevateHER event audience",
  //     },
  //     {
  //       image: eventImage2,
  //       alt: "ElevateHER event session",
  //     },
  //   ],
  //   description:
  //     "Magna vestibulum aut consequat velit numquam. Assumenda, ridiculus molestie, minim quas officiis,...",
  // },
];

const BlogSection = () => {
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
                {blogPosts.map((post) => (
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
                      const normalized = post.description.replace(/\n+/g, " ").trim();
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
