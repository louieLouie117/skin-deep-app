import React from 'react'
import About from '../components/About'
import HeroHeader from '../components/HeroHeader'
import Menu from '../components/Menu'
import NavMenu from '../components/NavMenu'
import PRPServices from '../components/PRPServices'
import LandingPageStyles from '../modules/LandingPageStyles.css'

import { useState } from 'react'





const LandingPage = props => {

  <LandingPageStyles></LandingPageStyles>

  const [mainMenu, setMainMenu] = useState(false);

  const NavHandler = (e) => {
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
          <img src="/img/assets/MenuIcon.png" alt="" onClick={(e)=> NavHandler(e)} />
          <img src="/img/assets/LogoImg.png" alt="" />
        </nav>

        <div style={{ display: mainMenu ? "grid": "none"}}>
          <Menu></Menu>
        </div>

        <HeroHeader></HeroHeader>
        <PRPServices></PRPServices>
        <About></About>

    </div>
  )
}


export default LandingPage