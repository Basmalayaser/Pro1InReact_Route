import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    <>
     <div className='bg_green flex flex-col items-center justify-center py-40 text-white'>
       <h2 className='text-4xl font-bold'>About component</h2>
       <div className={`my-10 ${style.star_icon}`}><i class={`fa-solid fa-star text-2xl `}></i></div>
       <div className='grid xl:grid-cols-2'>
        <p className='max-w-[600px] mx-auto  pb-10 xl:pb-0'>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        <p className='max-w-[600px] mx-auto'>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
       </div>
     </div>
    </>
  )
}
