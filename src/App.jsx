import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [task , setTask] = useState([])

  function addTask(){
    if (input.trim()){
      setTask([...task, input]);
      setInput("")
    }
  }
  function deleteTask(idx){
    setTask(task.filter((itm,idxx)=>(idxx !== idx)))
  }
  return (
    <>
      <div className='Container'>
        <h1>To-Do List</h1>
        <div className='input'>
          <input
          type='text'
          placeholder='Enter a task'
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {task.map((item, idx)=>(
            <li key={idx}>{item}
            <button className="delete" onClick={() => deleteTask(idx)}>delete</button>
            </li>

          ))}
        </ul>
      </div>
    </>
  )
}

export default App
