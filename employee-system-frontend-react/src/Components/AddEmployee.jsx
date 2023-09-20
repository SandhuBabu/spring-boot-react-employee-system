import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveEmployee } from '../services/EmployeeService'

const AddEmployee = () => {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        emailId: "",
        firstName: "",
        lastName: ""
    });

    const handleChange = e => {
        const { name, value } = e.target
        setEmployee(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSave = async (e) => {
        e.preventDefault()
        if(
            employee.firstName.trim() === "" ||
            employee.lastName.trim() === "" ||
            employee.emailId.trim() === ""
        ) return
        
        saveEmployee(employee).then(res => {
            navigate("/")
        }).catch(err => { console.log(err); })
    };

    const handleClear = async () => {
        setEmployee({
            emailId: "",
            firstName: "",
            lastName: ""
        })
    };

    return (
        <form>
            <div className='flex max-w-2xl mx-auto shadow border-b'>
                <div className='p-8 w-full'>
                    <div className='font-thin text-2xl tracking-wider'>
                        <h1>Add New Employee</h1>
                    </div>
                    <div className='items-center justify-center h-14 w-full my-7'>
                        <label className='block text-gray-500 text-sm font-normal'>First Name</label>
                        <input
                            type="text"
                            name='firstName'
                            value={employee.firstName}
                            onChange={(e) => handleChange(e)}
                            className="h-10 border w-full mt-2 px-2"
                            required
                        />
                    </div>
                    <div className='items-center justify-center h-14 w-full my-7'>
                        <label className='block text-gray-500 text-sm font-normal'>Last Name</label>
                        <input
                            type="text"
                            name='lastName'
                            value={employee.lastName}
                            onChange={(e) => handleChange(e)}
                            className="h-10 border w-full mt-2 px-2"
                            required
                        />
                    </div>
                    <div className='items-center justify-center h-14 w-full my-7'>
                        <label className='block text-gray-500 text-sm font-normal'>Email</label>
                        <input
                            type="email"
                            name='emailId'
                            value={employee.emailId}
                            onChange={(e) => handleChange(e)}
                            className="h-10 border w-full mt-2 px-2"
                            required
                        />
                    </div>
                    <div className='flex items-center justify-center h-14 w-full my-7'>
                        <button type='submit' onClick={handleSave} className='rounded w-full text-white mt-3 bg-green-400 hover:bg-green-700 px-7 py-2'>Save</button>
                        <button type='reset' onClick={handleClear} className='rounded w-full text-white mt-3 bg-red-400 hover:bg-red-700 px-7 ml-7 py-2'>Clear</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddEmployee