import React from 'react'
import Header from './_componenets/Header';

const Provider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
         <Header/>
   
    <div className='mx-6 md:mx-16'>
       
        {children}
    </div>
    </div>
  )
}

export default Provider