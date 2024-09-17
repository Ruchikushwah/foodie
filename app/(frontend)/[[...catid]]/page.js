import DbConnect from '@/utils/DbConnect'
import recipeModel from '@/models/recipeModel'
import SidebarIcon from '@/app/components/sidebar-icon'
import MainContainer from '@/app/components/main-container'
import OrderContainer from '@/app/components/order-container'
import { Suspense } from 'react'
import LoadingUI from '@/app/components/loadingUi'
import { SignIn } from '@/app/components/singin'
import { auth } from '@/auth'

const page = async({params}) => {
  DbConnect();
  let session = await auth();
  const {catid} = params;
  let callingDish;
  if(!catid){
     callingDish = await recipeModel.find().populate('dishCategory');
  }
  else{
 callingDish = await recipeModel.find({dishCategory:catid}).populate('dishCategory');
  }
  return (
    <div className='flex flex-1 h-screen'>
        {!session && <SignIn/>}
        {session && (
          <> <SidebarIcon/>
        <Suspense fallback={<LoadingUI/>}>
        <MainContainer callingDish={callingDish}/>
        </Suspense>
       
        <OrderContainer/>
        </>)}

        
    </div>
  )
}

export default page