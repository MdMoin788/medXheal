import React from 'react'

const Isloading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center h-75 flex-column' style={{ position: "relative", top: "50%" }}>
            <div className='spinner-border mr-15 mb-2 fs-1' role='status'></div>
            <h1 className='fw-bold'>Loading...</h1>
        </div>
    )
}

export default Isloading


