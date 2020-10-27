import React from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import { validateDragNDrop } from './actions';

import './style.css';

export default function Column({ listComp, title, index }) {
  const dispatch = useDispatch();

  const[, dropRef] = useDrop({
    accept: 'CARD',
    drop(item, monitor) {
      dispatch(validateDragNDrop(item.id, index));
    }
  })

  return (
    <div ref={dropRef} className="column_dropzone">
      <h3>{title}</h3>
      {listComp}
    </div>
  )
}