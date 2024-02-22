import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import './Profile.css'
import TierlistPrevList from '../components/HomePage/TierlistPrevList';

export default function Profile({backend}) {
  const [searchParams, setSearchParams] = useSearchParams({page: 1});
  let params = useParams();

  let [user, setUser] = useState({});
  let [tierlists, setTierlists] = useState([]);
  let [maxPage, setMaxPage] = useState(1);

  let page = 1;
  if(searchParams.get("page")) {
    page = parseInt(searchParams.get("page"));
  }

  // Use backend to retirieve our data
  const loadUser = async () => {
    let result = await fetch(backend + "/api/user/" + params.id).then(resp => resp.json());
    setUser(result);
  }

  const setPage = (newPage) => {
    setSearchParams({page: newPage});
    page = newPage;
    loadTierlist();
  }

  const loadTierlist = async () => {
    let url = new URL(backend + "/api/tierlist/byuser/" + params.id);
    url.searchParams.append("page", page);
    
    let result = await fetch(url).then(resp => resp.json());
    setTierlists([...result.results]);
    setMaxPage(result.maxpage);
  }

  useEffect(() => {
    loadUser();
    loadTierlist();
  }, []);

  return (
    <div className='profile-container'>
      <div className='profile-cols'>
        <div className='profile-info'>
          <h2>{user.name}</h2>
          <img src={user.avatar} alt='avatar'/>
        </div>
        <div className='profile-tierlists'>
          <TierlistPrevList tierlists={tierlists} page={page} maxpage={maxPage} setpage={setPage}/>
        </div>
      </div>
    </div>
  )
}
