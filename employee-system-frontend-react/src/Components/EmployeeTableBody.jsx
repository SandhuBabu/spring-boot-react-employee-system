import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeTableBody = ({ employees, handleDelete }) => {

    const navigate = useNavigate();

    const editEmployee = id => {
        navigate(`/edit/${id}`)
    }

    return (
        employees.map(employee =>
            <tr key={employee.id} className='hover:bg-neutral-200 rounded h-10 whitespace-nowrap text-sm'>
                <td className='pl-2'>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td className='text-right pr-6'>
                    <div className='w-full flex justify-end gap-3'>
                        <button
                            className='text-blue-700 font-semibold'
                            onClick={() => editEmployee(employee.id)}
                        >Edit</button>
                        <button
                            className='text-red-700 font-semibold'
                            onClick={() => handleDelete(employee.id)}
                        >
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        )
    )
}

export default memo(EmployeeTableBody)