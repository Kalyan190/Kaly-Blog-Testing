import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Prisma } from '@prisma/client'

type CommentListProps = {
   comments: Prisma.CommentsGetPayload<{
      include: {
         author: {
            select: {
               name: true,
               email: true,
               imageUrl: true
            }
         }
      }
   }>[]
}

const CommentsList : React.FC<CommentListProps> = ({comments}) => {
  return (
    <div className='space-y-8'>
      {
         comments.map((comment)=>(
            <div key={comment.id} className='flex items-center gap-4'>
               <Avatar className='h-10 w-10'>
                  <AvatarImage src={comment.author.imageUrl || ""} />
                  <AvatarFallback>{comment.author.name}</AvatarFallback>
               </Avatar>

               <div className='flex-1'>
                  <div className='mb-2'>
                     <span className='font-medium'>
                        {/* comment author name */}
                        {comment.author.name}

                     </span>
                     <span className='text-sm ml-2'>
                        {/* comment create date */}
                        {comment.createdAt.toDateString()}

                     </span>
                     <p>
                        {/*Comment Body*/}
                        {comment.body}
                     </p>
                  </div>

               </div>
            </div>
         ))
      }
       
     
   </div>
  )
}

export default CommentsList