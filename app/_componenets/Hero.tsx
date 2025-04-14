import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='mt-8 pt-14 pb-7 flex flex-col items-center justify-center gap-3'>
        <h2 className='font-bold text-5xl text-center'>Find Home <span className='text-primary'>Service</span> </h2>
        <h2 className='text-xl text-gray-400'>Explore Best Home Service</h2>

        <div className='mt-4 flex gap-4 items-center justify-center'>
            <Input placeholder='Search for a service' className='rounded-full md:w-[350px]'/>
            <Button className='rounded-full h-[40px] cursor-pointer'>
                <Search className='h-4 w-4'/>
            </Button>
        </div>
    </div>
  )
}

export default Hero