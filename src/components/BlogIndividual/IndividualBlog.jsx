import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../Blog/Blog";
import "./IndividualBlog.css";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import Share from "../../assets/share.svg";
import BlogDetails from "../BlogDetails/BlogDetails";
import { useState } from "react";
import Footer from '../Footer/Footer.jsx';
import Facebook from "../../assets/Facebook.svg";
import Whatsapp from "../../assets/Whatsapp.svg";
import Youtube from "../../assets/Youtube.svg";
import Instagram from "../../assets/Instagram.svg";
import LinkedIn from "../../assets/LinkedIn.svg";



const IndividualBlog = () => {
  const { id } = useParams();
  const currentId = parseInt(id);
  const post = blogPosts.find((post) => post.id === currentId);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  if (!post) return <h2>Blog post not found</h2>;

  const currentIndex = blogPosts.findIndex((post) => post.id === currentId);
  const prevPost = blogPosts[currentIndex - 1];
  const nextPost = blogPosts[currentIndex + 1];

  return (
    <>
    <div className="blog-page container">
      <div className="main-blog ">
        <div className="individual-blog-article">
          <div className="individual-blog-article-img container">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="individual-blog-article-content">
            <h2>{post.title}</h2>
            <div className="blog-info-tab">
              <div className="date">
                <span>
                  {post.month}, {post.date}
                </span>
              </div>
              <div className="content">
                <Link to={`/blog/${post.id}`} className="content-link">Content</Link>
            </div>

            </div>
            <p>{post.description}</p>
          </div>
        </div>

        <div className="tag-share">
          <div className="tags-div">
            <i className="tag">Tags:</i>{" "}
            <i className="tags">
              <a href="#">Web Development,</a>
              <a href="#">Artificial Intelligence,</a>
              <a href="#">DevOps,</a>
              <a href="#">Business Development,</a>
            </i>
          </div>
          <div className="share">
  <button onClick={toggleShareOptions} className="share-btn">
    <img src={Share} alt="Share" />
  </button>

  {showShareOptions && (
    <div className="share-options">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Facebook} alt="facebook" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Whatsapp} alt="whatsapp" />
      </a>

      <a
        href={`https://www.youtube.com/sharer/sharer.php?u=${window.location.href}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Youtube} alt="youtube" />
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${post.title} ${window.location.href}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Instagram} alt="instagram" />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedIn} alt="linked in" />
      </a>
      
    </div>
  )}
</div>

        </div>
        <div className="blog-navigation">
          {prevPost && (
            <Link to={`/blog/${prevPost.id}`} className="prev-blog">
              <button className="btn blue">Previous</button>
            </Link>
          )}

          {nextPost && (
            <Link to={`/blog/${nextPost.id}`} className="next-blog">
              <button className="btn orange">Next</button>
            </Link>
          )}
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
          />{" "}
          <br />
          <input
            className="your-input"
            type="email"
            placeholder="E-mail (required)"
          />{" "}
          <br />
          <input className="your-input" type="text" placeholder="Website" />

          <div className="checkbox-line">
            <input type="checkbox" id="agree" placeholder="Comment" />
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

      <div className="blog-details container">
        <BlogDetails />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default IndividualBlog;
