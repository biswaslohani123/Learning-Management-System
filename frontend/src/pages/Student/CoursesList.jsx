import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SearchBar from '../../components/Students/SearchBar'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/Students/CourseCard'
import Footer from '../../components/Students/Footer'
import { assets } from '../../assets/assets'

const CoursesList = () => {

  const navigate = useNavigate()
  const {input} = useParams()

  const {allCourses} = useContext(AppContext)

  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
      if(allCourses && allCourses.length > 0){

        const tempCourses = allCourses.slice()

        input ? setFilteredCourse(tempCourses.filter(item => item.courseTitle.toLowerCase().includes(input.toLowerCase())))  : setFilteredCourse(tempCourses)
      }
  },[allCourses, input])

  return (
    <>
      <div className='relative md:px-36 px-8 py-20 text=left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full '>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'>
            <span onClick={() => navigate('/')} className='text-blue-600 cursor-pointer'>Home</span> / <span>Course List</span>
          </p>
          </div>

          <SearchBar data={input}/>
        </div>

        {
          input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'><p>{input}</p><img onClick={() => navigate('/course-list')} className='cursor-pointer' src={assets.cross_icon} alt="" /></div>
        }

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 mf:p-0'>
          {filteredCourse.map((course , index) => {
            return <CourseCard key={index} course={course} />
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CoursesList
