import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    useEffect(() => {
      EmployeeService.getAllEmployees().then((response) => {
        setEmployees(response.data);
      }).catch(error => {
        console.log(error);
      })
    }, [])
    

  return (
    <div className='container'>
        <h2 className='text-center'>List Employees</h2>
        <Link to="/add" className='btn btn-primary mb-2'>Add Employee</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Employees ID</th>
                    <th>Employees First Name</th>
                    <th>Employees Last Name</th>
                    <th>Employees Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent