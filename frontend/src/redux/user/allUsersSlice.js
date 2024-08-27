import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 0,
    users: []
}

const allUsersSlice = createSlice({
    initialState,
    name: 'users',
    reducers: {
        setAllUsers: (state, action) => {
            const { status, users } = action.payload

            state.status = status
            state.users = users
        }
    }
})

export const { setAllUsers } = allUsersSlice.actions

export default allUsersSlice.reducer