import axios from "axios";
import { toast } from "react-toastify";

export async function makeRequest(url, method = 'get', requestData = null, toastData = null) {
    try {
        const { data } = await axios[method](url, requestData)

        if(toastData) {
            if(toastData.type) {
                toast[toastData.type](toastData.message)
            } else {
                toast(toastData.message)
            }
        }

        return data
    } catch (error) {
        toast.error('Произошла внутренняя ошибка')
        console.error({ error })
    }
}