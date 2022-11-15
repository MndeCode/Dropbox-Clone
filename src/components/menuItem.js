import React from 'react'

const MenuItem = ({ title, subtitle }) => {
  return (
    <a href="/" className="menuItem">
        <span className="menu__item-icon"></span>
        <div>
            <h4>{ title }</h4>
            <p>{ subtitle }</p>
        </div>
    </a>
  )
}

export default MenuItem