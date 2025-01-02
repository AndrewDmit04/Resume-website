import React from 'react'
import faceMemoji from './profile.gif'
import githubIcon from './images/icons/Github_black.svg'
import linkedInIncon from './images/icons/LinkedIN_black.svg'
import mailIcon from './images/icons/mail.svg'
export default function Profile(){
    return(
        <div className='col-lg-4 col-md-4 col-sm-12 profile-container bg-light'>
            <div className='card '>
                <div className='card-body text-center'>
                    <div className='row'>
                        <img  src={faceMemoji} alt="ProfilePicture" width={2} className="col-lg-12 col-md-12 col-sm-3 col-3 object-fit-contain"/>
                        
                        <div className=' d-flex flex-column justify-content-center align-items-center col-lg-12 col-md-12 col-sm-6 col-6'>
                            <h5  className="card-title col-12">Andrew Dmitrievsky</h5>
                            <p className="text-muted col-12 ">Full Stack Web Developer</p>
                        </div>

                        <div className='d-flex flex-column gap-1  flex-lg-row flex-md-row gap-lg-2 gap-md-2 justify-content-center align-items-center col-lg-12 col-md-12 col-sm-3 col-3'>
                            <a href="https://github.com/AndrewDmit04" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="Home" width={25} height={25}  />
                            </a>
                            <a href="https://www.linkedin.com/in/andrew-dmitrievsky-3a8b6025b/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedInIncon} alt="Home" width={25} height={25} />
                            </a>
                            <a href="mailto:AndrewDmit2021@gmail.com" target="_blank" rel="noopener noreferrer" >
                                <img src={mailIcon} alt="Home" width={25} height={25} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}