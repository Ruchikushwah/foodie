import React from 'react'
import {BsList, BsSearch} from "react-icons/bs"

const SearchBox = () => {
  return (
    <div className='flex flex-1 shadow-xl border p-2 '>
      <span className='flex gap-3 flex-1'>
        <BsSearch className='w-10 h-10 text-slate-400'/>
        <input type="search" placeholder='search food item'  className='flex-1 text-2xl focus:outline-none focus:border-none'/>
        <BsList className='w-10 h-10 text-slate-400'/>
      </span>
    </div>
  )
}

export default SearchBox