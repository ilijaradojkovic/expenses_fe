import { GET_LOGGED_USER_API_URL } from "../constants/API"

export const getUser=()=>{
    try{

        const response=api.get(`${GET_LOGGED_USER_API_URL}`,)
        console.log(response)

    }catch(error){

    }
}