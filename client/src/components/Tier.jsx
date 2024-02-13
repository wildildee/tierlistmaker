import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaPencil, FaTrash } from "react-icons/fa6";
import { ReactSortable } from "react-sortablejs";

import './Tier.css'
import Item from './Item';
import GenericPopup from './GenericPopup';

export default function Tier({ key, tierlistData, tiers, setTierData, selected, index, rename, changeColor, moveTier, deleteTier, setSelectedCallback}) {
  const [tempName, setTempName] = useState('');
  const [tempColor, setTempColor] = useState('#000000');
  const tierData = tiers[index];

  const showEditPopup = () => {
    if(editPopup) {
      return;
    }
    setTempName(tierData.name);
    setTempColor(tierData.color);
    setEditPopup(!editPopup);
  }

  const handleSubmit = (e) => {
    rename(tempName, index);
    changeColor(tempColor, index);
    setEditPopup(false);
  }

  const setItems = (newItems) => {
    let tempTierData = tiers;
    tempTierData[index].items = [...newItems];
    setTierData([...tempTierData]);
  }

  const [editPopup, setEditPopup] = useState(false);

  return (
    <div key={key} className='tier'>
      <div className='tier-header' style={{ "backgroundColor": tierData.color }}>
        <p>{tierData.name}</p>
        <div className='tier-header-buttons'>
          <button onClick={() => {moveTier(-1, index)}}><FaAngleUp /></button>
          <button onClick={() => {moveTier(1, index)}}><FaAngleDown /></button>
          <button onClick={showEditPopup}><FaPencil /></button>
          <button onClick={() => {deleteTier(index)}}><FaTrash /></button>
        </div>
      </div>
      <ReactSortable className='tier-contents' group="tierlist" list={tierData.items} setList={setItems} >
        {tierData.items.map((item) =>
          <Item index={item} id={item == selected ? "selected" : ""} item={tierlistData.items[item]} setSelectedCallback={setSelectedCallback}/>
        )}
      </ReactSortable>
      <GenericPopup className="edit-popup" open={editPopup} onClose={() => {setEditPopup(false)}} title={`Editing ${tierData.name}`} >
        <p className='popup-label'>Tier Name:</p>
        <input type="text" value={tempName} onChange={(e) => {setTempName(e.target.value)}}/>
        <p className='popup-label'>Tier Color:</p>
        <input type="color" value={tempColor} onChange={(e) => {setTempColor(e.target.value)}}/>
        <button className='submit-button' onClick={handleSubmit}>Submit</button>
      </GenericPopup>
    </div>
  )
}
