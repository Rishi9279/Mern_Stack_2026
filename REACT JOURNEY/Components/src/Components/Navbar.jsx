import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className="logo">Rishi</div>
            <ul className='navlinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar