import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, className }) => {
    return (
        <button
            data-testid='button'
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
}
