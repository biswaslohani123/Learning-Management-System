import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";


export const AppContext = createContext();


export const AppContextProvider = (props) => {

    const currency = "Rs."
    const [allCourses, setAllCourses] = useState([[]]);
    const [isEducator, setIsEducator] = useState(true);

    // Fetch All Courses
    const FetchAllCourses = async () => {

        setAllCourses(dummyCourses)
    }

    //function to calculate average rating of course 
    const calculateRating = (course) => {

           if (!course || !Array.isArray(course.courseRatings) || course.courseRatings.length === 0) {
        return 0;
    }

        let totalRating = 0
        course.courseRatings.forEach(rating => {

            totalRating += rating.rating

        })
        return totalRating / course.courseRatings.length



    }

    useEffect(() => {
        FetchAllCourses()
    },[])

    const value = {
        
            currency,
            allCourses,
            calculateRating,
            isEducator,
            setIsEducator
    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}