"use server"

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";

export const likeDislikeToggle = async(articleId:string)=>{
     const {userId} = await auth();

     if(!userId){
       throw new Error('You must logged in to like an article')
     }

     const user = await prisma.user.findUnique({
      where: {clerkUserId: userId}
     })

     if(!user){
      throw new Error("User does not exist in the database")
     }

     const existingLike = await prisma.likes.findFirst({
      where: {articleId, userId: user.id}
     })

     if(existingLike){
      // dislike
      await prisma.likes.delete({
         where: {id:existingLike.id}
      })
     }else{
       //like
       await prisma.likes.create({
         data: {
            articleId,
            userId: user.id
         }
       })
     }
     revalidatePath(`/articles/${articleId}`)
}