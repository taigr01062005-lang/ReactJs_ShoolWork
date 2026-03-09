import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  let [id,setId]=useState('')
  let [Error,setError]=useState('')
  let url=`https://jsonplaceholder.typicode.com/users/${id}`;



  useEffect(() => {
    async function fetchData() {
      try {
        let data=await fetch(url);
        let res=await data.json();
        console.log(res)
        setData(res)
        console.log(id)
        
      } catch (error) {
        setError(error.message)
       
      }
     

    } 
    fetchData()


  }, [id])
   console.log(Error)



  return (
    <>
    <div>
      <input onChange={(e)=>{setId(e.target.value)}} type="text"  />
    </div>
    {
      id?(
      <h2>{data.name} <br />{data.phone} <br /> {data.website}</h2>
      ):(<h2></h2>)
    }
      
    </>
  )
}

export default App
