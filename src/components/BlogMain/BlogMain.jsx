import { blogPosts } from '../Blog/Blog';
import "./BlogMain.css";
import { Link } from 'react-router-dom';
import BlogDetails from '../BlogDetails/BlogDetails';
import NavBar from '../Navbar/Navbar';


const BlogMain = () => {
  return (
      <>
    <div style={{ marginBottom: 'var(--space-md)' }}>
      <NavBar />
    </div>

    <div className="blog-page container">
      <h2 className="blog-title">
                Latest <span className="highlight-blog">Events</span> & <span className="highlight-news">News</span>
            </h2>
            <p className="blog-subtitle">
                Stay updated with our latest workshops, training programs, and success stories that highlight the impact of our initiatives.
            </p>
      <div className="blog-posts ">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`}>
          <article className="blog-article container " key={post.id}>
            <div className="blog-article-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-flex ">
                <div className="blog-info iflex">
                  <div className="date">
                    <span className="date">
                      • {post.month},{post.date}
                    </span>
                  </div>
              <div className="content">
                <span className="content">• Content</span>
              </div>
            </div>
            <div className="blog-article-content">
              <h2>{post.title}</h2>


                <div className="blog-info-tab">
              
                  <div className="date">
                    <span className="date dmc">
                      • {post.month}, {post.date}
                    </span>
                  </div>
                  <div className="content">
                    <Link to={`/blog/${post.id}`} className="content-link dmc">• Content</Link>
                  </div>
                </div>
                <div className="post-button">
                  <p>{post.description.length > 10 ? post.description.slice(0, 55) + '...' : post.description}</p>
                  
                </div>
                <Link to={`/blog/${post.id}`}>
                    <button className='read-btn'>Read More</button>
                </Link>
            </div>
            </div>
          </article>
          </Link>
        ))}
      </div>
      {/* <div className="blog-details container">
        <h3 className='h3forblogd'>Follow Us On Social Media</h3>
        <BlogDetails />
      </div> */}
    </div>
    </>
  );
};

export default BlogMain;
