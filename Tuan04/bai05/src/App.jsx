import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [data, setData] = useState([])
  
  useEffect(()=>{
    let fetch=async ()=>{
        try {
      let res= await axios.get('https://69831cd79c3efeb892a4738c.mockapi.io/wwa/todo')
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error.message)
      
    }
    }
    fetch()
  
  },[])
  let handleAddTodo=(newData)=>{
    setData((data)=>{return [...data,newData]})
    console.log(data)
  }


  return (
    <div>
      <TodoForm onAdd={handleAddTodo} ></TodoForm>

      <div style={{display:'grid',gap:'20px',gridTemplateColumns:'1fr 1fr 1fr'}}>
    {
      data.length >0 ?(data.map((item)=>{
        return <Todo key={item.id} todo={item}></Todo>
      })):(<div></div>)
    }
    
   </div>
    </div>

   
  )
}

export default App
