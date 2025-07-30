import { blogPosts } from '../Blog/Blog';
import "./BlogMain.css";
import { Link } from 'react-router-dom';


const BlogMain = () => {
  return (
    <div className="blog-page">
      <div className="blog-posts container">
        {blogPosts.map((post) => (
          <article className="blog-article" key={post.id}>
            <div className="blog-article-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-flex">

                <div className="blog-info">
                  <div className="date">
                    <span className="date">
                      {post.month},{post.date}
                    </span>
                  </div>
              {/* <div className="author"><span className='author'>{post.author}</span></div> */}
              <div className="content">
                <span className="content">Content</span>
              </div>
            </div>
            <div className="blog-article-content">
              <h2>{post.title}</h2>

                <div className="blog-info-tab">
                  <div className="date">
                    <span className="date">
                      {post.month},{post.date}
                    </span>
                  </div>
                  <div className="content">
                    <span className="content">Content</span>
                  </div>
                </div>
              <p>{post.description}</p>
              <Link to={`/blogs/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
            </div>
            
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogMain;
