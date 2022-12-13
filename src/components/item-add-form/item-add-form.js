import React, { useState } from "react";

import './item-add-form.css';

const ItemAddForm = ({onActivityAdded}) => {

  const [title, setTitle] =  useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    onActivityAdded(title);
    setTitle('');
  }

  return(
    <div className="item-add-form">
      <form className="input-group mb-3" onSubmit={onSubmit}>
        <input type="text" className="form-control" onChange={(event) => {setTitle(event.target.value)}}  value={title}/>
        <button className="btn btn-secondary" id="add-item-btn">Submit New Task</button>
      </form>
    </div>
  )
}

export default ItemAddForm;



