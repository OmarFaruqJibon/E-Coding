import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <div className="contact-container row">
                <div className="col-md-6">
                    <h1 className="contact-title">Contact Us</h1>
                    <div className="form">
                        <p>Name: </p>
                        <input type="text" placeholder="Enter name" />
                        <p>Email: </p>
                        <input type="email" placeholder="Enter name" />
                        <p>Tell something: </p>
                        <textarea name="" cols="60" rows="5"></textarea>
                        <br />
                        <button className="submit-btn">Submit</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="https://i.postimg.cc/VvpKsGgR/contact.jpg" alt="" />

                </div>
            </div>
        </div>
    );
};

export default ContactUs;