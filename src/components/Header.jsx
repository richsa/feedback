import PropTypes from 'prop-types';
import React from 'react'
function Header({text, bgColor,textColor, aligment }) {
    const headerStyles ={
        backgroundColor : bgColor,
        color: textColor,
        textAlign :aligment
    }
  return (
    <header style={headerStyles}>
        <div className="className">
            <h2> {text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps ={
    text : 'feedback UI',
    bgColor : 'rgba(0,0,0,0.4)',
    textColor : '#ff66a95',
    aligment : 'center'
    

}

Header.propTypes ={
    text : PropTypes.string,
    bgColor : PropTypes.string,
    textColor : PropTypes.string,
}

export default Header