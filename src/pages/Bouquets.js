import React from "react";
import Bouquet from "../components/Bouquet";

const Bouquets = ({ bouquets, onLike }) => {
  return (
    <div className="container">
      <h2 className="mb-4">Nos Bouquets</h2>
      <div className="row">
        {bouquets.map((bouquet) => (
          <div className="col-md-4 mb-4" key={bouquet.id}>
            <Bouquet bouquet={bouquet} onLike={onLike} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bouquets;
