import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
  return (
    <div className='flex justify-center mb-4 pt-14'>

        <input type="text" 
        className='ml-[10px] w-52 md:w-96 h-10 rounded-xl border border-solid border-black pl-[10px] shadow-lg outline-none text-lg' 
        placeholder='Enter your Task'
        value={inputText}
        onChange={e=>{
          setInputText(e.target.value)
        }}
        />
        
        <button 
        className='w-10 h-10 rounded-full border-none bg-[#F18C00] text-black font-bold text-2xl cursor-pointer mx-4 shadow-xl transition-shadow' onClick={()=>{
          props.addList(inputText)
          setInputText("")
        }
       }>+</button>
    </div>
  );
}

export default TodoInput