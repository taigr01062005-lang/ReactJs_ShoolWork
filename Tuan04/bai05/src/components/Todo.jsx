import React from 'react'
import StatusBadge from './StatusBadge'
import './Todo.css'

const Todo = ({todo,onClick}) => {
  return (
    <div className='card' onClick={()=>{onClick(todo.id)}}>
        <h2>{todo.name}</h2>
        <p>{todo.description}</p>
        <p>{todo.dueDate}</p>
        <StatusBadge status={todo.status}></StatusBadge>

    </div>
  )
}

export default Todo
