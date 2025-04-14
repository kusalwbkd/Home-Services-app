import { getBussinessByCategory } from '@/app/_services/GlobalApi'
import { Button } from '@/components/ui/button'
import { Business } from '@/types'
import { NotebookPen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SuggestedBussiness = ({businessDetails}:{businessDetails:Business}) => {
    const[businessList,setBusinessList]=useState<Business[]>([])
    const[loading,setLoading]=useState(false)
    const category=businessDetails?.category?.name
        useEffect(()=>{
           if(businessDetails){
            getCategorizedBussiness()
           }
        },[businessDetails])
  
        const getCategorizedBussiness=async()=>{
          setLoading(true)
          try {
            const response= await getBussinessByCategory({category}) 
           setBusinessList(response.businessLists)
           console.log("the result is",response);
           
          } catch (error) {
            console.log(error);
            
          }finally{
            setLoading(false)
          }
         
          
        }

      
        
  return (
    <div className='ml-10'>
      <h2 className='font-bold text-lg mb-3'>Suggested Businneses</h2>
      <div>
        {businessList?.filter((item)=>item?.id !==businessDetails.id).map((item:Business,index:number)=>{
          return(
            <Link href={`/details/${item?.id}`} key={index} className='flex gap-2 mb-3 rounded-lg p-3  items-center hover:shadow-md border-primary'>
            <Image src={item?.images?.url} alt={item?.name} width={80} height={80}
            className='rounded-lg object-cover max-w-[75px] max-h-[75px]'
            />
            <div className='flex flex-col items-center justify-center'>
              <h2 className='font-bold'>{item?.name}</h2>
              <h2 className='text-primary'>{item?.contactPerson}</h2>
              <h2 className='text-gray-600'>{item?.address}</h2>
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SuggestedBussiness