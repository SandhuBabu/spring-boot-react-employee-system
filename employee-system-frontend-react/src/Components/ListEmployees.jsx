import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteEmployee, getEmployees } from '../services/EmployeeService';
import EmployeeTableBody from './EmployeeTableBody';

const ListEmployees = () => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            getEmployees()
                .then(res => setEmployees(res.data))
                .catch(err => console.log(err))
        }
        fetchData();
        setLoading(false);
    }, [])

    const handleDelete = (id) => {
        deleteEmployee(id).then(res => {
            if(res.data.deleted === true) {
                const newList = employees.filter(emp => emp.id !== id)
                setEmployees(newList);
            }
        }).catch(err => console.log(err))
    }

    if (loading)
        return <p className='h-96 mt-20 text-center text-lg '>Loading...</p>

    return (
        <div className='container mx-auto my-8'>
            <Link to="/addEmployee" className='ml-10 bg-blue-400 text-white px-5 py-2 rounded-md hover:bg-blue-500'>Add Employee</Link>
            <div className='flex px-10 mt-10'>
                <table className='w-full'>
                    <thead className='h-12 bg-gray-100 font-medium text-gray-500 uppercase tracking-wider'>
                        <tr>
                            <td className='pl-2'>Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td className='text-right pr-6'>Action</td>
                        </tr>
                    </thead>

                    <tbody>
                        {<EmployeeTableBody employees={employees} handleDelete={handleDelete} />}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployees