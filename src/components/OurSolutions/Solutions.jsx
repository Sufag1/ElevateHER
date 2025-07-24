import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import "./Solutions.css";



const Solutions = () => {
    return ( 
        <>
        <BrowserRouter>

        <div className="solutions-section">
            <div className="solutions-container solutions-texts-div">
                <h1>Our <span>Solutions</span> & <br class="responsive-br" /> Features</h1>

                <p>Erat dolore consequuntur facere consectetuer beatae beatae habitant conubia porttitor ridiculus cillum animi hic enim dolor, excepteur sapienteriav perspiciatis aliquet.</p>

            </div>

            <div className=" solutions-cards-div">

                <div className="solution-card">
                    <div className="card-text">
                        <div className="solution-icon">
                            <div className="card-style">
                                <div className="shapes">shapes</div><div className="number"><h2>01</h2></div>
                            </div>

                        </div>
                        <h2>Email Marketing</h2>
                        <p>Assumenda maecenas senectus, dignissimos phasellus recusandae felis venenatis distinctio netus convallis? Odit volutpat per.</p>
                        <div className="learn-more-link">
                            <Link to="/learn">LEARN MORE...</Link>
                        </div>
                    
                    </div>
                </div>

                <div className="solution-card">
                    <div className="card-text">
                        <div className="solution-icon">
                            <div className="card-style">
                                <div className="shapes">shapes</div><div className="number"><h2>02</h2></div>
                            </div>

                        </div>
                        <h2>SEO Management</h2>
                        <p>Assumenda maecenas senectus, dignissimos phasellus recusandae felis venenatis distinctio netus convallis? Odit volutpat per.</p>
                        <div className="learn-more-link">
                            <Link to="/learn">LEARN MORE...</Link>
                        </div>
                    
                    </div>
                </div>

                <div className="solution-card">
                    <div className="card-text">
                        <div className="solution-icon">
                            <div className="card-style">
                                <div className="shapes">shapes</div><div className="number"><h2>03</h2></div>
                            </div>

                        </div>
                        <h2>Content Writing</h2>
                        <p>Assumenda maecenas senectus, dignissimos phasellus recusandae felis venenatis distinctio netus convallis? Odit volutpat per.</p>
                        <div className="learn-more-link">
                            <Link to="/learn">LEARN MORE...</Link>
                        </div>
                    
                    </div>
                </div>

                <div className="solution-card">
                    <div className="card-text">
                        <div className="solution-icon">
                            <div className="card-style">
                                <div className="shapes">shapes</div><div className="number"><h2>04</h2></div>
                            </div>

                        </div>
                        <h2>Business Strategy</h2>
                        <p>Assumenda maecenas senectus, dignissimos phasellus recusandae felis venenatis distinctio netus convallis? Odit volutpat per.</p>
                        <div className="learn-more-link">
                            <Link to="/learn">LEARN MORE...</Link>
                        </div>
                    </div>
                </div>

                <div className="solution-card">
                    <div className="card-text">
                        <div className="solution-icon">
                            <div className="card-style">
                                <div className="shapes">shapes</div><div className="number"><h2>05</h2></div>
                            </div>

                        </div>
                        <h2>Media Management</h2>
                        <p>Assumenda maecenas senectus, dignissimos phasellus recusandae felis venenatis distinctio netus convallis? Odit volutpat per.</p>
                        <div className="learn-more-link">
                            <Link to="/learn">LEARN MORE...</Link>
                        </div>
                    </div>
                </div>

                <div className="solution-card">
                    <div className="card-text">
                        <div className="solution-icon">
                            <div className="card-style">
                                <div className="shapes">shapes</div><div className="number"><h2>06</h2></div>
                            </div>

                        </div>
                        <h2>Product Management</h2>
                        <p>Assumenda maecenas senectus, dignissimos phasellus recusandae felis venenatis distinctio netus convallis? Odit volutpat per.</p>
                        <div className="learn-more-link">
                            <Link to="/learn">LEARN MORE...</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </BrowserRouter>
        </>
     );
}
 
export default Solutions;