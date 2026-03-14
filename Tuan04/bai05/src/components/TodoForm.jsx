import React from 'react'
import './TodoForm.css'
import { useState } from 'react';
import { Button } from './Button';
import axios from 'axios';

const TodoForm = ({onAdd}) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        dueDate: '',
        status: ''
        });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev =>{return({...prev,[name]: value})});
        };
    
    const handleSubmit = async () => {
        let newTodo= {"name": formData.name,
                "description": formData.description,
                "status": formData.status,
                "dueDate": formData.dueDate
            };

        try {
             let res= await axios.post('https://69831cd79c3efeb892a4738c.mockapi.io/wwa/todo',newTodo )
            console.log(res); 
            if(res.status=== 201){
                alert('thêm thành công')
            }
            await onAdd(res.data)
        } catch (error) {
            alert("Thêm thất bại: " + error.message)
            
        }
       
        };
  return (
    <div className='todo'>
        <input type="text" name="name" value={formData.name} placeholder='Name' onChange={handleChange} />
        <input type="text" name="description" value={formData.description} placeholder='Description' onChange={handleChange} />
        <input type="text" name="dueDate" value={formData.dueDate} placeholder='Due Date' onChange={handleChange}/>
        <input type="text" name="status" value={formData.status} placeholder='Status' onChange={handleChange}/>     
        <Button text="Thêm" type="primary" onClick={()=>{handleSubmit()}}></Button>
        <Button text="Xóa" type="danger"></Button> 
        {/* <Button text="Sửa" type="warning"></Button> */}
    </div>
  )
}

export default TodoForm
