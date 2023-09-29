import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {firstname, lastname, email}

        EmployeeService.saveEmployee(employee).then((response) => {
            navigate('/employee');
        }).catch(error => {
            console.log(error);
        })
    }

  return (
    <div>
        <br />
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter First Name' 
                                    name='firstName' 
                                    className='form-control' 
                                    value={firstname}
                                    onChange={(e) => setfirstname(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter Last Name' 
                                    name='lastName' 
                                    className='form-control' 
                                    value={lastname}
                                    onChange={(e) => setlastname(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter Email' 
                                    name='email' 
                                    className='form-control' 
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveEmployee(e)}>Save Employee</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent