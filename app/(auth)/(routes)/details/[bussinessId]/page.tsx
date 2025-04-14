"use client"
import Loading from '@/app/_componenets/Loading'
import { getBussinessById } from '@/app/_services/GlobalApi'
import { Business } from '@/types'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import BussinessInfo from '../_components/BussinessInfo'
import BussinessDescription from '../_components/BussinessDescription'
import SuggestedBussiness from '../_components/SuggestedBussiness'

const BusinessDetails = () => {
      const {bussinessId} = useParams() as { bussinessId: string }
      const [businessDetails, setBusinessDetails] = useState<Business | null>(null)
      const[loading,setLoading]=useState(false)


      useEffect(()=>{
        bussinessId && getBussiness()
      },[bussinessId])
    
    const getBussiness=async()=>{
        setLoading(true)
        try {
            const result=await getBussinessById({id:bussinessId})
            setBusinessDetails(result?.businessLists[0] || null)    
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
        }
         
    }
      if(!businessDetails && !loading){
             return null
      }


      if(loading){
             return <Loading/>
      }
  return (
    <div className='py-8 px-10 md:py-20 md:px-36 grid grid-cols-4'>
      
      
            <div className='col-span-4 md:col-span-3'>
                <BussinessInfo businessDetails={businessDetails!}/>
                <BussinessDescription businessDetails={businessDetails!}/>
            </div>

            <div className='hidden md:grid col-span-1'>
                <SuggestedBussiness businessDetails={businessDetails!}/>
            </div>
         </div>
  
  )
}

export default BusinessDetails