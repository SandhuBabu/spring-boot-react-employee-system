import React from 'react'
import Navbar from './Components/Navbar'
import AddEmployee from './Components/AddEmployee'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListEmployees from './Components/ListEmployees'
import EditEmployee from './Components/EditEmployee'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' index element={<ListEmployees />} />
        <Route path='/addEmployee' element={<AddEmployee />} />
        <Route path='/edit/:id' element={<EditEmployee />} />
      </Routes>
    </Router>
  )
}

export default App