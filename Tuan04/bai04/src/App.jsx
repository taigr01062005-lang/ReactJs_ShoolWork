import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { ProductCard } from './components/ProductCard'

function App() {
  let [data, setData] = useState([])
  let [filteredData,setFilteredData]=useState([])


  useEffect(()=>{
    let fetch = async ()=>{
    try {
      let res= await axios.get('https://69831cd79c3efeb892a4738c.mockapi.io/wwa/test')
      setData(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  fetch()
  },[])
  
   

  let filter=(title)=>{
    if(title){
       setFilteredData(data.filter((data)=>{
      return data.name.toLowerCase().includes(title.toLowerCase())
    }))
    }else{
      setFilteredData([])
    }
   
  }

  

  return (
    <div> 
      <input type="text" onChange={(e)=>{filter(e.target.value)}}/>
       <div style={{display:'grid', gap:'20px', gridTemplateColumns:"1fr 1fr 1fr 1fr" }}>
      {
        filteredData.length>0?

        (filteredData.map((filteredData)=>{
          return <ProductCard key={filteredData.id} product={filteredData} ></ProductCard>
        })):

        (data.map((data)=>{
          return <ProductCard key={data.id} product={data}></ProductCard>
        }))
      }

    </div>

    </div>
    
     
   
   
  )
}

export default App
