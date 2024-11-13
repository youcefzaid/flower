import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center">
      <h1 className="mb-4">Bienvenue chez Fleuriste</h1>
      <p className="lead">
        Découvrez notre sélection de bouquets magnifiques pour toutes les
        occasions.
      </p>
      <Link to="/bouquets" className="btn btn-primary">
        Voir nos bouquets
      </Link>
    </div>
  );
};

export default Home;
