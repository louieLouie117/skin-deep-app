import React from 'react'

const About = props => {
  return (
    <div className='AboutUs-Container'>
  
      <main>
        

          <picture>
            <img src="/img/assets/JamieProfileImg.png" alt="" />
          </picture>

        <section>

          <h1>Meet Jamie Grabowski, MSN, ARNP, CN</h1>
          <p>Jamie has 13 years experience working in the medical field. She is passionate about Womens health and spent the majority of her career delivering babies and tending to mothers and infants. Jamie is a holistic provider which led to her training in PRP.</p>

          <button>Contact Me</button>

        </section>

        <section>
          <h2>Education and Certifications</h2>

          <ul>
            <li>Masters of Science in Nursing, MSN</li>
            <li>Advanced Registered Nurse Practitioner, ARNP</li>
            <li>Certified Nurse Midwife, CNM</li>
            <li>Certified Cosmetic Injector- specializing in PRP (Platelet Rich Plasma) for</li>
            <li>aesthetics, women's health and sexual health.</li>
          </ul>

        </section>
        
      </main>

      
    </div>
  )
}


export default About