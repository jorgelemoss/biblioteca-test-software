import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

// User
export const login = (data) => api.post('/api/auth', data)
export const register = (data) => api.post('/api/user', data)
export const get_profile = () => api.get('/api/me')

export const logout = () => api.get('/api/logout')

// Admin
export const remove_user = (data) => api.delete('/api/user-remove', { data })
