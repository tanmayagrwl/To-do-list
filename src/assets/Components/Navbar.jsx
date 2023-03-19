import React from 'react'

function Navbar() {
  return (
    <div> 
        <div className='flex w-screen min-w-fit h-20 bg-black justify-between px-10 py-6'> 
            <h1 className='text-white font-semibold text-lg '>To-do list</h1>
            <button className='bg-white text-black w-20 font-semibold text-base rounded-sm hover:bg-slate-200  hover:font-bold'>Profile</button>
                     
        </div>
    </div>
  )
}

export default Navbar