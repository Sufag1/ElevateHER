import "./Blog.css";
import eventImage1 from '../../assets/event-1.jpeg'
import eventImage2 from '../../assets/event-2.jpeg'
import eventImage3 from '../../assets/event-3.jpeg'

export const blogPosts = [
  {
    id: 1,
    tag: "AI",
    image: eventImage1,
    date: "08",
    month: "August",
    title: "7 Steps in Mapping Out an Effective Social Media Strategy for YouTube",
    description:
      "Magna vestibulum aut consequat velit numquam. Assumenda, ridiculus molestie, minim quas officiis,...",
  },
  {
    id: 2,
    tag: "DevOps",
    image: eventImage2,
    date: "21",
    month: "July",
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
                    </div>
                    </div>
                    <div className="blog-content">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <button className="read-more-btn">Read more</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default BlogSection;
