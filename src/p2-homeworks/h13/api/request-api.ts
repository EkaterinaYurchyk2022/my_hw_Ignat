import axios from 'axios';

type PostType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}

export const RequestAPI = {
    createRequest(checked: boolean) {
        return axios.post<PostType>(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: checked})
    }
//без settings (withCredentials не нужен, API_KEY не нужен, мой сервер работает без этого)
}