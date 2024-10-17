import React, { useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const[values, setValues] =useState({
        username: '',
        email: '',
        password: ''
    })
    const handleChange =(e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/auth//register',values)
            console.log(response)
        }
        catch(err){
            console.log(err.message)
        }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-96'>
        <h2 className='text-lg font-bold mb-4 ml-[110px] text-[32px] '>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="username" className='block text-gray-700'>Username</label>
            <input type="text" placeholder="Enter username" className='w-full px-3 py-2 border' name="username" onChange={handleChange}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700'>Email</label>
            <input type="email" placeholder="Enter Email" className='w-full px-3 py-2 border'  name="email" onChange={handleChange}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700'>Password</label>
            <input type="password" placeholder="Enter Password" className='w-full px-3 py-2 border' name="password" onChange={handleChange} />
          </div>
          <button className='w-full bg-green-600 text-white py-2' onSubmit={handleSubmit}>submit</button>
        </form>
        <div className='text-center'>
        <span>Already have  account ?</span>
            <Link to='/login' className='text-blue-500'>Login</Link>
        </div>
        <div className=' text-[18px] text-blue-500 text-center'><i className="ri-line-line"><a href="#about" >Back</a></i></div>
      </div>
    </div>
  );
};

export default Register;
