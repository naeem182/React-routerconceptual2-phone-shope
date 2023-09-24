import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyCreatedRouter from './Router/Route'

const userInfo = {
  name: "naeem",
  id: "5",
  age: 1000
}
const userid = 100;
export const GlobalContex = createContext()
export const GlobalContex2 = createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContex2.Provider value={userid}>
      <GlobalContex.Provider value={userInfo}>
        <RouterProvider router={MyCreatedRouter}></RouterProvider>
      </GlobalContex.Provider>
    </GlobalContex2.Provider>
  </React.StrictMode>,
)
