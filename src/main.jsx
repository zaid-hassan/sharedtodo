import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route, Navigate
} from "react-router-dom";
import './index.css'
import Layout from './Layout';
import { Home, Dashboard, Project, Todo, Inbox } from '@/components/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='project' element={<Project />} />
      <Route path='todo' element={<Todo />} />
      <Route path='inbox' element={<Inbox />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
