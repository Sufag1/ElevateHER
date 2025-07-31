import './Events.css';
import BlogMain from '../../components/BlogMain/BlogMain';
import BlogDetails from '../../components/BlogDetails/BlogDetails';
const Events = () => {
  return (

    <>
    <div className="container">
      <div className="events-div">
        <div className="blogswrapper">
            <BlogMain />
        </div>
        <div className="blogdetails">
            <BlogDetails />
        </div>
    </div>

    </div>
    
    
    </>
    
  );
};

export default Events;
