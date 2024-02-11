import React from 'react'
import './Item.css'

export default function Item({index, id, item, setSelectedCallback}) {

  const setSelected = () => {
    setSelectedCallback(index);
  };

  return (
    <div key={index} id={id} className='item' onClick={setSelected} style={{ backgroundImage: 
    `linear-gradient(to bottom, rgba(31, 32, 34, 0), rgba(31, 32, 34, 1)),
    url(${item.back})`
    }}>
      <p>{item.name}</p>
    </div>
  )
}
