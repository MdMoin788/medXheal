import React from 'react'
import "./styles/Card.less"

const Card1 = () => {
    return (
         <div className='p-1 dailyDashboardCard'>
            <div className={`card custom-card1`} key={1}>
                <div className="d-flex justify-content-between">
                    <div className="">
                        <div className="card-body">
                            <p className="card-subtitle mb-2 card-subtitle-custom ">Total Patient</p>
                            <h1 className="card-title card-title-custom">{25733}</h1>
                        </div>
                    </div>
                    <div className="d-flex align-items-center icon-custom">
                        <i className={"fs-2  fa-solid fa-stethoscope"}></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card1
