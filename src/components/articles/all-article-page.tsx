import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const AllArticlePage = () => {
  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      <Card className='group relative overflow-hidden translate-all hover:shadow-lg '>
         <div className='p-6'>
            <div className='relative mb-4 h-48 w-full overflow-hidden rounded-xl '>
                 <Image src={'https://plus.unsplash.com/premium_photo-1666277012916-1c1c7bc88122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D'} alt='Image' fill className='object-cover'/>
            </div>
             
             {/* Article content */}

             <h3 className='text-xl font-semibold'>Title</h3>
             <p className='text-sm mt-2'>Web Developement</p>

             <div className='mt-6 flex items-center justify-between'>
                 <div className='flex items-center gap-3'>
                    <Avatar>
                      <AvatarImage src=''/>
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className='text-sm'>Kalyan</span>
                 </div>
                 <div className='text-sm '>
                     16 Apr 
                 </div>
             </div>
         </div>
      </Card>
   </div>
  )
}

export default AllArticlePage