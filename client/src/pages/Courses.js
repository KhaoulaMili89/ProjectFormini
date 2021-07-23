import React , {useEffect} from 'react'
import {useSelector} from 'react-redux'
import CoursesCard from '../components/Courses/CoursesCard'
import {useDispatch} from 'react-redux'
import {get_Course,get_Course_by_Instructor} from '../actions/courseAction'
import AddCourseModal from '../components/Courses/AddCourseModal'


const Courses = () => {
    const id = useSelector(state => state.authReducer.user._id)

    const dispatch = useDispatch();
    useEffect(() => {
       // dispatch( get_Course_by_Instructor(id) );
        dispatch( get_Course() );
    },[]);

    const courses = useSelector( (state) => state.courseReducer.courses)
    return (

        <div> 
            <h1 style={{  alignText:'center'}}>All Courses</h1>
           <p style={{ display:'flex', alignContent:'center' ,flexWrap: 'wrap'}}>
         {courses && courses.map((course) => <CoursesCard key = {course._id} course = {course} />)} </p>
              <AddCourseModal/>
       </div>
      
    );
};

export default Courses;