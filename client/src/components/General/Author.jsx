import React from 'react'
import './Author.css'

export default function Author({data}) {
  return (
    <a className='author-container' href={"/profile/" + data._id}>
        <img src={data.avatar} alt='avatar'/>
        <p>{data.name}</p>
    </a>
  )
}
