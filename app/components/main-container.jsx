import React, { Suspense } from 'react'
import SearchBox from './search-box'
import AdsBanner from './ads.banner'
import CategoriesNavbar from './categories-navbar'
import DishContainer from './dish-container'
import LoadingUi from './loadingUi'

const MainContainer = ({callingDish}) => {
  return (
    <div className='w-9/12 h-screen bg-white p-3'>
     <div className='flex flex-col gap-5'> <SearchBox/>
     <AdsBanner/></div>
     <CategoriesNavbar/>
    
    <DishContainer callingDish={callingDish}/>
    
    </div>
  )
}
 
export default MainContainer