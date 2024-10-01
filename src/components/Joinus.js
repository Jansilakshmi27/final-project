import React, { useState } from 'react';
import './Joinus.css';

const JoinUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission
        console.log('Form submitted:', formData);
        // You can integrate with your backend here (e.g., send data to MongoDB)
    };

    return (
        <div className="join-us">
            <h1>Join Our Mission at [Altruserve]</h1>
            <p>
                At [Altruserve], we're committed to creating sustainable change in our community. Whether it's through volunteering, donating, or partnering with us, your contribution matters.
            </p>
            <p>
                Join us and be part of a team that is making a real difference. By filling out the form below, you can indicate how you'd like to get involved. We appreciate your willingness to support our cause!
            </p>

            <h2>Ways to Get Involved</h2>
            <ul>
                <li><strong>Volunteer:</strong> Share your time and expertise in various projects and initiatives.</li>
                <li><strong>Donor:</strong> Help us fund essential services and community programs.</li>
                <li><strong>Partner:</strong> Collaborate with us through your organization to create broader impact.</li>
            </ul>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                    />
                </div>
                <div>
                    <label htmlFor="role">How would you like to contribute?</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Volunteer, Donor, Partner"
                    />
                </div>
                <div>
                    <label htmlFor="message">Why would you like to join us?</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your motivation"
                    />
                </div>
                <button type="submit">Join Us</button>
            </form>
        </div>
    );
};

export default JoinUs;
