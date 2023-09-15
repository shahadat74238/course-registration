import PropTypes from "prop-types";

const Aside = ({ carts, creditTime, totalPrice, remainingTime }) => {
  return (
    <div className="lg:w-1/4">
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-[#2F80ED] text-lg font-bold">
          Credit Hour Remaining {remainingTime} hr
        </h2>
        <hr className="my-4" />
        <div>
          <h1 className="text-[#1C1B1B] text-xl font-bold mb-5">Course Name</h1>
            {carts.map((cart, idx) => (
              <div key={cart.id}>
                <h4  className="text-[#1C1B1B99]">
                {idx + 1}. {cart.courseTitle}
              </h4>
              </div>
            ))}
        </div>
        <hr className="my-4" />
        <h2 className="text-[#1C1B1BCC] font-medium">
          Total Credit Hour: {creditTime} 
        </h2>
        <hr className="my-4" />
        <h2 className="text-[#1C1B1BCC] font-semibold">
          Total Credit Hour: {totalPrice}
        </h2>
      </div>
    </div>
  );
};

Aside.propTypes = {
  carts: PropTypes.array.isRequired,
  creditTime: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  remainingTime: PropTypes.number.isRequired
};

export default Aside;
