import Image from "next/legacy/image";
import React from "react";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transfrom duration-200 ease-out ">
      <div className="relative h-16 w-16">
        <Image
          layout="fill"
          alt="imgsmallcard"
          className="rounded-lg"
          src={img}
        />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance} en voiture</h3>
      </div>
    </div>
  );
}

export default SmallCard;
