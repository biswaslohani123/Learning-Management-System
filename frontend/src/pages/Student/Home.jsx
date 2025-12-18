import React from 'react'
import Hero from '../../components/Students/Hero'
import CoursesSection from '../../components/Students/CoursesSection'
import Testomonial from '../../components/Students/Testomonial'



const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <CoursesSection/>
      <Testomonial/>
      
    </div>
  )
}

export default Home
