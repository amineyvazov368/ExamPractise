import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:5050/api/";

export const footAPI = createApi({
    reducerPath: 'footApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getFoot:builder.query({
            query:()=>`products`
        }),
        // delete
    deleteFoot:builder.mutation({
        query:(id)=>({
          url:  `products/${id}`,
        method:"DELETE"
        })
    }),
    //get id
getFootById:builder.mutation({
    query:(id)=>({
        url:`products/${id}`,
        method:"GET"
    })
}),
    //post
    postFoot:builder.mutation({
        query:(newFoot)=>({
            url:`products`,
            body:newFoot,
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              }
        })
    })
    })
})
export const { useGetFootQuery, useDeleteFootMutation, usePostFootMutation}=footAPI