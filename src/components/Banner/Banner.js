import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="banner mb-4">
                <div className="row">
                    <div className="col-md-6">
                    <div className="banner-text">
                            <h1>Online Learning <br /> Platform</h1>
                            <p>Build skill with courses, certificates and degrees from <br /> world-class universities and companies</p>
                            <button className="banner-btn">Join For Free</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="banner-bottom">
                <div className="row row-cols-3 g-5">
                    <div className="col">
                        <div className="single-banner-bottom">
                            <h3>100+ classes</h3>
                            <p>From the world's best</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="single-banner-bottom">
                            <h3>20 lessons</h3>
                            <p>Average per class</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="single-banner-bottom">
                            <h3>10 minutes</h3>
                            <p>Average per lesson</p>
                        </div>
                    </div>
                </div>
            </div>


                












        </div>
    );
};

export default Banner;