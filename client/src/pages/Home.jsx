import React, { useEffect, useState } from 'react'
import TierlistPreview from '../components/HomePage/TierlistPreview';
import "./Home.css";

export default function Home({backend}) {

  let [tierlists, setTierlists] = useState([]);

  useEffect(() => {
    // Use backend to retirieve our data
    const loadTierlist = async () => {
      let result = await fetch(backend + "/api/tierlist/latest").then(resp => resp.json());
      setTierlists([...result]);
    }
    loadTierlist();
  }, []);

  return (
    <div className='latest-container show'>
      <h2>Latest</h2>
      <div className='latest-list'>
      {tierlists.map(tierlist => 
        <TierlistPreview tierlist={tierlist} />
      )}
      </div>
    </div>
  )
}
