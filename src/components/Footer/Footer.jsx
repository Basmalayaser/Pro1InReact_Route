import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
      
<footer>
  <div className={`bg_gray text-white text-center`}>
    <div className="grid  py-10 gap-y-5 xl:grid-cols-3">
      <div>
        <h2 className="mb-4 text-2xl font-semibold ">LOCATION</h2>
        <ul className=" text-lg ">
          <li className="mb-4">
            <a href="#" className=" ">2215 John Daniel Drive</a>
          </li>
          <li className="mb-4">
            <a href="#" className="">Clark, MO 65243</a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold ">AROUND THE WEB</h2>
        <ul className=" text-lg ">
          <li className="mb-4">
            <a href="#" className=" "> 
              <span className='inline-block border border-white rounded-full me-2'><i className="fa-brands fa-facebook  p-3 "></i></span>
              <span className='inline-block border border-white rounded-full me-2'><i className="fa-brands fa-twitter  p-3 "></i></span>
              <span className='inline-block border border-white rounded-full me-2'><i className="fa-brands fa-linkedin-in p-3"></i></span>
              <span className='inline-block border border-white rounded-full '><i className="fa-solid fa-globe p-3 "></i></span>
            
             </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold ">ABOUT FREELANCER</h2>
        <ul className=" text-lg ">
          <li className="mb-4">
            <a href="#"><p className='pe-5'>Freelance is a free to use, licensed Bootstrap theme created by Route</p></a>
          </li>
        </ul>
      </div>
    </div>

    </div>
   <div className="text-center bg-[rgb(26,37,47)] py-8 text-white ">
    <p>Copyright © Your Website 2021</p>
   </div>
</footer>


    </>
  )
}
