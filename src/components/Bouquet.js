import React from "react";

const Bouquet = ({ bouquet, onLike }) => {
  return (
    <div className="card h-100">
      <img
        src={bouquet.image}
        className="card-img-top"
        alt={bouquet.nom}
        style={{ height: "full", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <p className="card-text">
          <strong>Prix: {bouquet.prix.toFixed(2)} €</strong>
        </p>
        <button
          className={`btn ${
            bouquet.liked ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={() => onLike(bouquet.id)}
        >
          {bouquet.liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
};

export default Bouquet;
