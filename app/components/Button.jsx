import React from 'react'

const Button = ({children, styles, handleClick}) => {
  return (
    <button onClick={handleClick} className={styles}>{children}</button>
  )
}; export default Button;
