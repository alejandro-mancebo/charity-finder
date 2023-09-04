// import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Header } from "../src/components/Header"
import Home from './pages/HomePage'
import Favorites from './pages/Favorites'
import CharityDetail from './pages/CharityDetail'

import './App.css'

const Dashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  { path: "/", element: <Dashboard />, children: [{ path: '/', element: <Home /> }] },
  { path: "/favorites", element: <Dashboard />, children: [{ path: "/favorites", element: <Favorites /> }] },
  { path: "/charity-detail", element: <Dashboard />, children: [{ path: "/charity-detail", element: <CharityDetail /> }] },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
