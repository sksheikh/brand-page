import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="brand-logo" />
        </div>

        <ul>
          <li>Menu</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <button>Login</button>
        
      </nav>
    </>
  )
}
