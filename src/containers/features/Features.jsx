import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrust instantly',
    text: 'It is an artificial intelligence that was designed, and created by group of people. It was funded during training phase for over billions of dollars from paypal aprtner and Elon Musk'
  },
  {
    title: 'Become the addictive',
    text: 'It is an artificial intelligence that was designed, and created by group of people. It was funded during training phase for over billions of dollars from paypal aprtner and Elon Musk'
  },
  {
    title: 'Message or am nothing',
    text: 'It is an artificial intelligence that was designed, and created by group of people. It was funded during training phase for over billions of dollars from paypal aprtner and Elon Musk'
  },
  {
    title: 'Nice AI assistant',
    text: 'It is an artificial intelligence that was designed, and created by group of people. It was funded during training phase for over billions of dollars from paypal aprtner and Elon Musk'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features" >
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize it. Make it Happen Today.</h1>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features