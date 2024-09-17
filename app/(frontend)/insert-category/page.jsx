import SidebarIcon from "@/app/components/sidebar-icon"
import CategoryForm from "./category-form"
import CategoryCalling from "./category-calling"



const page = () => {
  return (
    <div className='flex flex-1 h-screen'>
      <SidebarIcon />
      <div className="flex flex-1 flex-col p-10">
        <CategoryForm />
      </div>
      <div className="w-8/12">
        <CategoryCalling />
      </div>



    </div>
  )
}

export default page