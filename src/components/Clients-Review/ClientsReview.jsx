import React, { useState, useEffect } from "react";
import "./ClientsReview.css";
import "../../index.css";


//importing the Apostrophe's
import Vector from "../../assets/Review-Assets/Vector.svg";
import Vector4 from "../../assets/Review-Assets/Vector4.svg";


//importing Students Pictures
// import Stu1 from "../../assets/Review-Assets/Stu1.webp"
import Salma from "../../assets/Students/Salma.webp"
import Fatima from "../../assets/Students/Fatima.webp"
import Mmesoma from '../../assets/Students/Mmesoma.webp'
import Tolulope from '../../assets/Students/Tolulope.webp'
import khadeejaM from '../../assets/Students/KhadeejaM.webp'

const ClientsReview = () => {
    const [index, setIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);

    const reviews = [
        {
        id: "Review1",
        apostropheImg: Vector,
        text: "The ElevateHer Full Stack Development program was transformative, strengthening my full-stack technical skills and confidence. Through code reviews, technical support, and mentoring others, I deepened my understanding of clean code, debugging, communication, leadership, and teamwork. The experience has had a lasting impact on my growth as a developer and contributor to the tech community.",
        img: Salma,
        name: "Salma Abdullahi Saeed",
        position: "STUDENT"
        },
        {
        id: "Review2",
        apostropheImg: Vector4,
        text: "My full-stack journey with ElevateHer Innovation Space was an incredible blend of excitement, learning, and growth. Beyond community, it offered support and belief. I gained hands-on experience building real websites, developed patience, trusted my progress, discovered my capabilities, and strengthened lasting confidence and passion for technology in professional software development.",
        img: Fatima,
        name: "Fatima Abubakar Adam",
        position: "STUDENT"
        },
        {
        id: "Review3",
        apostropheImg: Vector,
        text: "When I got selected for the Full-Stack Developer Track, I was initially clueless as to what to expect. I had to hang on tight; it was a roller-coaster experience on  a steep learning curve. The module outlines are world-class, and the entire study architecture at ElevateHER opens up a world of possibilities from firing up the imagination to redesigning reality. You will just know that your mind has evolved significantly.",
        img: Tolulope,
        name: "Tolulope McSmith",
        position: "STUDENT"
        },
        {
        id: "Review4",
        apostropheImg: Vector4,
        text: "I was selected into ElevateHER as a corper, and while starting the program felt easy, keeping up was tough. The projects are realistic and demand consistency. Although the learning is self-paced, the monthly check-ins and tutoring sessions keep you accountable—you really have no option but to grow. Over time, the structure pushes you beyond comfort and helps you build real skills, not just theory.",
        img: Mmesoma,
        name: "Mmesoma Ugwuanyi Happiness",
        position: "STUDENT"
        },
        {
        id: "Review5",
        apostropheImg: Vector,
        text: "ElevateHer innovation program provided an empowering and supportive learning experience. The facilitators were knowledgeable, the lessons practical, and the community uplifting. As a student, I gained valuable skills, confidence, and clarity. I highly recommend ElevateHer to any woman committed to personal and professional growth",
        img: khadeejaM,
        name: "Khadeeja Mu'azu",
        position: "STUDENT"
        }
    ];


    useEffect(() => {
        const slide = setInterval(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        }, 8000);
        return () => clearInterval(slide);
    }, []);



    //This one is or screen to show just one div especially when it gets to the screen space from 593 to 768
    useEffect(() => {
    const updateSlidesToShow = () => {
        if (window.innerWidth >= 768) {
        setSlidesToShow(2);
        } else if (window.innerWidth >= 593 && window.innerWidth < 768) {
        setSlidesToShow(1);
        } else {
        setSlidesToShow(1);
        }
    };
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);



    const next = () => {
        setIndex((prev) => (prev + 1) % reviews.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    // Show two reviews
    const visibleReviews = [];
        for (let i = 0; i < slidesToShow; i++) {
        visibleReviews.push(reviews[(index + i) % reviews.length]);
    }


    return (
        <section className="ClientsReview">
            <div className="container reviewContainer">
                <div className="maintext-div">
                    <h2 className="maintext">
                        Our <span className="maintext-span"> Client's </span> Reviews
                    </h2>
                </div>
                <div className="secondtextandbtn">
                    <p className="secondtext">
                        Hear what our students have to say about their learning experience, growth, and career journey with us.
                        {/* Erat dolore consequuntur facere consectetuer beatae beatae habitant conubia porttitor ridiculus cillum animi hic enim dolor, excepteur. */}
                    </p>
                    <button className="btn btn-blue">More About Us</button>
                </div>

                    <div className="reviewsRow">
                        <div className="Review-divContainer">
                                {visibleReviews.map((review) => (
                                <div key={review.id} className={review.id}>
                                    <div className="vectorimgs">
                                        <hr />
                                        <img src={review.apostropheImg} alt="apostrophe image" className="apostrophe" />            
                                    </div>
                                    <p className="reviewtext">{review.text}</p>
                                    <div className="reviewerinfo">
                                        <img src={review.img} alt="Reviewer" />
                                        <div className="reviewertextinfo">
                                            <p className="reviewername">{review.name}</p>
                                            <p className="reviewerposition">{review.position}</p>
                                        </div>
                                    </div>
                                    <hr className="otherhr" />
                                </div>
                            ))}
                        </div>

                    </div>
                        <div className="review-dots">
                        {reviews.map((_, idx) => (
                            <span
                            key={idx}
                            className={idx === index ? "dot active" : "dot"}
                            onClick={() => setIndex(idx)}
                            />
                        ))}
                        </div> 

            </div>
        </section>
    );
};

export default ClientsReview
