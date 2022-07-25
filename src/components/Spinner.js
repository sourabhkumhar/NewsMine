import React from 'react'

const Spinner = (props) => {
    return (
        <div className="text-center mySpinnerDesign m-2">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner