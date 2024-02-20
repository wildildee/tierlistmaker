import React from 'react'
import "./TierlistPreview.css";

export default function TierlistPreview({tierlist}) {
  return (
    <div key={tierlist.name} className='preview-container' style={{
      backgroundImage: `
      linear-gradient(to bottom, rgba(31, 32, 34, 0.8), rgba(31, 32, 34, 0.8)),
      url(${tierlist.back_image})`
    }}>
      <a href={"/view/" + tierlist._id}><h2>{tierlist.name}</h2></a>
      <a href="/">{tierlist.author}</a>
    </div>
  )
}
