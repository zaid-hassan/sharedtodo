import React from 'react'
import { NavLink } from 'react-router-dom'

function Todo() {
  return (
    <div className="p-4 bg-blue-200">
            <div className="p-4 border-2 bg-red-600 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <NavLink to="/todos" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</NavLink>
            </div>
        </div>
  )
}

export default Todo