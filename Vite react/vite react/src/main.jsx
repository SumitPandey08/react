import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Luffy from './Luffy.jsx'



function MyApp() {
  return (
    <div>
    <h1>Custom App</h1>
    </div>
  ) ;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <MyApp/>
    <App/>
    <Luffy/>
  

    </>
  </StrictMode>,
)
