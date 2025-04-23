import Unauthorized from '@/app/unauthorized';
import ArticleDetailPage from '@/components/articles/article-detail-page';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

type ArticleDetailPage = {
   params: Promise<{id:string}>
}

const page : React.FC<ArticleDetailPage> = async({params}) => {
    
   const {userId} = await auth();
      if(!userId){
         return <Unauthorized/>
      }
   
   const id = (await params).id;


    const article = await prisma.articles.findUnique({
      where: {id},
      include: {
         author: {
            select: {
               name: true,
               email: true,
               imageUrl: true
            }
         }
      }
    })
    if(!article){
      return <h1>Article not found.</h1>
    }

  return (
    <div>
      <ArticleDetailPage article={article}/>
    </div>
  )
}

export default page