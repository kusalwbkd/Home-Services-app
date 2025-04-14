export type HomeServiceCategory = {
    id: string;
    name: string;
    bgColor: {
      hex: string;
    };
    icon: {
      url: string;
    };
  };
  
export type categoryList = {
    categoryList: HomeServiceCategory[];
  };
  

  export interface BusinessCategory {
    name: string;
  }
  
  export interface BusinessImage {
    url: string;
  }
  
  export interface Business {
    id: string;
    name: string;
    about: string;
    address: string;
    contactPerson: string;
    images: BusinessImage;
    gallery:BusinessImage[]|null
    category: BusinessCategory | null;
  }
  
  export interface BusinessListResponse {
    businessLists: Business[];
  }
  

  export type BusinessList={
    businessList:Business[]
  }
  
  export type BookingProp = {
    id: string
    time: string
  }
  

  export type BookingQueryBusiness = {
    address: string;
    contactPerson: string;
    bookingStatus:string
    images: {
      url: string;
    };
    name: string;
  };
  
  export type BookingQueryItem = {
    id: string;
    date: string;
    time: string;
    bookingStatus:string
    businessList: BookingQueryBusiness[];
  };
  
  export type BookingQueryResponse = {
    bookings: BookingQueryItem[];
  };

  