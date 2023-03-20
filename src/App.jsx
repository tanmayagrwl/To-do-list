import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar'
import TodoInput from './assets/Components/TodoInput'

function App() {
  const [listTodo, setListTodo]= useState([]);
  let addList = (inputText)=>{
    setListTodo([...listTodo,inputText]);
  } 
  return (
    <div className='bg-[#1D1D1D] h-fit min-h-screen'>
      <Navbar />
      <TodoInput addList={addList}/>
    </div>
  )
}

export default App
