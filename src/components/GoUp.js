import React, { Component } from 'react'

export class goUp extends Component {
    goUpStyle = {
        backgroundColor: "black",
        position: "fixed",
        bottom: "10px",
        right: "10px",
        width: "40px",
        height: "40px",
        fontSize: "25px",
        borderRadius: "100%"
    }

    goOnTop = async () => {
        // Go on top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div onClick={this.goOnTop} className="text-center" style={this.goUpStyle}>
                <div style={{ cursor: "pointer" }}>
                    <span className='text-white'>&uarr;</span>
                </div>
            </div>
        )
    }
}

export default goUp
