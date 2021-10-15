import React from 'react';
import './Course.css';

const Course = (props) => {
    const {courseTitle, courseThumb, courseDuration, instructorName, price , rating}=props.cors;
    
    return (
        <div className="col-md-3 col-6 mt-5">
            <div className="cart">
                <div className="thumb">
                    <img src={courseThumb} alt="" />
                </div>
                <div className="cart-detail">
                    <p className="course-item-heading"><small>COURSE</small></p>
                    <h5>{courseTitle}</h5>
                    <p><small>By : {instructorName}</small></p>
                    <p><small>Rating : {rating}<i className=" rating fas fa-star"></i></small></p>
                    <div className="d-flex justify-content-between">
                        <p><small>Duration : {courseDuration}</small></p>
                        <p className="price"><small>$ {price}</small></p>
                    </div>
                   <div className="text-center">
                    <button className="detail-btn">Learn More</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Course;