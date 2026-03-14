import React from 'react'
import StatusBadge from './StatusBadge'
import './Todo.css'

const Todo = ({todo}) => {
  return (
    <div className='card'>
        <h2>{todo.name}</h2>
        <p>{todo.description}</p>
        <p>{todo.dueDate}</p>
        <StatusBadge status={todo.status}></StatusBadge>

    </div>
  )
}

export default Todo
