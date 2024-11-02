import React from 'react'

export default function Contact(){
    return(
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
                            aspectRatio: '4 / 3', // Optional: Ensures a responsive aspect ratio
                            }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                                &q=University+Of+Texas+At+Dallas,Dallas+TX`}>
                        </iframe>
                    </div>
                    <div className='col-lg-6'>
                    <form>
                        <div className ="mb-3">
                            <label htmlFor="name" className = "form-label">Name</label>
                            <input type="text" className = "form-control" id="name" placeholder="Enter your name"/>
                        </div>
                        <div className = "mb-3">
                            <label htmlFor="email" className = "form-label">Email</label>
                            <input type="email" className = "form-control" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className = "form-label">Message</label>
                            <textarea className = "form-control" id="message" rows="5" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" className = "btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}