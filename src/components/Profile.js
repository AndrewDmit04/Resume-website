import React from 'react'
import faceMemoji from './profile.gif'
import githubIcon from './images/icons/Github_black.svg'
import linkedInIncon from './images/icons/LinkedIN_black.svg'
import mailIcon from './images/icons/mail.svg'
export default function Profile(){
    return(
        <div className='col-lg-4  profile-container bg-light'>
            <div className='card w-100'>
                <div className='card-body text-center'>
                    <img src={faceMemoji} alt="ProfilePicture" class="rounded-circle mb-3 w-100"/>
                    <h5 class="card-title">Andrew Dmitrievsky</h5>
                    <p class="text-muted">Web Developer</p>
                    <div className='d-flex justify-content-center gap-2'>
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
    )
}