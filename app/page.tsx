"use client"

import Hero from "./_componenets/Hero";
import Categories from "./_componenets/Categories";
import { getBusinessList, getCategory } from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import {  Business, BusinessListResponse, HomeServiceCategory } from "@/types";
import BussinessList from "./_componenets/BussinessList";

export default function Home() {
  const[categoryList,setCategoryList]=useState<HomeServiceCategory[]>([])
  const[businessList,setBusinessList]=useState<Business[]>([])

  useEffect(()=>{
    getCategoryList()
    getAllBussinessList()
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

  const getAllBussinessList=async()=>{
    try {
      const response = await getBusinessList() as { businessLists: Business[] }    
       setBusinessList(response?.businessLists)
      
    } catch (error) {
      console.log("something went wrong");
    }
  }

  
  return (
  <div>
   <Hero/>
   <Categories categoryList={categoryList}/>
   <BussinessList businessList={businessList} title={'Popular Bussiness'}/>
  </div>
  );
}
