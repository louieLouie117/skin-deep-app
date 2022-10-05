import React from 'react'

const Menu = ({MenuHandler}) => {


  return (
    <div className='MenuContainer'>
        <ul>
            {/* <li>Home</li> */}
            <li onClick={MenuHandler}>Home</li>
            <li>
            <a href="https://calendly.com/skindeep-jamie/30min?month=2022-10">Book Your Spot Today</a>
              
            </li>
            <li>
            <a href="mailto:skindeep.jamie@gmail.com?subject=&body=Hello, Jamie">Contact Us</a>

            </li>
            {/* <li>About Skin Deep</li> */}
            <li>
              
              <a href="https://www.skindeephealthservices.com/">More Health Services</a>
              </li>
        </ul>
    </div>
  )
}


export default Menu