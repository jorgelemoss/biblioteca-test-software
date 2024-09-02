import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

// User
export const login = (data) => api.post('/api/auth', data)
export const profile = () => api.get('/api/me')

export const logout = () => api.get('/api/logout')

// Admin
export const register = (data) => api.post('/api/user', data)
export const update = (data) => api.put('/api/user-update', data)
export const remove = (data) => api.delete('/api/user-remove', { data })
export const allUsers = () => api.get('/api/all-users')

// api.interceptors.request((config) => {
//     return config
// })