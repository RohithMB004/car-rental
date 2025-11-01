import React from "react";
import { useNavigate } from "react-router-dom";

const AvailableCars = () => {
  const navigate = useNavigate();

  const cars = [
    {
      name: "Maruti Alto",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115751/alto-k10-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      price: "₹3500/day",
    },
    {
      name: "Hyundai i20",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/152801/i20-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      price: "₹4200/day",
    },
    {
      name: "Tata Nexon",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/158485/nexon-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      price: "₹5000/day",
    },
  ];

  const handleBook = (car) => {
    const searchDetails = JSON.parse(localStorage.getItem("searchDetails")) || {};

    const bookingDetails = {
      ...searchDetails,
      carName: car.name,
      carPrice: car.price,
      carImage: car.image,
    };

    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    alert(`✅ ${car.name} booked successfully!`);
    navigate("/bookings");
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 text-center transition-colors duration-500">
      <h2 className="text-4xl font-bold mb-8 text-[#001F3F] dark:text-[#00BFFF]">
        Available <span className="text-[#00BFFF] dark:text-white">Cars</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg dark:shadow-blue-400/10 hover:shadow-xl p-4 transition-all duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {car.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{car.price}</p>
            <button
              onClick={() => handleBook(car)}
              className="bg-[#001F3F] dark:bg-[#00BFFF] hover:bg-[#003366] dark:hover:bg-[#0099FF] text-white px-4 py-2 rounded-md font-semibold transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableCars;
