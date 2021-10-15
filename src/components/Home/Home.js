import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[]);

    // slice courses array to 4 elements
    const fourCourses = courses.slice(0, 4);
    return (
        <div>
            <h1 className="coutses-title">Our Courses</h1>
            <div className="row g-4 m-5 mt-0">
            {
                fourCourses.map((course=> 
                    <div key={course.key} className="col-md-3 col-6 mt-5">
                    <div className="cart">
                        <div className="thumb">
                            <img src={course.courseThumb} alt="" />
                        </div>
                        <div className="cart-detail">
                            <p className="course-item-heading"><small>COURSE</small></p>
                            <h5>{course.courseTitle}</h5>
                            <p><small>By : {course.instructorName}</small></p>
                            <p><small>Rating : {course.rating}<i className="rating fas fa-star"></i></small></p>
                            <div className="d-flex justify-content-between">
                                <p><small>Duration : {course.courseDuration}</small></p>
                                <p className="price"><small>$ {course.price}</small></p>
                            </div>
                           <div className="text-center">
                            <button className="btn detail-btn">Learn More</button>
                           </div>
                            
                        </div>
                    </div>
                </div>
                    ))}
        </div>
        </div>
    );
};

export default Home;