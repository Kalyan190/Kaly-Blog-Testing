"use client"
import React, { useActionState } from 'react'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { CreateComment } from '@/actions/create-comment'


type CommentInputProps = {
   articleId : string
}

const CommentInput : React.FC<CommentInputProps> = ({articleId}) => {

   const [formState, action, isPending] = useActionState(CreateComment.bind(null,articleId),{errors: {}});


  return (
    <form action={action} className='mb-8'>
      <div className='flex gap-4 '>
          <Avatar>
            <AvatarImage src=''/>
            <AvatarFallback className='dark:text-white'>CN</AvatarFallback>
          </Avatar>
          <div className='flex-1'>
              <Input className='dark:border border-gray-200' type='text' name='body' placeholder='Add a comment...' />
              {
               formState.errors.body && (<p className='text-red-600 text-sm'>{formState.errors.body}</p>)
              }
              <div className='flex justify-end mt-4 '>
                 <Button type='submit' disabled={isPending}>
                  {
                       isPending ? 'Loading...' : 'Post Comment'
                  }
                 </Button>
              </div>
              {
                 formState.errors.formErrors && (<div className='p-2 border bg-red-100 border-red-600 text-sm'>{formState.errors.formErrors[0]}</div>)
              }
          </div>
      </div>
      
    </form>
  )
}

export default CommentInput