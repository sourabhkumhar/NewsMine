import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center mySpinnerDesign">
                <div className="spinner-border" style={{fontSize: "100px", width: "100px", height: "100px"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner