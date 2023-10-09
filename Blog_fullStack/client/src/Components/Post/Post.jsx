import React from 'react'

import "./Post.css"

const Post = () => {
  return (
    <div className="post">
          <div className="image">
            <img src='https://source.unsplash.com/random/900x700/?blog' alt=''/>
          </div>
          <div className="content">

            <h2>Full house battery backup coming later this year</h2>
            <p className='info'>
              <a className='author'>Dawid Paszko</a>
              <time>2023-01-26 16:45</time>
            </p>
            <p className='summary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium maxime consectetur recusandae dolores adipisci. Cum deleniti aspernatur numquam necessitatibus hic repellendus quo reprehenderit dolorum qui.</p>
        </div>
    </div>
  )
}

export default Post