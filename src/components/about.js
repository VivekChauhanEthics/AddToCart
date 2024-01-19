import React from 'react';
import Header from './Header';

function About () {
  return (
    <div>
        <Header />
        <h1 className='text-center mt-3'>About Component</h1>
        <h1 className='text-center mt-5'>
        <img src='https://logos.flamingtext.com/Word-Logos/working-design-sketch-name.png' alt='...' className='img-fluid' />
        </h1>
    </div>
  );
};

export default About;
