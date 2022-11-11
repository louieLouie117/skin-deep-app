import React from 'react'



const Menu = ({ MenuHandler }) => {



  return (
    <div className='MenuContainer'>
      <ul>
        {/* <li>Home</li> */}
        <li onClick={MenuHandler}>Home</li>


        {/* <li>About Skin Deep</li> */}
        <li>

          <a href="https://www.skindeephealthservices.com/">More Health Services
          </a>
        </li>

        <li>
          <img src="/img/icons/calenderIcon.png" alt="" />
          <a href="https://www.appointfix.com/book/e4b84df7e04f">Book Your Spot Today</a>

        </li>
      </ul>

      <aside>
        <ul>
          <li>
            <h2>Address</h2>
            <p>366 East Graves Ave Suite C, Orange City Florida 32763</p>

            <a href="http://maps.google.com/?q=366 East Graves Ave Suite C, Orange City Florida 32763" target="blank"><button>Directions</button></a>
          </li>
        </ul>
      </aside>

      <footer>
        <h2>
          <h2>Contact/Connect with us</h2>

        </h2>
        <ul className='ContactIcon-Container'>

          <li>
            <a href="tel:419-463-0759">
              <img src="/img/icons/phoneIcon.png" alt="" />
            </a>
            <h2 className='hideInMobile'>Call 419-463-0759</h2>
          </li>


          <li>
            <a href="sms: 419-463-0759?body=Hello, Jamie">
              <img src="/img/icons/msgIcon.png" alt="" />
            </a>
            <h2 className='hideInMobile'>Text 419-463-0759</h2>

          </li>
          <li>
            <a href="mailto:skindeep.jamie@gmail.com?subject=&body=Hello, ">
              <img src="/img/icons/mailIcon.png" alt="" />
            </a>
            <h2 className='hideInMobile'>Email:skindeep.jamie@gmail.com</h2>
          </li>

          <li>
            <a href="https://www.instagram.com/skindeep.llc/">
              <img src="/img/icons/instagramIcon.png" alt="" />
            </a>
            <h2 className='hideInMobile'>Instagram</h2>

          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100083565360947">
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