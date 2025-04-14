"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Calendar } from '@/components/ui/calendar'
import { NotebookPen } from 'lucide-react'
import TimeSlotPicker from './TimeSlotPicker'
import Loading from '@/app/_componenets/Loading'
import {  BookingProp, Business } from '@/types'
import { createNewBooking, GetTimeSlots } from '@/app/_services/GlobalApi'
import { useUser } from '@clerk/nextjs'
import { toast } from 'sonner'

const Booking = ({ businessDetails }: { businessDetails: Business }) => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [selected, setSelected] = useState<string>('')
    const [isMounted, setIsMounted] = useState(false)
    const [loading, setLoading] = useState(false)
    const[timeSlots,setTimeSlots]=useState<BookingProp[]>([])
    const { user } = useUser()
    useEffect(() => {
        setIsMounted(true)

        setDate(new Date())
    }, [])

  useEffect(()=>{
        checkTimeSlots()
  },[date])
  const formattedDate = date?.toISOString().split('T')[0] || new Date().toISOString().split('T')[0]

    const saveBooking = async () => {
        setLoading(true)
        try {
            const response = await createNewBooking({
                businessId: businessDetails?.id || '',
                date: formattedDate,
                time: selected || '',
                userEmail: user?.emailAddresses?.[0]?.emailAddress || '',
                userName: user?.fullName || user?.username || 'Anonymous',
            })

            toast.success('Service Booked')
            console.log(response);
        } catch (error) {
            console.log(error);
            toast.error('Error while booking')

        } finally {
            setLoading(false)
        }


    }


    const checkTimeSlots=async()=>{
        try {
          const response=await GetTimeSlots({date: formattedDate,businessId:businessDetails?.id})  
         
          setTimeSlots(response?.bookings)
          
        } catch (error) {
            console.log(error);
            
        }
    }
    if (!isMounted) {
        return <Loading />
    }
    if (loading) {
        return <Loading />
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className='cursor-pointer flex gap-2 w-full hover:text-white hover:font-semibold'>
                    <NotebookPen />
                    Book Appointment
                </Button>
            </SheetTrigger>
            <SheetContent className='overflow-auto'>
                <SheetHeader>
                    <SheetTitle>Book an appointment</SheetTitle>
                    <SheetDescription>
                        Select a date and a time slot to book an appointment

                    </SheetDescription>
                    <div className='flex flex-col gap-5 items-baseline mt-4'>
                        <h2 className='font-bold'>Select a date</h2>
                        {date && (
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(day) => day && setDate(day)}
                                className="rounded-md border"
                                disabled={{ before: new Date() }} 
                                
                            />
                        )}

                    </div>

                    <h2 className='my-5 font-bold'>Select Time Slot</h2>
                    <TimeSlotPicker selected={selected} setSelected={setSelected} timeSlots={timeSlots}/>
                </SheetHeader>
                <SheetFooter className='mt-5'>
                    <SheetClose asChild>
                        <div className='flex gap-5 justify-end'>
                            <Button disabled={!(selected && date)} className='cursor-pointer' onClick={()=>{saveBooking(),setDate(undefined),setSelected('')}}>Book</Button>
                            <Button variant={'destructive'} className=' cursor-pointer'>Cancel</Button>
                        </div>

                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default Booking
