import React from 'react'
import style from './Home.module.css'



export default function Home() {
  return (
    <>
      <div className="bg_green text-white flex flex-col items-center justify-center py-20">
        <img src='src/assets/avataaars.svg' alt="avataaar Img" className='w-60' />
      <h2 className='text-4xl font-bold pt-5'>Start Framework</h2>
      <div className={`my-10`}> <span className={`line bg-white`}></span><i class={`fa-solid fa-star text-2xl px-5 text-white`}></i> <span className={`line bg-white`}></span></div>
       <p className='text-lg'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}
