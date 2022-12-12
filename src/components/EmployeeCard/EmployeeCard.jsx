import React from 'react'
import './employeeCard.css'
import profilePic from '../../profilePic.jfif';

const EmployeeCard = () => {
  return (
    <div className='employeeCard'>
        <div className='employeeCard-profile'>
            <div className='employeeCard-info'>
                EMPLOYEE
            </div>
            <div className='employeeCard-flex'>
                <div className='employeeCard-title'>
                    Leonard Lauren
                </div>
                <div className='employee-stat'>
                    <div className='employeeCard-stat-title'>
                        <div className='employeeCard-info'>
                            TOTAL
                        </div>
                        <div className='employeeCard-info'>
                            48:00
                        </div>
                    </div>
                    <div className='employeeCard-stat-info'>
                        <div className='employeeCard-title'>
                            Billable
                        </div>
                        <div className='employeeCard-title'>
                            42:00
                        </div>
                        <div className='employeeCard-ammount'>   
                            3,150 USD
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='employeeCard-pic'>
            <img src={profilePic} alt="" />
        </div>
    </div>
  )
}

export default EmployeeCard