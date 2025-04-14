import { BookingQueryBusiness, BookingQueryItem } from '@/types'
import { Building, Calendar, Clock, MapPin, UserIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const BookingHistory = ({bookingHistory}:{bookingHistory:BookingQueryItem[]}) => {
    console.log("from booking history",bookingHistory);
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
       {bookingHistory?.map((item:BookingQueryItem,index:number)=>{
            return(
                <div key={index} className='flex gap-4 items-center rounded-lg p-4 mb-5 border mt-4 shadow-md'>
                    <Image 
                    src={item?.businessList[0]?.images?.url} width={120} height={120} alt={item?.businessList[0]?.name}
                    className='rounded-lg my-5 object-cover'
                    />
                    <div className='flex flex-col gap-4'>
                        <h2 className='flex gap-2'><Building/>  {item?.businessList[0]?.name}</h2>
                        <h2 className='flex gap-2 text-primary font-bold'><UserIcon/> {item?.businessList[0]?.contactPerson}</h2>
                        <h2 className='flex gap-2 text-gray-500'><MapPin/> {item?.businessList[0]?.address}</h2>
                        <h2 className='flex gap-2 text-gray-500'>
                            <Calendar className='text-primary'/> 
                            <span className='text-black font-bold'>{item?.date}</span>
                        </h2>
                        <h2 className='flex gap-2 text-gray-500'>
                            <Clock className='text-primary'/> 
                            <span className='text-black font-bold'>{item?.time}</span>
                        </h2>

                    </div>
                </div>
            )
       })}
    </div>
  )
}

export default BookingHistory