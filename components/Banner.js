import Image from "next/legacy/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:-[600px] 2xl:-[700px]">
      <div>
        <Image
          src="https://links.papareact.com/0fm"
          alt="imgbanner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">
          Vous ne savez pas ou aller? Parfait{" "}
        </p>
        <button className="text-purple-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 cursor-pointer hover:shadow-xl active:scale-90 transition duration-150">
          Je suis flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
