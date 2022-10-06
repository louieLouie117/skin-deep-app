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
          
            {/* <li>About Skin Deep</li> */}
            <li>
              
              <a href="https://www.skindeephealthservices.com/">More Health Services</a>
              </li>

              <li>
              <a href="#">Contact Us</a>

            </li>   

              <ul className='ContactIcon-Container'>
                <li> <img src="/img/icons/phoneIcon.png" alt="" /></li>

                <li> 
                  
                    <img src="/img/icons/msgIcon.png" alt="" />
                </li>
                <li> 
                  <a href="mailto:skindeep.jamie@gmail.com?subject=&body=Hello, Jamie">
                    <img src="/img/icons/mailIcon.png" alt="" />
                  </a>
                  
                  </li>

                <li> <img src="/img/icons/instagramIcon.png" alt="" /></li>
                <li> <img src="/img/icons/facebookIcon.png" alt="" /></li>
              </ul>
        </ul>
       

    </div>
  )
}


export default Menu