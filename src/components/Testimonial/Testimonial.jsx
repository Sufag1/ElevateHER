import './Testimonial.css';

function Testimonial() {
  return (
    <section className='container testimonial-wrapper'>
      <div className='testimonial-section'>
        <h2 className="testimonial-title">
          Real <span className="testimonial-highlight">People</span><span>, True Stories</span>
        </h2>
        <p className="testimonial-subtitle">
          Hear from our students and partners as they share their journeys, growth, and career outcomes through our programs.
          {/* Hear directly from our full-stack development students as they share their journey,
          growth, and success in our immersive program. */}
        </p>

        <div className="testimonial-videos">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/yhUJHuvxIAo"
              title="Student Experience 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-caption">Aisha shares how she built her first full-stack app</p>
          </div>
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/OXyVuRnPI-s"
              title="Student Experience 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-caption">John reflects on his journey into the tech world</p>
          </div>
        </div>

        <p className="testimonial-cta">
          Join the next cohort and transform your tech career today 🚀
        </p>
      </div>
    </section>
  );
}

export default Testimonial;
