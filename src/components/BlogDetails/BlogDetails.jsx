import { blogPosts } from '../Blog/Blog';
import "./BlogDetails.css";
import Facebook from "../../assets/Facebook.svg";
import Pinterest from "../../assets/Pinterest.svg";
import Youtube from "../../assets/Youtube.svg";
import TikTok from "../../assets/TikTok.svg";
import Twitter from "../../assets/Twitter.svg";


const BlogDetails = () => {
    return ( 
      <div className="blog-additional-detail">
        <div>
          <div className="about-author">
            <h2>About Author</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat vel
              provident et velit eum omnis nesciunt. Placeat provident neque at
              consequatur temporibus impedit, autem eius consequuntur adipisci
              atque debitis culpa!
            </p>
          </div>

          <div className="popular-posts">
            <h2>Popular Posts</h2>
            <div className="popular-articles">
              {blogPosts.map((post) => (
                <div className="popular-article">
                  <div className="article-image ">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="article-details">
                    <h3>{post.title.length > 15 ? post.title.slice(0, 45) + '...' : post.title}</h3>
                    <i><p>{post.month}, {post.date}</p></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-icons">
              a<img className='facebook' src={Facebook} alt="Facebook" />
              <img className='twitter' src={Twitter} alt="Twitter" />
              <img className='youtube' src={Youtube} alt="Youtube" />
              <img className='pinterest' src={Pinterest} alt="Pinterest" />
              <img className='tiktok' src={TikTok} alt="Tik Tok" />
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