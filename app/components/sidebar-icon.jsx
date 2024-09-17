import Link from 'next/link'
import React from 'react'
import { CgInsertAfterO } from "react-icons/cg";
import { FcDoNotInsert, FcHeatMap, FcHome, FcInTransit, FcLike, FcManager } from "react-icons/fc";
import { MdManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
const SidebarIcon = () => {
  return (
    <div className='w-[60px] bg-slate-200 gap-5 flex justify-center items-center flex-col max-w-[50px]'>
         <Link href="/insert-category">
         <BiSolidCategory  className='w-7 h-7'/>
        </Link>

      
        <Link href="/">
        <FaHome className='w-7 h-7'/>
        </Link>
        <Link href="/insert-recipe">
        <CgInsertAfterO className=' w-7 h-7'/>
        </Link>
        <Link href="/manage-recipe">
        <MdManageAccounts className='w-7 h-7' />
        </Link>

    </div>
  )
}

export default  SidebarIcon