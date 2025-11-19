import { blogPosts } from '../Blog/Blog';
import "./BlogMain.css";
import { Link } from 'react-router-dom';
import BlogDetails from '../BlogDetails/BlogDetails';
import NavBar from '../Navbar/Navbar';


const BlogMain = () => {
  return (
      <>
    <div style={{ marginBottom: 'var(--space-xl)' }}>
      <NavBar />
    </div>

    <div className="blog-page container">
      <div className="blog-posts ">
        {blogPosts.map((post) => (
          <article className="blog-article container " key={post.id}>
            <div className="blog-article-img" >
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-flex">
                <div className="blog-info">
                  <div className="date">
                    <span className="date">
                      {post.month},{post.date}
                    </span>
                  </div>
              <div className="content">
                <span className="content">Content</span>
              </div>
            </div>
            <div className="blog-article-content">
              <h2>{post.title}</h2>


                <div className="blog-info-tab">
              
                  <div className="date">
                    <span className="date">
                      • {post.month}, {post.date}
                    </span>
                  </div>
                  <div className="content">
                    <Link to={`/blog/${post.id}`} className="content-link">• Content</Link>
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
        ))}
      </div>
      <div className="blog-details container">
        <BlogDetails />
      </div>
    </div>
    </>
  );
};

export default BlogMain;
