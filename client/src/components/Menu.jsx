import React from 'react'

const Menu = ({MenuHandler}) => {


  return (
    <div className='MenuContainer'>
        <ul>
            {/* <li>Home</li> */}
            <li onClick={MenuHandler}>Home</li>
            <li>Book Your Spot</li>
            <li>Contact Us</li>
            {/* <li>About Skin Deep</li> */}
            <li>More Health Services</li>
        </ul>
    </div>
  )
}


export default Menu