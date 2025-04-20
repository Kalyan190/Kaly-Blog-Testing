import CreateArticlesPage from '@/components/articles/create-articles-page'
import React, { Suspense } from 'react'

const page = () => {
  return (
     <Suspense fallback={<div>Loading article editor...</div>}>
        <CreateArticlesPage />
     </Suspense>
  )
}

export default page