import React from 'react';

const ThemeButton = ({ children, ...others }) => {
  const [buttonClass, setButtonClass] = React.useState("btn btn-dark");

  return (
    <button
      className={`${buttonClass}`}
      onMouseOver={() => setButtonClass("btn btn-light")}
      onMouseLeave={() => setButtonClass("btn btn-dark")}
      {...others} >
        {children}
    </button>
  )
}

export default ThemeButton