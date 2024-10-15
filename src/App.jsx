import React from 'react'
import { Navbar } from './components/components'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className="dark">
            <Navbar />
            <div className="p-4 sm:ml-64">
                <Outlet />
            </div>
        </div>
    )
}

export default App