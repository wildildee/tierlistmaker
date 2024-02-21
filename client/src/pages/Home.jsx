import React, { useEffect, useState } from 'react'
import TierlistPreview from '../components/HomePage/TierlistPreview';
import "./Home.css";
import TierlistPrevList from '../components/HomePage/TierlistPrevList';

export default function Home({backend}) {

  let [maxPage, setMaxPage] = useState(1)
  let [tierlists, setTierlists] = useState([]);

  const params = new URLSearchParams(new URL(document.location).search);
  let page = 1;
  if(params.get("page")) {
    page = params.get("page");
  }

  useEffect(() => {
    // Use backend to retirieve our data
    const loadTierlist = async () => {
      let url = new URL(backend + "/api/tierlist/latest");
      url.searchParams.append("page", page);
      
      let result = await fetch(url).then(resp => resp.json());
      setTierlists([...result.results]);
      setMaxPage(result.maxpage);
    }
    loadTierlist();
  }, []);

  return (
    <div className='latest-container show'>
      <h2>Latest</h2>
      <TierlistPrevList tierlists={tierlists} page={page} maxpage={maxPage} />
    </div>
  )
}
