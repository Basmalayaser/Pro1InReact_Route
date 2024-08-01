import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return (
    <>
    <div className="text-center">
    <h2 className='text-4xl font-bold pt-10'>Contact component</h2>
      <div className={`my-10`}> <span className={`line`}></span><i class={`fa-solid fa-star text-2xl px-5`}></i> <span className={`line`}></span></div>

    </div>

<form className="w-[50%] mx-auto">
  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="First_name" id="First_name" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[rgb(26,188,156)] focus:outline-none focus:ring-0 focus:border-[rgb(26,188,156)] peer" placeholder=" " required />
    <label htmlFor="First_name" className=" absolute text-xl peer-focus:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[rgb(26,188,156)] peer-focus:dark:text-[rgb(26,188,156)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="number" name="userAge" id="userAge" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[rgb(26,188,156)] focus:outline-none focus:ring-0 focus:border-[rgb(26,188,156)] peer" placeholder=" " required />
    <label htmlFor="userAge" className=" absolute text-xl peer-focus:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[rgb(26,188,156)] peer-focus:dark:text-[rgb(26,188,156)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="userEmail" id="userEmail" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[rgb(26,188,156)] focus:outline-none focus:ring-0 focus:border-[rgb(26,188,156)] peer" placeholder=" " required />
    <label htmlFor="userEmail" className=" absolute text-xl peer-focus:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[rgb(26,188,156)] peer-focus:dark:text-[rgb(26,188,156)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="userPassword" id="userPassword" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[rgb(26,188,156)] focus:outline-none focus:ring-0 focus:border-[rgb(26,188,156)] peer" placeholder=" " required />
    <label htmlFor="userPassword" className=" absolute text-xl peer-focus:text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[rgb(26,188,156)] peer-focus:dark:text-[rgb(26,188,156)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
  </div>
  <button type="submit" className="text-white bg-[rgb(26,188,156)] hover:bg-[rgb(26,188,156)] focus:ring-4 focus:outline-none focus:ring-[rgb(40,203,171)] font-medium rounded-lg text-xl w-full sm:w-auto my-7 px-14 py-4 dark:bg-[rgb(26,188,156)] dark:hover:bg-[rgb(26,188,156)] dark:focus:ring-[rgb(26,188,156)]">Submit</button>
</form>


    </>
  )
}
