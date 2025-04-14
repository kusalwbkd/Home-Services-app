// components/TimeSlotPicker.tsx
"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { generateTimeSlots } from '@/lib/generateTimeSlots'
import { BookingProp } from '@/types';

type TimeSlotPickerProps = {
    selected: string ;
    setSelected: React.Dispatch<React.SetStateAction<string >>;
    timeSlots:BookingProp[]
  };
  
const TimeSlotPicker = ({selected,setSelected,timeSlots}:TimeSlotPickerProps) => {
  const slots = generateTimeSlots(8, 20) // 8 AM to 8 PM
  const selectedTime=timeSlots.map((item)=>item?.time)
console.log("selected time",selectedTime);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
      {slots.map((slot:any) => (
        <Button
          key={slot}
          variant={selected === slot ? "default" : "outline"}
          onClick={()=>setSelected(slot)}
          className={`cursor-pointer border rounded-full px-3 p-2 hover:bg-primary hover:text-white ${selected===slot && 'bg-primary text-white'}`}
          disabled={selectedTime.includes(slot)}
        >
          {slot}
        </Button>
      ))}
    </div>
  )
}

export default TimeSlotPicker
