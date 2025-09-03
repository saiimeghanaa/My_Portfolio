import React from 'react';
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";

function Contact(){
    return(
        <div className="contact-container">
            <div className="contact-header">
                <h1 className="contact-title">
                Get in <span className="highlight">Touch</span>
                </h1>
                <p className="contact-paragraph">
                Feel free to reach out to me for any project or collaboration opportunities.
                </p>
            </div>

            <div className= "contact-content">
                <div className="contact-details">
                    <h3 className="details-title">Let's talk about your project</h3>
                    <p className="details-paragraph">I'm always open to discussing new opportunities, creative ideas, or partnerships. 
                        Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, 
                        I'd be happy to connect.</p>
                <div className= "contact-box-margin">
                    <div className="contact-box">
                        <LuMail className="contact-icon"/>
                        <div>
                            <p className="box-title">Email</p>
                            <p className="box-info">saiimeghanaa9@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-box">
                        <LuPhone className="contact-icon" />
                        <div>
                            <p className="box-title">Phone</p>
                            <p className="box-info">+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="contact-box">
                        <LuMapPin className="contact-icon" />
                        <div>
                            <p className="box-title">Location</p>
                            <p className="box-info">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
                </div>
            <div className="contact-card">
                <div className= "contact-form">
                    <form>
                        {/* Name and Email row */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input type="text" name="name" placeholder="Your Name" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input type="email" name="email" placeholder="Your Email" required/>
                            </div>
                        </div>
                        {/* Subject */}
                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <input type="text" name="subject" placeholder="Subject" required/>
                        </div>

                        {/* Message */}
                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea name="message" placeholder="Your Message" required></textarea>
                        </div>
                        {/* Button */}
                        <button type="submit">Send Message</button>
                    
                    </form>
                </div>
            </div> 
            </div>

        </div>
    );
}

export default Contact;