import React from 'react'
import "../styles/Button.css"

const Button = ({children}) => {
  return (
    <button className="common-button">
      {children}
    </button>
  )
}

export default Button;