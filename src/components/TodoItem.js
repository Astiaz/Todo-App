import React from "react";
import '../styles/TodoItem.css'

function TodoItem(props){

  return (
    <li>
      <span className={`Icon Icon--check ${props.completed && 'Icon-Check--active'}`} onClick={props.onComplete}>
        Y
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className={`Icon Icon--delete`} onClick={props.onDelete}>
        X
      </span>
    </li>
  )
}

export {TodoItem}