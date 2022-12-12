import React from 'react'
import './ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause , faSquare } from '@fortawesome/free-solid-svg-icons'


const ProjectCard = () => {
  return (
    <div className='projectCard'>
        <div className='projectCard-header'>
            <div className='projectCard-info'>
                <p>AMAZON PROJECT</p>
            </div>
            <div className='projectCard-info'>
                <p>TUE, 30 AUG</p>
            </div>
        </div>
        <div className='projectCard-title'>
            Architecture Analysis
        </div>
        <div className='projectCard-flex'>
            <div className='projectCard-flex-buttons'>
                <div className='projectCard-button-1'>
                    <FontAwesomeIcon icon={faPause} size='xl' />
                </div>
                <div className='projectCard-button-2'>
                    <FontAwesomeIcon icon={faSquare} size='lg' />
                </div>
            </div>
            <div className='projectCard-timer'>
                1:38:47
            </div>
        </div>
    </div>
  )
}

export default ProjectCard