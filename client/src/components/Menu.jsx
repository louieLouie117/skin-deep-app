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

             

           
        </ul>

        <footer>
          <h2>
              <a href="#">Contact/Connect with us</a>

          </h2>
        <ul className='ContactIcon-Container'>
          
                <li> 
                  <a href="">
                  <img src="/img/icons/phoneIcon.png" alt="" />
                  </a>
                  <h2 className='hideInMobile'>Call 419-463-0759</h2>
                  
                  </li>


                <li> 
                  <a href="">
                    <img src="/img/icons/msgIcon.png" alt="" />
                    </a>
                  <h2 className='hideInMobile'>Text 419-463-0759</h2>

                </li>
                <li> 
                  <a href="mailto:skindeep.jamie@gmail.com?subject=&body=Hello, Jamie">
                    <img src="/img/icons/mailIcon.png" alt="" />
                  </a>
                  <h2 className='hideInMobile'>Email: jamie@gmail.com</h2>
                  </li>

                <li> 
                  <a href="">
                  <img src="/img/icons/instagramIcon.png" alt="" />
                  </a>
                  <h2 className='hideInMobile'>Instagram</h2>

                  </li>
                <li> 
                  <a href="">
                  <img src="/img/icons/facebookIcon.png" alt="" />
                  </a>

                  <h2 className='hideInMobile'>Facebook</h2>

                  </li>

              </ul>
        </footer>
       

    </div>
  )
}


export default Menu