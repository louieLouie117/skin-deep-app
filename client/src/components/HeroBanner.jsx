import React from 'react'

const HeroBanner = props => {
  return (
    <div className='HeroBanner'>
         <picture>
            <source media='(min-width: 1100px)' srcset="/img/assets/HeroBannerDesktop.png"/>
            <img src="/img/assets/HeroImgMobile.png" alt="" />
        </picture>
      <header>
        <h1>Skin Deep is a <i>med spa</i> specializing in <i>PRP.</i></h1>
        <button>Book Your Spot Now!</button>
      </header>

    </div>
  )
}


export default HeroBanner