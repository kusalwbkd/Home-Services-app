import React from 'react'
import CategorySidebar from './_components/CategorySidebar';

const layout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
       
        <div className='grid grid-cols-4'>
           <div className='hidden md:grid grid-cols-1 mt-8'>
           <CategorySidebar/>
           </div>
           <div className='col-span-3'>
            {children}
           </div>
        </div>
        
    </div>
  )
}

export default layout