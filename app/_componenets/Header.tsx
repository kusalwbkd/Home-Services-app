"use client"
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { SignedOut, useClerk, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




const Header = () => {
  const { user } = useUser()
  const { signOut } = useClerk()
  return (
    <div className='flex items-center gap-8 p-5 shadow-sm justify-between'>
      <Logo />

      <div className='md:flex gap-6 hidden'>
        <h2 className='hover:scale-105 font-semibold hover:text-primary cursor-pointer ease-in-out transition-all text-md md:text-xl'>Home</h2>
        <h2 className='hover:scale-105 font-semibold hover:text-primary cursor-pointer  ease-in-out transition-all text-md md:text-xl'>Services</h2>
        <h2 className='hover:scale-105 font-semibold hover:text-primary cursor-pointer  ease-in-out transition-all text-md md:text-xl'>About us</h2>
      </div>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Image src={user?.imageUrl} width={45} height={45} alt='logo' className='rounded-full cursor-pointer' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-5 p-5 cursor-pointer'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={'/myBooking'}><DropdownMenuItem>My Booking</DropdownMenuItem></Link>
          
            <DropdownMenuItem onClick={() => signOut({ redirectUrl: '/' })}>LogOut</DropdownMenuItem>
          
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={'/sign-in'} className='cursor-pointer bg-primary font-semibold text-white p-3 rounded-lg text-sm'>
          Get Started
        </Link>
      )}

    </div>
  )
}

export default Header