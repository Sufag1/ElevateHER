import { useParams } from "react-router-dom";
import { blogPosts } from "../Blog/Blog";
import "./IndividualBlog.css";
import RightArrow from "../../assets/right-arrow.svg";
import BlogDetails from "../BlogDetails/BlogDetails";

const IndividualBlog = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));
  if (!post) return <h2>Blog post not found</h2>;
  return (
    <div className="blog-page container">
      <div className="main-blog">
        <div className="blog-article">
          <div className="blog-article-img">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-article-content">
            <h2>{post.title}</h2>
            <div className="blog-info-tab">
              <div className="date">
                <span>
                  {post.month}, {post.date}
                </span>
              </div>
              <div className="content">
                <span>Content</span>
              </div>
            </div>
            <p>{post.description}</p>
          </div>
        </div>

        <div className="tags-div">
          <i className="tag">Tags:</i>{" "}
          <i className="tags">
            <a href="#">Web Development,</a>
            <a href="#">Artificial Intelligence,</a>
            <a href="#">DevOps,</a>
            <a href="#">Business Development,</a>
          </i>
        </div>

        <a href="#">
          <div className="left-arrow">
            <img src={RightArrow} alt="left arrow" />
          </div>
        </a>
        <div className="next-blog">
          <a href="#" className="next">
            <span>Next Blog</span>
          </a>
        </div>

        <div className="comment-section">
          <h2>Add a Comment</h2>
          <p className="your-email">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <input
            className="your-input"
            type="text"
            placeholder="Name (required)"
          /> <br />
          <input
            className="your-input"
            type="email"
            placeholder="E-mail (required)"
          /> <br />
          <input className="your-input" type="text" placeholder="Website" />

          <div class="checkbox-line">
            <input type="checkbox" id="agree" />
            <p className="save-my-name">
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>

          <div className="text-area">
            <textarea name="comment" id="comment"></textarea>
            <br />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>

      <div className="blog-details">
        <BlogDetails />
      </div>
    </div>
  );
};

export default IndividualBlog;
