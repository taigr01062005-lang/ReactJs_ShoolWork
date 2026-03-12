import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  let [id, setId] = useState('')
  let [Error, setError] = useState(null)
 


  useEffect(() => {
    async function fetchData() {
        let url = `https://jsonplaceholder.typicode.com/users/${id}`;
        let data = await fetch(url);
        let res = await data.json();
        if (!res.name) {
          setError('Not Found')
          setData({})
        } else {
          setData(res)
          setError(null)
        }
    }
    if (id) {
      fetchData()
    }
  }, [id])


  let checkValid = (e) => {
    setId(e.target.value)
  }



  return (
    <>
      <div>
        <input onChange={(e) => { checkValid(e) }} type="text" />
      </div>
      {
        Error ? 
        (<h2>{Error}</h2>) :
        (<h2>{data.name} <br />{data.phone} <br /> {data.website}</h2>)
      }

    </>
  )
}

export default App
