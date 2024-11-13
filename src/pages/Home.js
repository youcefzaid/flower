import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-4 fw-bold">Bienvenue chez Fleuriste</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Découvrez notre sélection de bouquets magnifiques pour toutes les
            occasions.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/bouquets" className="btn btn-primary btn-lg px-4 gap-3">
              Voir nos bouquets
            </Link>
            <Link
              to="/fleurs"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Découvrir nos fleurs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
