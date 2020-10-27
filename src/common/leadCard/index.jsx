import React from 'react';
import { useDispatch } from 'react-redux';

const LeadCard = ({lead, clickFunc}) => {
  const dispatch = useDispatch()
  return (
    <div 
      onClick={() => dispatch(clickFunc(lead))}
      style={{
        display: 'block',
        border: '1px solid black',
        boxShadow: 'inherit',
        textAlign: 'center',
      }}
    >
      <b>{lead.name}</b>
      <p>{lead.email}</p>
    </div>
  )
}

export default LeadCard