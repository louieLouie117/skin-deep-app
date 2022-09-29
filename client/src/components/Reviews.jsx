import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



const Reviews = props => {

  const quotesIcon = <FontAwesomeIcon icon={faQuoteRight} />

  
  return (
    <div className='ReviewsContainer'>
      <h1>What Skin Deep clients are saying..</h1>
      <ul className='ImgFexGallery'>

      <li>
          <h1>{quotesIcon}</h1>
          <p>"Had a fantastic visit with Jamie and got my prp on! Can’t wait to see results!! I’m also going to get the “o” shot! Life is good y’all- treat yourself good!!!"</p>
          <h2>- Sonja H</h2>
        </li>

        <li>
        <h1>{quotesIcon}</h1>

          <p>"Today I received the O-shot!! Super excited to reap the benefits! Jamie was gentle and attentive to my needs and comfort. She explained everything in detail what she was doing and it was painless. Ladies this a game changer."</p>
          <h2>- Karrie M.</h2>
        </li>

    
        <li>
        <h1>{quotesIcon}</h1>
          <p>"I got the o shot yesterday and Jamie made me super comfortable. She is very knowledgeable and explains everything in detail. She is also invested in your results and wants to make sure you have the best results possible!"</p>
          <h2>- Michelle R</h2>
        </li>
      </ul>


    </div>
  )
}


export default Reviews