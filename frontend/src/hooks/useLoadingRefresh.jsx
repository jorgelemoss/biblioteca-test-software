import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '../redux/user/userSlice'
import { get_profile } from '@api/index'

export const useLoadingRefresh = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                const { data } = await get_profile()
                dispatch(setAuth(data))
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return {
        loading
    }

}