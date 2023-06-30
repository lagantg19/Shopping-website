import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: 'black', padding: '10px' }}>
      <span style={{ marginRight: '10px' }}>
        <Link to="/" style={{ color: 'white', fontSize: '18px', textDecoration: 'none' }}>Shop</Link>
      </span>
      <span>
        <Link to="/Cart" style={{ color: 'white', fontSize: '18px', textDecoration: 'none' }}>🛒</Link>
      </span>
    </div>
  )
}

export default Navbar
