import { blogPosts } from '../Blog/Blog';
import "./BlogDetails.css";
import { Link } from "react-router-dom";
import Facebook from "../../assets/Facebook.svg";
import Whatsapp from "../../assets/Whatsapp.svg";
import Youtube from "../../assets/Youtube.svg";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/LinkedIn.svg";

const BlogDetails = () => {
  return ( 
    <div className="blog-additional-detail">
      <div>
        <div className="about-author">
          <h2>About Author</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel
            provident et velit eum omnis nesciunt.
          </p>
        </div>

        <div className="popular-posts">
          <h2>Popular Posts</h2>
          <div className="popular-articles">
            {blogPosts.map((post) => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id} 
                className="popular-article"
              >
                <div className="article-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="article-details">
                  <h3>
                    {post.title.length > 45 
                      ? post.title.slice(0, 45) + '...' 
                      : post.title}
                  </h3>
                  <i><p>{post.month},{post.date}</p></i>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img className='facebook' src={Facebook} alt="Facebook" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img className='whatsapp' src={Whatsapp} alt="Whatsapp" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img className='youtube' src={Youtube} alt="Youtube" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img className='instagram' src={Instagram} alt="Instagram" />
          </a>
          <a className='linkendinn' href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img className='linkedin' src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>

        <div className="newsletter">
          <h2>Newsletter</h2>
          <input type="email" placeholder='Enter Your Email'/><br />
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
 
export default BlogDetails;
