import React, { useEffect, useState } from 'react'
import Tier from './Tier';
import { ReactSortable } from "react-sortablejs";
import './Tierlist.css'
import Description from './Description';
import Item from './Item';

export default function Tierlist({ data }) {
  const params = new URLSearchParams(new URL(document.location).search);
  const [unsortedItems, setUnsortedItems] = useState(data.items.map((item, index) => index))
  
  const [tiers, setTiers] = useState([
    {"name": "A", "color": "#ff3300", "items": []},
    {"name": "B", "color": "#ff9900", "items": []},
    {"name": "C", "color": "#33cc33", "items": []},
    {"name": "D", "color": "#0066ff", "items": []}
  ]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [sharelink, setSharelink] = useState("");

  const createSharelink = () => {
    params.set("load", JSON.stringify(tiers));
    setSharelink(document.location.host + "/?" + params.toString());
  }

  const rename = (newName, index) => {
    let newTiers = tiers;
    newTiers[index].name = newName;
    setTiers([...newTiers]);
  };

  const changeColor = (newColor, index) => {
    let newTiers = tiers;
    newTiers[index].color = newColor;
    setTiers([...newTiers]);
  };

  const moveTier = (amount, index) => {
    if(index + amount < 0 || index + amount >= tiers.length) {
      // Topmost / bottommost element
      return;
    }
    // Swap
    let newTiers = tiers;
    [newTiers[index], newTiers[index+amount]] = [newTiers[index+amount], newTiers[index]];
    setTiers([...newTiers]);
  }

  const deleteTier = (index) => {
    // Move items into unsorted items
    setUnsortedItems([...unsortedItems, ...tiers[index].items]);

    // Remove tier
    let tempTiers = tiers;
    tempTiers.splice(index, 1);
    setTiers([...tempTiers]);
  }

  const createTier = () => {
    let newTiers = tiers;
    setTiers([...newTiers, {"name": "New Tier", "color": "#000000", "items": []}]);
  }

  const setSelectedCallback = (index) => {
    // if it is the already selected index then unselect the index
    if(index == selectedItem) {
      setSelectedItem(-1);
    } else {
      setSelectedItem(index);
    }
  }

  useEffect(() => {
    // Load the params from url
    let load = params.get("load");
    let tempTiers = JSON.parse(load);
    if(load != null) {
      // Load
      setTiers([...tempTiers]);
      // Delete any elements in the unselected that appear in the tiers
      let tempItems = unsortedItems;
      for(let ti = 0; ti < tempTiers.length; ti++) {
        for(let ii = 0; ii < tempTiers[ti].items.length; ii++) {
          let index = tempItems.indexOf(tempTiers[ti].items[ii]);
          if(index != -1) {
            tempItems.splice(index, 1); 
          }
        }
      }
      setUnsortedItems([...tempItems])
    }
  }, []);

  return (
    <div className='tierlist-container'>
      <div className='tierlist-info-container'>
        <h1>{data.name}</h1>
        <p>{data.author}</p>
        <div className='tierlist-list-container'>
          {tiers.map((tier, index) => 
            <Tier key={index} tierlistData={data} tiers={tiers} setTierData={setTiers} selected={selectedItem} index={index} rename={rename} changeColor={changeColor} moveTier={moveTier} deleteTier={deleteTier} setSelectedCallback={setSelectedCallback}/>
          )}
        </div>
        <div className='tierlist-buttons'>
            <button onClick={createTier}>New Tier</button>
            <button onClick={createSharelink}>Save Tierlist</button>
            <p>{sharelink}</p>
        </div>
      </div>
      <ReactSortable className='tierlist-items-grid' group="tierlist" list={unsortedItems} setList={setUnsortedItems}>
          {unsortedItems.map(item =>
            <Item index={item} id={item == selectedItem ? "selected" : ""} item={data.items[item]} setSelectedCallback={setSelectedCallback}/>
          )}
      </ReactSortable>
      <Description className='tierlist-desc-container' item={data.items[selectedItem]}/>
    </div>
  );
}
