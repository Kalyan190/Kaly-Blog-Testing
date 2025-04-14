import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <form action="">
      <div className='relative flex items-center'>
           <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
           <Input type='text' name='search' className='pl-10 md:w-48 focus-visible:ring-1' placeholder='Search...' />
      </div> 
    </form>
  )
}

export default SearchInput