import React from 'react';

import '../css/About.css';

function About() {
  return (
    <div className='component'>
      <article>
        <div className='portrait-here'></div>
        <div className='details'>
          <h2>Hey! I'm Yelle.</h2>
        </div>

        <p>
          I'm a software engineer based in Brooklyn & this is my art portfolio.
        </p>
        <p>
          Each piece of art is paired with a song that matches the mood I was in during the creation process.
          I hope you like both what you see & what you hear!
        </p>

      </article>
    </div>
  )
}

export default About;
