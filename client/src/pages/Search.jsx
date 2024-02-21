import React, { useEffect, useState } from 'react'
import "./Search.css";
import TierlistPrevList from '../components/HomePage/TierlistPrevList';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';

export default function Search({backend}) {
  const [searchParams, setSearchParams] = useSearchParams({});

  let [maxPage, setMaxPage] = useState(1)
  let [tierlists, setTierlists] = useState([]);

  let page = 1;
  if(searchParams.get("page")) {
    page = searchParams.get("page");
  }

  let filter = "";
  if(searchParams.get("filter")) {
    filter = searchParams.get("filter");
  }

  let [searchTerm, setSearchTerm] = useState(filter);

  const setSearch = (newSearchTerm) => {
    setSearchParams({filter: newSearchTerm});
    filter = newSearchTerm; // Needed for loadtierlist to work
    loadTierlist();
  };

  const loadTierlist = async () => {
    let url = new URL(backend + "/api/tierlist/search");
    url.searchParams.append("page", page);
    url.searchParams.append("filter", filter);
    
    let result = await fetch(url).then(resp => resp.json());
    setTierlists([...result.results]);
    setMaxPage(result.maxpage);
  }

  useEffect(() => {
    // Use backend to retirieve our data
    loadTierlist();
  }, []);

  return (
    <div className='search-container show'>
      <div className='search-bar'>
        <h2>Search</h2>
        <div className='search-bar-search'>
          <input type='search' value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} onKeyDown={(e) => {if(e.key == 'Enter') {setSearch(searchTerm)}}}></input>
          <button className='icon-button' onClick={()=> {setSearch(searchTerm)}}><FaMagnifyingGlass /></button>
        </div>
      </div>
      <TierlistPrevList tierlists={tierlists} page={page} maxpage={maxPage}/>
    </div>
  )
}
