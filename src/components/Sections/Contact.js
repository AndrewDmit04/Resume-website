import React from 'react'

export default function Contact(){
    return(
        <div className='card m-5 section-card'>
            <div className='card-body'>
                <h2 className='card-title text-primary'>Contact Me</h2>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1>Google map</h1>
                    </div>
                    <div className='col-lg-6'>
                        <form>  
                            <p className='m-0'>Name</p>
                            <input placeholder='Name' type='text'/>
                            
                            <p className='m-0 mt-1'>Email</p>
                            <input title="Email" placeholder='Email' type="email"/>

                            <p className='m-0 mt-1'>Message</p>
                            <textarea type="text" placeholder='Message'/>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}