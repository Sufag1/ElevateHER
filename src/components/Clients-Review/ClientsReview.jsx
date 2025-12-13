import React, { useState, useEffect } from "react";
import "./ClientsReview.css";
import "../../index.css";

//importing the Apostrophe's
import Vector from "../../assets/Review-Assets/Vector.svg";
import Vector4 from "../../assets/Review-Assets/Vector4.svg";


//importing Students Pictures
import Stu1 from "../../assets/Review-Assets/Stu1.webp"

const ClientsReview = () => {
    const [index, setIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);

    const reviews = [
        {
        id: "Review1",
        apostropheImg: Vector,
        text: "Provident egestas non debitis sociosqu ante luctus massa beatae modi duis...",
        img: Stu1,
        name: "Celia Almeda",
        position: "STUDENT"
        },
        {
        id: "Review2",
        apostropheImg: Vector4,
        text: "Aliquam erat volutpat. Integer placerat luctus sem, vitae luctus nunc.",
        img: Stu1,
        name: "John Doe",
        position: "STUDENT"
        },
        {
        id: "Review3",
        apostropheImg: Vector,
        text: "Suspendisse potenti. Duis sollicitudin ligula id placerat ultricies.",
        img: Stu1,
        name: "Maria Silva",
        position: "PARENT"
        },
        {
        id: "Review4",
        apostropheImg: Vector4,
        text: "Praesent eu odio non nulla facilisis suscipit. Curabitur consequat.",
        img: Stu1,
        name: "Ahmed Khan",
        position: "FACILITATOR"
        },
        {
        id: "Review5",
        apostropheImg: Vector,
        text: "Donec vitae libero a justo sodales aliquam. Sed vitae dictum velit.",
        img: Stu1,
        name: "Linda Zhang",
        position: "STUDENT"
        }
    ];


    useEffect(() => {
        const slide = setInterval(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        }, 4000);
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
