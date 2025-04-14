import {  BookingProp, BookingQueryBusiness, BookingQueryItem, BookingQueryResponse, BusinessListResponse } from "@/types"
import request, { gql, GraphQLClient } from "graphql-request"

const MASTER_URL = `https://ap-south-1.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_MASTER_URL_KEY}/master`

export const getCategory = async () => {
  const query = gql`
    query MyQuery {
  categories {
    bgColor {
      hex
    }
    icon {
      url
    }
    name
    id
  }
}
    `

  const result = await request(MASTER_URL, query)

  return result
}

export const getBusinessList = async () => {
  const query = gql`
  query MyQuery {
  businessLists {
    about
    address
    contactPerson
    id
    images {
      url
    }
    name
    category {
      name
    }
  }
}
  `
  const result = await request(MASTER_URL, query)

  return result
}

export const getBussinessByCategory = async ({ category }: { category: string }): Promise<BusinessListResponse> => {
  const query = gql`
   query MyQuery {
  businessLists(where: {category: {name: "`+ category + `"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    id
    name
    images {
      url
    }
   
  }
}
   `
  const result = await request(MASTER_URL, query) as BusinessListResponse

  return result
}

export const getBussinessById = async ({ id }: { id: string }): Promise<BusinessListResponse> => {
  const query = gql`
      query {
        businessLists(where: { id: "${id}" }) {
          id
          name
          about
          address
          contactPerson
          images {
            url
          }
          gallery {
            url
          }
          category {
            name
          }
        }
      }
    `;

  const result = await request(MASTER_URL, query) as BusinessListResponse;
  return result;
};

export const createNewBooking = async ({
  businessId,
  date,
  time,
  userEmail,
  userName,
}: { businessId: string, date: string, time: string, userEmail: string, userName: string }) => {
  const mutation = gql`
    mutation CreateBooking {
  createBooking(
    data: {bookingStatus: booked, businessList: {connect: {id: "${businessId}"}}, date: "${date}", time: "${time}", userEmail: "${userEmail}", userName: "${userName}"}
  ) {
    id
  }
  publishManyBookings(to: PUBLISHED) {
    count
  }
}
    `

  const graphQLClient = new GraphQLClient(MASTER_URL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_MUTATION_TOKEN}`,
    },
  });
  const result = await graphQLClient.request(mutation)
  return result

}

export const GetTimeSlots = async ({
  businessId,
  date,

}: { businessId: string, date: string }): Promise<{ bookings: BookingProp[] }> => {
 
  
  const query = gql`
    query MyQuery {
  bookings(
    where: {businessList_every: {id: "${businessId}"}, date: "${date}"}
  ) {
    id
    time
  }
}
    `
    const graphQLClient = new GraphQLClient(MASTER_URL, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_MUTATION_TOKEN}`,
      },
    });
    const result = await graphQLClient.request(query) as { bookings: BookingProp[] };
    return result 

}

export const GetUserBookings=async({userEmail}:{userEmail:string}):Promise<{ bookings: BookingQueryResponse[] }>=>{
  const query=gql`
  query MyQuery {
  bookings(where: {userEmail: "${userEmail}"}) {
    date
    time
    bookingStatus
    id
    businessList {
      address
      contactPerson
      images {
        url
      }
      name
    }
  }
}
  `
  const graphQLClient = new GraphQLClient(MASTER_URL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_MUTATION_TOKEN}`,
    },
  });
  const result = await graphQLClient.request(query) as { bookings: BookingQueryResponse[] };
  return result 

}