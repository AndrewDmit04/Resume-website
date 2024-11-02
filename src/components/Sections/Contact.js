import React, { useState } from 'react';

export default function Contact() {
    const [successMessage, setSuccessMessage] = useState('');
    const [fadeMessage, setFadeMessage] = useState(false);
    const [success,setsuccess] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append("access_key", "aabd80fe-5db6-4d46-8252-5ef0121601f5");
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                setsuccess(true);
                setSuccessMessage('Message submitted successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setsuccess(false);
                setSuccessMessage('Failed to submit the message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccessMessage('Failed to submit the message. Please try again.');
        }

        setFadeMessage(true);
        setTimeout(() => {
            setFadeMessage(false);
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <div className='card m-5 section-card'>
            <div className='card-body'>
                <h2 className='card-title text-primary'>Contact Me</h2>
                <div className='row'>
                    <div className='col-lg-6'>
                        <iframe
                            title="UTD-location"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                aspectRatio: '4 / 3',
                            }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=University+Of+Texas+At+Dallas,Dallas+TX`}>
                        </iframe>
                    </div>
                    <div className='col-lg-6 mt-1'>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="access_key" value="aabd80fe-5db6-4d46-8252-5ef0121601f5" />
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="5"
                                    placeholder="Your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            {successMessage && (
                            <div
                                className={`mt-3 alert ${success ? ' alert-success' : 'alert-danger'}`}
                                style={{ transition: 'opacity 1s', display: fadeMessage ? '' : 'none', zIndex : 10000, position: "fixed", top: "50%", left: "50%" }}
                            >
                                {successMessage}
                            </div>
            )}
        </div>
    );
}
