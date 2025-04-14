import { Button } from '@/components/ui/button'
import { Business, BusinessList } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type BusinessListProps={
    businessList:Business[],
    title:string
}

const BussinessList = ({businessList,title}:BusinessListProps) => {
   
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5'>
            {businessList?.length <1 &&   [1,2,3,4,5,6,7,8].map((item,index)=>(
          <div className=' h-[200px] bg-slate-200 rounded-lg animate-pulse' key={index}></div>
        ))}
            {businessList?.length >=1 &&businessList?.map((item:Business,index:number)=>{
             return(
                <div key={index} className='shadow-md rounded-lg hover:shadow-lg hover:shadow-primary cursor-pointer hover:scale-105
                transition-all ease-in-out'>
                    <Image src={item?.images?.url} alt={item?.contactPerson}
                    width={500}
                    height={200}
                    className='h-[150px] md:h-[250px] object-cover rounded-lg'
                    />
                    
                    <div className='flex flex-col items-baseline p-3 gap-1'>
                    <h2 className='p-2 bg-green-100 rounded-full px-2 text-primary text-xs font-semibold'>{item?.category?.name}</h2>
                    <h2 className='text-lg  font-semibold'>{item?.name}</h2>
                    <h2 className='text-primary font-bold'>{item.contactPerson}</h2>
                    <h2 className='text-gray-500 text-sm'>{item.address}</h2>
                   
                    <Link href={`/details/${item?.id}`}
                     className='rounded-lg mt-3 font-semibold hover:bg-green-700 hover:font-bold text-center bg-primary text-white p-3'>
                    Book Now</Link>
  
                    
                    </div>
                   
                </div>
             )
            })}
        </div>
    </div>
  )
}

export default BussinessList