"use client"
import React, { FormEvent, startTransition, useActionState, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import dynamic from 'next/dynamic';
import { Button } from '../ui/button';
import 'react-quill-new/dist/quill.snow.css';
import type { Articles } from '@prisma/client';
import Image from 'next/image';
import { editArticle } from '@/actions/edit-article';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

type EditArticlesPageProps = {
   article: Articles
}

const EditArticlesPage: React.FC<EditArticlesPageProps> = ({ article }) => {
   const [content, setContent] = useState(article.content || '');

   const [formState, action, isPending] = useActionState(editArticle.bind(null, article.id), { errors: {} })

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      formData.append('content', content);

      startTransition(() => {
         action(formData)
      })
   }

   return (
      <div className='max-w-4xl mx-auto p-6'>
         <Card>
            <CardHeader>
               <CardTitle>Create New Article</CardTitle>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='space-y-2'>
                     <Input type='text' name='title' placeholder='Enter a article title' defaultValue={article.title} />
                     {formState.errors.title && <span className='text-red-600 text-sm'>{formState.errors.title}</span>}
                  </div>
                  <div className='space-y-2'>
                     <Label htmlFor='category'>Category</Label>
                     <select className='flex h-10 w-full rounded-md' name='category' id='category' defaultValue={article.category}>
                        <option value="">Select category</option>
                        <option value="technology">Technology</option>
                        <option value="programming">Programming</option>
                        <option value="web-development">Web Development</option>

                     </select>
                     {formState.errors.category && <span className='text-red-600 text-sm'>{formState.errors.category}</span>}
                  </div>
                  <div className='space-y-2'>
                     <Label htmlFor='featuredImage'>featured Image</Label>
                     <Input type='file' id='featuredImage' name='featuredImage' accept='image/*' />
                     <div className='mt-4'>
                        {
                           article.featuredImage && (
                              <Image src={article.featuredImage} alt='featured-image' height={200} width={200} className='object-cover rounded-md' />
                           )
                        }

                     </div>
                     {formState.errors.featuredImage && <span className='text-red-600 text-sm'>{formState.errors.featuredImage}</span>}
                  </div>

                  <div className='space-y-2'>
                     <Label htmlFor='content'>Content</Label>
                     <ReactQuill
                        theme='snow'
                        value={content}
                        onChange={setContent}
                     />
                     {formState.errors.content && <span className='text-red-600 text-sm'>{formState.errors.content[0]}</span>}
                  </div>
                  <div className='flex justify-end gap-4'>
                     <Button variant={'outline'}>Cancel</Button>
                     <Button type='submit' disabled={isPending}>
                        {isPending ? 'Editing...' : 'Edit Article'}
                     </Button>
                  </div>
               </form>
            </CardContent>
         </Card>

      </div>
   )
}

export default EditArticlesPage;