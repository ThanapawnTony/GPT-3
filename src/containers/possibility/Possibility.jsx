import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access</h4>
        <h1 className='gradient__text'>Everything is beyond your imagination</h1>
        <p>You can enable or disable GitHub Copilot from within Visual Studio Code. The GitHub Copilot status icon in the bottom panel of the Visual Studio Code window indicates whether GitHub Copilot is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar.</p>
        <h4>Request Early Access</h4>
      </div>
    </div>
  )
}

export default Possibility