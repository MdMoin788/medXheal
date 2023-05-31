import React from 'react'
import "../styles/variable.less"
const Button = ({ Title, bgColor, textColor, clickhandler, params }) => {

    return (
        <button className={` rbgColor btn btn-sm btn-${bgColor && bgColor}  text-${textColor ? textColor : "primary"}`} onClick={() => clickhandler(params)} >{Title}</button>
    )
}

export default Button


// Title={null} bgColor={null} textColor={null} clickhandler={null} params={null} 

