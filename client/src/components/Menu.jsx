import React from 'react'

const Menu = ({MenuHandler}) => {


  return (
    <div className='MenuContainer'>
        <ul>
            {/* <li>Home</li> */}
            <li onClick={MenuHandler}>Home</li>
            <li>
            <a href="https://calendly.com/redamounir">Book Your Spot Today</a>
              
            </li>
            <li>
            <a href="mailto:skindeep.jamie@gmail.com?subject=&body=Hello, Jamie">Contact Us</a>

            </li>
            {/* <li>About Skin Deep</li> */}
            <li>
              
              <a href="https://black-desert-0dacd3210.2.azurestaticapps.net/">More Health Services</a>
              </li>
        </ul>
    </div>
  )
}


export default Menu