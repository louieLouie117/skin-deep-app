import React from 'react'
import About from '../components/About'
// import PRPHeader from '../components/PRPHeader'
import Menu from '../components/Menu'
// import NavMenu from '../components/NavMenu'
import PRPServices from '../components/PRPServices'
import LandingPageStyles from '../modules/LandingPageStyles.css'

import { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import Promotion from '../components/Promotion'




const LandingPage = props => {

  <LandingPageStyles></LandingPageStyles>

  const [mainMenu, setMainMenu] = useState(false);
  // const [menuText, setMenuText] = useState(false);


  const MenuHandler = (e) => {
    console.log("Nav Handler was called",e)
    if(mainMenu === false){
      setMainMenu(true)
      return
    }
    if(mainMenu === true){
      setMainMenu(false)

    }

  }


  return (
    <div className='LandingPageContainer'>

        {/* <NavMenu></NavMenu> */}

        <nav className='MainNavMenu'>
          <img src="/img/assets/MenuIcon.png" alt="" onClick={(e)=> MenuHandler(e)} />
          <img src="/img/assets/LogoImg.png" alt="" />
        </nav>

        <div style={{ display: mainMenu ? "grid": "none"}}>
          <Menu MenuHandler={MenuHandler}></Menu>
        </div>

        <HeroBanner></HeroBanner>

        <PRPServices></PRPServices>
        {/* <PRPHeader></PRPHeader> */}
        <Promotion></Promotion>

        <Reviews></Reviews>
        <About MenuHandler={MenuHandler}></About>

        <Footer></Footer>
    </div>
  )
}


export default LandingPage