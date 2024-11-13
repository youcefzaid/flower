import React from "react";

const Bouquet = ({ bouquet, onLike }) => {
  if (!bouquet) {
    return null;
  }

  return (
    <div className="card" style={{ width: "18rem", marginBottom: "20px" }}>
      <img
        src={bouquet.image}
        className="card-img-top"
        alt={bouquet.nom}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/150";
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <p className="card-text">Prix: {bouquet.prix.toFixed(2)} €</p>
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
