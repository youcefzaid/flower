import React from "react";
import Bouquet from "../components/Bouquet";

function Bouquets({ bouquets, onLike }) {
  return (
    <div className="row">
      {bouquets.map((bouquet) => (
        <div key={bouquet.id} className="col-md-4 mb-4">
          <Bouquet bouquet={bouquet} onLike={onLike} />
        </div>
      ))}
    </div>
  );
}

export default Bouquets;
