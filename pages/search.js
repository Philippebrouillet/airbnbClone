import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Router from "next/router";
import { format } from "date-fns";
import { searchData } from "@/Data/searchData";
import InfosCard from "@/components/InfosCard";
import Mapee from "@/components/Mapee";

function search() {
  const { location, startDate, endDate, numberOfGuest } = Router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const placeHolder = `${location} / ${range} / ${numberOfGuest}`;

  return (
    <div>
      <Header placeHolder={placeHolder} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6 ">
          <p className="text-xs">
            300+ Logements - {range} - pour {numberOfGuest}{" "}
            {numberOfGuest > 1 ? "personnes" : "personne"}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Logement à {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="buttonSearch">Cancellation flexibility</p>
            <p className="buttonSearch">Type de logement</p>
            <p className="buttonSearch">Prix</p>
            <p className="buttonSearch">Chambres et lits</p>
            <p className="buttonSearch">Plus de filtres</p>
          </div>
          <div className="flex flex-col">
            {searchData &&
              searchData.map((item, i) => (
                <InfosCard
                  key={i}
                  img={item.img}
                  location={item.location}
                  title={item.title}
                  star={item.star}
                  price={item.price}
                  total={item.total}
                  description={item.description}
                  lat={item.lat}
                  long={item.long}
                />
              ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex  xl:min-w-[600px]">
          <Mapee searchData={searchData} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;
