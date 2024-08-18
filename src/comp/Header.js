import React from 'react'

function Header() {
  return (
    <div className='w-100 position-relative'>
      <img className='w-100' src='https://www.w3schools.com/w3images/hamburger.jpg' />
      <p className='position-absolute left-0 ms-4 fs-3 ' style={{color:'grey',bottom:'50px'}}>Le Catering</p>
    </div>
  )
}

export default Header
