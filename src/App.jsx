import "./App.css";
import Aside from "./Components/Aside/Aside";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";



function App() {
  const [course, setCourse] = useState([]);
  const [carts, setCarts] = useState([]);
  const [creditTime, setCreditTime] = useState(0);
  const [addPrice, setAddPrice] = useState(0);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleAdd = (course) => {
    const newCard = [...carts, course];
    setCarts(newCard);
  };

  const handelAddTime = (credit_hrs, price) => {
    console.log('work', credit_hrs);
    setCreditTime(creditTime + credit_hrs)

    setAddPrice(addPrice + price);
  }

  return (
    <>
      <Header></Header>
      <main className="container mx-auto p-5 lg:p-0">
        <div className="flex flex-col md:flex-row gap-6">
          <Courses course = {course}
          handleAdd = {handleAdd}
          handelAddTime = {handelAddTime}></Courses>
          <Aside 
          carts = {carts}
          addPrice = {addPrice}
          creditTime = {creditTime}></Aside>
        </div>
      </main>
    </>
  );
}

Courses.propTypes = {
  course: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired
};

export default App;
