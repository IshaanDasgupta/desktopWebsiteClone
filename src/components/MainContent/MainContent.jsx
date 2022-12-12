import React from 'react'
import './mainContent.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import BlackButton from '../Buttons/BlackButton'
import PinkButton from '../Buttons/PinkButton'
import companyLogo from '../../companyLogo.png';
import DesignCard from '../DesignCard/DesignCard'
import Features from '../Features/Features'

const MainContent = () => {
    return (
        <div className='main-content'>
            <div className='main-flex'>
                <div className='headline'>
                    <h1 className='main-text'>Keep your business organized in just one application</h1>
                    <p className='description'>Bill with downloadable statics, measure profitability, manage team workloads, manage budgets and track performance</p>
                </div>
                <div className='side-cards'>
                    <ProjectCard/>
                    <EmployeeCard/>
                </div>
            </div>
            <div className='secondary-flex'>
                <div className='secondary-flex-component'>
                    <div className='button-flex'>
                        <BlackButton/>
                        <PinkButton/>
                    </div>
                    <div className='association-headline'>Trusted by the greatest</div>
                    <div className='association-flex'>
                        <div className='association-container'>
                            <img src={companyLogo} alt="" className='association'/>
                        </div>
                        <div className='association-container'>
                            <img src={companyLogo} alt="" className='association'/>
                        </div>
                        <div className='association-container'>
                            <img src={companyLogo} alt="" className='association'/>
                        </div>
                        <div className='association-container'>
                            <img src={companyLogo} alt="" className='association'/>
                        </div>
                    </div>
                    <div className='association-flex'>
                        <div className='association-container'>
                            <img src={companyLogo} alt="" className='association'/>
                        </div>
                        <div className='association-container'>
                            <img src={companyLogo} alt="" className='association'/>
                        </div>
                        <div className='association-container'>
                            <img src={companyLogo} alt="" className='association'/>
                        </div>
                        <div className='association-container'>
                            <img src={companyLogo} alt="" className='association'/>
                        </div>
                    </div>
                </div>
                <div className='secondary-flex-component'>
                    <DesignCard/>
                </div>
            </div>
            <Features/>
        </div>
    )
}

export default MainContent