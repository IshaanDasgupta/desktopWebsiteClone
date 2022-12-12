import React from 'react'
import './designCard.css';
import profilePic from '../../profilePic.jfif';

const DesignCard = () => {
  return (
    <>
    <div className='designCard'>
        <div className='designCard-content'>
            <div className='designCard-title-flex'>
                <div className='designCard-title-pink'>
                    Design
                </div>
                <div className='designCard-title-gray'>
                    3 tasks
                </div>
            </div>
            <div className='designCard-design-flex'>
                <div className='designCard-design'>
                    <div className='designCard-design-front'>
                        <div className='dot'/>
                        <div className='designCard-design-title'>
                            Design System
                        </div>
                    </div>
                    <div className='designCard-design-back'>
                        <div className='designCard-design-time'>
                            27.40.12
                        </div>
                        <div className='designCard-design-pic'>
                            <img src={profilePic} alt="" className='designCard-design-img-primary'/>
                            <img src={profilePic} alt="" className='designCard-design-img'/>
                        </div>
                    </div>
                </div>
                <div className='line'/>
                <div className='designCard-design'>
                    <div className='designCard-design-front'>
                        <div className='dot'/>
                        <div className='designCard-design-title'>
                            Platfrom Structure
                        </div>
                    </div>
                    <div className='designCard-design-back'>
                        <div className='designCard-design-time'>
                            34.28.35
                        </div>
                        <div className='designCard-design-pic'>
                            <img src={profilePic} alt="" className='designCard-design-img-primary'/>
                            <img src={profilePic} alt="" className='designCard-design-img'/>
                        </div>
                    </div>
                </div>
                <div className='line'/>
                <div className='designCard-design'>
                    <div className='designCard-design-front'>
                        <div className='dot'/>
                        <div className='designCard-design-title'>
                            Design Review
                        </div>
                    </div>
                    <div className='designCard-design-back'>
                        <div className='designCard-design-time'>
                            19.35.54
                        </div>
                        <div className='designCard-design-pic'>
                            <img src={profilePic} alt="" className='designCard-design-img-primary'/>
                            <img src={profilePic} alt="" className='designCard-design-img'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className='hiddenCard'>
        <div className='designCard-content'>
            <div className='designCard-title-flex'>
                <div className='hidden-title-green'>
                    Front end
                </div>
            </div>
            <div className='designCard-design-flex'>
                <div className='designCard-design-front'>
                    <div className='hidden-dot'/>
                    <div className='hidden-design-title'>
                        Update Component
                    </div>
                </div>

                <div className='hidden-line'/>

                <div className='designCard-design-front'>
                    <div className='hidden-dot'/>
                    <div className='hidden-design-title'>
                        Platfrom Logic Flow
                    </div>
                </div>

                <div className='hidden-line'/>

                <div className='designCard-design-front'>
                    <div className='hidden-dot'/>
                    <div className='hidden-design-title'>
                        Micro Interactions
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DesignCard