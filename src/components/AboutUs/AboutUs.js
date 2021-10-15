import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="row aboutUs-container">
                <div className="col md-6 about">
                    <h1>ABOUT US</h1>
                    <p>E-Coding online course is an online course aimed at unlimited participation and open access via the Web. In addition to traditional course materials, such as filmed lectures, readings, and problem sets, many E-Coding provide interactive courses with user forums or social media discussions to support community interactions among students, professors, and teaching assistants, as well as immediate feedback to quick quizzes and assignments. E-Coding are a widely researched development in distance education, first introduced in 2008, that emerged as a popular mode of learning in 2012</p>
                </div>
                <div className="col md-6">
                    <img src="https://i.postimg.cc/WbZtKc6W/about.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;