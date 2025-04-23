import LeftSidebar from '@/components/dashboard/left-sidebar'
import { auth } from '@clerk/nextjs/server';
import React from 'react'
import Unauthorized from '../unauthorized';

const layout = async ({ children }: { children: React.ReactNode }) => {
   const {userId} = await auth();
         if(!userId){
            return <Unauthorized/>
         }
   
   return (
      <div className='min-h-screen w-full'>
         <div className='flex'>
            <LeftSidebar />
            <div className='flex-1'>
               {children}
            </div>
         </div>


      </div>
   )
}

export default layout