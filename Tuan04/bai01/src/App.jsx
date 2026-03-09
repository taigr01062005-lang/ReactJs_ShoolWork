import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  let url='https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => { 
    //      return res.json(); })
    //   .then((datafetch) => {
    //      setData(datafetch);
    //      console.log(datafetch);
    //      return datafetch;
    //   })

    async function fetchData() {
      let data=await fetch(url);
      let res=await data.json();
      console.log(res)
      setData(res)

    }
    fetchData()


  }, [])


  return (
    <>
      {data.map((item) => {
        return <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.email}</h2>
        </div>

      })}
    </>
  )
}

export default App
