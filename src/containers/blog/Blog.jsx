import React from 'react'
import './blog.css';
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot has happened, check out our blog.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Jan 22, 2022" title="GPT3 is the future, get one now before too late"  />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Jan 22, 2022" title="GPT3 is the future, get one now before too late" />
          <Article imgUrl={blog03} date="Jan 22, 2022" title="GPT3 is the future, get one now before too late"  />
          <Article imgUrl={blog04} date="Jan 22, 2022" title="GPT3 is the future, get one now before too late"  />
          <Article imgUrl={blog05} date="Jan 22, 2022" title="GPT3 is the future, get one now before too late"  />
        </div>
      </div>
    </div>
  )
}

export default Blog