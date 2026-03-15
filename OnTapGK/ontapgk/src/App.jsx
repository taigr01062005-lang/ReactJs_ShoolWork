import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  let [filteredData, setFilterdData] = useState([])
  let [selectedData, setSelectedData] = useState(null)
  let [formData, setFormData] = useState({
    "name": "",
    "description": "",
    "dueDate": "",
    "status": ""
  })

  let url = "https://69831cd79c3efeb892a4738c.mockapi.io/wwa/todo"
  useEffect(() => {

    let fetch = async () => {
      try {
        let res = await axios.get(url)
        setData(res.data)
        console.log(res.data)
      } catch (error) {

      }
    }
    fetch()
  }, [])

  let search = (name) => {
    if (name) {
      setFilterdData(data.filter((data) => {
        return data.name.toLowerCase().includes(name.toLowerCase())
      }))
    }

  }
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => { return ({ ...prev, [name]: value }) })
  }

  let handleAdd = async () => {
    try {
      let res = await axios.post(url, formData)
      console.log(res.data)
      setData((data)=>{ return [...data,res.data]})
      setFormData({
        "name": "",
        "description": "",
        "dueDate": "",
        "status": ""
      })
    } catch (error) {

    }
  }

  let handleDelete = async () => {
    try {
      let res = await axios.delete(`${url}/${selectedData}`)
      console.log(res.data)
      setData(data.filter((data) => { return data.id != selectedData }))
       setFilterdData(filteredData.filter((data) => { return data.id != selectedData }))
      setSelectedData("")


    } catch (error) {

    }

  }
  let handldUpdate=(id)=>{
    
  }




  return (
    <div>
      <input type="text" placeholder='Search' onChange={(e) => { search(e.target.value) }} />

      <input type="text" name='name' value={formData.name} onChange={handleChange} />
      <input type="text" name='description' value={formData.description} onChange={handleChange} />
      <input type="text" name='dueDate' value={formData.dueDate} onChange={handleChange} />
      <input type="text" name='status' value={formData.status} onChange={handleChange} />

      <button onClick={handleAdd}>Thêm</button>
      <button onClick={handleDelete}>Xóa</button>

      <div style={{ display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {filteredData.length > 0 ?
          (filteredData.map((data) => {
            return <div key={data.id} style={{ backgroundColor: 'antiquewhite' }} onClick={() => {return setSelectedData(data.id) }}>
              <h2>{data.name}</h2> <br />
              <h2>{data.description}</h2> <br />
              <h2>{data.dueDate}</h2>
              <h2>{data.status}</h2>
            </div>
          })) :
          (data.map((data) => {
            return <div key={data.id} style={{ backgroundColor: 'antiquewhite' }} onClick={() => { setSelectedData(data.id) }}>
              <h2>{data.name}</h2> <br />
              <h2>{data.description}</h2> <br />
              <h2>{data.dueDate}</h2>
              <h2>{data.status}</h2>
            </div>
          }))}

      </div>


    </div>


  )
}

export default App
