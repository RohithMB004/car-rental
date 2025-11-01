import React from "react";

const Collections = () => {
  const cars = [
    {
      name: "Bugatti Chiron Super Sport",
      image:
        "https://www.hdcarwallpapers.com/download/bugatti_chiron_super_sport_laura_4k-3840x2160.jpg",
      price: "₹2.5 Lakh/day",
    },
    {
      name: "Lamborghini Aventador SVJ",
      image:
        "https://www.hdcarwallpapers.com/walls/lamborghini_aventador_svj_roadster_2019_4k-HD.jpg",
      price: "₹1.8 Lakh/day",
    },
    {
      name: "Ferrari SF90 Stradale",
      image:
        "https://ferrari-cdn.thron.com/delivery/public/thumbnail/ferrari/29a25eda-7921-4362-ba7c-ef5b2c429505/bocxuw/std/488x325/29a25eda-7921-4362-ba7c-ef5b2c429505?scalemode=auto",
      price: "₹1.5 Lakh/day",
    },
    {
      name: "Rolls-Royce Phantom",
      image:
        "https://i.ytimg.com/vi/oUxkYlZaVbI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAjgFloUQMvQETXuUKpFAOzPvCQ7A",
      price: "₹2.2 Lakh/day",
    },
    {
      name: "McLaren 720S",
      image:
        "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/95143/720s-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80&q=80",
      price: "₹1.6 Lakh/day",
    },
    {
      name: "Porsche 911 Turbo S",
      image:
        "https://images-porsche.imgix.net/-/media/F7C7808B71544A0F86D6E6865EAEC622_9271FD70E524489FBE9574966452FD9A_CZ26W10OX0001-911-turbo-s-side-open-graph",
      price: "₹1.1 Lakh/day",
    },
    {
      name: "Aston Martin DB12",
      image:
        "https://boulevard.co/wp-content/uploads/2024/09/aston-martin-db12-d1b.png",
      price: "₹1.3 Lakh/day",
    },
    {
      name: "Mercedes AMG GT Black Series",
      image:
        "https://www.europeanprestige.co.uk/blobs/stock/394/images/0a1e0cb2-45c1-4249-9564-4ea0d13c2ae1/hi4a9303.jpg?width=2000&height=1333",
      price: "₹1.4 Lakh/day",
    },
    {
      name: "BMW M8 Competition",
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/47278/m8-exterior-left-front-three-quarter.jpeg?isig=0&q=80",
      price: "₹1 Lakh/day",
    },
  ];

  return (
    <section
      id="collections"
      className="py-16 transition-colors duration-500 
                 bg-gray-100 text-center text-gray-900 
                 dark:bg-gray-950 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-8 text-[#001F3F] dark:text-[#00BFFF]">
        Top <span className="text-[#00BFFF] dark:text-white">Collections</span>
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Experience the world’s most luxurious and powerful cars.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 
                       transform transition-all duration-500 hover:scale-105 
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/30"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-lg mb-4 
                           transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {car.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{car.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
