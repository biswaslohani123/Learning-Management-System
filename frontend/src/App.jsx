import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/Student/Home'
import CoursesList from './pages/Student/CoursesList'
import CourseDetails from './pages/Student/CourseDetails'
import MyEntrollement from './pages/Student/MyEntrollement'
import Player from './pages/Student/Player'
import Loading from './components/Students/Loading'
import Educator from './pages/Educator/Educator'
import Dashboard from './pages/Educator/Dashboard'
import AddCourse from './pages/Educator/AddCourse'
import StudentEnrolled from './pages/Educator/StudentEnrolled'
import MyCourses from './pages/Educator/MyCourses'
import Navbar from './components/Students/Navbar'

const App = () => {


  const isEducatorRoute = useMatch('/educator/*')


  return (
    <div className='text-default min-h-screen bg-white'>
      {
        !isEducatorRoute && <Navbar/>
      }
      
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/course-list' element={<CoursesList/>}/>
        <Route path='/course-list/:input' element={<CoursesList/>}/>

        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollments' element={<MyEntrollement/>}/>
        <Route path='/player/:courserId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>


        {/* *********************Educator ROUTES************************** */}

        <Route path='/educator' element={<Educator/>}>

            <Route path='educator' element={<Dashboard/>}/>
            <Route path='add-course' element={<AddCourse/>}/>
            <Route path='my-course' element={<MyCourses/>}/>
            <Route path='student-enrolled' element={<StudentEnrolled/>}/>

        </Route>

      </Routes>
    </div>
  )
}

export default App
