import "./App.css";
import Aside from "./Components/Aside/Aside";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [course, setCourse] = useState([]);
  const [carts, setCarts] = useState([]);
  const [creditTime, setCreditTime] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingTime, setRemainingTime] = useState(20);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleAdd = (course) => {
    const isExist = carts.find((cart_title) => cart_title.id === course.id);

    let countTime = course.credit_hrs;
    let countPrice = course.price;

    if (isExist) {
      return toast.warn('This course is already added!!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      carts.forEach((time) => {
        countTime = countTime + time.credit_hrs;
      });

      carts.forEach((newPrice) => {
        countPrice = countPrice + newPrice.price;
      });

      const totalRemainingTime = 20 - countTime;
      
      if (totalRemainingTime < 0) {
        return toast.warn('Your credit is over now!!!!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

      setCarts([...carts, course]);
      setCreditTime(countTime);
      setTotalPrice(countPrice);
      setRemainingTime(totalRemainingTime);
    }
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto p-5 ">
        <div className="flex flex-col md:flex-row gap-6">
          <Courses course={course} handleAdd={handleAdd}></Courses>
          <Aside
            creditTime={creditTime}
            totalPrice={totalPrice}
            remainingTime={remainingTime}
            carts={carts}
          ></Aside>
        </div>
        <ToastContainer />
      </main>
    </>
  );
}

Courses.propTypes = {
  course: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default App;
