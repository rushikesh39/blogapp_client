import React from 'react';
import Logo from '../Logo';
import './dynamic.style.css';
import person from './person.png'

function Nav() {
  return (
    <>
    <div className='dynamic-nav'>
      <Logo/>
      <button id='get-started' type='button'>Get Started</button>
      
    </div>
   
    <div className='sub-container'>
        <p>5 Ways to animate a React app.</p>
        <div className='person'> 
          <img src={person} alt='image not found' id='person'/>
        </div>
      </div>
    </>
    
    
    
  )
}

export default Nav
