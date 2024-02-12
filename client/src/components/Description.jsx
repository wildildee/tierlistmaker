import React from 'react'
import ReactPlayer from 'react-player'
import Markdown from 'react-markdown'
import './Description.css'

export default function Description({item}) {
  if(item == null) {
    return (
      <div className='tierlist-items-desc'>

      </div>
    );
  }
  return (
    <div className='tierlist-items-desc' style={{ backgroundImage: 
      `linear-gradient(to bottom, rgba(31, 32, 34, 0.8), rgba(31, 32, 34, 0.8)),
      url(${item.back})`
      }}>
      <h2>{item.name}</h2>
      <ReactPlayer className='tierlist-video' url={item.video} controls={true}/>
      <Markdown components={{ a: (props) => <a href={props.href} target='_blank'>{props.children}</a>}}>{item.comment}</Markdown>
    </div>
  );
}
