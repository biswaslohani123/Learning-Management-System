import React from 'react'
import { assets } from '../../assets/assets'
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>Trusted by learners from</p>
     
     <div className='mx-auto max-w-4xl overflow-hidden'>
      <Marquee>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
        <img src={assets.microsoft_logo} alt="" className='w-20 md:w-28' />
        <img src={assets.walmart_logo} alt="" className='w-20 md:w-28' />
        <img src={assets.accenture_logo} alt="" className='w-20 md:w-28' />
        <img src={assets.adobe_logo} alt="" className='w-20 md:w-28' />
        <img src={assets.paypal_logo} alt="" className='w-20 md:w-28' />
      </div>
      </Marquee>
     </div>

    </div>
  )
}

export default Companies
