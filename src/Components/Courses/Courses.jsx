import PropTypes from "prop-types";
import Course from "../Course/Course";
const Courses = ({course, handleAdd, handelAddTime}) => {
  
  return (
    <div className="lg:w-3/4 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {course.map((course) => (
        <Course key={course.id}
         handleAdd = {handleAdd}
         handelAddTime = {handelAddTime}
         course={course}></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  course: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired, 
  handelAddTime: PropTypes.func.isRequired
};

export default Courses;
