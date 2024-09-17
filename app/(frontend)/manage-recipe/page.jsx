import SidebarIcon from '@/app/components/sidebar-icon'
import React from 'react'
import RecipeCalling from '../insert-recipe/recipe-calling'

const page = () => {
  return (
    <div className='flex flex-1 h-screen '>

      <SidebarIcon/>
      <div className='flex   mt-10 px-10'>
        <RecipeCalling/></div>
      
    </div>
  )
}

export default page