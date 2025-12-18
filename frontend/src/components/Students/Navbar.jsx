import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';


const Navbar = () => {

  const {isEducator} = useContext(AppContext)
  const isCourseList = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk();
  const {user} = useUser();
  const navigate = useNavigate()



  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseList ? 'bg-white' : 'bg-blue'}`}>

      <Link to='/'>
      <img src={assets.logo} alt="logo" className='w-28 lg:w-32 cursor-pointer ' />
      </Link>
      <div className='hidden md:flex items-center gap-5 text-gray-500 cursor-pointer '>

        <div className='flex items-center gap-5 '>

          { user && <>
            
            <button onClick={() => {navigate('/educator')}} className='cursor-pointer hover:text-blue-500'>{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
            |
            <Link to='/my-enrollments'>My Enrollments</Link>

            </>
          }
        </div>

       { user ? <UserButton/> :

         <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2.5 rounded-full cursor-pointer transition-all hover:scale-105 duration-300'>Create Account</button>

       }

      </div>

      {/* for Phone Screen */}

      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
          <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
            {
              user && <> <button onClick={() => {navigate('/educator')}} className='cursor-pointer hover:text-blue-500'>{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
            |
            <Link to='/my-enrollments'>My Enrollments</Link></>
            }
  
          </div>
          {
            user ? <UserButton/> :
          <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="" /></button>
          }
          
      </div>

    </div>
  )
}

export default Navbar
