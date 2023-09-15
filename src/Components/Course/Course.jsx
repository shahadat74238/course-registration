import PropTypes from "prop-types";
import { BsBook, BsCurrencyDollar } from 'react-icons/bs';

const Course = ({ course, handleAdd, handelAddTime }) => {
  const { courseTitle, courseImg, description, price, credit_hrs } = course;

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="w-full mb-4">
        <img className="w-full rounded-lg" src={courseImg} alt="Loading img" />
      </div>
      <div>
        <h2 className="text-[#1C1B1B] text-base font-semibold mb-3">
          {courseTitle}
        </h2>
        <p className="text-sm font-normal text-[#1C1B1B99] mb-3">
          {description}
        </p>
        <div className="flex justify-between">
          <h3 className="font-medium text-base text-[#1C1B1B99]">
           <BsCurrencyDollar className="inline text-[#1C1B1B] text-xl"></BsCurrencyDollar>Price : {price} 
          </h3>
          <h3 className="font-medium text-base text-[#1C1B1B99] mb-5">
            <BsBook className="inline text-[#1C1B1B] text-xl"></BsBook> Credit : {credit_hrs}hrs
          </h3>
        </div>
        <button
          onClick={() => {handleAdd(course); handelAddTime(credit_hrs, price ) }}
          className="w-full py-2 text-white rounded-md bg-[#2F80ED]"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handelAddTime: PropTypes.func.isRequired

};

export default Course;
