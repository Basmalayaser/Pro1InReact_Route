import React from 'react'
import style from './Portfolio.module.css'
import img1 from './../../assets/img1.png'
import img2 from './../../assets/img2.png'
import img3 from './../../assets/img3.png'


export default function Portfolio() {
  return (
    <>
       <div className={`text-center text_gray`}>
          <h2 className='text-4xl font-bold pt-14'>Portfolio component</h2>
          <div className={`my-10`}> <span className={` ${style.line}`}></span><i class={`fa-solid fa-star text-2xl px-5`}></i> <span className={`${style.line}`}></span></div>
          <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-8 px-40 py-10">

            <div className="img   relative overflow-hidden rounded-xl">
            <img src={img1} alt=""  className='w-full rounded-xl'/>
            <div className="layer absolute inset-0 bg-[rgba(26,188,156,0.90)] opacity-0 hover:opacity-100 transition duration-200 ease-in flex items-center justify-center">
                 <i class="fa-solid fa-plus text-white text-9xl"></i>
            </div>
            </div>

            <div className="img   relative overflow-hidden rounded-xl">
            <img src={img2} alt=""  className='w-full rounded-xl'/>
            <div className="layer absolute inset-0 bg-[rgba(26,188,156,0.90)] opacity-0 hover:opacity-100 transition duration-200 ease-in flex items-center justify-center">
                 <i class="fa-solid fa-plus text-white text-9xl"></i>
            </div>
            </div>

            <div className="img   relative overflow-hidden rounded-xl">
            <img src={img3} className='w-full rounded-xl'/>
            <div className="layer absolute inset-0 bg-[rgba(26,188,156,0.90)] opacity-0 hover:opacity-100 transition duration-200 ease-in flex items-center justify-center">
                 <i class="fa-solid fa-plus text-white text-9xl"></i>
            </div>
            </div>

            <div className="img   relative overflow-hidden rounded-xl">
            <img src={img3} alt=""  className='w-full rounded-xl'/>
            <div className="layer absolute inset-0 bg-[rgba(26,188,156,0.90)] opacity-0 hover:opacity-100 transition duration-200 ease-in flex items-center justify-center">
                 <i class="fa-solid fa-plus text-white text-9xl"></i>
            </div>
            </div>

            <div className="img   relative overflow-hidden rounded-xl">
            <img src={img2} alt=""  className='w-full rounded-xl'/>
            <div className="layer absolute inset-0 bg-[rgba(26,188,156,0.90)] opacity-0 hover:opacity-100 transition duration-200 ease-in flex items-center justify-center">
                 <i class="fa-solid fa-plus text-white text-9xl"></i>
            </div>
            </div>

            <div className="img   relative overflow-hidden rounded-xl">
            <img src={img1} alt=""  className='w-full rounded-xl'/>
            <div className="layer absolute inset-0 bg-[rgba(26,188,156,0.90)] opacity-0 hover:opacity-100 transition duration-200 ease-in flex items-center justify-center">
                 <i class="fa-solid fa-plus text-white text-9xl"></i>
            </div>
            </div>
           
          </div>
       </div>
    </>
  )
}
