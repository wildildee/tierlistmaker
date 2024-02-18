import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TierlistComponent from '../components/Tierlist/TierlistComponent';

export default function Tierlist({backend}) {
  // Get the id of the tierlist from the URL /tierlist/:[id]
  let params = useParams();

  let [tierlist, setTierlist] = useState({});

  useEffect(() => {
    // Use backend to retirieve our data
    const loadTierlist = async () => {
      let result = await fetch(backend + "/api/tierlist/" + params.id).then(resp => resp.json());

      setTierlist(result);
    }
    loadTierlist();
  }, []);

  return (
    <TierlistComponent tierlist={tierlist} />
  )
}
