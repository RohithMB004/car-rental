import React from "react";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate();
  const booking = JSON.parse(localStorage.getItem("bookingDetails"));

  if (!booking) {
    return (
      <div className="text-center text-gray-600 mt-10">
        <p>No bookings found. Please make one!</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-[#001F3F] text-white px-4 py-2 rounded-md"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const clearBooking = () => {
    localStorage.removeItem("bookingDetails");
    navigate("/");
  };

  return (
    <section className="py-12 bg-gray-50 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">
          Your <span className="text-[#00BFFF]">Booking</span>
        </h2>

        <img
          src={booking.carImage}
          alt={booking.carName}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h3 className="text-xl font-semibold">{booking.carName}</h3>
        <p className="text-gray-600 mb-2">{booking.carPrice}</p>

        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Phone:</strong> {booking.phone}</p>
        <p><strong>Start:</strong> {booking.start}</p>
        <p><strong>End:</strong> {booking.end}</p>

        <div className="flex justify-center gap-3 mt-5">
          <button
            onClick={() => navigate("/")}
            className="bg-[#001F3F] hover:bg-[#003366] text-white px-4 py-2 rounded-md"
          >
            Back to Home
          </button>
          <button
            onClick={clearBooking}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Clear Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bookings;
