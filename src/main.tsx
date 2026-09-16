import './style.scss'
import './components/requests/moviesReq.ts'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app.tsx'

createRoot(document.getElementById("app")!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
  

