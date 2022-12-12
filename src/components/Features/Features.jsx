import React from 'react';
import './features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
  return (
    <div className='features'>
        <div className='overflow-div'>
            <div className='features-block'>
                <div className='features-greenCard'>
                    <div>
                        Five more tasks
                    </div> 
                    <div className='feature-plus'>
                        <FontAwesomeIcon icon={faPlus} className="feature-plus-icon" size='xs'/>
                    </div>
                </div>
            </div>

            <div className='features-block'>
                <div className='features-blueCard'>
                    <div>
                        Design System
                    </div> 
                    <div className='feature-dot'></div>
                </div>
            </div>
            <div className='features-block'>
                <div className='features-pinkCard'>
                    <div>
                        Platfrom Structure
                    </div> 
                    <div className='feature-dot'></div>
                </div>
            </div>

            <div className='features-block'>
                <div className='features-card'>
                    <div>
                        Update BE-1 Userflow
                    </div> 
                    <div className='feature-dot'></div>
                </div>
            </div>
            <div className='features-block'>
                <div className='features-card'>
                    <div>
                        Create AM-5 Wireless
                    </div> 
                    <div className='feature-dot'></div>
                </div>
            </div>
            <div className='features-block'>
                <div className='features-card'>
                    <div>
                        Critical Analysis
                    </div> 
                    <div className='feature-dot'></div>
                </div>
            </div>  
            <div className='features-block'>
                <div className='features-card'>
                    <div>
                        Critical Analysis
                    </div> 
                    <div className='feature-dot'></div>
                </div>
            </div> 
            <div className='features-block'>
                <div className='features-card'>
                    <div>
                        Critical Analysis
                    </div> 
                    <div className='feature-dot'></div>
                </div>
            </div> 
            <div className='features-block'>
                <div className='features-card'>
                    <div>
                        Critical Analysis
                    </div> 
                    <div className='feature-dot'></div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Features