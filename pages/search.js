import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function search() {
  return (
    <div>
      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6 ">
          <p className="text-xs">300+ Logements pour 5 personnes</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Logement</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="buttonSearch">Cancellation flexibility</p>
            <p className="buttonSearch">Type de logement</p>
            <p className="buttonSearch">Prix</p>
            <p className="buttonSearch">Chambres et lits</p>
            <p className="buttonSearch">Plus de filtres</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;
