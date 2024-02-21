import React, { useEffect, useState } from 'react'
import "./Home.css";
import TierlistPrevList from '../components/HomePage/TierlistPrevList';
import { useSearchParams } from 'react-router-dom';

export default function Home({backend}) {
  const [searchParams, setSearchParams] = useSearchParams({page: 1});

  let [maxPage, setMaxPage] = useState(1)
  let [tierlists, setTierlists] = useState([]);

  let page = 1;
  if(searchParams.get("page")) {
    page = parseInt(searchParams.get("page"));
  }

  const setPage = (newPage) => {
    setSearchParams({page: newPage});
    page = newPage;
    loadTierlist();
  }

  // Use backend to retirieve our data
  const loadTierlist = async () => {
    let url = new URL(backend + "/api/tierlist/latest");
    url.searchParams.append("page", page);
    
    let result = await fetch(url).then(resp => resp.json());
    setTierlists([...result.results]);
    setMaxPage(result.maxpage);
  }

  useEffect(() => {
    loadTierlist();
  }, []);

  return (
    <div className='latest-container show'>
      <h2>Latest</h2>
      <TierlistPrevList tierlists={tierlists} page={page} maxpage={maxPage} setpage={setPage}/>
    </div>
  )
}
