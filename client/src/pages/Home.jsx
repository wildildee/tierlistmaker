import React, { useEffect, useState } from 'react'
import "./Home.css";
import TierlistPrevList from '../components/HomePage/TierlistPrevList';
import { useSearchParams } from 'react-router-dom';

export default function Home({backend}) {
  let [tierlists, setTierlists] = useState([]);

  const page = 1;
  const maxpage = undefined;

  // Use backend to retirieve our data
  const loadTierlist = async () => {
    let url = new URL(backend + "/api/tierlist/latest");
    url.searchParams.append("page", page);
    
    let result = await fetch(url).then(resp => resp.json());
    setTierlists([...result.results]);
  }

  useEffect(() => {
    loadTierlist();
  }, []);

  return (
    <div className='latest-container show'>
      <h2>Latest</h2>
      <TierlistPrevList tierlists={tierlists} page={page} maxpage={maxpage} setpage={()=>{}}/>
    </div>
  )
}
