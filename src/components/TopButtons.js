import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "New Delhi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Chennai",
    },
    {
      id: 4,
      title: "Kolkata",
    },
    {
      id: 5,
      title: "Bangalore",
    },
  ];

  return (
    <>
      <div className="text-start text-3xl font-signature text-white tracking-widest border-b-4">
        Weather App
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around my-6">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-white text-lg font-medium"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default TopButtons;
