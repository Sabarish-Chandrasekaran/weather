import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-start mt-6">
        <p className="text-white text-xl font-semibold uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="grid grid-cols-5 gap-4 items-center text-white">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center shadow-md rounded-lg shadow-gray-400  border-2 p-1"
          >
            <p className="font-medium text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
