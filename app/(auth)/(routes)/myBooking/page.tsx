"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistory from './_component/BookingHistory'
import { GetUserBookings } from '@/app/_services/GlobalApi'
import { useUser } from '@clerk/nextjs'
import Loading from '@/app/_componenets/Loading'
import { BookingQueryBusiness, BookingQueryItem, BookingQueryResponse } from '@/types'
import { SearchX } from 'lucide-react'
import Image from 'next/image'
const MyBooking = () => {

    const{user}=useUser()
    const[loading,setLoading]=useState(false)
    const[bookingHistory,setBookingHistory]=useState<BookingQueryItem[]>([])
    useEffect(()=>{
         user&& getUserBookingsData()
    },[user])
    const getUserBookingsData=async()=>{
        setLoading(true)
        try {
            const result=await GetUserBookings({userEmail:user?.primaryEmailAddress?.emailAddress||'user@email.com'})
            setBookingHistory(result?.bookings)
 
        } catch (error) {
            console.log(error);
            
        }finally{
           setLoading(false)
        }
      
            

    }

    if(loading){
         return <Loading/>
    }

    console.log(bookingHistory);
    
    if(!bookingHistory.length){
             return(
                <div className='flex flex-col items-center justify-center h-screen'>
                <h2 className='text-4xl font-bold flex gap-6 items-center justify-center'>
                    <Image src={'/folder.png'} width={100} height={100} alt='folder'/>
                    You Didn't make any Bookings...
                    </h2>

                </div>
             )
    }
    return (
        <div className='my-10 mx-5  md:mx-36'>
            <h2 className='font-bold text-xl my-2'>My Bookings</h2>
            <Tabs defaultValue="Booked" className="w-full">
                <TabsList className='w-full justify-start'>
                    <TabsTrigger value="Booked">Booked</TabsTrigger>
                    <TabsTrigger value="Completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="Booked">
                    <BookingHistory bookingHistory={bookingHistory}/>
                </TabsContent>
                <TabsContent value="Completed">Change your password here.</TabsContent>
            </Tabs>

        </div>
    )
}

export default MyBooking