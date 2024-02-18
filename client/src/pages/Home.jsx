import React, { useEffect, useState } from 'react'
import TierlistPreview from '../components/HomePage/TierlistPreview';

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
    <div className='show'>
      <h2>Latest</h2>
      <div>
      {tierlists.map(tierlist => 
        <TierlistPreview tierlist={tierlist} />
      )}
      </div>
    </div>
  )
}
