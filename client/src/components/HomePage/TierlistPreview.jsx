import React from 'react'

export default function TierlistPreview({tierlist}) {
  return (
    <div key={tierlist.name}>
      <a href={"/view/" + tierlist._id}>{tierlist.name}</a>
    </div>
  )
}
