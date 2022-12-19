import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="It is an artificial intelligence that was designed, and created by group of people. It was funded during training phase for over billions of dollars from paypal aprtner and Elon Musk" />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Everything is beyond your imagination</h1>
        <p>Explore The Libary</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Having a bot as your firned on to go is the best option to have." />
        <Feature title="Knowledgebase" text="Knowledgebase is something that the world could not bear to explain or maybe I'm just sleepy to explain it." />
        <Feature title="Education" text="Education is important children, better get smart before that cat reach you." />
      </div>
    </div>
  )
}

export default WhatGPT3