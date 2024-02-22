import React from 'react'
import "./TierlistPreview.css";
import Author from '../General/Author';

export default function TierlistPreview({tierlist}) {
  const author = tierlist.author[0];
  console.log(tierlist)

  return (
    <div key={tierlist.name} className='preview-container' style={{
      backgroundImage: `
      linear-gradient(to bottom, rgba(31, 32, 34, 0.8), rgba(31, 32, 34, 0.8)),
      url(${tierlist.back_image})`
    }}>
      <a href={"/view/" + tierlist._id}><h2>{tierlist.name}</h2></a>
      <Author data={author}/>
    </div>
  )
}
