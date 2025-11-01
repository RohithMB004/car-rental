import React from "react";

const Cars = () => {
  const cars = [
    // --- Local Affordable Cars ---
    {
      name: "Maruti Alto",
      image: "https://imgd.aeplcdn.com/1056x594/n/6gouesa_1463328.jpg?q=80",
      price: "₹3500/day",
    },
    {
      name: "Tata Tiago",
      image:
        "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-cng/tata-tiago-cng-8-1744375290.jpg?w=480&q=80",
      price: "₹4000/day",
    },
    {
      name: "Hyundai i20",
      image:
        "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/150603/i20-exterior-right-front-three-quarter-13.png?isig=0&q=80",
      price: "₹4500/day",
    },
    {
      name: "Honda Amaze",
      image:
        "https://static-cdn.cars24.com/prod/new-car-cms/Honda/New-Amaze/2024/12/04/fa493e55-8d3d-4070-a0f2-4438c788d549-3-_32_.png?w=165&dpr=2.625&optimize=low&format=auto&quality=50",
      price: "₹4800/day",
    },
    {
      name: "Swift Dzire",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859508504/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      price: "₹4600/day",
    },
    {
      name: "Toyota Innova",
      image:
        "https://stimg.cardekho.com/images/expert-review/select-model/20250728_160037/930x620/2_1200x67520250728_160037.jpg",
      price: "₹6500/day",
    },
    {
      name: "Mahindra XUV700",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/10794/1758802473303/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      price: "₹7200/day",
    },
    {
      name: "Kia Seltos",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sonet/9783/1755775200530/front-left-side-47.jpg?impolicy=resize&imwidth=480",
      price: "₹7000/day",
    },
    {
      name: "Hyundai Creta",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg/1200px-2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg",
      price: "₹6800/day",
    },

    // --- Top Luxury Cars ---
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
        "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/95143/720s-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80",
      price: "₹1.6 Lakh/day",
    },
    {
      name: "Porsche 911 Turbo S",
      image:
        "https://images-porsche.imgix.net/-/media/A1F7D90A0735478897C8287B73096B1F_B71377E33D9D44D690BD26BF3FB09669_CZ26W10OX0001-911-turbo-s-side-twitter",
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
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8 text-[#001F3F]">
        Available <span className="text-[#00BFFF]">Vehicles</span>
      </h2>

      <p className="text-gray-600 mb-10">
        Choose from affordable rides to world-class luxury supercars.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl hover:scale-105 transform transition duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
            <p className="text-gray-600 mt-2 mb-4">{car.price}</p>

            {/* Call Now Button */}
            <a
              href="tel:+919876543210" // replace with your actual phone number
              className="inline-block bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition duration-300 shadow-md hover:shadow-lg"
            >
              📞 Call Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cars;
