import React from 'react'
import Hero from '../../components/Students/Hero'
import CoursesSection from '../../components/Students/CoursesSection'



const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <CoursesSection/>
      
    </div>
  )
}

export default Home
