import React from 'react';
// import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';

import './style.css';

const LeadCard = ({ lead, clickFunc }) => {
  // const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', id: lead.id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [tagList, setTagList] = React.useState('Nenhuma tag');
  React.useEffect(() => {
    if (lead.tags.length >= 1) {
      setTagList(lead.tags.reduce((acc, curr) => {
        return `${acc} ${curr},`;
      }, ''))
    }
  }, [lead.tags])


  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div
      onClick={() => setShowDetails(!showDetails)}
      style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: isDragging ? 'grabbing' : 'pointer',
        border: isDragging ? "1px dashed black" : "1px solid black"
      }}
      className="dnd_card"
      ref={dragRef}
    >
      <b>{lead.name}</b>
      <p>{showDetails && (<b>Email:</b>)}{lead.email}</p>
      {showDetails && (
        <>
          <p><b>Telefone:</b>{lead.phone}</p>
          <p><b>Tags:</b>{tagList}</p>
        </>
      )}
    </div>
  )
}

export default LeadCard