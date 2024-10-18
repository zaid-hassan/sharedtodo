import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Signup, Signin, Dashboard, Todos, Todo } from './components/components.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='todos' element={<Todos />} />
      <Route path='signup' element={<Signup />} />
      <Route path='signin' element={<Signin />} />
      <Route path='todo' element={<Todo />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
