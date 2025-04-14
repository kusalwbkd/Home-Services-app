"use client"

import BussinessList from '@/app/_componenets/BussinessList'
import { getBussinessByCategory } from '@/app/_services/GlobalApi'
import { Business, BusinessList, BusinessListResponse } from '@/types'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const BussinessByCategory = () => {
   
  const { category } = useParams() as { category: string }
  const[businessList,setBusinessList]=useState<Business[]>([])
  const[loading,setLoading]=useState(false)
  
      useEffect(()=>{
         if(category){
          getCategorizedBussiness()
         }
      },[category])

      const getCategorizedBussiness=async()=>{
        setLoading(true)
        try {
          const response= await getBussinessByCategory({category}) 
         setBusinessList(response.businessLists)
        } catch (error) {
          console.log(error);
          
        }finally{
          setLoading(false)
        }
       
        
      }

      
    
   if(!loading && !businessList.length){
           return <h1 className='text-center text-4xl font-bold text-primary'>No Bussiness are in for  {category} </h1>
   }
  return (
    <div>
      <BussinessList title={category} businessList={businessList}/>
    </div>
  )
}

export default BussinessByCategory