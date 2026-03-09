import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  let [isLoading,setLoading]= useState(true)
  let [Error,setError] = useState(null)



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
        try {
          let data=await fetch(url);
          let res=await data.json();
          console.log(res)
         
          setTimeout(()=>{
            setData(res)
            setLoading(false)
          },3000)
        } catch (err) {
          setError(err.message)
        } 
      }
      fetchData()
     
  
  
    }, [])
    function isError() {
        if(Error!=null){
          alert(Error)
          }
        }
      isError()

  return (
    <>
    {
      isLoading?
      (<p>Loading...</p>):
      (data.map((item) => {
        return <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.email}</h2>
        </div>

      }))
    }
      
    </>
  )
}

export default App
