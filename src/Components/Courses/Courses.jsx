import PropTypes from "prop-types";
import Course from "../Course/Course";
const Courses = ({course, handleAdd}) => {
  
  return (
    <div className="lg:w-3/4 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {course.map((course) => (
        <Course key={course.id}
         handleAdd = {handleAdd}
         course={course}></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  course: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired, 
};

export default Courses;
