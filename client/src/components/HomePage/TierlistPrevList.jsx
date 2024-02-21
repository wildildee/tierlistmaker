import React from 'react'
import TierlistPreview from './TierlistPreview'
import "./TierlistPrevList.css";
import { useSearchParams } from 'react-router-dom';

export default function TierlistPrevList({tierlists, page, maxpage}) {
  const [searchParams, setSearchParams] = useSearchParams({});

  const pageUpdate = (newPage) => {
    if(newPage <= 0 || newPage > maxpage) {
      return;
    }
    setSearchParams({page: newPage});
  };

  return (
    <div className='prev-container'>
      <div key='top' className='pagebar'>
        <a key='back2' className= {page - 2 > 0 ? '' : 'unavailible'} onClick={() => {pageUpdate(page - 2)}}>{"<<"}</a>
        <a key='back1' className= {page - 1 > 0 ? '' : 'unavailible'} onClick={() => {pageUpdate(page - 1)}}>{"<"}</a>
        <input type='number' onChange={(e) => {pageUpdate(e.target.value)}} value={page}></input>
        <a key='forw1' className= {page + 1 <= maxpage ? '' : 'unavailible'} onClick={() => {pageUpdate(page + 1)}}>{">"}</a>
        <a key='forw2' className= {page + 2 <= maxpage ? '' : 'unavailible'} onClick={() => {pageUpdate(page + 2)}}>{">>"}</a>
      </div>
      <div className='preview-list'>
        {tierlists.map(tierlist => 
          <TierlistPreview key={tierlist.name} tierlist={tierlist} />
        )}
      </div>
      <div key='bottom' className='pagebar'>
        <a key='back2' className= {page - 2 > 0 ? '' : 'unavailible'} onClick={() => {pageUpdate(page - 2)}}>{"<<"}</a>
        <a key='back1' className= {page - 1 > 0 ? '' : 'unavailible'} onClick={() => {pageUpdate(page - 1)}}>{"<"}</a>
        <input type='number' onChange={(e) => {pageUpdate(e.target.value)}} value={page}></input>
        <a key='forw1' className= {page + 1 <= maxpage ? '' : 'unavailible'} onClick={() => {pageUpdate(page + 1)}}>{">"}</a>
        <a key='forw2' className= {page + 2 <= maxpage ? '' : 'unavailible'} onClick={() => {pageUpdate(page + 2)}}>{">>"}</a>
      </div>
    </div>
  )
}
