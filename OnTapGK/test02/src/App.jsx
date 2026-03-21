import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ComboBox from './components/ComboBox'
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBar'
import inputData from '../data.json'

function App() {
  let [data, setData] = useState([])
  let [searchQuery, setSearchQuery] = useState("")
  let [statusFilter, setStatusFilter] = useState("All")

  // let url = "https://69831cd79c3efeb892a4738c.mockapi.io/wwa/todo"

  useEffect(() => {
    let fetchData = async () => {
      try {
        // let res = await fetch(url)
        // let data = await res.json()
        console.log(inputData)
        setData(inputData)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  let handleChange = (filter) => {
    setStatusFilter(filter)
  }

  let handleSearch = (search) => {
    setSearchQuery(search)
  }

  let displayedData = data.filter((todo) => {
    let matchesSearch = todo.name.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesStatus = statusFilter === "All" || todo.status.toLowerCase().includes(statusFilter.toLowerCase());
    return matchesSearch && matchesStatus;
  });

  return (
    <div className='App'>
      <SearchBar onChange={handleSearch}></SearchBar>
      <ComboBox onChange={handleChange}></ComboBox>
      <TodoList data={displayedData}></TodoList>
    </div>

  )
}

export default App
