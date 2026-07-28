import "./Blog.css";
import { Link } from "react-router-dom";
import Cybersec from '../../assets/cybersecawareness.jpeg'
import eventImage2 from '../../assets/event-2.jpeg'
import eventImage3 from '../../assets/event-3.jpeg'

export const blogPosts = [
  {
    id: 1,
    tag: "AI",
    image: Cybersec,
    date: "14",
    month: "Mar",
    year: "2026",
    title: "Empowering the Next Generation: Cybersecurity Awareness Session at Government Girls Secondary School, Giginyu",
    description:
      "We recently had the privilege of conducting a Cybersecurity Awareness Session for the students of Government Girls Secondary School, Giginyu. The session was designed to introduce young girls to the importance of staying safe in today's digital world while inspiring them to explore opportunities in technology and cybersecurity.\n\nThroughout the session, the students actively participated in discussions on topics such as online safety, protecting personal information, recognizing cyber threats, responsible use of social media, and creating strong passwords. The interactive nature of the program encouraged questions, practical demonstrations, and meaningful conversations, making the learning experience both engaging and memorable.\n\nBeyond raising awareness, the session aimed to spark curiosity and confidence among the students, showing them that they can become future innovators, cybersecurity professionals, and leaders in the technology industry.\n\nIt was truly inspiring to witness the enthusiasm and eagerness of the students to learn. We are grateful to the management and staff of Government Girls Secondary School, Giginyu, for providing the opportunity to engage with these bright young minds.\n\nAs technology continues to shape our world, cybersecurity awareness is no longer optional—it is essential. We remain committed to promoting digital safety, empowering young people with practical knowledge, and contributing to the development of a more secure digital future for our communities.",
  },
  {
    id: 2,
    tag: "DevOps",
    image: eventImage2,
    date: "21",
    month: "July",
    year: "2026",
    title: "Twitter is Working on a New Podcast Tab to Facilitate Discovery",
    description:
      "Magna vestibulum aut consequat velit numquam. Assumenda, ridiculus molestie, minim quas officiis,...",
  },
  {
    id: 3,
    tag: "Business Development",
    image: eventImage3,
    date: "02",
    month: "May",
    year: "2026",
    title: "Meta Release New ‘Widely Viewed Content’ Report for Facebook",
    description:
      "Magna vestibulum aut consequat velit numquam. Assumenda, ridiculus molestie, minim quas officiis,...",
  },
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
