import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex items-center gap-7 bg-gray-800 text-white px-8'>
        <div className="h-16 flex items-center">
            <p className='font-semibold text-lg'>Employee Management System</p>
        </div>
        <div className='flex gap-6'>
          <NavLink to="/"  className="text-gray-400">Home</NavLink>
          <NavLink to="/addEmployee" className="text-gray-400">Add Employee</NavLink>
        </div>
    </header>
  )
}

export default Navbar