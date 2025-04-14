import { categoryList, HomeServiceCategory } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = ({categoryList}:categoryList) => {
    
  return (
    <div className='mx-4 md:mx-20 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {categoryList?.length < 1 && [1,2,3,4,5,6].map((item,index)=>(
         <div className='h-[120px] w-full bg-slate-400 rounded-lg animate-pulse' key={index}>

         </div>
        ))}

      
        {categoryList?.length>=1 &&categoryList?.map((category:HomeServiceCategory,index:number)=>(
              <Link key={index} href={`/search/${category?.name}`}
               className={`flex flex-col items-center justify-center gap-2 bg-emerald-50   cursor-pointer hover:scale-110 transition-all ease-in-out p-4 rounded-lg`}
              //style={{ backgroundColor: category?.bgColor?.hex }}
              >
                <Image src={category?.icon?.url} alt={category?.name} width={35} height={35}/>
                <h2 className='text-primary font-semibold '>{category?.name}</h2>
              </Link>
        
        ))}
    </div>
  )
}

export default Categories