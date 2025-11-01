import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    start: "",
    end: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.start || !formData.end) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    // Save search filters temporarily
    localStorage.setItem("searchDetails", JSON.stringify(formData));

    // Redirect to available cars page
    navigate("/available");
  };

  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
        style={{
          backgroundImage:
            "url('https://cdn-ds.com/blogs-media/sites/177/2024/05/21140446/Texting-while-driving-A_b.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight">
          ONE-STOP CAR RENTAL SERVICE
        </h3>
        <p className="text-lg md:text-xl mt-2">
          Find The Right Car For Every Occasion
        </p>

        <button
          onClick={() => navigate("/cars")}
          className="text-yellow-400 mt-4 font-semibold border-b-2 border-yellow-400 hover:text-white hover:border-white transition-all"
        >
          ALL CARS &gt;&gt;
        </button>
      </div>

      {/* Booking Box */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 mt-10 bg-[#001F3F]/90 backdrop-blur-md w-11/12 md:w-3/4 lg:w-2/3 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-5 gap-3 p-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-md text-black w-full bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 rounded-md text-black w-full bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="date"
          name="start"
          value={formData.start}
          onChange={handleChange}
          className="p-3 rounded-md text-black w-full bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="date"
          name="end"
          value={formData.end}
          onChange={handleChange}
          className="p-3 rounded-md text-black w-full bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md py-3 transition-all"
        >
          FIND CAR
        </button>
      </form>
    </section>
  );
};

export default Hero;
