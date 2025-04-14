import { Button } from '@/components/ui/button'
import { Business } from '@/types'
import { MapPin, Phone, Share, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BussinessInfo = ({businessDetails}:{businessDetails:Business}) => {
  return (
    <div className='md:flex gap-4 items-center'>
        <Image
         src={businessDetails?.images?.url} 
         alt={businessDetails?.name} width={150} height={150}
         className='rounded-full h-[75px] w-[75px] md:h-[150px] md:w-[150px] object-cover'
         />

         <div className='flex flex-col md:flex-row items-center  gap-5'>
         <div className='flex flex-col  items-baseline'>
            <h2 className='text-primary mt-3 bg-emerald-100 rounded-full p-1 px-3 text-sm font-semibold'>{businessDetails?.category?.name}</h2>
            <h2 className='text-[20px] md:text-[40px] font-bold'>{businessDetails?.name}</h2>
            <h2 className='flex gap-2 md:text-lg text-gray-500'>
                <MapPin/>
                {businessDetails?.address}
                
                </h2>

              
         </div>
         <div className='flex flex-col gap-5 items-center'> 
            <Button><Share/></Button>
            <h2 className='text-primary flex gap-2 md:text-xl'><User/> {businessDetails?.contactPerson}</h2>
            <h2 className='text-gray-600 flex gap-2 md:text-xl'><Phone/> 021721721712</h2>

         </div>
         </div>
    </div>
  )
}

export default BussinessInfo