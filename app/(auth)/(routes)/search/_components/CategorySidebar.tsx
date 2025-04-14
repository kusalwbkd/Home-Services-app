"use client"
import { getCategory } from '@/app/_services/GlobalApi'
import { HomeServiceCategory } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CategorySidebar = () => {
  
      const[categoryList,setCategoryList]=useState<HomeServiceCategory[]>([])
  const { category } = useParams() as { category: string }
    
      useEffect(()=>{
        getCategoryList()
      },[])
    
      const getCategoryList=async()=>{
    
        try {
          //const response=await getCategory()
          const response = await getCategory() as { categories: HomeServiceCategory[] }
          setCategoryList(response?.categories)
        } catch (error) {
          console.log("something went wrong");
          
        }
      }
  return (
    <div>
        <h2 className='text-xl text-primary font-bold mb-3 text-center '>Categories</h2>
        {categoryList?.map((item:HomeServiceCategory,index)=>{
                   return(
                     <Link key={index} href={`/search/${item?.name}`}
                    className={`flex gap-2 items-center
                     shadow-md hover:bg-emerald-50 hover:text-primary hover:font-semibold
                     ${category===item?.name && 'border-[2px] border-primary text-primary shadow-md bg-emerald-50 font-semibold'}
                      hover:border-primary p-3 border rounded-lg mb-3 md:mr-10 cursor-pointer`}>
                        <Image src={item?.icon?.url} width={30} height={30} alt='icon'/>
                      <h2>{item?.name}</h2>
                    </Link>
                   )
            })}
    </div>
  )
}

export default CategorySidebar