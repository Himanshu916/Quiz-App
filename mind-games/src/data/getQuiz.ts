import axios, { AxiosError } from "axios";
import {Quiz} from "./quiz.types";

type ServerError = {
    success:boolean
    errorMessage:string
}
export async function getQuiz(category:string)
{
    try{
        const {data} = await axios.get<Quiz>(`https://sleepy-plateau-55213.herokuapp.com/${category.toLowerCase()}-quiz`);
        console.log(data)
        return data
    }
    catch(error)
    {
        if(axios.isAxiosError(error))
        {
            const ServerError = (error as AxiosError<ServerError>)
            if(ServerError && ServerError.response)
            {
                return ServerError.response.data
            }

        }
        return {success:false,errorMessage:"something went wrong"}
    }
}

