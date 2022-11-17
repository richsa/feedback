import PropTypes from "prop-types"
import React from 'react'
function Card({children,reverse}) {
    // condtional class
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
//   )
// using a conditional style 
    return(
        // usiong a condition to control 
        <div className="card" style={{backgroundColor : reverse  ? 'rgba(0,0,0,0.4)' :'#fff',
        color : reverse ? '#fff' : '#000',
        }}> 
        {children}
        </div>
    )
}

Card.defaultProps ={
    reverse : false,
}
Card.propTypes = {
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool.isRequired,
}


export default Card