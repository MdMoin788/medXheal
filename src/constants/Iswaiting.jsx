import React from 'react'

const Iswaiting = () => {
    return (
        <button className="btn btn-primary rounded" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm me-2 text-white" role="status" aria-hidden="true"></span>
                <span className="spinner-grow spinner-grow-sm me-2 text-white" role="status" aria-hidden="true"></span>
                <span className="spinner-grow spinner-grow-sm me-2 text-warning" role="status" aria-hidden="true"></span>
                <span className="spinner-grow spinner-grow-sm me-2 text-white" role="status" aria-hidden="true"></span>
                <span className="spinner-grow spinner-grow-sm me-2 text-white" role="status" aria-hidden="true"></span>
        </button>
    )
}


export default Iswaiting
