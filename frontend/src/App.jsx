import { RouterProvider } from 'react-router-dom'
import { routes } from '@routes/index'

import { useLoadingRefresh } from './hooks/useLoadingRefresh'

function App() {

    const { loading } = useLoadingRefresh()

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <RouterProvider router={routes} />
            )}
        </>
    )
}

export default App
