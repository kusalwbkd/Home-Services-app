import { Button } from '@/components/ui/button'
import { Business, BusinessImage } from '@/types'
import { NotebookPen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Booking from './Booking'

const BussinessDescription = ({businessDetails}:{businessDetails:Business}) => {
    //console.log("from business page",businessDetails);

  return (
    <div>
        <h2 className='font-bold text-[25px] mt-10'>Bussiness Description</h2>
        <p className='mt-4 text-gray-600 text-lg'>{businessDetails?.about}</p>
        <h2 className='font-bold text-[25px] mt-8'>Gallery</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
            {businessDetails?.gallery?.map((item:BusinessImage,index:number)=>{
                 return(
                    <Image src={item?.url} alt='image' width={700} height={200} key={index} className='rounded-lg'/>
                 )
            })}
          
        </div>
        <div className='mt-5'>
          <Booking businessDetails={businessDetails}/>
        </div>
    
    </div>
  )
}

export default BussinessDescription