import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost:3333'
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {
                id: 3, name: "Ben", email: "benj.inacio03@gmail.com"
            }
        }
        const response = await api.post('/validate', {token});

        return response.data
    },
    signin: async (email: string, password: string) => {
        return {
            user: {
                id: 3, name: "Ben", email: "benj.inacio03@gmail.com"
            },
            token: '12354'
        }
        const response = await api.post('/signin', {email, password});
        
        return response.data
    },
    logout: async () => {
        return {status: true}
        const response = await api.post('/logout');

        return response.data
    }
})