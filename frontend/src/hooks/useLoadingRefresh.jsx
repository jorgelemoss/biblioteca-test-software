import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '@redux/user/userSlice'
import { setAllUsers } from '@redux/user/allUsersSlice'
import { profile, allUsers } from '@api/index'

export const useLoadingRefresh = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const loadFetching = useCallback(async () => {
        try {
            const { data } = await profile()
            const { data: AllUsers } = await allUsers()
            dispatch(setAllUsers(AllUsers))
            dispatch(setAuth(data))
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }, [dispatch, setLoading])

    useEffect(() => {
        loadFetching()
    }, [loadFetching])

    return {
        loading
    }

}