import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-96'>
      <h2 className='text-lg font-bold mb-4 ml-[110px] text-[38px] '>Login</h2>
        
      <form >
          <div className='mb-4'>
            <label htmlFor="username" className='block text-gray-700'>Username</label>
            <input type="text" placeholder="Enter username" className='w-full px-3 py-2 border' />
          </div>
          
          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700'>Password</label>
            <input type="password" placeholder="Enter Password" className='w-full px-3 py-2 border'  />
          </div>
          <button className='w-full bg-green-600 text-white py-2' >submit</button>
        </form>

        <div className='mt-4 text-[18px] text-blue-500 text-center'><i className="ri-line-line"><a href="register" >back</a></i></div>
          </div>

        </div>
  )
}

export default Login
