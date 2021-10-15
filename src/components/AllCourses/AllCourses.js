import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './AllCourses.css';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[]);

    return (
        <div>
            <h1 className="coutses-title">Our Courses</h1>
            <div className="row g-4 m-5 mt-0">
                {
                    courses.map((course=><Course
                        key={course.key}
                        cors={course}>
                        </Course>))
                }
            </div>
        </div>
    );
};

export default AllCourses;