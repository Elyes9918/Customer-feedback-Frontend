import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath : "authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://127.0.0.1:8000/"
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body:{email: string;password:string}) => {
                return {
                    url: "/api/login_check",
                    method:"post",
                    body
                }
            }
        })
    })
})


export const { useLoginUserMutation } = authApi;