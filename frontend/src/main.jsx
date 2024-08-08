import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/globals.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <App />
        <GlobalStyle />
    </>
)
