import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">A PROPOS</h5>
        <p>Comment Airbnb fonctionne</p>
        <p>Nouvelles chambres</p>
        <p>Investisseur</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMNUNAUTE</h5>
        <p>Accessibilité</p>
        <p>Ceci n'est pas le vrai site</p>
        <p>C'est un incroyable clone</p>
        <p>Recommandation acceptée</p>
        <p>Philippe Brouillet</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOTE</h5>
        <p>Philippe Brouillet</p>
        <p>Chambres</p>
        <p>Stats</p>
        <p>Calendrier</p>
        <p>Options</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Aide</p>
        <p>Confiance & sécurité</p>
        <p>Infos</p>
        <p>Conseil</p>
        <p>Accompagnement</p>
      </div>
      <div> </div>
    </div>
  );
}

export default Footer;
