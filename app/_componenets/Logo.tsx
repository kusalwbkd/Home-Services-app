import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
    
    <div className='flex items-center gap-1'>
        <h2 className='md:text-3xl text-2xl font-bold text-primary'>Homiq</h2>
        <Home className='text-green-600 md:h-8 md:w-8'/>
    </div>
    </Link>
   
  )
}

export default Logo